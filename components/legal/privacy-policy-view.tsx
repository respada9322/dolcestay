'use client';

import { LegalDocument } from '@/components/legal/legal-document';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { PRIVACY_LAST_UPDATED, privacyPolicySections } from '@/lib/privacy-policy';

export function PrivacyPolicyView() {
  return (
    <>
      <LegalPageHero
        title="Política de Privacidade"
        description="Como a DolceStay recolhe, trata e protege os seus dados pessoais, em conformidade com o RGPD."
        lastUpdated={PRIVACY_LAST_UPDATED}
        metadataNote="Proteção de dados pessoais (RGPD)"
        currentPageLabel="Política de Privacidade"
      />
      <LegalDocument sections={privacyPolicySections} />
    </>
  );
}
