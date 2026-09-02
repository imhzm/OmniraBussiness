'use client';

import { useState } from 'react';
import {
  ShieldCheck,
  Loader2,
  Building2,
  Phone,
  Mail,
  User,
  CheckCircle2,
  CreditCard,
  MessageSquare,
  X,
  Lock,
} from 'lucide-react';
import { PaymentMethodsGrid } from '@/components/payments/PaymentBadges';
import type { Locale } from '@/i18n/config';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  amount: number | null; // إذا كان null يكون مخصص
  locale?: Locale;
  description?: string;
  reference?: string;
}

const COUNTRY_CODES = [
  { code: '+966', flag: '🇸🇦', name: 'السعودية (+966)', en: 'Saudi Arabia (+966)' },
  { code: '+971', flag: '🇦🇪', name: 'الإمارات (+971)', en: 'UAE (+971)' },
  { code: '+965', flag: '🇰🇼', name: 'الكويت (+965)', en: 'Kuwait (+965)' },
  { code: '+974', flag: '🇶🇦', name: 'قطر (+974)', en: 'Qatar (+974)' },
  { code: '+973', flag: '🇧🇭', name: 'البحرين (+973)', en: 'Bahrain (+973)' },
  { code: '+968', flag: '🇴🇲', name: 'عمان (+968)', en: 'Oman (+968)' },
  { code: '+20', flag: '🇪🇬', name: 'مصر (+20)', en: 'Egypt (+20)' },
  { code: '+962', flag: '🇯🇴', name: 'الأردن (+962)', en: 'Jordan (+962)' },
  { code: '+961', flag: '🇱🇧', name: 'لبنان (+961)', en: 'Lebanon (+961)' },
  { code: '+964', flag: '🇮🇶', name: 'العراق (+964)', en: 'Iraq (+964)' },
  { code: '+44', flag: '🇬🇧', name: 'المملكة المتحدة (+44)', en: 'UK (+44)' },
  { code: '+1', flag: '🇺🇸', name: 'أمريكا / كندا (+1)', en: 'USA / Canada (+1)' },
  { code: '+49', flag: '🇩🇪', name: 'ألمانيا (+49)', en: 'Germany (+49)' },
  { code: '+33', flag: '🇫🇷', name: 'فرنسا (+33)', en: 'France (+33)' },
  { code: '+39', flag: '🇮🇹', name: 'إيطاليا (+39)', en: 'Italy (+39)' },
  { code: '+90', flag: '🇹🇷', name: 'تركيا (+90)', en: 'Turkey (+90)' },
  { code: '+86', flag: '🇨🇳', name: 'الصين (+86)', en: 'China (+86)' },
  { code: '+91', flag: '🇮🇳', name: 'الهند (+91)', en: 'India (+91)' },
  { code: '+92', flag: '🇵🇰', name: 'باكستان (+92)', en: 'Pakistan (+92)' },
  { code: '+60', flag: '🇲🇾', name: 'ماليزيا (+60)', en: 'Malaysia (+60)' },
  { code: '+65', flag: '🇸🇬', name: 'سنغافورة (+65)', en: 'Singapore (+65)' },
  { code: 'other', flag: '🌐', name: 'أخرى (رمز مخصص)', en: 'Other' },
];

