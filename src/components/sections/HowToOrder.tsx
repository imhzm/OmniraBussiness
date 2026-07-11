import type { Locale } from "@/i18n/config";
import { t } from "@/lib/utils";
import { whatsappLink } from "@/config/site";
import { orderFlow } from "@/data/home-sections";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

/** "Request your service in 3 steps" — WhatsApp-first ordering flow. */
export function HowToOrder({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const f = orderFlow;

  return (
    <section className="bg-ivory/50 py-16 lg:py-24">
      <div className="container-x">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">{t(f.eyebrow, locale)}</p>
          <h2 className="mt-2 text-3xl font-bold text-navy lg:text-4xl">{t(f.heading, locale)}</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{t(f.subtext, locale)}</p>
        </Reveal>

        <div className="relative mx-auto mt-12 grid max-w-5xl gap-5 md:grid-cols-3">
          {/* connecting line (desktop) */}
          <div className="absolute inset-x-[16%] top-9 hidden h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent md:block" aria-hidden="true" />
          {f.steps.map((s, i) => (
            <div
              key={i}
              className="relative flex flex-col items-center rounded-2xl border border-line bg-white p-7 text-center shadow-card"
            >
              <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-gold-soft">
                <Icon name={s.icon} className="h-7 w-7" />
                <span className="absolute -end-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-gold text-xs font-black text-navy ring-4 ring-ivory/50">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 text-lg font-bold text-navy">{t(s.title, locale)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{t(s.text, locale)}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sheen inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-colors hover:bg-gold-dark"
          >
            <Icon name="message-circle" className="h-5 w-5" />
            {t(f.ctaLabel, locale)}
          </a>
        </div>
      </div>
    </section>
  );
}
