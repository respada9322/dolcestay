import type { LegalContentBundle } from '@/lib/legal-content/types';
import { esCookieSections } from '@/lib/legal-content/es/cookies';
import { esPrivacySections } from '@/lib/legal-content/es/privacy';
import { esTermsSections } from '@/lib/legal-content/es/terms';

export const esLegalContent: LegalContentBundle = {
  privacy: { sections: esPrivacySections },
  terms: { sections: esTermsSections },
  cookies: { sections: esCookieSections },
  consumerDisputes: {
    intro:
      'En caso de litigio, el consumidor puede recurrir a una entidad de resolución alternativa de litigios de consumo:',
    entityTitle: 'Centro de Arbitraje de Sesimbra',
    labels: {
      address: 'Dirección',
      phone: 'Tel',
      fax: 'Fax',
      email: 'Correo electrónico',
    },
  },
};
