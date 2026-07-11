import { redirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { isAuthed } from "@/lib/dashboard-auth";
import { LoginForm } from "@/components/dashboard/LoginForm";

export const dynamic = "force-dynamic";

export const metadata = { title: "Sign in", robots: { index: false, follow: false } };

export default async function DashboardLoginPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  if (await isAuthed()) redirect(`/${l}/dashboard`);
  return <LoginForm locale={l} />;
}
