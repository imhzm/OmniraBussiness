import { redirect } from "next/navigation";
import { isLocale, type Locale } from "@/i18n/config";
import { isAuthed } from "@/lib/dashboard-auth";
import { PaymentsClient } from "./PaymentsClient";

export const dynamic = "force-dynamic";

export const metadata = { title: "روابط الدفع — Omnera One", robots: { index: false, follow: false } };

export default async function PaymentsDashboardPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "ar";
  if (!(await isAuthed())) redirect(`/${l}/dashboard/login`);
  return <PaymentsClient locale={l} />;
}
