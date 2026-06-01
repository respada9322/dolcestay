import type { LegalContentBundle } from '@/lib/legal-content/types';
import { enCookieSections } from '@/lib/legal-content/en/cookies';
import { enPrivacySections } from '@/lib/legal-content/en/privacy';
import { enTermsSections } from '@/lib/legal-content/en/terms';

export const enLegalContent: LegalContentBundle = {
  privacy: { sections: enPrivacySections },
  terms: { sections: enTermsSections },
  cookies: { sections: enCookieSections },
  consumerDisputes: {
    intro:
      'In the event of a dispute, consumers may use an Alternative Consumer Dispute Resolution entity:',
    entityTitle: 'Sesimbra Arbitration Centre',
    labels: {
      address: 'Address',
      phone: 'Phone',
      fax: 'Fax',
      email: 'Email',
    },
  },
};
