import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDict } from "@/i18n/dictionary";
import { isLocale, locales, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { site, whatsappLink } from "@/config/site";
import { localeHref, t } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { licenseTypes } from "@/data/license-types";
import { licenseDetails, getLicenseDetail } from "@/data/license-details";

export function generateStaticParams() {
  return locales.flatMap((locale) => licenseDetails.map((d) => ({ locale, type: d.id })));
}

function getType(id: string) {
  return licenseTypes.find((lt) => lt.id === id);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}): Promise<Metadata> {
  const { locale, type } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const lt = getType(type);
  const detail = getLicenseDetail(type);
  if (!lt || !detail) return {};
  const name = t(lt.name, l);
  return pageMetadata({
    locale: l,
    title:
      l === "ar"
        ? `${name} في السعودية — الإصدار والمتطلبات`
        : `${name} in Saudi Arabia — Issuance & Requirements`,
    description: t(detail.excerpt, l),
    path: `/licenses/${type}`,
  });
}

export default async function LicenseTypePage({
  params,
}: {
  params: Promise<{ locale: string; type: string }>;
}) {
  const { locale, type } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const lt = getType(type);
  const detail = getLicenseDetail(type);
  if (!lt || !detail) notFound();
  const ar = l === "ar";
  const name = t(lt.name, l);

  const others = licenseTypes.filter((x) => x.id !== type).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name,
        description: t(detail.excerpt, l),
        serviceType: name,
        provider: { "@type": "Organization", name: "Omnera One", url: site.url },
        areaServed: {
          "@type": "Country",
          name: ar ? "المملكة العربية السعودية" : "Saudi Arabia",
        },
        url: `${site.url}/${l}/licenses/${type}`,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.nav.home, item: `${site.url}/${l}` },
          {
            "@type": "ListItem",
            position: 2,
            name: ar ? "إصدار التراخيص" : "License Issuance",
            item: `${site.url}/${l}/services/license-issuance`,
          },
          { "@type": "ListItem", position: 3, name, item: `${site.url}/${l}/licenses/${type}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: detail.faqs.map((f) => ({
          "@type": "Question",
          name: t(f.q, l),
          acceptedAnswer: { "@type": "Answer", text: t(f.a, l) },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageHero
        locale={l}
        dark
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: ar ? "إصدار التراخيص" : "License Issuance", href: "/services/license-issuance" },
          { label: name },
        ]}
        eyebrow={ar ? "ترخيص استثماري في السعودية" : "Saudi investment licence"}
        title={name}
        text={t(detail.excerpt, l)}
      >
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href={localeHref(l, "/contact")} size="lg" arrow>
            {ar ? "احصل على عرض سعر مجاني" : "Get a free quote"}
          </Button>
          <Button
            href={whatsappLink(ar ? `مرحبًا، أرغب في إصدار ${name}.` : `Hello, I'd like to issue a ${name}.`)}
            external
            variant="outline-light"
            size="lg"
          >
            {ar ? "تواصل عبر واتساب" : "Chat on WhatsApp"}
          </Button>
        </div>
      </PageHero>

      <section className="py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article className="space-y-10">
            <Block title={ar ? "نظرة عامة" : "Overview"}>
              {detail.overview.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-muted">
                  {t(p, l)}
                </p>
              ))}
            </Block>

            <GridBlock
              title={ar ? "الأنشطة المشمولة" : "Activities covered"}
              items={detail.activities.map((x) => t(x, l))}
              icon="check-circle-2"
            />
            <GridBlock
              title={ar ? "لمن هذا الترخيص؟" : "Who is it for?"}
              items={detail.whoFor.map((x) => t(x, l))}
              icon="users"
            />

            <Block title={ar ? "كيف نُصدره لك" : "How we issue it for you"}>
              <div className="grid gap-4">
                {detail.steps.map((step, i) => (
                  <div
                    key={i}
                    className="grid gap-4 rounded-2xl border border-line bg-white p-5 shadow-card sm:grid-cols-[48px_1fr]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-lg font-bold text-gold-dark">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-navy">{t(step.title, l)}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{t(step.text, l)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Block>

            <GridBlock
              title={ar ? "المتطلبات" : "Requirements"}
              items={detail.requirements.map((x) => t(x, l))}
              icon="file-text"
            />

            <div className="rounded-2xl border border-gold/30 bg-ivory/50 p-6">
              <p className="flex items-center gap-2 text-base font-bold text-navy">
                <Icon name="receipt-text" className="h-5 w-5 text-gold-dark" />
                {ar ? "التكلفة والمدة" : "Cost & timeline"}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(detail.feesNote, l)}</p>
            </div>

            <Block title={ar ? "الأسئلة الشائعة" : "Frequently asked questions"}>
              <Accordion items={detail.faqs.map((f) => ({ title: t(f.q, l), content: t(f.a, l) }))} />
            </Block>
          </article>

          <aside className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl bg-navy-gradient p-6 text-white shadow-card">
              <h2 className="text-lg font-bold">{ar ? "جاهز تبدأ؟" : "Ready to start?"}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                {ar
                  ? "نتولّى إصدار ترخيصك بالكامل — تصنيف النشاط، التقديم، والمتابعة حتى يصبح فعّالًا."
                  : "We handle the whole issuance — activity classification, filing, and follow-up until it's active."}
              </p>
              <Button href={localeHref(l, "/contact")} className="mt-5 w-full" arrow>
                {ar ? "احصل على عرض سعر مجاني" : "Get a free quote"}
              </Button>
            </div>

            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-base font-bold text-navy">{ar ? "تراخيص أخرى" : "Other licences"}</h2>
              <div className="mt-4 space-y-2.5">
                {others.map((o) => (
                  <a
                    key={o.id}
                    href={localeHref(l, `/licenses/${o.id}`)}
                    className="flex items-center gap-3 rounded-xl border border-line p-3 transition-colors hover:border-gold/60 hover:bg-ivory"
                  >
                    <Icon name={o.icon} className="h-4 w-4 text-gold-dark" />
                    <span className="text-sm font-semibold text-navy">{t(o.name, l)}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

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
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
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
