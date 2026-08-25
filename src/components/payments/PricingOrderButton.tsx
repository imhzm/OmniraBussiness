'use client';

import { useState } from 'react';
import { CheckoutModal } from '@/components/payments/CheckoutModal';
import { Button } from '@/components/ui/Button';
import type { Locale } from '@/i18n/config';

interface PricingOrderButtonProps {
  serviceTitle: string;
  amount: number | null;
  locale: Locale;
  variant?: 'primary' | 'secondary' | 'navy' | 'ghost' | 'white' | 'outline-light';
  className?: string;
  description?: string;
  label?: string;
}

export function PricingOrderButton({
  serviceTitle,
  amount,
  locale,
  variant = 'primary',
  className = '',
  description,
  label,
}: PricingOrderButtonProps) {
  const [open, setOpen] = useState(false);
  const isEn = locale === 'en';
  const defaultLabel = label || (amount ? (isEn ? 'Book & Pay Online' : 'احجز وسدد الآن') : isEn ? 'Contact Us' : 'تواصل معنا');

  return (
    <>
      <Button
        type="button"
        variant={variant}
        className={className}
        onClick={() => setOpen(true)}
      >
        {defaultLabel}
      </Button>

      <CheckoutModal
        isOpen={open}
        onClose={() => setOpen(false)}
        serviceTitle={serviceTitle}
        amount={amount}
        locale={locale}
        description={description}
      />
    </>
  );
}
