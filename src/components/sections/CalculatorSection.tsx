"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { localeHref, t } from "@/lib/utils";
import { calcSteps, teaserEstimate } from "@/data/calculator";
import { serviceCoverage } from "@/data/coverage";
import { Icon } from "@/components/ui/Icon";
import { Pattern } from "@/components/ui/Pattern";

const fmt = (n: number) => n.toLocaleString("en-US");

/** Reference-style cost section: a quick form on one side, an estimate card on the other. */
export function CalculatorSection({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const router = useRouter();

  const structureOpts = calcSteps.find((s) => s.id === "structure")?.options ?? [];
  const activityOpts = calcSteps.find((s) => s.id === "activity")?.options ?? [];
  const cities = serviceCoverage.regions.map((r) => t(r.name, locale));

  const [structure, setStructure] = useState("");
  const [activity, setActivity] = useState("");
  const [city, setCity] = useState("");
  const [partners, setPartners] = useState(2);

  const go = () => router.push(localeHref(locale, "/business-setup-cost-calculator"));

  const selectCls =
    "w-full appearance-none rounded-xl border border-line bg-ivory/50 py-3 ps-4 pe-10 text-sm font-medium text-navy outline-none transition-colors focus:border-gold focus:bg-white";

  const Field = ({
    label,
    value,
    onChange,
    placeholder,
    options,
  }: {
    label: string;
    value: string;
    onChange: (v: string) => void;
    placeholder: string;
    options: { id: string; label: string }[];
  }) => (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-muted">{label}</span>
      <span className="relative block">
        <select value={value} onChange={(e) => onChange(e.target.value)} className={selectCls}>
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.id} value={o.id}>
              {o.label}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          className="pointer-events-none absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint"
        />
      </span>
    </label>
  );

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Form */}
          <div>
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              <Icon name="calculator" className="h-4 w-4" />
              {ar ? "حاسبة التكلفة" : "Cost calculator"}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-navy lg:text-4xl">
              {ar ? "احسب تكلفة تأسيس عملك" : "Estimate your business setup cost"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {ar
                ? "اختر تفاصيل نشاطك واحصل على تقدير تقريبي للتكلفة خلال دقيقة — مبني على الرسوم الحكومية الرسمية وأتعاب خدمتنا."
                : "Pick your details for a one-minute estimate — built on official government fees plus our service fee."}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <Field
                label={ar ? "نوع الشركة" : "Company type"}
                value={structure}
                onChange={setStructure}
                placeholder={ar ? "اختر الشكل القانوني" : "Select structure"}
                options={structureOpts.map((o) => ({ id: o.id, label: t(o.label, locale) }))}
              />
              <Field
                label={ar ? "النشاط" : "Activity"}
                value={activity}
                onChange={setActivity}
                placeholder={ar ? "اختر النشاط" : "Select activity"}
                options={activityOpts.map((o) => ({ id: o.id, label: t(o.label, locale) }))}
              />
              <Field
                label={ar ? "المدينة / المنطقة" : "City / Region"}
                value={city}
                onChange={setCity}
                placeholder={ar ? "اختر المنطقة" : "Select region"}
                options={cities.map((c) => ({ id: c, label: c }))}
              />
              <label className="block">
                <span className="mb-1.5 block text-xs font-semibold text-muted">
                  {ar ? "عدد الشركاء" : "Partners"}
                </span>
                <span className="flex items-center justify-between rounded-xl border border-line bg-ivory/50 px-2 py-1.5">
                  <button
                    type="button"
                    aria-label={ar ? "إنقاص" : "Decrease"}
                    onClick={() => setPartners((p) => Math.max(1, p - 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-navy shadow-sm transition-colors hover:text-gold-dark"
                  >
                    <Icon name="minus" className="h-4 w-4" />
                  </button>
                  <span className="text-base font-bold text-navy">{partners}</span>
                  <button
                    type="button"
                    aria-label={ar ? "زيادة" : "Increase"}
                    onClick={() => setPartners((p) => Math.min(50, p + 1))}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white text-navy shadow-sm transition-colors hover:text-gold-dark"
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </button>
                </span>
              </label>
            </div>

            <button
              type="button"
              onClick={go}
              className="btn-sheen mt-6 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-bold text-navy shadow-gold transition-colors hover:bg-gold-dark"
            >
              {ar ? "ابدأ الآن" : "Start now"}
              <Icon name="arrow-right" className={ar ? "h-4 w-4 rotate-180" : "h-4 w-4"} />
            </button>
            <p className="mt-3 flex items-center gap-1.5 text-xs text-muted">
              <Icon name="shield-check" className="h-3.5 w-3.5 text-gold-dark" />
              {ar ? "الرسوم الحكومية تُدفع بقيمتها الفعلية — بلا رسوم خفية." : "Government fees paid at cost — no hidden charges."}
            </p>
          </div>

          {/* Estimate card */}
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 text-white shadow-card lg:p-10">
            <Pattern id="calc-est" className="absolute inset-0 text-gold opacity-[0.06]" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
                {ar ? "التكلفة التقديرية للتأسيس" : "Estimated setup cost"}
              </p>
              <p className="mt-2 text-4xl font-bold tracking-tight lg:text-5xl">
                {fmt(teaserEstimate.total.min)}
                <span className="text-white/50"> – </span>
                {fmt(teaserEstimate.total.max)}
                <span className="ms-2 text-base font-semibold text-white/60">{ar ? "ر.س" : "SAR"}</span>
              </p>

              <div className="mt-7 space-y-4">
                {teaserEstimate.rows.map((row, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2 text-white/85">
                        <Icon name={row.icon} className="h-4 w-4 text-gold-soft" />
                        {t(row.label, locale)}
                      </span>
                      <span className="font-semibold text-white/70">{t(row.range, locale)}</span>
                    </div>
                    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gold" style={{ width: `${Math.round(row.pct * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-7 text-xs leading-relaxed text-white/55">
                {ar
                  ? "تقدير تقريبي يختلف حسب النشاط والتملّك والموقع — يؤكده مستشارك."
                  : "Indicative range; varies by activity, ownership, and location — confirmed by your consultant."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
