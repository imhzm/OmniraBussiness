import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { calculatorCta } from "@/data/home-sections";
import { Icon } from "@/components/ui/Icon";
import { Pattern } from "@/components/ui/Pattern";
import { Reveal } from "@/components/ui/Reveal";

/** Prominent cost-calculator call-to-action band linking to the interactive calculator. */
export function CalculatorCTA({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const c = calculatorCta;

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 lg:p-12">
          <Pattern id="calc-cta" className="absolute inset-0 text-gold opacity-[0.06]" />
          <div
            className="pointer-events-none absolute -end-24 top-1/2 h-[360px] w-[360px] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="w-full min-w-0 lg:flex-1">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-soft">
                <Icon name="calculator" className="h-4 w-4 shrink-0" />
                {t(c.eyebrow, locale)}
              </p>
              <h2 className="mt-3 text-3xl font-bold leading-tight text-white lg:text-4xl">
                {t(c.heading, locale)}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-white/72 lg:max-w-2xl">{t(c.subtext, locale)}</p>
              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {c.bullets.map((b, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-white/85">
                    <Icon name="check-circle-2" className="h-4 w-4 shrink-0 text-gold-soft" />
                    {t(b, locale)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full shrink-0 lg:w-auto">
              <a
                href={localeHref(locale, "/business-setup-cost-calculator")}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-bold text-navy shadow-gold transition-colors hover:bg-gold-dark lg:w-auto"
              >
                {t(c.ctaLabel, locale)}
                <Icon name="arrow-right" className={ar ? "h-5 w-5 rotate-180" : "h-5 w-5"} />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
