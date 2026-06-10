import { whatsappLink } from "@/config/site";
import type { Locale } from "@/i18n/config";
import { Icon } from "@/components/ui/Icon";

export function WhatsAppFloat({ locale }: { locale: Locale }) {
  const message =
    locale === "ar"
      ? "مرحبًا، أود الاستفسار عن خدماتكم."
      : "Hello, I'd like to ask about your services.";
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-navy shadow-gold transition-transform duration-300 hover:scale-110"
    >
      <Icon name="message-circle" className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
