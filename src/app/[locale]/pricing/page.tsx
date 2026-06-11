import type { Metadata } from "next";
import { pricingFaqs, pricingPackages, setupCompare } from "@/data/pricing";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { t } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { PricingCard } from "@/components/sections/PricingPreview";
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
  const hrPackages = pricingPackages.filter((pkg) => pkg.group === "hr");

  return (
    <>
      <PageHero
        locale={l}
        dark
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.pricing }]}
        title={dict.pricing.heroTitle}
        text={dict.pricing.heroText}
      />

      <section id="setup" className="py-12 lg:py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">{dict.pricing.setupTab}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {setupPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} locale={l} pkg={pkg} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      <section id="hr" className="bg-white py-12 lg:py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">{dict.pricing.hrTab}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {hrPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} locale={l} pkg={pkg} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">{dict.pricing.compareTitle}</h2>
          <div className="mt-8 overflow-hidden rounded-2xl border border-line bg-white shadow-card">
            <div className="overflow-x-auto">
              <table className="min-w-[780px] w-full border-collapse text-sm">
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
