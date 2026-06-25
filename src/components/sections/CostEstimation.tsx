import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { teaserEstimate } from "@/data/calculator";

const fmt = (n: number) => n.toLocaleString("en-US");

export function CostEstimation({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const badges = [
    {
      icon: "shield-check",
      title: { en: "Based on Official Requirements", ar: "مبني على المتطلبات الرسمية" },
      text: { en: "Aligned with government fees and licensing obligations.", ar: "متوافق مع الرسوم الحكومية والتزامات الترخيص." },
    },
    {
      icon: "file-text",
      title: { en: "Comprehensive Coverage", ar: "تغطية شاملة" },
      text: { en: "Includes setup, licensing, and operational cost components.", ar: "يشمل التأسيس والترخيص والتكاليف التشغيلية." },
    },
    {
      icon: "calendar-days",
      title: { en: "Regularly Updated", ar: "محدّث باستمرار" },
      text: { en: "Reviewed and updated to reflect the latest changes.", ar: "تُراجَع وتُحدَّث لتعكس آخر التغييرات." },
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container-x">
        <div className="rounded-3xl border border-line bg-ivory/40 p-6 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            {/* Left */}
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
                <span className="h-px w-6 bg-gold-dark" />
                {ar ? "تقدير تكلفة الأعمال" : "Business cost estimation"}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-navy lg:text-4xl">
                {ar ? "افهم تكاليف تأسيس عملك" : "Understand your business setup costs"}
              </h2>
              <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted">
                {ar
                  ? "قدّر تكلفة بدء وتشغيل عملك في السعودية حسب قطاعك ومتطلباتك."
                  : "Estimate the cost of starting and operating your business in Saudi Arabia based on your sector and requirements."}
              </p>
              <a
                href={localeHref(locale, "/business-setup-cost-calculator")}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-navy bg-white px-6 py-3 text-sm font-bold text-navy transition-colors hover:bg-navy hover:text-white"
              >
                {ar ? "افتح حاسبة التكلفة" : "Open cost calculator"}
                <Icon name="arrow-right" className={ar ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
              </a>
            </div>

            {/* Right — estimate card */}
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-semibold text-muted">{ar ? "النطاق التقديري للتكلفة" : "Estimated cost range"}</p>
              <p className="mt-1 text-2xl font-bold text-gold-dark">
                <span className="text-base font-semibold text-navy">SAR</span>{" "}
                {fmt(teaserEstimate.total.min)} – {fmt(teaserEstimate.total.max)}
              </p>

              <div className="mt-5 space-y-4">
                {teaserEstimate.rows.map((r, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between gap-3 text-sm">
                      <span className="flex items-center gap-2 font-semibold text-navy">
                        <Icon name={r.icon} className="h-4 w-4 text-gold-dark" />
                        {t(r.label, locale)}
                      </span>
                      <span className="shrink-0 text-xs font-semibold text-muted">{t(r.range, locale)}</span>
                    </div>
                    <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-ivory">
                      <div className="h-full rounded-full bg-gold" style={{ width: `${r.pct * 100}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-2 rounded-xl bg-ivory/70 p-3 text-xs leading-relaxed text-muted">
                <Icon name="trending-up" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                {ar
                  ? "مبني على الرسوم الرسمية ومتطلبات الترخيص وسيناريوهات التأسيس المعتادة."
                  : "Based on official fees, licensing requirements, and typical business setup scenarios."}
              </div>
              <p className="mt-3 text-[0.7rem] text-faint">
                {ar ? "محدّث: 2026 · رسوم حكومية + تقديرات داخلية" : "Updated: 2026 · Government fees + internal estimates"}
              </p>
            </div>
          </div>

          {/* Badges */}
          <div className="mt-8 grid gap-5 border-t border-line pt-8 md:grid-cols-3">
            {badges.map((b, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
                  <Icon name={b.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-sm font-bold text-navy">{t(b.title, locale)}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{t(b.text, locale)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
