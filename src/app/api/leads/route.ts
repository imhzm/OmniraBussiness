import { NextRequest, NextResponse } from "next/server";
import { appendLead, readLeads } from "@/lib/leads";
import { isAuthed } from "@/lib/dashboard-auth";

export const dynamic = "force-dynamic";

/** Public: capture a lead from the site forms. */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => ({}));

    // Honeypot — bots fill hidden fields; drop silently.
    if (body.company_website || body.website_url) return NextResponse.json({ ok: true });

    const name = String(body.fullName || body.name || "").trim();
    const phone = String(body.phone || "").trim();
    const email = String(body.email || "").trim();
    if (!name && !phone && !email) {
      return NextResponse.json({ error: "empty" }, { status: 400 });
    }

    await appendLead({
      name: name || "—",
      company: String(body.companyName || body.company || "").trim() || undefined,
      email: email || undefined,
      phone: phone || undefined,
      service: String(body.selectedService || body.service || "").trim() || undefined,
      city: String(body.city || "").trim() || undefined,
      preferred: String(body.preferred || "").trim() || undefined,
      message: String(body.message || "").trim() || undefined,
      locale: String(body.locale || "").trim() || undefined,
      source: String(body.source || "contact-form").trim().slice(0, 40),
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
