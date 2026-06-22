import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ActivitiesSection } from '@/components/sections/activities-section';

export const metadata: Metadata = {
  title: 'Atividades | DolceStay',
  description:
    'Descubra as atividades DolceStay em Sesimbra: experiências turísticas, restaurantes, bares e recomendações locais para os seus hóspedes.',
  robots: { index: true, follow: true },
};

export default function AtividadesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="pt-16 lg:pt-20">
        <ActivitiesSection />
      </div>
      <Footer />
    </main>
  );
}
