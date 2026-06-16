'use client';

import { useState } from 'react';
import type { Language } from '@/lib/translations';

const FLAG_PATHS: Record<Language, string> = {
  pt: '/images/flags/pt.svg',
  en: '/images/flags/en.svg',
  fr: '/images/flags/fr.svg',
  es: '/images/flags/es.svg',
  de: '/images/flags/de.svg',
};

interface LanguageFlagProps {
  code: Language;
  className?: string;
}

export function LanguageFlag({
  code,
  className = 'h-4 w-6 shrink-0 rounded-sm object-cover',
}: LanguageFlagProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return null;
  }

  return (
    // Decorative flag: visible label carries the language code (e.g. "PT").
    <img
      src={FLAG_PATHS[code]}
      alt=""
      aria-hidden="true"
      className={className}
      decoding="async"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
