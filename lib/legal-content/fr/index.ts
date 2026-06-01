import type { LegalContentBundle } from '@/lib/legal-content/types';
import { frCookieSections } from '@/lib/legal-content/fr/cookies';
import { frPrivacySections } from '@/lib/legal-content/fr/privacy';
import { frTermsSections } from '@/lib/legal-content/fr/terms';

export const frLegalContent: LegalContentBundle = {
  privacy: { sections: frPrivacySections },
  terms: { sections: frTermsSections },
  cookies: { sections: frCookieSections },
  consumerDisputes: {
    intro:
      'En cas de litige, le consommateur peut recourir à une entité de résolution alternative des litiges de consommation :',
    entityTitle: 'Centre d\'Arbitrage de Sesimbra',
    labels: {
      address: 'Adresse',
      phone: 'Tél',
      fax: 'Fax',
      email: 'E-mail',
    },
  },
};
