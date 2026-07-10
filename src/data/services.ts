import type { L } from "@/i18n/config";

export type ServiceCategoryId =
  | "business-support"
  | "residency-visas"
  | "office-solutions"
  | "finance-compliance"
  | "government-services"
  | "legal-services";

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
  image?: string;
  title: L;
  excerpt: L;
  /** SEO <title> (keyword-rich). Falls back to `${title} in Saudi Arabia`. */
  seoTitle?: L;
  /** SEO meta description. Falls back to `excerpt`. */
  seoDescription?: L;
  /** ISO date the content was last authored/reviewed — emitted as WebPage.dateModified. */
  updated?: string;
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
  {
    id: "government-services",
    label: { en: "Government Services", ar: "الخدمات الحكومية" },
    icon: "file-text",
    blurb: {
      en: "Insurance, traffic, and vehicle services handled for you.",
      ar: "خدمات التأمين والمرور والمركبات نُنجزها نيابةً عنك.",
    },
  },
  {
    id: "legal-services",
    label: { en: "Legal Services", ar: "الخدمات القانونية" },
    icon: "landmark",
    blurb: {
      en: "Consultations, contracts, litigation, and debt collection through licensed Saudi lawyers.",
      ar: "استشارات وعقود وتقاضٍ وتحصيل ديون عبر محامين سعوديين مرخّصين.",
    },
  },
];

