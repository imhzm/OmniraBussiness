import { NextRequest, NextResponse } from 'next/server';
import { createPaymentLink, updatePaymentLink } from '@/lib/payments/store';
import { createHostedCheckout, isNeoleapConfigured } from '@/lib/payments/neoleap';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function baseUrl(req: NextRequest): string {
  const envUrl = process.env.PAYMENTS_PUBLIC_BASE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'omneraone.com';
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  return `${proto}://${host}`;
}

export async function POST(req: NextRequest) {
  if (!isNeoleapConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'gateway_not_configured', message: 'بوابة الدفع الإلكتروني غير مهيأة حاليًا' },
      { status: 503 },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  const title = String(body.title || '').trim();
  const amount = Number(body.amount);
  const customerName = String(body.customerName || '').trim();
  const customerPhone = String(body.customerPhone || '').trim();
  const customerEmail = String(body.customerEmail || '').trim();
  const description = body.description ? String(body.description).trim() : undefined;
  const reference = body.reference ? String(body.reference).trim() : undefined;

  if (!title) {
    return NextResponse.json({ ok: false, error: 'title_required', message: 'عنوان الخدمة مطلوب' }, { status: 422 });
  }
  if (!Number.isFinite(amount) || amount <= 0 || amount > 500000) {
    return NextResponse.json({ ok: false, error: 'invalid_amount', message: 'المبلغ غير صالح' }, { status: 422 });
  }
  if (!customerPhone && !customerEmail && !customerName) {
    return NextResponse.json({ ok: false, error: 'contact_required', message: 'يرجى إدخال بيانات التواصل' }, { status: 422 });
  }

  const link = await createPaymentLink({
    title,
    description,
    amount,
    customerName: customerName || undefined,
    customerPhone: customerPhone || undefined,
    customerEmail: customerEmail || undefined,
    reference,
  });

  const origin = baseUrl(req);
  const result = await createHostedCheckout({
    amountSar: link.amount,
    trackId: link.trackId,
    responseUrl: `${origin}/api/payments/${link.id}/callback`,
    errorUrl: `${origin}/api/payments/${link.id}/callback?error=1`,
    lang: 'ar',
    udf1: link.id,
    udf2: link.reference || '',
    udf5: process.env.NEOLEAP_UDF5_LABEL || 'omneraone',
  });

  if (!result.ok || !result.paymentUrl) {
    await updatePaymentLink(link.id, {
      gatewayStatus: `checkout_failed: ${result.rawStatus || result.error || '?'}`,
    });
    return NextResponse.json(
      {
        ok: false,
        error: 'gateway_error',
        message: 'تعذر الاتصال ببوابة الدفع. حاول مرة أخرى.',
        payPageUrl: `/ar/pay/${link.id}`,
      },
      { status: 502 },
    );
  }

  await updatePaymentLink(link.id, {
    paymentId: result.paymentId,
    gatewayStatus: 'initiated',
    paymentUrlSnapshot: result.paymentUrl,
  });

  return NextResponse.json(
    {
      ok: true,
      paymentId: result.paymentId,
      paymentUrl: result.paymentUrl,
      payPageUrl: `/ar/pay/${link.id}`,
    },
    { status: 201 },
  );
}
