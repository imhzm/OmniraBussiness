import { NextRequest, NextResponse } from 'next/server';
import { listPaymentLinks, createPaymentLink } from '@/lib/payments/store';
import { isAuthed } from '@/lib/dashboard-auth';
import type { CreatePaymentLinkInput } from '@/lib/payments/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  const links = await listPaymentLinks();
  return NextResponse.json({ ok: true, links });
}

export async function POST(req: NextRequest) {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  let body: Partial<CreatePaymentLinkInput>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (!body.title || typeof body.title !== 'string' || !body.title.trim()) {
    return NextResponse.json({ ok: false, error: 'title_required' }, { status: 422 });
  }
  const amount = Number(body.amount);
  if (!Number.isFinite(amount) || amount <= 0) {
    return NextResponse.json({ ok: false, error: 'invalid_amount' }, { status: 422 });
  }

  const link = await createPaymentLink({
    title: body.title.trim(),
    description: body.description,
    amount,
    customerName: body.customerName,
    customerPhone: body.customerPhone,
    customerEmail: body.customerEmail,
    reference: body.reference,
  });

  return NextResponse.json({ ok: true, link }, { status: 201 });
}
