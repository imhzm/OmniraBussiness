import {
  packageServiceGroups,
  packageSpecs,
  pricingPackages,
  type PricingPackage,
} from "@/data/pricing";
import Link from "next/link";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { cn, localeHref, t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PricingOrderButton } from "@/components/payments/PricingOrderButton";
import { PaymentMethodsGrid } from "@/components/payments/PaymentBadges";

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
  const dark = !!pkg.recommended;

  return (
    <Reveal delay={delay} className="h-full">
      <div
        className={cn(
          "relative flex h-full flex-col rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
          dark
            ? "border-navy bg-navy-gradient text-white shadow-card-hover ring-1 ring-gold/30 lg:-translate-y-2"
            : "border-line bg-white shadow-card"
        )}
      >
        {pkg.recommended && (
          <span className="absolute -top-3.5 start-6 rounded-full bg-gold px-4 py-1 text-xs font-bold text-navy shadow-gold">
            {dict.common.mostPopular}
          </span>
        )}
        <h3 className={cn("text-lg font-bold", dark ? "text-white" : "text-navy")}>{t(pkg.name, locale)}</h3>
        <p className={cn("mt-1 text-sm", dark ? "text-white/70" : "text-muted")}>{t(pkg.description, locale)}</p>

        <div className="mt-5 flex items-baseline gap-2">
          {isCustom ? (
            <span className={cn("text-3xl font-bold", dark ? "text-white" : "text-navy")}>{dict.common.customQuote}</span>
          ) : (
            <>
              <span className={cn("text-4xl font-bold tracking-tight", dark ? "text-white" : "text-navy")}>
                {pkg.price!.toLocaleString("en-US")}
              </span>
              <span className={cn("text-sm font-semibold", dark ? "text-white/60" : "text-muted")}>
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

        {!isCustom && (
          <p className={cn("mt-1 text-[11px] font-medium", dark ? "text-white/60" : "text-muted")}>
            {locale === "ar" ? "(الأسعار غير شاملة ضريبة القيمة المضافة 15%)" : "(Prices exclude 15% VAT)"}
          </p>
        )}

        {pkg.priceNote && (
          <p className={cn("mt-2 text-xs font-semibold", dark ? "text-gold-soft" : "text-gold-dark")}>
            {t(pkg.priceNote, locale)}
          </p>
        )}

        {pkg.highlight && (
          <p
            className={cn(
              "mt-3 rounded-xl border px-4 py-2 text-xs font-bold",
              dark
                ? "border-gold/40 bg-gold/15 text-gold-soft"
                : "border-gold/30 bg-gold-faint text-gold-dark"
            )}
          >
            {t(pkg.highlight, locale)}
          </p>
        )}

        <p
          className={cn(
            "mt-4 rounded-xl px-4 py-2.5 text-xs font-semibold",
            dark ? "bg-white/10 text-white/70" : "bg-ivory text-muted"
          )}
        >
          {dict.pricing.idealFor}:{" "}
          <span className={dark ? "text-white" : "text-navy"}>{t(pkg.idealFor, locale)}</span>
        </p>

        {packageSpecs[pkg.id] && (
          <div
            className={cn(
              "mt-4 grid grid-cols-2 gap-x-3 gap-y-2 rounded-xl border p-3",
              dark ? "border-white/10 bg-white/5" : "border-line bg-ivory/50"
            )}
          >
            {packageSpecs[pkg.id].map((s, i) => (
              <div key={i} className="flex items-baseline gap-1.5 text-xs leading-snug">
                <span className={cn("font-bold", dark ? "text-gold-soft" : "text-gold-dark")} aria-hidden>
                  +
                </span>
                <span>
                  <span className={dark ? "text-white/60" : "text-muted"}>{t(s.label, locale)}: </span>
                  <span className={cn("font-bold", dark ? "text-white" : "text-navy")}>{t(s.value, locale)}</span>
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
                  <li key={i} className={cn("flex items-start gap-2.5 text-sm", dark ? "text-white/85" : "text-ink")}>
                    <Icon
                      name="check-circle-2"
                      className={cn("mt-0.5 h-4 w-4 shrink-0", dark ? "text-gold-soft" : "text-gold-dark")}
                    />
                    {t(feature, locale)}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <div className="mt-5 flex-1">
              <p className={cn("mb-1.5 flex items-center gap-1.5 text-xs font-bold", dark ? "text-white" : "text-navy")}>
                <Icon name="badge-check" className={cn("h-4 w-4", dark ? "text-gold-soft" : "text-gold-dark")} />
                {locale === "ar"
                  ? "الخدمات المشمولة — اضغط للتفاصيل"
                  : "Included services — tap for details"}
              </p>
              <div className={cn("border-t", dark ? "border-white/15" : "border-line")}>
                {groups.map((g, i) =>
                  g.locked ? (
                    <div
                      key={i}
                      className={cn(
                        "flex items-center gap-2 border-b py-2.5 text-sm",
                        dark ? "border-white/10 text-white/40" : "border-line text-faint"
                      )}
                    >
                      <Icon name="minus" className="h-4 w-4 shrink-0" />
                      <span className="font-semibold">{t(g.title, locale)}</span>
                      <span
                        className={cn(
                          "ms-auto rounded-md px-2 py-0.5 text-[0.65rem] font-bold",
                          dark ? "bg-white/10 text-white/60" : "bg-ivory text-muted"
                        )}
                      >
                        {locale === "ar" ? "في الباقات الأعلى" : "Higher plans"}
                      </span>
                    </div>
                  ) : (
                    <details key={i} className={cn("group border-b", dark ? "border-white/10" : "border-line")}>
                      <summary
                        className={cn(
                          "flex cursor-pointer list-none items-center gap-2 py-2.5 text-sm font-semibold [&::-webkit-details-marker]:hidden",
                          dark ? "text-white/85" : "text-ink"
                        )}
                      >
                        <Icon name="check-circle-2" className={cn("h-4 w-4 shrink-0", dark ? "text-gold-soft" : "text-gold-dark")} />
                        <span>{t(g.title, locale)}</span>
                        <Icon
                          name="chevron-down"
                          className={cn(
                            "ms-auto h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180",
                            dark ? "text-white/50" : "text-muted"
                          )}
                        />
                      </summary>
                      {g.items && (
                        <ul className="space-y-1.5 pb-2.5 ps-6">
                          {g.items.map((it, j) => (
                            <li
                              key={j}
                              className={cn(
                                "relative ps-3 text-xs leading-relaxed before:absolute before:start-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full",
                                dark ? "text-white/60 before:bg-gold-soft" : "text-muted before:bg-gold-dark"
                              )}
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

        <PricingOrderButton
          serviceTitle={t(pkg.name, locale)}
          amount={pkg.price}
          locale={locale}
          description={t(pkg.description, locale)}
          variant={pkg.recommended ? "primary" : "secondary"}
          className="mt-6 w-full"
          label={isCustom ? dict.common.contactUs : (locale === "ar" ? "احجز وسدد الآن" : "Book & Pay Online")}
        />

        {!isCustom && (
          <div className="mt-3 flex items-center justify-center gap-1 opacity-70 scale-90">
            <PaymentMethodsGrid />
          </div>
        )}
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
          center
          eyebrow={dict.nav.pricing}
          title={dict.home.pricingTitle}
          text={dict.home.pricingText}
        />
        <div className="grid gap-5 pt-4 md:grid-cols-3">
          {setupPackages.map((pkg, i) => (
            <PricingCard key={pkg.id} locale={locale} pkg={pkg} delay={i * 80} />
          ))}
        </div>

        <AddonsCard locale={locale} />
      </div>
    </section>
  );
}

function AddonsCard({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const services = [
    {
      slug: "employee-insurance",
      icon: "heart-pulse",
      label: ar ? "تأمين الموظفين" : "Employee insurance",
      desc: ar ? "تأمين طبي وفق متطلبات مجلس الضمان الصحي." : "Medical cover per CCHI requirements.",
    },
    {
      slug: "car-insurance",
      icon: "shield-check",
      label: ar ? "تأمين السيارات" : "Car insurance",
      desc: ar ? "تأمين المركبات — ضد الغير أو شامل." : "Vehicle cover — third-party or comprehensive.",
    },
    {
      slug: "vehicle-ownership-transfer",
      icon: "scroll-text",
      label: ar ? "نقل ملكية السيارات" : "Car ownership transfer",
      desc: ar ? "إنهاء إجراءات بيع ونقل ملكية المركبات." : "Complete vehicle sale & title transfer.",
    },
    {
      slug: "traffic-services",
      icon: "map-pin",
      label: ar ? "خدمات المرور" : "Traffic services",
      desc: ar ? "تجديد استمارة، لوحات، مخالفات وغيرها." : "Registration renewal, plates, fines & more.",
    },
    {
      slug: "labor-office-services",
      icon: "briefcase",
      label: ar ? "خدمات مكتب العمل" : "Labor Office services",
      desc: ar ? "رخص عمل، نطاقات، توثيق عقود عبر قوى." : "Work permits, Nitaqat & contracts via Qiwa.",
    },
    {
      slug: "jawazat-services",
      icon: "plane",
      label: ar ? "خدمات الجوازات" : "Jawazat services",
      desc: ar ? "إقامات، خروج وعودة، نقل كفالة ومرافقين." : "Iqamas, exit/re-entry, sponsorship transfer.",
    },
  ];
  return (
    <Reveal delay={120}>
      <div className="mt-6 rounded-2xl border border-line bg-ivory/50 p-6 lg:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-dark">
              {ar ? "عند الطلب" : "On demand"}
            </p>
            <h3 className="mt-1.5 text-xl font-bold text-navy lg:text-2xl">
              {ar ? "خدمات إضافية تطلبها لوحدها" : "Additional services, à la carte"}
            </h3>
            <p className="mt-1 text-sm text-muted">
              {ar ? "اطلب أي خدمة بمفردها — من غير باقة." : "Order any single service — no package required."}
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5">
            <Button href={localeHref(locale, "/pricing#build")} variant="secondary">
              {ar ? "صمّم باقتك" : "Build your plan"}
            </Button>
            <Button href={localeHref(locale, "/contact")} arrow>
              {ar ? "اطلب الخدمة" : "Request a service"}
            </Button>
          </div>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={localeHref(locale, `/services/${s.slug}`)}
              className="group flex items-start gap-3 rounded-xl border border-line bg-white p-4 transition-colors hover:border-gold/50 hover:shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-faint text-gold-dark transition-colors group-hover:bg-gold group-hover:text-navy">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-navy transition-colors group-hover:text-gold-dark">
                  {s.label}
                </span>
                <span className="mt-0.5 block text-xs leading-snug text-muted">{s.desc}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
