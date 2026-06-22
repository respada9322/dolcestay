import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod';
import { PHONE_VALIDATION_ERROR } from './phone';
import { FORM_TYPES, type ContactPayload } from './types';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_FORM_TIME_MS = 1_500;
const MAX_FORM_AGE_MS = 24 * 60 * 60 * 1_000;

export const FIELD_LIMITS = {
  name: 120,
  email: 254,
  phone: 40,
  contactType: 80,
  propertyLocation: 200,
  propertyType: 80,
  bedrooms: 10,
  message: 5000,
  sourcePage: 200,
} as const;

const GENERIC_ERROR =
  'Não foi possível enviar a mensagem. Tente novamente ou contacte-nos diretamente.';

export const contactPayloadSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(1, 'Nome é obrigatório.')
      .max(FIELD_LIMITS.name),
    email: z
      .string()
      .trim()
      .min(1, 'Email é obrigatório.')
      .max(FIELD_LIMITS.email)
      .refine((v) => EMAIL_REGEX.test(v), 'Email inválido.'),
    phone: z.string().trim().max(FIELD_LIMITS.phone).optional(),
    countryCode: z.string().trim().max(6).optional(),
    countryIso: z.string().trim().max(2).optional(),
    formattedPhone: z.string().trim().max(FIELD_LIMITS.phone).optional(),
    rawPhone: z.string().trim().max(FIELD_LIMITS.phone).optional(),
    contactType: z.string().trim().max(FIELD_LIMITS.contactType).optional(),
    propertyLocation: z
      .string()
      .trim()
      .max(FIELD_LIMITS.propertyLocation)
      .optional(),
    propertyType: z.string().trim().max(FIELD_LIMITS.propertyType).optional(),
    bedrooms: z.string().trim().max(FIELD_LIMITS.bedrooms).optional(),
    message: z.string().trim().max(FIELD_LIMITS.message).optional(),
    sourcePage: z.string().trim().max(FIELD_LIMITS.sourcePage).optional(),
    formType: z.enum(FORM_TYPES),
    formLoadedAt: z.number().int().positive().optional(),
  })
  .superRefine((data, ctx) => {
    const needsMessage =
      data.formType === 'contact' ||
      data.formType === 'general' ||
      data.formType === 'booking';

    if (needsMessage && (!data.message || data.message.length < 1)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Mensagem é obrigatória.',
        path: ['message'],
      });
    }

    if (data.phone && data.phone.length > 0) {
      if (!data.phone.startsWith('+') || !isValidPhoneNumber(data.phone)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: PHONE_VALIDATION_ERROR,
          path: ['phone'],
        });
      }
    }
  });

function isSpamTiming(formLoadedAt: number | undefined): boolean {
  if (formLoadedAt == null) {
    return true;
  }

  const elapsed = Date.now() - formLoadedAt;

  if (elapsed < MIN_FORM_TIME_MS) {
    return true;
  }

  if (elapsed > MAX_FORM_AGE_MS) {
    return true;
  }

  return false;
}

export function parseContactPayload(
  body: unknown,
): { success: true; data: ContactPayload } | { success: false; error: string } {
  const parsed = contactPayloadSchema.safeParse(body);
  if (!parsed.success) {
    const first = parsed.error.errors[0]?.message ?? 'Dados inválidos.';
    return { success: false, error: first };
  }

  if (isSpamTiming(parsed.data.formLoadedAt)) {
    console.warn('[contact] Spam timing check failed');
    return { success: false, error: GENERIC_ERROR };
  }

  return { success: true, data: parsed.data };
}

export function mapContactTypeValue(type: string): string {
  const map: Record<string, string> = {
    reservation: 'Reserva',
    owner: 'Proprietário',
    activity: 'Atividade',
    partnership: 'Atividade',
    other: 'Geral',
  };
  return map[type] ?? type;
}

export function mapContactFormType(type: string): ContactPayload['formType'] {
  const map: Record<string, ContactPayload['formType']> = {
    reservation: 'booking',
    owner: 'owner-lead',
    activity: 'contact',
    partnership: 'contact',
    other: 'general',
  };
  return map[type] ?? 'contact';
}
