import type { L } from "@/i18n/config";

export type ServiceCategoryId =
  | "business-support"
  | "residency-visas"
  | "office-solutions"
  | "finance-compliance";

export type ServiceCategory = {
  id: ServiceCategoryId;
  label: L;
  icon: string;
  blurb: L;
};

export type ServiceStep = { title: L; text: L };
export type ServiceFaq = { q: L; a: L };

export type Service = {
  slug: string;
  category: ServiceCategoryId;
  icon: string;
  featured?: boolean;
  title: L;
  excerpt: L;
  overview: L[];
  audience: L[];
  benefits: L[];
  steps: ServiceStep[];
  requirements: L[];
  deliverables: L[];
  timeline: L;
  bestFor: L;
  supportType: L;
  faqs: ServiceFaq[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "business-support",
    label: { en: "Business Support", ar: "دعم الأعمال" },
    icon: "briefcase",
    blurb: {
      en: "Company formation, licensing, and market-entry support.",
      ar: "تأسيس الشركات والتراخيص ودعم دخول السوق.",
    },
  },
  {
    id: "residency-visas",
    label: { en: "Residency & Visas", ar: "الإقامة والتأشيرات" },
    icon: "badge-check",
    blurb: {
      en: "Investor residency, employee visas, and iqama services.",
      ar: "إقامة المستثمر وتأشيرات الموظفين وخدمات الإقامة.",
    },
  },
  {
    id: "office-solutions",
    label: { en: "Office Solutions", ar: "حلول المكاتب" },
    icon: "building",
    blurb: {
      en: "Flexible offices for every stage of your growth.",
      ar: "مكاتب مرنة لكل مرحلة من مراحل نموك.",
    },
  },
  {
    id: "finance-compliance",
    label: { en: "Finance & Compliance", ar: "المالية والامتثال" },
    icon: "shield-check",
    blurb: {
      en: "Accounting, ZAKAT & tax, and audit support.",
      ar: "المحاسبة والزكاة والضرائب ودعم المراجعة.",
    },
  },
];

