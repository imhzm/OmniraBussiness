import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';
import { getPaymentLink, updatePaymentLink } from '@/lib/payments/store';
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

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!isNeoleapConfigured()) {
    return NextResponse.json(
      { ok: false, error: 'gateway_error', detail: 'neoleap_not_configured' },
      { status: 502 },
    );
  }
  const { id } = await params;
  const link = await getPaymentLink(id);
  if (!link) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  if (link.status === 'paid') {
    return NextResponse.json({ ok: false, error: 'already_paid' }, { status: 409 });
  }

  // توليد معرّف معاملة فريد جديد لكل محاولة حتى لا ترفض البوابة الـ trackId المكرر
  const currentTrackId = `OMN-${Date.now()}-${crypto.randomBytes(2).toString('hex').toUpperCase()}`;
  const origin = baseUrl(req);
  const result = await createHostedCheckout({
    amountSar: link.amount,
    trackId: currentTrackId,
    responseUrl: `${origin}/api/payments/${link.id}/callback`,
    errorUrl: `${origin}/api/payments/${link.id}/callback?error=1`,
    lang: 'ar',
    udf1: link.id,
    udf2: link.reference || '',
    udf5: process.env.NEOLEAP_UDF5_LABEL || 'omneraone',
  });

  if (!result.ok || !result.paymentUrl) {
    await updatePaymentLink(link.id, {
      status: link.status === 'pending' ? 'pending' : link.status,
      gatewayStatus: `init_failed: ${result.rawStatus || result.error || '?'}`,
    });
    return NextResponse.json(
      { ok: false, error: 'gateway_error', detail: result.error || result.rawStatus },
      { status: 502 },
    );
  }

  await updatePaymentLink(link.id, {
    trackId: currentTrackId,
    paymentId: result.paymentId,
    gatewayStatus: 'initiated',
    paymentUrlSnapshot: result.paymentUrl,
  });

  return NextResponse.json({ ok: true, paymentUrl: result.paymentUrl });
}
