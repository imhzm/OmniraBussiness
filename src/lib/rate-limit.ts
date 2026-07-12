/**
 * Tiny in-memory fixed-window rate limiter.
 * The app runs as a single Node process (pm2), so a Map is sufficient and fast.
 */

type Bucket = { count: number; resetAt: number };
const store = new Map<string, Bucket>();
let lastPrune = 0;

function prune(now: number) {
  // Opportunistic cleanup so the map can't grow unbounded.
  if (now - lastPrune < 60_000 && store.size < 5000) return;
  lastPrune = now;
  for (const [k, b] of store) if (b.resetAt < now) store.delete(k);
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number,
): { ok: boolean; retryAfter: number; remaining: number } {
  const now = Date.now();
  prune(now);
  const b = store.get(key);
  if (!b || b.resetAt < now) {
    store.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, retryAfter: 0, remaining: limit - 1 };
  }
  b.count += 1;
  if (b.count > limit) {
    return { ok: false, retryAfter: Math.ceil((b.resetAt - now) / 1000), remaining: 0 };
  }
  return { ok: true, retryAfter: 0, remaining: limit - b.count };
}

/** Client IP behind the nginx reverse proxy. */
export function clientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "unknown";
}
