import type { L, Locale } from "@/i18n/config";
import { t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { CountUp } from "@/components/ui/CountUp";
import { Reveal } from "@/components/ui/Reveal";

type Stat = {
  icon: string;
  value?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  label: L;
};

/** Honest, verifiable achievement bar right under the hero (reference-style). */
const STATS: Stat[] = [
  { icon: "briefcase", value: 30, suffix: "+", label: { en: "Government services", ar: "خدمة حكومية" } },
  { icon: "map-pin", value: 13, label: { en: "Regions covered", ar: "منطقة نغطّيها" } },
  { icon: "landmark", value: 8, suffix: "+", label: { en: "Government platforms", ar: "منصات حكومية" } },
  { icon: "headset", text: "★", label: { en: "Free initial consultation", ar: "استشارة أولية مجانية" } },
];

export function AchievementStats({ locale }: { locale: Locale }) {
  return (
    <section className="border-b border-line bg-white">
      <div className="container-x py-8 lg:py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {STATS.map((s, i) => (
            <Reveal
              key={s.icon}
              delay={i * 90}
              className="flex items-center gap-4 rounded-2xl border border-line bg-ivory/40 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-card sm:p-5"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                <Icon name={s.icon} className="h-6 w-6" />
              </span>
              <div className="min-w-0">
                {s.value !== undefined ? (
                  <CountUp
                    value={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    className="block text-2xl font-bold leading-none text-navy sm:text-3xl"
                  />
                ) : (
                  <span className="block text-2xl font-bold leading-none text-gold-dark sm:text-3xl">{s.text}</span>
                )}
                <span className="mt-1.5 block text-xs font-medium leading-tight text-muted sm:text-sm">
                  {t(s.label, locale)}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
