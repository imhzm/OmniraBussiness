import { NextRequest, NextResponse } from "next/server";
import { appendLead, readLeads } from "@/lib/leads";
import { isAuthed } from "@/lib/dashboard-auth";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

/** Trim + hard-cap a field so a bot can't bloat the store with huge payloads. */
const cap = (v: unknown, n: number) => String(v ?? "").trim().slice(0, n) || undefined;

/** Public: capture a lead from the site forms. */
export async function POST(req: NextRequest) {
  try {
    // Reject oversized bodies outright.
    const len = Number(req.headers.get("content-length") || 0);
    if (len > 20_000) return NextResponse.json({ error: "too_large" }, { status: 413 });

    // Spam protection: 8 submissions per 10 minutes per IP.
    const gate = rateLimit(`lead:${clientIp(req)}`, 8, 10 * 60_000);
    if (!gate.ok) {
      return NextResponse.json(
        { error: "too_many_requests" },
        { status: 429, headers: { "Retry-After": String(gate.retryAfter) } },
      );
    }

    const body = await req.json().catch(() => ({}));

    // Honeypot — bots fill hidden fields; drop silently.
    if (body.company_website || body.website_url) return NextResponse.json({ ok: true });

    const name = cap(body.fullName || body.name, 120);
    const phone = cap(body.phone, 40);
    const email = cap(body.email, 160);
    if (!name && !phone && !email) {
      return NextResponse.json({ error: "empty" }, { status: 400 });
    }

    await appendLead({
      name: name || "—",
      company: cap(body.companyName || body.company, 120),
      email,
      phone,
      service: cap(body.selectedService || body.service, 120),
      city: cap(body.city, 80),
      preferred: cap(body.preferred, 40),
      message: cap(body.message, 4000),
      locale: cap(body.locale, 5),
      source: cap(body.source, 40) || "contact-form",
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }
}

/** Protected: list all leads for the dashboard. */
export async function GET() {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const leads = await readLeads();
  return NextResponse.json({ leads });
}
