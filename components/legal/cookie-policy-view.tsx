'use client';

import { LegalDocument } from '@/components/legal/legal-document';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { CookiePreferencesTrigger } from '@/components/cookie-preferences-trigger';
import { COOKIE_POLICY_LAST_UPDATED, cookiePolicySections } from '@/lib/cookie-policy';

export function CookiePolicyView() {
  return (
    <>
      <LegalPageHero
        title="Política de Cookies"
        description="Informação sobre os cookies utilizados no website DolceStay e como pode gerir as suas preferências."
        lastUpdated={COOKIE_POLICY_LAST_UPDATED}
        metadataNote="Cookies e consentimento (RGPD)"
        currentPageLabel="Política de Cookies"
      />
      <div className="container mx-auto max-w-3xl px-4 pb-4">
        <div className="flex justify-center">
          <CookiePreferencesTrigger />
        </div>
      </div>
      <LegalDocument sections={cookiePolicySections} />
    </>
  );
}
