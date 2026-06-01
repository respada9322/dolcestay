'use client';

import { LegalDocument } from '@/components/legal/legal-document';
import { LegalPageHero } from '@/components/legal/legal-page-hero';
import { CookiePreferencesTrigger } from '@/components/cookie-preferences-trigger';
import { getLegalContent } from '@/lib/legal-content';
import { useLanguage } from '@/lib/language-context';

export function CookiePolicyView() {
  const { language, t } = useLanguage();
  const page = t.legal.pages.cookies;
  const { sections } = getLegalContent(language).cookies;

  return (
    <>
      <LegalPageHero
        title={page.title}
        description={page.description}
        lastUpdated={page.lastUpdated}
        metadataNote={page.metadataNote}
        currentPageLabel={page.title}
      />
      <div className="container mx-auto max-w-3xl px-4 pb-4">
        <div className="flex justify-center">
          <CookiePreferencesTrigger />
        </div>
      </div>
      <LegalDocument sections={sections} />
    </>
  );
}
