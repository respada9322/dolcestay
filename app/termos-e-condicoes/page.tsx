import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { TermsAndConditionsView } from '@/components/legal/terms-and-conditions-view';

export const metadata: Metadata = {
  title: 'Termos e Condições | DolceStay',
  description:
    'Termos e condições de reserva, check-in, cancelamento e permanência nos alojamentos DolceStay em Sesimbra.',
  robots: { index: true, follow: true },
};

export default function TermsAndConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <TermsAndConditionsView />
      <Footer />
    </main>
  );
}
