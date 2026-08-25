'use client';

import { useState, useEffect } from 'react';
import {
  CreditCard,
  Plus,
  Copy,
  ExternalLink,
  Trash2,
  CheckCircle2,
  Clock,
  XCircle,
  Search,
  RefreshCw,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building2,
  Users,
} from 'lucide-react';
import { PaymentMethodsGrid } from '@/components/payments/PaymentBadges';
import type { PaymentLink, PaymentLinkStatus } from '@/lib/payments/types';
import type { Locale } from '@/i18n/config';

export function PaymentsClient({ locale = 'ar' }: { locale?: Locale }) {
  const [links, setLinks] = useState<PaymentLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [showModal, setShowModal] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    amount: '',
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    reference: '',
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const fetchLinks = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/payments');
      const data = await res.json();
      if (data.ok && Array.isArray(data.links)) {
        setLinks(data.links);
      }
    } catch {
      /* ignore */
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');
    const amt = Number(formData.amount);
    if (!formData.title.trim()) {
      setFormError('يرجى إدخال عنوان الخدمة');
      return;
    }
    if (!amt || amt <= 0) {
      setFormError('يرجى إدخال مبلغ صحيح بالريال السعودي');
      return;
    }

    setFormSubmitting(true);
    try {
      const res = await fetch('/api/payments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: formData.title,
          description: formData.description || undefined,
          amount: amt,
          customerName: formData.customerName || undefined,
          customerPhone: formData.customerPhone || undefined,
          customerEmail: formData.customerEmail || undefined,
          reference: formData.reference || undefined,
        }),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setShowModal(false);
        setFormData({
          title: '',
          description: '',
          amount: '',
          customerName: '',
          customerPhone: '',
          customerEmail: '',
          reference: '',
        });
        fetchLinks();
      } else {
        setFormError(data.error || 'فشل إنشاء الرابط');
      }
    } catch {
      setFormError('حدث خطأ في الاتصال');
    } finally {
      setFormSubmitting(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('هل أنت متأكد من حذف هذا الرابط؟')) return;
    try {
      const res = await fetch(`/api/payments/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setLinks((prev) => prev.filter((p) => p.id !== id));
      }
    } catch {
      /* ignore */
    }
  };

  const copyUrl = (id: string) => {
    const url = `${window.location.origin}/${locale}/pay/${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const filteredLinks = links.filter((link) => {
    const matchSearch =
      link.title.toLowerCase().includes(search.toLowerCase()) ||
      (link.customerName && link.customerName.toLowerCase().includes(search.toLowerCase())) ||
      (link.reference && link.reference.toLowerCase().includes(search.toLowerCase()));
    const matchStatus = statusFilter === 'all' || link.status === statusFilter;
    return matchSearch && matchStatus;
  });

  const totalPaid = links
    .filter((p) => p.status === 'paid')
    .reduce((acc, curr) => acc + curr.amount, 0);
  const paidCount = links.filter((p) => p.status === 'paid').length;
  const pendingCount = links.filter((p) => p.status === 'pending').length;

  const fmtSar = (n: number) =>
    new Intl.NumberFormat('ar-SA', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);

  return (
    <div className="min-h-screen bg-[#070b11] text-white selection:bg-emerald-500/20">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d141e]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                <Building2 className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-base font-bold">Omnera One</h1>
                <p className="text-xs text-white/50">لوحة التحكم وإدارة المدفوعات</p>
              </div>
            </div>

            {/* Navigation Tabs */}
            <nav className="hidden md:flex items-center gap-2 border-r border-white/10 pr-6 mr-6">
              <a
                href={`/${locale}/dashboard`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold text-white/60 hover:text-white hover:bg-white/5 transition"
              >
                <Users className="h-4 w-4" />
                <span>طلبات التواصل (Leads)</span>
              </a>
              <a
                href={`/${locale}/dashboard/payments`}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold text-emerald-400 bg-emerald-500/15 border border-emerald-500/30 transition shadow-sm"
              >
                <CreditCard className="h-4 w-4" />
                <span>روابط الدفع (Payments)</span>
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-4 py-2 text-xs font-bold text-[#070b11] transition shadow-lg shadow-emerald-500/15 cursor-pointer"
            >
              <Plus className="h-4 w-4" />
              <span>إنشاء رابط دفع</span>
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mb-8">
          <div className="rounded-2xl border border-white/10 bg-[#0d141e]/70 p-5">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>إجمالي المبالغ المحصلة</span>
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-emerald-400">
              {fmtSar(totalPaid)} <span className="text-sm font-normal text-white/50">ر.س</span>
            </p>
            <p className="mt-1 text-xs text-white/40">{paidCount} فواتير مدفوعة بنجاح</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d141e]/70 p-5">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>الفواتير بانتظار الدفع</span>
              <Clock className="h-4 w-4 text-amber-400" />
            </div>
            <p className="mt-2 text-2xl font-bold text-amber-400">{pendingCount}</p>
            <p className="mt-1 text-xs text-white/40">روابط نشطة جاهزة للسداد</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#0d141e]/70 p-5">
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>بوابة الدفع المعتمدة</span>
              <span className="font-semibold text-emerald-400 text-xs">نشطة ومؤمّنة</span>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className="text-sm font-bold text-white">مصرف الراجحي (NeoLeap)</span>
            </div>
            <div className="mt-2">
              <PaymentMethodsGrid className="justify-start scale-90 -mr-2" />
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
            <input
              type="text"
              placeholder="بحث بالخدمة، العميل، أو المرجع..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-[#0d141e]/70 pr-10 pl-4 py-2 text-xs text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-2">
            {['all', 'pending', 'paid', 'failed'].map((st) => (
              <button
                key={st}
                onClick={() => setStatusFilter(st)}
                className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                  statusFilter === st
                    ? 'bg-white/15 text-white border border-white/20'
                    : 'text-white/50 hover:bg-white/5'
                }`}
              >
                {st === 'all' && 'الكل'}
                {st === 'pending' && 'بانتظار الدفع'}
                {st === 'paid' && 'مدفوعة'}
                {st === 'failed' && 'فاشلة'}
              </button>
            ))}
            <button
              onClick={fetchLinks}
              className="rounded-xl border border-white/10 bg-[#0d141e]/70 p-2 text-white/60 hover:text-white transition cursor-pointer"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Table / List */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0d141e]/70 backdrop-blur-md">
          {filteredLinks.length === 0 ? (
            <div className="p-12 text-center text-sm text-white/40">
              {loading ? 'جارٍ تحميل البيانات...' : 'لا توجد روابط دفع مطابقة.'}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-right text-xs">
                <thead className="border-b border-white/10 bg-white/[0.02] text-white/50">
                  <tr>
                    <th className="px-5 py-3.5 font-medium">الخدمة / الوصف</th>
                    <th className="px-5 py-3.5 font-medium">العميل</th>
                    <th className="px-5 py-3.5 font-medium">المبلغ</th>
                    <th className="px-5 py-3.5 font-medium">الحالة</th>
                    <th className="px-5 py-3.5 font-medium">التاريخ</th>
                    <th className="px-5 py-3.5 font-medium text-left">إجراءات</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredLinks.map((link) => (
                    <tr key={link.id} className="hover:bg-white/[0.02] transition">
                      <td className="px-5 py-4">
                        <p className="font-semibold text-white">{link.title}</p>
                        {link.description && <p className="text-white/40 text-[11px] mt-0.5">{link.description}</p>}
                        {link.reference && <p className="text-white/30 text-[10px] mt-0.5">مرجع: {link.reference}</p>}
                      </td>
                      <td className="px-5 py-4">
                        {link.customerName ? (
                          <>
                            <p className="font-medium text-white">{link.customerName}</p>
                            {link.customerPhone && <p className="text-white/40 text-[11px]">{link.customerPhone}</p>}
                          </>
                        ) : (
                          <span className="text-white/30">—</span>
                        )}
                      </td>
                      <td className="px-5 py-4 font-bold text-emerald-400">
                        {fmtSar(link.amount)} <span className="font-normal text-white/40 text-[10px]">ر.س</span>
                      </td>
                      <td className="px-5 py-4">
                        {link.status === 'paid' && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 px-2.5 py-1 text-[11px] font-bold text-emerald-400">
                            <CheckCircle2 className="h-3 w-3" />
                            مدفوعة
                          </span>
                        )}
                        {link.status === 'pending' && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 px-2.5 py-1 text-[11px] font-bold text-amber-400">
                            <Clock className="h-3 w-3" />
                            بانتظار الدفع
                          </span>
                        )}
                        {link.status === 'failed' && (
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/15 border border-red-500/30 px-2.5 py-1 text-[11px] font-bold text-red-400">
                            <XCircle className="h-3 w-3" />
                            فاشلة
                          </span>
                        )}
                      </td>
                      <td className="px-5 py-4 text-white/40 text-[11px]">
                        {new Date(link.createdAt).toLocaleDateString('ar-SA')}
                      </td>
                      <td className="px-5 py-4 text-left">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            onClick={() => copyUrl(link.id)}
                            title="نسخ رابط الدفع"
                            className="inline-flex items-center gap-1 rounded-lg bg-white/5 hover:bg-white/10 px-2.5 py-1.5 text-xs text-white/80 transition cursor-pointer"
                          >
                            <Copy className="h-3.5 w-3.5" />
                            <span>{copiedId === link.id ? 'تم النسخ!' : 'نسخ'}</span>
                          </button>
                          <a
                            href={`/${locale}/pay/${link.id}`}
                            target="_blank"
                            rel="noreferrer"
                            title="معاينة الصفحة"
                            className="rounded-lg bg-white/5 hover:bg-white/10 p-1.5 text-white/80 transition"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                          <button
                            onClick={() => handleDelete(link.id)}
                            title="حذف"
                            className="rounded-lg bg-white/5 hover:bg-red-500/20 p-1.5 text-white/40 hover:text-red-400 transition cursor-pointer"
                          >
                            <Trash2 className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal Create Link */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-3xl border border-white/15 bg-[#0d141e] p-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <h3 className="font-bold text-base text-white">إنشاء رابط دفع جديد</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-white/40 hover:text-white transition"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreate} className="space-y-3.5 text-xs text-right">
              <div>
                <label className="block mb-1 font-medium text-white/70">عنوان الخدمة *</label>
                <input
                  type="text"
                  required
                  placeholder="مثال: تأسيس شركة ذات مسؤولية محدودة"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 font-medium text-white/70">المبلغ بالريال (SAR) *</label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="2500"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-white/70">المرجع الداخلي (اختياري)</label>
                  <input
                    type="text"
                    placeholder="رقم العقد أو العرض"
                    value={formData.reference}
                    onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-white/70">اسم العميل (اختياري)</label>
                <input
                  type="text"
                  placeholder="شركة الأفق للتجارة"
                  value={formData.customerName}
                  onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 font-medium text-white/70">جوال العميل (اختياري)</label>
                  <input
                    type="tel"
                    placeholder="05xxxxxxxx"
                    value={formData.customerPhone}
                    onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-medium text-white/70">بريد العميل (اختياري)</label>
                  <input
                    type="email"
                    placeholder="client@company.com"
                    value={formData.customerEmail}
                    onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1 font-medium text-white/70">ملاحظات أو تفاصيل إضافية</label>
                <textarea
                  rows={2}
                  placeholder="شاملة ضريبة القيمة المضافة ومصاريف السجل..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none resize-none"
                />
              </div>

              {formError && <p className="text-red-400 text-xs text-center font-medium">{formError}</p>}

              <div className="flex gap-2 pt-2">
                <button
                  type="submit"
                  disabled={formSubmitting}
                  className="flex-1 rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 font-bold text-[#070b11] transition shadow-lg shadow-emerald-500/20 disabled:opacity-60 cursor-pointer"
                >
                  {formSubmitting ? 'جارٍ الإنشاء...' : 'إنشاء الرابط وحفظه'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl bg-white/10 hover:bg-white/15 px-4 py-3 font-semibold text-white transition"
                >
                  إلغاء
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
