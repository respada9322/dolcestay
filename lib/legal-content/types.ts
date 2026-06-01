import type { LegalSection } from '@/lib/legal';

export type LegalPageSections = {
  sections: LegalSection[];
};

export type ConsumerDisputesCopy = {
  intro: string;
  entityTitle: string;
  labels: {
    address: string;
    phone: string;
    fax: string;
    email: string;
  };
};

export type LegalContentBundle = {
  privacy: LegalPageSections;
  terms: LegalPageSections;
  cookies: LegalPageSections;
  consumerDisputes: ConsumerDisputesCopy;
};
