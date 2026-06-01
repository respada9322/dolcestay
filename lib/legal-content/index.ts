import type { Language } from '@/lib/translations';
import { deLegalContent } from '@/lib/legal-content/de';
import { enLegalContent } from '@/lib/legal-content/en';
import { esLegalContent } from '@/lib/legal-content/es';
import { frLegalContent } from '@/lib/legal-content/fr';
import { ptLegalContent } from '@/lib/legal-content/pt';
import type { LegalContentBundle } from '@/lib/legal-content/types';

const legalContentByLanguage: Record<Language, LegalContentBundle> = {
  pt: ptLegalContent,
  en: enLegalContent,
  fr: frLegalContent,
  es: esLegalContent,
  de: deLegalContent,
};

export function getLegalContent(language: Language): LegalContentBundle {
  return legalContentByLanguage[language];
}

export type { LegalContentBundle, ConsumerDisputesCopy } from '@/lib/legal-content/types';
