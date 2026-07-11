import { NextRequest, NextResponse } from "next/server";
import { checkPassword, makeToken, COOKIE_NAME, cookieOptions, passwordConfigured } from "@/lib/dashboard-auth";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  if (!passwordConfigured()) {
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }
  const body = await req.json().catch(() => ({}));
  if (!checkPassword(String(body.password || ""))) {
    return NextResponse.json({ error: "invalid" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(COOKIE_NAME, makeToken(), cookieOptions);
  return res;
}
