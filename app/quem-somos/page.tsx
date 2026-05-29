import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { AboutSection } from '@/components/sections/about-section';

export const metadata: Metadata = {
  title: 'Quem Somos | DolceStay — Gestão Local em Sesimbra',
  description:
    'Somos locais em Sesimbra. Gestão premium de alojamento local para proprietários que querem rentabilizar com confiança e proximidade.',
  robots: { index: true, follow: true },
};

export default function QuemSomosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-20">
        <AboutSection />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