export const services: Service[] = [
  // ─────────────────────────── Business Support ───────────────────────────
  {
    slug: "license-issuance",
    category: "business-support",
    icon: "scroll-text",
    updated: "2026-06-28",
    featured: true,
    image: "/images/services/license-issuance.webp",
    title: { en: "License Issuance", ar: "إصدار التراخيص" },
    excerpt: {
      en: "Obtain every licence your business needs to operate legally in Saudi Arabia — investment, commercial, municipal, and activity-specific.",
      ar: "احصل على كل ترخيص تحتاجه شركتك للعمل بشكل نظامي في السعودية — استثماري وتجاري وبلدي وحسب النشاط.",
    },
    seoTitle: {
      en: "Business License Issuance in Saudi Arabia — All Activity Types",
      ar: "إصدار التراخيص التجارية في السعودية — لجميع الأنشطة",
    },
    seoDescription: {
      en: "Issue every licence your business needs in Saudi Arabia — commercial, industrial, professional, MISA investment and more. 100% foreign ownership where allowed. Get a free quote.",
      ar: "أصدر كل ترخيص يحتاجه نشاطك في السعودية — تجاري، صناعي، مهني، استثمار أجنبي وأكثر. ملكية أجنبية 100% حيثما يُسمح. احصل على عرض سعر مجاني.",
    },
    overview: [
      {
        en: "Operating legally in Saudi Arabia usually requires several licences in the right sequence: for foreign-owned entities, a MISA investment licence from the Ministry of Investment; then the Commercial Registration (CR) from the Ministry of Commerce; a municipal (Balady) operating licence for your premises; and, for regulated activities, a sector permit from the relevant authority (SFDA, CST, SAMA, the Ministry of Tourism, the Ministry of Industry, and others). We identify exactly which licences your activity needs and issue them in the correct order.",
        ar: "العمل بشكل نظامي في السعودية يتطلب عادةً عدة تراخيص بالترتيب الصحيح: للكيانات ذات الملكية الأجنبية، ترخيص استثمار من وزارة الاستثمار؛ ثم السجل التجاري من وزارة التجارة؛ ورخصة بلدية (بلدي) لمقرّك؛ وللأنشطة المنظَّمة، تصريح قطاع من الجهة المختصة (الغذاء والدواء، الاتصالات، البنك المركزي، وزارة السياحة، وزارة الصناعة وغيرها). نحدد بدقة التراخيص التي يحتاجها نشاطك ونصدرها بالترتيب الصحيح.",
      },
      {
        en: "MISA licences cover eight activity categories — Service, Professional, Industrial, Trading (Commercial), Entrepreneurial, Agricultural, Real Estate Development, and Mining — and most sectors now allow 100% foreign ownership with no Saudi partner. As part of Vision 2030 reforms, MISA service fees are currently waived (SAR 0), and processing for a clean file can take only a few business days.",
        ar: "تغطي تراخيص الاستثمار ثماني فئات نشاط — خدمي، مهني، صناعي، تجاري، ريادي، زراعي، تطوير عقاري، وتعدين — ومعظم القطاعات تتيح الآن ملكية أجنبية 100% بدون شريك سعودي. وضمن إصلاحات رؤية 2030، رسوم خدمة الاستثمار معفاة حاليًا (0 ر.س)، ومعالجة الملف النظيف قد تتم خلال أيام عمل قليلة.",
      },
      {
        en: "Choosing the correct activity classification (ISIC) up front avoids costly rework and rejected applications. We handle classification, eligibility checks, document preparation, submission, and follow-up until every licence is issued and active — and we set you up with a renewal calendar so nothing lapses.",
        ar: "اختيار التصنيف الصحيح للنشاط (ISIC) من البداية يتجنّب إعادة الإجراءات المكلِّفة ورفض الطلبات. نتولّى التصنيف وفحص الأهلية وتجهيز المستندات والتقديم والمتابعة حتى يصدر كل ترخيص ويصبح فعّالًا — ونجهّز لك تقويم تجديد حتى لا ينتهي شيء.",
      },
    ],
    audience: [
      { en: "Foreign investors who need a MISA licence to own and operate", ar: "المستثمرون الأجانب المحتاجون ترخيص استثمار للتملّك والتشغيل" },
      { en: "Companies entering a regulated activity (health, food, finance, telecom, tourism)", ar: "الشركات الداخلة لنشاط منظَّم (صحة، غذاء، مالية، اتصالات، سياحة)" },
      { en: "Businesses adding a new activity or branch that needs its own permit", ar: "الشركات التي تضيف نشاطًا أو فرعًا جديدًا يحتاج تصريحه الخاص" },
    ],
    benefits: [
      { en: "100% foreign ownership structured where the activity allows", ar: "هيكلة ملكية أجنبية 100% حيث يسمح النشاط" },
      { en: "Correct activity (ISIC) selection from day one — no licensing rework", ar: "اختيار النشاط الصحيح من اليوم الأول — بلا إعادة إجراءات ترخيص" },
      { en: "All licences mapped and sequenced by one accountable team", ar: "كل التراخيص محدّدة ومرتّبة عبر فريق واحد مسؤول" },
      { en: "Sector-regulator permits handled (SFDA, CST, SAMA, MT, and more)", ar: "تصاريح الجهات المنظِّمة (الغذاء والدواء، الاتصالات، البنك المركزي، السياحة وغيرها)" },
      { en: "Government fees passed through at cost — full transparency", ar: "الرسوم الحكومية تُمرَّر كما هي — شفافية كاملة" },
      { en: "Renewal calendar so no licence lapses or triggers a fine", ar: "تقويم تجديد حتى لا ينتهي ترخيص أو تُفرض غرامة" },
    ],
    steps: [
      { title: { en: "Activity classification (ISIC)", ar: "تصنيف النشاط (ISIC)" }, text: { en: "We map your business to the correct activity codes and licence types.", ar: "نطابق نشاطك مع أكواد النشاط وأنواع التراخيص الصحيحة." } },
      { title: { en: "Eligibility & requirements", ar: "الأهلية والمتطلبات" }, text: { en: "We confirm ownership rules, capital, and any prerequisite approvals.", ar: "نؤكد قواعد الملكية ورأس المال وأي موافقات مسبقة مطلوبة." } },
      { title: { en: "MISA investment licence", ar: "ترخيص الاستثمار MISA" }, text: { en: "Prepared and filed for foreign-owned entities where required.", ar: "نعدّه ونقدّمه للكيانات ذات الملكية الأجنبية عند الحاجة." } },
      { title: { en: "CR & municipal licence", ar: "السجل التجاري والرخصة البلدية" }, text: { en: "Commercial Registration plus the Balady operating licence.", ar: "السجل التجاري بالإضافة إلى رخصة البلدية للتشغيل." } },
      { title: { en: "Activity-specific permits", ar: "تصاريح النشاط الخاصة" }, text: { en: "Sector permits from SFDA, CITC, SAMA, the Ministry of Tourism, etc.", ar: "تصاريح القطاع من الغذاء والدواء والاتصالات والبنك المركزي والسياحة وغيرها." } },
      { title: { en: "Issuance & activation", ar: "الإصدار والتفعيل" }, text: { en: "Final issuance, activation, and a renewal calendar for every licence.", ar: "الإصدار النهائي والتفعيل وتقويم تجديد لكل ترخيص." } },
    ],
    requirements: [
      { en: "Shareholder IDs / parent-company commercial registration", ar: "هويات الشركاء / السجل التجاري للشركة الأم" },
      { en: "Description of the planned activity and any sector specifics", ar: "وصف النشاط المخطط له وأي تفاصيل خاصة بالقطاع" },
      { en: "Capital and ownership details", ar: "تفاصيل رأس المال والملكية" },
    ],
    deliverables: [
      { en: "All required business and activity licences, issued and active", ar: "جميع التراخيص المطلوبة للنشاط، صادرة وفعّالة" },
      { en: "MISA licence + Commercial Registration + municipal licence", ar: "ترخيص الاستثمار + السجل التجاري + الرخصة البلدية" },
      { en: "A renewal calendar covering every licence and permit", ar: "تقويم تجديد يغطي كل ترخيص وتصريح" },
    ],
    timeline: { en: "Typically 2–8 weeks depending on the activity and sector approvals.", ar: "عادةً 2–8 أسابيع حسب النشاط وموافقات القطاع." },
    bestFor: { en: "Anyone who needs to be fully licensed to start or expand operations.", ar: "كل من يحتاج ترخيصًا كاملًا لبدء أو توسيع نشاطه." },
    supportType: { en: "Done-for-you licensing across all authorities", ar: "ترخيص مُنجز بالكامل عبر جميع الجهات" },
    faqs: [
      { q: { en: "Which licences does my business actually need?", ar: "ما التراخيص التي يحتاجها نشاطي فعلًا؟" }, a: { en: "It depends on your activity and ownership. Most companies need a CR and a municipal licence; foreign owners need a MISA investment licence; and regulated activities (health, food, finance, telecom, tourism) need a sector permit. We map the exact list for your case before we start.", ar: "يعتمد على نشاطك وملكيتك. معظم الشركات تحتاج سجلًا تجاريًا ورخصة بلدية؛ والمالك الأجنبي يحتاج ترخيص استثمار؛ والأنشطة المنظَّمة (صحة، غذاء، مالية، اتصالات، سياحة) تحتاج تصريح قطاع. نحدد لك القائمة الدقيقة لحالتك قبل أن نبدأ." } },
      { q: { en: "Can a foreigner own 100% of the company?", ar: "هل يمكن للأجنبي تملّك الشركة 100%؟" }, a: { en: "In most activities, yes — a MISA investment licence allows 100% foreign ownership with no Saudi partner (e.g. IT, professional services, manufacturing, logistics, healthcare, hospitality). Some activities such as certain trading have conditions, and a few remain restricted. We confirm eligibility for your exact activity.", ar: "في معظم الأنشطة نعم — ترخيص الاستثمار يتيح ملكية أجنبية 100% بدون شريك سعودي (مثل التقنية والخدمات المهنية والصناعة واللوجستيات والصحة والضيافة). بعض الأنشطة مثل أنواع من التجارة لها شروط، وقليل منها يبقى مقيّدًا. نؤكد الأهلية لنشاطك بالتحديد." } },
      { q: { en: "How much do the licences cost and how long do they take?", ar: "كم تكلفة التراخيص وكم تستغرق؟" }, a: { en: "Government fees are paid at cost: MISA service fees are currently waived (SAR 0), the Commercial Registration is about SAR 1,200 / year plus a SAR 500 publication fee, and municipal and sector permits vary by activity. A clean MISA file can be issued in a few business days; full licensing typically takes 3–8 weeks depending on sector approvals. Our professional fee is separate and quoted upfront.", ar: "الرسوم الحكومية تُدفع كما هي: رسوم خدمة الاستثمار معفاة حاليًا (0 ر.س)، والسجل التجاري نحو 1,200 ر.س سنويًا إضافةً إلى 500 ر.س رسوم نشر، والرخص البلدية وتصاريح القطاع تختلف حسب النشاط. الملف النظيف لترخيص الاستثمار قد يصدر خلال أيام عمل قليلة؛ والترخيص الكامل عادةً 3–8 أسابيع حسب موافقات القطاع. أتعابنا منفصلة وتُحدَّد مسبقًا." } },
      { q: { en: "Can you issue activity-specific (regulated) licences?", ar: "هل تصدرون تراخيص النشاط المنظَّمة؟" }, a: { en: "Yes. We prepare and follow up regulated permits with the relevant authority — SFDA for health/food, CST for telecom, SAMA for finance, the Ministry of Tourism for hospitality, the Ministry of Industry for manufacturing, and others.", ar: "نعم. نعدّ ونتابع التصاريح المنظَّمة مع الجهة المختصة — الغذاء والدواء للصحة/الغذاء، الاتصالات، البنك المركزي للمالية، وزارة السياحة للضيافة، وزارة الصناعة للتصنيع، وغيرها." } },
      { q: { en: "Do licences need renewal?", ar: "هل التراخيص تحتاج تجديدًا؟" }, a: { en: "Yes — the CR, municipal licence, and most permits renew annually. We give you a renewal calendar and can manage the renewals so nothing lapses or triggers a fine.", ar: "نعم — السجل التجاري والرخصة البلدية ومعظم التصاريح تُجدَّد سنويًا. نوفّر لك تقويم تجديد ويمكننا إدارة التجديدات حتى لا ينتهي شيء أو تُفرض غرامة." } },
    ],
  },
  {
    slug: "license-attestation",
    category: "business-support",
    icon: "stamp",
    updated: "2026-06-28",
    featured: true,
    title: { en: "License & Document Attestation", ar: "تصديق وتوثيق التراخيص والمستندات" },
    excerpt: {
      en: "Notarize, attest, and legalize your commercial licenses and official documents for use inside Saudi Arabia and abroad.",
      ar: "توثيق وتصديق وتقنين تراخيصك التجارية ومستنداتك الرسمية لاستخدامها داخل السعودية وخارجها.",
    },
    overview: [
      {
        en: "Official documents — commercial registrations, licenses, powers of attorney, board resolutions, contracts, and certificates — often need to be notarized and attested before a bank, ministry, court, or foreign authority will accept them. We run the full attestation chain so your paperwork is legally recognized the first time.",
        ar: "المستندات الرسمية — السجلات التجارية والتراخيص والوكالات وقرارات مجلس الإدارة والعقود والشهادات — غالبًا تحتاج توثيقًا وتصديقًا قبل أن يقبلها بنك أو وزارة أو محكمة أو جهة أجنبية. نتولّى سلسلة التصديق كاملة حتى تُعتمد أوراقك من المرة الأولى.",
      },
      {
        en: "We cover both directions: certifying Saudi documents for use abroad (Chamber of Commerce, Ministry of Foreign Affairs, and embassy legalization), and legalizing foreign documents for use inside the Kingdom, including certified Arabic translation.",
        ar: "نغطّي الاتجاهين: تصديق المستندات السعودية لاستخدامها بالخارج (الغرفة التجارية ووزارة الخارجية والتصديق من السفارات)، وتقنين المستندات الأجنبية لاستخدامها داخل المملكة، بما في ذلك الترجمة المعتمدة إلى العربية.",
      },
    ],
    audience: [
      { en: "Companies submitting documents to banks, tenders, or government bodies", ar: "الشركات التي تقدّم مستندات للبنوك أو المنافسات أو الجهات الحكومية" },
      { en: "Foreign investors whose home-country documents must be legalized for Saudi Arabia", ar: "المستثمرون الأجانب الذين تحتاج مستندات بلدهم إلى تقنين للسعودية" },
      { en: "Businesses exporting or signing contracts that require attested papers abroad", ar: "الشركات المصدّرة أو الموقّعة على عقود تتطلب أوراقًا مصدّقة بالخارج" },
    ],
    benefits: [
      { en: "One team manages notary, Chamber, MoFA, and embassy steps", ar: "فريق واحد يدير كاتب العدل والغرفة والخارجية والسفارة" },
      { en: "Documents accepted the first time — no rejected submissions", ar: "قبول المستندات من أول مرة — بلا رفض أو إعادة" },
      { en: "Certified legal translation included where needed", ar: "ترجمة قانونية معتمدة مشمولة عند الحاجة" },
      { en: "Clear tracking of every document and its attestation stage", ar: "تتبّع واضح لكل مستند ومرحلة تصديقه" },
    ],
    steps: [
      { title: { en: "Document review", ar: "مراجعة المستندات" }, text: { en: "We check each document and map the exact attestation path it needs.", ar: "نفحص كل مستند ونحدد مسار التصديق المطلوب له بدقة." } },
      { title: { en: "Notarization", ar: "التوثيق لدى كاتب العدل" }, text: { en: "Notarizing signatures, powers of attorney, and resolutions via the notary.", ar: "توثيق التواقيع والوكالات والقرارات عبر كاتب العدل." } },
      { title: { en: "Chamber of Commerce attestation", ar: "تصديق الغرفة التجارية" }, text: { en: "Certifying commercial documents, signatures, and certificates of origin.", ar: "تصديق المستندات التجارية والتواقيع وشهادات المنشأ." } },
      { title: { en: "Ministry of Foreign Affairs", ar: "تصديق وزارة الخارجية" }, text: { en: "MoFA attestation for documents that will be used outside the Kingdom.", ar: "تصديق الخارجية للمستندات التي ستُستخدم خارج المملكة." } },
      { title: { en: "Embassy / final legalization", ar: "التصديق النهائي / السفارة" }, text: { en: "Legalization at the destination-country embassy, or Saudi legalization for inbound documents.", ar: "التقنين لدى سفارة دولة الوجهة، أو التصديق السعودي للمستندات الواردة." } },
    ],
    requirements: [
      { en: "The original documents to be attested", ar: "المستندات الأصلية المراد تصديقها" },
      { en: "Valid commercial registration / IDs of the signatories", ar: "السجل التجاري الساري / هويات الموقّعين" },
      { en: "Destination country and the authority requesting the documents", ar: "دولة الوجهة والجهة الطالبة للمستندات" },
    ],
    deliverables: [
      { en: "Fully notarized and attested documents", ar: "مستندات موثّقة ومصدّقة بالكامل" },
      { en: "Certified Arabic / English translations where required", ar: "ترجمات معتمدة عربية / إنجليزية عند الحاجة" },
      { en: "A status sheet for every document and stage", ar: "كشف بحالة كل مستند ومرحلة" },
    ],
    timeline: { en: "Typically 3–10 business days depending on the chain and destination.", ar: "عادةً 3–10 أيام عمل حسب السلسلة والوجهة." },
    bestFor: { en: "Companies and investors who need legally recognized documents fast.", ar: "الشركات والمستثمرون المحتاجون مستندات معترفًا بها قانونيًا وبسرعة." },
    supportType: { en: "Done-for-you attestation management", ar: "إدارة تصديق مُنجزة بالكامل نيابة عنك" },
    faqs: [
      { q: { en: "What is the difference between notarization and attestation?", ar: "ما الفرق بين التوثيق والتصديق؟" }, a: { en: "Notarization authenticates a signature or document before a notary; attestation is the chain of official certifications (Chamber, MoFA, embassy) that makes it valid for a specific authority or country.", ar: "التوثيق يصادق على توقيع أو مستند أمام كاتب العدل؛ أما التصديق فهو سلسلة الاعتمادات الرسمية (الغرفة، الخارجية، السفارة) التي تجعله صالحًا أمام جهة أو دولة محددة." } },
      { q: { en: "Can you legalize documents issued outside Saudi Arabia?", ar: "هل تقنّنون مستندات صادرة خارج السعودية؟" }, a: { en: "Yes. We guide the legalization from the issuing country (its MoFA plus the Saudi embassy there) and complete Saudi-side attestation and certified translation so the document is accepted locally.", ar: "نعم. نوجّه التقنين من دولة الإصدار (خارجيتها والسفارة السعودية هناك) ونكمل التصديق السعودي والترجمة المعتمدة حتى يُقبل المستند محليًا." } },
      { q: { en: "Do you handle certified translation too?", ar: "هل تتولّون الترجمة المعتمدة أيضًا؟" }, a: { en: "Yes — certified legal translation between Arabic and other languages is included whenever the receiving authority requires it.", ar: "نعم — الترجمة القانونية المعتمدة بين العربية واللغات الأخرى مشمولة كلما طلبتها الجهة المستلمة." } },
    ],
  },
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
  {
    slug: "employee-insurance",
    category: "government-services",
    icon: "heart-pulse",
    updated: "2026-06-28",
    seoTitle: {"en": "Employee Health Insurance Saudi Arabia 2026 | CCHI Compliant", "ar": "تأمين طبي للموظفين في السعودية 2026 | متوافق مع الضمان الصحي"},
    seoDescription: {"en": "Mandatory employee health insurance in Saudi Arabia: CCHI-compliant policies from approved insurers, issued fast so iqamas are never blocked. Get a quote today.", "ar": "التأمين الطبي الإلزامي للموظفين في السعودية: وثائق متوافقة مع مجلس الضمان الصحي من شركات معتمدة، تصدر بسرعة حتى لا تتعطل الإقامات. اطلب عرض سعرك الآن."},
    featured: true,
    image: "/images/services/employee-insurance.webp",
    title: { en: "Employee Medical Insurance", ar: "التأمين الطبي للموظفين" },
    excerpt: { en: "Secure CCHI-compliant medical insurance for your employees and their dependents — the right class, competitive quotes from approved insurers, and coverage that keeps iqama issuance and renewal unblocked.", ar: "نُؤمّن لموظفيك ومرافقيهم تأميناً طبياً متوافقاً مع مجلس الضمان الصحي — بالفئة المناسبة، وعروض أسعار تنافسية من شركات معتمدة، وتغطية تُبقي إصدار الإقامة وتجديدها دون توقّف." },
    overview: [
      { en: "In Saudi Arabia, cooperative health insurance is mandatory for every private-sector employee and for their legal dependents, and it is regulated by the Council of Health Insurance (CCHI / مجلس الضمان الصحي) alongside the Insurance Authority (هيئة التأمين), which now supervises the insurance sector after SAMA. A valid policy is not optional paperwork — it is a precondition for issuing and renewing the iqama of expatriate staff and their families. Without active, compliant coverage recorded against each person, the iqama transaction on Absher and Muqeem will simply not proceed, and related labour services in Qiwa can stall.", ar: "في المملكة العربية السعودية يُعدّ التأمين الصحي التعاوني إلزامياً لكل موظف في القطاع الخاص ولمرافقيه النظاميين، وهو خاضع لإشراف مجلس الضمان الصحي (CCHI) إلى جانب هيئة التأمين التي تتولّى الآن الإشراف على قطاع التأمين بعد البنك المركزي السعودي. والوثيقة السارية ليست إجراءً ورقياً اختيارياً، بل شرط مسبق لإصدار وتجديد إقامة الموظفين الوافدين وأسرهم. فبدون تغطية فعّالة ومتوافقة مسجَّلة على كل فرد، لن تكتمل معاملة الإقامة في أبشر ومقيم، وقد تتعطّل خدمات العمل ذات الصلة في منصة قوى." },
      { en: "All insurers issue against the Unified Cooperative Policy (وثيقة الضمان الصحي الموحّدة), a standardized benefit schedule that defines inpatient and outpatient care, medicines, maternity, emergency dental, basic optical, and chronic-disease management. What differs between insurers is the class you buy — typically C (basic), B (mid), A (comprehensive), and VIP above them — along with hospital networks, annual limits, and price. Choosing the wrong class can either inflate your premium needlessly or leave staff under-covered and your renewal at risk.", ar: "تُصدر جميع الشركات وثائقها وفق وثيقة الضمان الصحي الموحّدة، وهي جدول منافع معياري يحدّد الرعاية الداخلية والخارجية والأدوية والولادة وطوارئ الأسنان والبصريات الأساسية وإدارة الأمراض المزمنة. ويبقى الفارق بين الشركات في الفئة التي تشتريها — وهي غالباً C (أساسية) وB (متوسطة) وA (شاملة) وVIP فوقها — إضافةً إلى شبكات المستشفيات والحدود السنوية والسعر. واختيار الفئة الخاطئة قد يرفع قسطك دون داعٍ أو يترك موظفيك بتغطية ناقصة ويُعرّض تجديدك للخطر." },
      { en: "Omnera One manages this end to end. We assess your headcount, visa categories, and budget, recommend the correct CCHI class for each tier of staff, and gather competitive quotes from approved insurers such as Bupa Arabia, Tawuniya, and MedGulf. We then issue the policy and register each member so coverage is recognized through NPHIES and reflected in Muqeem and Qiwa, and we handle every later change — adding new hires and dependents, removing departures, upgrading classes, and renewing on time — so your iqama transactions are never blocked by a lapsed or non-compliant policy.", ar: "تتولّى Omnera One هذا العمل من البداية إلى النهاية. ندرس عدد موظفيك وفئات تأشيراتهم وميزانيتك، ونوصي بالفئة الصحيحة المعتمدة من المجلس لكل شريحة من الموظفين، ونجمع عروضاً تنافسية من شركات معتمدة مثل بوبا العربية والتعاونية وميدغلف. ثم نُصدر الوثيقة ونُسجّل كل مشترك بحيث تُعتمد التغطية عبر نظام نفيس (NPHIES) وتنعكس في مقيم وقوى، ونتولّى كل تغيير لاحق — إضافة الموظفين الجدد والمرافقين، وحذف المغادرين، وترقية الفئات، والتجديد في موعده — حتى لا تتوقف معاملات الإقامة بسبب وثيقة منتهية أو غير متوافقة." },
    ],
    audience: [
      { en: "Employers and establishments sponsoring expatriate staff who must keep iqamas valid", ar: "أصحاب العمل والمنشآت الذين يكفلون موظفين وافدين ويحتاجون إلى إبقاء الإقامات سارية" },
      { en: "New companies hiring their first employees and needing a compliant group policy fast", ar: "الشركات الجديدة التي توظّف أول موظفيها وتحتاج إلى وثيقة جماعية متوافقة بسرعة" },
      { en: "Businesses overpaying or under-covered on an existing policy who want the right class and price", ar: "المنشآت التي تدفع زيادةً أو تعاني نقص تغطية في وثيقة قائمة وتريد الفئة والسعر المناسبين" },
    ],
    benefits: [
      { en: "Iqama issuance and renewal never blocked by a missing or lapsed policy", ar: "إصدار الإقامة وتجديدها لا يتوقّف بسبب وثيقة مفقودة أو منتهية" },
      { en: "Competitive quotes gathered from multiple CCHI-approved insurers", ar: "عروض أسعار تنافسية من عدة شركات معتمدة لدى مجلس الضمان الصحي" },
      { en: "The right class chosen for your budget and CCHI rules — no over- or under-coverage", ar: "اختيار الفئة المناسبة لميزانيتك وأنظمة المجلس — دون زيادة أو نقص في التغطية" },
      { en: "Members added or removed within hours, not days", ar: "إضافة المشتركين أو حذفهم خلال ساعات لا أيام" },
      { en: "Government and CCHI fees passed through at cost — full transparency", ar: "رسوم الجهات الحكومية والمجلس تُمرَّر كما هي — شفافية كاملة" },
      { en: "Renewals tracked ahead of expiry so coverage never lapses", ar: "متابعة التجديدات قبل الانتهاء حتى لا تنقطع التغطية أبداً" },
    ],
    steps: [
      { title: { en: "Needs assessment", ar: "تقييم الاحتياج" }, text: { en: "We review your headcount, visa categories, dependents, and budget to define the coverage you actually need.", ar: "نراجع عدد موظفيك وفئات تأشيراتهم ومرافقيهم وميزانيتك لتحديد التغطية التي تحتاجها فعلاً." } },
      { title: { en: "Class selection", ar: "اختيار الفئة" }, text: { en: "We recommend the right CCHI class (C, B, A, or VIP) for each tier of staff under the Unified Cooperative Policy.", ar: "نوصي بالفئة الصحيحة المعتمدة من المجلس (C أو B أو A أو VIP) لكل شريحة من الموظفين وفق الوثيقة الموحّدة." } },
      { title: { en: "Competitive quotes", ar: "عروض تنافسية" }, text: { en: "We obtain and compare quotes from approved insurers such as Bupa Arabia, Tawuniya, and MedGulf.", ar: "نحصل على عروض من شركات معتمدة مثل بوبا العربية والتعاونية وميدغلف ونقارن بينها." } },
      { title: { en: "Policy issuance", ar: "إصدار الوثيقة" }, text: { en: "We issue the policy and register each member so coverage is recognized through NPHIES and reflected in Muqeem.", ar: "نُصدر الوثيقة ونُسجّل كل مشترك بحيث تُعتمد التغطية عبر نظام نفيس وتنعكس في مقيم." } },
      { title: { en: "Member management", ar: "إدارة المشتركين" }, text: { en: "We add new hires and dependents, remove departures, and process upgrades whenever your team changes.", ar: "نضيف الموظفين الجدد والمرافقين، ونحذف المغادرين، وننفّذ الترقيات كلما تغيّر فريقك." } },
      { title: { en: "Renewal & compliance", ar: "التجديد والامتثال" }, text: { en: "We track expiry dates and renew ahead of time so iqama transactions are never interrupted.", ar: "نتابع تواريخ الانتهاء ونجدّد قبل الموعد حتى لا تنقطع معاملات الإقامة." } },
    ],
    requirements: [
      { en: "Active Commercial Registration (CR) and a unified national number (700 number)", ar: "سجل تجاري ساري ورقم وطني موحّد (رقم 700)" },
      { en: "Employee details: name, iqama/border number, nationality, and date of birth", ar: "بيانات الموظفين: الاسم ورقم الإقامة/الحدود والجنسية وتاريخ الميلاد" },
      { en: "Dependent details for any spouse and children registered on the iqama", ar: "بيانات المرافقين من الزوج/الزوجة والأبناء المسجَّلين على الإقامة" },
      { en: "An authorized representative in Qiwa and Muqeem to confirm and register coverage", ar: "مفوّض في قوى ومقيم لاعتماد التغطية وتسجيلها" },
    ],
    deliverables: [
      { en: "An issued, CCHI-compliant policy covering all employees and dependents", ar: "وثيقة صادرة متوافقة مع مجلس الضمان الصحي تغطّي جميع الموظفين والمرافقين" },
      { en: "Member cards and coverage confirmation visible in Muqeem", ar: "بطاقات المشتركين وتأكيد التغطية الظاهر في مقيم" },
      { en: "An ongoing management and renewal schedule with expiry tracking", ar: "جدول إدارة وتجديد مستمر مع متابعة تواريخ الانتهاء" },
    ],
    timeline: { en: "Most policies are quoted within 1–2 business days and issued within 2–5 business days once member data is complete.", ar: "تُقدَّم عروض معظم الوثائق خلال يوم إلى يومَي عمل، وتُصدَر خلال يومين إلى خمسة أيام عمل بعد اكتمال بيانات المشتركين." },
    bestFor: { en: "Employers who need compliant, well-priced coverage in place before any iqama issuance or renewal.", ar: "أصحاب العمل الذين يحتاجون إلى تغطية متوافقة وبسعر مناسب قبل أي إصدار أو تجديد للإقامة." },
    supportType: { en: "A dedicated consultant who selects the class, secures quotes, issues the policy, and manages every change and renewal.", ar: "مستشار مخصّص يختار الفئة ويؤمّن العروض ويُصدر الوثيقة ويدير كل تغيير وتجديد." },
    faqs: [
      { q: { en: "Why can't I renew an iqama without medical insurance?", ar: "لماذا لا أستطيع تجديد الإقامة دون تأمين طبي؟" }, a: { en: "Cooperative health insurance is mandatory under CCHI rules and is checked automatically during the iqama transaction. If a valid, compliant policy is not recorded for the employee — and for each dependent on the iqama — Absher and Muqeem will not let the renewal proceed. We make sure coverage is active and registered before you attempt the transaction.", ar: "التأمين الصحي التعاوني إلزامي وفق أنظمة مجلس الضمان الصحي ويُتحقَّق منه تلقائياً أثناء معاملة الإقامة. وإذا لم تُسجَّل وثيقة سارية ومتوافقة للموظف — ولكل مرافق على الإقامة — فلن يسمح أبشر ومقيم بإتمام التجديد. ونحن نتأكد من أن التغطية فعّالة ومسجَّلة قبل محاولتك إجراء المعاملة." } },
      { q: { en: "Which insurance class do I need to choose?", ar: "أي فئة تأمين يجب أن أختار؟" }, a: { en: "All insurers follow the same Unified Cooperative Policy, but classes differ in network, limits, and price — typically C (basic), B (mid), A (comprehensive), and VIP above them. The right choice depends on your visa categories, staff seniority, and budget. We recommend the class that meets CCHI requirements without making you overpay.", ar: "تتّبع جميع الشركات الوثيقة الموحّدة نفسها، لكن الفئات تختلف في الشبكة والحدود والسعر — غالباً C (أساسية) وB (متوسطة) وA (شاملة) وVIP فوقها. ويعتمد الاختيار الصحيح على فئات تأشيراتك ومستوى موظفيك وميزانيتك. ونوصي بالفئة التي تستوفي متطلبات المجلس دون أن تدفع زيادة." } },
      { q: { en: "Are dependents required to be insured too?", ar: "هل يجب تأمين المرافقين أيضاً؟" }, a: { en: "Yes. Any spouse and children registered on an employee's iqama must have valid coverage, and their iqama issuance or renewal is blocked without it. Separately, the government dependent levy typically runs around SAR 400 per dependent per month, and the insurance premium is in addition to it; government fees are paid at cost. We register every dependent on the policy so none are missed at renewal.", ar: "نعم. يجب أن يكون لأي زوج/زوجة وأبناء مسجَّلين على إقامة الموظف تغطية سارية، ويتوقّف إصدار أو تجديد إقامتهم بدونها. وبشكل منفصل تبلغ رسوم المرافق الحكومية عادةً نحو 400 ريال لكل مرافق شهرياً، ويُضاف قسط التأمين إليها؛ وتُدفع الرسوم الحكومية كما هي. ونحن نُسجّل كل مرافق على الوثيقة حتى لا يُغفَل أحد عند التجديد." } },
      { q: { en: "How much does employee medical insurance cost?", ar: "كم تبلغ تكلفة التأمين الطبي للموظفين؟" }, a: { en: "Premiums vary widely by class, age, and insurer — a basic Class C plan can start in the low hundreds of riyals per year, while comprehensive Class A or VIP cover runs several thousand. Government and CCHI fees are passed through at cost. Your consultant confirms the exact figure after gathering competitive quotes; we never quote a fixed price blind.", ar: "تتفاوت الأقساط كثيراً حسب الفئة والعمر والشركة — فالخطة الأساسية من الفئة C قد تبدأ بمئات قليلة من الريالات سنوياً، بينما تبلغ التغطية الشاملة من الفئة A أو VIP عدة آلاف. وتُمرَّر رسوم الجهات الحكومية والمجلس كما هي. ويؤكّد مستشارك الرقم الدقيق بعد جمع عروض تنافسية؛ ولا نُحدّد سعراً ثابتاً دون دراسة." } },
      { q: { en: "Can you add or remove employees mid-year?", ar: "هل يمكنكم إضافة أو حذف موظفين خلال السنة؟" }, a: { en: "Yes. We handle additions, removals, and class upgrades throughout the policy year, usually within hours of receiving the member's details. New hires can be covered before their iqama is issued, and leavers removed to avoid paying for inactive members. You keep one compliant policy across all your staff at all times.", ar: "نعم. نتولّى الإضافة والحذف وترقية الفئات طوال سنة الوثيقة، غالباً خلال ساعات من استلام بيانات المشترك. ويمكن تغطية الموظفين الجدد قبل إصدار إقاماتهم، وحذف المغادرين لتجنّب الدفع عن مشتركين غير فعّالين. وتبقى لديك وثيقة واحدة متوافقة تشمل جميع موظفيك في كل وقت." } },
    ],
  },
  {
    slug: "car-insurance",
    category: "government-services",
    icon: "shield-check",
    updated: "2026-06-28",
    seoTitle: {"en": "Car Insurance Saudi Arabia 2026 | Third-Party & Comprehensive", "ar": "تأمين سيارات في السعودية 2026 | ضد الغير وشامل"},
    seoDescription: {"en": "Compare regulated car insurers in Saudi Arabia: third-party or comprehensive cover issued instantly for istimara renewal and ownership transfer. Insure today.", "ar": "قارن شركات تأمين السيارات المرخّصة في السعودية: تأمين ضد الغير أو شامل يصدر فورًا لتجديد الاستمارة ونقل الملكية. أمّن سيارتك اليوم."},
    featured: true,
    image: "/images/services/car-insurance.webp",
    title: { en: "Vehicle Insurance", ar: "تأمين السيارات" },
    excerpt: { en: "Compare every regulated insurer, secure the right cover at the best premium, and get your policy issued instantly so registration or ownership transfer is never delayed.", ar: "نقارن بين جميع شركات التأمين المرخّصة، ونؤمّن التغطية المناسبة بأفضل قسط، ونُصدر وثيقتك فوريًّا حتى لا يتأخّر تجديد الاستمارة أو نقل الملكية." },
    overview: [
      { en: "Vehicle insurance in Saudi Arabia comes in two forms, and knowing which you need matters. Third-party liability cover (التأمين ضد الغير) is the legal minimum: it pays for injury, death, or property damage your vehicle causes to others, but nothing for your own car. Comprehensive cover (التأمين الشامل) adds protection for your own vehicle against accidents, theft, fire, and certain natural risks, in line with the policy's terms. We explain the real difference for your situation and recommend the cover that actually fits how and what you drive — not the most expensive option by default.", ar: "ينقسم تأمين المركبات في المملكة إلى نوعين، ومعرفة ما تحتاجه أمرٌ مهم. فالتأمين ضد الغير هو الحد الأدنى القانوني: يغطّي ما تُسبّبه مركبتك للآخرين من إصاباتٍ أو وفاةٍ أو أضرارٍ في الممتلكات، لكنه لا يغطّي سيارتك أنت. أما التأمين الشامل فيضيف حمايةً لمركبتك ضد الحوادث والسرقة والحريق وبعض المخاطر الطبيعية وفق شروط الوثيقة. ونحن نوضّح لك الفرق الحقيقي بحسب وضعك، ونوصي بالتغطية التي تناسب طريقة استخدامك للمركبة فعليًّا — لا الخيار الأغلى تلقائيًّا." },
      { en: "The sector is regulated by the Insurance Authority (هيئة التأمين), which since late 2023 has been the single regulator after taking over insurance supervision from SAMA. Premiums are not arbitrary: they are driven by your claims and accident history recorded in the Najm (نجم) system, the vehicle's value and model, the driver's age and experience, and your no-claims record. A clean record earns a no-claims discount that grows each year — but letting the policy lapse for more than thirty days puts that discount at risk and can return you to the higher base rate. We review your Najm history before quoting so the premium reflects your true standing.", ar: "يخضع القطاع لإشراف هيئة التأمين، التي أصبحت منذ أواخر عام 2023 الجهة المنظِّمة الوحيدة بعد أن تسلّمت الإشراف على التأمين من البنك المركزي السعودي (ساما). والأقساط ليست اعتباطية: فهي تتأثّر بسجلّ حوادثك ومطالباتك المسجّل في نظام نجم، وقيمة المركبة وطرازها، وعمر السائق وخبرته، وسجلّك الخالي من المطالبات. والسجلّ النظيف يمنحك خصم عدم المطالبة الذي يتنامى سنويًّا — لكن انقطاع الوثيقة لأكثر من ثلاثين يومًا يُعرّض هذا الخصم للخطر وقد يعيدك إلى السعر الأساسي الأعلى. لذلك نراجع سجلّك في نجم قبل التسعير حتى يعكس القسط وضعك الحقيقي." },
      { en: "Valid insurance is not just for driving — it is a precondition for two government transactions. You cannot renew your vehicle registration (الاستمارة / رخصة السير) without an active policy, and you cannot transfer ownership of a vehicle until cover is in place. Because of this, timing matters: a gap in cover can stall a sale or freeze a renewal. We compare regulated insurers, lock in the best premium for the cover you need, and issue the policy instantly so the registration or transfer goes through without delay — and we stay with you for renewals and for filing claims through Najm if an accident happens.", ar: "التأمين الساري ليس للقيادة فحسب — بل هو شرطٌ مسبق لمعاملتين حكوميتين. فلا يمكنك تجديد استمارة المركبة (رخصة السير) دون وثيقةٍ سارية، ولا يمكنك نقل ملكية مركبةٍ قبل توفّر التغطية. ولهذا فالتوقيت مهم: فأي انقطاعٍ في التغطية قد يُعطّل عملية بيعٍ أو يُجمّد تجديدًا. نقارن بين شركات التأمين المرخّصة، ونثبّت أفضل قسطٍ للتغطية التي تحتاجها، ونُصدر الوثيقة فوريًّا ليتمّ التجديد أو النقل دون تأخير — ونبقى معك للتجديدات ولرفع المطالبات عبر نجم إذا وقع حادث." },
    ],
    audience: [
      { en: "Individuals renewing their istimara or buying/selling a vehicle who need cover in place today.", ar: "الأفراد الذين يجدّدون الاستمارة أو يبيعون/يشترون مركبة ويحتاجون تغطيةً سارية اليوم." },
      { en: "Owners unsure whether third-party or comprehensive cover is right for their car and budget.", ar: "المالكون غير المتأكّدين من مناسبة التأمين ضد الغير أم الشامل لسيارتهم وميزانيتهم." },
      { en: "Businesses and individuals managing multiple vehicles or a fleet who want one coordinated renewal.", ar: "الشركات والأفراد الذين يديرون عدة مركبات أو أسطولًا ويرغبون في تجديدٍ منظَّمٍ موحَّد." },
    ],
    benefits: [
      { en: "All regulated insurers compared in one place — you see the best real price, not one quote.", ar: "مقارنة جميع الشركات المرخّصة في مكان واحد — ترى أفضل سعرٍ حقيقي لا عرضًا واحدًا." },
      { en: "Policy issued instantly so registration renewal or ownership transfer is never blocked.", ar: "إصدار الوثيقة فوريًّا حتى لا يتعطّل تجديد الاستمارة أو نقل الملكية." },
      { en: "Your Najm no-claims history checked first so you capture every discount you've earned.", ar: "مراجعة سجلّك في نجم أولًا لتحصل على كل خصمٍ استحققته." },
      { en: "Clear advice on third-party vs comprehensive — the right cover, not the costliest.", ar: "نصيحة واضحة بين التأمين ضد الغير والشامل — التغطية المناسبة لا الأغلى." },
      { en: "Renewal reminders before the 30-day gap that would put your no-claims discount at risk.", ar: "تنبيهات تجديد قبل فجوة الثلاثين يومًا التي تُعرّض خصم عدم المطالبة للخطر." },
      { en: "Hands-on claims support through Najm if an accident happens.", ar: "دعم فعليّ للمطالبات عبر نجم في حال وقوع حادث." },
    ],
    steps: [
      { title: { en: "Vehicle and driver details", ar: "بيانات المركبة والسائق" }, text: { en: "We collect your istimara, ID, and vehicle details to identify your car and eligibility.", ar: "نجمع الاستمارة والهوية وبيانات المركبة لتحديد سيارتك وأهليتك." } },
      { title: { en: "Najm history check", ar: "مراجعة سجل نجم" }, text: { en: "We review your accident and no-claims record in Najm so quotes reflect your true standing.", ar: "نراجع سجلّ حوادثك وعدم مطالبتك في نجم حتى تعكس العروض وضعك الحقيقي." } },
      { title: { en: "Cover recommendation", ar: "توصية التغطية" }, text: { en: "We advise third-party or comprehensive based on your vehicle's value and how you use it.", ar: "نوصي بالتأمين ضد الغير أو الشامل بحسب قيمة مركبتك وطريقة استخدامك لها." } },
      { title: { en: "Compare regulated insurers", ar: "مقارنة الشركات المرخّصة" }, text: { en: "We compare quotes across licensed insurers and secure the best premium for that cover.", ar: "نقارن العروض بين الشركات المرخّصة ونؤمّن أفضل قسطٍ لتلك التغطية." } },
      { title: { en: "Instant policy issuance", ar: "إصدار الوثيقة فوريًّا" }, text: { en: "We issue the policy immediately and confirm it is active so your transaction isn't delayed.", ar: "نُصدر الوثيقة على الفور ونؤكّد سريانها حتى لا تتأخّر معاملتك." } },
      { title: { en: "Renewals and claims", ar: "التجديدات والمطالبات" }, text: { en: "We track renewal dates and support any claim filed through Najm after an accident.", ar: "نتابع مواعيد التجديد وندعم أي مطالبة تُرفع عبر نجم بعد حادث." } },
    ],
    requirements: [
      { en: "Valid national ID or Iqama of the vehicle owner.", ar: "هوية وطنية أو إقامة سارية لمالك المركبة." },
      { en: "Vehicle registration (istimara) or the serial/plate number.", ar: "استمارة المركبة (رخصة السير) أو الرقم التسلسلي/رقم اللوحة." },
      { en: "For comprehensive cover, the vehicle's current market value or purchase details.", ar: "للتأمين الشامل، القيمة السوقية الحالية للمركبة أو بيانات الشراء." },
      { en: "For ownership transfer, the buyer's details so cover can be issued in the new owner's name.", ar: "لنقل الملكية، بيانات المشتري لإصدار التغطية باسم المالك الجديد." },
    ],
    deliverables: [
      { en: "An active insurance policy issued by a regulated insurer, valid for registration and transfer.", ar: "وثيقة تأمين سارية صادرة عن شركة مرخّصة، صالحة للتجديد ونقل الملكية." },
      { en: "A side-by-side comparison showing why the chosen premium and cover are best for you.", ar: "مقارنة جنبًا إلى جنب توضّح لماذا القسط والتغطية المختارة هي الأنسب لك." },
      { en: "A renewal and claims plan, including Najm support contacts if an accident occurs.", ar: "خطة تجديدٍ ومطالبات، تشمل جهات دعم نجم في حال وقوع حادث." },
    ],
    timeline: { en: "Most policies are issued the same day — often within minutes once details are confirmed.", ar: "تُصدر معظم الوثائق في اليوم نفسه — غالبًا خلال دقائق بعد تأكيد البيانات." },
    bestFor: { en: "Anyone needing cover in place today to renew registration, complete a sale, or avoid a lapse.", ar: "كل من يحتاج تغطيةً سارية اليوم لتجديد الاستمارة أو إتمام بيعٍ أو تجنّب انقطاع الوثيقة." },
    supportType: { en: "A dedicated consultant who compares, issues, and stays on for renewals and claims.", ar: "مستشار مخصّص يقارن ويُصدر ويبقى معك للتجديدات والمطالبات." },
    faqs: [
      { q: { en: "Do I really need insurance just to renew my istimara?", ar: "هل أحتاج التأمين فعلًا لمجرد تجديد الاستمارة؟" }, a: { en: "Yes. An active policy is a precondition for renewing your vehicle registration (istimara), and the renewal will not go through without it. Valid cover is also required before any ownership transfer. We issue the policy instantly so neither transaction is held up.", ar: "نعم. الوثيقة السارية شرطٌ مسبق لتجديد استمارة المركبة، ولن يتمّ التجديد بدونها. كما تُشترط التغطية السارية قبل أي نقل ملكية. ونحن نُصدر الوثيقة فوريًّا حتى لا تتعطّل أيٌّ من المعاملتين." } },
      { q: { en: "What is the difference between third-party and comprehensive cover?", ar: "ما الفرق بين التأمين ضد الغير والشامل؟" }, a: { en: "Third-party (the legal minimum) covers damage and injury your vehicle causes to others, but nothing for your own car. Comprehensive adds protection for your own vehicle against accidents, theft, and fire, per the policy terms. We recommend the right one based on your car's value and how you use it.", ar: "التأمين ضد الغير (الحد الأدنى القانوني) يغطّي ما تُسبّبه مركبتك للآخرين من أضرارٍ وإصابات، دون سيارتك أنت. أما الشامل فيضيف حمايةً لمركبتك ضد الحوادث والسرقة والحريق وفق شروط الوثيقة. ونوصيك بالأنسب بحسب قيمة سيارتك وطريقة استخدامك لها." } },
      { q: { en: "Why is my premium higher than a friend's for a similar car?", ar: "لماذا قسطي أعلى من قسط صديقي لسيارةٍ مشابهة؟" }, a: { en: "Premiums depend on your personal Najm claims history, your no-claims record, driver age and experience, and the vehicle's value — not the car model alone. A clean record earns a discount that grows yearly. We check your Najm record first so you receive every discount you've actually earned.", ar: "يعتمد القسط على سجلّ مطالباتك في نجم، وسجلّك الخالي من المطالبات، وعمر السائق وخبرته، وقيمة المركبة — لا على الطراز وحده. والسجلّ النظيف يمنح خصمًا يتنامى سنويًّا. ونراجع سجلّك في نجم أولًا لتحصل على كل خصمٍ استحققته فعلًا." } },
      { q: { en: "What happens if I let my insurance lapse?", ar: "ماذا يحدث إذا انقطع تأميني؟" }, a: { en: "Driving without insurance is a violation, and a lapse can block registration renewal or a sale. Just as important, leaving cover lapsed for more than thirty days puts your no-claims discount at risk and can return you to the higher base rate. We send renewal reminders ahead of time to protect both your cover and your discount.", ar: "القيادة دون تأمين مخالفة، وانقطاع الوثيقة قد يُعطّل تجديد التسجيل أو عملية بيع. والأهم أن ترك التغطية منقطعة لأكثر من ثلاثين يومًا يُعرّض خصم عدم المطالبة للخطر وقد يعيدك إلى السعر الأساسي الأعلى. لذا نرسل تنبيهات تجديد مسبقة لحماية تغطيتك وخصمك معًا." } },
      { q: { en: "If I have an accident, do you help with the claim?", ar: "إذا وقع لي حادث، هل تساعدونني في المطالبة؟" }, a: { en: "Yes. Accidents in Saudi Arabia are reported through Najm, which documents the incident and assigns fault. We guide you through reporting and filing the claim with your insurer and follow up until it is settled. You are not left to handle the process alone.", ar: "نعم. تُبلَّغ الحوادث في المملكة عبر نجم الذي يوثّق الواقعة ويحدّد نسبة المسؤولية. ونرشدك خلال الإبلاغ ورفع المطالبة لدى شركتك ونتابع حتى تسويتها. ولن نتركك تتولّى الإجراء وحدك." } },
    ],
  },
  {
    slug: "vehicle-ownership-transfer",
    category: "government-services",
    icon: "scroll-text",
    updated: "2026-06-28",
    seoTitle: {"en": "Vehicle Ownership Transfer Saudi Arabia 2026 | Absher & Tam", "ar": "نقل ملكية سيارة في السعودية 2026 | عبر أبشر ومنصة تم"},
    seoDescription: {"en": "Vehicle ownership transfer in Saudi Arabia done for you: insurance in the buyer's name, MVPI inspection, violations cleared, transfer completed via Absher & Tam.", "ar": "نقل ملكية السيارات في السعودية ننجزه عنك: تأمين باسم المشتري، فحص دوري، تسوية المخالفات، وإتمام المبايعة عبر أبشر ومنصة تم. ابدأ الآن."},
    featured: true,
    image: "/images/services/vehicle-ownership-transfer.webp",
    title: { en: "Vehicle Ownership Transfer", ar: "نقل ملكية السيارات" },
    excerpt: { en: "Transfer vehicle ownership in Saudi Arabia electronically through Absher and Tam — every condition verified, insurance and inspection arranged, completed without the hassle.", ar: "ننقل ملكية سيارتك في السعودية إلكترونيًا عبر أبشر ومنصة تم — نتحقق من كل شرط، ونرتّب التأمين والفحص، ونُنجز المعاملة دون عناء." },
    overview: [
      { en: "Transferring vehicle ownership in Saudi Arabia is now an electronic process completed through the Absher (أبشر) platform and the Tam (تم) platform, or through an authorized center (مركز معتمد). For the transfer to go through, several conditions must all be satisfied at once: a valid insurance policy issued in the buyer's name, a vehicle record clear of outstanding traffic violations, a valid periodic technical inspection (الفحص الدوري / MVPI), valid registration (الاستمارة), and payment of the government transfer fee. If any single condition is missing, the system blocks the sale — which is where most buyers and sellers get stuck.", ar: "أصبح نقل ملكية المركبات في السعودية إجراءً إلكترونيًا يُنجَز عبر منصة أبشر ومنصة تم، أو من خلال مركز معتمد. ولإتمام النقل يجب أن تتحقق عدة شروط في آنٍ واحد: وثيقة تأمين سارية صادرة باسم المشتري، وسجل مركبة خالٍ من المخالفات المرورية غير المسددة، وفحص فني دوري ساري المفعول (الفحص الدوري)، واستمارة سارية المفعول، وسداد الرسم الحكومي لنقل الملكية. وإذا تخلّف أيّ شرط واحد، يوقف النظام عملية المبايعة — وهنا يتعثّر معظم البائعين والمشترين." },
      { en: "At Omnera One we handle the entire transfer on your behalf. We begin by auditing the vehicle's record up front — checking the registration validity, the periodic inspection status, and the traffic-violation record on Absher — so there are no surprises mid-transaction. Where a condition is missing, we arrange it for you: we issue the buyer's insurance policy through a licensed insurer, book and complete the periodic inspection (الفحص الدوري), and ensure any outstanding violations are settled before we initiate the sale on Tam or at an authorized center.", ar: "في Omnera One نتولّى المعاملة بالكامل نيابةً عنك. نبدأ بمراجعة سجل المركبة مسبقًا — نتحقق من سريان الاستمارة، وحالة الفحص الدوري، وسجل المخالفات المرورية عبر أبشر — حتى لا تظهر أي مفاجآت في منتصف المعاملة. وحين يكون أحد الشروط ناقصًا، نوفّره لك: نُصدر وثيقة تأمين المشتري عبر شركة تأمين مرخّصة، ونحجز الفحص الدوري وننجزه، ونتأكد من تسوية أي مخالفات قائمة قبل أن نبدأ المبايعة عبر منصة تم أو في مركز معتمد." },
      { en: "The service works for individuals and for companies and establishments alike (نقل ملكية لمنشأة) — whether you are selling a single private car or moving a vehicle into or out of a company's commercial registration (السجل التجاري) through Absher Business (أبشر أعمال). Because the e-service is fully electronic where the conditions allow, the buyer and seller often do not need to attend in person at all; the transfer is confirmed once the buyer approves the sale request on the platform. Government fees are passed through at cost, and a consultant confirms the final price and timeline with you before we proceed.", ar: "تخدم هذه الخدمة الأفراد والشركات والمنشآت على حدٍّ سواء (نقل ملكية لمنشأة) — سواء كنت تبيع سيارة خاصة واحدة أو تنقل مركبة من السجل التجاري لمنشأة أو إليه عبر أبشر أعمال. ولأن الخدمة إلكترونية بالكامل حيثما تسمح الشروط، فغالبًا لا يحتاج البائع والمشتري إلى الحضور شخصيًا إطلاقًا؛ إذ تُعتمد المبايعة بمجرد موافقة المشتري على طلب البيع عبر المنصة. وتُمرَّر الرسوم الحكومية كما هي، ويؤكد لك أحد المستشارين السعر النهائي والمدة قبل أن نبدأ." },
    ],
    audience: [
      { en: "Individuals buying or selling a private car who want the transfer handled without queues or back-and-forth", ar: "الأفراد الذين يبيعون أو يشترون سيارة خاصة ويرغبون في إنجاز النقل دون طوابير أو تكرار للإجراءات" },
      { en: "Companies and establishments adding or removing vehicles from their commercial registration (نقل ملكية لمنشأة)", ar: "الشركات والمنشآت التي تضيف مركبات إلى سجلها التجاري أو تزيلها منه (نقل ملكية لمنشأة)" },
      { en: "Buyers and sellers blocked by a missing condition — no insurance, an expired inspection, or unpaid violations", ar: "البائعون والمشترون المتعثّرون بسبب شرط ناقص — غياب التأمين، أو انتهاء الفحص، أو مخالفات غير مسددة" },
    ],
    benefits: [
      { en: "Every condition verified up front — no failed transfer at the counter", ar: "التحقق من كل شرط مسبقًا — دون فشل المعاملة عند التنفيذ" },
      { en: "Insurance in the buyer's name and periodic inspection arranged for you", ar: "إصدار التأمين باسم المشتري وترتيب الفحص الدوري نيابةً عنك" },
      { en: "Outstanding traffic violations identified and settled before the sale", ar: "رصد المخالفات المرورية القائمة وتسويتها قبل المبايعة" },
      { en: "Completed electronically via Tam/Absher — often no in-person attendance", ar: "إنجاز إلكتروني عبر منصة تم وأبشر — غالبًا دون حضور شخصي" },
      { en: "Works for individuals and for companies and establishments", ar: "يخدم الأفراد والشركات والمنشآت على حدٍّ سواء" },
      { en: "Government fees passed through at cost — full transparency", ar: "الرسوم الحكومية تُمرَّر كما هي — شفافية كاملة" },
    ],
    steps: [
      { title: { en: "Record audit", ar: "مراجعة السجل" }, text: { en: "We check the vehicle's registration validity, periodic inspection status, and traffic-violation record on Absher before anything else.", ar: "نتحقق من سريان الاستمارة وحالة الفحص الدوري وسجل المخالفات المرورية عبر أبشر قبل أي خطوة أخرى." } },
      { title: { en: "Insurance in buyer's name", ar: "التأمين باسم المشتري" }, text: { en: "We issue a valid insurance policy for the vehicle in the buyer's name through a licensed insurer.", ar: "نُصدر وثيقة تأمين سارية للمركبة باسم المشتري عبر شركة تأمين مرخّصة." } },
      { title: { en: "Inspection and violations", ar: "الفحص والمخالفات" }, text: { en: "We book and complete the periodic technical inspection (MVPI) and settle any outstanding violations.", ar: "نحجز الفحص الفني الدوري وننجزه، ونسوّي أي مخالفات قائمة على المركبة." } },
      { title: { en: "Initiate the sale", ar: "بدء المبايعة" }, text: { en: "We initiate the ownership transfer on Tam/Absher (or at an authorized center) under the correct buyer and seller details.", ar: "نبدأ نقل الملكية عبر منصة تم وأبشر (أو في مركز معتمد) ببيانات البائع والمشتري الصحيحة." } },
      { title: { en: "Buyer approval and fee", ar: "موافقة المشتري والرسم" }, text: { en: "The buyer approves the request on the platform and the government transfer fee is paid.", ar: "يوافق المشتري على الطلب عبر المنصة ويُسدَّد الرسم الحكومي لنقل الملكية." } },
      { title: { en: "New registration issued", ar: "إصدار الاستمارة الجديدة" }, text: { en: "Ownership is transferred and the new registration (الاستمارة) is issued in the buyer's name.", ar: "تُنقَل الملكية وتُصدَر الاستمارة الجديدة باسم المشتري." } },
    ],
    requirements: [
      { en: "Valid registration (الاستمارة) for the vehicle being sold", ar: "استمارة سارية المفعول للمركبة محل البيع" },
      { en: "Valid periodic technical inspection (الفحص الدوري / MVPI)", ar: "فحص فني دوري ساري المفعول (الفحص الدوري)" },
      { en: "Verified identities of buyer and seller (or the establishment's commercial registration for a company transfer)", ar: "إثبات هوية البائع والمشتري (أو السجل التجاري للمنشأة في حال النقل لمنشأة)" },
      { en: "A traffic record clear of unpaid violations on the vehicle", ar: "سجل مروري خالٍ من المخالفات غير المسددة على المركبة" },
    ],
    deliverables: [
      { en: "Completed ownership transfer on Tam/Absher with new registration in the buyer's name", ar: "نقل ملكية مكتمل عبر منصة تم وأبشر مع استمارة جديدة باسم المشتري" },
      { en: "Valid insurance policy issued in the buyer's name", ar: "وثيقة تأمين سارية صادرة باسم المشتري" },
      { en: "Confirmation that the periodic inspection and any violations are cleared", ar: "تأكيد إنجاز الفحص الدوري وتسوية أي مخالفات" },
    ],
    timeline: { en: "Often completed the same day once all conditions are met; arranging missing insurance or inspection may add a short period.", ar: "تُنجَز غالبًا في اليوم نفسه متى اكتملت الشروط؛ وقد يضيف ترتيب التأمين أو الفحص الناقص مدة قصيرة." },
    bestFor: { en: "Anyone whose vehicle sale is stalled by a missing condition and who wants it resolved and transferred in one go.", ar: "كل من تعثّرت مبايعته بسبب شرط ناقص ويرغب في معالجته وإتمام النقل دفعةً واحدة." },
    supportType: { en: "A dedicated consultant manages the transfer end to end and keeps you updated until the new registration is issued.", ar: "مستشار مخصّص يدير المعاملة من البداية إلى النهاية ويبقيك على اطّلاع حتى تُصدَر الاستمارة الجديدة." },
    faqs: [
      { q: { en: "Do the buyer and seller need to be physically present?", ar: "هل يجب حضور البائع والمشتري شخصيًا؟" }, a: { en: "In most cases, no. Where the e-service conditions are met, the transfer is completed electronically on Tam/Absher and confirmed once the buyer approves the sale request — neither party needs to attend in person. We use an authorized center only when a specific case requires it.", ar: "في معظم الحالات لا. فحيثما تتحقق شروط الخدمة الإلكترونية، يُنجَز النقل إلكترونيًا عبر منصة تم وأبشر ويُعتمد بمجرد موافقة المشتري على طلب البيع — دون حاجة لحضور أيٍّ من الطرفين شخصيًا. ولا نلجأ إلى مركز معتمد إلا عندما تستلزم حالة بعينها ذلك." } },
      { q: { en: "What stops a transfer from going through?", ar: "ما الذي يمنع إتمام نقل الملكية؟" }, a: { en: "The transfer is blocked if any condition is missing: no valid insurance in the buyer's name, an expired or missing periodic inspection, unpaid traffic violations on the vehicle, or an expired registration. We verify all of these up front and resolve them before initiating the sale, so the transfer does not fail midway.", ar: "يُمنَع النقل إذا تخلّف أيّ شرط: غياب تأمين ساري باسم المشتري، أو انتهاء الفحص الدوري أو عدم وجوده، أو وجود مخالفات مرورية غير مسددة على المركبة، أو انتهاء الاستمارة. ونحن نتحقق من ذلك كله مسبقًا ونعالجه قبل بدء المبايعة، حتى لا تتعثّر المعاملة في منتصفها." } },
      { q: { en: "Who pays for the insurance and inspection?", ar: "من يتحمّل تكلفة التأمين والفحص؟" }, a: { en: "The buyer's insurance and the periodic inspection are part of the transfer requirements and are billed at their actual cost. We arrange both on your behalf, pass the government and provider fees through transparently, and a consultant confirms the full breakdown with you before any payment.", ar: "يُعدّ تأمين المشتري والفحص الدوري جزءًا من متطلبات النقل ويُحتسبان بتكلفتهما الفعلية. ونحن نرتّب الاثنين نيابةً عنك، ونمرّر الرسوم الحكومية ورسوم مزوّد الخدمة بشفافية، ويؤكد لك أحد المستشارين التفاصيل الكاملة قبل أي سداد." } },
      { q: { en: "How much is the government transfer fee?", ar: "كم يبلغ الرسم الحكومي لنقل الملكية؟" }, a: { en: "The government transfer fee is typically a modest fixed amount, with an additional platform service charge for completing the sale. Because amounts can change, we do not quote a fixed figure as fact; a consultant confirms the exact fees, paid at cost, before we proceed.", ar: "يكون الرسم الحكومي لنقل الملكية عادةً مبلغًا ثابتًا متواضعًا، مع رسم خدمة إضافي عبر المنصة لإتمام المبايعة. ولأن المبالغ قد تتغيّر، لا نذكر رقمًا ثابتًا كحقيقة قاطعة؛ بل يؤكد لك أحد المستشارين الرسوم الدقيقة، التي تُسدَّد بتكلفتها، قبل أن نبدأ." } },
      { q: { en: "Can you transfer a vehicle into or out of a company's name?", ar: "هل يمكنكم نقل مركبة إلى اسم منشأة أو منها؟" }, a: { en: "Yes. We handle transfers for companies and establishments (نقل ملكية لمنشأة) through Absher Business, whether you are registering a vehicle under the company's commercial registration (السجل التجاري) or moving it out to an individual. The same conditions apply, and we verify the establishment's details and authorizations before initiating the transfer.", ar: "نعم. نتولّى عمليات النقل للشركات والمنشآت (نقل ملكية لمنشأة) عبر أبشر أعمال، سواء كنت تسجّل مركبة ضمن السجل التجاري للمنشأة أو تنقلها منها إلى فرد. وتنطبق الشروط نفسها، ونتحقق من بيانات المنشأة وتفويضاتها قبل بدء النقل." } },
    ],
  },
  {
    slug: "traffic-services",
    category: "government-services",
    icon: "map-pin",
    updated: "2026-06-28",
    seoTitle: {"en": "Traffic (Muroor) Services Saudi Arabia 2026 | Istimara & Fines", "ar": "خدمات المرور في السعودية 2026 | تجديد استمارة ومخالفات"},
    seoDescription: {"en": "All Muroor transactions handled for you: istimara renewal, plates, paying and objecting to traffic fines, licences and lifting vehicle holds — via Absher & Tam.", "ar": "جميع معاملات المرور ننجزها نيابةً عنك: تجديد الاستمارة، اللوحات، سداد المخالفات والاعتراض عليها، رخص القيادة ورفع الإيقاف — عبر أبشر ومنصة تم."},
    featured: true,
    image: "/images/services/traffic-services.webp",
    title: { en: "Traffic (Muroor) Services", ar: "خدمات المرور" },
    excerpt: { en: "We handle every General Department of Traffic transaction for you — registration renewal, plates, violations and objections, driving licences, and lifting holds — through Absher and Tam.", ar: "نتولّى نيابةً عنك كل معاملات الإدارة العامة للمرور — تجديد الاستمارة، واللوحات، والمخالفات والاعتراض عليها، ورخص القيادة، ورفع الإيقاف — عبر أبشر ومنصة تم." },
    overview: [
      { en: "Most General Department of Traffic (الإدارة العامة للمرور) transactions now run electronically through Absher (أبشر) for individuals and Tam (منصة تم) for establishments, but each one carries its own conditions that can quietly block you. We run the full range on your behalf: renewing vehicle registration (تجديد الاستمارة / رخصة السير), issuing and replacing plates (اللوحات), paying and objecting to traffic violations (المخالفات), issuing renewing and replacing driving licences, updating vehicle data, and lifting holds (إيقاف) on a vehicle or its registration.", ar: "تجري معظم معاملات الإدارة العامة للمرور اليوم إلكترونيًا عبر أبشر للأفراد ومنصة تم للمنشآت، غير أن لكل معاملة شروطًا قد تعرقلك دون أن تدري. نتولّى نيابةً عنك النطاق الكامل: تجديد الاستمارة (رخصة السير)، وإصدار اللوحات وإبدالها، وسداد المخالفات المرورية والاعتراض عليها، وإصدار رخص القيادة وتجديدها وإبدالها، وتحديث بيانات المركبة، ورفع الإيقاف عن المركبة أو استمارتها." },
      { en: "Vehicle registration in particular will not renew unless three prerequisites are in place at the same time: a valid periodic technical inspection (الفحص الدوري / MVPI), a valid motor insurance policy covering the renewal term, and a clean violation record with no unpaid fines. We verify each condition first, coordinate the inspection where needed, and settle or formally object to any outstanding violations before completing the renewal — so the transaction goes through on the first attempt rather than bouncing back.", ar: "ولا تُجدَّد استمارة المركبة على وجه الخصوص ما لم تتوفر ثلاثة متطلبات في آنٍ واحد: فحص فني دوري سارٍ، ووثيقة تأمين سارية تغطي مدة التجديد، وسجل مخالفات خالٍ من الغرامات غير المسددة. نتحقق من كل شرط أولًا، وننسّق الفحص عند الحاجة، ونسدّد أو نعترض رسميًا على أي مخالفات قائمة قبل إتمام التجديد — لتنجح المعاملة من المحاولة الأولى لا أن تُردّ." },
      { en: "Beyond one-off transactions, our real value is preventing fines and lapses from ever building up. We track every expiry date — registration, inspection, insurance, and driving licence — and renew ahead of the deadline (registration carries a grace period of roughly 60 days, but we never rely on it), while filing objections within the regulated window (typically 30 days from when a violation is registered) so disputable fines are challenged in time. For companies, we manage entire fleets through Tam on a single tracked schedule, and government fees are always passed through at cost with the final price confirmed by your consultant before we proceed.", ar: "وأبعد من المعاملات المفردة، تكمن قيمتنا الحقيقية في منع تراكم الغرامات والانتهاءات من الأساس. نتابع كل تاريخ انتهاء — الاستمارة، والفحص، والتأمين، ورخصة القيادة — ونجدّد قبل الموعد النهائي (وللاستمارة مهلة سماح تبلغ نحو 60 يومًا، غير أننا لا نعوّل عليها)، مع رفع الاعتراضات خلال المهلة النظامية (وغالبًا 30 يومًا من تاريخ تسجيل المخالفة) للطعن في الغرامات القابلة للنزاع في وقتها. أما للشركات، فندير أساطيل كاملة عبر منصة تم على جدول واحد متابَع، وتُمرَّر الرسوم الحكومية دائمًا كما هي مع تأكيد المستشار للسعر النهائي قبل المباشرة." },
    ],
    audience: [
      { en: "Individuals renewing registration, plates, or a driving licence without queues", ar: "الأفراد الراغبون في تجديد الاستمارة أو اللوحات أو رخصة القيادة دون طوابير" },
      { en: "Companies and establishments managing vehicle fleets through Tam", ar: "الشركات والمنشآت التي تُدير أساطيل المركبات عبر منصة تم" },
      { en: "Owners facing a hold (إيقاف) on a vehicle or accumulated traffic violations", ar: "المُلّاك الذين يواجهون إيقافًا على مركبة أو تراكمًا في المخالفات المرورية" },
    ],
    benefits: [
      { en: "Every Muroor transaction handled for you, end to end", ar: "كل معاملة مرورية تُنجَز نيابةً عنك من البداية إلى النهاية" },
      { en: "Expiry tracking that prevents fines from ever accumulating", ar: "متابعة لتواريخ الانتهاء تمنع تراكم الغرامات نهائيًا" },
      { en: "Formal objections to unjust fines filed within the legal window", ar: "اعتراضات رسمية على الغرامات غير المستحقة تُرفع خلال المهلة النظامية" },
      { en: "Holds (إيقاف) diagnosed and lifted at the source", ar: "حالات الإيقاف تُشخَّص وتُرفع من جذرها" },
      { en: "Government fees passed through at cost — full transparency", ar: "الرسوم الحكومية تُمرَّر كما هي — شفافية كاملة" },
      { en: "One dashboard for an entire fleet's registrations and licences", ar: "لوحة واحدة لجميع استمارات الأسطول ورخصه" },
    ],
    steps: [
      { title: { en: "Review & access", ar: "المراجعة والاطّلاع" }, text: { en: "We review your vehicle and licence status on Absher or Tam and identify what is due or blocked.", ar: "نراجع حالة مركبتك ورخصتك على أبشر أو تم ونحدّد ما هو مستحق أو متوقف." } },
      { title: { en: "Prerequisites", ar: "المتطلبات المسبقة" }, text: { en: "We confirm a valid periodic inspection (الفحص الدوري) and valid motor insurance before any renewal.", ar: "نتحقق من سريان الفحص الدوري ووثيقة التأمين قبل أي تجديد." } },
      { title: { en: "Clear obstacles", ar: "إزالة العوائق" }, text: { en: "We settle or formally object to outstanding violations and lift any hold (إيقاف) on the record.", ar: "نسدّد المخالفات القائمة أو نعترض عليها رسميًا ونرفع أي إيقاف مسجّل." } },
      { title: { en: "Execute the transaction", ar: "تنفيذ المعاملة" }, text: { en: "We complete the registration renewal, plate issuance, or licence service through the correct platform.", ar: "نُنجز تجديد الاستمارة أو إصدار اللوحة أو خدمة الرخصة عبر المنصة الصحيحة." } },
      { title: { en: "Deliver documents", ar: "تسليم الوثائق" }, text: { en: "We hand over the updated registration, plates, or licence and confirm the record is clean.", ar: "نُسلّمك الاستمارة المحدّثة أو اللوحات أو الرخصة ونؤكد خلوّ السجل." } },
      { title: { en: "Track & remind", ar: "المتابعة والتذكير" }, text: { en: "We log every expiry date and renew ahead of time so nothing ever lapses.", ar: "نسجّل كل تاريخ انتهاء ونجدّد مسبقًا حتى لا يفوت أي التزام." } },
    ],
    requirements: [
      { en: "Vehicle registration (الاستمارة) and owner ID, or a fleet list for companies", ar: "استمارة المركبة وهوية المالك، أو قائمة الأسطول للشركات" },
      { en: "Valid periodic inspection certificate (الفحص الدوري) or authorisation to arrange it", ar: "شهادة فحص دوري سارية أو تفويض بترتيبها" },
      { en: "Valid motor insurance policy covering the renewal period", ar: "وثيقة تأمين سارية تُغطي مدة التجديد" },
      { en: "Absher or Tam authorisation so we can act on your behalf", ar: "تفويض عبر أبشر أو تم لتمكيننا من العمل نيابةً عنك" },
    ],
    deliverables: [
      { en: "Renewed vehicle registration, new or replacement plates, or updated driving licence", ar: "استمارة مركبة مجدّدة، أو لوحات جديدة أو بديلة، أو رخصة قيادة محدّثة" },
      { en: "Settled or successfully objected violations and a cleared record", ar: "مخالفات مسدّدة أو معترَض عليها بنجاح وسجل خالٍ" },
      { en: "A tracked schedule of all upcoming registration and licence expiries", ar: "جدول متابَع بجميع تواريخ انتهاء الاستمارات والرخص القادمة" },
    ],
    timeline: { en: "Most online transactions are completed within 1–3 business days once prerequisites are met.", ar: "تُنجَز معظم المعاملات الإلكترونية خلال يوم إلى ثلاثة أيام عمل بعد استيفاء المتطلبات." },
    bestFor: { en: "Owners and fleets who want Muroor obligations handled and tracked, not chased.", ar: "المُلّاك والأساطيل الراغبون في إنجاز التزامات المرور ومتابعتها بدلًا من ملاحقتها." },
    supportType: { en: "A dedicated consultant who manages your vehicle and licence file end to end.", ar: "مستشار مخصّص يُدير ملف مركبتك ورخصتك من البداية إلى النهاية." },
    faqs: [
      { q: { en: "Why won't my vehicle registration renew?", ar: "لماذا لا يتم تجديد استمارة مركبتي؟" }, a: { en: "Renewal on Absher is blocked unless three conditions are met: a valid periodic inspection (الفحص الدوري), a valid motor insurance policy, and no unpaid traffic violations. We check all three, clear whatever is missing, and then complete the renewal in one pass. You don't have to figure out which condition is failing — we diagnose it for you.", ar: "يُحجَب التجديد على أبشر ما لم تُستوفَ ثلاثة شروط: فحص دوري سارٍ، ووثيقة تأمين سارية، وعدم وجود مخالفات غير مسدّدة. نتحقق من الثلاثة جميعًا، ونعالج ما هو ناقص، ثم نُكمل التجديد دفعة واحدة. ولن تحتاج إلى معرفة أيُّ الشروط غير مُستوفى — فنحن نُشخّصه نيابةً عنك." } },
      { q: { en: "Can you object to a traffic violation I believe is wrong?", ar: "هل يمكنكم الاعتراض على مخالفة مرورية أراها غير صحيحة؟" }, a: { en: "Yes. We file a formal objection (الاعتراض) through the Absher traffic service within the regulated window — typically 30 days from when the violation is registered — and the specialised committee at the General Department of Traffic reviews it. Note that an objection cannot be filed on a violation that has already been paid, so contact us before settling a disputed fine. We will tell you honestly whether the objection has a realistic chance.", ar: "نعم. نرفع اعتراضًا رسميًا عبر خدمة المرور في أبشر خلال المهلة النظامية — وغالبًا 30 يومًا من تاريخ تسجيل المخالفة — لتنظر فيه اللجنة المختصة في الإدارة العامة للمرور. وننبّه إلى أنه لا يمكن الاعتراض على مخالفة سُدّدت قيمتها مسبقًا، لذا تواصل معنا قبل سداد أي غرامة محل نزاع. وسنخبرك بصدق إن كان للاعتراض فرصة واقعية." } },
      { q: { en: "How much does registration renewal cost?", ar: "كم تبلغ تكلفة تجديد الاستمارة؟" }, a: { en: "Government renewal fees for a private vehicle are typically around SAR 100 per year (often settled as roughly SAR 300 for a three-year term), with higher fees for large or commercial vehicles, plus separate costs for inspection and insurance. A late-renewal fine may also apply once the grace period (around 60 days) has passed. These government fees are passed through at cost, and your consultant confirms the final figure before we proceed.", ar: "تبلغ رسوم التجديد الحكومية للمركبة الخاصة عادةً نحو 100 ريال عن كل سنة (وغالبًا ما تُسدَّد قرابة 300 ريال عن مدة ثلاث سنوات)، وترتفع للمركبات الكبيرة أو التجارية، إضافةً إلى تكاليف منفصلة للفحص والتأمين. وقد تُطبَّق غرامة تأخير بعد انتهاء مهلة السماح (نحو 60 يومًا). وتُمرَّر هذه الرسوم الحكومية كما هي، ويؤكد لك المستشار المبلغ النهائي قبل المباشرة." } },
      { q: { en: "There is a hold (إيقاف) on my vehicle — can you lift it?", ar: "يوجد إيقاف على مركبتي — هل يمكنكم رفعه؟" }, a: { en: "In most cases, yes. We first identify the source of the hold — an unpaid fine, an expired inspection, a lapsed insurance policy, or an order from a court or another authority — because each is lifted differently. Once the underlying cause is resolved, we clear the hold and confirm the record is clean. If the order comes from outside Muroor, we tell you exactly which authority must release it.", ar: "في معظم الحالات نعم. نحدّد أولًا مصدر الإيقاف — مخالفة غير مسدّدة أو فحص منتهٍ أو تأمين منقضٍ أو أمر من جهة قضائية أو جهة أخرى — لأن لكلٍّ منها طريقة رفع مختلفة. وبمجرد معالجة السبب الأساسي نرفع الإيقاف ونؤكد خلوّ السجل. وإن كان الأمر صادرًا من خارج المرور، نُخبرك بدقة بالجهة التي يجب أن ترفعه." } },
      { q: { en: "Can you manage a whole company fleet, not just one car?", ar: "هل يمكنكم إدارة أسطول شركة كامل لا سيارة واحدة فقط؟" }, a: { en: "Yes — fleet management is a core part of this service. We manage establishment vehicles through Tam (منصة تم), keep every registration, inspection, and insurance date on one tracked schedule, and renew ahead of each deadline so the fleet never has a lapsed or held vehicle. You receive a single consolidated view instead of chasing dozens of separate expiries.", ar: "نعم — إدارة الأساطيل جزء أساسي من هذه الخدمة. نُدير مركبات المنشآت عبر منصة تم، ونُبقي كل تواريخ الاستمارات والفحص والتأمين على جدول واحد متابَع، ونجدّد قبل كل موعد نهائي حتى لا يكون في الأسطول مركبة منتهية أو موقوفة. وتحصل على رؤية موحّدة واحدة بدلًا من ملاحقة عشرات تواريخ الانتهاء المنفصلة." } },
    ],
  },
  {
    slug: "labor-office-services",
    category: "government-services",
    icon: "briefcase",
    updated: "2026-07-06",
    seoTitle: {"en": "Labor Office Services Saudi Arabia 2026 | Qiwa & Nitaqat", "ar": "خدمات مكتب العمل 2026 | نطاقات ورخص العمل في السعودية"},
    seoDescription: {"en": "Labor office services in Saudi Arabia: Qiwa work permits under the new skill tiers, Nitaqat upgrades and 2026 Saudization quota compliance. Get expert help today.", "ar": "خدمات مكتب العمل في السعودية: إصدار وتجديد رخص العمل عبر قوى وفق التصنيف المهاري الجديد، رفع نطاقك في نطاقات، والتوافق مع نسب السعودة 2026. تواصل معنا الآن."},
    title: {"en": "Labor Office (Qiwa) Services", "ar": "خدمات مكتب العمل"},
    excerpt: {"en": "We manage your entire HRSD and Qiwa file for you — issuing and renewing work permits, keeping your Nitaqat band green, authenticating contracts, transferring employee services, and clearing violations — so visas, iqama renewals, and hiring never get blocked.", "ar": "نتولّى نيابةً عنك إدارة ملف منشأتك الكامل لدى وزارة الموارد البشرية ومنصة قوى: إصدار رخص العمل وتجديدها، والحفاظ على نطاقك الأخضر في نطاقات، وتوثيق العقود، ونقل خدمات الموظفين، وتسوية المخالفات — حتى لا تتعطّل التأشيرات أو تجديد الإقامات أو التوظيف."},
    overview: [{"en": "Nearly every labor-office transaction in Saudi Arabia now runs through the Qiwa platform under the Ministry of Human Resources and Social Development (HRSD): work permits, employment-contract authentication, employee transfers, occupation changes, and Saudization (Nitaqat) tracking. One expired permit or an unauthenticated contract can silently push your establishment out of compliance.", "ar": "تمرّ اليوم جميع معاملات مكتب العمل في المملكة تقريباً عبر منصة قوى التابعة لوزارة الموارد البشرية والتنمية الاجتماعية: رخص العمل، وتوثيق عقود العمل، ونقل خدمات الموظفين، وتغيير المهنة، ومتابعة التوطين (نطاقات). ورخصة عمل واحدة منتهية أو عقد غير موثّق قد يُخرج منشأتك من الامتثال دون أن تشعر."}, {"en": "The stakes are concrete: a red Nitaqat band blocks new work visas, incoming employee transfers, and work-permit renewals — which can stall iqama renewals up to the general manager's own — while an unpaid work-permit fee prevents iqama renewal in the Muqeem and Jawazat systems. Under the current Nitaqat cycle, a Saudi employee only counts toward your Saudization percentage if their contract is electronically authenticated on Qiwa.", "ar": "والمخاطر ملموسة: النطاق الأحمر في نطاقات يوقف إصدار تأشيرات العمل الجديدة ونقل الخدمات إلى منشأتك وتجديد رخص العمل — ما قد يعطّل تجديد الإقامات وصولاً إلى إقامة المدير العام نفسه — فيما يمنع عدم سداد رسوم رخصة العمل تجديدَ الإقامة في نظامَي مقيم والجوازات. وبموجب الدورة الحالية من نطاقات، لا يُحتسب الموظف السعودي ضمن نسبة التوطين إلا إذا وُثّق عقده إلكترونياً في قوى."}, {"en": "Omnera One acts as your dedicated government-relations arm. We open and maintain your establishment file, monitor permit expiries, Nitaqat movements, and Mudad wage-protection compliance month by month, and execute every Qiwa transaction on your behalf — keeping your file green before problems reach your visas or your payroll.", "ar": "تعمل Omnera One كذراع علاقات حكومية مخصّصة لمنشأتك. نفتح ملف المنشأة ونديره، ونراقب شهرياً انتهاء رخص العمل وتحركات نطاقات والامتثال لحماية الأجور عبر مدد، وننفّذ كل معاملة في قوى نيابةً عنك — لنُبقي ملفك أخضر قبل أن تصل المشكلات إلى تأشيراتك أو رواتب موظفيك."}, {"en": "The 2025–2026 reforms changed the rules again: work permits now follow a three-tier skill classification (High-Skilled, Skilled, Basic) applied through Qiwa since mid-2025; the new Nitaqat cycle eliminated the Yellow band — an establishment is now simply compliant or not; and Saudization became profession-specific, with tracks such as technical engineering (30%), accounting (rising in phases from 40% toward 70%), dentistry (45% rising to 55% in 2026) and pharmacy roles. We classify every role correctly, plan your quotas per profession, and keep the establishment compliant under the new rules.", "ar": "وقد غيّرت إصلاحات 2025–2026 القواعد مجددًا: فرخص العمل أصبحت تتبع تصنيفًا مهاريًا ثلاثي المستويات (عالي المهارة، وماهر، وأساسي) يُطبَّق عبر قوى منذ منتصف 2025؛ وألغت دورة نطاقات الجديدة النطاق الأصفر — فالمنشأة اليوم إما ملتزمة أو غير ملتزمة؛ وصارت نسب التوطين على مستوى المهنة، بمسارات مثل الهندسة التقنية (30%)، والمحاسبة (ترتفع على مراحل من 40% نحو 70%)، وطب الأسنان (45% وترتفع إلى 55% في 2026)، ومهن الصيدلة. نحن نصنّف كل مهنة تصنيفًا صحيحًا، ونخطط نسبك لكل مهنة، ونُبقي منشأتك ملتزمة وفق القواعد الجديدة."}],
    audience: [{"en": "Companies employing expat staff who need work permits issued within 90 days of each employee's arrival and renewed on time every year, without HR chasing deadlines across Qiwa, Muqeem, and Jawazat.", "ar": "الشركات التي توظّف عمالة وافدة وتحتاج إلى إصدار رخص العمل خلال 90 يوماً من وصول كل موظف وتجديدها سنوياً في موعدها، دون أن تلاحق إدارة الموارد البشرية المواعيد بين قوى ومقيم والجوازات."}, {"en": "Foreign investors and MISA-licensed entities that must keep their Nitaqat band green to protect new visa quotas, government tenders, and the general manager's own iqama renewal.", "ar": "المستثمرون الأجانب والكيانات المرخّصة من وزارة الاستثمار الذين يجب أن يحافظوا على نطاقهم الأخضر في نطاقات لحماية حصص التأشيرات الجديدة والمنافسات الحكومية وتجديد إقامة المدير العام نفسه."}, {"en": "Establishments with pending labor violations, expired permits, or a slipping Saudization percentage that need a structured correction plan executed quickly on their behalf.", "ar": "المنشآت التي لديها مخالفات عمالية قائمة أو رخص منتهية أو نسبة توطين آخذة في التراجع، وتحتاج إلى خطة تصحيح منظّمة تُنفَّذ بسرعة نيابةً عنها."}],
    benefits: [{"en": "Work permits issued and renewed on time — we track every expiry in Qiwa and renew within the early-renewal window (remaining validity under 180 days), choosing the 3, 6, 9, or 12-month duration that fits your cash flow.", "ar": "إصدار رخص العمل وتجديدها في موعدها — نتتبّع كل تاريخ انتهاء في قوى ونجدّد ضمن نافذة التجديد المبكر (صلاحية متبقية أقل من 180 يوماً)، مع اختيار مدة 3 أو 6 أو 9 أو 12 شهراً بما يناسب تدفقك النقدي."}, {"en": "Continuous Nitaqat monitoring — we watch your band and Saudization percentage under the current cycle, alert you before any downgrade, and build a compliant hiring plan to keep you green.", "ar": "مراقبة مستمرة لنطاقات — نتابع نطاقك ونسبة التوطين وفق الدورة الحالية، وننبّهك قبل أي تراجع في التصنيف، ونضع خطة توظيف متوافقة تُبقيك في النطاق الأخضر."}, {"en": "Full contract authentication on Qiwa — essential now that unauthenticated Saudi contracts no longer count toward your Saudization percentage, and disputes are far harder to defend without an authenticated contract.", "ar": "توثيق كامل لعقود العمل في قوى — وهو أمر جوهري الآن بعد أن أصبحت عقود السعوديين غير الموثّقة لا تُحتسب ضمن نسبة التوطين، ولأن الدفاع في النزاعات العمالية يصعب كثيراً دون عقد موثّق."}, {"en": "Employee transfers and occupation changes handled end to end — we prepare the service-transfer request, verify the receiving establishment's eligibility, and align the new occupation with the profession recorded on the iqama.", "ar": "إنجاز نقل الخدمات وتغيير المهنة من البداية إلى النهاية — نُعدّ طلب نقل الخدمات، ونتحقق من أهلية المنشأة المستقبِلة، ونطابق المهنة الجديدة مع المهنة المدوّنة في الإقامة."}, {"en": "Mudad wage-protection compliance — we make sure monthly wage files are uploaded within the deadline and match GOSI records, before a missed file escalates to an HRSD inspection.", "ar": "الامتثال لحماية الأجور عبر مدد — نتأكد من رفع ملفات الأجور الشهرية ضمن المهلة النظامية ومطابقتها لسجلات التأمينات الاجتماعية، قبل أن يتصاعد أي ملف متأخر إلى تفتيش من وزارة الموارد البشرية."}, {"en": "Violations resolved, objections filed — we review labor violations and fines, file objections where legal grounds exist, and clear blocks so visas and iqama renewals flow again.", "ar": "تسوية المخالفات وتقديم الاعتراضات — نراجع المخالفات والغرامات العمالية، ونقدّم الاعتراض متى وُجدت مسوّغات نظامية، ونرفع الإيقافات لتعود التأشيرات وتجديد الإقامات إلى مسارها."}],
    steps: [{ title: {"en": "Establishment file audit", "ar": "تدقيق ملف المنشأة"}, text: {"en": "We review your establishment file across Qiwa, HRSD, GOSI, and Mudad: permit expiries, Nitaqat band and Saudization percentage, unauthenticated contracts, unpaid fees, and open violations — and give you a single compliance snapshot.", "ar": "نراجع ملف منشأتك عبر قوى ووزارة الموارد البشرية والتأمينات الاجتماعية ومدد: تواريخ انتهاء الرخص، وتصنيفك في نطاقات ونسبة التوطين، والعقود غير الموثّقة، والرسوم غير المسددة، والمخالفات القائمة — ونقدّم لك صورة امتثال موحّدة."} }, { title: {"en": "Correction plan and priorities", "ar": "خطة التصحيح والأولويات"}, text: {"en": "We rank what blocks you first — an expired permit stopping an iqama renewal, a band at risk of turning red — and agree a sequenced plan with clear owners and dates before touching any transaction.", "ar": "نرتّب ما يعطّلك أولاً — رخصة منتهية توقف تجديد إقامة، أو نطاق مهدّد بالتحول إلى الأحمر — ونتفق على خطة متسلسلة بمسؤوليات وتواريخ واضحة قبل تنفيذ أي معاملة."} }, { title: {"en": "Work-permit issuance and renewal", "ar": "إصدار رخص العمل وتجديدها"}, text: {"en": "We submit issuance and renewal requests in Qiwa, arrange payment of government fees at cost through the official SADAD bill, and confirm the permit reflects in the Muqeem and Jawazat systems so iqama renewal proceeds without obstacles.", "ar": "نقدّم طلبات الإصدار والتجديد في قوى، ونرتّب سداد الرسوم الحكومية بقيمتها الفعلية عبر فاتورة سداد الرسمية، ونتأكد من انعكاس الرخصة في نظامَي مقيم والجوازات ليمضي تجديد الإقامة دون عائق."} }, { title: {"en": "Contracts, transfers, and occupation changes", "ar": "العقود ونقل الخدمات وتغيير المهنة"}, text: {"en": "We authenticate employment contracts on Qiwa for both Saudi and expat staff, execute service transfers between employers through the employee-consent flow, and process occupation changes so job titles match actual roles.", "ar": "نوثّق عقود العمل في قوى للموظفين السعوديين والوافدين، وننفّذ نقل الخدمات بين أصحاب العمل وفق مسار موافقة الموظف، ونُنجز تغيير المهنة لتتطابق المسميات مع الأدوار الفعلية."} }, { title: {"en": "Nitaqat and Mudad management", "ar": "إدارة نطاقات ومدد"}, text: {"en": "We maintain your Saudization position under the current Nitaqat cycle, ensure contracts are authenticated so every Saudi employee counts, and keep monthly wage files on Mudad uploaded, matched to GOSI, and free of escalations.", "ar": "ندير موقفك في التوطين وفق الدورة الحالية من نطاقات، ونضمن توثيق العقود ليُحتسب كل موظف سعودي، ونحافظ على رفع ملفات الأجور الشهرية في مدد ومطابقتها للتأمينات الاجتماعية دون أي تصعيد."} }, { title: {"en": "Ongoing monitoring and reporting", "ar": "المراقبة والتقارير المستمرة"}, text: {"en": "Your dedicated consultant monitors the file continuously, renews before deadlines, flags regulatory changes — such as new Saudization quotas by sector — and sends you a periodic compliance report.", "ar": "يراقب مستشارك المخصص الملف باستمرار، ويجدّد قبل المواعيد النهائية، وينبّهك إلى المستجدات التنظيمية — مثل نسب التوطين الجديدة حسب القطاع — ويرسل إليك تقرير امتثال دورياً."} }],
    requirements: [{"en": "A valid commercial registration and an establishment file with HRSD/Qiwa (we open the file for you if the establishment is new).", "ar": "سجل تجاري ساري المفعول وملف منشأة لدى وزارة الموارد البشرية/قوى (نفتح الملف نيابةً عنك إذا كانت المنشأة جديدة)."}, {"en": "Authorized-manager access on Qiwa, or a delegation/power of attorney enabling us to act on the establishment's behalf.", "ar": "صلاحية مدير معتمد في منصة قوى، أو تفويض/وكالة تخوّلنا التصرف نيابةً عن المنشأة."}, {"en": "Employee data: iqama or national ID numbers, professions, wages, and current contract status — consistent with GOSI registration.", "ar": "بيانات الموظفين: أرقام الإقامات أو الهويات الوطنية، والمهن، والأجور، وحالة العقود الحالية — بما يتسق مع التسجيل في التأمينات الاجتماعية."}, {"en": "Settlement of outstanding government fees and fines at cost (amounts confirmed by your consultant before any payment).", "ar": "سداد الرسوم والغرامات الحكومية المستحقة بقيمتها الفعلية (يؤكد مستشارك المبالغ قبل أي سداد)."}],
    deliverables: [{"en": "Issued and renewed work permits reflected in Qiwa, Muqeem, and Jawazat, with authenticated employment contracts for your whole workforce.", "ar": "رخص عمل صادرة ومجدّدة ومنعكسة في قوى ومقيم والجوازات، مع عقود عمل موثّقة لكامل القوى العاملة لديك."}, {"en": "A green, monitored Nitaqat position with a documented Saudization plan and completed transfers and occupation changes.", "ar": "موقف أخضر ومُراقَب في نطاقات مع خطة توطين موثّقة، وإنجاز معاملات نقل الخدمات وتغيير المهنة."}, {"en": "A clean establishment file: violations resolved or under objection, Mudad wage files current, plus a periodic compliance report.", "ar": "ملف منشأة نظيف: مخالفات مسوّاة أو قيد الاعتراض، وملفات أجور محدّثة في مدد، إضافةً إلى تقرير امتثال دوري."}],
    timeline: {"en": "A single work-permit issuance or renewal typically reflects within hours of fee payment (systems usually update within 24 hours); contract authentication and occupation changes typically take a few business days; a full file cleanup with Nitaqat correction typically runs 2–6 weeks depending on the number of employees and pending violations. Ongoing monitoring is continuous under a monthly or annual arrangement.", "ar": "ينعكس إصدار رخصة العمل أو تجديدها عادةً خلال ساعات من سداد الرسوم (وتُحدَّث الأنظمة غالباً خلال 24 ساعة)؛ ويستغرق توثيق العقود وتغيير المهنة عادةً بضعة أيام عمل؛ فيما تستغرق التسوية الكاملة للملف مع تصحيح نطاقات عادةً من أسبوعين إلى ستة أسابيع بحسب عدد الموظفين والمخالفات القائمة. أما المراقبة المستمرة فتجري دون انقطاع ضمن اشتراك شهري أو سنوي."},
    bestFor: {"en": "Best for establishments with expat employees that cannot afford a blocked visa, a stalled iqama renewal, or a red Nitaqat band — and want one team to run the entire HRSD/Qiwa file for them.", "ar": "الخيار الأمثل للمنشآت التي توظّف عمالة وافدة ولا تحتمل تعطُّل تأشيرة أو توقُّف تجديد إقامة أو نطاقاً أحمر في نطاقات — وتريد فريقاً واحداً يدير عنها ملف الموارد البشرية وقوى بالكامل."},
    supportType: {"en": "Dedicated PRO consultant with full execution on Qiwa, HRSD, and Mudad, proactive expiry and Nitaqat monitoring, and direct WhatsApp/phone access — government fees paid at cost and confirmed with you before payment.", "ar": "مستشار تعقيب مخصص يتولى التنفيذ الكامل في قوى ووزارة الموارد البشرية ومدد، مع مراقبة استباقية لتواريخ الانتهاء ونطاقات، وتواصل مباشر عبر واتساب والهاتف — وتُسدَّد الرسوم الحكومية بقيمتها الفعلية بعد تأكيدها معك قبل السداد."},
    faqs: [{ q: {"en": "What happens if an employee's work permit expires?", "ar": "ماذا يحدث إذا انتهت رخصة عمل أحد الموظفين؟"}, a: {"en": "An expired work permit — or one with unpaid fees — blocks the employee's iqama renewal in the Muqeem and Jawazat systems and exposes the establishment to fines. HRSD has also moved to cancel long-expired permits under recent Qiwa data-correction campaigns. We track every expiry and renew within the early-renewal window (remaining validity under 180 days) so this never happens.", "ar": "انتهاء رخصة العمل — أو عدم سداد رسومها — يوقف تجديد إقامة الموظف في نظامَي مقيم والجوازات ويعرّض المنشأة لغرامات. كما اتجهت وزارة الموارد البشرية إلى إلغاء الرخص المنتهية منذ فترة طويلة ضمن حملات تصحيح البيانات الأخيرة في قوى. نحن نتتبّع كل تاريخ انتهاء ونجدّد ضمن نافذة التجديد المبكر (صلاحية متبقية أقل من 180 يوماً) حتى لا يقع ذلك أبداً."} }, { q: {"en": "Our Nitaqat band turned red — can you fix it?", "ar": "تحوّل نطاقنا في نطاقات إلى الأحمر — هل يمكنكم معالجته؟"}, a: {"en": "Yes. We diagnose why the percentage fell — departures of Saudi staff, unauthenticated contracts that no longer count, or workforce growth without matching Saudization — then execute a correction plan: authenticating contracts on Qiwa, supporting compliant Saudi hiring, and adjusting the workforce mix. Once the percentage recovers, blocked services such as new visas and transfers reopen.", "ar": "نعم. نشخّص سبب انخفاض النسبة — مغادرة موظفين سعوديين، أو عقود غير موثّقة لم تعد تُحتسب، أو نمو القوى العاملة دون توطين موازٍ — ثم ننفّذ خطة تصحيح: توثيق العقود في قوى، ودعم توظيف سعوديين وفق الأنظمة، وضبط تركيبة القوى العاملة. وبمجرد تعافي النسبة، تُفتح الخدمات الموقوفة مثل التأشيرات الجديدة ونقل الخدمات."} }, { q: {"en": "Do Saudi employees' contracts really need to be authenticated on Qiwa?", "ar": "هل يجب فعلاً توثيق عقود الموظفين السعوديين في قوى؟"}, a: {"en": "Yes — under the current Nitaqat cycle, a Saudi employee only counts toward your Saudization percentage if their contract is electronically documented and authenticated on Qiwa. An unauthenticated contract can silently lower your band even with no change in headcount. We authenticate the entire workforce's contracts as a standard part of the service.", "ar": "نعم — بموجب الدورة الحالية من نطاقات، لا يُحتسب الموظف السعودي ضمن نسبة التوطين إلا إذا وُثّق عقده إلكترونياً في منصة قوى. والعقد غير الموثّق قد يخفّض تصنيفك في نطاقات دون أي تغيير في عدد الموظفين. نحن نوثّق عقود القوى العاملة كاملةً كجزء أساسي من الخدمة."} }, { q: {"en": "How much do work permits and related fees cost?", "ar": "كم تبلغ رسوم رخص العمل والرسوم المرتبطة بها؟"}, a: {"en": "Government fees vary by permit duration (3, 6, 9, or 12 months), workforce composition, and any applicable exemptions, so we never quote a single fixed figure. All government fees are paid at cost through official SADAD bills, and your consultant confirms the exact amounts from Qiwa before any payment is made.", "ar": "تختلف الرسوم الحكومية بحسب مدة الرخصة (3 أو 6 أو 9 أو 12 شهراً) وتركيبة القوى العاملة وأي إعفاءات منطبقة، لذلك لا نقدّم رقماً ثابتاً واحداً. تُسدَّد جميع الرسوم الحكومية بقيمتها الفعلية عبر فواتير سداد الرسمية، ويؤكد مستشارك المبالغ الدقيقة من قوى قبل أي سداد."} }, { q: {"en": "Can you transfer an employee to us from another company?", "ar": "هل يمكنكم نقل موظف إلينا من شركة أخرى؟"}, a: {"en": "Yes. We handle the full service-transfer (نقل خدمات) flow on Qiwa: verifying your establishment's eligibility to receive (including your Nitaqat position), submitting the transfer request, following the employee-consent and current-employer notice steps, and confirming the employee appears on your file with an authenticated contract and, where needed, a corrected occupation.", "ar": "نعم. نتولّى مسار نقل الخدمات كاملاً في قوى: التحقق من أهلية منشأتك للاستقبال (بما في ذلك موقفك في نطاقات)، وتقديم طلب النقل، ومتابعة خطوات موافقة الموظف وإشعار صاحب العمل الحالي، والتأكد من ظهور الموظف في ملفك بعقد موثّق، ومع تصحيح المهنة عند الحاجة."} }],
  },
  {
    slug: "jawazat-services",
    category: "government-services",
    icon: "plane",
    updated: "2026-07-06",
    seoTitle: {"en": "Jawazat Services Saudi Arabia 2026 | Iqama Renewal & Visas", "ar": "خدمات الجوازات 2026 | تجديد إقامة وخروج وعودة بالسعودية"},
    seoDescription: {"en": "Jawazat services: iqama renewal, exit re-entry visas — now extendable from abroad via Absher — sponsorship transfer and dependent fees. Get fast expert help.", "ar": "خدمات الجوازات للشركات: تجديد الإقامة، تأشيرات الخروج والعودة (تُمدَّد من خارج المملكة عبر أبشر)، نقل الكفالة، ورسوم المرافقين. أنجزها معنا الآن."},
    title: {"en": "Jawazat (Passports) Services", "ar": "خدمات الجوازات"},
    excerpt: {"en": "We manage every General Directorate of Passports (Jawazat) transaction for your workforce through Muqeem and Absher — iqama issuance and renewal, exit/re-entry and final exit visas, sponsorship transfers, dependent and newborn registration, and passport data updates — so no employee's residency ever lapses and your operations never stop for an expired permit.", "ar": "نتولّى نيابةً عنك جميع معاملات المديرية العامة للجوازات عبر منصتَي مقيم وأبشر — إصدار الإقامات وتجديدها، وتأشيرات الخروج والعودة والخروج النهائي، ونقل الخدمات، وتسجيل المرافقين والمواليد، وتحديث بيانات الجوازات — لكي لا تنقضي إقامة أي موظف لديك ولا تتوقف أعمالك بسبب وثيقة منتهية الصلاحية."},
    overview: [{"en": "Jawazat transactions are the heartbeat of every expatriate employee's legal status in Saudi Arabia. An iqama that expires by even one day exposes the company to fines, blocks the employee from banking, healthcare and travel, and can harm your establishment's compliance standing. Omnera One runs the entire Jawazat file for your company through the official Muqeem and Absher platforms, on a monitored calendar, so renewals happen before deadlines — never after.", "ar": "تُعدّ معاملات الجوازات جوهر الوضع النظامي لكل موظف وافد في المملكة العربية السعودية. فانتهاء الإقامة ولو بيوم واحد يعرّض المنشأة للغرامات، ويحرم الموظف من الخدمات المصرفية والصحية والسفر، وقد يؤثر سلبًا في وضع منشأتك من حيث الامتثال. تدير Omnera One ملف الجوازات الكامل لمنشأتك عبر المنصتين الرسميتين مقيم وأبشر، وفق تقويم متابعة دقيق، لتُنجَز التجديدات قبل مواعيدها النهائية — لا بعدها."}, {"en": "The catch with Jawazat services is that nothing renews in isolation. An iqama will not renew until health insurance compliant with the Council of Health Insurance (CCHI) requirements is active, the work-permit fee (the financial counterpart, المقابل المالي) issued through Qiwa is settled, dependent levies are paid, and there are no outstanding traffic fines — which we verify through Absher. We sequence and clear every one of these prerequisites before submission, which is why our renewals go through on the first attempt.", "ar": "التحدي في خدمات الجوازات أن أي معاملة لا تُنجز بمعزل عن غيرها؛ فالإقامة لا تُجدَّد ما لم يكن التأمين الصحي المتوافق مع اشتراطات مجلس الضمان الصحي ساريًا، والمقابل المالي لرخصة العمل الصادرة عبر منصة قوى مسدّدًا، ورسوم المرافقين مدفوعة، وألا توجد مخالفات مرورية غير مسدّدة — وهو ما نتحقق منه عبر أبشر. نحن نرتّب هذه المتطلبات ونستوفيها جميعًا قبل تقديم الطلب، ولهذا تُقبل معاملاتنا من المحاولة الأولى."}, {"en": "Beyond renewals, we handle the full lifecycle: single and multiple exit/re-entry visas timed to your employees' travel, final exit visas with proper clearance of dues, sponsorship (services) transfer coordinated between Qiwa and Jawazat, family iqamas and newborn registration through Absher, passport-information updates after a passport renewal, and replacement of lost iqamas. One provider, one accountable team, every Jawazat transaction.", "ar": "وإلى جانب التجديد، نتولّى دورة المعاملات كاملة: تأشيرات الخروج والعودة المفردة والمتعددة بما يتوافق مع مواعيد سفر موظفيك، وتأشيرات الخروج النهائي بعد إبراء الذمة من المستحقات، ونقل الخدمات (الكفالة) بالتنسيق بين منصة قوى والجوازات، وإقامات أفراد الأسرة وتسجيل المواليد عبر أبشر، وتحديث بيانات الجواز بعد تجديده، واستخراج بدل فاقد للإقامة. جهة واحدة، وفريق واحد مسؤول، لجميع معاملات الجوازات."}],
    audience: [{"en": "Companies with expatriate workforces that need iqamas, work permits and exit/re-entry visas kept current across dozens or hundreds of employees without an in-house government-relations (PRO) team.", "ar": "الشركات التي توظّف عمالة وافدة وتحتاج إلى إبقاء الإقامات ورخص العمل وتأشيرات الخروج والعودة سارية لعشرات أو مئات الموظفين دون فريق علاقات حكومية داخلي."}, {"en": "New foreign investors licensed through the Ministry of Investment (MISA) who are bringing in their first employees and dependents and want the Muqeem and Absher setup done correctly from day one.", "ar": "المستثمرون الأجانب الجدد المرخّصون عبر وزارة الاستثمار الذين يستقدمون موظفيهم الأوائل ومرافقيهم ويرغبون في تهيئة حساباتهم على مقيم وأبشر بصورة صحيحة منذ اليوم الأول."}, {"en": "HR and finance managers who are tired of rejected transactions — renewals blocked by an expired insurance policy, an unpaid dependent levy, or a traffic fine nobody knew about.", "ar": "مديرو الموارد البشرية والمالية الذين أرهقتهم المعاملات المرفوضة — تجديدات معلّقة بسبب وثيقة تأمين منتهية، أو مقابل مالي للمرافقين غير مسدّد، أو مخالفة مرورية لم يعلم بها أحد."}],
    benefits: [{"en": "Zero-lapse residency: we track every employee's iqama expiry on a renewal calendar and initiate renewal well before the deadline, protecting you from late-renewal fines and service blocks.", "ar": "إقامات لا تنقطع: نراقب تاريخ انتهاء إقامة كل موظف ضمن تقويم تجديد، ونباشر التجديد قبل الموعد النهائي بمدة كافية، بما يقيك غرامات التأخير وتعليق الخدمات."}, {"en": "Prerequisites cleared in advance: CCHI-compliant health insurance, the Qiwa work-permit fee (المقابل المالي), dependent levies and traffic fines are verified and settled before we submit, so transactions are not bounced back.", "ar": "استيفاء المتطلبات مسبقًا: نتحقق من سريان التأمين الصحي المتوافق مع اشتراطات مجلس الضمان الصحي، وسداد المقابل المالي لرخص العمل عبر قوى، ورسوم المرافقين، والمخالفات المرورية قبل التقديم، فلا تُعاد المعاملة إلينا مرفوضة."}, {"en": "Travel without disruption: single and multiple exit/re-entry visas issued through Muqeem or Absher and timed to iqama validity, so no employee is ever stranded at the airport or stuck outside the Kingdom.", "ar": "سفر بلا تعطيل: نصدر تأشيرات الخروج والعودة المفردة والمتعددة عبر مقيم أو أبشر بما يتوافق مع مدة سريان الإقامة، فلا يتعطل موظف في المطار ولا يعلق خارج المملكة."}, {"en": "Clean exits: final exit visas processed only after dues, fines and dependent obligations are cleared — including newborn iqamas, without which a parent's final exit cannot be completed.", "ar": "مغادرة نظامية سليمة: نُصدر تأشيرات الخروج النهائي بعد إبراء الذمة من الرسوم والغرامات والتزامات المرافقين — بما في ذلك إصدار إقامات المواليد التي لا يكتمل الخروج النهائي من دونها."}, {"en": "Smooth sponsorship transfers: we coordinate the services-transfer request between Qiwa and Jawazat and follow it through to the new iqama, for both incoming hires and departing employees.", "ar": "نقل خدمات سلس: ننسّق طلب نقل الخدمات بين منصة قوى والجوازات ونتابعه حتى صدور الإقامة الجديدة، سواء للموظفين المنضمّين إليك أو المنتقلين منك."}, {"en": "A complete family file: dependent iqamas, newborn registration on Absher, passport-data updates after renewal, and lost-iqama replacements — handled under the same engagement with a single point of contact.", "ar": "ملف عائلي متكامل: إقامات المرافقين، وتسجيل المواليد عبر أبشر، وتحديث بيانات الجواز بعد تجديده، واستخراج بدل فاقد للإقامة — كلها ضمن التعاقد نفسه ومن خلال جهة تواصل واحدة."}],
    steps: [{ title: {"en": "Portfolio audit and access setup", "ar": "مراجعة الملف وتهيئة الصلاحيات"}, text: {"en": "We review your establishment's Muqeem and Absher Business standing and build a register of every employee and dependent: iqama expiry dates, insurance status, work-permit validity on Qiwa, and any outstanding fines or levies.", "ar": "نراجع وضع منشأتك على منصتَي مقيم وأبشر أعمال، ونُعدّ سجلًا شاملًا لكل موظف ومرافق: تواريخ انتهاء الإقامات، وحالة التأمين الصحي، وسريان رخص العمل في قوى، وأي غرامات أو رسوم غير مسدّدة."} }, { title: {"en": "Prerequisite clearance", "ar": "استيفاء المتطلبات المسبقة"}, text: {"en": "Before any Jawazat submission, we confirm CCHI-compliant health insurance is active, the Qiwa work-permit fee (المقابل المالي) and dependent levies are paid through the official SADAD payment channels, and traffic fines are settled — verified through Absher.", "ar": "قبل تقديم أي معاملة إلى الجوازات، نتأكد من سريان التأمين الصحي المتوافق مع اشتراطات مجلس الضمان الصحي، وسداد المقابل المالي لرخصة العمل في قوى ورسوم المرافقين عبر قنوات السداد الرسمية (سداد)، وتسوية المخالفات المرورية — ونتحقق من ذلك عبر أبشر."} }, { title: {"en": "Submission through Muqeem/Absher", "ar": "تقديم المعاملة عبر مقيم وأبشر"}, text: {"en": "We execute the transaction on the official platform: iqama issuance or renewal, exit/re-entry or final exit visa, services transfer, dependent or newborn addition, passport-data update, or lost-iqama replacement — with government fees paid at cost on your behalf.", "ar": "ننفّذ المعاملة عبر المنصة الرسمية: إصدار الإقامة أو تجديدها، تأشيرة خروج وعودة أو خروج نهائي، نقل خدمات، إضافة مرافق أو مولود، تحديث بيانات الجواز، أو بدل فاقد للإقامة — مع سداد الرسوم الحكومية بالتكلفة الفعلية نيابةً عنك."} }, { title: {"en": "Follow-up until issuance", "ar": "المتابعة حتى الإصدار"}, text: {"en": "We track the request until the iqama, visa or transfer is issued, resolve any hold — a mismatched record, a pending approval, an insurance-verification flag — and escalate with the authority where needed.", "ar": "نتابع الطلب حتى صدور الإقامة أو التأشيرة أو اكتمال النقل، ونعالج أي تعليق — كاختلاف في البيانات، أو موافقة معلّقة، أو ملاحظة في التحقق من التأمين — ونصعّد لدى الجهة المختصة عند الحاجة."} }, { title: {"en": "Delivery and record update", "ar": "التسليم وتحديث السجلات"}, text: {"en": "You receive the issued documents and confirmations, and we update your employee register so HR and finance always see the current status of every residency file.", "ar": "نسلّمك المستندات الصادرة وإشعارات الإتمام، ونحدّث سجل الموظفين لديك بحيث تطّلع إدارتا الموارد البشرية والمالية دائمًا على الحالة الراهنة لكل ملف إقامة."} }, { title: {"en": "Continuous renewal monitoring", "ar": "مراقبة التجديد المستمرة"}, text: {"en": "Under ongoing engagements, we alert you ahead of every upcoming expiry — iqama, insurance, work permit, exit/re-entry validity — and initiate renewals automatically so nothing ever lapses.", "ar": "في التعاقدات المستمرة، ننبّهك قبل كل موعد انتهاء قادم — للإقامة أو التأمين أو رخصة العمل أو صلاحية تأشيرة الخروج والعودة — ونباشر التجديد تلقائيًا لكي لا ينقضي أي مستند."} }],
    requirements: [{"en": "Active establishment accounts on Muqeem (or Absher Business) with authorization for Omnera One to process transactions, plus a valid commercial registration.", "ar": "حسابات منشأة فعّالة على مقيم (أو أبشر أعمال) مع تفويض Omnera One بمعالجة المعاملات، إضافة إلى سجل تجاري ساري المفعول."}, {"en": "Valid CCHI-compliant health insurance for each employee and dependent covered by the transaction — verified digitally by the Council of Health Insurance before iqama processing.", "ar": "تأمين صحي ساري متوافق مع اشتراطات مجلس الضمان الصحي لكل موظف ومرافق مشمول بالمعاملة — ويُتحقق منه رقميًا قبل معالجة الإقامة."}, {"en": "Settled government dues: Qiwa work-permit fees (المقابل المالي), dependent levies where applicable, and no outstanding traffic fines — we audit and flag these for payment before submission.", "ar": "سداد المستحقات الحكومية: المقابل المالي لرخص العمل في قوى، ورسوم المرافقين إن وجدت، وخلوّ السجل من مخالفات مرورية غير مسدّدة — ونتولى مراجعتها وحصرها للسداد قبل التقديم."}, {"en": "Employee documents as the transaction requires: passports with sufficient validity, and for family files, birth certificates, marriage documents or vaccination records for newborn registration.", "ar": "مستندات الموظفين بحسب المعاملة: جوازات سفر بصلاحية كافية، وفي الملفات العائلية شهادات الميلاد أو وثائق الزواج أو سجلات التطعيم لتسجيل المواليد."}],
    deliverables: [{"en": "Issued or renewed iqamas, exit/re-entry and final exit visas, completed sponsorship transfers, and dependent/newborn registrations — with official confirmations from Muqeem and Absher.", "ar": "إقامات صادرة أو مجدَّدة، وتأشيرات خروج وعودة وخروج نهائي، وعمليات نقل خدمات مكتملة، وتسجيلات مرافقين ومواليد — مع الإشعارات الرسمية من مقيم وأبشر."}, {"en": "An up-to-date workforce residency register showing iqama, insurance, work-permit and visa status for every employee and dependent.", "ar": "سجل محدّث لإقامات القوى العاملة يوضح حالة الإقامة والتأمين ورخصة العمل والتأشيرات لكل موظف ومرافق."}, {"en": "A renewal calendar with proactive expiry alerts, plus an itemized statement of government fees paid at cost on your behalf.", "ar": "تقويم تجديد مع تنبيهات استباقية قبل مواعيد الانتهاء، إضافة إلى كشف مفصّل بالرسوم الحكومية المسدَّدة بالتكلفة الفعلية نيابةً عنك."}],
    timeline: {"en": "Once prerequisites are cleared, most Muqeem and Absher transactions complete quickly: iqama renewals and exit/re-entry visas are typically issued within one to three business days — often the same day; services transfers, family additions and newborn registrations typically take longer depending on approvals and document readiness — approximately one to three weeks. Your consultant confirms a realistic timeline for each case, and government fees are always paid at cost.", "ar": "بعد استيفاء المتطلبات، تُنجز معظم معاملات مقيم وأبشر بسرعة: فتُنجَز تجديدات الإقامة وتأشيرات الخروج والعودة عادةً خلال يوم إلى ثلاثة أيام عمل — وكثيرًا ما تصدر في اليوم نفسه؛ أما نقل الخدمات وإضافة أفراد الأسرة وتسجيل المواليد فيستغرق عادةً مدة أطول بحسب الموافقات وجاهزية المستندات — أسبوعًا إلى ثلاثة أسابيع تقريبًا. ويؤكد مستشارك المدة الواقعية لكل حالة، وتُسدَّد الرسوم الحكومية دائمًا بالتكلفة الفعلية."},
    bestFor: {"en": "Companies that cannot afford a single employee's residency to lapse — and want every Jawazat transaction, from iqama renewal to final exit, handled end-to-end by one accountable team.", "ar": "المنشآت التي لا تحتمل انقضاء إقامة موظف واحد لديها — وتريد إنجاز جميع معاملات الجوازات، من تجديد الإقامة إلى الخروج النهائي، بصورة متكاملة عبر فريق واحد مسؤول."},
    supportType: {"en": "Full representation: we execute every transaction on Muqeem and Absher on your behalf, clear prerequisites across Qiwa, the Council of Health Insurance (CCHI) and SADAD payments, follow up with Jawazat until issuance, and keep monitoring renewals under ongoing engagements.", "ar": "تمثيل كامل: ننفّذ كل معاملة عبر مقيم وأبشر نيابةً عنك، ونستوفي المتطلبات عبر قوى ومجلس الضمان الصحي وقنوات السداد الرسمية (سداد)، ونتابع لدى الجوازات حتى الإصدار، ونواصل مراقبة التجديدات في التعاقدات المستمرة."},
    faqs: [{ q: {"en": "Why was our employee's iqama renewal rejected even though we paid the renewal fee?", "ar": "لماذا رُفض تجديد إقامة موظفنا رغم سدادنا رسوم التجديد؟"}, a: {"en": "Iqama renewal follows a strict sequence: CCHI-compliant health insurance must be active first, then the Qiwa work-permit fee (المقابل المالي) must be settled, then the residency fee — and any unpaid traffic fine blocks the transaction entirely. The most common failure is an insurance policy that expired days before submission or a fine nobody noticed. We verify the full chain before submitting, which is why our renewals pass on the first attempt.", "ar": "يخضع تجديد الإقامة لتسلسل صارم: يجب أولًا سريان تأمين صحي متوافق مع اشتراطات مجلس الضمان الصحي، ثم سداد المقابل المالي لرخصة العمل عبر قوى، ثم رسوم الإقامة — وأي مخالفة مرورية غير مسدّدة توقف المعاملة بالكامل. وأكثر أسباب الرفض شيوعًا وثيقة تأمين انتهت قبل التقديم بأيام أو مخالفة لم ينتبه إليها أحد. نحن نتحقق من السلسلة كاملة قبل التقديم، ولهذا تُقبل تجديداتنا من المحاولة الأولى."} }, { q: {"en": "What is the difference between a single and a multiple exit/re-entry visa, and which should we issue?", "ar": "ما الفرق بين تأشيرة الخروج والعودة المفردة والمتعددة، وأيهما نصدر؟"}, a: {"en": "A single exit/re-entry visa covers one trip; a multiple visa allows repeated travel within its validity and suits employees who travel often. Both are issued through Muqeem or Absher, their validity cannot exceed the iqama's remaining validity, and the employee must return before both the visa and the iqama expire. Fees are typically a base amount plus a charge per additional month, paid at cost — your consultant confirms the exact figures. We recommend the right type per employee based on their travel pattern.", "ar": "تغطي التأشيرة المفردة سفرة واحدة، بينما تتيح التأشيرة المتعددة السفر المتكرر خلال مدة سريانها وتناسب الموظفين كثيري التنقل. تصدر كلتاهما عبر مقيم أو أبشر، ولا يجوز أن تتجاوز مدتها المدة المتبقية من الإقامة، ويجب أن يعود الموظف قبل انتهاء صلاحية التأشيرة والإقامة معًا. والرسوم عادةً مبلغ أساسي يضاف إليه مقابل عن كل شهر إضافي، وتُسدَّد بالتكلفة الفعلية — ويؤكد مستشارك الأرقام الدقيقة. ونحن نوصي بالنوع المناسب لكل موظف بحسب نمط سفره."} }, { q: {"en": "What must be cleared before a final exit visa can be issued?", "ar": "ما الذي يجب استيفاؤه قبل إصدار تأشيرة الخروج النهائي؟"}, a: {"en": "All outstanding dues must be settled: traffic fines, dependent levies, and any government obligations tied to the employee's file. If the employee had a newborn in the Kingdom, the newborn's residency must be regularized first — a final exit cannot be completed without it. Once issued, the visa gives a limited window to leave (typically up to 60 days, within iqama validity); if travel does not happen, it must be cancelled to avoid penalties. We run the full clearance, process the exit on Muqeem or Absher, and confirm departure so your records close cleanly.", "ar": "يجب تسوية جميع المستحقات: المخالفات المرورية، ورسوم المرافقين، وأي التزامات حكومية مرتبطة بملف الموظف. وإذا رُزق الموظف بمولود داخل المملكة فيلزم تسوية وضع المولود النظامي أولًا، إذ لا يكتمل الخروج النهائي من دونها. وبعد صدور التأشيرة تُمنح مهلة محدودة للمغادرة (تصل عادةً إلى ستين يومًا ضمن صلاحية الإقامة)، وإذا لم يتم السفر وجب إلغاؤها تفاديًا للغرامات. نتولى إبراء الذمة كاملًا، وننفّذ الخروج عبر مقيم أو أبشر، ونؤكد المغادرة لإغلاق السجلات لديك بصورة سليمة."} }, { q: {"en": "How does sponsorship (services) transfer work between Qiwa and Jawazat?", "ar": "كيف يتم نقل الخدمات (الكفالة) بين قوى والجوازات؟"}, a: {"en": "The employment side starts on Qiwa: the new employer submits the transfer request under the labor-mobility rules of the Ministry of Human Resources and Social Development (HRSD), and the transfer must satisfy conditions such as the receiving establishment's Nitaqat standing and a documented contract on Qiwa. Once approved, the residency record is updated with Jawazat and a new iqama is processed under the new employer. We manage both ends — the Qiwa request and approvals, then the Jawazat/Muqeem follow-through — so the employee's status never sits in limbo between the two systems.", "ar": "يبدأ الجانب العمالي عبر قوى: تقدّم المنشأة الجديدة طلب النقل وفق ضوابط التنقل الوظيفي لدى وزارة الموارد البشرية والتنمية الاجتماعية، ويُشترط استيفاء متطلبات منها وضع المنشأة المستقبِلة في نطاقات وتوثيق العقد في قوى. وبعد الموافقة يُحدَّث سجل الإقامة لدى الجوازات وتُعالج إقامة جديدة باسم صاحب العمل الجديد. نحن ندير الطرفين — طلب قوى وموافقاته، ثم المتابعة لدى الجوازات ومقيم — حتى لا يبقى وضع الموظف معلّقًا بين النظامين."} }, { q: {"en": "Can you add our employees' families and register newborns without visits to Jawazat offices?", "ar": "هل يمكنكم إضافة عائلات موظفينا وتسجيل المواليد دون مراجعة مكاتب الجوازات؟"}, a: {"en": "Yes — in most cases the entire process is digital. Dependent iqamas and newborn registration are handled through Absher with the supporting documents: birth certificate, passports, the parents' iqamas, valid health insurance and vaccination records for newborns. The key financial point is the dependent levy (المقابل المالي للمرافقين), charged monthly per dependent — SAR 400 per month per dependent (SAR 4,800 per year), with installment payment available since 2026 — paid at cost and confirmed by your consultant. We prepare the file, verify the levy and insurance are in order, and follow the request until the dependent's iqama is issued.", "ar": "نعم — تتم العملية في معظم الحالات رقميًا بالكامل. فإقامات المرافقين وتسجيل المواليد تُنجز عبر أبشر بإرفاق المستندات الداعمة: شهادة الميلاد، وجوازات السفر، وإقامتَي الوالدين، وتأمين صحي ساري، وسجل التطعيمات للمواليد. والنقطة المالية الجوهرية هي المقابل المالي للمرافقين، وهو رسم شهري عن كل مرافق — يبلغ 400 ريال شهريًا عن كل مرافق (4,800 ريال سنويًا)، مع إتاحة السداد بالتقسيط منذ 2026 — ويُسدَّد بالتكلفة الفعلية ويؤكده مستشارك. نحن نجهّز الملف، ونتحقق من سداد المقابل المالي وسريان التأمين، ونتابع الطلب حتى صدور إقامة المرافق."} }],
  },
  {
    slug: "legal-consultations",
    category: "legal-services",
    icon: "file-text",
    updated: "2026-07-06",
    title: {"en": "Legal Consultations & Contracts", "ar": "الاستشارات القانونية وصياغة العقود"},
    seoTitle: {"en": "Legal Consultations & Contract Drafting Saudi Arabia 2026", "ar": "استشارات قانونية وصياغة عقود في السعودية 2026 | محامون مرخّصون"},
    seoDescription: {"en": "Legal consultations and contract drafting/review in Saudi Arabia through licensed lawyers — Civil Transactions Law compliant, bilingual. Consult us today.", "ar": "استشارات قانونية وصياغة ومراجعة العقود في السعودية عبر محامين مرخّصين — متوافقة مع نظام المعاملات المدنية وثنائية اللغة. استشرنا اليوم."},
    excerpt: {"en": "Through licensed Saudi lawyers, we draft, review, and update your contracts under the Civil Transactions Law and advise companies and individuals before they sign — because preventing a dispute always costs less than litigating one.", "ar": "عبر محامين سعوديين مرخّصين، نتولّى نيابةً عنك صياغة عقودك ومراجعتها وتحديثها وفق نظام المعاملات المدنية، ونقدّم الاستشارات القانونية للشركات والأفراد قبل التوقيع — لأنّ الوقاية من النزاع أقلّ كلفةً دائمًا من التقاضي بشأنه."},
    overview: [{"en": "At Omnera One, we deliver legal consultations and contract work through licensed Saudi lawyers and legal counsel — we are a professional services firm, not a court or government body. Whether you are a company negotiating a supply deal or an individual about to sign a partnership or employment agreement, we study your position, explain your rights and obligations in plain language, and handle the drafting on your behalf.", "ar": "في Omnera One نقدّم الاستشارات القانونية وأعمال العقود عبر محامين ومستشارين قانونيين سعوديين مرخّصين — فنحن شركة خدمات مهنية، ولسنا محكمةً ولا جهةً حكومية. سواء كنت شركةً تتفاوض على عقد توريد أو فردًا على وشك توقيع اتفاقية شراكة أو عقد عمل، ندرس موقفك القانوني، ونشرح لك حقوقك والتزاماتك بلغة واضحة، ونتولّى الصياغة نيابةً عنك."}, {"en": "Our scope covers corporate legal advice (company formation documents, shareholder agreements, governance frameworks), commercial contracts (supply, distribution, franchise, and non-disclosure agreements), and employment contracts aligned with the Saudi Labor Law and the unified contract authenticated through the Qiwa platform. We draft bilingually in Arabic and English, and we review any agreement before you sign it to surface hidden risks — unbalanced termination clauses, missing penalty caps, unclear jurisdiction — while there is still time to fix them.", "ar": "يشمل نطاق عملنا الاستشارات القانونية للشركات (وثائق التأسيس، واتفاقيات الشركاء والمساهمين، وأطر الحوكمة)، والعقود التجارية (التوريد، والتوزيع، والامتياز التجاري، واتفاقيات عدم الإفصاح)، وعقود العمل المتوافقة مع نظام العمل السعودي والعقد الموحّد الموثّق عبر منصة قوى. نصيغ العقود بالعربية والإنجليزية معًا، ونراجع أي اتفاقية قبل توقيعك عليها لكشف المخاطر الخفية — كشروط الإنهاء غير المتوازنة، وغياب سقف الشرط الجزائي، وغموض الاختصاص القضائي — ما دام الوقت متاحًا لتصحيحها."}, {"en": "Timing matters: the Civil Transactions Law, in force since December 2023, is the Kingdom's first comprehensive civil code, and it extends to contracts signed before it came into force, with limited exceptions. Agreements drafted under the old landscape may no longer say what you think they say. We update legacy contracts to the new law, and for SMEs we offer retainer-style ongoing support — so a lawyer reads every contract before it ever risks becoming a case before the commercial courts.", "ar": "التوقيت هنا جوهري: فنظام المعاملات المدنية، النافذ منذ ديسمبر 2023، هو أول تقنين مدني شامل في المملكة، ويمتدّ أثره إلى العقود المبرمة قبل نفاذه مع استثناءات محدودة. فالاتفاقيات التي صيغت في ظل المشهد القديم قد لا تعني اليوم ما تظنّه. نتولّى تحديث عقودك القائمة وفق النظام الجديد، ونقدّم للمنشآت الصغيرة والمتوسطة دعمًا قانونيًا مستمرًا بنظام الاشتراك — ليقرأ محامٍ كلَّ عقد قبل أن يتحوّل إلى قضية أمام المحاكم التجارية."}],
    audience: [{"en": "Companies and startups that need formation documents, shareholder agreements, governance policies, or commercial contracts (supply, distribution, franchise, NDA) drafted or reviewed under Saudi law.", "ar": "الشركات والشركات الناشئة التي تحتاج إلى صياغة أو مراجعة وثائق التأسيس، واتفاقيات الشركاء والمساهمين، وسياسات الحوكمة، والعقود التجارية (التوريد، والتوزيع، والامتياز التجاري، واتفاقيات عدم الإفصاح) وفق الأنظمة السعودية."}, {"en": "Employers and HR teams that must align employment contracts with the Saudi Labor Law and the unified contract authenticated through the Qiwa platform, including bringing existing contracts into the authenticated format.", "ar": "أصحاب العمل وفرق الموارد البشرية الملزَمون بمواءمة عقود العمل مع نظام العمل السعودي والعقد الموحّد الموثّق عبر منصة قوى، بما في ذلك تحويل العقود القائمة إلى الصيغة الموثّقة المعتمدة."}, {"en": "Individuals about to sign a significant agreement — a partnership, lease, sale, services, or employment contract — who want a licensed lawyer to catch the risks before signature, not after the dispute.", "ar": "الأفراد المقبلون على توقيع اتفاقية مهمة — شراكة، أو إيجار، أو بيع، أو خدمات، أو عقد عمل — ويريدون محاميًا مرخّصًا يكشف المخاطر قبل التوقيع، لا بعد نشوء النزاع."}],
    benefits: [{"en": "All legal work is delivered through licensed Saudi lawyers and legal counsel who practise under the Kingdom's regulations — honest, accountable advice, never a substitute for a court or government body.", "ar": "تُنجَز جميع الأعمال القانونية عبر محامين ومستشارين قانونيين سعوديين مرخّصين يمارسون المهنة وفق أنظمة المملكة — استشارة أمينة وخاضعة للمساءلة، ولا تُعدّ بديلًا عن المحاكم أو الجهات الحكومية."}, {"en": "Pre-signature review that catches risks early: a contract corrected before signing typically costs a fraction of what a dispute before the commercial or labor courts would cost in fees, time, and relationships.", "ar": "مراجعة قبل التوقيع تكشف المخاطر مبكرًا: فتصحيح العقد قبل توقيعه يكلّف عادةً جزءًا يسيرًا مما يكلّفه نزاعٌ أمام المحاكم التجارية أو العمالية من أتعاب ووقت وعلاقات."}, {"en": "Legacy contracts updated to the Civil Transactions Law (in force since December 2023), so your termination, compensation, and liability clauses align with the Kingdom's first comprehensive civil code — including its reach into pre-existing contracts, with limited exceptions.", "ar": "تحديث العقود القائمة وفق نظام المعاملات المدنية (النافذ منذ ديسمبر 2023)، لتتوافق بنود الإنهاء والتعويض والمسؤولية لديك مع أول تقنين مدني شامل في المملكة — بما في ذلك امتداد أثره إلى العقود السابقة على نفاذه، مع استثناءات محدودة."}, {"en": "Employment contracts aligned with the Saudi Labor Law and documented through Qiwa's unified contract — and under the joint initiative of the Ministry of Human Resources and the Ministry of Justice, the authenticated wage clause is recognized, once its conditions are met, as an enforcement instrument executable through the Najiz platform. We prepare your contracts to that standard.", "ar": "عقود عمل متوافقة مع نظام العمل السعودي وموثّقة عبر العقد الموحّد في منصة قوى — وبموجب المبادرة المشتركة بين وزارة الموارد البشرية والتنمية الاجتماعية ووزارة العدل، يُعدّ بند الأجر الموثّق، متى استُوفيت شروطه، سندًا تنفيذيًا يمكن تنفيذه عبر منصة ناجز. ونُعدّ عقودك وفق هذا المعيار."}, {"en": "Bilingual drafting in Arabic and English with faithful, consistent versions — essential when your counterparty, investor, or franchisor works in another language, while keeping the Arabic text sound before Saudi courts.", "ar": "صياغة ثنائية اللغة بالعربية والإنجليزية بنسختين متطابقتين ومتّسقتين — وهو أمر جوهري حين يتعامل الطرف الآخر أو المستثمر أو مانح الامتياز بلغة أخرى، مع الحفاظ على سلامة النص العربي أمام المحاكم السعودية."}, {"en": "Retainer-style ongoing support for SMEs: a fixed monthly arrangement under which we review contracts, answer legal questions, and update your templates — so you have counsel on call without the cost of an in-house legal department.", "ar": "دعم قانوني مستمر للمنشآت الصغيرة والمتوسطة بنظام الاشتراك: ترتيب شهري ثابت نراجع بموجبه العقود، ونجيب عن الاستفسارات القانونية، ونحدّث نماذجك — فيكون المستشار في متناولك دون كلفة إدارة قانونية داخلية."}],
    steps: [{ title: {"en": "Initial consultation and intake", "ar": "الاستشارة الأولية واستلام المستندات"}, text: {"en": "We hear the full picture — the deal, the counterparty, your objectives — and collect the draft contract, prior correspondence, and supporting documents, all under strict confidentiality.", "ar": "نستمع إلى الصورة كاملة — الصفقة، والطرف الآخر، وأهدافك — ونستلم مسودة العقد والمراسلات السابقة والمستندات المؤيدة، في إطارٍ من السرية التامة."} }, { title: {"en": "Legal assessment by a licensed lawyer", "ar": "التقييم القانوني عبر محامٍ مرخّص"}, text: {"en": "A licensed Saudi lawyer analyses your position under the applicable frameworks — the Civil Transactions Law, the Companies Law, or the Labor Law — and identifies the risks, gaps, and leverage points specific to your case.", "ar": "يحلّل محامٍ سعودي مرخّص موقفك وفق الأطر النظامية المنطبقة — نظام المعاملات المدنية، أو نظام الشركات، أو نظام العمل — ويحدّد المخاطر والثغرات ونقاط القوة الخاصة بحالتك."} }, { title: {"en": "Drafting or clause-by-clause review", "ar": "الصياغة أو المراجعة بندًا بندًا"}, text: {"en": "We draft the contract from scratch or review the existing draft clause by clause, delivering a written risk memo with proposed amendments — in Arabic, English, or both, as your transaction requires.", "ar": "نصيغ العقد من البداية أو نراجع المسودة القائمة بندًا بندًا، ونسلّمك مذكرة مخاطر مكتوبة مع التعديلات المقترحة — بالعربية أو الإنجليزية أو بكلتيهما بحسب ما تتطلبه صفقتك."} }, { title: {"en": "Negotiation and revisions", "ar": "التفاوض والتعديلات"}, text: {"en": "We revise the draft with you and support your negotiation with the counterparty, wording each concession carefully so the final text protects your interests without derailing the deal.", "ar": "نُعدّل المسودة معك وندعم تفاوضك مع الطرف الآخر، ونصوغ كل تنازل بعناية بحيث يحمي النص النهائي مصالحك دون أن يُفشل الصفقة."} }, { title: {"en": "Signature, authentication, and notarization", "ar": "التوقيع والتوثيق"}, text: {"en": "We guide execution of the final version: notarization through the Najiz platform where the document requires it, and authentication of employment contracts through the Qiwa platform, so your contract carries its full legal weight.", "ar": "نرشدك في إبرام النسخة النهائية: التوثيق عبر منصة ناجز حيثما تطلّب المستند ذلك، وتوثيق عقود العمل عبر منصة قوى، ليحمل عقدك كامل قوته النظامية."} }, { title: {"en": "Ongoing support and contract health checks", "ar": "الدعم المستمر والفحص الدوري للعقود"}, text: {"en": "Under a retainer arrangement, we remain your legal counsel — answering questions, reviewing new agreements, and periodically updating your templates as regulations evolve.", "ar": "بموجب ترتيب الاشتراك، نبقى مستشارك القانوني — نجيب عن استفساراتك، ونراجع الاتفاقيات الجديدة، ونحدّث نماذجك دوريًا كلما تطوّرت الأنظمة."} }],
    requirements: [{"en": "Commercial registration for companies, or national ID / Iqama for individuals.", "ar": "السجل التجاري للشركات، أو الهوية الوطنية / الإقامة للأفراد."}, {"en": "The contract, draft, or existing agreement to be reviewed, together with any related correspondence or annexes.", "ar": "العقد أو المسودة أو الاتفاقية القائمة المطلوب مراجعتها، مع أي مراسلات أو ملاحق متصلة بها."}, {"en": "A clear description of the deal: the parties, the commercial terms, and what you want the contract to achieve.", "ar": "وصف واضح للصفقة: الأطراف، والشروط التجارية، وما تريد أن يحققه العقد."}, {"en": "A power of attorney issued through the Najiz platform if you wish us to act before the relevant entities on your behalf — your consultant will confirm whether your case requires it.", "ar": "وكالة صادرة عبر منصة ناجز إذا رغبت في أن نتصرف نيابةً عنك أمام الجهات المعنية — ويؤكد لك مستشارك ما إذا كانت حالتك تتطلبها."}],
    deliverables: [{"en": "A professionally drafted or amended contract, ready for signature — bilingual (Arabic/English) where required, and aligned with the Civil Transactions Law.", "ar": "عقد مصوغ أو معدَّل باحترافية وجاهز للتوقيع — بنسخة ثنائية اللغة (عربي/إنجليزي) عند الحاجة، ومتوافق مع نظام المعاملات المدنية."}, {"en": "A written legal risk memo with clause-by-clause findings, proposed amendments, and a plain-language summary of your rights and obligations.", "ar": "مذكرة مخاطر قانونية مكتوبة تتضمن الملاحظات بندًا بندًا، والتعديلات المقترحة، وملخصًا بلغة واضحة لحقوقك والتزاماتك."}, {"en": "Executed and authenticated documentation: guidance through Najiz notarization or Qiwa authentication where applicable, plus updated contract templates for future use.", "ar": "مستندات مُبرمة وموثّقة: مع الإرشاد خلال التوثيق عبر منصة ناجز أو منصة قوى حيثما انطبق، إضافةً إلى نماذج عقود محدّثة لاستخدامك المستقبلي."}],
    timeline: {"en": "A standard contract review typically takes 3–5 business days; drafting complex agreements such as shareholder or franchise contracts typically takes 1–3 weeks. Timelines depend on the case and the counterparty's responsiveness, and are confirmed by your consultant after the initial review.", "ar": "تستغرق مراجعة العقد الاعتيادية عادةً من 3 إلى 5 أيام عمل؛ وتستغرق صياغة الاتفاقيات المعقدة كاتفاقيات الشركاء أو الامتياز التجاري عادةً من أسبوع إلى ثلاثة أسابيع. وتعتمد المدد على طبيعة الحالة وتجاوب الطرف الآخر، ويؤكدها مستشارك بعد المراجعة الأولية."},
    bestFor: {"en": "Companies, SMEs, and individuals who sign contracts regularly and would rather have a licensed lawyer catch the risks before signature than litigate them afterwards before the commercial or labor courts.", "ar": "الشركات والمنشآت الصغيرة والمتوسطة والأفراد الذين يوقّعون العقود بانتظام، ويفضّلون أن يكشف محامٍ مرخّص المخاطر قبل التوقيع بدلًا من التقاضي بشأنها لاحقًا أمام المحاكم التجارية أو العمالية."},
    supportType: {"en": "Consultations and contract work through licensed Saudi lawyers, with optional retainer-style ongoing legal support for SMEs — by appointment, remotely or in person.", "ar": "استشارات وأعمال عقود عبر محامين سعوديين مرخّصين، مع خيار الدعم القانوني المستمر بنظام الاشتراك للمنشآت الصغيرة والمتوسطة — بموعد مسبق، عن بُعد أو حضوريًا."},
    faqs: [{ q: {"en": "Who actually performs the legal work — is Omnera One a law firm or a government body?", "ar": "من يؤدي العمل القانوني فعليًا — هل Omnera One مكتب محاماة أم جهة حكومية؟"}, a: {"en": "Omnera One is a professional business-services firm, not a court or government body. All legal consultations, drafting, and reviews are delivered through licensed Saudi lawyers and legal counsel, and we tell you clearly what falls within their scope and what belongs before the Ministry of Justice or the courts.", "ar": "Omnera One شركة خدمات أعمال مهنية، وليست محكمةً ولا جهةً حكومية. تُقدَّم جميع الاستشارات القانونية وأعمال الصياغة والمراجعة عبر محامين ومستشارين قانونيين سعوديين مرخّصين، ونوضح لك بصراحة ما يقع ضمن نطاق عملهم وما يعود اختصاصه إلى وزارة العدل أو المحاكم."} }, { q: {"en": "My contracts were signed before the Civil Transactions Law — do they really need updating?", "ar": "عقودي أُبرمت قبل نظام المعاملات المدنية — هل تحتاج فعلًا إلى تحديث؟"}, a: {"en": "In many cases, yes. The Civil Transactions Law, in force since December 2023, is the Kingdom's first comprehensive civil code and applies to pre-existing contracts with limited exceptions — such as where a party invokes a contrary statutory provision or judicial principle, or where a limitation period had already begun to run. Clauses on termination, compensation, and liability drafted under the old landscape may now operate differently. We review your existing contracts and update whatever the new law affects — the exact scope depends on each contract.", "ar": "في كثير من الحالات، نعم. فنظام المعاملات المدنية، النافذ منذ ديسمبر 2023، هو أول تقنين مدني شامل في المملكة، ويسري على العقود السابقة عليه مع استثناءات محدودة — كأن يتمسّك أحد الأطراف بنصٍّ نظامي أو مبدأ قضائي يخالفه، أو أن تكون مدة التقادم قد بدأت قبل نفاذه. فالبنود المتعلقة بالإنهاء والتعويض والمسؤولية التي صيغت في ظل المشهد القديم قد يختلف أثرها اليوم. نراجع عقودك القائمة ونحدّث ما يمسّه النظام الجديد — ويتحدد النطاق الدقيق بحسب كل عقد."} }, { q: {"en": "Do you handle employment contracts and Qiwa authentication?", "ar": "هل تتولّون عقود العمل وتوثيقها عبر منصة قوى؟"}, a: {"en": "Yes. We draft and review employment contracts aligned with the Saudi Labor Law and its recent amendments, prepare them in the unified contract format authenticated through the Qiwa platform, and help you bring existing contracts into the authenticated format. Proper authentication also strengthens enforceability: under the joint initiative of the Ministry of Human Resources and the Ministry of Justice, the documented wage clause is recognized, once its conditions are met, as an enforcement instrument executable through the Najiz platform.", "ar": "نعم. نصيغ عقود العمل ونراجعها بما يتوافق مع نظام العمل السعودي وتعديلاته الأخيرة، ونُعدّها بصيغة العقد الموحّد الموثّق عبر منصة قوى، ونساعدك في تحويل العقود القائمة إلى الصيغة الموثّقة. كما يعزّز التوثيق الأصولي قابلية التنفيذ: فبموجب المبادرة المشتركة بين وزارة الموارد البشرية والتنمية الاجتماعية ووزارة العدل، يُعدّ بند الأجر الموثّق، متى استُوفيت شروطه، سندًا تنفيذيًا يمكن تنفيذه عبر منصة ناجز."} }, { q: {"en": "If a dispute still reaches court, can you guarantee we will win?", "ar": "إذا وصل النزاع إلى المحكمة رغم ذلك، فهل تضمنون كسب القضية؟"}, a: {"en": "No one can honestly guarantee a court outcome — results always depend on the facts, the evidence, and the court's assessment. Our approach is to make that scenario unlikely: sound drafting, pre-signature review, and amicable settlement or mediation (including the Ministry of Justice's Taradi service) before escalation. Should litigation become necessary, licensed lawyers assess your position candidly, including its weaknesses.", "ar": "لا يستطيع أحد بأمانة أن يضمن نتيجة قضائية — فالنتائج تتوقف دائمًا على الوقائع والأدلة وتقدير المحكمة. نهجنا هو جعل هذا السيناريو مستبعدًا: صياغة سليمة، ومراجعة قبل التوقيع، وتسوية ودية أو وساطة (بما في ذلك خدمة تراضي التابعة لوزارة العدل) قبل التصعيد. وإذا أصبح التقاضي ضروريًا، يقيّم المحامون المرخّصون موقفك بصراحة، بما في ذلك نقاط ضعفه."} }, { q: {"en": "How are your fees calculated, and what does the SME retainer include?", "ar": "كيف تُحتسب أتعابكم، وماذا يشمل اشتراك المنشآت الصغيرة والمتوسطة؟"}, a: {"en": "Fees depend on the contract's complexity, length, and languages — a single review is priced differently from drafting a shareholder agreement. You receive a clear quotation after the initial consultation, confirmed by your consultant before work begins. The SME retainer is a fixed monthly arrangement typically covering contract reviews, legal questions, and template updates, scoped to your actual volume.", "ar": "تعتمد الأتعاب على تعقيد العقد وطوله ولغاته — فمراجعة عقد واحد تختلف كلفتها عن صياغة اتفاقية شركاء. تحصل على عرض سعر واضح بعد الاستشارة الأولية، يؤكده مستشارك قبل بدء العمل. أما اشتراك المنشآت الصغيرة والمتوسطة فهو ترتيب شهري ثابت يغطي عادةً مراجعة العقود والإجابة عن الاستفسارات القانونية وتحديث النماذج، ويُحدَّد نطاقه بحسب حجم أعمالك الفعلي."} }],
  },
  {
    slug: "litigation-representation",
    category: "legal-services",
    icon: "landmark",
    updated: "2026-07-06",
    title: {"en": "Litigation & Legal Representation", "ar": "التقاضي والتمثيل القانوني"},
    seoTitle: {"en": "Litigation & Legal Representation Saudi Arabia 2026", "ar": "محامي قضايا تجارية وعمالية في السعودية 2026 | تمثيل قانوني"},
    seoDescription: {"en": "Legal representation before Saudi commercial and labor courts via Najiz — licensed lawyers, pleadings, hearings and appeals for companies and individuals.", "ar": "تمثيل قانوني أمام المحاكم التجارية والعمالية عبر ناجز — محامون مرخّصون يتولون المذكرات والجلسات والاستئناف للشركات والأفراد. تواصل معنا."},
    excerpt: {"en": "Litigation and legal representation before Saudi courts and committees through licensed Saudi lawyers. We file and follow your case electronically via Najiz, draft memoranda, attend hearings, and pursue appeals or settlement — for companies and individuals, in commercial, labor, and civil matters.", "ar": "التقاضي والتمثيل القانوني أمام المحاكم واللجان السعودية عبر محامين مرخّصين. نتولّى نيابةً عنك قيد الدعوى ومتابعتها إلكترونيًا عبر منصة ناجز، وإعداد المذكرات، وحضور الجلسات، والاستئناف أو الصلح — للشركات والأفراد في القضايا التجارية والعمالية والمدنية."},
    overview: [{"en": "Court cases in Saudi Arabia today run almost entirely through Najiz, the Ministry of Justice's electronic platform for judicial services: the statement of claim, exchange of memoranda, hearing schedules, judgments, and appeals are all managed electronically. Through Omnera One, licensed Saudi lawyers represent you at every stage — from drafting the statement of claim to the final judgment and, where needed, execution before the enforcement courts.", "ar": "تسير الدعاوى القضائية في المملكة اليوم بشكل شبه كامل عبر منصة ناجز للخدمات العدلية التابعة لوزارة العدل: فصحيفة الدعوى وتبادل المذكرات ومواعيد الجلسات والأحكام والاعتراض عليها تُدار جميعها إلكترونيًا. ومن خلال Omnera One يمثّلك محامون سعوديون مرخّصون في كل مرحلة — من صياغة صحيفة الدعوى حتى الحكم النهائي، وعند الحاجة تنفيذه أمام محاكم التنفيذ."}, {"en": "Our coverage spans the commercial courts (contract disputes, partnership and shareholder disputes, insolvency claims), the labor courts (wage claims, unfair dismissal, end-of-service benefits — beginning with the mandatory amicable-settlement stage at the Ministry of Human Resources and Social Development), and civil cases governed by the Civil Transactions Law in force since December 2023.", "ar": "تشمل تغطيتنا المحاكم التجارية (منازعات العقود، ونزاعات الشركاء والمساهمين، ودعاوى الإفلاس)، والمحاكم العمالية (المطالبات بالأجور، والفصل التعسفي، ومكافأة نهاية الخدمة — بدءًا من مرحلة التسوية الودية الإلزامية لدى وزارة الموارد البشرية والتنمية الاجتماعية)، والقضايا المدنية الخاضعة لنظام المعاملات المدنية النافذ منذ ديسمبر 2023."}, {"en": "Litigation is not always the best answer. Before and during proceedings, we assess your position honestly and pursue settlement or mediation — including through the Taradi platform where appropriate — whenever it serves your interest better than a prolonged case. When litigation is the right path, we litigate it rigorously. We never promise outcomes; results always depend on the facts, the evidence, and the court's discretion.", "ar": "ليس التقاضي دائمًا الخيار الأمثل. فقبل الدعوى وأثناءها نقيّم موقفك القانوني بموضوعية، ونسعى إلى الصلح أو الوساطة — بما في ذلك عبر منصة تراضي عند الاقتضاء — متى كان ذلك أجدى لمصلحتك من نزاع مطوّل. وحين يكون التقاضي هو الطريق الصحيح خضناه باحترافية ودقة. ونحن لا نعد بنتائج؛ فالنتائج تتوقف دائمًا على وقائع القضية وأدلتها وتقدير المحكمة."}],
    audience: [{"en": "Companies facing commercial disputes — unpaid invoices, breach of contract, partnership or shareholder conflicts, or insolvency claims before the commercial courts.", "ar": "الشركات التي تواجه منازعات تجارية — مستحقات غير مسددة، أو إخلالًا بالعقود، أو نزاعات شركاء ومساهمين، أو دعاوى إفلاس أمام المحاكم التجارية."}, {"en": "Employees and employers in labor disputes — wage claims, unfair dismissal, and end-of-service benefits — from the amicable-settlement stage through the labor courts.", "ar": "العاملون وأصحاب العمل في المنازعات العمالية — المطالبات بالأجور، والفصل التعسفي، ومكافأة نهاية الخدمة — من مرحلة التسوية الودية وحتى المحاكم العمالية."}, {"en": "Individuals with civil claims under the Civil Transactions Law — contractual and financial disputes, compensation claims, and enforcement of judgments and executive documents.", "ar": "الأفراد أصحاب المطالبات المدنية بموجب نظام المعاملات المدنية — المنازعات التعاقدية والمالية، ودعاوى التعويض، وتنفيذ الأحكام والسندات التنفيذية."}],
    benefits: [{"en": "Representation by licensed Saudi lawyers with rights of audience before the commercial, labor, and civil courts — you never navigate the courtroom alone.", "ar": "تمثيل قانوني عبر محامين سعوديين مرخّصين لهم حق الترافع أمام المحاكم التجارية والعمالية والمدنية — فلن تواجه ساحة القضاء وحدك."}, {"en": "Full electronic case management via Najiz: filing the statement of claim, submitting memoranda, tracking hearing dates, and receiving judgments — with regular status reports to you.", "ar": "إدارة إلكترونية كاملة للدعوى عبر منصة ناجز: قيد صحيفة الدعوى، وإيداع المذكرات، ومتابعة مواعيد الجلسات، واستلام الأحكام — مع تقارير دورية لك عن سير القضية."}, {"en": "Professionally drafted memoranda and pleadings that present your facts, evidence, and legal grounds under the applicable Saudi laws, including the Civil Transactions Law.", "ar": "مذكرات ولوائح مصاغة باحترافية تعرض وقائعك وأدلتك وأسانيدك النظامية وفق الأنظمة السعودية واجبة التطبيق، ومنها نظام المعاملات المدنية."}, {"en": "An honest case assessment before you spend a riyal on litigation — covering the strength of your position, realistic scenarios, and whether settlement serves you better.", "ar": "تقييم صريح لقضيتك قبل أن تنفق ريالًا واحدًا على التقاضي — يشمل قوة موقفك، والسيناريوهات الواقعية، وما إذا كان الصلح أجدى لمصلحتك."}, {"en": "Deadline protection at every stage: the amicable-settlement window in labor disputes, objection and appeal periods, and enforcement requests — nothing lapses unnoticed.", "ar": "حماية للمواعيد النظامية في كل مرحلة: مهلة التسوية الودية في المنازعات العمالية، ومُدد الاعتراض والاستئناف، وطلبات التنفيذ — فلا يفوت موعد دون انتباه."}, {"en": "Follow-through after judgment: we file and pursue the execution request before the enforcement courts, working toward actual collection of your entitlements as far as the debtor's circumstances allow.", "ar": "متابعة ما بعد الحكم: نتولّى تقديم طلب التنفيذ ومتابعته أمام محاكم التنفيذ، سعيًا إلى تحصيل مستحقاتك فعليًا بقدر ما تسمح به حالة المنفَّذ ضده."}],
    steps: [{ title: {"en": "Case assessment and strategy", "ar": "تقييم القضية ووضع الاستراتيجية"}, text: {"en": "We review your contracts, correspondence, and evidence with a licensed lawyer, assess the strength of your claim or defense, identify the competent court, and agree a strategy with you — litigation, settlement, or both in parallel.", "ar": "نراجع عقودك ومراسلاتك وأدلتك مع محامٍ مرخّص، ونقيّم قوة مطالبتك أو دفاعك، ونحدد المحكمة المختصة، ونتفق معك على الاستراتيجية — تقاضيًا أو صلحًا أو مسارين متوازيين."} }, { title: {"en": "Pre-litigation stage where required", "ar": "المرحلة السابقة للتقاضي عند لزومها"}, text: {"en": "In labor disputes we first represent you in the mandatory amicable-settlement stage before the Ministry of Human Resources and Social Development; if no settlement is reached within the statutory window (typically 21 working days), the dispute is referred to the labor court. In other disputes we attempt negotiated settlement or mediation where it serves you.", "ar": "في المنازعات العمالية نمثّلك أولًا في مرحلة التسوية الودية الإلزامية لدى وزارة الموارد البشرية والتنمية الاجتماعية؛ فإن لم يتحقق الصلح خلال المهلة النظامية (عادةً 21 يوم عمل) أُحيل النزاع إلى المحكمة العمالية. وفي المنازعات الأخرى نسعى إلى التسوية أو الوساطة متى كانت في مصلحتك."} }, { title: {"en": "Filing the claim via Najiz", "ar": "قيد الدعوى عبر منصة ناجز"}, text: {"en": "We draft the statement of claim precisely — parties, facts, requests, and legal grounds — attach the supporting documents and the power of attorney, and file it electronically through Najiz with the competent commercial, labor, or civil court.", "ar": "نصوغ صحيفة الدعوى بدقة — الأطراف والوقائع والطلبات والأسانيد النظامية — ونرفق المستندات المؤيدة والوكالة الشرعية، ثم نقيّدها إلكترونيًا عبر منصة ناجز لدى المحكمة المختصة تجاريةً كانت أو عمالية أو مدنية."} }, { title: {"en": "Memoranda and hearings", "ar": "المذكرات والجلسات"}, text: {"en": "We attend hearings (in person or remotely as the court directs), respond to the opposing party's memoranda within the set deadlines, submit rebuttals and evidence, and keep you informed after every session.", "ar": "نحضر الجلسات (حضوريًا أو عن بُعد وفق ما تقرره المحكمة)، ونرد على مذكرات الخصم ضمن المهل المحددة، ونقدّم المذكرات الجوابية والأدلة، ونوافيك بمستجدات القضية بعد كل جلسة."} }, { title: {"en": "Judgment, appeal, or settlement", "ar": "الحكم أو الاستئناف أو الصلح"}, text: {"en": "When judgment is issued we analyze it with you. If it warrants challenge, we file the appeal through Najiz within the statutory period (typically 30 days). If a fair settlement emerges at any point — including through the Taradi mediation platform — we present it to you candidly and document it properly.", "ar": "عند صدور الحكم نحلله معك؛ فإن كان جديرًا بالطعن قدّمنا الاستئناف عبر ناجز خلال المدة النظامية (عادةً 30 يومًا). وإن لاح صلح عادل في أي مرحلة — بما في ذلك عبر منصة تراضي للوساطة — عرضناه عليك بشفافية ووثّقناه توثيقًا صحيحًا."} }, { title: {"en": "Enforcement of the judgment", "ar": "تنفيذ الحكم"}, text: {"en": "Once the judgment is final, we file the execution request before the enforcement courts via Najiz and follow the enforcement measures until your entitlements are actually collected, as far as the debtor's circumstances allow.", "ar": "متى اكتسب الحكم الصفة النهائية قدّمنا طلب التنفيذ أمام محاكم التنفيذ عبر ناجز، وتابعنا إجراءات التنفيذ حتى تحصيل مستحقاتك فعليًا، بقدر ما تسمح به حالة المنفَّذ ضده."} }],
    requirements: [{"en": "A power of attorney authorizing the licensed lawyer to represent you — issued electronically via the Ministry of Justice notarization services on Najiz (we guide you through it step by step).", "ar": "وكالة شرعية تخوّل المحامي المرخّص تمثيلك — تصدر إلكترونيًا عبر خدمات التوثيق بوزارة العدل من خلال منصة ناجز (ونرشدك إلى إصدارها خطوة بخطوة)."}, {"en": "Identity documents: national ID or Iqama for individuals, or the commercial registration and the authorized signatory's details for companies.", "ar": "وثائق الهوية: الهوية الوطنية أو الإقامة للأفراد، أو السجل التجاري وبيانات المفوَّض بالتوقيع للشركات."}, {"en": "All documents relating to the dispute: contracts, invoices, correspondence, payment records, the employment contract and wage records in labor cases, and any prior judgments or settlements.", "ar": "جميع المستندات المتصلة بالنزاع: العقود، والفواتير، والمراسلات، وسجلات السداد، وعقد العمل وسجلات الأجور في القضايا العمالية، وأي أحكام أو تسويات سابقة."}, {"en": "A clear account of the facts and your requests, so the statement of claim and memoranda reflect your position accurately.", "ar": "سرد واضح للوقائع وطلباتك، حتى تعكس صحيفة الدعوى والمذكرات موقفك بدقة."}],
    deliverables: [{"en": "A written case assessment and litigation strategy from a licensed Saudi lawyer, covering the competent court, the legal grounds, and realistic scenarios.", "ar": "تقييم قانوني مكتوب واستراتيجية تقاضٍ من محامٍ سعودي مرخّص، تشمل المحكمة المختصة والأسانيد النظامية والسيناريوهات الواقعية."}, {"en": "The claim filed and managed on Najiz: statement of claim, memoranda and pleadings, hearing attendance, and regular status reports after each development.", "ar": "دعوى مقيّدة ومُدارة عبر منصة ناجز: صحيفة الدعوى، والمذكرات واللوائح، وحضور الجلسات، وتقارير دورية بعد كل مستجد."}, {"en": "Post-judgment follow-through: the appeal memorandum where warranted, the documented settlement where achieved, or the enforcement file before the enforcement courts.", "ar": "متابعة ما بعد الحكم: مذكرة الاستئناف عند وجود مسوّغ، أو محضر الصلح الموثّق عند تحققه، أو ملف التنفيذ أمام محاكم التنفيذ."}],
    timeline: {"en": "Duration varies widely with the case. Filing via Najiz typically takes days once the documents and power of attorney are ready. The labor amicable-settlement stage typically runs up to 21 working days before referral to the labor court. First-instance proceedings commonly take several months depending on complexity, exchanges of memoranda, and the court's schedule; appeals and enforcement add further time. Your consultant confirms a realistic estimate for your specific case.", "ar": "تتفاوت المدة تفاوتًا كبيرًا بحسب القضية. فقيد الدعوى عبر ناجز يستغرق عادةً أيامًا متى اكتملت المستندات والوكالة. وتمتد مرحلة التسوية الودية العمالية عادةً حتى 21 يوم عمل قبل الإحالة إلى المحكمة العمالية. وتستغرق دعاوى الدرجة الأولى عادةً عدة أشهر بحسب تعقيد القضية وتبادل المذكرات وجدول المحكمة؛ ويضيف الاستئناف والتنفيذ مددًا إضافية. ويؤكد لك مستشارك تقديرًا واقعيًا لقضيتك تحديدًا."},
    bestFor: {"en": "Companies and individuals who want licensed Saudi lawyers to take over a dispute end to end — assessment, Najiz filing, memoranda, hearings, appeal or settlement, and enforcement — with honest advice at every fork in the road.", "ar": "الشركات والأفراد الراغبون في أن يتولّى محامون سعوديون مرخّصون نزاعهم من بدايته إلى نهايته — تقييمًا، وقيدًا عبر ناجز، ومذكرات، وجلسات، واستئنافًا أو صلحًا، وتنفيذًا — مع مشورة صريحة عند كل مفترق طريق."},
    supportType: {"en": "Full legal representation through licensed Saudi lawyers: we act on your behalf before the courts and committees, manage the case electronically via Najiz, and keep you informed — while every strategic decision remains yours.", "ar": "تمثيل قانوني كامل عبر محامين سعوديين مرخّصين: نتصرف نيابةً عنك أمام المحاكم واللجان، وندير الدعوى إلكترونيًا عبر ناجز، ونوافيك بالمستجدات أولًا بأول — مع بقاء كل قرار استراتيجي بيدك."},
    faqs: [{ q: {"en": "Is Omnera One a law firm? Who actually represents me in court?", "ar": "هل Omnera One مكتب محاماة؟ ومن يمثّلني فعليًا أمام المحكمة؟"}, a: {"en": "Omnera One is a business-services firm, not a court or government body. Legal representation is delivered through licensed Saudi lawyers acting under a duly issued power of attorney. They appear before the courts on your behalf, while we coordinate the engagement and keep you informed throughout.", "ar": "Omnera One شركة خدمات أعمال، وليست محكمة ولا جهة حكومية. يُقدَّم التمثيل القانوني عبر محامين سعوديين مرخّصين يعملون بموجب وكالة شرعية صادرة أصولًا؛ فهم من يمثّلونك أمام المحاكم، بينما ننسّق نحن سير العمل ونوافيك بالمستجدات باستمرار."} }, { q: {"en": "Can you guarantee I will win my case?", "ar": "هل تضمنون كسب قضيتي؟"}, a: {"en": "No — and no honest legal practitioner can. Outcomes depend on the facts, the evidence, the applicable law, and the court's discretion. What we do commit to is diligent work: a candid assessment before you commit, precise pleadings, deadline protection, and honest advice on settlement whenever it serves you better.", "ar": "لا — ولا يستطيع ذلك أي ممارس قانوني أمين. فالنتائج تتوقف على الوقائع والأدلة والنظام واجب التطبيق وتقدير المحكمة. أما ما نلتزم به فهو العمل بعناية واجتهاد: تقييم صريح قبل أن تلتزم، ولوائح دقيقة، وحماية للمواعيد النظامية، ومشورة أمينة بشأن الصلح متى كان أجدى لك."} }, { q: {"en": "I have a labor dispute — can I go straight to the labor court?", "ar": "لديّ نزاع عمالي — فهل يمكنني التوجه مباشرة إلى المحكمة العمالية؟"}, a: {"en": "Not immediately. Labor disputes must first pass through the amicable-settlement stage before the Ministry of Human Resources and Social Development. If no settlement is reached within the statutory window — typically 21 working days — the dispute is referred to the labor court. We represent you in both stages, and a fair settlement at the first stage often saves months.", "ar": "ليس مباشرةً. إذ يجب أن تمر المنازعات العمالية أولًا بمرحلة التسوية الودية لدى وزارة الموارد البشرية والتنمية الاجتماعية؛ فإن لم يتحقق الصلح خلال المهلة النظامية — عادةً 21 يوم عمل — أُحيل النزاع إلى المحكمة العمالية. ونحن نمثّلك في المرحلتين، وكثيرًا ما توفّر التسوية العادلة في المرحلة الأولى شهورًا من التقاضي."} }, { q: {"en": "How much do litigation services cost, and are there court fees?", "ar": "كم تبلغ تكلفة خدمات التقاضي؟ وهل توجد رسوم قضائية؟"}, a: {"en": "Legal fees depend on the case type, its complexity, and the expected stages — a wage claim differs greatly from a multi-party commercial dispute. Some cases also involve judicial costs under the applicable rules. Your consultant confirms a clear fee structure before any engagement begins, so there are no surprises.", "ar": "تتوقف الأتعاب على نوع القضية ودرجة تعقيدها والمراحل المتوقعة — فمطالبة بالأجور تختلف كثيرًا عن نزاع تجاري متعدد الأطراف. وقد تترتب على بعض القضايا تكاليف قضائية وفق القواعد المعمول بها. ويؤكد لك مستشارك هيكل الأتعاب بوضوح قبل بدء أي عمل، فلا مفاجآت."} }, { q: {"en": "I already have a judgment in my favor — can you help me collect it?", "ar": "لديّ حكم صادر لصالحي — فهل تساعدونني في تحصيله؟"}, a: {"en": "Yes. Once the judgment is final, we file the execution request before the enforcement courts via Najiz and follow the enforcement measures available under the Enforcement Law, working toward collection as far as the debtor's circumstances allow. The same applies to executive documents such as notarized acknowledgments and promissory notes.", "ar": "نعم. فمتى اكتسب الحكم الصفة النهائية قدّمنا طلب التنفيذ أمام محاكم التنفيذ عبر ناجز، وتابعنا إجراءات التنفيذ المتاحة بموجب نظام التنفيذ سعيًا إلى التحصيل، بقدر ما تسمح به حالة المنفَّذ ضده. وينطبق الأمر ذاته على السندات التنفيذية كالإقرارات الموثّقة والسندات لأمر."} }],
  },
  {
    slug: "debt-collection",
    category: "legal-services",
    icon: "banknote",
    updated: "2026-07-06",
    title: {"en": "Debt Collection & Judgment Enforcement", "ar": "تحصيل الديون وتنفيذ الأحكام"},
    seoTitle: {"en": "Debt Collection & Judgment Enforcement Saudi Arabia 2026", "ar": "تحصيل ديون وتنفيذ أحكام في السعودية 2026 | عبر محاكم التنفيذ"},
    seoDescription: {"en": "Debt collection in Saudi Arabia: amicable settlement, then enforcement courts via Najiz — promissory notes, cheques and judgments followed until collection.", "ar": "تحصيل الديون في السعودية: تسوية ودية ثم محاكم التنفيذ عبر ناجز — سندات لأمر وشيكات وأحكام نتابعها حتى التحصيل الفعلي. ابدأ مطالبتك الآن."},
    excerpt: {"en": "We work to recover your money in Saudi Arabia — for companies and individuals — starting with formal demand letters and negotiated settlements, then escalating to the enforcement courts (محاكم التنفيذ) through the Najiz platform for promissory notes, cheques, notarized contracts and court judgments. Our licensed Saudi lawyers file the requests, follow up on court-ordered measures such as travel bans and account freezes, and stay on the file until funds are actually collected — with outcomes always depending on the debtor's assets.", "ar": "نعمل على استرداد أموالك في المملكة العربية السعودية — للشركات والأفراد — بدءًا بخطابات المطالبة الرسمية والتسويات التفاوضية، ثم التصعيد إلى محاكم التنفيذ عبر منصة ناجز للسندات لأمر والشيكات والعقود الموثّقة والأحكام القضائية. يتولّى محامونا السعوديون المرخّصون تقديم الطلبات ومتابعة الإجراءات التي تأمر بها المحكمة كالمنع من السفر وتجميد الحسابات، ونواصل متابعة الملف حتى تحصيل المبالغ فعليًا — مع بقاء النتائج مرهونة بأصول المدين."},
    overview: [{"en": "Unpaid invoices, bounced cheques and ignored judgments do not have to be written off. Saudi Arabia operates a fast, largely digital judicial enforcement system: if your debt is documented in an executable instrument (سند تنفيذي) — a promissory note (سند لأمر), a cheque, a notarized contract or a final court judgment — it can go directly to the enforcement courts (محاكم التنفيذ) through the Ministry of Justice's Najiz platform (منصة ناجز), without re-litigating the merits.", "ar": "الفواتير غير المسدّدة والشيكات المرتجعة والأحكام التي يتجاهلها المدين لا يلزم شطبها. فالمملكة العربية السعودية تعتمد نظام تنفيذ قضائيًا سريعًا ورقميًا إلى حدّ بعيد: فإذا كان دينك موثّقًا في سند تنفيذي — سند لأمر أو شيك أو عقد موثّق أو حكم قضائي نهائي — أمكن التوجّه به مباشرة إلى محاكم التنفيذ عبر منصة ناجز التابعة لوزارة العدل، دون إعادة التقاضي في أصل الحق."}, {"en": "Through Omnera One, licensed Saudi lawyers (محامون مرخّصون) manage the full recovery cycle on your behalf: amicable collection first — formal demand letters, structured negotiation and binding settlement agreements — then the judicial route where needed. We file the enforcement request on Najiz, pursue issuance of the enforcement order — known in practice as \"qarar 34\" (قرار 34) — directing the debtor to pay within five days of notification, and follow up on the coercive measures the enforcement judge may then order under the Enforcement Law: travel bans, suspension of government services, freezing of bank accounts and seizure and sale of assets. These measures are imposed and executed by the court itself — our role is to file correctly, push the file forward and keep the pressure on until it produces payment.", "ar": "من خلال Omnera One، يُدير محامون سعوديون مرخّصون دورة التحصيل كاملة نيابةً عنك: التحصيل الودّي أولًا — خطابات مطالبة رسمية وتفاوض منظّم واتفاقيات تسوية ملزمة — ثم المسار القضائي عند الحاجة. نقدّم طلب التنفيذ عبر ناجز، ونتابع استصدار أمر التنفيذ — المعروف عمليًا بـ«قرار 34» — الذي يُمهل المدين خمسة أيام من تبليغه للسداد، ثم نتابع الإجراءات الجبرية التي قد يأمر بها قاضي التنفيذ وفق نظام التنفيذ: المنع من السفر، وإيقاف الخدمات الحكومية، وتجميد الحسابات البنكية، والحجز على الأموال وبيعها. هذه الإجراءات تفرضها المحكمة وتنفّذها بنفسها — ودورنا هو التقديم الصحيح ودفع الملف قدمًا وإبقاء الضغط قائمًا حتى يُثمر سدادًا."}, {"en": "The same service covers debts that are not yet in executable form — commercial-paper claims and contractual debts pursued before the commercial courts (المحاكم التجارية) or under the Civil Transactions Law (نظام المعاملات المدنية) in force since December 2023 — and the enforcement of judgments you have already won in other cases, whether with us or elsewhere. We serve companies and individuals alike, and we are honest about the one variable no lawyer controls: actual recovery ultimately depends on the debtor's assets and solvency.", "ar": "تشمل الخدمة ذاتها الديون التي لم تتخذ بعد شكل السند التنفيذي — كمطالبات الأوراق التجارية والديون العقدية التي تُرفع أمام المحاكم التجارية أو استنادًا إلى نظام المعاملات المدنية النافذ منذ ديسمبر 2023 — إضافة إلى تنفيذ الأحكام التي سبق أن كسبتها في قضايا أخرى، سواء معنا أو مع غيرنا. نخدم الشركات والأفراد على حدّ سواء، ونتعامل بصدق مع المتغيّر الوحيد الذي لا يتحكم فيه أي محامٍ: فالتحصيل الفعلي يتوقف في نهاية المطاف على أصول المدين وملاءته المالية."}],
    audience: [{"en": "Companies with unpaid invoices, bounced cheques or promissory notes from customers, distributors or business partners — including suppliers, contractors and service providers with recurring receivables problems.", "ar": "الشركات التي لديها فواتير غير مسدّدة أو شيكات مرتجعة أو سندات لأمر مستحقة على عملاء أو موزّعين أو شركاء تجاريين — بما في ذلك المورّدون والمقاولون ومقدّمو الخدمات الذين يواجهون تعثّرًا متكررًا في الذمم المدينة."}, {"en": "Individuals owed money under loans, promissory notes, cheques, rental contracts or unpaid dues — including creditors who prefer that a professional pursue the debt on their behalf, without personal confrontation.", "ar": "الأفراد الدائنون بمبالغ ناشئة عن قروض أو سندات لأمر أو شيكات أو عقود إيجار أو مستحقات غير مدفوعة — بمن فيهم من يفضّل أن يتولّى محترفٌ المطالبةَ نيابةً عنه دون مواجهة شخصية."}, {"en": "Claimants who already hold a final judgment or arbitral award — from the commercial, labor or general courts — and need it actually enforced and converted into collected money through the enforcement courts.", "ar": "أصحاب الأحكام النهائية أو أحكام التحكيم — الصادرة عن المحاكم التجارية أو المحاكم العمالية أو المحاكم العامة — الذين يحتاجون إلى تنفيذها فعليًا وتحويلها إلى أموال محصَّلة عبر محاكم التنفيذ."}],
    benefits: [{"en": "Amicable collection first: formal demand letters and lawyer-led negotiation frequently produce payment or a documented settlement agreement without the cost and time of court — and preserve the business relationship where that matters to you.", "ar": "التحصيل الودّي أولًا: كثيرًا ما تُثمر خطابات المطالبة الرسمية والتفاوض بقيادة محامٍ سدادًا أو اتفاقية تسوية موثّقة دون كلفة التقاضي ووقته — مع الحفاظ على العلاقة التجارية متى كانت مهمة لك."}, {"en": "Direct enforcement for executable documents: promissory notes (السندات لأمر), cheques, notarized contracts and court judgments go straight to the enforcement courts via Najiz — no need to re-prove the debt on the merits.", "ar": "تنفيذ مباشر للسندات التنفيذية: السندات لأمر والشيكات والعقود الموثّقة والأحكام القضائية تذهب مباشرة إلى محاكم التنفيذ عبر ناجز — دون حاجة إلى إثبات الدين مجددًا في أصل الحق."}, {"en": "The full weight of court-ordered enforcement measures working for you: after the enforcement order (قرار 34), the judge may impose travel bans, suspend government services, freeze bank accounts and order the seizure of assets. The court imposes and executes these measures — we petition for them and follow them up relentlessly.", "ar": "ثِقل إجراءات التنفيذ الجبرية التي تأمر بها المحكمة يعمل لصالحك: فبعد أمر التنفيذ (قرار 34) قد يفرض القاضي المنع من السفر وإيقاف الخدمات الحكومية وتجميد الحسابات البنكية والحجز على الأموال. المحكمة هي من تفرض هذه الإجراءات وتنفّذها — ونحن من يطلبها ويتابعها بلا هوادة."}, {"en": "Follow-through until money moves: we do not stop at obtaining orders. We track disbursement from frozen accounts, auction proceeds and installment schedules until the amounts actually reach you.", "ar": "متابعة حتى انتقال المال فعليًا: لا نتوقف عند استصدار القرارات، بل نتابع صرف المبالغ من الحسابات المجمّدة وحصيلة المزادات وجداول الأقساط حتى تصل المبالغ إليك فعلًا."}, {"en": "One team for both routes: if your debt lacks an executable document, our licensed lawyers pursue it before the commercial courts or under the Civil Transactions Law (نظام المعاملات المدنية), then carry the resulting judgment into enforcement — no handover between firms.", "ar": "فريق واحد للمسارين: إذا كان دينك بلا سند تنفيذي، تولّى محامونا المرخّصون المطالبة به أمام المحاكم التجارية أو استنادًا إلى نظام المعاملات المدنية، ثم نقل الحكم الصادر إلى مرحلة التنفيذ — دون تنقّل بين مكاتب."}, {"en": "Transparent, realistic advice from day one: we assess the strength of your documents and the debtor's apparent position before you spend anything on litigation, and we tell you plainly when settlement is the smarter route — recovery always depends on the debtor's assets.", "ar": "مشورة شفافة وواقعية منذ اليوم الأول: نقيّم قوة مستنداتك وموقف المدين الظاهر قبل أن تُنفق شيئًا على التقاضي، ونصارحك متى كانت التسوية هي الخيار الأذكى — فالتحصيل يتوقف دائمًا على أصول المدين."}],
    steps: [{ title: {"en": "Case assessment and document review", "ar": "تقييم القضية ومراجعة المستندات"}, text: {"en": "We review your debt documents — promissory notes, cheques, contracts, invoices, judgments — and classify the claim: directly enforceable, litigable, or best suited to settlement. You receive a candid opinion on strength, route and realistic prospects before committing to anything.", "ar": "نراجع مستندات دينك — السندات لأمر والشيكات والعقود والفواتير والأحكام — ونصنّف المطالبة: قابلة للتنفيذ المباشر، أو تستلزم التقاضي، أو أنسب للتسوية. وتتلقى رأيًا صريحًا في قوة المطالبة ومسارها وفرصها الواقعية قبل أي التزام."} }, { title: {"en": "Formal demand and negotiation", "ar": "المطالبة الرسمية والتفاوض"}, text: {"en": "Our licensed lawyers issue a formal demand letter to the debtor and open structured negotiation. Where the debtor engages, we draft a binding settlement agreement — with payment schedules and guarantees — and can have it documented so it becomes enforceable if breached.", "ar": "يوجّه محامونا المرخّصون خطاب مطالبة رسميًا إلى المدين ويفتحون بابَ تفاوض منظّم. فإذا تجاوب المدين، صغنا اتفاقية تسوية ملزمة — بجداول سداد وضمانات — ويمكن توثيقها بحيث تصبح قابلة للتنفيذ عند الإخلال."} }, { title: {"en": "Filing the enforcement request on Najiz", "ar": "تقديم طلب التنفيذ عبر ناجز"}, text: {"en": "For executable documents, we file the enforcement request with the enforcement court (محكمة التنفيذ) through the Najiz platform, complete the required data and attachments, and pursue issuance of the enforcement order (قرار 34) directing the debtor to pay within five days of notification.", "ar": "بالنسبة إلى السندات التنفيذية، نقدّم طلب التنفيذ إلى محكمة التنفيذ عبر منصة ناجز، ونستكمل البيانات والمرفقات المطلوبة، ونتابع استصدار أمر التنفيذ (قرار 34) الذي يُلزم المدين بالسداد خلال خمسة أيام من تبليغه."} }, { title: {"en": "Litigation where no executable document exists", "ar": "التقاضي عند غياب السند التنفيذي"}, text: {"en": "If the debt rests on unpaid invoices or an unnotarized contract, we file the claim before the competent court — typically the commercial courts for business debts, applying the Civil Transactions Law where relevant — and litigate through to a final judgment, making use of conciliation and mediation (الصلح والوساطة), including the Ministry of Justice's Taradi platform, where it serves you.", "ar": "إذا كان الدين قائمًا على فواتير غير مسدّدة أو عقد غير موثّق، رفعنا الدعوى أمام المحكمة المختصة — وهي غالبًا المحاكم التجارية للديون التجارية، مع تطبيق نظام المعاملات المدنية حيثما اقتضى الأمر — وتابعنا التقاضي حتى صدور حكم نهائي، مستفيدين من الصلح والوساطة، ومنها منصة تراضي التابعة لوزارة العدل، متى كان ذلك في مصلحتك."} }, { title: {"en": "Coercive enforcement measures", "ar": "إجراءات التنفيذ الجبرية"}, text: {"en": "If the debtor ignores the enforcement order, we petition the enforcement judge for the coercive measures available under the Enforcement Law — a travel ban, suspension of government services, disclosure and freezing of bank accounts, and seizure and judicial sale of assets. These are ordered and executed by the court; we file, monitor and escalate.", "ar": "إذا تجاهل المدين أمر التنفيذ، طلبنا من قاضي التنفيذ اتخاذ الإجراءات الجبرية المقرّرة في نظام التنفيذ — المنع من السفر، وإيقاف الخدمات الحكومية، والإفصاح عن الحسابات البنكية وتجميدها، والحجز على الأموال وبيعها قضائيًا. وهذه الإجراءات تأمر بها المحكمة وتنفّذها؛ ونحن نقدّم الطلبات ونراقب ونصعّد."} }, { title: {"en": "Collection, disbursement and closure", "ar": "التحصيل والصرف وإقفال الملف"}, text: {"en": "We follow the file until funds are disbursed to you — from frozen accounts, salary deductions, auction proceeds or approved installment plans — reconcile the amounts received against the claim, and close the file with a full record of what was recovered.", "ar": "نتابع الملف حتى صرف المبالغ إليك — من الحسابات المجمّدة أو الاستقطاع من الراتب أو حصيلة المزادات أو خطط التقسيط المعتمدة — ونطابق المبالغ المحصَّلة مع أصل المطالبة، ثم نقفل الملف بسجل كامل لما استُرد."} }],
    requirements: [{"en": "Proof of the debt: the promissory note (سند لأمر), cheque, notarized or signed contract, invoices, delivery notes, or the court judgment or arbitral award you wish to enforce.", "ar": "إثبات الدين: السند لأمر أو الشيك أو العقد الموثّق أو الموقّع أو الفواتير أو سندات التسليم، أو الحكم القضائي أو حكم التحكيم المراد تنفيذه."}, {"en": "Debtor identification details: name and national ID or commercial registration number, plus any known addresses, phone numbers or information about the debtor's business and assets.", "ar": "بيانات تحديد المدين: الاسم ورقم الهوية الوطنية أو السجل التجاري، وأي عناوين أو أرقام هاتف معروفة أو معلومات عن نشاط المدين وأصوله."}, {"en": "Your identity documents: national ID or Iqama for individuals; commercial registration and authorized-signatory documents for companies.", "ar": "وثائق هويتك: الهوية الوطنية أو الإقامة للأفراد؛ والسجل التجاري ووثائق المفوّض بالتوقيع للشركات."}, {"en": "A power of attorney (وكالة) authorizing our licensed lawyers to act on your behalf — we guide you through issuing it electronically via Najiz in minutes.", "ar": "وكالة تُخوّل محامينا المرخّصين التصرّف نيابةً عنك — ونرشدك إلى إصدارها إلكترونيًا عبر ناجز خلال دقائق."}],
    deliverables: [{"en": "A written recovery strategy and legal assessment of your claim, followed by formal demand letters and, where achieved, a binding documented settlement agreement.", "ar": "استراتيجية تحصيل مكتوبة وتقييم قانوني لمطالبتك، تليها خطابات مطالبة رسمية، واتفاقية تسوية موثّقة وملزمة متى تحققت التسوية."}, {"en": "A filed and actively managed enforcement file on Najiz — the enforcement request, the enforcement order (قرار 34), and petitions for court-ordered measures — with regular status reports at every stage.", "ar": "ملف تنفيذ مقدَّم ومُدار بفاعلية عبر ناجز — طلب التنفيذ وأمر التنفيذ (قرار 34) وطلبات الإجراءات التي تأمر بها المحكمة — مع تقارير دورية عن الحالة في كل مرحلة."}, {"en": "Follow-up through to actual disbursement: tracking of frozen funds, seizures and installment payments until the collected amounts reach your account, with a final reconciliation and closure report.", "ar": "متابعة حتى الصرف الفعلي: رصد المبالغ المجمّدة والحجوزات ودفعات التقسيط حتى وصول المبالغ المحصَّلة إلى حسابك، مع تقرير ختامي بالمطابقة وإقفال الملف."}],
    timeline: {"en": "Amicable collection typically takes two to six weeks. For executable documents, the enforcement order (قرار 34) is often issued within days of filing on Najiz, and the debtor is given five days from notification to pay; coercive measures and actual collection typically follow over one to six months, depending on the debtor's response and assets. Claims requiring litigation first take longer — often several months to a final judgment. All timelines depend on the case and are confirmed by your consultant.", "ar": "يستغرق التحصيل الودّي عادةً ما بين أسبوعين وستة أسابيع. وبالنسبة إلى السندات التنفيذية، كثيرًا ما يصدر أمر التنفيذ (قرار 34) خلال أيام من التقديم عبر ناجز، ويُمهل المدين خمسة أيام من تبليغه للسداد؛ وتتلو ذلك الإجراءات الجبرية والتحصيل الفعلي خلال شهر إلى ستة أشهر عادةً، تبعًا لاستجابة المدين وأصوله. أما المطالبات التي تستلزم التقاضي أولًا فتستغرق مدة أطول — غالبًا عدة أشهر حتى صدور حكم نهائي. وتظل جميع المدد مرهونة بظروف القضية ويؤكدها مستشارك."},
    bestFor: {"en": "Companies and individuals in Saudi Arabia holding documented debts — promissory notes, cheques, notarized contracts, unpaid invoices or judgments already won — who want licensed Saudi lawyers to pursue collection professionally, from amicable demand through enforcement-court measures, until the money is actually recovered.", "ar": "الشركات والأفراد في المملكة العربية السعودية ممن لديهم ديون موثّقة — سندات لأمر أو شيكات أو عقود موثّقة أو فواتير غير مسدّدة أو أحكام سبق كسبها — ويرغبون في أن يتولّى محامون سعوديون مرخّصون التحصيل باحترافية، من المطالبة الودّية إلى إجراءات محكمة التنفيذ، حتى استرداد المال فعليًا."},
    supportType: {"en": "End-to-end debt recovery handled on your behalf by licensed Saudi lawyers through Omnera One: assessment, demand and negotiation, Najiz enforcement filings, litigation where needed, follow-up of court-ordered measures, and collection tracking until disbursement — with a dedicated consultant keeping you informed throughout.", "ar": "تحصيل ديون متكامل يتولّاه نيابةً عنك محامون سعوديون مرخّصون من خلال Omnera One: التقييم، والمطالبة والتفاوض، وتقديم طلبات التنفيذ عبر ناجز، والتقاضي عند الحاجة، ومتابعة الإجراءات التي تأمر بها المحكمة، وتتبّع التحصيل حتى الصرف — مع مستشار مخصّص يُبقيك على اطّلاع طوال المسار."},
    faqs: [{ q: {"en": "Which documents can go directly to the enforcement court without a lawsuit?", "ar": "ما المستندات التي يمكن التوجّه بها مباشرة إلى محكمة التنفيذ دون رفع دعوى؟"}, a: {"en": "Executable documents (السندات التنفيذية) under the Saudi Enforcement Law include final court judgments and orders, arbitral awards, commercial papers such as promissory notes (السندات لأمر) and cheques, notarized contracts and documents, and documented settlement agreements. These are filed directly with the enforcement court through Najiz. If your debt rests only on invoices or an ordinary contract, a court judgment is usually needed first — we handle that litigation too, then carry the judgment into enforcement.", "ar": "تشمل السندات التنفيذية وفق نظام التنفيذ السعودي الأحكامَ والأوامر القضائية النهائية، وأحكام التحكيم، والأوراق التجارية كالسندات لأمر والشيكات، والعقود والمحررات الموثّقة، واتفاقيات الصلح الموثّقة. وتُقدَّم هذه مباشرة إلى محكمة التنفيذ عبر ناجز. أما إذا كان دينك قائمًا على فواتير أو عقد عادي فقط، فيلزم عادةً استصدار حكم قضائي أولًا — ونتولّى هذا التقاضي أيضًا، ثم ننقل الحكم إلى مرحلة التنفيذ."} }, { q: {"en": "What happens after the enforcement order (قرار 34) if the debtor still refuses to pay?", "ar": "ماذا يحدث بعد أمر التنفيذ (قرار 34) إذا استمر المدين في الامتناع عن السداد؟"}, a: {"en": "Once the debtor is notified and the five-day period lapses without payment, we petition the enforcement judge for the coercive measures provided by the Enforcement Law: a travel ban, suspension of government services, disclosure and freezing of bank accounts, and seizure and judicial sale of assets. In cases of proven procrastination, the law also allows stronger sanctions. All of these measures are ordered and executed by the court itself — our role is to request them, monitor their execution and keep the file moving.", "ar": "متى بُلّغ المدين وانقضت مهلة الأيام الخمسة دون سداد، طلبنا من قاضي التنفيذ اتخاذ الإجراءات الجبرية المقرّرة في نظام التنفيذ: المنع من السفر، وإيقاف الخدمات الحكومية، والإفصاح عن الحسابات البنكية وتجميدها، والحجز على الأموال وبيعها قضائيًا. وفي حالات المماطلة الثابتة يجيز النظام عقوبات أشد. وجميع هذه الإجراءات تأمر بها المحكمة وتنفّذها بنفسها — ودورنا هو طلبها ومراقبة تنفيذها وإبقاء الملف متحركًا."} }, { q: {"en": "Can you guarantee that I will recover my money?", "ar": "هل يمكنكم ضمان استرداد أموالي؟"}, a: {"en": "No — and no honest firm can. Enforcement outcomes depend on the case and, above all, on the debtor's assets: even a strong executable document against a debtor with no traceable funds may yield slow or partial recovery. What we do commit to is disciplined execution: a realistic assessment before you spend, correct filings, persistent follow-up of every court-ordered measure, and clear reporting so you always know where the file stands.", "ar": "لا — ولا يستطيع ذلك أي مكتب أمين. فنتائج التنفيذ تتوقف على ظروف القضية، وقبل كل شيء على أصول المدين: فحتى السند التنفيذي القوي ضد مدين بلا أموال ظاهرة قد يُسفر عن تحصيل بطيء أو جزئي. أما ما نلتزم به فهو الانضباط في الأداء: تقييم واقعي قبل أن تُنفق، وتقديم صحيح للطلبات، ومتابعة دؤوبة لكل إجراء تأمر به المحكمة، وتقارير واضحة تجعلك دائمًا على علم بموقف الملف."} }, { q: {"en": "I already won a judgment in another case — can you handle just the enforcement?", "ar": "سبق أن كسبتُ حكمًا في قضية أخرى — فهل يمكنكم تولّي التنفيذ فقط؟"}, a: {"en": "Yes. Enforcement of existing judgments is a core part of this service. We take judgments from the commercial courts (المحاكم التجارية), labor courts (المحاكم العمالية) or general courts — whether won through us or another firm — verify they are final and enforceable, file the enforcement request on Najiz, and follow the file through court-ordered measures until collection. The same applies to arbitral awards and documented settlement agreements the other party has breached.", "ar": "نعم. فتنفيذ الأحكام القائمة جزء أساسي من هذه الخدمة. نتسلّم الأحكام الصادرة عن المحاكم التجارية أو المحاكم العمالية أو المحاكم العامة — سواء كُسبت عن طريقنا أو عن طريق مكتب آخر — ونتحقق من نهائيتها وقابليتها للتنفيذ، ثم نقدّم طلب التنفيذ عبر ناجز، ونتابع الملف عبر الإجراءات التي تأمر بها المحكمة حتى التحصيل. وينطبق الأمر ذاته على أحكام التحكيم واتفاقيات الصلح الموثّقة التي أخلّ بها الطرف الآخر."} }, { q: {"en": "Is it better to negotiate a settlement or go straight to the enforcement court?", "ar": "أيهما أفضل: التفاوض على تسوية أم التوجّه مباشرة إلى محكمة التنفيذ؟"}, a: {"en": "It depends on the case. A negotiated settlement is typically faster, cheaper and preserves commercial relationships — and we document it so it becomes enforceable if breached. Going straight to enforcement suits debtors who have ignored repeated demands or are showing signs of concealing or dissipating assets. Often the strongest approach is both: filing on Najiz creates real pressure that brings a previously silent debtor to the negotiating table. Your consultant will recommend the sequence that fits your documents, the amounts involved and the debtor's behavior.", "ar": "يعتمد ذلك على ظروف القضية. فالتسوية التفاوضية أسرع وأقل كلفة عادةً وتحفظ العلاقات التجارية — ونوثّقها بحيث تصبح قابلة للتنفيذ عند الإخلال. أما التوجّه المباشر إلى التنفيذ فيناسب المدين الذي تجاهل المطالبات المتكررة أو ظهرت عليه بوادر إخفاء أصوله أو تصفيتها. وكثيرًا ما يكون الجمع بينهما هو الأقوى: فتقديم الطلب عبر ناجز يولّد ضغطًا حقيقيًا يدفع مدينًا كان صامتًا إلى طاولة التفاوض. وسيوصيك مستشارك بالتسلسل الملائم لمستنداتك وحجم المبالغ وسلوك المدين."} }],
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
