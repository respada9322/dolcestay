'use client';

import Link from 'next/link';
import { Cookie } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { routes } from '@/lib/navigation';
import { openCookiePreferences } from '@/lib/cookie-consent-context';
import { cn } from '@/lib/utils';

type CookiePreferencesTriggerProps = {
  className?: string;
  variant?: 'button' | 'link';
};

export function CookiePreferencesTrigger({
  className,
  variant = 'button',
}: CookiePreferencesTriggerProps) {
  const { t } = useLanguage();

  if (variant === 'link') {
    return (
      <button
        type="button"
        onClick={openCookiePreferences}
        className={cn(
          'text-left text-sm text-[#6B7280] underline-offset-2 transition-colors hover:text-[#1F4E5F] hover:underline',
          className,
        )}
      >
        {t.cookieConsent.managePreferences}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={openCookiePreferences}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-[#CFE8D2] bg-[#CFE8D2]/40 px-5 py-2.5 text-sm font-medium text-[#1F4E5F] transition-colors hover:border-[#8DBE91] hover:bg-[#CFE8D2]/70',
        className,
      )}
    >
      <Cookie className="h-4 w-4 text-[#8DBE91]" aria-hidden />
      {t.cookieConsent.managePreferences}
    </button>
  );
}

export function CookiePolicyLink({ className }: { className?: string }) {
  const { t } = useLanguage();

  return (
    <Link
      href={routes.cookies}
      className={cn(
        'text-sm text-[#6B7280] underline-offset-2 transition-colors hover:text-[#1F4E5F] hover:underline',
        className,
      )}
    >
      {t.footer.legalLinks.cookies}
    </Link>
  );
}
