'use client';

import { useMemo } from 'react';
import PhoneInput, {
  type Country,
  type Value,
} from 'react-phone-number-input';
import en from 'react-phone-number-input/locale/en.json';
import pt from 'react-phone-number-input/locale/pt.json';
import fr from 'react-phone-number-input/locale/fr.json';
import es from 'react-phone-number-input/locale/es.json';
import de from 'react-phone-number-input/locale/de.json';
import { getExampleNumber, parsePhoneNumber } from 'libphonenumber-js';
import examples from 'libphonenumber-js/mobile/examples';
import { cn } from '@/lib/utils';
import type { Language } from '@/lib/translations';
import { PhoneCountrySelect } from '@/components/contact/phone-country-select';
import './international-phone-input.css';

const LOCALE_LABELS: Record<Language, typeof en> = {
  pt,
  en,
  fr,
  es,
  de,
};

type InternationalPhoneInputProps = {
  id?: string;
  value: Value | undefined;
  onChange: (value: Value | undefined) => void;
  onBlur?: () => void;
  disabled?: boolean;
  invalid?: boolean;
  language?: Language;
  defaultCountry?: Country;
  className?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
};

function getNationalPlaceholder(country: Country | undefined): string {
  if (!country) {
    return '';
  }

  try {
    const example = getExampleNumber(country, examples);
    return example?.formatNational() ?? '';
  } catch {
    return '';
  }
}

export function InternationalPhoneInput({
  id,
  value,
  onChange,
  onBlur,
  disabled = false,
  invalid = false,
  language = 'pt',
  defaultCountry = 'PT',
  className,
  searchPlaceholder,
  emptyMessage,
}: InternationalPhoneInputProps) {
  const labels = LOCALE_LABELS[language] ?? pt;

  const selectedCountry = useMemo(() => {
    if (!value) {
      return defaultCountry;
    }

    try {
      return parsePhoneNumber(value)?.country ?? defaultCountry;
    } catch {
      return defaultCountry;
    }
  }, [value, defaultCountry]);

  const placeholder = getNationalPlaceholder(selectedCountry);

  return (
    <PhoneInput
      id={id}
      countryCallingCodeEditable={false}
      defaultCountry={defaultCountry}
      labels={labels}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      disabled={disabled}
      placeholder={placeholder}
      smartCaret
      countrySelectComponent={PhoneCountrySelect}
      countrySelectProps={{
        searchPlaceholder,
        emptyMessage,
        defaultCountry,
      }}
      className={cn(
        'dolce-phone-input',
        invalid && 'dolce-phone-input--invalid',
        disabled && 'dolce-phone-input--disabled',
        className,
      )}
      numberInputProps={{
        'aria-invalid': invalid || undefined,
      }}
    />
  );
}
