'use client';

import { LegalDocument } from '@/components/legal/legal-document';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { TERMS_LAST_UPDATED, termsAndConditionsSections } from '@/lib/terms-and-conditions';

export function TermsAndConditionsView() {
  return (
    <>
      <LegalPageHero
        title="Termos e Condições"
        description="Condições gerais aplicáveis às reservas e estadias nos alojamentos geridos pela DolceStay."
        lastUpdated={TERMS_LAST_UPDATED}
        metadataNote="Política aplicável a reservas e estadias"
        currentPageLabel="Termos e Condições"
      />
      <LegalDocument sections={termsAndConditionsSections} />
    </>
  );
}
