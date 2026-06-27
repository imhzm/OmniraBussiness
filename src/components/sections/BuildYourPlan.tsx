"use client";

import { useMemo, useState } from "react";
import type { Locale } from "@/i18n/config";
import { cn, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";
import { whatsappLink } from "@/config/site";
import { planServices, planEstimate, planEmployeesIncluded } from "@/data/calculator";

const fmt = (n: number) => n.toLocaleString("en-US");

function Stepper({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  const clamp = (v: number) => Math.max(min, Math.min(max, v));
  return (
    <div className="rounded-xl border border-line bg-ivory/40 p-3">
      <p className="text-xs font-semibold text-muted">{label}</p>
      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={() => onChange(clamp(value - 1))}
          aria-label="-"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-lg font-bold text-navy transition-colors hover:bg-ivory"
        >
          −
        </button>
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          onChange={(e) => onChange(clamp(parseInt(e.target.value || "0", 10)))}
          className="h-9 w-full min-w-0 rounded-lg border border-line bg-white text-center text-sm font-bold text-navy outline-none focus:border-gold"
        />
        <button
          type="button"
          onClick={() => onChange(clamp(value + 1))}
          aria-label="+"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-line bg-white text-lg font-bold text-navy transition-colors hover:bg-ivory"
        >
          +
        </button>
      </div>
    </div>
  );
}

export function BuildYourPlan({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const [selected, setSelected] = useState<string[]>(["absher", "qiwa", "muqeem", "chamber"]);
  const [employees, setEmployees] = useState(5);
  const [branches, setBranches] = useState(1);

  const est = useMemo(() => planEstimate(selected, employees, branches), [selected, employees, branches]);
  const toggle = (id: string) =>
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]));

  const waMsg = [
    ar ? "مرحبًا Omnera One، صمّمت باقة إدارة منصات:" : "Hello Omnera One, I built a platform-management plan:",
    "",
    `${ar ? "الخدمات" : "Services"}: ${
      planServices.filter((s) => selected.includes(s.id)).map((s) => t(s.label, locale)).join("، ") || "-"
    }`,
    `${ar ? "الموظفون" : "Employees"}: ${employees}`,
    `${ar ? "الفروع" : "Branches"}: ${branches}`,
    `${ar ? "السعر السنوي التقديري" : "Estimated annual price"}: SAR ${fmt(est.annual)}`,
  ].join("\n");

  return (
    <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
      {/* Configurator */}
      <div className="rounded-2xl border border-line bg-white p-6 shadow-card lg:p-8">
        <h3 className="text-lg font-bold text-navy">
          {ar ? "1. اختر الخدمات اللي تحتاجها" : "1. Choose the services you need"}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {ar ? "اختر المنصات الحكومية اللي تبي نديرها لك." : "Pick the government platforms you want us to manage."}
        </p>

        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
          {planServices.map((s) => {
            const active = selected.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggle(s.id)}
                className={cn(
                  "flex items-start gap-3 rounded-xl border p-3 text-start transition-all",
                  active
                    ? "border-navy bg-navy/[0.03] ring-1 ring-navy/20"
                    : "border-line bg-white hover:border-gold/50 hover:bg-ivory/40"
                )}
              >
                <span
                  className={cn(
                    "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                    active ? "bg-navy text-gold-soft" : "bg-ivory text-gold-dark"
                  )}
                >
                  <Icon name={active ? "check-circle-2" : s.icon} className="h-4 w-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-navy">{t(s.label, locale)}</span>
                  <span className="block text-xs leading-snug text-muted">{t(s.desc, locale)}</span>
                </span>
                <span className="shrink-0 text-xs font-bold text-gold-dark tabular-nums">{fmt(s.price)}</span>
              </button>
            );
          })}
        </div>

        <h3 className="mt-7 text-lg font-bold text-navy">
          {ar ? "2. عدد موظفيك وفروعك" : "2. Your team and branches"}
        </h3>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <Stepper
            label={ar ? `عدد الموظفين (${planEmployeesIncluded} مشمولون)` : `Employees (${planEmployeesIncluded} included)`}
            value={employees}
            min={1}
            max={500}
            onChange={setEmployees}
          />
          <Stepper label={ar ? "عدد الفروع" : "Branches"} value={branches} min={1} max={50} onChange={setBranches} />
        </div>

        <p className="mt-5 text-xs leading-relaxed text-faint">
          {ar
            ? "سعر إرشادي سنوي لأتعاب إدارة المنصات. الرسوم الحكومية تُدفع كما هي للجهات. السعر النهائي يؤكده مستشارك حسب نشاطك."
            : "Indicative annual fee for platform management. Government fees are paid at cost. A consultant confirms the final price for your activity."}
        </p>
      </div>

      {/* Live price */}
      <div className="self-start lg:sticky lg:top-24">
        <div className="rounded-2xl bg-navy-gradient p-6 text-white shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-gold-soft">
            {ar ? "سعرك السنوي التقديري" : "Your estimated annual price"}
          </p>
          <p className="mt-1 text-3xl font-bold tracking-tight">
            {est.annual > 0 ? <>SAR {fmt(est.annual)}</> : <span className="text-xl text-white/60">{ar ? "اختر خدمة للبدء" : "Pick a service to start"}</span>}
          </p>
          {est.annual > 0 && (
            <p className="mt-1 text-sm font-semibold text-white/70">
              ≈ {fmt(est.monthly)} {ar ? "ر.س / شهر" : "SAR / month"}
            </p>
          )}

          <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
            <li className="flex items-baseline justify-between gap-3">
              <span className="text-white/72">{ar ? "الباقة الأساسية" : "Base plan"}</span>
              <span className="font-semibold tabular-nums">SAR {fmt(4800)}</span>
            </li>
            <li className="flex items-baseline justify-between gap-3">
              <span className="text-white/72">{ar ? `الخدمات المختارة (${selected.length})` : `Selected services (${selected.length})`}</span>
              <span className="font-semibold tabular-nums">SAR {fmt(est.services)}</span>
            </li>
            {est.empExtra > 0 && (
              <li className="flex items-baseline justify-between gap-3">
                <span className="text-white/72">{ar ? `موظفون إضافيون (${employees - planEmployeesIncluded})` : `Extra employees (${employees - planEmployeesIncluded})`}</span>
                <span className="font-semibold tabular-nums">SAR {fmt(est.empExtra)}</span>
              </li>
            )}
            {est.brExtra > 0 && (
              <li className="flex items-baseline justify-between gap-3">
                <span className="text-white/72">{ar ? `فروع إضافية (${branches - 1})` : `Extra branches (${branches - 1})`}</span>
                <span className="font-semibold tabular-nums">SAR {fmt(est.brExtra)}</span>
              </li>
            )}
          </ul>

          <a
            href={whatsappLink(waMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy shadow-gold transition-colors hover:bg-gold/90"
          >
            <Icon name="message-circle" className="h-4 w-4" />
            {ar ? "احصل على هذه الباقة" : "Get this plan"}
          </a>
        </div>
        <p className="mt-3 px-1 text-center text-[0.7rem] text-faint">
          {ar ? "تشمل المتابعة المستمرة والتنبيهات قبل كل استحقاق." : "Includes ongoing follow-up and alerts before every due date."}
        </p>
      </div>
    </div>
  );
}
