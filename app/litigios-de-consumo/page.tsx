import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ConsumerDisputesView } from '@/components/legal/consumer-disputes-view';

export const metadata: Metadata = {
  title: 'Litígios de Consumo | DolceStay',
  description:
    'Informação sobre resolução alternativa de litígios de consumo e contactos do Centro de Arbitragem de Sesimbra.',
  robots: { index: true, follow: true },
};

export default function ConsumerDisputesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ConsumerDisputesView />
      <Footer />
    </main>
  );
}
