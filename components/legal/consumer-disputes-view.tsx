'use client';

import { ConsumerDisputesContent } from '@/components/legal/consumer-disputes-content';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { useLanguage } from '@/lib/language-context';

export function ConsumerDisputesView() {
  const { t } = useLanguage();
  const page = t.legal.pages.consumerDisputes;

  return (
    <>
      <LegalPageHero
        title={page.title}
        description={page.description}
        lastUpdated={page.lastUpdated}
        metadataNote={page.metadataNote}
        currentPageLabel={page.title}
      />
      <ConsumerDisputesContent />
    </>
  );
}
