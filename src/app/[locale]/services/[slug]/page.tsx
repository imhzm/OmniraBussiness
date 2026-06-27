import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getService, services } from "@/data/services";
import { getDict } from "@/i18n/dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { TargetCountries } from "@/components/sections/TargetCountries";
import { StartFromZero } from "@/components/sections/StartFromZero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return locales.flatMap((locale) => services.map((service) => ({ locale, slug: service.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    locale: l,
    title: t(service.title, l),
    description: t(service.excerpt, l),
    path: `/services/${slug}`,
  });
}

export default async function ServiceDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((item) => item.category === service.category && item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHero
        locale={l}
        dark
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.services, href: "/services" },
          { label: t(service.title, l) },
        ]}
        title={t(service.title, l)}
        text={t(service.excerpt, l)}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={localeHref(l, "/contact")} size="lg" arrow>
            {dict.common.bookConsultation}
          </Button>
          <Button href={localeHref(l, "/pricing")} variant="outline-light" size="lg">
            {dict.nav.pricing}
          </Button>
        </div>
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="space-y-10">
            {service.image && (
              <div className="overflow-hidden rounded-2xl border border-line shadow-card">
                <Image
                  src={service.image}
                  alt={t(service.title, l)}
                  width={1280}
                  height={720}
                  priority
                  sizes="(max-width: 900px) 100vw, 760px"
                  className="h-auto w-full object-cover"
                />
              </div>
            )}
            <Block title={dict.common.overview}>
              {service.overview.map((paragraph, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {t(paragraph, l)}
                </p>
              ))}
            </Block>

            <GridBlock title={dict.common.whoIsThisFor} items={service.audience.map((item) => t(item, l))} icon="users" />
            <GridBlock title={dict.common.keyBenefits} items={service.benefits.map((item) => t(item, l))} icon="check-circle-2" />

            <Block title={dict.common.process}>
              <div className="grid gap-4">
                {service.steps.map((step, i) => (
                  <div key={i} className="grid gap-4 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-[48px_1fr]">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                      <Icon name="check" className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{t(step.title, l)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{t(step.text, l)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <div className="grid gap-6 lg:grid-cols-2">
              <GridBlock title={dict.common.requirements} items={service.requirements.map((item) => t(item, l))} icon="file-text" />
              <GridBlock title={dict.common.deliverables} items={service.deliverables.map((item) => t(item, l))} icon="badge-check" />
            </div>

            <Block title={dict.common.faq}>
              <Accordion items={service.faqs.map((faq) => ({ title: t(faq.q, l), content: t(faq.a, l) }))} />
            </Block>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h2 className="text-xl font-bold text-navy">{t(service.title, l)}</h2>
              </div>
              <dl className="mt-6 space-y-4">
                <Detail label={dict.common.estTimeline} value={t(service.timeline, l)} icon="clock" />
                <Detail label={dict.common.bestFor} value={t(service.bestFor, l)} icon="target" />
                <Detail label={dict.common.supportType} value={t(service.supportType, l)} icon="headset" />
              </dl>
              <Button href={localeHref(l, "/contact")} className="mt-6 w-full" arrow>
                {dict.common.getStarted}
              </Button>
            </div>

            {related.length > 0 && (
              <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <h2 className="text-lg font-bold text-navy">{dict.common.relatedServices}</h2>
                <div className="mt-4 space-y-3">
                  {related.map((item) => (
                    <a
                      key={item.slug}
                      href={localeHref(l, `/services/${item.slug}`)}
                      className="flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-gold/60 hover:bg-ivory"
                    >
                      <Icon name={item.icon} className="h-4 w-4 text-gold-dark" />
                      <span className="text-sm font-semibold text-navy">{t(item.title, l)}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {service.slug === "business-setup" && (
        <StartFromZero locale={l} ctaHref="/pricing#setup" />
      )}

      <TargetCountries locale={l} />
      <FinalCTA locale={l} />
    </>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function GridBlock({ title, items, icon }: { title: string; items: string[]; icon: string }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 grid gap-3">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
            <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
            <p className="text-sm leading-relaxed text-ink">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Detail({ label, value, icon }: { label: string; value: string; icon: string }) {
  return (
    <div className="flex gap-3">
      <Icon name={icon} className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
      <div>
        <dt className="text-xs font-bold uppercase tracking-[0.12em] text-faint">{label}</dt>
        <dd className="mt-1 text-sm font-semibold leading-relaxed text-navy">{value}</dd>
      </div>
    </div>
  );
}
