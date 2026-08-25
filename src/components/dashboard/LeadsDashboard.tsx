"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Locale } from "@/i18n/config";
import type { Lead, LeadStatus } from "@/lib/leads";
import { Icon } from "@/components/ui/Icon";

const POLL_MS = 8000;

/** Normalise a Saudi phone to wa.me digits. */
function waDigits(phone: string): string {
  let d = phone.replace(/\D/g, "");
  if (d.startsWith("00")) d = d.slice(2);
  if (d.startsWith("0")) d = "966" + d.slice(1);
  if (!d.startsWith("966") && d.length <= 9) d = "966" + d;
  return d;
}

const STATUS_META: Record<LeadStatus, { ar: string; en: string; cls: string }> = {
  new: { ar: "جديد", en: "New", cls: "bg-gold/15 text-gold-dark border-gold/30" },
  contacted: { ar: "تم التواصل", en: "Contacted", cls: "bg-blue-50 text-blue-700 border-blue-200" },
  won: { ar: "مكسوب", en: "Won", cls: "bg-green-50 text-green-700 border-green-200" },
  lost: { ar: "خاسر", en: "Lost", cls: "bg-red-50 text-red-600 border-red-200" },
};
const STATUSES: LeadStatus[] = ["new", "contacted", "won", "lost"];

