import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { AchievementStats } from "@/components/sections/AchievementStats";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { SetupJourney } from "@/components/sections/SetupJourney";
import { GovernmentPlatforms } from "@/components/sections/GovernmentPlatforms";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
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

  // Homepage mirrors the reference layout, section-for-section, with our own content.
  return (
    <>
      <Hero locale={l} />
      <AchievementStats locale={l} />
      <ServicesPreview locale={l} />
      <SetupJourney locale={l} />
      <GovernmentPlatforms locale={l} />
      <SectorsGrid locale={l} />
      <ArticlesSection locale={l} />
      <PricingPreview locale={l} />
      <CalculatorSection locale={l} />
      <FinalCTA locale={l} />
    </>
  );
}
