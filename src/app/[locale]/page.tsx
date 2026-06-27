import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { MarketOverview } from "@/components/sections/MarketOverview";
import { TargetCountries } from "@/components/sections/TargetCountries";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { BusinessSetupProcess } from "@/components/sections/BusinessSetupProcess";
import { GovernmentPlatforms } from "@/components/sections/GovernmentPlatforms";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { EventsLibrary } from "@/components/sections/EventsLibrary";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { BuildYourPlan } from "@/components/sections/BuildYourPlan";
import { CostEstimation } from "@/components/sections/CostEstimation";
import { FinalCTA } from "@/components/sections/FinalCTA";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  const dict = getDict(l);
  return pageMetadata({
    locale: l,
    title: dict.home.heroTitle,
    description: dict.home.heroText,
    path: "/",
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";

  return (
    <>
      <Hero locale={l} />
      <TrustBar locale={l} />
      <MarketOverview locale={l} />
      <TargetCountries locale={l} />
      <ServicesPreview locale={l} />
      <BusinessSetupProcess locale={l} />
      <GovernmentPlatforms locale={l} />
      <SectorsGrid locale={l} />
      <EventsLibrary locale={l} />
      <ArticlesSection locale={l} />
      <PricingPreview locale={l} />

      <section className="bg-ivory/40 py-14 lg:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-dark">
              {l === "ar" ? "صمّم باقتك" : "Build your plan"}
            </p>
            <h2 className="mt-2 text-2xl font-bold text-navy lg:text-3xl">
              {l === "ar"
                ? "اختر خدماتك وعدد موظفيك — ونعطيك السعر"
                : "Pick your services and team size — get your price"}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {l === "ar"
                ? "مش محتاج كل المنصات؟ اختر اللي تحتاجه بس، حدّد عدد موظفيك وفروعك، وشوف سعرك السنوي فورًا."
                : "Don't need every platform? Select only what you need, set your team and branches, and see your annual price instantly."}
            </p>
          </div>
          <div className="mt-8">
            <BuildYourPlan locale={l} />
          </div>
        </div>
      </section>

      <CostEstimation locale={l} />
      <FinalCTA locale={l} />
    </>
  );
}
