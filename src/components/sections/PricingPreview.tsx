import {
  packageServiceGroups,
  packageSpecs,
  pricingPackages,
  type PricingPackage,
} from "@/data/pricing";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function PricingCard({
  locale,
  pkg,
  delay = 0,
}: {
  locale: Locale;
  pkg: PricingPackage;
  delay?: number;
}) {
  const dict = getDict(locale);
  const isCustom = pkg.price === null;

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-2xl border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
          pkg.recommended
            ? "border-gold shadow-gold ring-1 ring-gold/40"
            : "border-line shadow-card"
        )}
      >
        {pkg.recommended && (
          <span className="absolute -top-3.5 start-6 rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy shadow-gold">
            {dict.common.mostPopular}
          </span>
        )}
        <h3 className="text-lg font-bold text-navy">{t(pkg.name, locale)}</h3>
        <p className="mt-1 text-sm text-muted">{t(pkg.description, locale)}</p>

        <div className="mt-5 flex items-baseline gap-2">
          {isCustom ? (
            <span className="text-3xl font-bold text-navy">{dict.common.customQuote}</span>
          ) : (
            <>
              <span className="text-4xl font-bold tracking-tight text-navy">
                {pkg.price!.toLocaleString("en-US")}
              </span>
              <span className="text-sm font-semibold text-muted">
                {dict.common.sar} ·{" "}
                {pkg.period === "monthly"
                  ? locale === "ar"
                    ? "شهريًا"
                    : "/month"
                  : pkg.period === "yearly"
                    ? locale === "ar"
                      ? "/ سنة"
                      : "/year"
                    : dict.common.oneTime}
              </span>
            </>
          )}
        </div>

        {pkg.priceNote && (
          <p className="mt-2 text-xs font-semibold text-gold-dark">
            {t(pkg.priceNote, locale)}
          </p>
        )}

        {pkg.highlight && (
          <p className="mt-3 rounded-xl border border-gold/30 bg-gold-faint px-4 py-2 text-xs font-bold text-gold-dark">
            {t(pkg.highlight, locale)}
          </p>
        )}

        <p className="mt-4 rounded-xl bg-ivory px-4 py-2.5 text-xs font-semibold text-muted">
          {dict.pricing.idealFor}: <span className="text-navy">{t(pkg.idealFor, locale)}</span>
        </p>

        {packageSpecs[pkg.id] && (
          <div className="mt-4 grid grid-cols-2 gap-x-3 gap-y-2 rounded-xl border border-line bg-ivory/50 p-3">
            {packageSpecs[pkg.id].map((s, i) => (
              <div key={i} className="flex items-baseline gap-1.5 text-xs leading-snug">
                <span className="font-bold text-gold-dark" aria-hidden>
                  +
                </span>
                <span>
                  <span className="text-muted">{t(s.label, locale)}: </span>
                  <span className="font-bold text-navy">{t(s.value, locale)}</span>
                </span>
              </div>
            ))}
          </div>
        )}

        {(() => {
          const groups = packageServiceGroups[pkg.id];
          if (!groups) {
            return (
              <ul className="mt-5 flex-1 space-y-2.5">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
                    <Icon name="check-circle-2" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
                    {t(feature, locale)}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <div className="mt-5 flex-1">
              <p className="mb-1.5 flex items-center gap-1.5 text-xs font-bold text-navy">
                <Icon name="badge-check" className="h-4 w-4 text-gold-dark" />
                {locale === "ar"
                  ? "الخدمات المشمولة — اضغط للتفاصيل"
                  : "Included services — tap for details"}
              </p>
              <div className="border-t border-line">
                {groups.map((g, i) =>
                  g.locked ? (
                    <div
                      key={i}
                      className="flex items-center gap-2 border-b border-line py-2.5 text-sm text-faint"
                    >
                      <Icon name="minus" className="h-4 w-4 shrink-0" />
                      <span className="font-semibold">{t(g.title, locale)}</span>
                      <span className="ms-auto rounded-md bg-ivory px-2 py-0.5 text-[0.65rem] font-bold text-muted">
                        {locale === "ar" ? "في الباقات الأعلى" : "Higher plans"}
                      </span>
                    </div>
                  ) : (
                    <details key={i} className="group border-b border-line">
                      <summary className="flex cursor-pointer list-none items-center gap-2 py-2.5 text-sm font-semibold text-ink [&::-webkit-details-marker]:hidden">
                        <Icon name="check-circle-2" className="h-4 w-4 shrink-0 text-gold-dark" />
                        <span>{t(g.title, locale)}</span>
                        <Icon
                          name="chevron-down"
                          className="ms-auto h-4 w-4 shrink-0 text-muted transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>
                      {g.items && (
                        <ul className="space-y-1.5 pb-2.5 ps-6">
                          {g.items.map((it, j) => (
                            <li
                              key={j}
                              className="relative ps-3 text-xs leading-relaxed text-muted before:absolute before:start-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-gold-dark"
                            >
                              {t(it, locale)}
                            </li>
                          ))}
                        </ul>
                      )}
                    </details>
                  )
                )}
              </div>
            </div>
          );
        })()}

        <Button
          href={localeHref(locale, "/contact")}
          variant={pkg.recommended ? "primary" : "secondary"}
          className="mt-6 w-full"
        >
          {isCustom ? dict.common.contactUs : dict.common.getStarted}
        </Button>
      </div>
    </Reveal>
  );
}