export function CheckoutModal({
  isOpen,
  onClose,
  serviceTitle,
  amount,
  locale = 'ar',
  description,
  reference,
}: CheckoutModalProps) {
  const isEn = locale === 'en';
  const hasFixedPrice = amount !== null && amount > 0;
  const [mode, setMode] = useState<'pay' | 'quote'>(hasFixedPrice ? 'pay' : 'quote');

  const baseAmount = amount !== null && amount > 0 ? amount : 0;
  const vatAmount = Math.round(baseAmount * 0.15 * 100) / 100;
  const totalAmount = Math.round((baseAmount + vatAmount) * 100) / 100;

  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+966');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedPhone = phone.trim();
    if (!name.trim() || !trimmedPhone) {
      setError(isEn ? 'Please provide your name and phone number.' : 'يرجى إدخال الاسم ورقم الجوال.');
      return;
    }

    const fullPhone = trimmedPhone.startsWith('+')
      ? trimmedPhone
      : countryCode && countryCode !== 'other'
        ? `${countryCode}${trimmedPhone.replace(/^0+/, '')}`
        : trimmedPhone;

    setLoading(true);

    if (mode === 'pay' && hasFixedPrice) {
      // الدفع الفوري شامل ضريبة القيمة المضافة 15%
      try {
        const res = await fetch('/api/payments/checkout', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: serviceTitle,
            description: description
              ? `${description} (شامل ضريبة القيمة المضافة 15%)`
              : `${serviceTitle} — السعر الأساسي: ${fmtSar(baseAmount)} + الضريبة (15%): ${fmtSar(vatAmount)} = الإجمالي: ${fmtSar(totalAmount)} ر.س`,
            amount: totalAmount,
            customerName: name.trim(),
            customerPhone: fullPhone,
            customerEmail: email.trim() || undefined,
            reference: reference || undefined,
          }),
        });

        const data = await res.json();
        if (res.ok && data.ok && data.paymentUrl) {
          window.location.href = data.paymentUrl;
          return;
        }

        if (data.payPageUrl) {
          window.location.href = data.payPageUrl;
          return;
        }

        setError(data.message || (isEn ? 'Failed to connect to gateway.' : 'تعذر الاتصال ببوابة الدفع.'));
      } catch {
        setError(isEn ? 'Network error. Please try again.' : 'حدث خطأ في الاتصال. يرجى المحاولة لاحقاً.');
      } finally {
        setLoading(false);
      }
    } else {
      // طلب تواصل / استشارة
      try {
        const res = await fetch('/api/leads', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: name.trim(),
            phone: fullPhone,
            email: email.trim() || undefined,
            service: serviceTitle,
            message: notes.trim() || undefined,
          }),
        });

        if (res.ok) {
          setSuccess(true);
        } else {
          setError(isEn ? 'Failed to submit request.' : 'تعذر إرسال الطلب. حاول مجدداً.');
        }
      } catch {
        setError(isEn ? 'Network error.' : 'خطأ في الاتصال.');
      } finally {
        setLoading(false);
      }
    }
  };

  const fmtSar = (n: number) =>
    new Intl.NumberFormat(isEn ? 'en-US' : 'ar-SA', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-4 selection:bg-emerald-500/20">
      <div className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#0a111a] p-6 sm:p-7 text-white shadow-2xl text-right">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute left-5 top-5 rounded-full bg-white/10 p-1.5 text-white/50 hover:bg-white/15 hover:text-white transition cursor-pointer"
        >
          <X className="h-4 w-4" />
        </button>

        {success ? (
          <div className="py-8 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400">
              <CheckCircle2 className="h-7 w-7" />
            </div>
            <h3 className="mt-4 text-lg font-bold text-white">
              {isEn ? 'Request Received Successfully' : 'تم استلام طلبك بنجاح'}
            </h3>
            <p className="mt-2 text-xs text-white/60">
              {isEn
                ? 'Our enterprise team will get in touch with you shortly.'
                : 'سيقوم فريق خبراء Omnera One بالتواصل معك في أقرب وقت لتأكيد التفاصيل.'}
            </p>
            <button
              onClick={onClose}
              className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 text-xs font-bold text-[#070b11] transition cursor-pointer"
            >
              {isEn ? 'Done' : 'تم'}
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="flex items-start gap-3 border-b border-white/10 pb-4 mb-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 mt-0.5">
                <Building2 className="h-5 w-5" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-white leading-tight">{serviceTitle}</h3>
                {hasFixedPrice ? (
                  <div className="mt-2 rounded-xl bg-white/[0.04] border border-white/10 p-2.5 text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-white/60">
                      <span>{isEn ? 'Base price (excl. VAT):' : 'السعر الأساسي (بدون ضريبة):'}</span>
                      <span className="font-semibold text-white/90">{fmtSar(baseAmount)} {isEn ? 'SAR' : 'ر.س'}</span>
                    </div>
                    <div className="flex items-center justify-between text-white/60">
                      <span>{isEn ? 'VAT (15%):' : 'ضريبة القيمة المضافة (15%):'}</span>
                      <span className="font-semibold text-emerald-400">+{fmtSar(vatAmount)} {isEn ? 'SAR' : 'ر.س'}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-white/10 font-bold text-xs text-white">
                      <span>{isEn ? 'Total with 15% VAT:' : 'الإجمالي شامل الضريبة (15%):'}</span>
                      <span className="text-emerald-400 font-extrabold text-sm">{fmtSar(totalAmount)} <span className="text-[10px] font-normal text-white/50">{isEn ? 'SAR' : 'ر.س'}</span></span>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-white/50 mt-1">{isEn ? 'Custom Enterprise Plan' : 'خطة مخصصة للشركات'}</p>
                )}
              </div>
            </div>

            {/* Mode Toggle (if fixed price) */}
            {hasFixedPrice && (
              <div className="mb-4 flex rounded-xl border border-white/10 bg-white/5 p-1 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setMode('pay')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition cursor-pointer ${
                    mode === 'pay'
                      ? 'bg-emerald-500 text-[#070b11] font-bold shadow-md'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <CreditCard className="h-3.5 w-3.5" />
                  <span>{isEn ? 'Instant Booking & Pay' : 'الحجز والسداد الفوري'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => setMode('quote')}
                  className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-lg transition cursor-pointer ${
                    mode === 'quote'
                      ? 'bg-white/15 text-white font-bold'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  <span>{isEn ? 'Consultation / Inquire' : 'استشارة / استفسار'}</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 text-xs">
              <div>
                <label className="block mb-1 font-medium text-white/70">{isEn ? 'Full Name *' : 'الاسم الكريم *'}</label>
                <div className="relative">
                  <User className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40" />
                  <input
                    type="text"
                    required
                    placeholder={isEn ? 'e.g. John Doe' : 'مثال: عبد الله السعيد'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 pr-9 pl-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block mb-1 font-medium text-white/70">{isEn ? 'Phone Number (WhatsApp) *' : 'رقم الجوال (واتساب) *'}</label>
                  <div className="flex gap-1.5">
                    <select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      aria-label={isEn ? "Country Code" : "رمز الدولة"}
                      className="w-[100px] shrink-0 rounded-xl border border-white/10 bg-[#141f2c] px-2 py-2.5 text-xs text-white focus:border-emerald-500 focus:outline-none cursor-pointer"
                    >
                      {COUNTRY_CODES.map((c) => (
                        <option key={c.code || 'other'} value={c.code} className="bg-[#0a111a] text-white">
                          {c.flag} {c.code === 'other' ? (isEn ? 'Other' : 'أخرى') : c.code}
                        </option>
                      ))}
                    </select>

                    <div className="relative flex-1 min-w-0">
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder={
                          countryCode === 'other'
                            ? (isEn ? '+Country code & number' : '+رمز الدولة والرقم')
                            : countryCode === '+966'
                              ? '5xxxxxxxx'
                              : 'xxxxxxxx'
                        }
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded-xl border border-white/10 bg-white/5 pr-9 pl-3 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block mb-1 font-medium text-white/70">{isEn ? 'Email (Optional)' : 'البريد الإلكتروني (اختياري)'}</label>
                  <div className="relative">
                    <Mail className="absolute right-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/40" />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-white/5 pr-9 pl-3.5 py-2.5 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              {mode === 'quote' && (
                <div>
                  <label className="block mb-1 font-medium text-white/70">{isEn ? 'Inquiry Details' : 'تفاصيل الاستفسار أو الاحتياج'}</label>
                  <textarea
                    rows={2}
                    placeholder={isEn ? 'Any specific license or setup details...' : 'اذكر أي تفاصيل خاصة بالنشاط أو التراخيص...'}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-white placeholder:text-white/30 focus:border-emerald-500 focus:outline-none resize-none"
                  />
                </div>
              )}

              {/* Payment Methods Info Box */}
              {mode === 'pay' && hasFixedPrice && (
                <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-3 text-center">
                  <p className="mb-2 text-[11px] text-white/60">
                    {isEn ? 'Accepted Payment Methods via Al Rajhi Bank:' : 'طرق الدفع المتاحة فوراً عبر مصرف الراجحي:'}
                  </p>
                  <PaymentMethodsGrid className="justify-center scale-95" />
                  <div className="mt-2 flex items-center justify-center gap-1 text-[10px] text-emerald-400/80">
                    <Lock className="h-3 w-3" />
                    <span>{isEn ? 'Secured by Saudi Central Bank (SAMA)' : 'مدفوعات مؤمّنة ومشفّرة بمعايير ساما'}</span>
                  </div>
                </div>
              )}

              {error && <p className="text-red-400 text-xs text-center font-medium">{error}</p>}

              <button
                type="submit"
                disabled={loading}
                className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 py-3 font-bold text-[#070b11] transition shadow-lg shadow-emerald-500/20 disabled:opacity-60 cursor-pointer"
              >
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : mode === 'pay' ? (
                  <ShieldCheck className="h-4 w-4" />
                ) : (
                  <MessageSquare className="h-4 w-4" />
                )}
                <span>
                  {loading
                    ? isEn
                      ? 'Processing...'
                      : 'جارٍ المعالجة والتحويل...'
                    : mode === 'pay'
                      ? isEn
                        ? `Book & Pay (${fmtSar(totalAmount)} SAR incl. VAT)`
                        : `احجز الآن وسدد (${fmtSar(totalAmount)} ر.س شامل الضريبة)`
                      : isEn
                        ? 'Submit Request'
                        : 'إرسال طلب الاستشارة'}
                </span>
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
