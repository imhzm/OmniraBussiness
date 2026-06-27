import type { Locale } from "@/i18n/config";
import { localeHref } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";

export function StartFromZero({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const points = ar
    ? [
        "الترخيص والسجل التجاري",
        "الحساب البنكي للشركة",
        "إدارة كل المنصات الحكومية بعدها",
        "كل ذلك عن بُعد — دون أن تسافر",
      ]
    : [
        "Licence & commercial registration",
        "Corporate bank account",
        "All government platforms managed afterwards",
        "Fully remote — no travel needed",
      ];

  return (
    <section className="py-12 lg:py-16">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-white p-7 shadow-card lg:p-10">
            <span
              className="pointer-events-none absolute inset-y-0 start-0 w-1.5 bg-gold"
              aria-hidden="true"
            />
            <div className="grid items-center gap-8 lg:grid-cols-[1.5fr_1fr]">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
                  {ar ? "ما عندك شركة بعد؟" : "Don't have a company yet?"}
                </p>
                <h2 className="mt-2 text-2xl font-bold leading-tight text-navy lg:text-[2rem]">
                  {ar
                    ? "نؤسّس لك شركتك في السعودية من الصفر"
                    : "We establish your Saudi company from scratch"}
                </h2>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted lg:text-base">
                  {ar
                    ? "ما تحتاج يكون عندك أي شيء مسبقاً — أنت تختار نشاطك، ونحن نتولّى الترخيص والسجل التجاري والحساب البنكي وكل المنصات الحكومية بعدها، بالكامل ونيابةً عنك."
                    : "You don't need anything in place — you pick your activity, and we handle the licence, the commercial registration, the bank account, and every government platform afterwards — fully done for you."}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button href={localeHref(locale, "/services/business-setup")} arrow>
                    {ar ? "ابدأ تأسيس شركتك" : "Start your company"}
                  </Button>
                  <Button href={localeHref(locale, "/contact")} variant="secondary">
                    {ar ? "احجز استشارة مجانية" : "Book a free consultation"}
                  </Button>
                </div>
              </div>

              <ul className="space-y-2.5 rounded-2xl bg-ivory/60 p-5">
                {points.map((p, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm font-semibold text-navy">
                    <Icon name="check-circle-2" className="mt-0.5 h-5 w-5 shrink-0 text-gold-dark" />
                    {p}
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