export function PricingPreview({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const setupPackages = pricingPackages.filter((p) => p.group === "setup");

  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        <SectionHeader
          eyebrow={dict.nav.pricing}
          title={dict.home.pricingTitle}
          text={dict.home.pricingText}
          action={{ label: dict.home.viewAllPackages, href: localeHref(locale, "/pricing") }}
        />
        <div className="grid gap-5 pt-4 sm:grid-cols-2 xl:grid-cols-4">
          {setupPackages.map((pkg, i) => (
            <PricingCard key={pkg.id} locale={locale} pkg={pkg} delay={i * 80} />
          ))}
          <BuildPlanCard locale={locale} />
        </div>
      </div>
    </section>
  );
}

function BuildPlanCard({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const ar = locale === "ar";
  const features = ar
    ? [
        "اختر المنصات اللي تحتاجها فقط",
        "حدّد عدد موظفيك وفروعك",
        "سعرك السنوي يظهر فورًا",
        "بدون باقات ثابتة — مرونة كاملة",
      ]
    : [
        "Choose only the platforms you need",
        "Set your team and branch count",
        "See your annual price instantly",
        "No fixed tiers — full flexibility",
      ];
  return (
    <Reveal delay={240} className="h-full">
      <div className="relative flex h-full flex-col rounded-2xl border border-gold/50 bg-gold-faint/40 p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
        <span className="absolute -top-3.5 start-6 rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy shadow-gold">
          {ar ? "مرن" : "Flexible"}
        </span>
        <h3 className="text-lg font-bold text-navy">{ar ? "صمّم باقتك" : "Build your plan"}</h3>
        <p className="mt-1 text-sm text-muted">
          {ar ? "ادفع للخدمات اللي تحتاجها بس." : "Pay only for the services you need."}
        </p>

        <div className="mt-5 flex items-baseline gap-2">
          <span className="text-sm font-semibold text-muted">{ar ? "من" : "from"}</span>
          <span className="text-4xl font-bold tracking-tight text-navy">4,800</span>
          <span className="text-sm font-semibold text-muted">
            {dict.common.sar} · {ar ? "/ سنة" : "/year"}
          </span>
        </div>
        <p className="mt-2 text-xs font-semibold text-gold-dark">
          {ar ? "سعر فوري حسب اختيارك" : "Instant price by your selection"}
        </p>

        <p className="mt-4 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-muted">
          {dict.pricing.idealFor}:{" "}
          <span className="text-navy">
            {ar ? "من يريد الدفع لما يحتاجه فقط" : "Anyone who wants to pay only for what they use"}
          </span>
        </p>

        <ul className="mt-5 flex-1 space-y-2.5">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
              <Icon name="check-circle-2" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              {f}
            </li>
          ))}
        </ul>

        <Button href={localeHref(locale, "/pricing#build")} variant="primary" className="mt-6 w-full" arrow>
          {ar ? "صمّمها الآن" : "Build it now"}
        </Button>
      </div>
    </Reveal>
  );
}
