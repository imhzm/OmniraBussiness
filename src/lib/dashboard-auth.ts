import crypto from "crypto";
import { cookies } from "next/headers";

const SECRET = process.env.DASHBOARD_SECRET || "omnira-dev-secret-change-me";
const PASSWORD = process.env.DASHBOARD_PASSWORD || "";

export const COOKIE_NAME = "omnira_dash";
const MAX_AGE = 60 * 60 * 24 * 14; // 14 days

export function passwordConfigured(): boolean {
  return PASSWORD.length > 0;
}

export function checkPassword(pw: string): boolean {
  if (!PASSWORD) return false;
  const a = Buffer.from(pw);
  const b = Buffer.from(PASSWORD);
  if (a.length !== b.length) return false;
  return crypto.timingSafeEqual(a, b);
}

function sign(payload: string): string {
  return crypto.createHmac("sha256", SECRET).update(payload).digest("hex");
}

export function makeToken(): string {
  const exp = Date.now() + MAX_AGE * 1000;
  const payload = `v1.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [v, exp, sig] = parts;
  const expected = sign(`${v}.${exp}`);
  if (sig.length !== expected.length) return false;
  if (!crypto.timingSafeEqual(Buffer.from(sig), Buffer.from(expected))) return false;
  if (!Number(exp) || Number(exp) < Date.now()) return false;
  return true;
}

export async function isAuthed(): Promise<boolean> {
  const c = await cookies();
  return verifyToken(c.get(COOKIE_NAME)?.value);
}

export const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: MAX_AGE,
};
