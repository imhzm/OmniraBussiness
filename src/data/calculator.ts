import type { L } from "@/i18n/config";

/**
 * Business-setup cost estimator model.
 * All figures are indicative ranges in SAR, grounded in our own pricing
 * (setup fees 25k/35k/49k, government fees, and management plans 800/1,200/2,300 /mo).
 * Government fees are paid at cost; professional fees are ours.
 */

export type CalcOption = { id: string; label: L };
export type CalcStep = { id: StepId; title: L; hint: L; multi?: boolean; options: CalcOption[] };
export type StepId = "activity" | "structure" | "ownership" | "office" | "team" | "addons";

export type Selections = {
  activity?: string;
  structure?: string;
  ownership?: string;
  office?: string;
  team?: string;
  addons: string[];
};

export type Range = { min: number; max: number };
export type Breakdown = { item: L; min: number; max: number };
export type Estimate = {
  initial: Range;
  monthly: Range;
  timeline: L;
  breakdown: Breakdown[];
  recommended: { name: L; blurb: L };
};

export const calcSteps: CalcStep[] = [
  {
    id: "activity",
    title: { en: "Business activity", ar: "نشاط العمل" },
    hint: { en: "What will your company do?", ar: "إيش نشاط شركتك؟" },
    options: [
      { id: "it", label: { en: "IT / Software", ar: "تقنية / برمجيات" } },
      { id: "trading", label: { en: "Trading", ar: "تجارة" } },
      { id: "consulting", label: { en: "Consulting", ar: "استشارات" } },
      { id: "industrial", label: { en: "Industrial", ar: "صناعي" } },
      { id: "ecommerce", label: { en: "E-commerce", ar: "تجارة إلكترونية" } },
      { id: "marketing", label: { en: "Marketing", ar: "تسويق" } },
      { id: "logistics", label: { en: "Logistics", ar: "لوجستيات" } },
      { id: "other", label: { en: "Other", ar: "أخرى" } },
    ],
  },
  {
    id: "structure",
    title: { en: "Company structure", ar: "الشكل القانوني" },
    hint: { en: "The legal form of the entity.", ar: "الشكل القانوني للكيان." },
    options: [
      { id: "llc", label: { en: "LLC", ar: "ذات مسؤولية محدودة" } },
      { id: "branch", label: { en: "Foreign company branch", ar: "فرع شركة أجنبية" } },
      { id: "sole", label: { en: "Sole establishment", ar: "مؤسسة فردية" } },
      { id: "rhq", label: { en: "Regional HQ", ar: "مقر إقليمي" } },
    ],
  },
  {
    id: "ownership",
    title: { en: "Ownership", ar: "الملكية" },
    hint: { en: "Who owns the company?", ar: "مين مالك الشركة؟" },
    options: [
      { id: "saudi", label: { en: "Saudi-owned", ar: "ملكية سعودية" } },
      { id: "gcc", label: { en: "GCC-owned", ar: "ملكية خليجية" } },
      { id: "foreign", label: { en: "Foreign investor", ar: "مستثمر أجنبي" } },
    ],
  },
  {
    id: "office",
    title: { en: "Office", ar: "المكتب" },
    hint: { en: "Your operating address in the Kingdom.", ar: "عنوان عملك في المملكة." },
    options: [
      { id: "virtual", label: { en: "Virtual address", ar: "عنوان افتراضي" } },
      { id: "coworking", label: { en: "Coworking", ar: "مساحة عمل مشتركة" } },
      { id: "private", label: { en: "Private office", ar: "مكتب خاص" } },
      { id: "hq", label: { en: "HQ floor", ar: "مقر كامل" } },
    ],
  },
  {
    id: "team",
    title: { en: "Team size", ar: "حجم الفريق" },
    hint: { en: "How many employees in year one?", ar: "كام موظف في السنة الأولى؟" },
    options: [
      { id: "1-5", label: { en: "1–5", ar: "1–5" } },
      { id: "6-15", label: { en: "6–15", ar: "6–15" } },
      { id: "16-30", label: { en: "16–30", ar: "16–30" } },
      { id: "30+", label: { en: "30+", ar: "+30" } },
    ],
  },
  {
    id: "addons",
    title: { en: "Additional services", ar: "خدمات إضافية" },
    hint: { en: "Select all you need — optional.", ar: "اختر كل ما تحتاجه — اختياري." },
    multi: true,
    options: [
      { id: "accounting", label: { en: "Accounting", ar: "محاسبة" } },
      { id: "vat", label: { en: "VAT registration", ar: "تسجيل ضريبة القيمة المضافة" } },
      { id: "hr", label: { en: "HR / payroll", ar: "موارد بشرية / رواتب" } },
      { id: "legal", label: { en: "Legal support", ar: "دعم قانوني" } },
      { id: "trademark", label: { en: "Trademark registration", ar: "تسجيل علامة تجارية" } },
      { id: "pro", label: { en: "PRO services", ar: "خدمات المعقّب (PRO)" } },
      { id: "gm", label: { en: "GM services", ar: "خدمات المدير العام" } },
    ],
  },
];

