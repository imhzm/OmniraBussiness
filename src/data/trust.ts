import type { L } from "@/i18n/config";

export type TrustItem = { icon: string; title: L; text: L };
export type TrustFaq = { q: L; a: L };
export type Testimonial = {
  name: string;
  role: L;
  company?: string;
  quote: L;
  rating?: number;
};

/** Why founders trust us — real, verifiable positioning (no fabricated claims). */
export const trustPillars: TrustItem[] = [
  {
    icon: "users",
    title: { en: "One accountable team", ar: "فريق واحد مسؤول" },
    text: {
      en: "A single Saudi team owns every step — formation, licensing, banking, and the government platforms after — so nothing falls between the cracks.",
      ar: "فريق سعودي واحد يتولّى كل خطوة — التأسيس والترخيص والحساب البنكي وإدارة المنصات بعدها — فلا تضيع أي معاملة بين الجهات.",
    },
  },
  {
    icon: "shield-check",
    title: { en: "Full price transparency", ar: "شفافية كاملة في الأسعار" },
    text: {
      en: "Our fee is fixed and stated upfront. Government fees are paid at cost, directly to the authorities — no hidden margins on official charges.",
      ar: "أتعابنا ثابتة ومعلنة مسبقًا. والرسوم الحكومية تُدفع كما هي مباشرةً للجهات — بلا أي هوامش خفية على الرسوم الرسمية.",
    },
  },
  {
    icon: "badge-check",
    title: { en: "Done for you, end to end", ar: "تنفيذ مُنجز بالكامل" },
    text: {
      en: "You don't chase any authority or touch any platform. We prepare, file, and follow up until each step is issued and active.",
      ar: "أنت لا تطارد أي جهة ولا تلمس أي منصة. نحن نُعِدّ ونقدّم ونتابع حتى تصدر كل خطوة وتصبح فعّالة.",
    },
  },
  {
    icon: "globe-2",
    title: { en: "Deep local expertise", ar: "خبرة محلية دقيقة" },
    text: {
      en: "We know the regulations, the platforms, and the sequence — so files are correct the first time and approvals aren't delayed by avoidable mistakes.",
      ar: "نعرف الأنظمة والمنصات والتسلسل الصحيح — فتُعدّ الملفات صحيحة من المرة الأولى ولا تتأخّر الموافقات بأخطاء يمكن تفاديها.",
    },
  },
];

/** Documented guarantees — real commitments Omnera One stands behind. */
export const trustGuarantees: TrustItem[] = [
  {
    icon: "check-circle-2",
    title: { en: "Guaranteed setup", ar: "تأسيس مضمون" },
    text: {
      en: "We see your company formation through to an active commercial registration — or we make it right.",
      ar: "نُكمل تأسيس شركتك حتى سجلٍ تجاريٍ فعّال — أو نصحّح المسار على نفقتنا.",
    },
  },
  {
    icon: "receipt-text",
    title: { en: "Fixed pricing, no surprises", ar: "أسعار ثابتة بلا مفاجآت" },
    text: {
      en: "The price we quote is the price you pay. Government fees are itemized separately and passed through at cost.",
      ar: "السعر الذي نعرضه هو ما تدفعه. والرسوم الحكومية تُفصَّل على حدة وتُمرَّر كما هي.",
    },
  },
  {
    icon: "calendar-days",
    title: { en: "Nothing lapses", ar: "لا ينتهي ترخيص" },
    text: {
      en: "A renewal calendar tracks every licence, permit, and platform, with alerts before each due date so you never incur a late fine.",
      ar: "تقويم تجديد يتابع كل ترخيص وتصريح ومنصة، مع تنبيهات قبل كل استحقاق فلا تتعرّض لغرامة تأخير.",
    },
  },
  {
    icon: "message-circle",
    title: { en: "One point of contact", ar: "نقطة تواصل واحدة" },
    text: {
      en: "A dedicated contact and clear status updates at every stage — you always know exactly where your file stands.",
      ar: "مسؤول تواصل مخصّص وتحديثات واضحة في كل مرحلة — تعرف دائمًا أين وصل ملفّك بالضبط.",
    },
  },
];

