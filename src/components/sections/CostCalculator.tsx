"use client";

import { useMemo, useState, type FormEvent } from "react";
import type { Locale } from "@/i18n/config";
import { cn, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/config/site";
import { calcSteps, estimate, type Selections } from "@/data/calculator";

const fmt = (n: number) => n.toLocaleString("en-US");

export function CostCalculator({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [stepIdx, setStepIdx] = useState(0);
  const [sel, setSel] = useState<Selections>({ addons: [] });
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [sent, setSent] = useState(false);

  const step = calcSteps[stepIdx];
  const est = useMemo(() => estimate(sel), [sel]);
  const isLast = stepIdx === calcSteps.length - 1;
  const last = calcSteps.length - 1;

  const selectedValue = step.multi
    ? sel.addons
    : ([sel[step.id as keyof Selections] as string].filter(Boolean) as string[]);

  function choose(id: string) {
    if (step.multi) {
      setSel((s) => ({
        ...s,
        addons: s.addons.includes(id) ? s.addons.filter((x) => x !== id) : [...s.addons, id],
      }));
    } else {
      setSel((s) => ({ ...s, [step.id]: id }));
      if (stepIdx < last) window.setTimeout(() => setStepIdx((i) => Math.min(i + 1, last)), 200);
    }
  }

  function submit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      ar ? "طلب تقدير تكلفة تأسيس — Omnera One" : "Business setup cost estimate request — Omnera One",
      "",
      ...calcSteps
        .filter((s) => !s.multi)
        .map((s) => {
          const v = sel[s.id as keyof Selections] as string | undefined;
          const opt = s.options.find((o) => o.id === v);
          return `${t(s.title, locale)}: ${opt ? t(opt.label, locale) : "-"}`;
        }),
      `${ar ? "خدمات إضافية" : "Add-ons"}: ${
        sel.addons.map((id) => t(calcSteps[5].options.find((o) => o.id === id)!.label, locale)).join("، ") || "-"
      }`,
      "",
      `${ar ? "التكلفة الأولية" : "Initial"}: SAR ${fmt(est.initial.min)} – ${fmt(est.initial.max)}`,
      `${ar ? "تشغيلي شهري" : "Monthly"}: SAR ${fmt(est.monthly.min)} – ${fmt(est.monthly.max)}`,
      `${ar ? "الباقة الموصى بها" : "Recommended"}: ${t(est.recommended.name, locale)}`,
      "",
      `${ar ? "الاسم" : "Name"}: ${form.name}`,
      `${ar ? "البريد" : "Email"}: ${form.email}`,
      `${ar ? "الجوال" : "Phone"}: ${form.phone}`,
    ].join("\n");
    setSent(true);
    window.open(whatsappLink(lines), "_blank");
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1.12fr_0.88fr]">
      {/* ── Wizard ── */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card lg:p-8">
        <div className="flex items-center justify-between text-xs font-semibold text-muted">
          <span>
            {ar ? `الخطوة ${stepIdx + 1} من ${calcSteps.length}` : `Step ${stepIdx + 1} of ${calcSteps.length}`}
          </span>
          <span>{Math.round(((stepIdx + 1) / calcSteps.length) * 100)}%</span>
        </div>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-ivory">
          <div
            className="h-full rounded-full bg-gold transition-all duration-300"
            style={{ width: `${((stepIdx + 1) / calcSteps.length) * 100}%` }}
          />
        </div>

        <h3 className="mt-5 text-xl font-bold text-navy">{t(step.title, locale)}</h3>
        <p className="mt-1 text-sm text-muted">{t(step.hint, locale)}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {step.options.map((o) => {
            const active = selectedValue.includes(o.id);
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => choose(o.id)}
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all",
                  active
                    ? "border-navy bg-navy text-white shadow-card"
                    : "border-line bg-white text-navy hover:border-gold/60 hover:bg-ivory/60"
                )}
              >
                {step.multi && active && <Icon name="check-circle-2" className="h-4 w-4 text-gold-soft" />}
                {t(o.label, locale)}
              </button>
            );
          })}
        </div>

        <div className="mt-7 flex items-center gap-3">
          {stepIdx > 0 && (
            <button
              type="button"
              onClick={() => setStepIdx((i) => Math.max(0, i - 1))}
              className="rounded-full border border-line bg-white px-5 py-2.5 text-sm font-bold text-navy transition-colors hover:bg-ivory"
            >
              {ar ? "السابق" : "Back"}
            </button>
          )}
          {!isLast ? (
            <button
              type="button"
              onClick={() => setStepIdx((i) => Math.min(last, i + 1))}
              className="rounded-full bg-navy px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy/90"
            >
              {ar ? "التالي" : "Continue"}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setShowForm(true)}
              className="rounded-full bg-gold px-6 py-2.5 text-sm font-bold text-navy shadow-gold transition-colors hover:bg-gold/90"
            >
              {ar ? "احصل على تقدير مفصّل" : "Get detailed estimate"}
            </button>
          )}
        </div>

        {/* Recommended package */}
        <div className="mt-7 rounded-xl border border-gold/30 bg-gold-faint p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-gold-dark">
            {ar ? "الباقة الموصى بها لك" : "Recommended package"}
          </p>
          <h4 className="mt-1 text-base font-bold text-navy">{t(est.recommended.name, locale)}</h4>
          <p className="mt-1 text-sm leading-relaxed text-muted">{t(est.recommended.blurb, locale)}</p>
        </div>

        {/* Lead form */}
        {showForm && (
          <form onSubmit={submit} className="mt-6 rounded-xl border border-line bg-ivory/50 p-5">
            <h4 className="text-base font-bold text-navy">
              {ar ? "احصل على تقديرك المفصّل" : "Get your detailed estimate"}
            </h4>
            <p className="mt-1 text-xs text-muted">
              {ar ? "نرسل لك ملخصًا بالتفصيل والخطوات التالية." : "We will send a summary with the breakdown and next steps."}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {(["name", "email", "phone"] as const).map((k) => (
                <input
                  key={k}
                  required
                  type={k === "email" ? "email" : k === "phone" ? "tel" : "text"}
                  value={form[k]}
                  onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
                  placeholder={
                    ar
                      ? k === "name" ? "الاسم" : k === "email" ? "البريد" : "الجوال"
                      : k === "name" ? "Full name" : k === "email" ? "Email" : "Phone"
                  }
                  className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm outline-none focus:border-gold"
                />
              ))}
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy/90 sm:w-auto sm:px-8"
            >
              {ar ? "أرسل عبر واتساب" : "Send via WhatsApp"}
            </button>
            {sent && (
              <p className="mt-3 text-xs font-semibold text-gold-dark">
                {ar ? "تم فتح واتساب بملخص تقديرك ✅" : "WhatsApp opened with your estimate summary ✅"}
              </p>
            )}
          </form>
        )}

        <p className="mt-5 text-xs leading-relaxed text-faint">
          {ar
            ? "تقدير إرشادي فقط. الرسوم الحكومية والإيجارات والأتعاب تختلف حسب النشاط والملكية ونطاق الخدمة. ليس استشارة قانونية أو ضريبية."
            : "Indicative estimate only. Government fees, leases, and professional charges vary by activity, ownership, and service scope. Not legal or tax advice."}
        </p>
      </div>

      {/* ── Live estimate panel ── */}
      <div className="self-start lg:sticky lg:top-24">
        <div className="rounded-2xl bg-navy p-6 text-white shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            {ar ? "التكلفة الأولية التقديرية" : "Estimated initial cost"}
          </p>
          <p className="mt-1 text-2xl font-bold tracking-tight">
            SAR {fmt(est.initial.min)} – {fmt(est.initial.max)}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-white/55">
                {ar ? "تشغيلي شهري" : "Monthly operations"}
              </p>
              <p className="mt-0.5 text-sm font-bold">
                SAR {fmt(est.monthly.min)} – {fmt(est.monthly.max)}
              </p>
            </div>
            <div className="rounded-xl bg-white/5 p-3">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-white/55">
                {ar ? "المدة المتوقعة" : "Estimated timeline"}
              </p>
              <p className="mt-0.5 text-sm font-bold">{t(est.timeline, locale)}</p>
            </div>
          </div>

          <div className="mt-5 border-t border-white/10 pt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/55">
              {ar ? "تفصيل التكلفة" : "Cost breakdown"}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {est.breakdown.map((b, i) => (
                <li key={i} className="flex items-baseline justify-between gap-3">
                  <span className="text-white/72">{t(b.item, locale)}</span>
                  <span className="shrink-0 font-semibold tabular-nums">
                    {b.min === b.max ? `SAR ${fmt(b.min)}` : `SAR ${fmt(b.min)} – ${fmt(b.max)}`}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <a
            href={whatsappLink(
              ar ? "مرحبًا Omnera One، أريد استشارة حول تكلفة التأسيس." : "Hello Omnera One, I'd like advice on my setup cost."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold-soft underline-offset-4 hover:underline"
          >
            <Icon name="message-circle" className="h-4 w-4" />
            {ar ? "كلّم مستشارًا" : "Talk to an advisor"}
          </a>
        </div>
        <p className="mt-3 px-1 text-center text-[0.7rem] text-faint">
          {ar ? "محدّث: 2026 — رسوم حكومية + تقديرات داخلية." : "Updated: 2026 — government fees + internal estimates."}
        </p>
      </div>
    </div>
  );
}
