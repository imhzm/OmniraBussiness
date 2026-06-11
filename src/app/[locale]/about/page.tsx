import Image from "next/image";
import type { Metadata } from "next";
import { site } from "@/config/site";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

const values = [
  {
    icon: "shield-check",
    title: { en: "Compliance first", ar: "الامتثال أولاً" },
    text: {
      en: "Every recommendation is checked against Saudi licensing, tax, labor, and portal requirements.",
      ar: "كل توصية تُراجع وفق متطلبات التراخيص والضرائب والعمل والمنصات الحكومية السعودية.",
    },
  },
  {
    icon: "messages-square",
    title: { en: "One accountable team", ar: "فريق واحد مسؤول" },
    text: {
      en: "Clients get a single bilingual point of contact who coordinates consultants and government steps.",
      ar: "يحصل العميل على نقطة تواصل ثنائية اللغة تدير المستشارين والخطوات الحكومية.",
    },
  },
  {
    icon: "target",
    title: { en: "Clear scope", ar: "نطاق واضح" },
    text: {
      en: "Packages, timelines, and deliverables are defined before work starts.",
      ar: "الباقات والجداول والمخرجات محددة بوضوح قبل بدء العمل.",
    },
  },
];

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
    title: dict.about.heroTitle,
    description: dict.about.heroText,
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);

  return (
    <>
      <PageHero
        locale={l}
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.about }]}
        title={dict.about.heroTitle}
        text={dict.about.heroText}
      />

      <section className="py-12 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src="/images/about/office.webp"
              alt={locale === "ar" ? "فريق أومنيرا في الرياض" : "Omnira office in Riyadh"}
              fill
              sizes="(max-width: 1024px) 100vw, 44vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-gold-dark">
              {site.legalName[l]}
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy lg:text-4xl">
              {dict.about.storyTitle}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
              <p>
                {l === "ar"
                  ? "أومنيرا تبني تجربة خدمات أعمال واضحة للشركات التي تريد دخول السوق السعودي بثقة. نربط بين الاستشارة، المستندات، المنصات الحكومية، والامتثال التشغيلي في رحلة واحدة منظمة."
                  : "Omnira gives companies a clear operating path into Saudi Arabia. We connect advisory, documentation, government portals, and operational compliance into one organized journey."}
              </p>
              <p>
                {l === "ar"
                  ? "نخدم رواد الأعمال، المنشآت الصغيرة والمتوسطة، والشركات الدولية التي تحتاج شريكاً محلياً يفهم اللغة والإجراءات وتوقعات السوق."
                  : "We serve founders, SMEs, and international companies that need a local partner fluent in the language, process, and expectations of the market."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 lg:py-20">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">{dict.about.valuesTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.icon} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                  <Icon name={value.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-navy">{t(value.title, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(value.text, l)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
