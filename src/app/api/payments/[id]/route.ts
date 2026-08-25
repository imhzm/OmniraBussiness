import { NextRequest, NextResponse } from 'next/server';
import {
  getPaymentLink,
  updatePaymentLink,
  deletePaymentLink,
  addPaymentNote,
} from '@/lib/payments/store';
import { isAuthed } from '@/lib/dashboard-auth';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const link = await getPaymentLink(id);
  if (!link) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  return NextResponse.json({ ok: true, link });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 });
  }

  if (typeof body.addNote === 'string' && body.addNote.trim()) {
    const updated = await addPaymentNote(id, body.addNote.trim());
    return NextResponse.json({ ok: Boolean(updated), link: updated });
  }

  const patch: Parameters<typeof updatePaymentLink>[1] = {};
  if (typeof body.title === 'string') patch.title = body.title.trim();
  if (typeof body.description === 'string' || body.description === null) {
    patch.description = body.description ? String(body.description).trim() : undefined;
  }
  if (body.amount !== undefined) {
    const amt = Number(body.amount);
    if (!Number.isFinite(amt) || amt <= 0) {
      return NextResponse.json({ ok: false, error: 'invalid_amount' }, { status: 422 });
    }
    patch.amount = amt;
  }
  if (typeof body.customerName === 'string') patch.customerName = body.customerName.trim();
  if (typeof body.customerPhone === 'string') patch.customerPhone = body.customerPhone.trim();
  if (typeof body.customerEmail === 'string') patch.customerEmail = body.customerEmail.trim();
  if (typeof body.reference === 'string') patch.reference = body.reference.trim();
  if (typeof body.status === 'string') {
    const validStatuses = ['pending', 'paid', 'failed', 'cancelled'] as const;
    if (validStatuses.includes(body.status as (typeof validStatuses)[number])) {
      patch.status = body.status as (typeof validStatuses)[number];
    }
  }

  const updated = await updatePaymentLink(id, patch);
  if (!updated) return NextResponse.json({ ok: false, error: 'not_found' }, { status: 404 });
  return NextResponse.json({ ok: true, link: updated });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 });
  }
  const { id } = await params;
  const ok = await deletePaymentLink(id);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 });
}
