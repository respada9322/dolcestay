'use client';

import { Analytics } from '@vercel/analytics/next';
import { track } from '@vercel/analytics';
import { useEffect, useState } from 'react';
import {
  CONSENT_UPDATE_EVENT,
  getStoredConsent,
  type CookieConsentPreferences,
} from '@/lib/cookie-consent';

const MAX_MESSAGE_LENGTH = 200;

/** Truncates and strips anything that could resemble user-entered data (query strings, emails). */
function sanitizeMessage(message: string) {
  return message
    .replace(/[?&][^\s]+=[^\s]*/g, '')
    .slice(0, MAX_MESSAGE_LENGTH);
}

/** Reports uncaught client errors as anonymous Vercel Analytics events, to help spot regressions like the iOS Safari crashes. */
function ClientErrorReporter() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      track('client_error', {
        message: sanitizeMessage(event.message || 'unknown error'),
        source: event.filename ? sanitizeMessage(event.filename) : 'unknown',
        path: window.location.pathname,
      });
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason instanceof Error ? event.reason.message : String(event.reason ?? 'unknown');
      track('client_error', {
        message: sanitizeMessage(`unhandled rejection: ${reason}`),
        source: 'promise',
        path: window.location.pathname,
      });
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleRejection);
    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleRejection);
    };
  }, []);

  return null;
}

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

  return (
    <>
      <Analytics />
      <ClientErrorReporter />
    </>
  );
}
