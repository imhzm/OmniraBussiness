import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Pattern } from "@/components/ui/Pattern";
import { Reveal } from "@/components/ui/Reveal";

export function FreeCostStudy({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const items = ar
    ? [
        "الرسوم الحكومية السنوية",
        "اشتراكات المنصات الحكومية",
        "تكاليف الموظفين والتأمينات",
        "المصاريف التشغيلية الشهرية",
      ]
    : [
        "Annual government fees",
        "Government platform subscriptions",
        "Staff & insurance costs",
        "Monthly operating expenses",
      ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-gradient p-8 text-white shadow-card lg:p-12">
            <Pattern id="coststudy-pattern" className="absolute inset-0 text-gold opacity-[0.05]" />
            <div
              className="pointer-events-none absolute -end-24 -top-24 h-80 w-80 rounded-full bg-gold/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-gold px-4 py-1.5 text-xs font-bold text-navy shadow-gold">
                  <Icon name="badge-check" className="h-4 w-4" />
                  {ar ? "مجاناً · لفترة محدودة" : "Free · Limited time"}
                </span>
                <h2 className="mt-4 text-2xl font-bold leading-tight lg:text-[2rem]">
                  {ar
                    ? "دراسة كاملة لتكلفة تشغيل شركتك الشهرية"
                    : "A complete study of your company's monthly running costs"}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/75 lg:text-base">
                  {ar
                    ? "نحسب لك بالضبط كم تكلّف شركتك كل شهر — الرسوم الحكومية والمنصات والموظفين والتأمينات والمصاريف التشغيلية — في تقرير مفصّل تستلمه مجانًا. العرض متاح لفترة محدودة."
                    : "We calculate exactly what your company costs every month — government fees, platforms, staff, insurance, and operating expenses — in a detailed report you receive for free. Available for a limited time."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={localeHref(locale, "/contact")} size="lg" arrow>
                    {ar ? "احصل على دراستك المجانية" : "Get your free study"}
                  </Button>
                  <Button
                    href={localeHref(locale, "/business-setup-cost-calculator")}
                    variant="outline-light"
                    size="lg"
                  >
                    {ar ? "جرّب الحاسبة الآن" : "Try the calculator"}
                  </Button>
                </div>
              </div>

              <ul className="grid gap-2.5 rounded-2xl border border-white/10 bg-white/5 p-5">
                {items.map((it, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm font-semibold text-white/90">
                    <Icon name="check-circle-2" className="h-5 w-5 shrink-0 text-gold-soft" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
