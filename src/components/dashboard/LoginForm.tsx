"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import { Icon } from "@/components/ui/Icon";

export function LoginForm({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/dashboard/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        router.replace(`/${locale}/dashboard`);
        router.refresh();
      } else {
        setError(ar ? "كلمة المرور غير صحيحة" : "Incorrect password");
      }
    } catch {
      setError(ar ? "تعذّر الاتصال، حاول مرة أخرى" : "Connection failed, try again");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-gradient p-6">
      <form onSubmit={submit} className="w-full max-w-sm rounded-3xl border border-white/10 bg-white p-8 shadow-mega">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-gold-soft">
            <Icon name="landmark" className="h-6 w-6" />
          </span>
          <div>
            <p className="text-lg font-bold text-navy">Omnera One</p>
            <p className="text-xs text-muted">{ar ? "لوحة إدارة العملاء" : "Leads dashboard"}</p>
          </div>
        </div>

        <h1 className="mt-7 text-xl font-bold text-navy">{ar ? "تسجيل الدخول" : "Sign in"}</h1>
        <p className="mt-1 text-sm text-muted">
          {ar ? "أدخل كلمة المرور للوصول إلى لوحة العملاء." : "Enter the password to access the leads dashboard."}
        </p>

        <label className="mt-6 block">
          <span className="mb-1.5 block text-xs font-semibold text-muted">{ar ? "كلمة المرور" : "Password"}</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            className="h-12 w-full rounded-xl border border-line bg-ivory/40 px-4 text-sm text-navy outline-none transition-colors focus:border-gold focus:bg-white"
            placeholder="••••••••"
          />
        </label>

        {error && (
          <p className="mt-3 flex items-center gap-1.5 text-sm text-red-600">
            <Icon name="shield-check" className="h-4 w-4" />
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading || !password}
          className="btn-sheen mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gold text-sm font-bold text-navy shadow-gold transition-colors hover:bg-gold-dark disabled:opacity-50"
        >
          {loading ? (ar ? "جارٍ الدخول…" : "Signing in…") : ar ? "دخول" : "Sign in"}
        </button>
      </form>
    </div>
  );
}
