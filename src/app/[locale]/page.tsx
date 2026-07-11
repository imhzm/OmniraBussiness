import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { AchievementStats } from "@/components/sections/AchievementStats";
import { TrustBar } from "@/components/sections/TrustBar";
import { MarketOverview } from "@/components/sections/MarketOverview";
import { TargetCountries } from "@/components/sections/TargetCountries";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SetupJourney } from "@/components/sections/SetupJourney";
import { HowToOrder } from "@/components/sections/HowToOrder";
import { StartFromZero } from "@/components/sections/StartFromZero";
import { GovernmentPlatforms } from "@/components/sections/GovernmentPlatforms";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { EventsLibrary } from "@/components/sections/EventsLibrary";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { CalculatorCTA } from "@/components/sections/CalculatorCTA";
import { CostEstimation } from "@/components/sections/CostEstimation";
import { FreeCostStudy } from "@/components/sections/FreeCostStudy";
import { ServiceCoverage } from "@/components/sections/ServiceCoverage";
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
      <AchievementStats locale={l} />
      <TrustBar locale={l} />
      <MarketOverview locale={l} />
      <TargetCountries locale={l} />
      <ServicesPreview locale={l} />
      <SetupJourney locale={l} />
      <StartFromZero locale={l} />
      <GovernmentPlatforms locale={l} />
      <SectorsGrid locale={l} />
      <EventsLibrary locale={l} />
      <ArticlesSection locale={l} />
      <HowToOrder locale={l} />
      <PricingPreview locale={l} />
      <CalculatorCTA locale={l} />
      <CostEstimation locale={l} />
      <FreeCostStudy locale={l} />
      <ServiceCoverage locale={l} />
      <FinalCTA locale={l} />
    </>
  );
}
