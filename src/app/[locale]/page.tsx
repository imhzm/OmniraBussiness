import type { Metadata } from "next";
import { isLocale, type Locale } from "@/i18n/config";
import { getDict } from "@/i18n/dictionary";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { MarketOverview } from "@/components/sections/MarketOverview";
import { ServicesPreview } from "@/components/sections/ServicesPreview";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { GovernmentPlatforms } from "@/components/sections/GovernmentPlatforms";
import { SectorsGrid } from "@/components/sections/SectorsGrid";
import { EventsLibrary } from "@/components/sections/EventsLibrary";
import { ArticlesSection } from "@/components/sections/ArticlesSection";
import { PricingPreview } from "@/components/sections/PricingPreview";
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
      <ServicesPreview locale={l} />
      <ProcessTimeline locale={l} />
      <GovernmentPlatforms locale={l} />
      <SectorsGrid locale={l} />
      <EventsLibrary locale={l} />
      <ArticlesSection locale={l} />
      <PricingPreview locale={l} />
      <FinalCTA locale={l} />
    </>
  );
}
