import { NextRequest, NextResponse } from "next/server";
import { setLeadStatus, type LeadStatus } from "@/lib/leads";
import { isAuthed } from "@/lib/dashboard-auth";

export const dynamic = "force-dynamic";

const VALID: LeadStatus[] = ["new", "contacted", "won", "lost"];

/** Protected: update a lead's status. */
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthed())) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const status = String(body.status || "") as LeadStatus;
  if (!VALID.includes(status)) {
    return NextResponse.json({ error: "invalid_status" }, { status: 400 });
  }
  const ok = await setLeadStatus(id, status);
  return NextResponse.json({ ok }, { status: ok ? 200 : 404 });
}
