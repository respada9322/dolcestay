import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PrivacyPolicyView } from '@/components/legal/privacy-policy-view';

export const metadata: Metadata = {
  title: 'Política de Privacidade | DolceStay',
  description:
    'Política de privacidade e proteção de dados pessoais da DolceStay. Saiba como tratamos os seus dados em conformidade com o RGPD.',
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PrivacyPolicyView />
      <Footer />
    </main>
  );
}
