import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { OwnersPageSection } from '@/components/sections/owners-page-section';

export const metadata: Metadata = {
  title: 'Gestão de Alojamento Local em Sesimbra para Proprietários | DolceStay',
  description:
    'Rentabilize o seu imóvel em Sesimbra com gestão completa de alojamento local. A DolceStay trata de reservas, hóspedes, limpeza, preços e acompanhamento.',
  robots: { index: true, follow: true },
};

export default function ProprietariosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-20">
        <OwnersPageSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
