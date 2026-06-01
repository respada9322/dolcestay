'use client';

import { LegalDocument } from '@/components/legal/legal-document';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { getLegalContent } from '@/lib/legal-content';
import { useLanguage } from '@/lib/language-context';

export function PrivacyPolicyView() {
  const { language, t } = useLanguage();
  const page = t.legal.pages.privacy;
  const { sections } = getLegalContent(language).privacy;

  return (
    <>
      <LegalPageHero
        title={page.title}
        description={page.description}
        lastUpdated={page.lastUpdated}
        metadataNote={page.metadataNote}
        currentPageLabel={page.title}
      />
      <LegalDocument sections={sections} />
    </>
  );
}
