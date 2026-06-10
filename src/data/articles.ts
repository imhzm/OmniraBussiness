import type { L } from "@/i18n/config";

export type ArticleCategoryId = "guide" | "news" | "insight";

export type ArticleBlock =
  | { type: "h2"; text: L }
  | { type: "p"; text: L }
  | { type: "list"; items: L[] }
  | { type: "quote"; text: L };

export type Article = {
  slug: string;
  category: ArticleCategoryId;
  image: string;
  date: string; // ISO
  readMins: number;
  featured?: boolean;
  title: L;
  excerpt: L;
  body: ArticleBlock[];
  relatedServices: string[];
};

export const articleCategories: { id: ArticleCategoryId | "all"; label: L }[] = [
  { id: "all", label: { en: "All", ar: "الكل" } },
  { id: "guide", label: { en: "Guides", ar: "أدلة" } },
  { id: "news", label: { en: "News", ar: "أخبار" } },
  { id: "insight", label: { en: "Market Insights", ar: "رؤى السوق" } },
];

export const articles: Article[] = [
  {
    slug: "opening-bank-account-ksa",
    category: "guide",
    image: "/images/articles/article-1.webp",
    date: "2026-05-28",
    readMins: 7,
    featured: true,
    title: {
      en: "Step-by-Step: Opening a Corporate Bank Account in Saudi Arabia",
      ar: "خطوة بخطوة: فتح حساب بنكي للشركات في السعودية",
    },
    excerpt: {
      en: "What banks actually ask for, how long it takes, and how to avoid the three most common rejection reasons.",
      ar: "ما الذي تطلبه البنوك فعليًا، وكم تستغرق العملية، وكيف تتجنب أكثر ثلاثة أسباب شيوعًا للرفض.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "A corporate bank account is the last gate between incorporation and real operations. Saudi banks have become faster, but their compliance teams are strict — a well-prepared file is the difference between two weeks and two months.",
          ar: "الحساب البنكي للشركة هو البوابة الأخيرة بين التأسيس والتشغيل الفعلي. أصبحت البنوك السعودية أسرع، لكن فرق الامتثال لديها صارمة — والملف المُعد جيدًا هو الفارق بين أسبوعين وشهرين.",
        },
      },
      { type: "h2", text: { en: "What you'll need", ar: "ما الذي ستحتاجه" } },
      {
        type: "list",
        items: [
          { en: "Commercial Registration and Articles of Association", ar: "السجل التجاري وعقد التأسيس" },
          { en: "MISA license (for foreign-owned entities)", ar: "رخصة الاستثمار (للكيانات المملوكة لأجانب)" },
          { en: "National address and municipality license", ar: "العنوان الوطني والرخصة البلدية" },
          { en: "GM's iqama and authorization (Absher-verified)", ar: "إقامة المدير العام وتفويضه الموثق عبر أبشر" },
          { en: "A simple business plan with expected monthly flows", ar: "خطة عمل مبسطة بالتدفقات الشهرية المتوقعة" },
        ],
      },
      { type: "h2", text: { en: "The process", ar: "خطوات العملية" } },
      {
        type: "p",
        text: {
          en: "Apply digitally first — most banks now accept online onboarding for companies. Compliance review follows (1–4 weeks), sometimes with an interview or an office visit. Once approved, the IBAN is issued and you activate digital banking with your GM's Absher identity.",
          ar: "ابدأ بالتقديم الرقمي — معظم البنوك تتيح اليوم فتح حسابات الشركات إلكترونيًا. تلي ذلك مراجعة الامتثال (1–4 أسابيع)، وقد تشمل مقابلة أو زيارة للمكتب. بعد الموافقة يصدر الآيبان وتُفعّل الخدمات الرقمية بهوية المدير العام في أبشر.",
        },
      },
      { type: "h2", text: { en: "The three most common rejection reasons", ar: "أكثر ثلاثة أسباب شيوعًا للرفض" } },
      {
        type: "list",
        items: [
          { en: "Activity mismatch between the CR and the described business", ar: "اختلاف النشاط بين السجل التجاري ووصف الأعمال" },
          { en: "Unclear ownership chain for foreign shareholders", ar: "سلسلة ملكية غير واضحة للشركاء الأجانب" },
          { en: "GM without valid iqama or proper authorization", ar: "مدير عام بلا إقامة سارية أو تفويض صحيح" },
        ],
      },
      {
        type: "quote",
        text: {
          en: "Banks don't reject companies — they reject unclear files. Clarity is a deliverable, and it can be prepared.",
          ar: "البنوك لا ترفض الشركات — بل ترفض الملفات غير الواضحة. والوضوح مخرجٌ يمكن إعداده مسبقًا.",
        },
      },
    ],
    relatedServices: ["business-setup", "accounting-services"],
  },
  {
    slug: "zakat-compliance-businesses",
    category: "guide",
    image: "/images/articles/article-2.webp",
    date: "2026-05-15",
    readMins: 6,
    title: {
      en: "Understanding ZAKAT Compliance for Businesses",
      ar: "فهم الامتثال الزكوي للشركات",
    },
    excerpt: {
      en: "Who pays ZAKAT, how the base is calculated, and the deadlines that catch new companies off guard.",
      ar: "من يخضع للزكاة، وكيف يُحسب الوعاء الزكوي، والمواعيد التي تفاجئ الشركات الجديدة.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "ZAKAT is a religious levy administered as a formal tax by ZATCA. Saudi- and GCC-owned shares pay ZAKAT at 2.5% of the ZAKAT base; non-GCC shares pay corporate income tax at 20% instead. Mixed companies file both, proportionally.",
          ar: "الزكاة فريضة تُدار كالتزام نظامي عبر هيئة الزكاة والضريبة والجمارك. الحصص السعودية والخليجية تخضع للزكاة بنسبة 2.5% من الوعاء، بينما تخضع الحصص غير الخليجية لضريبة دخل 20%. والشركات المختلطة تقدم الاثنين بالتناسب.",
        },
      },
      { type: "h2", text: { en: "How the ZAKAT base works", ar: "كيف يُحسب الوعاء الزكوي" } },
      {
        type: "p",
        text: {
          en: "The base is broadly: equity + loans financing zakatable assets − fixed assets and similar deductions. It is not simply 2.5% of profit — companies with low profits can still owe meaningful ZAKAT if their equity is large.",
          ar: "الوعاء تقريبًا: حقوق الملكية + القروض الممولة لأصول زكوية − الأصول الثابتة وما يماثلها من الحسومات. فهو ليس 2.5% من الربح ببساطة — فقد تستحق شركات بأرباح منخفضة زكاة معتبرة إذا كانت حقوق ملكيتها كبيرة.",
        },
      },
      { type: "h2", text: { en: "Key deadlines", ar: "المواعيد الأساسية" } },
      {
        type: "list",
        items: [
          { en: "ZAKAT return: within 120 days of fiscal year-end", ar: "الإقرار الزكوي: خلال 120 يومًا من نهاية السنة المالية" },
          { en: "VAT returns: monthly or quarterly by revenue size", ar: "إقرارات القيمة المضافة: شهرية أو ربع سنوية حسب حجم الإيرادات" },
          { en: "ZAKAT certificate renewal — required for government contracts and payouts", ar: "تجديد شهادة الزكاة — مطلوبة للعقود الحكومية وصرف المستحقات" },
        ],
      },
      {
        type: "quote",
        text: {
          en: "An expired ZAKAT certificate can freeze government receivables overnight. Renewal is a calendar item, not an afterthought.",
          ar: "انتهاء شهادة الزكاة قد يجمّد مستحقاتك الحكومية بين ليلة وضحاها. تجديدها بند في التقويم، لا فكرة لاحقة.",
        },
      },
    ],
    relatedServices: ["zakat-tax", "accounting-services"],
  },
  {
    slug: "new-commercial-registration-rules",
    category: "news",
    image: "/images/articles/article-3.webp",
    date: "2026-04-22",
    readMins: 4,
    title: {
      en: "New Commercial Registration Rules: One CR Nationwide",
      ar: "نظام السجل التجاري الجديد: سجل واحد لكل المملكة",
    },
    excerpt: {
      en: "The updated Commercial Register Law removes subsidiary CRs per city — here's what existing companies must do.",
      ar: "نظام السجل التجاري المحدّث يلغي السجلات الفرعية لكل مدينة — إليك ما يجب على الشركات القائمة فعله.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Under the updated Commercial Register Law, a single commercial registration is now valid across all regions of the Kingdom — companies no longer need a separate subsidiary CR for each city where they operate.",
          ar: "بموجب نظام السجل التجاري المحدّث، أصبح السجل التجاري الواحد ساريًا في جميع مناطق المملكة — فلم تعد الشركات بحاجة لسجل فرعي مستقل لكل مدينة تعمل فيها.",
        },
      },
      { type: "h2", text: { en: "What changes for existing companies", ar: "ما الذي يتغير للشركات القائمة" } },
      {
        type: "list",
        items: [
          { en: "Subsidiary registrations must be consolidated into the main CR within the transition period", ar: "يجب ضم السجلات الفرعية إلى السجل الرئيسي خلال الفترة الانتقالية" },
          { en: "The CR no longer has an expiry date — replaced by annual data confirmation", ar: "لم يعد للسجل تاريخ انتهاء — واستُبدل بتأكيد سنوي للبيانات" },
          { en: "Trade-name rules were liberalized, including reserved family and English names", ar: "تحررت قواعد الأسماء التجارية، بما يشمل الأسماء العائلية والإنجليزية" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Our take: the change cuts real administrative cost for multi-city operators, but the annual confirmation is a new compliance item — miss it and the CR can be suspended. Add it to your compliance calendar now.",
          ar: "رأينا: هذا التغيير يخفّض تكلفة إدارية حقيقية على الشركات متعددة المدن، لكن التأكيد السنوي بند امتثال جديد — إغفاله قد يؤدي لتعليق السجل. أضفه إلى تقويم الامتثال لديك الآن.",
        },
      },
    ],
    relatedServices: ["business-setup", "consultation"],
  },
  {
    slug: "saudi-fdi-momentum",
    category: "insight",
    image: "/images/articles/article-4.webp",
    date: "2026-04-02",
    readMins: 5,
    title: {
      en: "Saudi FDI Momentum: What the Numbers Tell Investors",
      ar: "زخم الاستثمار الأجنبي في السعودية: ماذا تقول الأرقام للمستثمرين",
    },
    excerpt: {
      en: "Investment licenses keep climbing and regional HQs keep landing in Riyadh. A data-driven look at where capital is flowing.",
      ar: "تراخيص الاستثمار تواصل الصعود والمقرات الإقليمية تتوالى على الرياض. قراءة بالأرقام لاتجاهات تدفق رؤوس الأموال.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Saudi Arabia's FDI story is no longer a promise — it's a trend line. Investment licenses issued by MISA have multiplied since 2021, and more than 600 international companies have licensed regional headquarters in Riyadh under the RHQ program.",
          ar: "لم تعد قصة الاستثمار الأجنبي في السعودية وعدًا — بل خط اتجاه واضح. فقد تضاعفت تراخيص الاستثمار الصادرة عن وزارة الاستثمار منذ 2021، ورخّصت أكثر من 600 شركة عالمية مقرات إقليمية لها في الرياض ضمن برنامج المقرات الإقليمية.",
        },
      },
      { type: "h2", text: { en: "Where capital is flowing", ar: "أين تتدفق رؤوس الأموال" } },
      {
        type: "list",
        items: [
          { en: "Technology & cloud: hyperscaler regions and AI infrastructure", ar: "التقنية والسحابة: مناطق مزودي الحوسبة الكبرى وبنية الذكاء الاصطناعي" },
          { en: "Manufacturing: localization incentives under Made in Saudi", ar: "التصنيع: حوافز التوطين ضمن «صنع في السعودية»" },
          { en: "Tourism & entertainment: giga-project supply chains", ar: "السياحة والترفيه: سلاسل إمداد المشاريع العملاقة" },
        ],
      },
      { type: "h2", text: { en: "What it means for new entrants", ar: "ماذا يعني ذلك للداخلين الجدد" } },
      {
        type: "p",
        text: {
          en: "Competition for licenses is not the constraint — speed of compliance is. Companies that arrive with clean structures, clear ownership chains, and realistic Saudization plans consistently license faster and win government work sooner.",
          ar: "المنافسة على التراخيص ليست العائق — بل سرعة الامتثال. الشركات التي تصل بهياكل نظيفة وسلاسل ملكية واضحة وخطط توطين واقعية تحصل على تراخيصها أسرع وتفوز بالأعمال الحكومية أبكر.",
        },
      },
    ],
    relatedServices: ["consultation", "business-setup"],
  },
  {
    slug: "nitaqat-saudization-guide",
    category: "guide",
    image: "/images/articles/article-5.webp",
    date: "2026-03-18",
    readMins: 6,
    title: {
      en: "Nitaqat Explained: Planning Saudization Before You Hire",
      ar: "نطاقات ببساطة: خطط للسعودة قبل أن توظف",
    },
    excerpt: {
      en: "Your Saudization band decides your visa quota. Plan the ratio before your first hire, not after a blocked visa request.",
      ar: "نطاق السعودة يحدد حصتك من التأشيرات. خطط للنسبة قبل أول تعيين، لا بعد رفض طلب التأشيرة.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Nitaqat classifies companies into bands (Red to Platinum) based on the share of Saudi employees, weighted by sector and company size. Your band controls what matters most to growing companies: new work visas, transfers of sponsorship, and access to some government services.",
          ar: "يصنف برنامج نطاقات المنشآت في فئات (من الأحمر إلى البلاتيني) وفق نسبة الموظفين السعوديين، موزونة حسب القطاع وحجم المنشأة. ونطاقك يتحكم في أهم ما يحتاجه النمو: التأشيرات الجديدة، ونقل الكفالات، والوصول لبعض الخدمات الحكومية.",
        },
      },
      { type: "h2", text: { en: "Practical planning rules", ar: "قواعد عملية للتخطيط" } },
      {
        type: "list",
        items: [
          { en: "Hire your first Saudi employees early — small companies move bands with single hires", ar: "وظّف سعوديين مبكرًا — المنشآت الصغيرة تنتقل بين النطاقات بتعيينات قليلة" },
          { en: "Register salaries correctly on GOSI and Mudad; unregistered staff don't count", ar: "سجّل الرواتب بشكل صحيح في التأمينات ومُدد؛ فالموظف غير المسجل لا يُحتسب" },
          { en: "Check profession-specific nationalization rules (HR, accounting, sales…)", ar: "راجع قرارات توطين المهن (الموارد البشرية والمحاسبة والمبيعات…)" },
        ],
      },
      {
        type: "quote",
        text: {
          en: "Treat Saudization as workforce strategy, not as a fine to avoid — the companies that do hire better and scale faster.",
          ar: "تعامل مع السعودة كاستراتيجية قوى عاملة لا كغرامة تتجنبها — فالشركات التي تفعل ذلك توظف أفضل وتنمو أسرع.",
        },
      },
    ],
    relatedServices: ["visa-issuance", "consultation"],
  },
  {
    slug: "premium-residency-which-track",
    category: "news",
    image: "/images/articles/article-6.webp",
    date: "2026-02-25",
    readMins: 5,
    title: {
      en: "Premium Residency: Choosing Between the Five Tracks",
      ar: "الإقامة المميزة: كيف تختار بين المسارات الخمسة",
    },
    excerpt: {
      en: "Investor, Talent, Real Estate, Limited, or Unlimited — a quick decision matrix for each profile.",
      ar: "مستثمر، موهبة، مالك عقار، محدودة أو غير محدودة — مصفوفة قرار سريعة لكل حالة.",
    },
    body: [
      {
        type: "p",
        text: {
          en: "Since the expansion of the Premium Residency program, applicants choose between five tracks. The right one depends on what you can evidence today — capital, property, or credentials.",
          ar: "منذ توسعة برنامج الإقامة المميزة، يختار المتقدمون بين خمسة مسارات. والمسار الأنسب يعتمد على ما يمكنك إثباته اليوم — رأس مال أو عقار أو مؤهلات.",
        },
      },
      { type: "h2", text: { en: "The quick matrix", ar: "المصفوفة السريعة" } },
      {
        type: "list",
        items: [
          { en: "Investor track — you'll invest in a licensed Saudi entity and hold shares", ar: "مسار المستثمر — ستستثمر في كيان سعودي مرخص وتملك حصصًا" },
          { en: "Real Estate track — you own (or will own) residential property above the threshold", ar: "مسار مالك العقار — تملك أو ستملك عقارًا سكنيًا فوق الحد المطلوب" },
          { en: "Talent track — exceptional professionals in health, science, and culture", ar: "مسار الموهبة — للكفاءات الاستثنائية في الصحة والعلوم والثقافة" },
          { en: "Limited / Unlimited — financial solvency routes, annual or lifetime", ar: "المحدودة / غير المحدودة — مسارا الملاءة المالية، سنوي أو دائم" },
        ],
      },
      {
        type: "p",
        text: {
          en: "Families are included across tracks, and holders sponsor themselves. For most founders we assess, the Investor track paired with a new Saudi entity is the fastest credible route.",
          ar: "تشمل جميع المسارات أفراد العائلة، ويكفل حاملها نفسه بنفسه. ولمعظم المؤسسين الذين نقيّمهم، يكون مسار المستثمر مع كيان سعودي جديد هو الطريق الأسرع والأكثر موثوقية.",
        },
      },
    ],
    relatedServices: ["premium-residency", "business-setup"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
