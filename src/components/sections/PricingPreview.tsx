import { pricingPackages, type PricingPackage } from "@/data/pricing";
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
                  : dict.common.oneTime}
              </span>
            </>
          )}
        </div>

        <p className="mt-4 rounded-xl bg-ivory px-4 py-2.5 text-xs font-semibold text-muted">
          {dict.pricing.idealFor}: <span className="text-navy">{t(pkg.idealFor, locale)}</span>
        </p>

        <ul className="mt-5 flex-1 space-y-2.5">
          {pkg.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-ink">
              <Icon name="check-circle-2" className="mt-0.5 h-4 w-4 shrink-0 text-gold-dark" />
              {t(feature, locale)}
            </li>
          ))}
        </ul>

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
        </div>
      </div>
    </section>
  );
}
