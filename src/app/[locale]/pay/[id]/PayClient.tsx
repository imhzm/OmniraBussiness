'use client';

import { useState, useEffect } from 'react';
import {
  ShieldCheck,
  Loader2,
  CheckCircle2,
  Building2,
  Printer,
  Share2,
  Languages,
  ArrowUpRight,
  Receipt,
} from 'lucide-react';
import { PaymentMethodsGrid } from '@/components/payments/PaymentBadges';

interface PublicPayment {
  id: string;
  title: string;
  description?: string;
  amount: number;
  status: 'pending' | 'paid' | 'failed' | 'cancelled';
  createdAt: string;
  paidAt?: string;
  customerName?: string;
  reference?: string;
}

function fmtSar(n: number, locale = 'ar'): string {
  return new Intl.NumberFormat(locale === 'en' ? 'en-US' : 'ar-SA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(n);
}

export default function PayClient({
  payment,
  locale = 'ar',
}: {
  payment: PublicPayment;
  locale?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isAppleDevice, setIsAppleDevice] = useState(false);
  const [copied, setCopied] = useState(false);
  const paid = payment.status === 'paid';
  const isEn = locale === 'en';

  // حساب الضريبة المضافة 15% (ZATCA VAT Breakdown)
  const subtotal = Math.round((payment.amount / 1.15) * 100) / 100;
  const vatAmount = Math.round((payment.amount - subtotal) * 100) / 100;

  useEffect(() => {
    try {
      const isApple =
        typeof window !== 'undefined' &&
        (/iPhone|iPad|iPod|Macintosh/i.test(navigator.userAgent) ||
          !!(window as unknown as { ApplePaySession?: unknown }).ApplePaySession);
      setIsAppleDevice(isApple);
    } catch {
      setIsAppleDevice(false);
    }
  }, []);

  const startPayment = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch(`/api/payments/${payment.id}/initiate`, { method: 'POST' });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok && data.paymentUrl) {
        window.location.href = data.paymentUrl;
        return;
      }
      if (data.error === 'already_paid') {
        setError(isEn ? 'This invoice is already paid.' : 'هذه الفاتورة مدفوعة بالفعل.');
      } else if (res.status === 502) {
        setError(
          isEn
            ? 'Payment gateway temporarily unavailable. Please retry or contact us.'
            : 'بوابة الدفع غير متاحة حاليًا — حاول بعد قليل أو تواصل معنا.',
        );
      } else {
        setError(
          isEn
            ? 'Failed to initiate payment. Please try again.'
            : 'تعذّر بدء عملية الدفع. حاول مجددًا أو تواصل معنا.',
        );
      }
    } catch {
      setError(
        isEn
          ? 'Network error. Please check your connection and retry.'
          : 'تعذّر الاتصال. تحقّق من الإنترنت وحاول مجددًا.',
      );
    } finally {
      setLoading(false);
    }
  };

  const shareWhatsApp = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = isEn
      ? `Omnera One Payment Invoice (${payment.title}) - ${fmtSar(payment.amount, 'en')} SAR: ${url}`
      : `فاتورة دفع Omnera One (${payment.title}) بمبلغ ${fmtSar(payment.amount, 'ar')} ر.س: ${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopy = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#070b11] px-4 sm:px-6 py-10 selection:bg-emerald-500/20 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_35%,rgba(16,185,129,0.08),transparent_70%)]" />

      <div className="relative w-full max-w-lg">
        {/* Top bar: Brand & Language Switch */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 shadow-lg shadow-emerald-500/5">
              <Building2 className="h-5 w-5 text-emerald-400" />
            </div>
            <div className="text-right">
              <p className="text-base font-bold tracking-tight text-white">Omnera One</p>
              <p className="text-[11px] text-white/50">{isEn ? 'Business & Enterprise Services' : 'خدمات وحلول الأعمال'}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={isEn ? `/ar/pay/${payment.id}` : `/en/pay/${payment.id}`}
              className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/70 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{isEn ? 'العربية' : 'English'}</span>
            </a>
          </div>
        </div>

        {/* Invoice Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#0d141e]/90 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
          {paid ? (
            /* --------------- حالة: مدفوعة --------------- */
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400">
                <CheckCircle2 className="h-8 w-8" />
              </div>

              <h1 className="mt-4 text-xl font-bold text-white">
                {isEn ? 'Payment Received Successfully' : 'تم استلام دفعتك بنجاح'}
              </h1>
              <p className="mt-1 text-xs text-white/60">
                {isEn ? 'Your official receipt has been issued.' : 'تم اعتماد العملية وإصدار إيصال السداد المعتمد.'}
              </p>

              {/* Tax Receipt Details */}
              <div className="my-6 rounded-2xl border border-white/10 bg-white/[0.02] p-4 text-xs text-white/80 space-y-2.5 text-right">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-white/40">{isEn ? 'Service / Plan' : 'الخدمة / الباقة'}:</span>
                  <span className="font-bold text-white text-sm">{payment.title}</span>
                </div>
                {payment.customerName && (
                  <div className="flex justify-between items-center">
                    <span className="text-white/40">{isEn ? 'Customer' : 'العميل'}:</span>
                    <span className="font-medium text-white">{payment.customerName}</span>
                  </div>
                )}
                {payment.reference && (
                  <div className="flex justify-between items-center">
                    <span className="text-white/40">{isEn ? 'Reference ID' : 'رقم المرجع'}:</span>
                    <span className="font-mono text-white/70">{payment.reference}</span>
                  </div>
                )}
                <div className="flex justify-between items-center">
                  <span className="text-white/40">{isEn ? 'Subtotal' : 'المبلغ قبل الضريبة'}:</span>
                  <span>{fmtSar(subtotal, locale)} {isEn ? 'SAR' : 'ر.س'}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white/40">{isEn ? 'VAT (15%)' : 'ضريبة القيمة المضافة (15%)'}:</span>
                  <span>{fmtSar(vatAmount, locale)} {isEn ? 'SAR' : 'ر.س'}</span>
                </div>
                <div className="flex justify-between items-center border-t border-white/10 pt-2 text-sm font-bold">
                  <span className="text-white/60">{isEn ? 'Total Amount Paid' : 'الإجمالي المدفوع'}:</span>
                  <span className="text-emerald-400 font-extrabold text-base">
                    {fmtSar(payment.amount, locale)} {isEn ? 'SAR' : 'ر.س'}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/15 py-3 text-xs font-semibold text-white transition cursor-pointer"
                >
                  <Printer className="h-3.5 w-3.5" />
                  <span>{isEn ? 'Print Receipt' : 'طباعة الإيصال'}</span>
                </button>
                <a
                  href={isEn ? '/en' : '/ar'}
                  className="flex-1 flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3 text-xs font-bold text-[#070b11] transition shadow-lg shadow-emerald-500/15"
                >
                  <span>{isEn ? 'Return to Home' : 'العودة للرئيسية'}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          ) : (
            /* --------------- بانتظار الدفع --------------- */
            <>
              <div className="mb-6 text-center">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 text-[11px] font-semibold text-emerald-400 mb-3">
                  <Receipt className="h-3 w-3" />
                  <span>{isEn ? 'Official Invoice' : 'فاتورة دفع معتمدة'}</span>
                </div>
                <h1 className="text-xl font-bold text-white">{payment.title}</h1>
                {payment.description && <p className="mt-1.5 text-xs text-white/60 leading-relaxed">{payment.description}</p>}
                
                <div className="mt-4 flex items-baseline justify-center gap-2">
                  <span className="text-4xl font-extrabold tracking-tight text-emerald-400">
                    {fmtSar(payment.amount, locale)}
                  </span>
                  <span className="text-sm font-semibold text-white/50">{isEn ? 'SAR' : 'ر.س'}</span>
                </div>

                {/* Tax Breakdown */}
                <div className="mt-3 flex items-center justify-center gap-3 text-[11px] text-white/40">
                  <span>{isEn ? 'Base' : 'الأساس'}: {fmtSar(subtotal, locale)}</span>
                  <span>•</span>
                  <span>{isEn ? 'VAT 15%' : 'الضريبة'}: {fmtSar(vatAmount, locale)}</span>
                </div>

                {payment.reference && (
                  <p className="mt-2 text-[11px] text-white/35 font-mono">
                    {isEn ? 'Ref' : 'مرجع'}: {payment.reference}
                  </p>
                )}
              </div>

              <div className="space-y-2.5">
                {/* زر أبل باي - يظهر فقط على أجهزة Apple المدعومة */}
                {isAppleDevice && (
                  <button
                    onClick={startPayment}
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2.5 rounded-2xl bg-black border border-white/20 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-neutral-900 hover:border-white/40 disabled:opacity-60 shadow-md cursor-pointer"
                  >
                    {loading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <div className="flex items-center gap-1">
                        <svg viewBox="0 0 170 170" className="h-4 w-4 fill-current -mt-0.5" xmlns="http://www.w3.org/2000/svg">
                          <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.67-7.86-11.96-14.44-6.42-9.9-11.38-20.9-14.88-32.99-3.5-12.09-5.25-23.23-5.25-33.43 0-14.43 3.65-26.24 10.96-35.43 7.31-9.19 16.27-13.88 26.88-14.07 4.9.11 10.15 1.41 15.75 3.88 5.6 2.47 9.4 3.75 11.4 3.84 1.7-.1 5.75-1.46 12.14-4.08 6.39-2.61 11.96-3.79 16.71-3.52 13.9.77 24.81 5.86 32.74 15.26-12.21 7.42-18.23 17.51-18.06 30.26.17 10.19 4.09 18.66 11.75 25.4 7.66 6.74 16.89 10.49 27.69 11.25-2.58 7.62-5.74 15.34-9.48 23.16zM119.22 33.64c0-7.39 2.67-14.18 8.01-20.36 5.34-6.19 11.9-10.08 19.67-11.69.17 1.09.25 2.05.25 2.87 0 7.4-2.78 14.34-8.34 20.82-5.56 6.48-12.27 10.33-20.14 11.55-.26-1.04-.45-2.1-.45-3.19z"/>
                        </svg>
                        <span className="text-sm font-semibold tracking-tight">Pay</span>
                      </div>
                    )}
                    <span>{loading ? (isEn ? 'Redirecting...' : 'جارٍ التحويل...') : (isEn ? 'Pay with Apple Pay' : 'الدفع السريع عبر Apple Pay')}</span>
                  </button>
                )}

                {/* زر مدى والبطاقات */}
                <button
                  onClick={startPayment}
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-500 hover:bg-emerald-400 py-3.5 text-sm font-bold text-[#070b11] transition-all duration-200 disabled:opacity-60 shadow-lg shadow-emerald-500/20 cursor-pointer"
                >
                  {loading ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <ShieldCheck className="h-4 w-4" />
                  )}
                  <span>
                    {loading
                      ? (isEn ? 'Connecting to Al Rajhi Gateway...' : 'جارٍ التحويل لبوابة الراجحي...')
                      : (isEn ? 'Pay via mada / Credit Card' : 'الدفع ببطاقة مدى أو البطاقة الائتمانية')}
                  </span>
                </button>
              </div>

              {error && <p className="mt-4 text-center text-xs text-red-400 font-medium">{error}</p>}

              {/* Share & Options */}
              <div className="mt-5 flex items-center justify-center gap-2 border-t border-white/10 pt-4">
                <button
                  onClick={shareWhatsApp}
                  className="flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white transition cursor-pointer"
                >
                  <Share2 className="h-3.5 w-3.5" />
                  <span>{isEn ? 'Share on WhatsApp' : 'مشاركة عبر واتساب'}</span>
                </button>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 rounded-xl bg-white/5 hover:bg-white/10 px-3 py-1.5 text-xs text-white/70 hover:text-white transition cursor-pointer"
                >
                  <span>{copied ? (isEn ? 'Copied!' : 'تم النسخ!') : (isEn ? 'Copy Link' : 'نسخ الرابط')}</span>
                </button>
              </div>

              {/* Payment Methods Badges */}
              <div className="mt-5 border-t border-white/10 pt-4 text-center">
                <p className="mb-2.5 text-xs text-white/50">{isEn ? 'Accepted Payment Methods:' : 'طرق الدفع المعتمدة:'}</p>
                <PaymentMethodsGrid className="justify-center scale-95" />

                <div className="mt-3.5 flex items-center justify-center gap-1.5 text-xs text-white/40">
                  <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                  <span>{isEn ? '100% Encrypted & Secure via Al Rajhi Bank (SAMA)' : 'دفع بنكي آمن ومشفّر 100% عبر مصرف الراجحي ومؤسسة النقد (ساما)'}</span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
