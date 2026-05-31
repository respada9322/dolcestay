import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { CookiePolicyView } from '@/components/legal/cookie-policy-view';

export const metadata: Metadata = {
  title: 'Política de Cookies | DolceStay',
  description:
    'Política de cookies da DolceStay. Saiba que cookies utilizamos, como gerir o seu consentimento e como protegemos a sua privacidade.',
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <CookiePolicyView />
      <Footer />
    </main>
  );
}
