import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getPublicPayment } from '@/lib/payments/store';
import PayClient from './PayClient';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}): Promise<Metadata> {
  const { id, locale } = await params;
  const p = await getPublicPayment(id);
  if (!p) return { title: locale === 'en' ? 'Invoice Not Found' : 'الفاتورة غير موجودة' };
  const isEn = locale === 'en';
  return {
    title: isEn ? `Invoice: ${p.title}` : `فاتورة دفع: ${p.title}`,
    description: isEn
      ? `Secure payment portal for Omnera One — ${p.title}`
      : `بوابة الدفع الآمنة لـ Omnera One — ${p.title}`,
    robots: { index: false, follow: false },
  };
}

export default async function PaymentPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { id, locale } = await params;
  const payment = await getPublicPayment(id);
  if (!payment) notFound();

  return <PayClient payment={payment} locale={locale} />;
}
