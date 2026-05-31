'use client';

import { Analytics } from '@vercel/analytics/next';
import { useEffect, useState } from 'react';
import {
  CONSENT_UPDATE_EVENT,
  getStoredConsent,
  type CookieConsentPreferences,
} from '@/lib/cookie-consent';

/**
 * Vercel Analytics — only after explicit analytics consent (RGPD).
 */
export function ConditionalVercelAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const syncFromStorage = () => {
      setEnabled(getStoredConsent()?.analytics === true);
    };

    syncFromStorage();

    const handleConsentUpdate = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentPreferences>).detail;
      setEnabled(detail?.analytics === true);
    };

    window.addEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
    return () => window.removeEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
  }, []);

  if (!enabled || process.env.NODE_ENV !== 'production') return null;

  return <Analytics />;
}
