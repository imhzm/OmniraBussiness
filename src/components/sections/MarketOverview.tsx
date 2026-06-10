import { marketStats } from "@/data/home";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { CountUp } from "@/components/ui/CountUp";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

/** Static sparkline paths to give each stat card a quiet visual rhythm. */
const sparklines = [
  "M0 28 L12 24 L24 26 L36 18 L48 20 L60 12 L72 14 L84 6",
  "M0 26 L12 27 L24 20 L36 22 L48 14 L60 16 L72 8 L84 10",
  "M0 24 L12 22 L24 23 L36 17 L48 18 L60 13 L72 12 L84 8",
  "M0 27 L12 21 L24 24 L36 16 L48 19 L60 10 L72 12 L84 5",
];

export function MarketOverview({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.kingdom.visionTitle}
          title={dict.home.marketTitle}
          text={dict.home.marketText}
          action={{ label: dict.home.viewFullReport, href: localeHref(locale, "/about-kingdom") }}
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {marketStats.map((stat, i) => (
            <Reveal key={stat.id} delay={i * 100}>
              <div className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-card-hover">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                    <Icon name={stat.icon} className="h-5 w-5" />
                  </span>
                  <svg viewBox="0 0 84 32" className="h-8 w-20 text-gold/70" aria-hidden="true">
                    <path
                      d={sparklines[i % sparklines.length]}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                  className="mt-5 text-3xl font-bold text-navy"
                />
                <p className="mt-1 text-sm font-semibold text-ink">{t(stat.label, locale)}</p>
                <p className="text-xs text-faint">{t(stat.note, locale)}</p>
                <p className="mt-3 text-xs font-semibold text-emerald-600">{t(stat.trend, locale)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
