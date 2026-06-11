import Image from "next/image";
import type { Metadata } from "next";
import { marketStats } from "@/data/home";
import { sectors } from "@/data/sectors";
import { getDict } from "@/i18n/dictionary";
import { isLocale, type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { FinalCTA } from "@/components/sections/FinalCTA";

const drivers = [
  {
    icon: "target",
    title: { en: "Vision 2030 transformation", ar: "تحول رؤية 2030" },
    text: {
      en: "Public investment is opening opportunities across tourism, logistics, technology, industry, and quality of life.",
      ar: "الاستثمار العام يفتح فرصاً في السياحة واللوجستيات والتقنية والصناعة وجودة الحياة.",
    },
  },
  {
    icon: "building-2",
    title: { en: "Regional headquarters momentum", ar: "زخم المقرات الإقليمية" },
    text: {
      en: "Riyadh is becoming the operating base for regional teams, procurement, and leadership functions.",
      ar: "تتحول الرياض إلى قاعدة للفرق الإقليمية والمشتريات والوظائف القيادية.",
    },
  },
  {
    icon: "languages",
    title: { en: "A bilingual business environment", ar: "بيئة أعمال ثنائية اللغة" },
    text: {
      en: "Arabic remains essential for government portals, while English is widely used in investor and board communication.",
      ar: "العربية أساسية في المنصات الحكومية، والإنجليزية حاضرة بقوة في تواصل المستثمرين والإدارات.",
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
    title: dict.kingdom.heroTitle,
    description: dict.kingdom.heroText,
    path: "/about-kingdom",
  });
}

export default async function AboutKingdomPage({
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
        dark
        crumbs={[{ label: dict.nav.home, href: "/" }, { label: dict.nav.aboutKingdom }]}
        title={dict.kingdom.heroTitle}
        text={dict.kingdom.heroText}
      />

      <section id="why" className="py-12 lg:py-20">
        <div className="container-x grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="relative aspect-[16/10] overflow-hidden rounded-2xl shadow-card-hover">
            <Image
              src="/images/about/kingdom.webp"
              alt={l === "ar" ? "مشهد أعمال في السعودية" : "Saudi Arabia business landscape"}
              fill
              sizes="(max-width: 1024px) 100vw, 54vw"
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-navy">{dict.kingdom.whyTitle}</h2>
            <p className="mt-4 text-base leading-relaxed text-muted">
              {l === "ar"
                ? "السعودية تجمع بين حجم سوق كبير، إنفاق استثماري ضخم، وإصلاحات تنظيمية متسارعة. النجاح هنا يحتاج معرفة دقيقة بالترخيص، التوطين، الضرائب، والعلاقات الحكومية."
                : "Saudi Arabia combines a large market, major investment spending, and rapid regulatory reform. Success requires precise handling of licensing, Saudization, tax, and government relations."}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {marketStats.map((stat) => (
                <div key={stat.id} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                  <Icon name={stat.icon} className="h-5 w-5 text-gold-dark" />
                  <CountUp
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    className="mt-4 block text-2xl font-bold text-navy"
                  />
                  <p className="mt-1 text-sm font-semibold text-ink">{t(stat.label, l)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-white py-12 lg:py-20">
        <div className="container-x">
          <h2 className="text-3xl font-bold text-navy">{dict.kingdom.visionTitle}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {drivers.map((driver) => (
              <div key={driver.icon} className="rounded-2xl border border-line bg-white p-6 shadow-card">
                <Icon name={driver.icon} className="h-6 w-6 text-gold-dark" />
                <h3 className="mt-5 text-lg font-bold text-navy">{t(driver.title, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(driver.text, l)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="life" className="py-12 lg:py-20">
        <div className="container-x grid gap-5 md:grid-cols-3">
          {[
            {
              icon: "map-pin",
              title: { en: "Riyadh as a command center", ar: "الرياض كمركز قيادة" },
              text: {
                en: "A fast-growing capital with business districts, regional headquarters, and year-round investor activity.",
                ar: "عاصمة سريعة النمو تضم مناطق أعمال ومقرات إقليمية وحركة مستثمرين على مدار العام.",
              },
            },
            {
              icon: "heart-pulse",
              title: { en: "Modern quality of life", ar: "جودة حياة حديثة" },
              text: {
                en: "Entertainment, healthcare, schooling, and mobility are developing quickly for relocating teams.",
                ar: "الترفيه والرعاية الصحية والتعليم والتنقل تتطور بسرعة للفرق المنتقلة إلى المملكة.",
              },
            },
            {
              icon: "briefcase",
              title: { en: "Workforce and Saudization", ar: "القوى العاملة والتوطين" },
              text: {
                en: "Hiring plans must balance specialist talent, Saudi roles, visa quotas, and payroll compliance.",
                ar: "خطط التوظيف تحتاج موازنة بين الخبرات المتخصصة والوظائف السعودية وحصص التأشيرات والرواتب.",
              },
            },
          ].map((item) => (
            <div key={item.icon} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <Icon name={item.icon} className="h-6 w-6 text-gold-dark" />
              <h3 className="mt-5 text-lg font-bold text-navy">{t(item.title, l)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(item.text, l)}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="opportunities" className="py-12 lg:py-20">
        <div className="container-x">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-navy">{dict.kingdom.sectorsTitle}</h2>
              <p className="mt-2 max-w-2xl text-muted">{dict.home.sectorsText}</p>
            </div>
          </div>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {sectors.map((sector) => (
              <a
                key={sector.slug}
                href={localeHref(l, `/about-kingdom/sectors/${sector.slug}`)}
                className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={sector.image} alt={t(sector.name, l)} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/75 to-transparent" />
                  <h3 className="absolute inset-x-4 bottom-4 text-lg font-bold leading-tight text-white">{t(sector.name, l)}</h3>
                </div>
                <p className="line-clamp-3 p-4 text-sm leading-relaxed text-muted">{t(sector.short, l)}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
