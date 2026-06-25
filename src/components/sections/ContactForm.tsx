"use client";

import { FormEvent, useMemo, useState } from "react";
import { site, whatsappLink, leadCapture, hasLeadBackend } from "@/config/site";
import { services } from "@/data/services";
import { getDict } from "@/i18n/dictionary";
import type { Locale } from "@/i18n/config";
import { t } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

type ContactState = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  preferred: "whatsapp" | "email" | "phone";
  message: string;
};

const initialState: ContactState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  preferred: "whatsapp",
  message: "",
};

export function ContactForm({ locale }: { locale: Locale }) {
  const dict = getDict(locale);
  const [state, setState] = useState<ContactState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactState, string>>>({});
  const [sent, setSent] = useState(false);

  const serviceOptions = useMemo(
    () => services.map((service) => ({ value: service.slug, label: t(service.title, locale) })),
    [locale]
  );

  const update = (key: keyof ContactState, value: string) => {
    setState((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof ContactState, string>> = {};
    if (!state.fullName.trim()) nextErrors.fullName = dict.contact.errors.required;
    if (!state.email.trim() || !/^\S+@\S+\.\S+$/.test(state.email)) nextErrors.email = dict.contact.errors.email;
    if (!state.phone.trim()) nextErrors.phone = dict.contact.errors.phone;
    if (!state.service.trim()) nextErrors.service = dict.contact.errors.required;
    if (!state.message.trim()) nextErrors.message = dict.contact.errors.required;

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const selectedService = serviceOptions.find((service) => service.value === state.service)?.label ?? state.service;
    const message =
      locale === "ar"
        ? `مرحباً Omnera One، أحتاج استشارة.\nالاسم: ${state.fullName}\nالشركة: ${state.companyName || "-"}\nالبريد: ${state.email}\nالجوال: ${state.phone}\nالخدمة: ${selectedService}\nوسيلة التواصل المفضلة: ${state.preferred}\nالرسالة: ${state.message}`
        : `Hello Omnera One, I need a consultation.\nName: ${state.fullName}\nCompany: ${state.companyName || "-"}\nEmail: ${state.email}\nPhone: ${state.phone}\nService: ${selectedService}\nPreferred contact: ${state.preferred}\nMessage: ${state.message}`;

    // When a real lead-capture backend is configured, POST the lead to it.
    // Otherwise fall back to the WhatsApp deep-link (current default UX).
    if (hasLeadBackend()) {
      void fetch(leadCapture.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...state, selectedService, locale }),
      }).catch(() => {
        // Network/backend failure must not break the UX: fall back to WhatsApp.
        window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
      });
    } else {
      window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    }
    setSent(true);
  };

  const fieldClass =
    "h-12 w-full rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition-colors placeholder:text-faint focus:border-gold";

  return (
    <form onSubmit={submit} className="rounded-2xl border border-line bg-white p-6 shadow-card lg:p-8">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-faint text-gold-dark">
          <Icon name="messages-square" className="h-5 w-5" />
        </span>
        <div>
          <h2 className="text-xl font-bold text-navy">{dict.contact.formTitle}</h2>
          <p className="text-sm text-muted">{site.workingHours[locale]}</p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label={dict.contact.fullName} error={errors.fullName}>
          <input value={state.fullName} onChange={(e) => update("fullName", e.target.value)} className={fieldClass} />
        </Field>
        <Field label={dict.contact.companyName}>
          <input value={state.companyName} onChange={(e) => update("companyName", e.target.value)} className={fieldClass} />
        </Field>
        <Field label={dict.contact.emailField} error={errors.email}>
          <input value={state.email} onChange={(e) => update("email", e.target.value)} className={fieldClass} inputMode="email" />
        </Field>
        <Field label={dict.contact.phoneField} error={errors.phone}>
          <input value={state.phone} onChange={(e) => update("phone", e.target.value)} className={fieldClass} inputMode="tel" />
        </Field>
        <Field label={dict.contact.serviceNeeded} error={errors.service}>
          <select value={state.service} onChange={(e) => update("service", e.target.value)} className={fieldClass}>
            <option value="">{dict.contact.selectService}</option>
            {serviceOptions.map((service) => (
              <option key={service.value} value={service.value}>
                {service.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label={dict.contact.preferredContact}>
          <select
            value={state.preferred}
            onChange={(e) => update("preferred", e.target.value)}
            className={fieldClass}
          >
            <option value="whatsapp">{dict.contact.contactWhatsApp}</option>
            <option value="email">{dict.contact.contactEmail}</option>
            <option value="phone">{dict.contact.contactPhone}</option>
          </select>
        </Field>
      </div>

      <Field label={dict.contact.message} error={errors.message} className="mt-4">
        <textarea
          value={state.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder={dict.contact.messagePlaceholder}
          className="min-h-36 w-full rounded-xl border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-faint focus:border-gold"
        />
      </Field>

      <Button type="submit" size="lg" className="mt-6 w-full" arrow>
        {dict.contact.send}
      </Button>

      {sent && (
        <div className="mt-5 rounded-xl border border-gold/40 bg-gold-faint p-4 text-sm text-navy">
          <p className="font-bold">{dict.contact.successTitle}</p>
          <p className="mt-1 leading-relaxed text-navy/70">{dict.contact.successText}</p>
        </div>
      )}
    </form>
  );
}

function Field({
  label,
  error,
  className,
  children,
}: {
  label: string;
  error?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={className}>
      <span className="mb-2 block text-sm font-semibold text-navy">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs font-semibold text-red-600">{error}</span>}
    </label>
  );
}
