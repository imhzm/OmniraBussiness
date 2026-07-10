import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { serviceCoverage } from "@/data/coverage";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/** "We serve the whole Kingdom" — the 13 Saudi regions with their main cities. */
export function ServiceCoverage({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const c = serviceCoverage;

  return (
    <section className="border-y border-line bg-white py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
            <Icon name="map-pin" className="h-5 w-5" />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {t(c.eyebrow, locale)}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy lg:text-4xl">{t(c.heading, locale)}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t(c.subtext, locale)}</p>
        </Reveal>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {c.regions.map((r, i) => (
            <div
              key={i}
              className="group flex items-start gap-3 rounded-2xl border border-line bg-ivory/40 p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:bg-white hover:shadow-card"
            >
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-gold-dark shadow-sm ring-1 ring-line">
                <Icon name="map-pin" className="h-4 w-4" />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-bold text-navy">{t(r.name, locale)}</h3>
                <p className="mt-0.5 text-xs leading-relaxed text-muted">{t(r.cities, locale)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col items-center gap-4 text-center">
          <p className="flex items-center gap-1.5 text-sm text-muted">
            <Icon name="shield-check" className="h-4 w-4 text-gold-dark" />
            {t(c.note, locale)}
          </p>
          <a
            href={localeHref(locale, "/contact")}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy/90"
          >
            {ar ? "تواصل معنا أينما كنت" : "Reach us wherever you are"}
            <Icon name="arrow-right" className={ar ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
          </a>
        </div>
      </div>
    </section>
  );
}
