import type { Metadata } from "next";
import { isLocale, type L, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { localeHref, t } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/ui/PageHero";
import { CostCalculator } from "@/components/sections/CostCalculator";
import { PricingCard } from "@/components/sections/PricingPreview";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { pricingFaqs, pricingPackages } from "@/data/pricing";

const HEADING: L = {
  en: "What will it cost to launch your business?",
  ar: "كم تكلفة إطلاق عملك؟",
};
const SUBTEXT: L = {
  en: "Get an indicative budget in a few steps — MISA and Commercial Registration, office, visas, compliance, and typical monthly operations. Tailored to your activity, structure, and team size. Guidance only; an Omnera One advisor can confirm figures for your case.",
  ar: "احصل على ميزانية إرشادية في خطوات — ترخيص الاستثمار والسجل التجاري، المكتب، التأشيرات، الامتثال، والتشغيل الشهري المعتاد. مخصّصة حسب نشاطك وشكلك القانوني وحجم فريقك. إرشاد فقط؛ مستشار Omnera One يؤكد الأرقام لحالتك.",
};

const infoCards: { q: L; a: L }[] = [
  {
    q: { en: "What affects company setup cost in Saudi Arabia?", ar: "ما الذي يؤثر على تكلفة تأسيس الشركة في السعودية؟" },
    a: {
      en: "Cost depends on your business activity, legal structure, ownership profile, workforce and visas, and office type. Government fees (MISA, Commercial Registration, municipality) are only part of the picture — professional, operational, and compliance costs often represent a significant share of year-one spend.",
      ar: "تعتمد التكلفة على نشاطك وشكلك القانوني ونمط الملكية والقوى العاملة والتأشيرات ونوع المكتب. الرسوم الحكومية (الاستثمار، السجل التجاري، البلدية) جزء فقط من الصورة — الأتعاب والتكاليف التشغيلية والامتثال غالبًا تمثل حصة كبيرة من إنفاق السنة الأولى.",
    },
  },
  {
    q: { en: "Foreign investor requirements", ar: "متطلبات المستثمر الأجنبي" },
    a: {
      en: "Foreign investors typically require MISA licensing and may face additional documentation, attestation, and timeline steps. Ownership rules vary by activity — many sectors allow 100% foreign ownership; others require a local partner or additional approvals.",
      ar: "يحتاج المستثمر الأجنبي عادةً إلى ترخيص الاستثمار (MISA) وقد يواجه خطوات مستندات وتصديق ومدة إضافية. تختلف قواعد الملكية حسب النشاط — كثير من القطاعات تتيح ملكية أجنبية 100%، وبعضها يتطلب شريكًا محليًا أو موافقات إضافية.",
    },
  },
  {
    q: { en: "Office requirements explained", ar: "متطلبات المكتب موضّحة" },
    a: {
      en: "Office solutions range from a virtual address and coworking to private offices and HQ floors. Your choice affects setup cost, ongoing rent, and how authorities view your operational presence in the Kingdom.",
      ar: "تتنوع حلول المكاتب من العنوان الافتراضي ومساحات العمل المشتركة إلى المكاتب الخاصة والمقرات الكاملة. يؤثر اختيارك على تكلفة التأسيس والإيجار المستمر وكيف تنظر الجهات لوجودك التشغيلي في المملكة.",
    },
  },
  {
    q: { en: "MISA licensing fees", ar: "رسوم ترخيص الاستثمار" },
    a: {
      en: "MISA fees depend on investment type, activity, and structure. Branch and Regional HQ routes have a different fee profile than a standard LLC. Our calculator uses indicative ranges aligned with current public guidance.",
      ar: "تعتمد رسوم الاستثمار على نوع الاستثمار والنشاط والشكل القانوني. مسارات الفرع والمقر الإقليمي لها هيكل رسوم مختلف عن الشركة ذات المسؤولية المحدودة. حاسبتنا تستخدم نطاقات إرشادية متوافقة مع الإرشادات العامة الحالية.",
    },
  },
  {
    q: { en: "Hidden operational costs", ar: "تكاليف تشغيلية خفية" },
    a: {
      en: "Beyond registration: VAT, accounting, payroll (Qiwa / GOSI), PRO services, legal review, bank-account opening, and GM / dependent visas. Budget for monthly compliance and renewal cycles — not only the initial setup invoice.",
      ar: "بعد التسجيل: ضريبة القيمة المضافة، المحاسبة، الرواتب (قوى/التأمينات)، خدمات المعقّب، المراجعة القانونية، فتح الحساب البنكي، وتأشيرات المدير والمرافقين. خصّص ميزانية للامتثال الشهري ودورات التجديد — وليس فقط فاتورة التأسيس الأولى.",
    },
  },
  {
    q: { en: "How long does registration take?", ar: "كم تستغرق مدة التسجيل؟" },
    a: {
      en: "A Saudi-owned LLC may complete in a few weeks when documentation is ready. Foreign-investor and complex structures often take 4–8 weeks depending on activity, approvals, and third-party processing times.",
      ar: "الشركة المملوكة سعوديًا قد تكتمل في أسابيع عند جاهزية المستندات. مسارات المستثمر الأجنبي والهياكل المعقّدة غالبًا تستغرق 4–8 أسابيع حسب النشاط والموافقات وأوقات معالجة الأطراف الأخرى.",
    },
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  return pageMetadata({
    locale: l,
    title: t(HEADING, l),
    description: t(SUBTEXT, l),
    path: "/business-setup-cost-calculator",
  });
}

export default async function CostCalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const ar = l === "ar";
  const dict = getDict(l);
  const setupPackages = pricingPackages.filter((p) => p.group === "setup");

  return (
    <>
      <PageHero
        locale={l}
        dark
        crumbs={[
          { label: dict.nav.home, href: "/" },
          { label: dict.nav.pricing, href: "/pricing" },
          { label: ar ? "حاسبة التكلفة" : "Cost calculator" },
        ]}
        eyebrow={ar ? "السعودية · تأسيس الشركات" : "Saudi Arabia · Company setup"}
        title={t(HEADING, l)}
        text={t(SUBTEXT, l)}
      />

      {/* CTA row */}
      <section className="border-b border-line bg-white py-6">
        <div className="container-x flex flex-wrap gap-3">
          <Button href="#calculator" size="lg">
            {ar ? "احسب تكلفة التأسيس" : "Calculate my setup cost"}
          </Button>
          <Button href={localeHref(l, "/contact")} variant="secondary" size="lg">
            {ar ? "كلّم مستشارًا" : "Speak to an advisor"}
          </Button>
        </div>
      </section>

      {/* Understanding setup costs */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-navy lg:text-3xl">
            {ar ? "فهم تكاليف التأسيس في السعودية" : "Understanding setup costs in Saudi Arabia"}
          </h2>
          <div className="mt-7 grid gap-4 md:grid-cols-2">
            {infoCards.map((c, i) => (
              <article key={i} className="rounded-2xl border border-line bg-white p-5 shadow-card">
                <h3 className="text-base font-bold text-navy">{t(c.q, l)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{t(c.a, l)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="scroll-mt-24 bg-ivory/40 py-12 lg:py-16">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              {ar ? "حاسبة التكلفة" : "Cost calculator"}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy lg:text-3xl">
              {ar ? "احسب تكلفة تأسيسك في 6 خطوات" : "Estimate your setup cost in 6 steps"}
            </h2>
          </div>
          <div className="mt-8">
            <CostCalculator locale={l} />
          </div>
        </div>
      </section>

      {/* Our setup packages */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <h2 className="text-2xl font-bold text-navy lg:text-3xl">
            {ar ? "باقات التأسيس الثابتة" : "Our fixed setup packages"}
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
            {ar
              ? "باقات تأسيس بسعر ثابت لمرة واحدة وخدمات منصّات. استخدم الحاسبة أعلاه لنطاق مخصّص، أو اختر باقة جاهزة."
              : "Fixed one-time setup packages with platform services. Use the calculator above for a custom range, or choose a package to get started."}
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {setupPackages.map((pkg, i) => (
              <PricingCard key={pkg.id} locale={l} pkg={pkg} delay={i * 60} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-12 lg:py-16">
        <div className="container-x max-w-3xl">
          <h2 className="mb-6 text-2xl font-bold text-navy lg:text-3xl">{dict.pricing.faqTitle}</h2>
          <Accordion items={pricingFaqs.map((faq) => ({ title: t(faq.q, l), content: t(faq.a, l) }))} />
        </div>
      </section>

      <FinalCTA locale={l} />
    </>
  );
}
