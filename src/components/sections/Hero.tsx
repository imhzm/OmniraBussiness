import Image from "next/image";
import { heroStats, trustedMarks } from "@/data/home";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
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
    <section className="relative overflow-hidden bg-ivory">
      <Pattern id="hero-pattern" className="absolute inset-0 text-navy opacity-[0.025]" />
      <div
        className="pointer-events-none absolute -top-40 end-0 h-[480px] w-[480px] rounded-full bg-gold/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_1fr] lg:py-24">
        {/* Copy */}
        <Reveal>
          <Eyebrow>{dict.home.heroLabel}</Eyebrow>
          <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
            {dict.home.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{dict.home.heroText}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={localeHref(locale, "/contact")} size="lg" arrow>
              {dict.common.startYourBusiness}
            </Button>
            <Button href={localeHref(locale, "/services")} variant="secondary" size="lg">
              {dict.common.exploreServices}
            </Button>
          </div>

          {/* Trusted-by text marks */}
          <div className="mt-12">
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
        <Reveal delay={150} className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] shadow-card-hover sm:aspect-[5/4] lg:aspect-[4/4.6]">
            <Image
              src="/images/hero/riyadh-skyline.webp"
              alt={locale === "ar" ? "أفق مدينة الرياض" : "Riyadh city skyline"}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/10 to-transparent" />
          </div>

          {/* Floating stat cards */}
          <div className="absolute -start-4 bottom-8 flex flex-col gap-3 sm:-start-8">
            {heroStats.map((stat, i) => (
              <Reveal
                key={stat.id}
                delay={350 + i * 130}
                className="flex items-center gap-3.5 rounded-2xl border border-line/60 bg-white/95 px-5 py-3.5 shadow-card backdrop-blur"
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
