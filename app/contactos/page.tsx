import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { ContactSection } from '@/components/sections/contact-section';

export const metadata: Metadata = {
  title: 'Contactos | DolceStay',
  description:
    'Entre em contacto com a DolceStay em Sesimbra. Telefone, email, WhatsApp e formulário para reservas, atividades e gestão de imóveis.',
  robots: { index: true, follow: true },
};

export default function ContactosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-20">
        <ContactSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