/** How we protect your money and your transactions. */
export const trustProtections: TrustItem[] = [
  {
    icon: "building-2",
    title: { en: "Fees paid to the authorities", ar: "الرسوم تُدفع للجهات" },
    text: {
      en: "Official government fees are paid directly to the relevant authority — you can verify every official charge.",
      ar: "الرسوم الحكومية الرسمية تُدفع مباشرةً للجهة المختصة — ويمكنك التحقق من كل رسمٍ رسمي.",
    },
  },
  {
    icon: "file-text",
    title: { en: "Documented scope before we start", ar: "نطاق موثّق قبل البدء" },
    text: {
      en: "Every engagement starts with a written scope and price, so there's no ambiguity about what's included.",
      ar: "كل تعاقد يبدأ بنطاق عمل وسعر مكتوبين، فلا غموض حول ما هو مشمول.",
    },
  },
  {
    icon: "shield-check",
    title: { en: "Your documents stay confidential", ar: "سرية مستنداتك" },
    text: {
      en: "Your IDs, contracts, and corporate documents are handled confidentially and used only to complete your transactions.",
      ar: "هوياتك وعقودك ومستنداتك تُعامَل بسرية، وتُستخدم فقط لإنجاز معاملاتك.",
    },
  },
  {
    icon: "trending-up",
    title: { en: "Proactive follow-up", ar: "متابعة استباقية" },
    text: {
      en: "We track renewals, declarations, and obligations and act before deadlines — not after a problem appears.",
      ar: "نتابع التجديدات والإقرارات والالتزامات ونتحرّك قبل المواعيد — لا بعد ظهور المشكلة.",
    },
  },
];

/** Official authorities and platforms we operate through — real and verifiable. */
export const trustAuthorities: { name: L; icon: string }[] = [
  { name: { en: "Ministry of Investment (MISA)", ar: "وزارة الاستثمار" }, icon: "building-2" },
  { name: { en: "Ministry of Commerce", ar: "وزارة التجارة" }, icon: "building-2" },
  { name: { en: "Absher", ar: "أبشر" }, icon: "badge-check" },
  { name: { en: "Qiwa", ar: "قوى" }, icon: "users" },
  { name: { en: "Muqeem", ar: "مقيم" }, icon: "file-text" },
  { name: { en: "ZATCA", ar: "هيئة الزكاة والضريبة والجمارك" }, icon: "receipt-text" },
  { name: { en: "Balady", ar: "بلدي" }, icon: "map-pin" },
  { name: { en: "Najm", ar: "نجم" }, icon: "shield-check" },
  { name: { en: "Council of Health Insurance (CCHI)", ar: "مجلس الضمان الصحي" }, icon: "heart-pulse" },
  { name: { en: "Tam", ar: "منصة تم" }, icon: "file-text" },
  { name: { en: "Mudad", ar: "مدد" }, icon: "line-chart" },
  { name: { en: "Chamber of Commerce", ar: "الغرفة التجارية" }, icon: "scroll-text" },
];

export const trustFaqs: TrustFaq[] = [
  {
    q: { en: "Are you a registered, licensed firm?", ar: "هل أنتم جهة نظامية ومرخّصة؟" },
    a: {
      en: "Yes. Omnera One operates as a registered Saudi business-services firm and works only through the Kingdom's official platforms and authorities. Every transaction we complete is recorded with the relevant government body in your name.",
      ar: "نعم. تعمل Omnera One كجهة سعودية مرخّصة لخدمات الأعمال، وعبر المنصات والجهات الرسمية في المملكة حصرًا. وكل معاملة نُنجزها تُسجَّل لدى الجهة الحكومية المختصة باسمك أنت.",
    },
  },
  {
    q: { en: "How is my money and my government fees protected?", ar: "كيف أضمن أموالي ورسومي الحكومية؟" },
    a: {
      en: "Our professional fee and the government fees are itemized separately. Official fees are paid directly to the authorities and are verifiable, and our fee is fixed and agreed in writing before any work begins.",
      ar: "أتعابنا والرسوم الحكومية تُفصَّل كلٌّ على حدة. الرسوم الرسمية تُدفع مباشرةً للجهات وقابلة للتحقق، وأتعابنا ثابتة ومتفق عليها كتابيًا قبل بدء أي عمل.",
    },
  },
  {
    q: { en: "What happens if a step doesn't go through?", ar: "ماذا لو لم تكتمل إحدى الخطوات؟" },
    a: {
      en: "We define the scope and requirements up front to avoid rejections. If an issue arises within our scope of work, we resolve and re-submit it — you don't pay our fee twice for the same step.",
      ar: "نحدّد النطاق والمتطلبات مسبقًا لتجنّب الرفض. وإذا ظهرت مشكلة ضمن نطاق عملنا، نعالجها ونعيد التقديم — ولا تدفع أتعابنا مرتين عن الخطوة نفسها.",
    },
  },
  {
    q: { en: "Is my data and are my documents safe?", ar: "هل بياناتي ومستنداتي آمنة؟" },
    a: {
      en: "Your identification, contracts, and corporate documents are kept confidential and used solely to complete the transactions you've engaged us for — never shared beyond what each authority requires.",
      ar: "هوياتك وعقودك ومستنداتك تُحفَظ بسرية وتُستخدم فقط لإنجاز المعاملات التي وكّلتنا بها — ولا تُشارَك إلا بالقدر الذي تتطلبه كل جهة رسمية.",
    },
  },
];

/**
 * Client testimonials — ADD REAL ONES ONLY.
 * Leave empty until you have genuine client feedback (name + role + quote, with
 * their permission). The testimonials section stays hidden while this is empty,
 * so the page never shows fabricated reviews.
 */
export const testimonials: Testimonial[] = [];
