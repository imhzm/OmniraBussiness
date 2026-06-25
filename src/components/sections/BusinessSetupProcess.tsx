"use client";

import { useState } from "react";
import type { L, Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Icon } from "@/components/ui/Icon";

type Platform = { name: L; desc: L };
type Step = { icon: string; title: L; text: L; platforms: Platform[] };

const STEPS: Step[] = [
  {
    icon: "file-text",
    title: { en: "Get Investment License", ar: "احصل على ترخيص الاستثمار" },
    text: {
      en: "Apply for an investment license through the Ministry of Investment (MISA) to legally establish your business in Saudi Arabia.",
      ar: "تقدّم بطلب ترخيص استثمار عبر وزارة الاستثمار (MISA) لتأسيس عملك بشكل نظامي في المملكة العربية السعودية.",
    },
    platforms: [
      {
        name: { en: "MISA — Ministry of Investment", ar: "وزارة الاستثمار (MISA)" },
        desc: {
          en: "Saudi ministry for investment promotion and licensing; Invest Saudi and MISA e-services support foreign and strategic projects — procedures on misa.gov.sa.",
          ar: "وزارة الاستثمار وترويج الفرص والترخيص؛ خدمات «استثمر في السعودية» وMISA الإلكترونية تدعم المشاريع الأجنبية والاستراتيجية — الإجراءات على misa.gov.sa.",
        },
      },
      {
        name: { en: "Saudi Business Center", ar: "المركز السعودي للأعمال" },
        desc: {
          en: "Government one-stop business services (branches + business.sa); CR and related procedures via the official portals.",
          ar: "خدمات الأعمال الحكومية من نافذة واحدة (فروع + business.sa)؛ السجل التجاري والإجراءات المرتبطة عبر المنصات الرسمية.",
        },
      },
    ],
  },
  {
    icon: "building-2",
    title: { en: "Register Your Company", ar: "سجّل شركتك" },
    text: {
      en: "Complete company incorporation and obtain your commercial registration through official government systems.",
      ar: "أكمل تأسيس الشركة واحصل على سجلك التجاري عبر الأنظمة الحكومية الرسمية.",
    },
    platforms: [
      {
        name: { en: "Ministry of Commerce", ar: "وزارة التجارة" },
        desc: {
          en: "Trade-name reservation, notarized Articles of Association, and Commercial Registration issuance.",
          ar: "حجز الاسم التجاري وتوثيق عقد التأسيس وإصدار السجل التجاري.",
        },
      },
      {
        name: { en: "Saudi Business Center", ar: "المركز السعودي للأعمال" },
        desc: {
          en: "Unified national number, branch registration, and one-stop incorporation services.",
          ar: "الرقم الوطني الموحّد وتسجيل الفروع وخدمات التأسيس من نافذة واحدة.",
        },
      },
      {
        name: { en: "Chamber of Commerce", ar: "الغرفة التجارية" },
        desc: {
          en: "Membership activation and certification of commercial documents and signatures.",
          ar: "تفعيل العضوية وتصديق المستندات التجارية والتواقيع.",
        },
      },
    ],
  },
  {
    icon: "banknote",
    title: { en: "Open Bank Account", ar: "افتح حساباً بنكياً" },
    text: {
      en: "Set up a corporate bank account to enable financial operations and capital transactions in Saudi Arabia.",
      ar: "افتح حساباً بنكياً تجارياً لتمكين العمليات المالية وحركة رأس المال في المملكة.",
    },
    platforms: [
      {
        name: { en: "Saudi banks (SAMA-regulated)", ar: "البنوك السعودية (تحت تنظيم ساما)" },
        desc: {
          en: "Corporate account opening and capital deposit under Saudi Central Bank (SAMA) compliance rules.",
          ar: "فتح الحساب التجاري وإيداع رأس المال وفق ضوابط امتثال البنك المركزي السعودي (ساما).",
        },
      },
      {
        name: { en: "Nafath / Absher", ar: "نفاذ / أبشر" },
        desc: {
          en: "Verified national digital identity for the authorized signatories and account activation.",
          ar: "الهوية الرقمية الوطنية الموثّقة للمفوّضين بالتوقيع وتفعيل الحساب.",
        },
      },
    ],
  },
  {
    icon: "rocket",
    title: { en: "Start Operations", ar: "ابدأ التشغيل" },
    text: {
      en: "Activate your business operations by completing workforce, tax, and compliance requirements.",
      ar: "فعّل عملياتك التشغيلية بإكمال متطلبات القوى العاملة والضريبة والامتثال.",
    },
    platforms: [
      {
        name: { en: "Qiwa", ar: "قوى" },
        desc: {
          en: "HRSD digital labour hub: contracts, work permits, establishment records, and Saudization (Qiwa.sa).",
          ar: "منصة العمل الرقمية لوزارة الموارد البشرية: العقود ورخص العمل وملفات المنشأة والسعودة (Qiwa.sa).",
        },
      },
      {
        name: { en: "GOSI & Muqeem", ar: "التأمينات ومقيم" },
        desc: {
          en: "Social-insurance registration for employees and expat residency (iqama) management.",
          ar: "تسجيل التأمينات الاجتماعية للموظفين وإدارة إقامات الوافدين (مقيم).",
        },
      },
      {
        name: { en: "ZATCA", ar: "زاتكا" },
        desc: {
          en: "Saudi authority for VAT, zakat, customs, and FATOORA e-invoicing — registration and filings (zatca.gov.sa).",
          ar: "هيئة الزكاة والضريبة والجمارك للقيمة المضافة والزكاة والجمارك وفاتورة الإلكترونية — التسجيل والإقرارات (zatca.gov.sa).",
        },
      },
      {
        name: { en: "Balady", ar: "بلدي" },
        desc: {
          en: "National municipal platform for commercial licences, permits, and service requests (balady.gov.sa).",
          ar: "المنصة البلدية الوطنية للرخص التجارية والتصاريح وطلبات الخدمات (balady.gov.sa).",
        },
      },
      {
        name: { en: "Mudad", ar: "مدد" },
        desc: {
          en: "Payroll processing and Wage Protection System (WPS) compliance for your workforce.",
          ar: "معالجة الرواتب والالتزام بنظام حماية الأجور (WPS) لموظفيك.",
        },
      },
    ],
  },
];

