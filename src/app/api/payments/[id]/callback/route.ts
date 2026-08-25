import { NextRequest, NextResponse } from 'next/server';
import { getPaymentLink, updatePaymentLink } from '@/lib/payments/store';
import { parseCallbackTrandata } from '@/lib/payments/neoleap';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

function baseUrl(req: NextRequest): string {
  const envUrl = process.env.PAYMENTS_PUBLIC_BASE_URL;
  if (envUrl) return envUrl.replace(/\/$/, '');
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || 'omneraone.com';
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  return `${proto}://${host}`;
}

async function handle(req: NextRequest, { params }: { params: Promise<{ id: string }> }, isGet: boolean) {
  const { id } = await params;
  const origin = baseUrl(req);
  const failRedirect = NextResponse.redirect(`${origin}/ar/pay/${id}?status=failed`, 303);

  const link = await getPaymentLink(id);
  if (!link) return failRedirect;

  if (isGet && req.nextUrl.searchParams.get('error')) {
    await updatePaymentLink(link.id, {
      gatewayStatus: `error_url_hit: ${req.nextUrl.searchParams.get('error')}`,
    });
    return failRedirect;
  }

  let trandataHex = '';

  if (isGet) {
    trandataHex = req.nextUrl.searchParams.get('trandata') || '';
  } else {
    const ctype = req.headers.get('content-type') || '';
    if (ctype.includes('application/x-www-form-urlencoded') || ctype.includes('multipart/form-data')) {
      try {
        const formData = await req.formData();
        const v = formData.get('trandata');
        if (typeof v === 'string') trandataHex = v;
      } catch {
        /* fallback to text */
      }
    }
    if (!trandataHex) {
      try {
        const text = await req.text();
        const params = new URLSearchParams(text);
        trandataHex = params.get('trandata') || '';
        if (!trandataHex) {
          try {
            const j = JSON.parse(text);
            trandataHex = j.trandata || (Array.isArray(j) ? j[0]?.trandata : '') || '';
          } catch {
            /* ignore */
          }
        }
      } catch {
        /* ignore */
      }
    }
  }

  if (!trandataHex) {
    await updatePaymentLink(link.id, { gatewayStatus: 'callback_no_trandata' });
    return failRedirect;
  }

  const result = parseCallbackTrandata(trandataHex);

  // تحقق أمني: trackId المُرجَع يجب أن يطابق رابطنا أو udf1 يطابق معرّف الفاتورة
  const isMatch = result.success && (result.trackId === link.trackId || result.udf1 === link.id);
  if (!isMatch) {
    await updatePaymentLink(link.id, {
      gatewayStatus: `callback_mismatch_or_failed: ${result.rawResult || '?'}`,
    });
    return failRedirect;
  }

  await updatePaymentLink(link.id, {
    status: 'paid',
    paidAt: new Date().toISOString(),
    gatewayStatus: result.rawResult,
    authCode: result.auth,
    bankRef: result.ref,
    paymentId: result.paymentId || undefined,
  });

  return NextResponse.redirect(`${origin}/ar/pay/${link.id}?paid=1`, 303);
}

export async function POST(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  return handle(req, ctx, false);
}

export async function GET(req: NextRequest, ctx: { params: Promise<{ id: string }> }) {
  return handle(req, ctx, true);
}
