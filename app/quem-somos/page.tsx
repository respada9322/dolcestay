import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AboutSection } from '@/components/sections/about-section';

export const metadata: Metadata = {
  title: 'Quem Somos | DolceStay',
  description:
    'Conheça a DolceStay: gestão de alojamento local em Sesimbra, com foco na rentabilização de imóveis e experiências turísticas de excelência.',
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
    </main>
  );
}
