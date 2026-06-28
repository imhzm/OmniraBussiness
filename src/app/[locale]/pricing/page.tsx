import type { Metadata } from "next";
import {
  bundleOffer,
  governmentFees,
  managementAddOns,
  managementGuarantees,
  partnerPrograms,
  pricingFaqs,
  pricingPackages,
  setupCompare,
} from "@/data/pricing";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { localeHref, t } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { PricingCard } from "@/components/sections/PricingPreview";
import { BuildYourPlan } from "@/components/sections/BuildYourPlan";
import { StartFromZero } from "@/components/sections/StartFromZero";
import { FinalCTA } from "@/components/sections/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  return pageMetadata({
    locale: l,
    title: dict.pricing.heroTitle,
    description: dict.pricing.heroText,
    path: "/pricing",
  });
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  const setupPackages = pricingPackages.filter((pkg) => pkg.group === "setup");
  const managementPackages = pricingPackages.filter((pkg) => pkg.group === "management");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: pricingFaqs.map((faq) => ({
          "@type": "Question",
          name: t(faq.q, l),
          acceptedAnswer: { "@type": "Answer", text: t(faq.a, l) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.nav.home, item: `${site.url}/${l}` },
          { "@type": "ListItem", position: 2, name: dict.nav.pricing, item: `${site.url}/${l}/pricing` },
        ],
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
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.pricing }]}
        title={dict.pricing.heroTitle}
        text={dict.pricing.heroText}
      />

      <StartFromZero locale={l} />

      <section id="setup" className="py-12 lg:py-16">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.92fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
                {l === "ar" ? "المنتج الأول - لمرة واحدة" : "Product one - one-time"}
              </p>
              <h2 className="mt-2 text-3xl font-bold text-navy">{dict.pricing.setupTab}</h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                {l === "ar"
                  ? "نؤسس شركتك في السعودية من الترخيص حتى الحساب البنكي وتفعيل المنصات الأساسية. الأسعار أدناه أتعاب خدمة ولا تشمل الرسوم الحكومية."
                  : "We set up your Saudi company from licensing to bank-account readiness and core platform activation. Prices below are service fees and exclude government charges."}
              </p>
            </div>

            <div className="rounded-2xl border border-gold/30 bg-gold-faint p-5">
              <h3 className="text-base font-bold text-navy">
                {l === "ar" ? "الرسوم الحكومية السنوية" : "Annual government fees"}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">
                {l === "ar"
                  ? "تُضاف على الباقة وتُدفع كما هي للجهات الرسمية."
                  : "Added to the package and paid at cost to the official authorities."}
              </p>
              <div className="mt-4 space-y-3">
                {governmentFees.map((fee) => (
                  <div key={t(fee.label, l)} className="rounded-xl bg-white/80 p-3">
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="font-semibold text-navy">{t(fee.label, l)}</span>
                      <span className="shrink-0 font-bold text-gold-dark">{t(fee.amount, l)}</span>
                    </div>
                    {fee.note && (
                      <p className="mt-1 text-xs leading-relaxed text-muted">{t(fee.note, l)}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {setupPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} locale={l} pkg={pkg} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      <section id="management" className="bg-white py-12 lg:py-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
              {l === "ar" ? "المنتج الثاني - اشتراك سنوي" : "Product two - annual subscription"}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy">{dict.pricing.hrTab}</h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {l === "ar"
                ? "بعد التأسيس، نمسك حساباتك على قوى ومقيم وأبشر أعمال والتأمينات وزاتكا ومدد وغيرها: تجديدات، إقامات، رواتب، إقرارات وتنبيهات قبل الاستحقاق."
                : "After setup, we manage Qiwa, Muqeem, Absher Business, GOSI, ZATCA, Mudad, and related platforms: renewals, iqamas, payroll, filings, and due-date alerts."}
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {managementPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} locale={l} pkg={pkg} delay={i * 60} />
            ))}
          </div>

          <div className="mt-5 flex flex-wrap gap-2">
            {managementAddOns.map((item) => (
              <span key={t(item, l)} className="rounded-full border border-line bg-ivory px-4 py-2 text-xs font-bold text-navy">
                {t(item, l)}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {managementGuarantees.map((item) => (
              <article key={t(item.title, l)} className="rounded-2xl border border-line bg-ivory/60 p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold text-navy">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-navy">{t(item.title, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.text, l)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Build your own plan */}
      <section id="build" className="scroll-mt-24 bg-ivory/40 py-12 lg:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              {l === "ar" ? "صمّم باقتك" : "Build your plan"}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy lg:text-3xl">
              {l === "ar"
                ? "اختر خدماتك وعدد موظفيك — ونعطيك السعر"
                : "Pick your services and team size — get your price"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {l === "ar"
                ? "مش محتاج كل المنصات؟ اختر اللي تحتاجه بس، حدّد عدد موظفيك وفروعك، وشوف سعرك السنوي فورًا."
                : "Don't need every platform? Select only what you need, set your team and branches, and see your annual price instantly."}
            </p>
          </div>
          <div className="mt-8">
            <BuildYourPlan locale={l} />
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-x">
          <div className="grid gap-6 rounded-2xl bg-navy-gradient p-6 text-white shadow-card lg:grid-cols-[1fr_auto] lg:items-center lg:p-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-soft">
                {l === "ar" ? "العرض المدمج" : "Bundle offer"}
              </p>
              <h2 className="mt-2 text-2xl font-bold">{t(bundleOffer.title, l)}</h2>
              <p className="mt-2 text-sm leading-relaxed text-white/72">{t(bundleOffer.text, l)}</p>
              <p className="mt-4 text-xl font-bold text-gold-soft">{t(bundleOffer.value, l)}</p>
            </div>
            <Button href={localeHref(l, "/book")} size="lg">
              {dict.common.bookConsultation}
            </Button>
          </div>
        </div>
      </section>

      <section id="partners" className="bg-white py-12 lg:py-16">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
              {l === "ar" ? "للشركاء - B2B" : "For partners - B2B"}
            </p>
            <h2 className="mt-2 text-3xl font-bold text-navy">
              {l === "ar"
                ? "وسّع خدماتك للسعودية معنا"
                : "Expand your client services into Saudi Arabia with us"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {l === "ar"
                ? "لو عندك مكتب تأسيس أو استشارات في بلدك، حوّل عملاءك الراغبين بدخول السوق السعودي إلى Omnera One أو أعد بيع خدماتنا بعلامتك."
                : "If you run a formation or advisory firm abroad, refer clients entering Saudi Arabia to Omnera One or resell our delivery under your brand."}
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {partnerPrograms.map((program) => (
              <article key={t(program.title, l)} className="rounded-2xl border border-line bg-ivory/60 p-6 shadow-card">
                <h3 className="text-xl font-bold text-navy">{t(program.title, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(program.subtitle, l)}</p>
                <p className="mt-5 text-3xl font-bold text-gold-dark">{t(program.value, l)}</p>
                <ul className="mt-5 space-y-2.5">
                  {program.features.map((feature) => (
                    <li key={t(feature, l)} className="flex items-start gap-2.5 text-sm text-ink">
                      <Icon name="check-circle-2" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                      {t(feature, l)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">{dict.pricing.compareTitle}</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full border-collapse text-sm">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-5 py-4 text-start font-bold">{dict.pricing.feature}</th>
                    {setupPackages.map((pkg) => (
                      <th key={pkg.id} className="px-5 py-4 text-start font-bold">
                        {t(pkg.name, l)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {setupCompare.map((row) => (
                    <tr key={t(row.feature, l)} className="bg-white">
                      <td className="px-5 py-4 font-semibold text-navy">{t(row.feature, l)}</td>
                      {row.values.map((value, i) => (
                        <td key={i} className="px-5 py-4 text-muted">
                          {typeof value === "boolean" ? (
                            value ? (
                              <Icon name="check-circle-2" className="h-5 w-5 text-gold-dark" />
                            ) : (
                              <Icon name="minus" className="h-5 w-5 text-faint" />
                            )
                          ) : (
                            t(value, l)
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-16">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-navy">{dict.pricing.notesTitle}</h2>
            <ul className="mt-5 space-y-3">
              {dict.pricing.notes.map((note) => (
                <li key={note} className="flex gap-3 text-sm leading-relaxed text-muted">
                  <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-5 text-3xl font-bold text-navy">{dict.pricing.faqTitle}</h2>
            <Accordion items={pricingFaqs.map((faq) => ({ title: t(faq.q, l), content: t(faq.a, l) }))} />
          </div>
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
