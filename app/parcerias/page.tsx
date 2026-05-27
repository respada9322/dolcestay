import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PartnershipsSection } from '@/components/sections/partnerships-section';

export const metadata: Metadata = {
  title: 'Parcerias | DolceStay',
  description:
    'Descubra as parcerias DolceStay em Sesimbra: experiências turísticas, restaurantes, bares e recomendações locais para os seus hóspedes.',
  robots: { index: true, follow: true },
};

export default function ParceriasPage() {
  return (
    <main className="min-h-screen bg-[#F8FAF8]">
      <Header />
      <div className="pt-16 lg:pt-20">
        <PartnershipsSection />
      </div>
      <Footer />
    </main>
  );
}
