'use client';

import { ConsumerDisputesContent } from '@/components/legal/consumer-disputes-content';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { CONSUMER_DISPUTES_LAST_UPDATED } from '@/lib/consumer-disputes';

export function ConsumerDisputesView() {
  return (
    <>
      <LegalPageHero
        title="Litígios de Consumo"
        description="Informação sobre entidades de resolução alternativa de litígios de consumo em caso de disputa."
        lastUpdated={CONSUMER_DISPUTES_LAST_UPDATED}
        metadataNote="Resolução alternativa de litígios"
        currentPageLabel="Litígios de Consumo"
      />
      <ConsumerDisputesContent />
    </>
  );
}
