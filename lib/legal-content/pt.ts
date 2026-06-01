import { cookiePolicySections } from '@/lib/cookie-policy';
import { privacyPolicySections } from '@/lib/privacy-policy';
import { termsAndConditionsSections } from '@/lib/terms-and-conditions';
import type { LegalContentBundle } from '@/lib/legal-content/types';
import type { LegalSection } from '@/lib/legal';

function withIds(sections: LegalSection[], ids: string[]): LegalSection[] {
  return sections.map((section, index) => ({ ...section, id: ids[index] }));
}

const PRIVACY_IDS = [
  'introduction',
  'who-we-are',
  'why-we-process',
  'what-data',
  'processing-purposes',
  'retention',
  'data-sharing',
  'outside-eu',
  'your-rights',
  'security',
  'questions',
] as const;

const TERMS_IDS = [
  'booking-conditions',
  'payment-options',
  'pre-check-in',
  'cancellation',
  'stay-conditions',
  'additional-services',
  'check-in-out',
  'cleaning-linen',
  'equipment',
  'maintenance',
  'noise-safety',
  'liability',
  'force-majeure',
  'changes-law',
] as const;

const COOKIE_IDS = [
  'introduction',
  'what-are-cookies',
  'cookies-we-use',
  'ga4-consent',
  'manage-consent',
  'retention',
  'contact',
] as const;

export const ptLegalContent: LegalContentBundle = {
  privacy: { sections: withIds(privacyPolicySections, [...PRIVACY_IDS]) },
  terms: { sections: withIds(termsAndConditionsSections, [...TERMS_IDS]) },
  cookies: { sections: withIds(cookiePolicySections, [...COOKIE_IDS]) },
  consumerDisputes: {
    intro:
      'Em caso de litígio, o consumidor pode recorrer a uma Entidade de Resolução Alternativa de Litígios de Consumo:',
    entityTitle: 'Centro de Arbitragem Sesimbra',
    labels: {
      address: 'Morada',
      phone: 'Tel',
      fax: 'Fax',
      email: 'Correio eletrónico',
    },
  },
};
