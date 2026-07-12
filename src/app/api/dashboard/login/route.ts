import { NextRequest, NextResponse } from "next/server";
import { checkPassword, makeToken, COOKIE_NAME, cookieOptions, passwordConfigured } from "@/lib/dashboard-auth";
import { rateLimit, clientIp } from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  // Brute-force protection: 5 attempts per 15 minutes per IP.
  const gate = rateLimit(`login:${clientIp(req)}`, 5, 15 * 60_000);
  if (!gate.ok) {
    return NextResponse.json(
      { error: "too_many_attempts" },
      { status: 429, headers: { "Retry-After": String(gate.retryAfter) } },
    );
  }

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
