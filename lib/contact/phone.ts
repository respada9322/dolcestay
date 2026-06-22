import {
  isValidPhoneNumber,
  parsePhoneNumber,
  type CountryCode,
} from 'libphonenumber-js';

export type PhoneFieldData = {
  phone: string;
  formattedPhone: string;
  countryCode: string;
  countryIso: CountryCode;
  rawPhone: string;
};

export const PHONE_VALIDATION_ERROR =
  'Introduza um número de telefone válido para o país selecionado.';

export function isOptionalPhoneValid(value: string | undefined): boolean {
  if (!value?.trim()) {
    return true;
  }

  return isValidPhoneNumber(value);
}

export function parsePhoneFieldData(value: string): PhoneFieldData | null {
  try {
    const parsed = parsePhoneNumber(value);
    if (!parsed?.isValid()) {
      return null;
    }

    const e164 = parsed.format('E.164');

    return {
      phone: e164,
      formattedPhone: e164,
      countryCode: `+${parsed.countryCallingCode}`,
      countryIso: parsed.country as CountryCode,
      rawPhone: parsed.nationalNumber,
    };
  } catch {
    return null;
  }
}

export function buildPhonePayload(value: string | undefined) {
  if (!value?.trim()) {
    return {
      phone: undefined,
      formattedPhone: undefined,
      countryCode: undefined,
      countryIso: undefined,
      rawPhone: undefined,
    };
  }

  const parsed = parsePhoneFieldData(value);
  if (!parsed) {
    return {
      phone: value.trim(),
      formattedPhone: undefined,
      countryCode: undefined,
      countryIso: undefined,
      rawPhone: undefined,
    };
  }

  return parsed;
}
