export const FORM_TYPES = [
  'contact',
  'owner-lead',
  'booking',
  'property-evaluation',
  'general',
] as const;

export type FormType = (typeof FORM_TYPES)[number];

export type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  contactType?: string;
  propertyLocation?: string;
  propertyType?: string;
  bedrooms?: string;
  message?: string;
  sourcePage?: string;
  formType: FormType;
  /** Client timestamp (ms) when the form was rendered — used for spam protection */
  formLoadedAt?: number;
};

export type ContactApiResponse =
  | { ok: true }
  | { ok: false; error: string };
