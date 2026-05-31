export const COOKIE_CONSENT_STORAGE_KEY = 'dolcestay_cookie_consent';
export const COOKIE_CONSENT_VERSION = 1;
export const CONSENT_UPDATE_EVENT = 'dolcestay:consent-update';

export type CookieConsentPreferences = {
  analytics: boolean;
  advertising: boolean;
  timestamp: string;
  version: number;
};

export type ConsentStatus = 'granted' | 'denied';

export function toConsentStatus(granted: boolean): ConsentStatus {
  return granted ? 'granted' : 'denied';
}

export function getStoredConsent(): CookieConsentPreferences | null {
  if (typeof window === 'undefined') return null;

  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as CookieConsentPreferences;
    if (parsed.version !== COOKIE_CONSENT_VERSION) return null;

    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(
  preferences: Pick<CookieConsentPreferences, 'analytics' | 'advertising'>,
): CookieConsentPreferences {
  const stored: CookieConsentPreferences = {
    ...preferences,
    timestamp: new Date().toISOString(),
    version: COOKIE_CONSENT_VERSION,
  };

  localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(stored));
  return stored;
}

export function ensureGtag(): void {
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  if (typeof window.gtag !== 'function') {
    window.gtag = (...args: unknown[]) => {
      window.dataLayer!.push(args);
    };
  }
}

export function updateGoogleConsent(analytics: boolean, advertising: boolean): void {
  if (typeof window === 'undefined') return;

  ensureGtag();
  const adStatus = toConsentStatus(advertising);

  window.gtag!('consent', 'update', {
    analytics_storage: toConsentStatus(analytics),
    ad_storage: adStatus,
    ad_user_data: adStatus,
    ad_personalization: adStatus,
  });
}

export function dispatchConsentUpdate(preferences: CookieConsentPreferences): void {
  window.dispatchEvent(
    new CustomEvent(CONSENT_UPDATE_EVENT, {
      detail: preferences,
    }),
  );
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent()?.analytics === true;
}
