import { redirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { isAuthed } from "@/lib/dashboard-auth";
import { LeadsDashboard } from "@/components/dashboard/LeadsDashboard";

export const dynamic = "force-dynamic";

export const metadata = { title: "Leads", robots: { index: false, follow: false } };

export default async function DashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  if (!(await isAuthed())) redirect(`/${l}/dashboard/login`);
  return <LeadsDashboard locale={l} />;
}
