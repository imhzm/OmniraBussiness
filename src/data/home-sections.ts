import type { L } from "@/i18n/config";

export type OrderStep = { icon: string; title: L; text: L };

/** "Request your service in 3 steps" — WhatsApp-first ordering flow. */
export const orderFlow = {
  eyebrow: {"en": "In simple steps", "ar": "بخطوات بسيطة"} as L,
  heading: {"en": "Request your service in 3 steps", "ar": "اطلب خدمتك في 3 خطوات"} as L,
  subtext: {"en": "Tell us what you need on WhatsApp, and we handle the rest with the relevant authorities on your behalf.", "ar": "أخبِرنا بما تحتاجه عبر واتساب، ونتولّى الباقي أمام الجهات المختصة نيابةً عنك."} as L,
  ctaLabel: {"en": "Start on WhatsApp", "ar": "ابدأ عبر واتساب"} as L,
  steps: [
    { icon: "message-circle", title: {"en": "Reach out on WhatsApp", "ar": "تواصل معنا عبر واتساب"}, text: {"en": "Message us on WhatsApp and tell us the service you need, whether you are a company or an individual.", "ar": "راسِلنا عبر واتساب وأخبِرنا بالخدمة التي تحتاجها، شركةً كنت أم فرداً."} },
    { icon: "file-text", title: {"en": "We review and quote", "ar": "ندرس حالتك ونحدّد التكلفة"}, text: {"en": "We study your case, provide a clear price, and prepare the required file for you.", "ar": "ندرس حالتك، ونقدّم لك سعراً واضحاً، ونجهّز الملف المطلوب."} },
    { icon: "badge-check", title: {"en": "We execute and follow up", "ar": "ننفّذ ونتابع حتى الإنجاز"}, text: {"en": "We handle the procedures with the authorities on your behalf and follow up until the service is delivered.", "ar": "نتولّى الإجراءات أمام الجهات المختصة نيابةً عنك، ونتابع حتى تسليم الخدمة."} },
  ] as OrderStep[],
};

/** Prominent cost-calculator CTA band. */
export const calculatorCta = {
  eyebrow: {"en": "Cost Calculator", "ar": "حاسبة التكلفة"} as L,
  heading: {"en": "Know the cost of setting up your business in one minute", "ar": "اعرف تكلفة تأسيس نشاطك في دقيقة واحدة"} as L,
  subtext: {"en": "Get a clear, transparent estimate built on the official government fees plus our service fee, with no hidden costs. Tell us what you need, and we handle the rest on your behalf.", "ar": "احصل على تقدير واضح وشفّاف مبني على الرسوم الحكومية الرسمية مضافًا إليها رسوم خدمتنا، من دون أي تكاليف خفية. أخبرنا بما تحتاج إليه، ونتولّى الباقي نيابةً عنك."} as L,
  ctaLabel: {"en": "Calculate your cost now", "ar": "احسب تكلفتك الآن"} as L,
  bullets: [{"en": "Based on the official government fees", "ar": "مبنيّة على الرسوم الحكومية الرسمية"}, {"en": "An instant estimate in under a minute", "ar": "تقدير فوري في أقل من دقيقة"}, {"en": "With no obligation whatsoever", "ar": "من دون أي التزام على الإطلاق"}] as L[],
};
