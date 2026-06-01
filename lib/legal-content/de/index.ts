import type { LegalContentBundle } from '@/lib/legal-content/types';
import { deCookieSections } from '@/lib/legal-content/de/cookies';
import { dePrivacySections } from '@/lib/legal-content/de/privacy';
import { deTermsSections } from '@/lib/legal-content/de/terms';

export const deLegalContent: LegalContentBundle = {
  privacy: { sections: dePrivacySections },
  terms: { sections: deTermsSections },
  cookies: { sections: deCookieSections },
  consumerDisputes: {
    intro:
      'Im Falle eines Streitfalls können Verbraucher eine außergerichtliche Verbraucherschlichtungsstelle anrufen:',
    entityTitle: 'Schiedszentrum Sesimbra',
    labels: {
      address: 'Adresse',
      phone: 'Tel',
      fax: 'Fax',
      email: 'E-Mail',
    },
  },
};