export const services: Service[] = [
  // ─────────────────────────── Business Support ───────────────────────────
  {
    slug: "business-setup",
    category: "business-support",
    icon: "building-2",
    featured: true,
    title: { en: "Business Setup in Saudi Arabia", ar: "تأسيس الأعمال في السعودية" },
    excerpt: {
      en: "Company formation and market entry, end to end — from MISA license to commercial registration.",
      ar: "تأسيس الشركات ودخول السوق من البداية للنهاية — من ترخيص الاستثمار حتى السجل التجاري.",
    },
    overview: [
      {
        en: "Setting up in Saudi Arabia involves several government bodies: MISA for the investment license, the Ministry of Commerce for registration, ZATCA for tax, and municipal authorities for operating permits. We run the full sequence for you, in the right order, with documents prepared correctly the first time.",
        ar: "تأسيس شركة في السعودية يمر عبر عدة جهات حكومية: وزارة الاستثمار لترخيص الاستثمار، ووزارة التجارة للسجل التجاري، وهيئة الزكاة والضريبة والجمارك، والبلديات لرخص التشغيل. نحن ندير التسلسل كاملًا نيابة عنك، بالترتيب الصحيح وبمستندات معدّة بدقة من المرة الأولى.",
      },
      {
        en: "Whether you are a foreign investor opening a 100%-owned entity or a regional company expanding into the Kingdom, you get a single point of contact and a clear weekly status update until your company is fully operational.",
        ar: "سواء كنت مستثمرًا أجنبيًا يؤسس كيانًا مملوكًا بالكامل أو شركة إقليمية تتوسع داخل المملكة، ستحصل على نقطة تواصل واحدة وتحديث أسبوعي واضح حتى تعمل شركتك بشكل كامل.",
      },
    ],
    audience: [
      { en: "Foreign investors entering the Saudi market for the first time", ar: "المستثمرون الأجانب الداخلون للسوق السعودي لأول مرة" },
      { en: "GCC and regional companies opening a Saudi branch or subsidiary", ar: "الشركات الخليجية والإقليمية التي تفتح فرعًا أو شركة تابعة" },
      { en: "Founders converting a project into a licensed legal entity", ar: "روّاد الأعمال الذين يحوّلون مشاريعهم إلى كيانات مرخصة" },
    ],
    benefits: [
      { en: "100% foreign ownership structures where the activity allows", ar: "هياكل ملكية أجنبية 100% حيث يسمح النشاط" },
      { en: "Correct activity (ISIC) selection to avoid licensing rework", ar: "اختيار النشاط الصحيح لتجنب إعادة إجراءات الترخيص" },
      { en: "All government portals handled by one accountable team", ar: "فريق واحد مسؤول يدير جميع المنصات الحكومية" },
      { en: "Bank-account-ready file from day one", ar: "ملف جاهز لفتح الحساب البنكي من اليوم الأول" },
    ],
    steps: [
      {
        title: { en: "Structure consultation", ar: "استشارة الهيكلة" },
        text: { en: "We define the legal form, ownership, capital, and licensed activities.", ar: "نحدد الشكل القانوني والملكية ورأس المال والأنشطة المرخصة." },
      },
      {
        title: { en: "MISA investment license", ar: "ترخيص وزارة الاستثمار" },
        text: { en: "We prepare and file the foreign investment license application.", ar: "نعد ونقدم طلب ترخيص الاستثمار الأجنبي." },
      },
      {
        title: { en: "Name & Articles of Association", ar: "الاسم التجاري وعقد التأسيس" },
        text: { en: "Trade-name reservation and notarized articles via the Ministry of Commerce.", ar: "حجز الاسم التجاري وتوثيق عقد التأسيس عبر وزارة التجارة." },
      },
      {
        title: { en: "Commercial Registration (CR)", ar: "السجل التجاري" },
        text: { en: "Issuance of the CR and national unified number.", ar: "إصدار السجل التجاري والرقم الوطني الموحد." },
      },
      {
        title: { en: "Post-setup registrations", ar: "تسجيلات ما بعد التأسيس" },
        text: { en: "ZATCA, GOSI, Qiwa, Muqeem, Absher Business, and municipality license.", ar: "الزكاة والضريبة، التأمينات، قوى، مقيم، أبشر أعمال، ورخصة البلدية." },
      },
      {
        title: { en: "Bank account & launch", ar: "الحساب البنكي والانطلاق" },
        text: { en: "Corporate bank account support and handover with a compliance calendar.", ar: "دعم فتح الحساب البنكي والتسليم مع تقويم الامتثال السنوي." },
      },
    ],
    requirements: [
      { en: "Shareholder passports / commercial registration of the parent company", ar: "جوازات الشركاء / السجل التجاري للشركة الأم" },
      { en: "Audited financials of the parent company (for foreign entities)", ar: "القوائم المالية المدققة للشركة الأم (للكيانات الأجنبية)" },
      { en: "Power of attorney (we provide the template)", ar: "وكالة شرعية (نوفر النموذج)" },
      { en: "Brief description of the planned activity", ar: "وصف موجز للنشاط المخطط له" },
    ],
    deliverables: [
      { en: "MISA license + Commercial Registration", ar: "ترخيص الاستثمار + السجل التجاري" },
      { en: "All government platform accounts, activated", ar: "جميع حسابات المنصات الحكومية مفعّلة" },
      { en: "First-year compliance calendar", ar: "تقويم الامتثال للسنة الأولى" },
    ],
    timeline: { en: "4-8 weeks depending on activity", ar: "4-8 أسابيع حسب النشاط" },
    bestFor: { en: "Foreign investors & regional expansions", ar: "المستثمرون الأجانب والتوسعات الإقليمية" },
    supportType: { en: "Dedicated account manager", ar: "مدير حساب مخصص" },
    faqs: [
      {
        q: { en: "Can foreigners own 100% of a Saudi company?", ar: "هل يمكن للأجانب تملك شركة سعودية بنسبة 100%؟" },
        a: { en: "Yes — most commercial and service activities allow full foreign ownership under a MISA license. Some activities require a Saudi partner or higher capital; we confirm this in the first consultation.", ar: "نعم — معظم الأنشطة التجارية والخدمية تتيح الملكية الأجنبية الكاملة بترخيص من وزارة الاستثمار. بعض الأنشطة تتطلب شريكًا سعوديًا أو رأس مال أعلى، ونؤكد ذلك في الاستشارة الأولى." },
      },
      {
        q: { en: "Do I need to visit Saudi Arabia to incorporate?", ar: "هل أحتاج لزيارة السعودية لإتمام التأسيس؟" },
        a: { en: "Most steps can be completed remotely with a power of attorney. Bank account opening may require one short visit depending on the bank.", ar: "معظم الخطوات تتم عن بُعد بوكالة شرعية. فتح الحساب البنكي قد يتطلب زيارة قصيرة واحدة حسب البنك." },
      },
      {
        q: { en: "What is the minimum capital?", ar: "ما هو الحد الأدنى لرأس المال؟" },
        a: { en: "It varies by activity. Many service activities have no formal minimum, while trading entities typically require higher declared capital.", ar: "يختلف حسب النشاط. كثير من الأنشطة الخدمية بلا حد أدنى رسمي، بينما تتطلب أنشطة التجارة رأس مال معلنًا أعلى." },
      },
    ],
  },
  {
    slug: "government-platform-management",
    category: "business-support",
    icon: "landmark",
    featured: true,
    title: { en: "Government Platform Management", ar: "إدارة المنصات الحكومية" },
    excerpt: {
      en: "Annual management for Qiwa, Muqeem, Absher Business, GOSI, ZATCA, Mudad, and renewal calendars.",
      ar: "إدارة سنوية لقوى ومقيم وأبشر أعمال والتأمينات وزاتكا ومدد وتقويمات التجديد.",
    },
    overview: [
      {
        en: "After your company is formed, the real operational risk is missing a renewal, payroll filing, iqama date, tax return, or platform notice. We manage the government-platform calendar for you through one accountable Saudi team.",
        ar: "بعد تأسيس الشركة، الخطر التشغيلي الحقيقي هو تفويت تجديد أو رواتب أو إقامة أو إقرار ضريبي أو إشعار منصة. ندير لك تقويم المنصات الحكومية عبر فريق سعودي واحد مسؤول.",
      },
      {
        en: "Plans start from SAR 9,600/year and scale by employee count and platform scope. Each client gets a dedicated representative, due-date monitoring, and a no-late-fine guarantee when delays are caused by us after receiving documents on time.",
        ar: "تبدأ الباقات من 9,600 ر.س سنوياً وتتوسع حسب عدد الموظفين ونطاق المنصات. لكل عميل مندوب مخصص، ومتابعة للمواعيد، وضمان بلا غرامات عند حدوث تأخير بسببنا بعد استلام المستندات في وقتها.",
      },
    ],
    audience: [
      { en: "New Saudi entities that want to stay compliant after setup", ar: "الكيانات السعودية الجديدة التي تريد الحفاظ على الامتثال بعد التأسيس" },
      { en: "Founders who do not want to manage Qiwa, Muqeem, ZATCA, and GOSI manually", ar: "المؤسسون الذين لا يريدون متابعة قوى ومقيم وزاتكا والتأمينات يدوياً" },
      { en: "Operating companies with payroll, iqama, and renewal obligations", ar: "الشركات العاملة التي لديها رواتب وإقامات وتجديدات" },
    ],
    benefits: [
      { en: "No-late-fine guarantee for delays caused by our team", ar: "ضمان بلا غرامات عند حدوث التأخير من طرفنا" },
      { en: "One-business-hour response through a dedicated representative", ar: "رد خلال ساعة عمل عبر مندوب مخصص" },
      { en: "Due-date monitoring before service suspension risk", ar: "مراقبة الاستحقاقات قبل خطر إيقاف الخدمات" },
      { en: "Annual plans with clear employee and branch add-ons", ar: "باقات سنوية واضحة مع إضافات للموظفين والفروع" },
    ],
    steps: [
      {
        title: { en: "Platform audit", ar: "تدقيق المنصات" },
        text: { en: "We review current access, expiries, risks, and missing registrations.", ar: "نراجع الصلاحيات الحالية والانتهاءات والمخاطر والتسجيلات الناقصة." },
      },
      {
        title: { en: "Calendar setup", ar: "إعداد التقويم" },
        text: { en: "All renewals, filings, payroll dates, and iqama dates are mapped into a monitored calendar.", ar: "نربط كل التجديدات والإقرارات والرواتب والإقامات بتقويم متابعة." },
      },
      {
        title: { en: "Monthly operation", ar: "التشغيل الشهري" },
        text: { en: "Your representative follows up transactions, filings, alerts, and required documents.", ar: "يتابع مندوبك المعاملات والإقرارات والتنبيهات والمستندات المطلوبة." },
      },
      {
        title: { en: "Reporting", ar: "التقارير" },
        text: { en: "You receive clear status updates so management knows what is complete and what needs action.", ar: "تصلك تحديثات واضحة حتى تعرف الإدارة ما تم وما يحتاج إجراء." },
      },
    ],
    requirements: [
      { en: "Platform access or authorization for Qiwa, Muqeem, ZATCA, GOSI, and related portals", ar: "صلاحيات أو تفويض للمنصات مثل قوى ومقيم وزاتكا والتأمينات" },
      { en: "CR, Chamber, national address, and authorized signatory details", ar: "السجل والغرفة والعنوان الوطني وبيانات المفوض" },
      { en: "Employee list and current renewal calendar where available", ar: "قائمة الموظفين وتقويم التجديدات الحالي إن وجد" },
    ],
    deliverables: [
      { en: "Managed government-platform calendar", ar: "تقويم مُدار للمنصات الحكومية" },
      { en: "Dedicated representative and status updates", ar: "مندوب مخصص وتحديثات حالة" },
      { en: "Renewal, payroll, iqama, and filing follow-up", ar: "متابعة التجديدات والرواتب والإقامات والإقرارات" },
    ],
    timeline: { en: "Onboarding in 3-5 business days", ar: "التهيئة خلال 3-5 أيام عمل" },
    bestFor: { en: "Saudi entities after setup", ar: "الكيانات السعودية بعد التأسيس" },
    supportType: { en: "Annual managed service", ar: "خدمة إدارة سنوية" },
    faqs: [
      {
        q: { en: "Which platforms do you manage?", ar: "ما المنصات التي تديرونها؟" },
        a: { en: "Scope depends on the plan, but commonly includes Qiwa, Muqeem, Absher Business, GOSI, ZATCA, Mudad, Etimad, Saber, and related renewal calendars.", ar: "يعتمد النطاق على الباقة، لكنه يشمل عادة قوى، مقيم، أبشر أعمال، التأمينات، زاتكا، مدد، اعتماد، سابر وتقويمات التجديد المرتبطة." },
      },
      {
        q: { en: "Do you cover government fees?", ar: "هل تشمل الخدمة الرسوم الحكومية؟" },
        a: { en: "No. Government fees are paid at cost by the client. Our fee covers management, follow-up, alerts, and execution support.", ar: "لا. الرسوم الحكومية تُدفع بالتكلفة الفعلية من العميل. رسومنا تغطي الإدارة والمتابعة والتنبيهات ودعم التنفيذ." },
      },
    ],
  },
  {
    slug: "saudi-partners",
    category: "business-support",
    icon: "handshake",
    title: { en: "Saudi Partners & Local Sponsorship", ar: "الشركاء السعوديون والكفالة المحلية" },
    excerpt: {
      en: "Vetted local partners and agency structures for activities that require Saudi participation.",
      ar: "شركاء محليون موثوقون وهياكل وكالة للأنشطة التي تتطلب مشاركة سعودية.",
    },
    overview: [
      {
        en: "Certain regulated activities still require Saudi participation or a local service agent. We introduce vetted partners, structure the relationship with clear legal agreements, and protect your operational control and profit rights.",
        ar: "بعض الأنشطة المنظمة لا تزال تتطلب مشاركة سعودية أو وكيل خدمات محليًا. نقدم لك شركاء موثوقين بعد فحص دقيق، ونهيكل العلاقة باتفاقيات قانونية واضحة تحمي سيطرتك التشغيلية وحقوقك في الأرباح.",
      },
    ],
    audience: [
      { en: "Companies in activities requiring local participation", ar: "الشركات في الأنشطة التي تتطلب مشاركة محلية" },
      { en: "Firms bidding on contracts that favor local entities", ar: "الشركات المتقدمة لعقود تفضّل الكيانات المحلية" },
      { en: "Investors who want a trusted local operating partner", ar: "المستثمرون الباحثون عن شريك تشغيل محلي موثوق" },
    ],
    benefits: [
      { en: "Partners vetted for reputation and financial standing", ar: "شركاء مفحوصون من حيث السمعة والملاءة المالية" },
      { en: "Side agreements drafted to protect your interests", ar: "اتفاقيات جانبية تصاغ لحماية مصالحك" },
      { en: "Clear governance and exit clauses from day one", ar: "حوكمة واضحة وبنود خروج منذ اليوم الأول" },
      { en: "Ongoing relationship management", ar: "إدارة مستمرة للعلاقة مع الشريك" },
    ],
    steps: [
      { title: { en: "Requirement analysis", ar: "تحليل المتطلبات" }, text: { en: "We confirm whether your activity truly requires local participation.", ar: "نتأكد مما إذا كان نشاطك يتطلب فعلًا مشاركة محلية." } },
      { title: { en: "Partner shortlist", ar: "قائمة الشركاء المرشحين" }, text: { en: "Curated introductions matched to your sector and size.", ar: "ترشيحات منتقاة تناسب قطاعك وحجمك." } },
      { title: { en: "Structuring & agreements", ar: "الهيكلة والاتفاقيات" }, text: { en: "Shareholder and operating agreements drafted and notarized.", ar: "صياغة وتوثيق اتفاقيات الشركاء والتشغيل." } },
      { title: { en: "Incorporation & handover", ar: "التأسيس والتسليم" }, text: { en: "Entity setup completed with the agreed structure.", ar: "إتمام تأسيس الكيان وفق الهيكل المتفق عليه." } },
    ],
    requirements: [
      { en: "Activity description and target contracts", ar: "وصف النشاط والعقود المستهدفة" },
      { en: "Company profile and financials", ar: "ملف تعريفي للشركة وقوائمها المالية" },
      { en: "Preferred governance terms", ar: "شروط الحوكمة المفضلة لديك" },
    ],
    deliverables: [
      { en: "Signed partnership / agency agreements", ar: "اتفاقيات شراكة / وكالة موقعة" },
      { en: "Registered entity with the agreed structure", ar: "كيان مسجل وفق الهيكل المتفق عليه" },
      { en: "Governance handbook", ar: "دليل الحوكمة" },
    ],
    timeline: { en: "3–8 weeks", ar: "3–8 أسابيع" },
    bestFor: { en: "Regulated activities & government contracting", ar: "الأنشطة المنظمة والتعاقدات الحكومية" },
    supportType: { en: "Legal + commercial advisory", ar: "استشارات قانونية وتجارية" },
    faqs: [
      {
        q: { en: "Will the local partner control my company?", ar: "هل سيتحكم الشريك المحلي في شركتي؟" },
        a: { en: "No. We structure voting rights, management authority, and profit distribution contractually so operational control stays with you.", ar: "لا. نهيكل حقوق التصويت وصلاحيات الإدارة وتوزيع الأرباح تعاقديًا بحيث تبقى السيطرة التشغيلية معك." },
      },
      {
        q: { en: "Can I replace the partner later?", ar: "هل يمكن استبدال الشريك لاحقًا؟" },
        a: { en: "Yes — exit and transfer clauses are built into the agreements from the start.", ar: "نعم — بنود الخروج ونقل الحصص مدمجة في الاتفاقيات منذ البداية." },
      },
    ],
  },
  {
    slug: "consultation",
    category: "business-support",
    icon: "messages-square",
    title: { en: "Business Consultation", ar: "الاستشارات التجارية" },
    excerpt: {
      en: "Market-entry strategy, licensing pathways, and cost planning with senior consultants.",
      ar: "استراتيجية دخول السوق ومسارات الترخيص وتخطيط التكاليف مع مستشارين خبراء.",
    },
    overview: [
      {
        en: "Before you commit capital, get a clear picture: which license fits your activity, what it costs to operate, which cities and structures make sense, and what the realistic timeline looks like. Sessions are practical and end with a written action plan.",
        ar: "قبل أن تلتزم برأس المال، احصل على صورة واضحة: أي ترخيص يناسب نشاطك، وكم تكلفة التشغيل، وأي المدن والهياكل أنسب، وما الجدول الزمني الواقعي. الجلسات عملية وتنتهي بخطة عمل مكتوبة.",
      },
    ],
    audience: [
      { en: "Investors evaluating the Saudi market", ar: "المستثمرون الذين يقيّمون السوق السعودي" },
      { en: "Companies choosing between license types", ar: "الشركات المفاضلة بين أنواع التراخيص" },
      { en: "Founders preparing board or investor presentations", ar: "المؤسسون الذين يعدّون عروضًا للمستثمرين أو مجالس الإدارة" },
    ],
    benefits: [
      { en: "Senior consultants, not junior researchers", ar: "مستشارون خبراء، وليسوا باحثين مبتدئين" },
      { en: "Realistic cost & timeline models", ar: "نماذج واقعية للتكاليف والجداول الزمنية" },
      { en: "Written action plan after every session", ar: "خطة عمل مكتوبة بعد كل جلسة" },
      { en: "Fee credited toward setup packages", ar: "تُخصم الرسوم من باقات التأسيس لاحقًا" },
    ],
    steps: [
      { title: { en: "Discovery call", ar: "مكالمة تعريفية" }, text: { en: "A free 20-minute call to scope your questions.", ar: "مكالمة مجانية 20 دقيقة لتحديد نطاق أسئلتك." } },
      { title: { en: "Deep-dive session", ar: "جلسة معمّقة" }, text: { en: "A structured 90-minute consultation with a senior advisor.", ar: "استشارة منظمة لمدة 90 دقيقة مع مستشار خبير." } },
      { title: { en: "Written roadmap", ar: "خارطة طريق مكتوبة" }, text: { en: "Licensing pathway, cost model, and step-by-step plan within 3 days.", ar: "مسار الترخيص ونموذج التكاليف وخطة تفصيلية خلال 3 أيام." } },
    ],
    requirements: [
      { en: "Brief about your business and goals", ar: "نبذة عن نشاطك وأهدافك" },
      { en: "Target launch window", ar: "الإطار الزمني المستهدف للانطلاق" },
    ],
    deliverables: [
      { en: "Market-entry roadmap document", ar: "وثيقة خارطة طريق دخول السوق" },
      { en: "Cost & timeline model", ar: "نموذج التكاليف والجدول الزمني" },
      { en: "Recommended structure & license type", ar: "الهيكل ونوع الترخيص الموصى بهما" },
    ],
    timeline: { en: "3–5 business days", ar: "3–5 أيام عمل" },
    bestFor: { en: "Pre-investment decision making", ar: "اتخاذ القرار قبل الاستثمار" },
    supportType: { en: "Senior advisory", ar: "استشارة عليا" },
    faqs: [
      {
        q: { en: "Is the first call really free?", ar: "هل المكالمة الأولى مجانية فعلًا؟" },
        a: { en: "Yes — the 20-minute discovery call is free and without obligation.", ar: "نعم — المكالمة التعريفية لمدة 20 دقيقة مجانية ودون أي التزام." },
      },
      {
        q: { en: "Can sessions be held in English?", ar: "هل تُعقد الجلسات بالإنجليزية؟" },
        a: { en: "Sessions are available in Arabic or English, including all written deliverables.", ar: "الجلسات متاحة بالعربية أو الإنجليزية، وكذلك جميع المخرجات المكتوبة." },
      },
    ],
  },
  {
    slug: "translation-services",
    category: "business-support",
    icon: "languages",
    title: { en: "Certified Translation Services", ar: "خدمات الترجمة المعتمدة" },
    excerpt: {
      en: "Certified Arabic ⇄ English translation for contracts, licenses, and government filings.",
      ar: "ترجمة معتمدة عربي ⇄ إنجليزي للعقود والتراخيص والمعاملات الحكومية.",
    },
    overview: [
      {
        en: "Saudi authorities require Arabic documentation for most filings. Our certified translators handle legal, financial, and technical documents with terminology that government reviewers expect — reducing rejection and resubmission cycles.",
        ar: "تشترط الجهات السعودية مستندات باللغة العربية لمعظم المعاملات. يتولى مترجمونا المعتمدون المستندات القانونية والمالية والفنية بمصطلحات تتوافق مع ما تتوقعه الجهات الحكومية — مما يقلل دورات الرفض وإعادة التقديم.",
      },
    ],
    audience: [
      { en: "Foreign companies filing documents with Saudi authorities", ar: "الشركات الأجنبية التي تقدم مستندات للجهات السعودية" },
      { en: "Law firms and auditors needing certified output", ar: "مكاتب المحاماة والمراجعون الذين يحتاجون مخرجات معتمدة" },
      { en: "Individuals attesting personal documents", ar: "الأفراد الذين يوثقون مستندات شخصية" },
    ],
    benefits: [
      { en: "Certified and accepted by Saudi authorities", ar: "ترجمة معتمدة ومقبولة لدى الجهات السعودية" },
      { en: "Legal & financial terminology specialists", ar: "متخصصون في المصطلحات القانونية والمالية" },
      { en: "Fast turnaround with express options", ar: "إنجاز سريع مع خيارات مستعجلة" },
      { en: "Formatting preserved to match originals", ar: "الحفاظ على التنسيق مطابقًا للأصل" },
    ],
    steps: [
      { title: { en: "Document review", ar: "مراجعة المستندات" }, text: { en: "We confirm certification requirements and quote per page.", ar: "نؤكد متطلبات الاعتماد ونقدم عرض سعر لكل صفحة." } },
      { title: { en: "Translation & QA", ar: "الترجمة والمراجعة" }, text: { en: "Translation by specialists, reviewed by a second linguist.", ar: "ترجمة بواسطة متخصصين ومراجعة من مدقق ثانٍ." } },
      { title: { en: "Certification & delivery", ar: "الاعتماد والتسليم" }, text: { en: "Stamped, certified copies delivered digitally or in print.", ar: "نسخ معتمدة ومختومة تُسلّم رقميًا أو ورقيًا." } },
    ],
    requirements: [
      { en: "Clear scans of the original documents", ar: "نسخ ممسوحة واضحة من المستندات الأصلية" },
      { en: "Purpose of submission (which authority)", ar: "الغرض من التقديم (الجهة المستهدفة)" },
    ],
    deliverables: [
      { en: "Certified translated documents", ar: "مستندات مترجمة معتمدة" },
      { en: "Digital + printed certified copies", ar: "نسخ معتمدة رقمية وورقية" },
    ],
    timeline: { en: "1–3 business days", ar: "1–3 أيام عمل" },
    bestFor: { en: "Government filings & legal documents", ar: "المعاملات الحكومية والمستندات القانونية" },
    supportType: { en: "Certified translators", ar: "مترجمون معتمدون" },
    faqs: [
      {
        q: { en: "Are translations accepted by all ministries?", ar: "هل الترجمة مقبولة لدى جميع الوزارات؟" },
        a: { en: "Yes — we issue certified translations that meet the requirements of Saudi ministries, courts, and banks.", ar: "نعم — نصدر ترجمات معتمدة تستوفي متطلبات الوزارات والمحاكم والبنوك السعودية." },
      },
    ],
  },
  {
    slug: "free-zones",
    category: "business-support",
    icon: "globe-2",
    title: { en: "Special Economic Zones in KSA", ar: "المناطق الاقتصادية الخاصة" },
    excerpt: {
      en: "Compare SEZs and logistics zones — incentives, eligibility, and setup support.",
      ar: "قارن بين المناطق الاقتصادية الخاصة والمناطق اللوجستية — الحوافز والأهلية ودعم التأسيس.",
    },
    overview: [
      {
        en: "Saudi Arabia's Special Economic Zones — including KAEC, Jazan, Ras Al-Khair, Cloud Computing SEZ, and the Riyadh Integrated Logistics Zone — offer tax incentives, customs advantages, and streamlined setup for qualifying activities. We assess your eligibility and handle zone registration end to end.",
        ar: "تقدم المناطق الاقتصادية الخاصة في السعودية — ومنها مدينة الملك عبدالله الاقتصادية وجازان ورأس الخير ومنطقة الحوسبة السحابية والمنطقة اللوجستية المتكاملة بالرياض — حوافز ضريبية ومزايا جمركية وإجراءات تأسيس مبسطة للأنشطة المؤهلة. نقيّم أهليتك وندير التسجيل في المنطقة بالكامل.",
      },
    ],
    audience: [
      { en: "Manufacturers and logistics operators", ar: "المصنّعون ومشغلو الخدمات اللوجستية" },
      { en: "Cloud & technology companies", ar: "شركات التقنية والحوسبة السحابية" },
      { en: "Re-export and distribution businesses", ar: "أعمال إعادة التصدير والتوزيع" },
    ],
    benefits: [
      { en: "Reduced corporate tax rates for qualifying entities", ar: "معدلات ضريبية مخفضة للكيانات المؤهلة" },
      { en: "Customs duty deferral or exemption", ar: "تأجيل أو إعفاء من الرسوم الجمركية" },
      { en: "Simplified employment rules in some zones", ar: "قواعد توظيف ميسّرة في بعض المناطق" },
      { en: "Side-by-side zone comparison before you commit", ar: "مقارنة تفصيلية بين المناطق قبل الالتزام" },
    ],
    steps: [
      { title: { en: "Eligibility assessment", ar: "تقييم الأهلية" }, text: { en: "We map your activity to qualifying zones and incentives.", ar: "نطابق نشاطك مع المناطق المؤهلة وحوافزها." } },
      { title: { en: "Zone selection", ar: "اختيار المنطقة" }, text: { en: "Cost-benefit comparison across shortlisted zones.", ar: "مقارنة التكلفة والعائد بين المناطق المرشحة." } },
      { title: { en: "Application & licensing", ar: "التقديم والترخيص" }, text: { en: "Full application package submitted to the zone authority.", ar: "تقديم ملف الطلب كاملًا لهيئة المنطقة." } },
      { title: { en: "Operational setup", ar: "التجهيز التشغيلي" }, text: { en: "Facilities, customs registration, and workforce onboarding.", ar: "المرافق والتسجيل الجمركي وتهيئة الكوادر." } },
    ],
    requirements: [
      { en: "Business plan and activity description", ar: "خطة العمل ووصف النشاط" },
      { en: "Parent company documents", ar: "مستندات الشركة الأم" },
      { en: "Projected investment and headcount", ar: "حجم الاستثمار والتوظيف المتوقع" },
    ],
    deliverables: [
      { en: "Zone comparison report", ar: "تقرير مقارنة المناطق" },
      { en: "Zone license and registrations", ar: "ترخيص المنطقة والتسجيلات" },
    ],
    timeline: { en: "4–10 weeks", ar: "4–10 أسابيع" },
    bestFor: { en: "Industrial, logistics & cloud activities", ar: "الأنشطة الصناعية واللوجستية والسحابية" },
    supportType: { en: "Advisory + execution", ar: "استشارة وتنفيذ" },
    faqs: [
      {
        q: { en: "Are SEZ entities limited to working inside the zone?", ar: "هل عمل كيانات المناطق الخاصة محصور داخل المنطقة؟" },
        a: { en: "Zone entities enjoy incentives on qualifying activities; selling into the mainland may have specific customs and tax treatment, which we map out for you.", ar: "تتمتع كيانات المناطق بالحوافز على الأنشطة المؤهلة؛ أما البيع داخل السوق المحلي فقد يخضع لمعاملة جمركية وضريبية خاصة نوضحها لك بالتفصيل." },
      },
    ],
  },
  // ─────────────────────────── Residency & Visas ───────────────────────────
  {
    slug: "premium-residency",
    category: "residency-visas",
    icon: "badge-check",
    featured: true,
    title: { en: "Premium Residency (Saudi Green Card)", ar: "الإقامة المميزة" },
    excerpt: {
      en: "Live, work, and own property in Saudi Arabia without a sponsor.",
      ar: "أقم واعمل وتملّك العقار في السعودية دون كفيل.",
    },
    overview: [
      {
        en: "Premium Residency grants you and your family long-term residence without a sponsor — with the right to own real estate, run businesses, and move freely in and out of the Kingdom. We assess which track fits you (Limited, Unlimited, Investor, Talent, or Real Estate) and manage the application end to end.",
        ar: "تمنحك الإقامة المميزة وعائلتك إقامة طويلة الأمد دون كفيل — مع حق تملك العقار وإدارة الأعمال والتنقل بحرية من وإلى المملكة. نحدد المسار الأنسب لك (محدودة، غير محدودة، مستثمر، موهبة، أو مالك عقار) وندير الطلب بالكامل.",
      },
    ],
    audience: [
      { en: "Investors and business owners", ar: "المستثمرون وأصحاب الأعمال" },
      { en: "Senior professionals and specialized talent", ar: "الكفاءات والمواهب المتخصصة" },
      { en: "Real-estate owners in the Kingdom", ar: "ملاك العقارات في المملكة" },
    ],
    benefits: [
      { en: "No sponsor required — full personal independence", ar: "بدون كفيل — استقلالية كاملة" },
      { en: "Family included (spouse, children, parents)", ar: "تشمل العائلة (الزوج/الزوجة والأبناء والوالدان)" },
      { en: "Right to own property and run businesses", ar: "حق تملك العقار وإدارة الأعمال" },
      { en: "Eligibility check before you pay any fees", ar: "فحص الأهلية قبل دفع أي رسوم" },
    ],
    steps: [
      { title: { en: "Eligibility assessment", ar: "تقييم الأهلية" }, text: { en: "We confirm the best track and required evidence.", ar: "نحدد المسار الأنسب والمستندات المطلوبة." } },
      { title: { en: "File preparation", ar: "تجهيز الملف" }, text: { en: "Financial, professional, and legal documents compiled and attested.", ar: "تجميع وتوثيق المستندات المالية والمهنية والقانونية." } },
      { title: { en: "Application & follow-up", ar: "التقديم والمتابعة" }, text: { en: "Submission through the Premium Residency Center with active follow-up.", ar: "التقديم عبر مركز الإقامة المميزة مع متابعة نشطة." } },
      { title: { en: "Approval & issuance", ar: "الموافقة والإصدار" }, text: { en: "Fee payment, biometric procedures, and residency issuance.", ar: "سداد الرسوم والإجراءات الحيوية وإصدار الإقامة." } },
    ],
    requirements: [
      { en: "Valid passport and clean criminal record", ar: "جواز ساري وصحيفة خالية من السوابق" },
      { en: "Proof of financial solvency", ar: "إثبات الملاءة المالية" },
      { en: "Health insurance and medical report", ar: "تأمين صحي وتقرير طبي" },
    ],
    deliverables: [
      { en: "Premium Residency approval and ID", ar: "موافقة الإقامة المميزة والهوية" },
      { en: "Family residencies (where applicable)", ar: "إقامات أفراد العائلة (إن وجدت)" },
    ],
    timeline: { en: "4–12 weeks", ar: "4–12 أسبوعًا" },
    bestFor: { en: "Investors, talent & property owners", ar: "المستثمرون والمواهب وملاك العقار" },
    supportType: { en: "Full case management", ar: "إدارة كاملة للملف" },
    faqs: [
      {
        q: { en: "What is the cost of Premium Residency?", ar: "كم تكلفة الإقامة المميزة؟" },
        a: { en: "The Limited track is renewable annually (SAR 100,000/year) and the Unlimited track is a one-time SAR 800,000. Investor, Talent, and Real Estate tracks have their own criteria — we confirm current fees during assessment.", ar: "المسار المحدود يُجدد سنويًا (100,000 ر.س/سنة)، والمسار غير المحدود برسوم 800,000 ر.س لمرة واحدة. ولمسارات المستثمر والموهبة والعقار معاييرها الخاصة — نؤكد الرسوم المحدثة أثناء التقييم." },
      },
      {
        q: { en: "Does Premium Residency replace a work visa?", ar: "هل تغني الإقامة المميزة عن تأشيرة العمل؟" },
        a: { en: "Yes — holders can work for any employer or run their own business without sponsor transfer.", ar: "نعم — يمكن لحاملها العمل لدى أي جهة أو إدارة أعماله الخاصة دون نقل كفالة." },
      },
    ],
  },
  {
    slug: "business-incubators",
    category: "residency-visas",
    icon: "rocket",
    title: { en: "Business Incubators & Entrepreneur License", ar: "حاضنات الأعمال ورخصة ريادة الأعمال" },
    excerpt: {
      en: "MISA entrepreneur licensing and accredited incubator access for startups.",
      ar: "رخصة ريادة الأعمال من وزارة الاستثمار والانضمام للحاضنات المعتمدة.",
    },
    overview: [
      {
        en: "The MISA Entrepreneur License lets foreign founders incorporate in Saudi Arabia with reduced requirements — backed by an accredited incubator or university endorsement. We secure the endorsement, the license, and the founder's residency in one streamlined track.",
        ar: "تتيح رخصة ريادة الأعمال من وزارة الاستثمار للمؤسسين الأجانب التأسيس في السعودية بمتطلبات مخففة — بدعم من حاضنة معتمدة أو جهة جامعية. نؤمّن لك التزكية والرخصة وإقامة المؤسس في مسار واحد مبسّط.",
      },
    ],
    audience: [
      { en: "Foreign startup founders", ar: "مؤسسو الشركات الناشئة الأجانب" },
      { en: "Tech companies joining Saudi accelerators", ar: "شركات التقنية المنضمة للمسرعات السعودية" },
      { en: "Venture-backed teams relocating to Riyadh", ar: "الفرق الممولة المنتقلة إلى الرياض" },
    ],
    benefits: [
      { en: "Lower capital requirements than standard licenses", ar: "متطلبات رأس مال أقل من الرخص القياسية" },
      { en: "Founder residency and family visas", ar: "إقامة المؤسس وتأشيرات العائلة" },
      { en: "Introductions to accredited incubators & VCs", ar: "تعريف بالحاضنات المعتمدة والمستثمرين" },
      { en: "Path to scale into a full MISA license", ar: "مسار للترقية لاحقًا إلى رخصة استثمار كاملة" },
    ],
    steps: [
      { title: { en: "Startup assessment", ar: "تقييم المشروع" }, text: { en: "We review your venture's fit for the entrepreneur track.", ar: "نراجع مدى ملاءمة مشروعك لمسار ريادة الأعمال." } },
      { title: { en: "Incubator endorsement", ar: "تزكية الحاضنة" }, text: { en: "We secure support from an accredited incubator or VC.", ar: "نؤمّن دعمًا من حاضنة معتمدة أو صندوق استثمار جريء." } },
      { title: { en: "License & incorporation", ar: "الرخصة والتأسيس" }, text: { en: "Entrepreneur license, CR, and government registrations.", ar: "رخصة ريادة الأعمال والسجل التجاري والتسجيلات الحكومية." } },
      { title: { en: "Founder residency", ar: "إقامة المؤسس" }, text: { en: "Iqama issuance for founders and early team.", ar: "إصدار الإقامة للمؤسسين والفريق المبكر." } },
    ],
    requirements: [
      { en: "Pitch deck or business plan", ar: "عرض تقديمي أو خطة عمل" },
      { en: "Founder passports and CVs", ar: "جوازات وسير ذاتية للمؤسسين" },
      { en: "Evidence of traction or funding (helpful, not mandatory)", ar: "إثبات نمو أو تمويل (مفيد وليس إلزاميًا)" },
    ],
    deliverables: [
      { en: "Entrepreneur license + CR", ar: "رخصة ريادة الأعمال + السجل التجاري" },
      { en: "Incubator endorsement letter", ar: "خطاب تزكية من الحاضنة" },
      { en: "Founder iqama", ar: "إقامة المؤسس" },
    ],
    timeline: { en: "3–8 weeks", ar: "3–8 أسابيع" },
    bestFor: { en: "Early-stage and venture-backed startups", ar: "الشركات الناشئة في مراحلها المبكرة" },
    supportType: { en: "Startup-specialist advisors", ar: "مستشارون متخصصون في الشركات الناشئة" },
    faqs: [
      {
        q: { en: "Do I need existing revenue to qualify?", ar: "هل أحتاج إيرادات قائمة للتأهل؟" },
        a: { en: "No — a credible business plan with an incubator endorsement is typically sufficient for early-stage ventures.", ar: "لا — خطة عمل مقنعة مع تزكية من حاضنة معتمدة تكفي عادة للمشاريع في مراحلها المبكرة." },
      },
    ],
  },
  {
    slug: "visa-issuance",
    category: "residency-visas",
    icon: "stamp",
    title: { en: "Visa Issuance & Iqama Services", ar: "إصدار التأشيرات وخدمات الإقامة" },
    excerpt: {
      en: "Work visas, employee iqamas, family visas, and renewals — handled without the queues.",
      ar: "تأشيرات العمل وإقامات الموظفين والتأشيرات العائلية والتجديدات — دون طوابير.",
    },
    overview: [
      {
        en: "From block-visa allocation on Qiwa to iqama issuance on Muqeem and family visit visas, our PRO team manages the full visa lifecycle for your workforce — including renewals, profession changes, and exit/re-entry permits.",
        ar: "من تخصيص التأشيرات الجماعية في قوى إلى إصدار الإقامات في مقيم وتأشيرات الزيارة العائلية، يدير فريق العلاقات الحكومية لدينا دورة التأشيرات كاملة لموظفيك — بما يشمل التجديد وتغيير المهنة وتصاريح الخروج والعودة.",
      },
    ],
    audience: [
      { en: "Companies hiring international talent", ar: "الشركات التي توظف كفاءات دولية" },
      { en: "HR teams managing large workforces", ar: "فرق الموارد البشرية التي تدير قوى عاملة كبيرة" },
      { en: "Employees bringing families to the Kingdom", ar: "الموظفون المستقدمون لعائلاتهم" },
    ],
    benefits: [
      { en: "Block visa strategy aligned with Saudization bands", ar: "استراتيجية تأشيرات متوافقة مع نطاقات السعودة" },
      { en: "End-to-end processing on Qiwa, Muqeem & Absher", ar: "معالجة كاملة عبر قوى ومقيم وأبشر" },
      { en: "Renewal alerts before any document expires", ar: "تنبيهات تجديد قبل انتهاء أي مستند" },
      { en: "Transparent per-transaction pricing", ar: "تسعير شفاف لكل معاملة" },
    ],
    steps: [
      { title: { en: "Workforce plan", ar: "خطة القوى العاملة" }, text: { en: "We map roles to professions and visa quotas.", ar: "نطابق الوظائف مع المهن وحصص التأشيرات." } },
      { title: { en: "Block visa request", ar: "طلب التأشيرات الجماعية" }, text: { en: "Filed and defended on Qiwa with supporting evidence.", ar: "تقديم الطلب ومتابعته في قوى بالمستندات الداعمة." } },
      { title: { en: "Embassy & arrival", ar: "السفارة والوصول" }, text: { en: "Visa stamping support and arrival coordination.", ar: "دعم ختم التأشيرة وتنسيق الوصول." } },
      { title: { en: "Iqama & onboarding", ar: "الإقامة والتفعيل" }, text: { en: "Medical, iqama issuance, GOSI registration, and bank letters.", ar: "الفحص الطبي وإصدار الإقامة وتسجيل التأمينات وخطابات البنك." } },
    ],
    requirements: [
      { en: "Valid CR and Qiwa account", ar: "سجل تجاري ساري وحساب قوى" },
      { en: "Employee passports and attested certificates", ar: "جوازات الموظفين والشهادات المصدقة" },
      { en: "Signed employment contracts", ar: "عقود عمل موقعة" },
    ],
    deliverables: [
      { en: "Approved visas and issued iqamas", ar: "تأشيرات معتمدة وإقامات صادرة" },
      { en: "Compliance tracker for expiries", ar: "متابع امتثال لتواريخ الانتهاء" },
    ],
    timeline: { en: "2–6 weeks per batch", ar: "2–6 أسابيع لكل دفعة" },
    bestFor: { en: "Growing teams & HR departments", ar: "الفرق المتنامية وإدارات الموارد البشرية" },
    supportType: { en: "Dedicated PRO team", ar: "فريق علاقات حكومية مخصص" },
    faqs: [
      {
        q: { en: "How many visas can my company get?", ar: "كم عدد التأشيرات المتاحة لشركتي؟" },
        a: { en: "Quotas depend on your Saudization band, activity, and company size on Qiwa. We model your quota before filing.", ar: "تعتمد الحصص على نطاق السعودة والنشاط وحجم الشركة في قوى. نحسب حصتك المتوقعة قبل التقديم." },
      },
    ],
  },
  // ─────────────────────────── Office Solutions ───────────────────────────
  {
    slug: "virtual-address",
    category: "office-solutions",
    icon: "map-pin",
    title: { en: "Virtual Office Address", ar: "العنوان الوطني الافتراضي" },
    excerpt: {
      en: "A compliant national address for your CR — with mail handling and call answering.",
      ar: "عنوان وطني نظامي لسجلك التجاري — مع إدارة البريد والرد على المكالمات.",
    },
    overview: [
      {
        en: "Every Saudi entity needs a registered national address. Our virtual office packages give you a prestigious Riyadh address accepted for CR registration and municipality licensing, plus mail handling and bilingual call answering — at a fraction of the cost of a physical lease.",
        ar: "كل كيان سعودي يحتاج عنوانًا وطنيًا مسجلًا. توفر باقاتنا عنوانًا مرموقًا في الرياض مقبولًا لتسجيل السجل التجاري ورخص البلدية، مع إدارة البريد والرد على المكالمات بلغتين — بجزء يسير من تكلفة الإيجار الفعلي.",
      },
    ],
    audience: [
      { en: "New entities needing a registered address", ar: "الكيانات الجديدة التي تحتاج عنوانًا مسجلًا" },
      { en: "Remote-first companies", ar: "الشركات العاملة عن بُعد" },
      { en: "Foreign companies testing the market", ar: "الشركات الأجنبية التي تختبر السوق" },
    ],
    benefits: [
      { en: "Accepted for CR and municipality licensing", ar: "مقبول للسجل التجاري ورخص البلدية" },
      { en: "Prime Riyadh business district address", ar: "عنوان في حي أعمال رئيسي بالرياض" },
      { en: "Mail scanning and forwarding", ar: "مسح البريد وإعادة توجيهه" },
      { en: "Upgrade path to physical offices anytime", ar: "إمكانية الترقية لمكتب فعلي في أي وقت" },
    ],
    steps: [
      { title: { en: "Package selection", ar: "اختيار الباقة" }, text: { en: "Address-only or address + reception services.", ar: "عنوان فقط أو عنوان مع خدمات استقبال." } },
      { title: { en: "Contract & registration", ar: "العقد والتسجيل" }, text: { en: "Lease contract issued and national address registered.", ar: "إصدار العقد وتسجيل العنوان الوطني." } },
      { title: { en: "Activation", ar: "التفعيل" }, text: { en: "Mail and call services live within 48 hours.", ar: "تفعيل خدمات البريد والمكالمات خلال 48 ساعة." } },
    ],
    requirements: [
      { en: "CR copy (or setup in progress with us)", ar: "نسخة من السجل التجاري (أو تأسيس جارٍ معنا)" },
      { en: "Authorized signatory ID", ar: "هوية المفوض بالتوقيع" },
    ],
    deliverables: [
      { en: "Registered national address", ar: "عنوان وطني مسجل" },
      { en: "Attested lease contract", ar: "عقد إيجار موثق" },
    ],
    timeline: { en: "2–5 business days", ar: "2–5 أيام عمل" },
    bestFor: { en: "Startups & lean market entry", ar: "الشركات الناشئة والدخول المرن للسوق" },
    supportType: { en: "Reception + admin support", ar: "استقبال ودعم إداري" },
    faqs: [
      {
        q: { en: "Is a virtual address legal for company registration?", ar: "هل العنوان الافتراضي نظامي لتسجيل الشركات؟" },
        a: { en: "Yes — our addresses come with attested lease contracts accepted by the Ministry of Commerce and municipalities for most activities.", ar: "نعم — عناويننا مرفقة بعقود إيجار موثقة مقبولة لدى وزارة التجارة والبلديات لمعظم الأنشطة." },
      },
    ],
  },
  {
    slug: "serviced-offices",
    category: "office-solutions",
    icon: "building",
    title: { en: "Serviced Offices", ar: "المكاتب المجهزة" },
    excerpt: {
      en: "Private, fully furnished offices in Riyadh — move in within days, not months.",
      ar: "مكاتب خاصة مجهزة بالكامل في الرياض — انتقل خلال أيام لا شهور.",
    },
    overview: [
      {
        en: "Skip fit-out costs and long leases. Our serviced offices come furnished, connected, and staffed — with flexible terms from three months. Ideal for teams of 2–25 that need a professional base in Riyadh's business districts.",
        ar: "تجاوز تكاليف التجهيز والعقود الطويلة. مكاتبنا المجهزة تأتي مؤثثة ومتصلة ومدعومة بفريق استقبال — بشروط مرنة تبدأ من ثلاثة أشهر. مثالية لفرق من 2 إلى 25 موظفًا تحتاج مقرًا احترافيًا في أحياء الأعمال بالرياض.",
      },
    ],
    audience: [
      { en: "Teams landing in Riyadh", ar: "الفرق المنتقلة إلى الرياض" },
      { en: "Project offices with fixed durations", ar: "مكاتب المشاريع محددة المدة" },
      { en: "Companies scaling ahead of a permanent HQ", ar: "الشركات المتوسعة قبل المقر الدائم" },
    ],
    benefits: [
      { en: "All-inclusive monthly fee (utilities, internet, reception)", ar: "رسوم شهرية شاملة (مرافق وإنترنت واستقبال)" },
      { en: "Contracts accepted for licensing", ar: "عقود مقبولة لأغراض الترخيص" },
      { en: "Meeting room credits included", ar: "أرصدة قاعات اجتماعات مشمولة" },
      { en: "Scale up or down with 30 days notice", ar: "توسّع أو قلّص بإشعار 30 يومًا" },
    ],
    steps: [
      { title: { en: "Needs brief", ar: "تحديد الاحتياج" }, text: { en: "Headcount, budget, and location preferences.", ar: "عدد الموظفين والميزانية والمواقع المفضلة." } },
      { title: { en: "Shortlist & tour", ar: "الترشيح والمعاينة" }, text: { en: "Curated options with virtual or in-person tours.", ar: "خيارات منتقاة مع معاينة حضورية أو افتراضية." } },
      { title: { en: "Contract & move-in", ar: "العقد والانتقال" }, text: { en: "Attested contract and move-in within days.", ar: "عقد موثق وانتقال خلال أيام." } },
    ],
    requirements: [
      { en: "CR copy and signatory ID", ar: "نسخة السجل التجاري وهوية المفوض" },
      { en: "Expected team size", ar: "حجم الفريق المتوقع" },
    ],
    deliverables: [
      { en: "Furnished private office", ar: "مكتب خاص مؤثث" },
      { en: "Attested lease for licensing", ar: "عقد موثق لأغراض الترخيص" },
    ],
    timeline: { en: "3–7 business days", ar: "3–7 أيام عمل" },
    bestFor: { en: "Teams of 2–25", ar: "فرق من 2 إلى 25" },
    supportType: { en: "On-site reception & IT", ar: "استقبال ودعم تقني في الموقع" },
    faqs: [
      {
        q: { en: "What is included in the monthly fee?", ar: "ماذا تشمل الرسوم الشهرية؟" },
        a: { en: "Furniture, utilities, high-speed internet, reception, cleaning, and a monthly meeting-room allowance.", ar: "الأثاث والمرافق والإنترنت عالي السرعة والاستقبال والنظافة ورصيد شهري لقاعات الاجتماعات." },
      },
    ],
  },
  {
    slug: "coworking-spaces",
    category: "office-solutions",
    icon: "users",
    title: { en: "Co-working Spaces", ar: "مساحات العمل المشتركة" },
    excerpt: {
      en: "Flexible desks and memberships in Riyadh's best business hubs.",
      ar: "مكاتب مرنة وعضويات في أفضل مراكز الأعمال بالرياض.",
    },
    overview: [
      {
        en: "Day passes, dedicated desks, and team memberships across premium co-working locations — with access to meeting rooms, events, and a community of founders. We match you to the right space and negotiate member rates.",
        ar: "تذاكر يومية ومكاتب مخصصة وعضويات للفرق في أفضل مساحات العمل المشتركة — مع وصول لقاعات الاجتماعات والفعاليات ومجتمع من روّاد الأعمال. نرشح لك المساحة الأنسب ونتفاوض على أسعار الأعضاء.",
      },
    ],
    audience: [
      { en: "Freelancers and solo founders", ar: "المستقلون والمؤسسون الأفراد" },
      { en: "Small teams that value flexibility", ar: "الفرق الصغيرة التي تفضّل المرونة" },
      { en: "Remote employees of global companies", ar: "موظفو الشركات العالمية عن بُعد" },
    ],
    benefits: [
      { en: "No long-term commitment", ar: "بدون التزام طويل الأمد" },
      { en: "Premium locations at member rates", ar: "مواقع مميزة بأسعار الأعضاء" },
      { en: "Networking events and community", ar: "فعاليات تواصل ومجتمع نشط" },
      { en: "Meeting rooms on demand", ar: "قاعات اجتماعات عند الطلب" },
    ],
    steps: [
      { title: { en: "Match", ar: "الترشيح" }, text: { en: "We match your work style to 2–3 spaces.", ar: "نرشح لك 2–3 مساحات تناسب أسلوب عملك." } },
      { title: { en: "Trial day", ar: "يوم تجريبي" }, text: { en: "Complimentary day pass to test the space.", ar: "تذكرة يوم مجانية لتجربة المساحة." } },
      { title: { en: "Membership", ar: "العضوية" }, text: { en: "Activation at negotiated member rates.", ar: "تفعيل العضوية بأسعار تفضيلية." } },
    ],
    requirements: [{ en: "ID or iqama copy", ar: "نسخة من الهوية أو الإقامة" }],
    deliverables: [
      { en: "Active membership", ar: "عضوية مفعّلة" },
      { en: "Access card & app onboarding", ar: "بطاقة دخول وتفعيل التطبيق" },
    ],
    timeline: { en: "Same week", ar: "خلال الأسبوع نفسه" },
    bestFor: { en: "Individuals & teams up to 10", ar: "الأفراد والفرق حتى 10 أشخاص" },
    supportType: { en: "Concierge matching", ar: "ترشيح مخصص" },
    faqs: [
      {
        q: { en: "Can a co-working membership support my CR?", ar: "هل تكفي عضوية المساحة المشتركة للسجل التجاري؟" },
        a: { en: "Some locations offer CR-compliant contracts; we'll flag which ones during matching.", ar: "بعض المواقع توفر عقودًا متوافقة مع متطلبات السجل التجاري؛ نوضح لك ذلك أثناء الترشيح." },
      },
    ],
  },
  {
    slug: "meeting-rooms",
    category: "office-solutions",
    icon: "presentation",
    title: { en: "Meeting Rooms & Event Spaces", ar: "قاعات الاجتماعات والفعاليات" },
    excerpt: {
      en: "Professional boardrooms and training rooms by the hour or day.",
      ar: "قاعات اجتماعات وتدريب احترافية بالساعة أو اليوم.",
    },
    overview: [
      {
        en: "Host client meetings, board sessions, interviews, and training days in fully equipped rooms across Riyadh — with video conferencing, catering options, and bilingual reception for your guests.",
        ar: "استضف اجتماعات العملاء وجلسات مجالس الإدارة والمقابلات وأيام التدريب في قاعات مجهزة بالكامل في الرياض — مع مؤتمرات الفيديو وخيارات الضيافة واستقبال ثنائي اللغة لضيوفك.",
      },
    ],
    audience: [
      { en: "Remote companies meeting clients in person", ar: "الشركات العاملة عن بُعد لمقابلة عملائها" },
      { en: "Trainers and workshop facilitators", ar: "المدربون ومنظمو ورش العمل" },
      { en: "Boards and committees", ar: "مجالس الإدارة واللجان" },
    ],
    benefits: [
      { en: "Book by the hour — pay only for what you use", ar: "احجز بالساعة — وادفع فقط مقابل ما تستخدمه" },
      { en: "4K video conferencing in every room", ar: "مؤتمرات فيديو بجودة 4K في كل قاعة" },
      { en: "Catering and reception add-ons", ar: "إضافات الضيافة والاستقبال" },
      { en: "Central, parking-friendly locations", ar: "مواقع مركزية بمواقف سيارات" },
    ],
    steps: [
      { title: { en: "Book", ar: "الحجز" }, text: { en: "Choose room size, time, and add-ons.", ar: "اختر حجم القاعة والوقت والإضافات." } },
      { title: { en: "Host", ar: "الاستضافة" }, text: { en: "Guests welcomed and tech pre-tested.", ar: "استقبال الضيوف وتجهيز التقنيات مسبقًا." } },
    ],
    requirements: [{ en: "Booking details and guest list", ar: "تفاصيل الحجز وقائمة الضيوف" }],
    deliverables: [{ en: "Confirmed booking with setup", ar: "حجز مؤكد مع التجهيز" }],
    timeline: { en: "Same day availability", ar: "إتاحة في نفس اليوم" },
    bestFor: { en: "Client meetings & training days", ar: "اجتماعات العملاء وأيام التدريب" },
    supportType: { en: "On-site coordinator", ar: "منسق في الموقع" },
    faqs: [
      {
        q: { en: "Can I book outside working hours?", ar: "هل يمكن الحجز خارج ساعات العمل؟" },
        a: { en: "Evening and weekend bookings are available at selected locations with prior notice.", ar: "تتاح الحجوزات المسائية وعطلات نهاية الأسبوع في مواقع مختارة بإشعار مسبق." },
      },
    ],
  },
  // ─────────────────────── Finance & Compliance ───────────────────────
  {
    slug: "accounting-services",
    category: "finance-compliance",
    icon: "calculator",
    featured: true,
    title: { en: "Accounting & Bookkeeping", ar: "المحاسبة ومسك الدفاتر" },
    excerpt: {
      en: "IFRS-compliant bookkeeping, payroll, and monthly reporting for Saudi entities.",
      ar: "مسك دفاتر متوافق مع المعايير الدولية ورواتب وتقارير شهرية للكيانات السعودية.",
    },
    overview: [
      {
        en: "Saudi entities must keep accounting records under IFRS and file with ZATCA on time. Our team runs your books, payroll (WPS), and e-invoicing (FATOORA) — delivering clean monthly statements your bank, auditor, and management can trust.",
        ar: "يجب على الكيانات السعودية إمساك سجلات محاسبية وفق المعايير الدولية وتقديم إقراراتها لهيئة الزكاة في مواعيدها. يتولى فريقنا دفاترك ورواتبك (نظام حماية الأجور) وفوترتك الإلكترونية (فاتورة) — مع قوائم شهرية دقيقة يثق بها بنكك ومراجعك وإدارتك.",
      },
    ],
    audience: [
      { en: "New entities without an in-house accountant", ar: "الكيانات الجديدة بلا محاسب داخلي" },
      { en: "Foreign subsidiaries needing local compliance", ar: "الشركات التابعة الأجنبية التي تحتاج امتثالًا محليًا" },
      { en: "SMEs outgrowing spreadsheets", ar: "المنشآت الصغيرة والمتوسطة التي تجاوزت جداول البيانات" },
    ],
    benefits: [
      { en: "FATOORA-compliant e-invoicing setup", ar: "تهيئة فوترة إلكترونية متوافقة مع «فاتورة»" },
      { en: "WPS payroll with payslips in Arabic & English", ar: "رواتب عبر حماية الأجور بقسائم بالعربية والإنجليزية" },
      { en: "Monthly management reports", ar: "تقارير إدارية شهرية" },
      { en: "Audit-ready books at year end", ar: "دفاتر جاهزة للمراجعة في نهاية السنة" },
    ],
    steps: [
      { title: { en: "Systems setup", ar: "تهيئة الأنظمة" }, text: { en: "Chart of accounts, e-invoicing, and payroll configured.", ar: "إعداد شجرة الحسابات والفوترة الإلكترونية والرواتب." } },
      { title: { en: "Monthly cycle", ar: "الدورة الشهرية" }, text: { en: "Bookkeeping, reconciliations, payroll, and reporting.", ar: "القيود والتسويات والرواتب والتقارير." } },
      { title: { en: "Filings", ar: "الإقرارات" }, text: { en: "VAT and withholding filings prepared and submitted.", ar: "إعداد وتقديم إقرارات ضريبة القيمة المضافة والاستقطاع." } },
    ],
    requirements: [
      { en: "ZATCA portal access", ar: "صلاحية الدخول لبوابة هيئة الزكاة" },
      { en: "Bank statements and invoices", ar: "كشوف الحساب البنكية والفواتير" },
      { en: "Employee contracts for payroll", ar: "عقود الموظفين لإعداد الرواتب" },
    ],
    deliverables: [
      { en: "Monthly financial statements", ar: "قوائم مالية شهرية" },
      { en: "Filed VAT returns", ar: "إقرارات ضريبية مقدّمة" },
      { en: "Payroll records & WPS files", ar: "سجلات الرواتب وملفات حماية الأجور" },
    ],
    timeline: { en: "Ongoing monthly", ar: "شهري مستمر" },
    bestFor: { en: "Entities of 1–100 employees", ar: "كيانات من 1 إلى 100 موظف" },
    supportType: { en: "Dedicated accountant", ar: "محاسب مخصص" },
    faqs: [
      {
        q: { en: "Which accounting software do you use?", ar: "ما البرامج المحاسبية التي تستخدمونها؟" },
        a: { en: "We work with Zoho Books, QuickBooks, Odoo, and Xero — or your existing ERP if you have one.", ar: "نعمل على Zoho Books وQuickBooks وOdoo وXero — أو نظامك الحالي إن وُجد." },
      },
    ],
  },
  {
    slug: "zakat-tax",
    category: "finance-compliance",
    icon: "receipt-text",
    title: { en: "ZAKAT & Tax Services", ar: "خدمات الزكاة والضرائب" },
    excerpt: {
      en: "ZAKAT, VAT, and withholding tax — registration, filings, and ZATCA representation.",
      ar: "الزكاة وضريبة القيمة المضافة والاستقطاع — تسجيل وإقرارات وتمثيل أمام الهيئة.",
    },
    overview: [
      {
        en: "Saudi tax is layered: ZAKAT for Saudi/GCC ownership, 20% income tax on foreign shares, 15% VAT, and withholding tax on cross-border payments. We register you correctly, file on time, and represent you in ZATCA inquiries and assessments.",
        ar: "النظام الضريبي السعودي متعدد المستويات: الزكاة على الملكية السعودية والخليجية، وضريبة دخل 20% على الحصص الأجنبية، وقيمة مضافة 15%، وضريبة استقطاع على المدفوعات للخارج. نسجلك بشكل صحيح ونقدم إقراراتك في مواعيدها ونمثلك أمام الهيئة في الاستفسارات والربوط.",
      },
    ],
    audience: [
      { en: "Mixed and foreign-owned entities", ar: "الكيانات المختلطة والمملوكة لأجانب" },
      { en: "Companies making cross-border payments", ar: "الشركات التي تسدد مدفوعات للخارج" },
      { en: "Entities facing ZATCA assessments", ar: "الكيانات التي تواجه ربوطًا من الهيئة" },
    ],
    benefits: [
      { en: "Correct ZAKAT/tax base from day one", ar: "وعاء زكوي/ضريبي صحيح من اليوم الأول" },
      { en: "Deadline management — zero late penalties", ar: "إدارة المواعيد — بلا غرامات تأخير" },
      { en: "Treaty relief on withholding where applicable", ar: "الاستفادة من اتفاقيات منع الازدواج الضريبي" },
      { en: "Representation in audits and objections", ar: "تمثيل في الفحوصات والاعتراضات" },
    ],
    steps: [
      { title: { en: "Tax health check", ar: "فحص الوضع الضريبي" }, text: { en: "Review of registrations, past filings, and exposures.", ar: "مراجعة التسجيلات والإقرارات السابقة والمخاطر." } },
      { title: { en: "Registration & setup", ar: "التسجيل والتهيئة" }, text: { en: "ZAKAT, VAT, and WHT registrations completed.", ar: "إتمام تسجيلات الزكاة والقيمة المضافة والاستقطاع." } },
      { title: { en: "Ongoing filings", ar: "الإقرارات الدورية" }, text: { en: "Monthly/quarterly VAT and annual ZAKAT returns.", ar: "إقرارات شهرية/ربع سنوية للقيمة المضافة وسنوية للزكاة." } },
    ],
    requirements: [
      { en: "CR, articles, and ownership structure", ar: "السجل التجاري وعقد التأسيس وهيكل الملكية" },
      { en: "Trial balance and financials", ar: "ميزان المراجعة والقوائم المالية" },
    ],
    deliverables: [
      { en: "Filed returns with confirmations", ar: "إقرارات مقدمة بإشعارات التأكيد" },
      { en: "ZAKAT/tax certificates", ar: "شهادات الزكاة والضريبة" },
      { en: "Annual compliance calendar", ar: "تقويم امتثال سنوي" },
    ],
    timeline: { en: "Ongoing — annual & quarterly cycles", ar: "مستمر — دورات سنوية وربع سنوية" },
    bestFor: { en: "All registered Saudi entities", ar: "جميع الكيانات المسجلة في السعودية" },
    supportType: { en: "Tax specialists + ZATCA liaison", ar: "متخصصو ضرائب وتواصل مع الهيئة" },
    faqs: [
      {
        q: { en: "What happens if I miss a VAT filing?", ar: "ماذا يحدث إذا تأخرت في تقديم إقرار القيمة المضافة؟" },
        a: { en: "ZATCA applies penalties of 5–25% of the due tax plus fixed fines. If you're behind, we can prepare and file overdue returns and negotiate penalty relief.", ar: "تفرض الهيئة غرامات من 5% إلى 25% من الضريبة المستحقة إضافة لغرامات ثابتة. إن كنت متأخرًا، نعدّ الإقرارات المتأخرة ونقدمها ونسعى لتخفيض الغرامات." },
      },
      {
        q: { en: "Is my company subject to ZAKAT or income tax?", ar: "هل تخضع شركتي للزكاة أم لضريبة الدخل؟" },
        a: { en: "Saudi/GCC-owned shares are subject to ZAKAT (2.5% of the ZAKAT base); non-GCC shares to 20% income tax. Mixed entities pay both proportionally.", ar: "الحصص السعودية/الخليجية تخضع للزكاة (2.5% من الوعاء)، والحصص غير الخليجية لضريبة دخل 20%. والكيانات المختلطة تخضع للاثنين بالتناسب." },
      },
    ],
  },
  {
    slug: "audit-support",
    category: "finance-compliance",
    icon: "file-search",
    title: { en: "Audit & Assurance Support", ar: "دعم المراجعة والتدقيق" },
    excerpt: {
      en: "Statutory audit coordination, audit readiness, and licensed auditor engagement.",
      ar: "تنسيق المراجعة النظامية وتجهيز الملفات والتعاقد مع مراجعين مرخصين.",
    },
    overview: [
      {
        en: "Saudi companies must file audited financial statements annually through Qawaem. We prepare your books for audit, engage a licensed SOCPA audit firm suited to your size, and manage the process until the signed report is filed on time.",
        ar: "يجب على الشركات السعودية إيداع قوائم مالية مدققة سنويًا عبر منصة قوائم. نجهز دفاترك للمراجعة، ونتعاقد مع مكتب مراجعة مرخص من الهيئة السعودية للمراجعين والمحاسبين يناسب حجمك، وندير العملية حتى إيداع التقرير الموقع في موعده.",
      },
    ],
    audience: [
      { en: "Entities approaching their first statutory audit", ar: "الكيانات المقبلة على أول مراجعة نظامية" },
      { en: "Subsidiaries needing group-reporting packages", ar: "الشركات التابعة التي تحتاج حزم تقارير للمجموعة" },
      { en: "Companies fixing prior-year audit issues", ar: "الشركات التي تعالج ملاحظات مراجعات سابقة" },
    ],
    benefits: [
      { en: "Right-sized licensed audit firms — fair fees", ar: "مكاتب مراجعة مرخصة بحجم مناسب — وأتعاب عادلة" },
      { en: "Pre-audit cleanup reduces audit time", ar: "تهيئة مسبقة للدفاتر تختصر وقت المراجعة" },
      { en: "Qawaem filing handled", ar: "إيداع منصة قوائم مشمول" },
      { en: "Group reporting under IFRS", ar: "تقارير المجموعة وفق المعايير الدولية" },
    ],
    steps: [
      { title: { en: "Audit readiness review", ar: "مراجعة الجاهزية" }, text: { en: "Gap check on records, reconciliations, and policies.", ar: "فحص الفجوات في السجلات والتسويات والسياسات." } },
      { title: { en: "Auditor engagement", ar: "التعاقد مع المراجع" }, text: { en: "Licensed firm engaged with a clear fee and timeline.", ar: "تعاقد مع مكتب مرخص بأتعاب وجدول واضحين." } },
      { title: { en: "Fieldwork support", ar: "دعم أعمال الفحص" }, text: { en: "We answer queries and provide schedules on your behalf.", ar: "نرد على الاستفسارات ونوفر الجداول نيابة عنك." } },
      { title: { en: "Sign-off & filing", ar: "الاعتماد والإيداع" }, text: { en: "Signed report filed on Qawaem before the deadline.", ar: "إيداع التقرير الموقع في قوائم قبل الموعد النهائي." } },
    ],
    requirements: [
      { en: "Trial balance and ledgers", ar: "ميزان المراجعة ودفاتر الأستاذ" },
      { en: "Bank statements and contracts", ar: "كشوف بنكية وعقود" },
      { en: "Prior-year audit report (if any)", ar: "تقرير المراجعة السابق (إن وجد)" },
    ],
    deliverables: [
      { en: "Signed audited financial statements", ar: "قوائم مالية مدققة وموقعة" },
      { en: "Qawaem filing confirmation", ar: "تأكيد الإيداع في منصة قوائم" },
    ],
    timeline: { en: "3–8 weeks", ar: "3–8 أسابيع" },
    bestFor: { en: "LLCs and foreign subsidiaries", ar: "الشركات ذات المسؤولية المحدودة والتابعة" },
    supportType: { en: "Finance team + auditor liaison", ar: "فريق مالي وتنسيق مع المراجع" },
    faqs: [
      {
        q: { en: "Is an annual audit mandatory for my LLC?", ar: "هل المراجعة السنوية إلزامية لشركتي المحدودة؟" },
        a: { en: "Yes — LLCs must appoint a licensed auditor and file audited statements via Qawaem annually.", ar: "نعم — يجب على الشركات المحدودة تعيين مراجع مرخص وإيداع قوائم مدققة عبر منصة قوائم سنويًا." },
      },
    ],
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function servicesByCategory(category: ServiceCategoryId): Service[] {
  return services.filter((s) => s.category === category);
}

export function getCategory(id: ServiceCategoryId): ServiceCategory {
  return serviceCategories.find((c) => c.id === id)!;
}
