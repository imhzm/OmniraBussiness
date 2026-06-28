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
      en: "Yes. Omnera One is a registered Saudi business-services firm that works exclusively through the Kingdom's official platforms and authorities. Every transaction we complete is recorded with the relevant government body in your name and remains fully yours.",
      ar: "نعم، Omnera One جهة سعودية مرخّصة لخدمات الأعمال، وتعمل حصرًا عبر المنصات والجهات الرسمية في المملكة. وكل معاملة نُنجزها تُسجَّل لدى الجهة الحكومية المختصة باسمك أنت، وتبقى ملكًا لك بالكامل.",
    },
  },
  {
    q: { en: "How do I start, and how long does setup take?", ar: "كيف أبدأ معكم؟ وكم يستغرق التأسيس؟" },
    a: {
      en: "You begin with a free consultation: we understand your activity and goals, then send a clear written scope and price. Once your documents are ready, company formation typically takes 4–8 weeks depending on the activity and sector approvals — and we update you at every milestone.",
      ar: "تبدأ باستشارة مجانية: نفهم نشاطك وأهدافك، ثم نرسل لك نطاق عمل وسعرًا مكتوبَين بوضوح. وبعد جاهزية مستنداتك، يستغرق التأسيس عادةً 4–8 أسابيع حسب النشاط وموافقات القطاع — ونوافيك بالتحديثات في كل مرحلة.",
    },
  },
  {
    q: { en: "How is the cost calculated — are there hidden fees?", ar: "كيف تُحسب التكلفة؟ وهل توجد رسوم خفية؟" },
    a: {
      en: "No hidden fees. Your quote separates our fixed professional fee from the government fees, which are paid at cost directly to the authorities and itemized for you line by line. You approve the full breakdown in writing before any work begins.",
      ar: "لا رسوم خفية. عرض السعر يفصل أتعابنا الثابتة عن الرسوم الحكومية التي تُدفع كما هي مباشرةً للجهات وتُفصَّل لك بندًا بندًا. وتعتمد التفصيل الكامل كتابيًا قبل بدء أي عمل.",
    },
  },
  {
    q: { en: "How are my money and government fees protected?", ar: "كيف أضمن أموالي والرسوم الحكومية؟" },
    a: {
      en: "Official fees are paid directly to the government authorities and are fully verifiable on your own accounts (Absher, the Ministry of Commerce, ZATCA, and others). Our professional fee is fixed and agreed in writing, so there are no surprises along the way.",
      ar: "الرسوم الرسمية تُدفع مباشرةً للجهات الحكومية وقابلة للتحقق بالكامل من حساباتك أنت (أبشر، وزارة التجارة، هيئة الزكاة والضريبة وغيرها). وأتعابنا ثابتة ومتفق عليها كتابيًا، فلا مفاجآت في الطريق.",
    },
  },
  {
    q: { en: "What if an application is rejected or a step stalls?", ar: "ماذا لو رُفض طلب أو تعطّلت إحدى الخطوات؟" },
    a: {
      en: "We define the requirements precisely up front to avoid rejections in the first place. If an issue arises within our scope of work, we resolve it and re-submit at no extra professional fee for that step — you're never left to chase an authority alone.",
      ar: "نحدّد المتطلبات بدقة من البداية لتفادي الرفض أصلًا. وإذا ظهرت مشكلة ضمن نطاق عملنا، نعالجها ونعيد التقديم دون أتعاب إضافية عن تلك الخطوة — ولا نتركك تطارد أي جهة بمفردك.",
    },
  },
  {
    q: {
      en: "Do you work with investors outside Saudi Arabia? Do I need to be present?",
      ar: "هل تتعاملون مع مستثمرين من خارج السعودية؟ وهل يلزم حضوري شخصيًا؟",
    },
    a: {
      en: "Yes — a large part of what we do is helping international founders enter the Saudi market. Most of the process is completed remotely on your behalf; we tell you in advance the few steps (if any) that require your physical presence or a power of attorney.",
      ar: "نعم — جزء كبير من عملنا هو مساعدة المؤسسين الدوليين على دخول السوق السعودي. ومعظم الإجراءات تُنجَز عن بُعد نيابةً عنك؛ ونخبرك مسبقًا بالخطوات القليلة (إن وُجدت) التي تتطلب حضورك شخصيًا أو وكالة.",
    },
  },
  {
    q: { en: "Are my data and documents kept secure and confidential?", ar: "هل بياناتي ومستنداتي آمنة وسرية؟" },
    a: {
      en: "Yes. Your identification, contracts, and corporate documents are handled confidentially and used solely to complete the transactions you've engaged us for — never shared beyond what each official authority requires.",
      ar: "نعم. هوياتك وعقودك ومستنداتك تُعامَل بسرية تامة وتُستخدم فقط لإنجاز المعاملات التي وكّلتنا بها — ولا تُشارَك إلا بالقدر الذي تتطلبه كل جهة رسمية.",
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
