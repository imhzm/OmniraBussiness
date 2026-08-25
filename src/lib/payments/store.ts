import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import type { PaymentLink, CreatePaymentLinkInput } from './types';

/**
 * مخزن روابط الدفع — JSON file + mutex + atomic rename.
 * البيانات تعيش في data/payments.json خارج شجرة git فلا يمسحها الـdeploy.
 */

const DATA_DIR =
  process.env.PAYMENTS_DATA_DIR ||
  process.env.LEADS_DATA_DIR ||
  (process.env.LEADS_FILE ? path.dirname(process.env.LEADS_FILE) : path.join(process.cwd(), 'data'));
const FILE = path.join(DATA_DIR, 'payments.json');

let writeChain: Promise<unknown> = Promise.resolve();
function withLock<T>(fn: () => Promise<T>): Promise<T> {
  const run = writeChain.then(fn, fn);
  writeChain = run.then(
    () => undefined,
    () => undefined,
  );
  return run;
}

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

async function readRaw(): Promise<PaymentLink[]> {
  try {
    const buf = await fs.readFile(FILE, 'utf8');
    const parsed = JSON.parse(buf);
    return Array.isArray(parsed) ? (parsed as PaymentLink[]) : [];
  } catch (e: unknown) {
    if ((e as NodeJS.ErrnoException).code === 'ENOENT') return [];
    throw e;
  }
}

async function writeRaw(links: PaymentLink[]) {
  await ensureDir();
  const tmp = `${FILE}.${process.pid}.${Date.now()}.tmp`;
  await fs.writeFile(tmp, JSON.stringify(links, null, 2), 'utf8');
  await fs.rename(tmp, FILE);
}

export async function listPaymentLinks(): Promise<PaymentLink[]> {
  const links = await readRaw();
  return links.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export async function getPaymentLink(id: string): Promise<PaymentLink | null> {
  const links = await readRaw();
  return links.find((p) => p.id === id) ?? null;
}

/** للصفحة العامة — بدون أي بيانات داخلية */
export async function getPublicPayment(id: string) {
  const p = await getPaymentLink(id);
  if (!p) return null;
  return {
    id: p.id,
    title: p.title,
    description: p.description || undefined,
    amount: p.amount,
    status: p.status,
    createdAt: p.createdAt,
    paidAt: p.paidAt,
    customerName: p.customerName,
    reference: p.reference,
  };
}

function genTrackId(): string {
  const t = Date.now().toString(36).toUpperCase();
  const r = crypto.randomBytes(3).toString('hex').toUpperCase();
  return `OMN-${t}-${r}`;
}

export async function createPaymentLink(input: CreatePaymentLinkInput): Promise<PaymentLink> {
  const now = new Date().toISOString();
  const link: PaymentLink = {
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    title: input.title.trim(),
    description: input.description?.trim() || undefined,
    amount: Math.round(Number(input.amount) * 100) / 100,
    customerName: input.customerName?.trim() || undefined,
    customerPhone: input.customerPhone?.trim() || undefined,
    customerEmail: input.customerEmail?.trim() || undefined,
    reference: input.reference?.trim() || undefined,
    trackId: genTrackId(),
    status: 'pending',
    gatewayStatus: undefined,
    paymentId: undefined,
    authCode: undefined,
    bankRef: undefined,
    notes: [],
  };
  await withLock(async () => {
    const links = await readRaw();
    links.push(link);
    await writeRaw(links);
  });
  return link;
}

export type PaymentPatch = Partial<
  Pick<
    PaymentLink,
    | 'title'
    | 'description'
    | 'amount'
    | 'customerName'
    | 'customerPhone'
    | 'customerEmail'
    | 'reference'
    | 'trackId'
    | 'status'
    | 'gatewayStatus'
    | 'paymentId'
    | 'authCode'
    | 'bankRef'
    | 'paidAt'
    | 'paymentUrlSnapshot'
  >
>;

export async function updatePaymentLink(id: string, patch: PaymentPatch): Promise<PaymentLink | null> {
  let updated: PaymentLink | null = null;
  await withLock(async () => {
    const links = await readRaw();
    const idx = links.findIndex((p) => p.id === id);
    if (idx === -1) return;
    updated = {
      ...links[idx],
      ...patch,
      updatedAt: new Date().toISOString(),
    };
    if (patch.amount !== undefined) updated.amount = Math.round(patch.amount * 100) / 100;
    links[idx] = updated;
    await writeRaw(links);
  });
  return updated;
}

export async function deletePaymentLink(id: string): Promise<boolean> {
  let deleted = false;
  await withLock(async () => {
    const links = await readRaw();
    const filtered = links.filter((p) => p.id !== id);
    if (filtered.length !== links.length) {
      deleted = true;
      await writeRaw(filtered);
    }
  });
  return deleted;
}

export async function addPaymentNote(id: string, text: string): Promise<PaymentLink | null> {
  let updated: PaymentLink | null = null;
  await withLock(async () => {
    const links = await readRaw();
    const p = links.find((x) => x.id === id);
    if (!p) return;
    p.notes = p.notes || [];
    p.notes.push({ at: new Date().toISOString(), text: text.trim() });
    p.updatedAt = new Date().toISOString();
    updated = p;
    await writeRaw(links);
  });
  return updated;
}
