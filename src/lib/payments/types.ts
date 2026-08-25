export type PaymentLinkStatus = 'pending' | 'paid' | 'failed' | 'cancelled';

export const PAYMENT_STATUS_LABEL_AR: Record<PaymentLinkStatus, string> = {
  pending: 'بانتظار الدفع',
  paid: 'مدفوعة',
  failed: 'فاشلة',
  cancelled: 'ملغاة',
};

export const PAYMENT_STATUS_LABEL_EN: Record<PaymentLinkStatus, string> = {
  pending: 'Pending Payment',
  paid: 'Paid',
  failed: 'Failed',
  cancelled: 'Cancelled',
};

export interface PaymentNote {
  at: string;
  text: string;
}

export interface PaymentLink {
  id: string;
  createdAt: string;
  updatedAt: string;
  title: string;
  description?: string;
  amount: number; // ريال سعودي
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  reference?: string;
  trackId: string;
  status: PaymentLinkStatus;
  gatewayStatus?: string;
  paymentId?: string;
  authCode?: string;
  bankRef?: string;
  paidAt?: string;
  paymentUrlSnapshot?: string;
  notes: PaymentNote[];
}

export interface CreatePaymentLinkInput {
  title: string;
  description?: string;
  amount: number;
  customerName?: string;
  customerPhone?: string;
  customerEmail?: string;
  reference?: string;
}

export type UpdatePaymentLinkInput = Partial<
  Pick<
    PaymentLink,
    | 'title'
    | 'description'
    | 'amount'
    | 'customerName'
    | 'customerPhone'
    | 'customerEmail'
    | 'reference'
    | 'status'
  >
>;
