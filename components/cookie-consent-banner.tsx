'use client';

import Link from 'next/link';
import { X } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { useCookieConsent } from '@/lib/cookie-consent-context';
import { routes } from '@/lib/navigation';
import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';

export function CookieConsentBanner() {
  const { t } = useLanguage();
  const {
    showBanner,
    showCustomize,
    draftAnalytics,
    draftAdvertising,
    acceptAll,
    rejectAll,
    openCustomize,
    closeCustomize,
    setDraftAnalytics,
    setDraftAdvertising,
    savePreferences,
  } = useCookieConsent();

  if (!showBanner) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      aria-modal="false"
      className={cn(
        'fixed z-[60] animate-in fade-in slide-in-from-bottom-4 duration-300',
        'bottom-4 left-4 right-4 sm:right-auto sm:max-w-md',
        'lg:bottom-6 lg:left-6',
      )}
    >
      <div className="overflow-hidden rounded-2xl border border-[#CFE8D2] bg-white shadow-[0_12px_40px_rgba(31,78,95,0.14)]">
        <div className="h-1 bg-gradient-to-r from-[#8DBE91] via-[#CFE8D2] to-[#7EBBD3]" aria-hidden />

        <div className="p-5 sm:p-6">
          {!showCustomize ? (
            <>
              <h2
                id="cookie-consent-title"
                className="font-serif text-lg text-[#1F4E5F] sm:text-xl"
              >
                {t.cookieConsent.title}
              </h2>
              <p
                id="cookie-consent-description"
                className="mt-2 text-sm leading-relaxed text-[#6B7280]"
              >
                {t.cookieConsent.description}{' '}
                <Link
                  href={routes.cookies}
                  className="font-medium text-[#1F4E5F] underline-offset-2 hover:underline"
                >
                  {t.footer.legalLinks.cookies}
                </Link>
              </p>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <button
                  type="button"
                  onClick={acceptAll}
                  className="rounded-full bg-[#8DBE91] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7AAD7E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
                >
                  {t.cookieConsent.accept}
                </button>
                <button
                  type="button"
                  onClick={rejectAll}
                  className="rounded-full border border-[#1F4E5F]/20 bg-white px-5 py-2.5 text-sm font-medium text-[#1F4E5F] transition-colors hover:border-[#1F4E5F]/35 hover:bg-[#F8FAF8] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
                >
                  {t.cookieConsent.reject}
                </button>
                <button
                  type="button"
                  onClick={openCustomize}
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-[#1F4E5F]/80 transition-colors hover:bg-[#CFE8D2]/40 hover:text-[#1F4E5F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
                >
                  {t.cookieConsent.customize}
                </button>
              </div>
            </>
          ) : (
            <>
              <div className="mb-4 flex items-start justify-between gap-3">
                <h2
                  id="cookie-consent-title"
                  className="font-serif text-lg text-[#1F4E5F] sm:text-xl"
                >
                  {t.cookieConsent.customizeTitle}
                </h2>
                <button
                  type="button"
                  onClick={closeCustomize}
                  className="rounded-full p-1.5 text-[#6B7280] transition-colors hover:bg-[#F8FAF8] hover:text-[#1F4E5F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91]"
                  aria-label={t.cookieConsent.close}
                >
                  <X className="h-4 w-4" aria-hidden />
                </button>
              </div>

              <p className="text-sm leading-relaxed text-[#6B7280]">
                {t.cookieConsent.customizeDescription}
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl border border-[#E5E7EB] bg-[#F8FAF8]/80 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#1F4E5F]">
                        {t.cookieConsent.necessaryTitle}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                        {t.cookieConsent.necessaryDescription}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full bg-[#CFE8D2]/70 px-2.5 py-1 text-xs font-medium text-[#1F4E5F]">
                      {t.cookieConsent.alwaysActive}
                    </span>
                  </div>
                </div>

                <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#1F4E5F]">
                        {t.cookieConsent.analyticsTitle}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                        {t.cookieConsent.analyticsDescription}
                      </p>
                    </div>
                    <Switch
                      checked={draftAnalytics}
                      onCheckedChange={setDraftAnalytics}
                      aria-label={t.cookieConsent.analyticsTitle}
                    />
                  </div>
                </div>

                <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-[#1F4E5F]">
                        {t.cookieConsent.advertisingTitle}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">
                        {t.cookieConsent.advertisingDescription}
                      </p>
                    </div>
                    <Switch
                      checked={draftAdvertising}
                      onCheckedChange={setDraftAdvertising}
                      aria-label={t.cookieConsent.advertisingTitle}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={savePreferences}
                  className="rounded-full bg-[#1F4E5F] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#163B48] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
                >
                  {t.cookieConsent.savePreferences}
                </button>
                <button
                  type="button"
                  onClick={closeCustomize}
                  className="rounded-full px-5 py-2.5 text-sm font-medium text-[#1F4E5F]/80 transition-colors hover:bg-[#CFE8D2]/40 hover:text-[#1F4E5F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBE91] focus-visible:ring-offset-2"
                >
                  {t.cookieConsent.back}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