// ── cost tables (SAR) ──────────────────────────────────────────────────────
const SETUP_FEE: Record<string, Range> = {
  sole: { min: 25000, max: 25000 },
  llc: { min: 25000, max: 35000 },
  branch: { min: 35000, max: 49000 },
  rhq: { min: 49000, max: 65000 },
};
const MISA: Record<string, Range> = {
  saudi: { min: 0, max: 0 },
  gcc: { min: 0, max: 2000 },
  foreign: { min: 2000, max: 12000 },
};
const CR: Range = { min: 1775, max: 2100 };
const OFFICE: Record<string, Range> = {
  virtual: { min: 0, max: 5000 },
  coworking: { min: 5000, max: 12000 },
  private: { min: 12000, max: 25000 },
  hq: { min: 25000, max: 60000 },
};
const OFFICE_MONTHLY: Record<string, Range> = {
  virtual: { min: 0, max: 400 },
  coworking: { min: 600, max: 1800 },
  private: { min: 2000, max: 6000 },
  hq: { min: 6000, max: 18000 },
};
const VISAS: Record<string, Range> = {
  "1-5": { min: 3000, max: 18000 },
  "6-15": { min: 15000, max: 40000 },
  "16-30": { min: 30000, max: 70000 },
  "30+": { min: 60000, max: 120000 },
};
const MGMT_MONTHLY: Record<string, Range> = {
  "1-5": { min: 800, max: 1200 },
  "6-15": { min: 1200, max: 2300 },
  "16-30": { min: 2300, max: 3500 },
  "30+": { min: 3500, max: 5500 },
};
const COMPLIANCE: Range = { min: 2000, max: 8000 };
const ADDON: Record<string, Range> = {
  accounting: { min: 1500, max: 4000 },
  vat: { min: 800, max: 2000 },
  hr: { min: 1500, max: 4000 },
  legal: { min: 2000, max: 6000 },
  trademark: { min: 1500, max: 4000 },
  pro: { min: 2000, max: 6000 },
  gm: { min: 2000, max: 5000 },
};
const TIMELINE: Record<string, L> = {
  saudi: { en: "2–4 weeks", ar: "2–4 أسابيع" },
  gcc: { en: "3–6 weeks", ar: "3–6 أسابيع" },
  foreign: { en: "4–8 weeks", ar: "4–8 أسابيع" },
};

const PKG = {
  starter: { name: { en: "Launch", ar: "الانطلاق" }, blurb: { en: "Lean setup for small teams and a virtual presence.", ar: "تأسيس خفيف لفرق صغيرة وحضور افتراضي." } },
  growth: { name: { en: "Growth", ar: "النمو" }, blurb: { en: "Full formation with bank guarantee and 3 months management.", ar: "تأسيس كامل بضمان بنكي و3 شهور إدارة." } },
  turnkey: { name: { en: "Turnkey", ar: "التمكين الكامل" }, blurb: { en: "Complex structures, foreign ownership, or HQ-scale operations.", ar: "هياكل معقّدة أو ملكية أجنبية أو عمليات بحجم مقر." } },
};

const z: Range = { min: 0, max: 0 };
const add = (a: Range, b: Range): Range => ({ min: a.min + b.min, max: a.max + b.max });

export function estimate(sel: Selections): Estimate {
  const setup = SETUP_FEE[sel.structure ?? ""] ?? SETUP_FEE.llc;
  const misa = MISA[sel.ownership ?? ""] ?? MISA.foreign;
  const office = OFFICE[sel.office ?? ""] ?? OFFICE.virtual;
  const visas = VISAS[sel.team ?? ""] ?? VISAS["1-5"];
  const officeMo = OFFICE_MONTHLY[sel.office ?? ""] ?? OFFICE_MONTHLY.virtual;
  const mgmtMo = MGMT_MONTHLY[sel.team ?? ""] ?? MGMT_MONTHLY["1-5"];
  const addons = (sel.addons ?? []).reduce((acc, id) => add(acc, ADDON[id] ?? z), z);

  const breakdown: Breakdown[] = [
    { item: { en: "Professional setup fee", ar: "أتعاب التأسيس" }, ...setup },
    { item: { en: "MISA / investment license", ar: "ترخيص الاستثمار MISA" }, ...misa },
    { item: { en: "Commercial registration", ar: "السجل التجاري" }, ...CR },
    { item: { en: "Office setup", ar: "تجهيز المكتب" }, ...office },
    { item: { en: "Visas & immigration", ar: "التأشيرات والإقامات" }, ...visas },
    { item: { en: "Compliance & filings", ar: "الامتثال والإقرارات" }, ...COMPLIANCE },
  ];
  if (addons.max > 0) breakdown.push({ item: { en: "Additional services", ar: "خدمات إضافية" }, ...addons });

  const initial = breakdown.reduce((acc, b) => add(acc, { min: b.min, max: b.max }), z);
  const monthly = add(mgmtMo, officeMo);
  const timeline = TIMELINE[sel.ownership ?? ""] ?? TIMELINE.foreign;

  // recommended package
  let recommended = PKG.growth;
  const foreign = sel.ownership === "foreign";
  const big = sel.team === "16-30" || sel.team === "30+" || sel.structure === "rhq" || sel.office === "hq";
  if (big) recommended = PKG.turnkey;
  else if (!foreign && (sel.office === "virtual" || sel.team === "1-5") && sel.structure !== "branch") recommended = PKG.starter;

  return { initial, monthly, timeline, breakdown, recommended };
}

/** Headline teaser range shown on the marketing section (before opening the calculator). */
export const teaserEstimate = {
  total: { min: 25000, max: 75000 },
  rows: [
    { label: { en: "Government fees", ar: "الرسوم الحكومية" }, range: { en: "SAR 4,000 – 20,000", ar: "4,000 – 20,000 ر.س" }, pct: 0.55, icon: "landmark" },
    { label: { en: "Professional fees", ar: "أتعاب الخدمة" }, range: { en: "SAR 25,000 – 49,000", ar: "25,000 – 49,000 ر.س" }, pct: 0.8, icon: "file-text" },
    { label: { en: "Operational (monthly)", ar: "تشغيلي (شهري)" }, range: { en: "SAR 800 – 5,500", ar: "800 – 5,500 ر.س" }, pct: 0.35, icon: "users" },
  ],
};
