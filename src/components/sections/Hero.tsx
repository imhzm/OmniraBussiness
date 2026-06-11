import Image from "next/image";
import { heroStats, trustedMarks } from "@/data/home";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { assetSrc } from "@/lib/assets";
import { localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Pattern } from "@/components/ui/Pattern";
import { Reveal } from "@/components/ui/Reveal";

export function Hero({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  const statLabels: Record<(typeof heroStats)[number]["id"], string> = {
    businesses: dict.home.heroStats.businesses,
    satisfaction: dict.home.heroStats.satisfaction,
    support: dict.home.heroStats.support,
  };

  return (
    <section className="relative overflow-hidden border-b border-line bg-ivory">
      <Image
        src={assetSrc("/images/hero/omnira-riyadh-hero.png")}
        alt={locale === "ar" ? "أفق أعمال حديث في الرياض" : "Modern Riyadh business skyline"}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#f8f5ee_0%,rgba(248,245,238,0.94)_27%,rgba(248,245,238,0.52)_55%,rgba(248,245,238,0.04)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ivory via-ivory/78 to-transparent" />
      <Pattern id="hero-pattern" className="absolute inset-0 text-navy opacity-[0.018]" />

      <div className="container-x relative grid min-h-[590px] items-center gap-12 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        {/* Copy */}
        <Reveal>
          <h1 className="max-w-xl text-4xl font-bold leading-[1.12] tracking-tight text-navy sm:text-5xl lg:text-[3.55rem]">
            {dict.home.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy/72 sm:text-lg">{dict.home.heroText}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={localeHref(locale, "/contact")} variant="navy" size="lg" arrow>
              {dict.common.startYourBusiness}
            </Button>
            <Button href={localeHref(locale, "/about-kingdom")} variant="white" size="lg">
              {dict.common.exploreOpportunities}
            </Button>
          </div>

          {/* Trusted-by text marks */}
          <div className="mt-12 hidden lg:block">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-faint">
              {dict.home.trustedBy}
            </p>
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

        {/* Visual */}
        <Reveal delay={150} className="relative min-h-[330px] lg:min-h-[430px]">
          {/* Floating stat cards */}
          <div className="absolute bottom-4 end-0 flex w-full max-w-[300px] flex-col gap-3 sm:end-8 lg:bottom-8">
            {heroStats.map((stat, i) => (
              <Reveal
                key={stat.id}
                delay={350 + i * 130}
                className="flex items-center gap-3.5 rounded-xl border border-white/80 bg-white/94 px-5 py-3.5 shadow-card backdrop-blur"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                  <Icon name={stat.icon} className="h-5 w-5" />
                </span>
                <span>
                  <CountUp
                    value={stat.value}
                    suffix={stat.suffix}
                    className="block text-xl font-bold text-navy"
                  />
                  <span className="block text-xs font-medium text-muted">{statLabels[stat.id]}</span>
                </span>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
