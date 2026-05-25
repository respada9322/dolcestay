'use client';

import { MessageCircle } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import { useLanguage } from '@/lib/language-context';

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const whatsappUrl = `https://wa.me/${contactInfo.whatsapp}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 sm:bottom-6 right-4 z-40 flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
      aria-label={t.common.whatsappChat}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
