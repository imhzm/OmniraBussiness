import type { Metadata } from "next";
import { isLocale, type L, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/config/site";
import { t } from "@/lib/utils";
import { serviceCategories, services, type ServiceFaq } from "@/data/services";
import { pricingFaqs } from "@/data/pricing";
import { PageHero } from "@/components/ui/PageHero";
import { Accordion } from "@/components/ui/Accordion";
import { FinalCTA } from "@/components/sections/FinalCTA";

const PAGE = {
  title: {
    en: "Frequently Asked Questions — Saudi Business Setup",
    ar: "الأسئلة الشائعة — تأسيس الأعمال في السعودية",
  } satisfies L,
  desc: {
    en: "Answers about company formation, licensing, residency, government platforms, insurance, pricing and more in Saudi Arabia — by Omnera One.",
    ar: "إجابات عن تأسيس الشركات والتراخيص والإقامات والمنصات الحكومية والتأمين والأسعار وغيرها في المملكة العربية السعودية — من Omnera One.",
  } satisfies L,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  return pageMetadata({
    locale: l,
    title: t(PAGE.title, l),
    description: t(PAGE.desc, l),
    path: "/faq",
  });
}

function dedupe(faqs: ServiceFaq[]): ServiceFaq[] {
  const seen = new Set<string>();
  return faqs.filter((f) => {
    if (seen.has(f.q.ar)) return false;
    seen.add(f.q.ar);
    return true;
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);

  const groups = [
    ...serviceCategories.map((cat) => ({
      title: t(cat.label, l),
      faqs: dedupe(services.filter((s) => s.category === cat.id).flatMap((s) => s.faqs)),
    })),
    {
      title: l === "ar" ? "الأسعار والباقات" : "Pricing & Packages",
      faqs: pricingFaqs,
    },
  ].filter((g) => g.faqs.length > 0);

  const allFaqs = groups.flatMap((g) => g.faqs);
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: allFaqs.map((f) => ({
          "@type": "Question",
          name: t(f.q, l),
          acceptedAnswer: { "@type": "Answer", text: t(f.a, l) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: dict.nav.home, item: `${site.url}/${l}` },
          {
            "@type": "ListItem",
            position: 2,
            name: l === "ar" ? "الأسئلة الشائعة" : "FAQ",
            item: `${site.url}/${l}/faq`,
          },
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
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: l === "ar" ? "الأسئلة الشائعة" : "FAQ" },
        ]}
        eyebrow={l === "ar" ? "نجيب على أسئلتك" : "Your questions, answered"}
        title={l === "ar" ? "الأسئلة الشائعة" : "Frequently Asked Questions"}
        text={t(PAGE.desc, l)}
      />

      <section className="py-12 lg:py-16">
        <div className="container-x max-w-4xl space-y-10">
          {groups.map((g, i) => (
            <div key={i}>
              <h2 className="mb-4 text-xl font-bold text-navy lg:text-2xl">{g.title}</h2>
              <Accordion items={g.faqs.map((f) => ({ title: t(f.q, l), content: t(f.a, l) }))} />
            </div>
          ))}
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
