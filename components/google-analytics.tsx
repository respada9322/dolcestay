'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import {
  CONSENT_UPDATE_EVENT,
  getStoredConsent,
  type CookieConsentPreferences,
} from '@/lib/cookie-consent';
import { getGaMeasurementId, hasGaMeasurementId } from '@/lib/ga4-config';

/**
 * Loads GA4 only after explicit analytics consent.
 */
export function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);
  const measurementId = getGaMeasurementId();

  useEffect(() => {
    const syncFromStorage = () => {
      const consent = getStoredConsent();
      setShouldLoad(Boolean(consent?.analytics && hasGaMeasurementId()));
    };

    syncFromStorage();

    const handleConsentUpdate = (event: Event) => {
      const detail = (event as CustomEvent<CookieConsentPreferences>).detail;
      setShouldLoad(Boolean(detail?.analytics && hasGaMeasurementId()));
    };

    window.addEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
    return () => window.removeEventListener(CONSENT_UPDATE_EVENT, handleConsentUpdate);
  }, []);

  if (!shouldLoad || !measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