export function BusinessSetupProcess({ locale }: { locale: Locale }) {
  const [active, setActive] = useState(0);
  const ar = locale === "ar";
  const step = STEPS[active];

  return (
    <section className="bg-ivory/50 py-16 lg:py-24">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="flex h-11 w-11 mx-auto items-center justify-center rounded-xl bg-gold/15 text-gold-dark">
            <Icon name="landmark" className="h-5 w-5" />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {ar ? "العملية الرسمية للأعمال" : "Official business process"}
          </p>
          <h2 className="mt-2 text-3xl font-bold text-navy lg:text-4xl">
            {ar ? "رحلة تأسيس الأعمال والأنظمة الحكومية" : "Business Setup Process and Government Systems"}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {ar
              ? "أربع خطوات واضحة من الترخيص حتى التشغيل — اضغط أي خطوة لرؤية الأنظمة والمنصات الحكومية المستخدمة فيها."
              : "Four clear steps from licensing to operations — select any step to see the government systems and platforms used in it."}
          </p>
        </div>

        {/* Stepper rail */}
        <div className="relative mx-auto mt-10 max-w-3xl px-6">
          <div className="absolute inset-x-6 top-1/2 h-px -translate-y-1/2 bg-line" aria-hidden="true" />
          <ol className="relative flex items-center justify-between">
            {STEPS.map((s, i) => (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={active === i}
                  aria-label={t(s.title, locale)}
                  className={cn(
                    "flex h-10 w-10 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-200",
                    active === i
                      ? "border-navy bg-navy text-white shadow-card"
                      : i < active
                        ? "border-gold bg-gold text-navy"
                        : "border-line bg-white text-muted hover:border-gold/60"
                  )}
                >
                  {i + 1}
                </button>
              </li>
            ))}
          </ol>
        </div>

        {/* Step cards */}
        <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((s, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              className={cn(
                "group flex flex-col rounded-2xl border p-5 text-start transition-all duration-200",
                active === i
                  ? "border-gold bg-white shadow-gold ring-1 ring-gold/40"
                  : "border-line bg-white/70 hover:-translate-y-0.5 hover:shadow-card"
              )}
            >
              <span
                className={cn(
                  "flex h-11 w-11 items-center justify-center rounded-xl transition-colors",
                  active === i ? "bg-navy text-gold-soft" : "bg-ivory text-gold-dark"
                )}
              >
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="mt-4 text-xs font-bold uppercase tracking-wider text-gold-dark">
                {ar ? "الخطوة" : "Step"} {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-1 text-base font-bold text-navy">{t(s.title, locale)}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted">{t(s.text, locale)}</p>
            </button>
          ))}
        </div>

        {/* Platforms for the active step */}
        <div className="mt-8 rounded-2xl border border-line bg-white p-6 shadow-card lg:p-8">
          <p className="text-center text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
            {ar ? "المنصات المستخدمة في هذه الخطوة" : "Platforms used in this step"}
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {step.platforms.map((p, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-line bg-ivory/50 p-4"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold-dark">
                  <Icon name="badge-check" className="h-4 w-4" />
                </span>
                <div>
                  <h4 className="text-sm font-bold text-navy">{t(p.name, locale)}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{t(p.desc, locale)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-3 border-t border-line pt-5 text-center">
            <p className="text-xs text-muted">
              <Icon name="shield-check" className="me-1 inline h-4 w-4 text-gold-dark" />
              {ar
                ? "العملية مدعومة بأنظمة ومنصات حكومية متكاملة."
                : "This process is supported by integrated government platforms and regulatory systems."}
            </p>
            <a
              href={localeHref(locale, "/resources/platforms")}
              className="inline-flex items-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-navy/90"
            >
              {ar ? "تصفّح كل المنصات" : "Access all platforms"}
              <Icon name="arrow-right" className={cn("h-4 w-4", ar && "rotate-180")} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
