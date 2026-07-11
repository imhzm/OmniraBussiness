import { processSteps } from "@/data/home";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/** Clean numbered setup journey (reference-style): gold circles on a connecting line. */
export function SetupJourney({ locale }: { locale: Locale }) {
  const ar = locale === "ar";

  return (
    <section className="border-y border-line bg-white py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {ar ? "رحلة التأسيس" : "The journey"}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy lg:text-4xl">
            {ar ? "رحلة تأسيس أعمالك" : "Your business setup journey"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {ar
              ? "خطوات واضحة من الفكرة حتى الإطلاق — ونحن معك في كل خطوة."
              : "Clear steps from idea to launch — with us beside you at every stage."}
          </p>
        </Reveal>

        <div className="relative mt-14">
          {/* connecting line (desktop) */}
          <div
            className="absolute inset-x-[8%] top-7 hidden h-0.5 bg-gradient-to-r from-transparent via-gold/45 to-transparent lg:block"
            aria-hidden="true"
          />
          <ol className="grid gap-x-4 gap-y-9 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, i) => (
              <Reveal key={i} delay={i * 80} className="relative flex flex-col items-center text-center">
                <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-xl font-black text-navy shadow-gold ring-4 ring-white">
                  {i + 1}
                </span>
                <span className="mt-3 flex h-9 w-9 items-center justify-center rounded-lg bg-gold-faint text-gold-dark">
                  <Icon name={step.icon} className="h-4 w-4" />
                </span>
                <h3 className="mt-3 text-sm font-bold leading-snug text-navy lg:text-base">{t(step.title, locale)}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted">{t(step.text, locale)}</p>
              </Reveal>
            ))}
          </ol>
        </div>

        <div className="mt-12 text-center">
          <a
            href={localeHref(locale, "/services/business-setup")}
            className="btn-sheen inline-flex items-center gap-2 rounded-full bg-navy px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy/90"
          >
            {ar ? "ابدأ رحلتك الآن" : "Start your journey"}
            <Icon name="arrow-right" className={ar ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
          </a>
        </div>
      </div>
    </section>
  );
}
