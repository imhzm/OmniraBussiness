import Image from "next/image";
import { trustedMarks } from "@/data/home";
import { serviceCategories, servicesByCategory } from "@/data/services";
import { serviceCoverage } from "@/data/coverage";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Pattern } from "@/components/ui/Pattern";
import { Reveal } from "@/components/ui/Reveal";
import { HeroFinder, type FinderGroup } from "@/components/sections/HeroFinder";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const ar = locale === "ar";

  const groups: FinderGroup[] = serviceCategories.map((cat) => ({
    label: t(cat.label, locale),
    items: servicesByCategory(cat.id).map((s) => ({ slug: s.slug, title: t(s.title, locale) })),
  }));
  const cities = serviceCoverage.regions.map((r) => t(r.name, locale));

  const trustStrip = [
    { icon: "headset", label: ar ? "استشارة أولية مجانية" : "Free initial consultation" },
    { icon: "badge-check", label: ar ? "تنفيذ موثّق ومتابعة حتى التسليم" : "Trusted execution, tracked to delivery" },
    { icon: "shield-check", label: ar ? "متوافق مع الأنظمة الحكومية" : "Aligned with government regulations" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-line bg-ivory">
      <Image
        src="/images/hero/omnira-riyadh-hero.png"
        alt={ar ? "أفق أعمال حديث في الرياض" : "Modern Riyadh business skyline"}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8f5ee_0%,rgba(248,245,238,0.94)_27%,rgba(248,245,238,0.52)_55%,rgba(248,245,238,0.04)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory via-ivory/78 to-transparent" />
      <Pattern id="hero-pattern" className="absolute inset-0 text-navy opacity-[0.018]" />

      <div className="container-x relative grid min-h-[560px] items-center gap-12 py-14 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
        {/* Copy */}
        <Reveal>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.5rem]">
            {dict.home.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/72 sm:text-lg">{dict.home.heroText}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={localeHref(locale, "/contact")} variant="navy" size="lg" arrow>
              {dict.common.startYourBusiness}
            </Button>
            <Button href={localeHref(locale, "/services")} variant="white" size="lg">
              {dict.nav.services}
            </Button>
          </div>

          {/* Trusted-by text marks */}
          <div className="mt-10 hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">{dict.home.trustedBy}</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-7 gap-y-3">
              {trustedMarks.map((mark, i) => (
                <span
                  key={i}
                  className="text-sm font-bold tracking-wide text-navy/35 transition-colors hover:text-navy/60"
                >
                  {t(mark, locale)}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Service-finder widget */}
        <Reveal delay={150} className="flex justify-center lg:justify-end">
          <HeroFinder locale={locale} groups={groups} cities={cities} />
        </Reveal>
      </div>

      {/* Trust strip */}
      <div className="relative border-t border-line/70 bg-white/55 backdrop-blur">
        <div className="container-x flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-3.5">
          {trustStrip.map((b) => (
            <span key={b.icon} className="flex items-center gap-2 text-xs font-semibold text-navy/75 sm:text-sm">
              <Icon name={b.icon} className="h-4 w-4 text-gold-dark" />
              {b.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
