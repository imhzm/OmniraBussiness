import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/data/services";
import { getSector, sectors } from "@/data/sectors";
import { getDict } from "@/i18n/dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function generateStaticParams() {
  return locales.flatMap((locale) => sectors.map((sector) => ({ locale, slug: sector.slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const sector = getSector(slug);
  if (!sector) return {};
  return pageMetadata({
    locale: l,
    title: t(sector.name, l),
    description: t(sector.short, l),
    path: `/about-kingdom/sectors/${slug}`,
  });
}

export default async function SectorDetailsPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const sector = getSector(slug);
  if (!sector) notFound();

  const relatedServices = sector.relatedServices.map(getService).filter(Boolean);
  const opportunityLabel = dict.common[sector.opportunity === "very-high" ? "veryHigh" : sector.opportunity === "high" ? "high" : "growing"];

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.aboutKingdom, href: "/about-kingdom" },
          { label: t(sector.name, l) },
        ]}
        title={t(sector.name, l)}
        text={t(sector.short, l)}
      >
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-faint px-4 py-2 text-sm font-bold text-gold-dark">
          <Icon name="trending-up" className="h-4 w-4" />
          {dict.common.opportunityLevel}: {opportunityLabel}
        </div>
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
          <article className="space-y-10">
            <div className="relative aspect-[16/8] overflow-hidden rounded-2xl shadow-card-hover">
              <Image src={sector.image} alt={t(sector.name, l)} fill sizes="(max-width: 1024px) 100vw, 70vw" className="object-cover" />
            </div>

            <TextBlock title={dict.common.overview} paragraphs={sector.overview.map((item) => t(item, l))} />
            <ListBlock title={dict.kingdom.marketDrivers} items={sector.drivers.map((item) => t(item, l))} icon="target" />
            <ListBlock title={dict.kingdom.govInitiatives} items={sector.initiatives.map((item) => t(item, l))} icon="landmark" />
            <ListBlock title={dict.kingdom.opportunities} items={sector.opportunities.map((item) => t(item, l))} icon="trending-up" />
            <ListBlock title={dict.kingdom.challenges} items={sector.challenges.map((item) => t(item, l))} icon="shield-check" />
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <Icon name={sector.icon} className="h-7 w-7 text-gold-dark" />
              <h2 className="mt-4 text-xl font-bold text-navy">{t(sector.name, l)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(sector.short, l)}</p>
              <Button href={localeHref(l, "/contact")} className="mt-6 w-full" arrow>
                {dict.common.bookConsultation}
              </Button>
            </div>

            {relatedServices.length > 0 && (
              <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <h2 className="text-lg font-bold text-navy">{dict.common.relatedServices}</h2>
                <div className="mt-4 space-y-3">
                  {relatedServices.map((service) => (
                    <a
                      key={service!.slug}
                      href={localeHref(l, `/services/${service!.slug}`)}
                      className="flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-gold/60 hover:bg-ivory"
                    >
                      <Icon name={service!.icon} className="h-4 w-4 text-gold-dark" />
                      <span className="text-sm font-semibold text-navy">{t(service!.title, l)}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}

function TextBlock({ title, paragraphs }: { title: string; paragraphs: string[] }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 space-y-4">
        {paragraphs.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-muted">
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

function ListBlock({ title, items, icon }: { title: string; items: string[]; icon: string }) {
  return (
    <section>
      <h2 className="text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
            <Icon name={icon} className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
            <p className="text-sm leading-relaxed text-ink">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
