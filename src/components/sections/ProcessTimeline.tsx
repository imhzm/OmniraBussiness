import { processSteps } from "@/data/home";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function ProcessTimeline({ locale }: { locale: Locale }) {
  const dict = getDict(locale);

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.home.howItWorks}
          title={dict.home.processTitle}
          text={dict.home.processText}
          action={{ label: dict.common.bookConsultation, href: localeHref(locale, "/book") }}
        />

        <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-4">
          {/* Connecting line on desktop */}
          <div
            className="absolute inset-x-8 top-7 hidden h-px bg-gradient-to-r from-gold/20 via-gold/60 to-gold/20 lg:block"
            aria-hidden="true"
          />
          {processSteps.map((step, i) => (
            <Reveal key={i} delay={i * 90} className="relative">
              <li className="flex gap-4 lg:flex-col lg:gap-0">
                <div className="relative z-10 flex flex-col items-center lg:items-start">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/40 bg-white text-gold-dark shadow-card">
                    <Icon name={step.icon} className="h-6 w-6" />
                  </span>
                </div>
                <div className="lg:mt-5">
                  <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-base font-bold text-navy">{t(step.title, locale)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(step.text, locale)}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