function timeAgo(iso: string, ar: boolean): string {
  const diff = Date.now() - new Date(iso).getTime();
  const m = Math.floor(diff / 60000);
  if (m < 1) return ar ? "الآن" : "just now";
  if (m < 60) return ar ? `منذ ${m} د` : `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return ar ? `منذ ${h} س` : `${h}h ago`;
  const d = Math.floor(h / 24);
  return ar ? `منذ ${d} يوم` : `${d}d ago`;
}

export function LeadsDashboard({ locale }: { locale: Locale }) {
  const ar = locale === "ar";
  const router = useRouter();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [updatedAt, setUpdatedAt] = useState<Date | null>(null);
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<"all" | LeadStatus>("all");
  const [arrivals, setArrivals] = useState(0);
  const knownIds = useRef<Set<string> | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/leads", { cache: "no-store" });
      if (res.status === 401) {
        router.replace(`/${locale}/dashboard/login`);
        return;
      }
      const data = await res.json();
      const list: Lead[] = Array.isArray(data.leads) ? data.leads : [];
      setLeads(list);

      // Detect newly-arrived leads since the last poll (skip the first load).
      const ids = new Set(list.map((l) => l.id));
      if (knownIds.current === null) {
        knownIds.current = ids;
      } else {
        let fresh = 0;
        ids.forEach((id) => {
          if (!knownIds.current!.has(id)) fresh += 1;
        });
        if (fresh > 0) setArrivals((a) => a + fresh);
        knownIds.current = ids;
      }
      setUpdatedAt(new Date());
    } catch {
      /* keep last data on transient failure */
    } finally {
      setLoaded(true);
    }
  }, [locale, router]);

  // Flash the browser-tab title while unseen leads are waiting.
  useEffect(() => {
    document.title =
      arrivals > 0
        ? `(${arrivals}) ${ar ? "عملاء جدد — Omnera One" : "new leads — Omnera One"}`
        : ar
          ? "لوحة العملاء — Omnera One"
          : "Leads — Omnera One";
  }, [arrivals, ar]);

  useEffect(() => {
    load();
    const t = setInterval(load, POLL_MS);
    return () => clearInterval(t);
  }, [load]);

  const setStatus = async (id: string, status: LeadStatus) => {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    await fetch(`/api/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    }).catch(() => load());
  };

  const logout = async () => {
    await fetch("/api/dashboard/logout", { method: "POST" }).catch(() => {});
    router.replace(`/${locale}/dashboard/login`);
    router.refresh();
  };

  const stats = useMemo(() => {
    const today = new Date().toDateString();
    return {
      total: leads.length,
      today: leads.filter((l) => new Date(l.createdAt).toDateString() === today).length,
      new: leads.filter((l) => l.status === "new").length,
      contacted: leads.filter((l) => l.status === "contacted").length,
    };
  }, [leads]);

  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return leads.filter((l) => {
      if (filter !== "all" && l.status !== filter) return false;
      if (!needle) return true;
      return [l.name, l.company, l.email, l.phone, l.service, l.city, l.message]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(needle));
    });
  }, [leads, q, filter]);

  const exportCsv = () => {
    const head = ["created", "name", "company", "phone", "email", "service", "city", "preferred", "status", "message"];
    const rows = filtered.map((l) =>
      [l.createdAt, l.name, l.company, l.phone, l.email, l.service, l.city, l.preferred, l.status, l.message]
        .map((v) => `"${String(v ?? "").replace(/"/g, '""')}"`)
        .join(","),
    );
    const blob = new Blob(["﻿" + [head.join(","), ...rows].join("\n")], { type: "text/csv;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `omnera-leads-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-ivory/50">
      {/* Top bar */}
      <header className="sticky top-0 z-30 border-b border-line bg-navy-gradient">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center gap-3 px-4 py-3 sm:px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-gold-soft">
            <Icon name="landmark" className="h-5 w-5" />
          </span>
          <div className="me-auto">
            <p className="text-sm font-bold text-white">Omnera One — {ar ? "لوحة العملاء" : "Leads"}</p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/60">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
              </span>
              {ar ? "مباشر" : "Live"}
              {updatedAt && ` · ${ar ? "آخر تحديث" : "updated"} ${updatedAt.toLocaleTimeString(ar ? "ar-SA" : "en-US", { hour: "2-digit", minute: "2-digit" })}`}
            </p>
          </div>
          <a
            href={`/${locale}/dashboard/payments`}
            className="flex h-9 items-center gap-1.5 rounded-lg bg-emerald-500/20 border border-emerald-400/30 px-3 text-xs font-bold text-emerald-300 transition-colors hover:bg-emerald-500/30"
          >
            <Icon name="credit-card" className="h-4 w-4" />
            {ar ? "روابط الدفع" : "Payments"}
          </a>
          <button onClick={load} className="flex h-9 items-center gap-1.5 rounded-lg bg-white/10 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/20">
            <Icon name="clock" className="h-4 w-4" />
            {ar ? "تحديث" : "Refresh"}
          </button>
          <button onClick={exportCsv} className="flex h-9 items-center gap-1.5 rounded-lg bg-white/10 px-3 text-xs font-semibold text-white transition-colors hover:bg-white/20">
            <Icon name="download" className="h-4 w-4" />
            CSV
          </button>
          <button onClick={logout} className="flex h-9 items-center gap-1.5 rounded-lg bg-gold px-3 text-xs font-bold text-navy transition-colors hover:bg-gold-dark">
            {ar ? "خروج" : "Logout"}
          </button>
        </div>
      </header>

      {/* New-lead toast */}
      {arrivals > 0 && (
        <button
          onClick={() => {
            setArrivals(0);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="sticky top-[57px] z-20 flex w-full items-center justify-center gap-2 bg-gold py-2.5 text-sm font-bold text-navy shadow-card transition-colors hover:bg-gold-dark"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-navy/40" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-navy" />
          </span>
          {arrivals} {ar ? "عميل جديد وصل — اضغط للعرض" : arrivals === 1 ? "new lead — tap to view" : "new leads — tap to view"}
        </button>
      )}

      <div className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6">
        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            { k: "total", label: ar ? "إجمالي العملاء" : "Total leads", value: stats.total, icon: "users" },
            { k: "today", label: ar ? "اليوم" : "Today", value: stats.today, icon: "calendar-days" },
            { k: "new", label: ar ? "جديد" : "New", value: stats.new, icon: "sparkles" },
            { k: "contacted", label: ar ? "تم التواصل" : "Contacted", value: stats.contacted, icon: "badge-check" },
          ].map((s) => (
            <div key={s.k} className="flex items-center gap-3 rounded-2xl border border-line bg-white p-4 shadow-card">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
                <Icon name={s.icon} className="h-5 w-5" />
              </span>
              <div>
                <p className="text-2xl font-bold leading-none text-navy">{s.value}</p>
                <p className="mt-1 text-xs text-muted">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Icon name="file-search" className="pointer-events-none absolute start-3 top-1/2 h-4 w-4 -translate-y-1/2 text-faint" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder={ar ? "بحث بالاسم أو الجوال أو الخدمة…" : "Search name, phone, service…"}
              className="h-11 w-full rounded-xl border border-line bg-white ps-9 pe-4 text-sm text-navy outline-none focus:border-gold"
            />
          </div>
          <div className="flex flex-wrap gap-1.5">
            {(["all", ...STATUSES] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  filter === f ? "border-navy bg-navy text-white" : "border-line bg-white text-muted hover:border-gold/50"
                }`}
              >
                {f === "all" ? (ar ? "الكل" : "All") : ar ? STATUS_META[f].ar : STATUS_META[f].en}
              </button>
            ))}
          </div>
        </div>

        {/* List */}
        <div className="mt-4 space-y-3">
          {!loaded ? (
            <div className="rounded-2xl border border-line bg-white p-10 text-center text-sm text-muted">
              {ar ? "جارٍ التحميل…" : "Loading…"}
            </div>
          ) : filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-line bg-white p-12 text-center">
              <Icon name="users" className="mx-auto h-8 w-8 text-faint" />
              <p className="mt-3 text-sm font-semibold text-navy">{ar ? "لا يوجد عملاء بعد" : "No leads yet"}</p>
              <p className="mt-1 text-xs text-muted">
                {ar ? "أول ما يرسل عميل النموذج، هيظهر هنا فورًا." : "New form submissions appear here instantly."}
              </p>
            </div>
          ) : (
            filtered.map((l) => (
              <div key={l.id} className="rounded-2xl border border-line bg-white p-4 shadow-card sm:p-5">
                <div className="flex flex-wrap items-start gap-x-4 gap-y-3">
                  {/* Identity */}
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-base font-bold text-navy">{l.name}</h3>
                      {l.company && <span className="text-xs text-muted">· {l.company}</span>}
                      <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${STATUS_META[l.status].cls}`}>
                        {ar ? STATUS_META[l.status].ar : STATUS_META[l.status].en}
                      </span>
                    </div>
                    <div className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
                      {l.service && (
                        <span className="flex items-center gap-1">
                          <Icon name="briefcase" className="h-3.5 w-3.5 text-gold-dark" />
                          {l.service}
                        </span>
                      )}
                      {l.city && (
                        <span className="flex items-center gap-1">
                          <Icon name="map-pin" className="h-3.5 w-3.5 text-gold-dark" />
                          {l.city}
                        </span>
                      )}
                      <span className="flex items-center gap-1">
                        <Icon name="clock" className="h-3.5 w-3.5" />
                        {timeAgo(l.createdAt, ar)}
                      </span>
                      <span className="rounded bg-ivory px-1.5 py-0.5 text-[10px] text-faint">{l.source}</span>
                    </div>
                    {l.message && <p className="mt-2 text-sm leading-relaxed text-ink">{l.message}</p>}
                    {(l.email || l.preferred) && (
                      <p className="mt-1.5 text-xs text-muted">
                        {l.email && <span className="me-3">✉︎ {l.email}</span>}
                        {l.preferred && <span>{ar ? "يفضّل" : "prefers"}: {l.preferred}</span>}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex shrink-0 flex-col items-stretch gap-2">
                    {l.phone && (
                      <div className="flex gap-2">
                        <a
                          href={`https://wa.me/${waDigits(l.phone)}?text=${encodeURIComponent(
                            ar ? `مرحبًا ${l.name}، معك فريق Omnera One` : `Hello ${l.name}, this is Omnera One`,
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-9 flex-1 items-center justify-center gap-1.5 rounded-lg bg-green-600 px-3 text-xs font-bold text-white transition-colors hover:bg-green-700"
                        >
                          <Icon name="message-circle" className="h-4 w-4" />
                          {ar ? "واتساب" : "WhatsApp"}
                        </a>
                        <a
                          href={`tel:${l.phone}`}
                          className="flex h-9 w-9 items-center justify-center rounded-lg border border-line text-navy transition-colors hover:border-gold hover:text-gold-dark"
                          aria-label={ar ? "اتصال" : "Call"}
                        >
                          <Icon name="headset" className="h-4 w-4" />
                        </a>
                      </div>
                    )}
                    <div className="flex gap-1">
                      {STATUSES.map((s) => (
                        <button
                          key={s}
                          onClick={() => setStatus(l.id, s)}
                          title={ar ? STATUS_META[s].ar : STATUS_META[s].en}
                          className={`h-8 flex-1 rounded-md border px-1.5 text-[10px] font-bold transition-colors ${
                            l.status === s ? STATUS_META[s].cls : "border-line bg-white text-faint hover:border-gold/40"
                          }`}
                        >
                          {ar ? STATUS_META[s].ar : STATUS_META[s].en}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
