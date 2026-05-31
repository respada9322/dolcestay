'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import {
  dispatchConsentUpdate,
  getStoredConsent,
  saveConsent,
  updateGoogleConsent,
  type CookieConsentPreferences,
} from '@/lib/cookie-consent';

const OPEN_PREFERENCES_EVENT = 'dolcestay:open-cookie-preferences';

type CookieConsentContextValue = {
  hasStoredConsent: boolean;
  showBanner: boolean;
  showCustomize: boolean;
  draftAnalytics: boolean;
  draftAdvertising: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  openCustomize: () => void;
  closeCustomize: () => void;
  setDraftAnalytics: (value: boolean) => void;
  setDraftAdvertising: (value: boolean) => void;
  savePreferences: () => void;
  openPreferences: () => void;
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(
  undefined,
);

function applyConsent(preferences: Pick<CookieConsentPreferences, 'analytics' | 'advertising'>) {
  const stored = saveConsent(preferences);
  updateGoogleConsent(stored.analytics, stored.advertising);
  dispatchConsentUpdate(stored);
  return stored;
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [hasStoredConsent, setHasStoredConsent] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [draftAnalytics, setDraftAnalytics] = useState(false);
  const [draftAdvertising, setDraftAdvertising] = useState(false);

  useEffect(() => {
    const stored = getStoredConsent();
    if (stored) {
      setHasStoredConsent(true);
      setShowBanner(false);
      setDraftAnalytics(stored.analytics);
      setDraftAdvertising(stored.advertising);
    } else {
      setHasStoredConsent(false);
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    const handleOpenPreferences = () => {
      const stored = getStoredConsent();
      setDraftAnalytics(stored?.analytics ?? false);
      setDraftAdvertising(stored?.advertising ?? false);
      setShowCustomize(true);
      setShowBanner(true);
    };

    window.addEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
    return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, handleOpenPreferences);
  }, []);

  const finalize = useCallback(
    (preferences: Pick<CookieConsentPreferences, 'analytics' | 'advertising'>) => {
      applyConsent(preferences);
      setHasStoredConsent(true);
      setShowBanner(false);
      setShowCustomize(false);
    },
    [],
  );

  const acceptAll = useCallback(() => {
    finalize({ analytics: true, advertising: true });
  }, [finalize]);

  const rejectAll = useCallback(() => {
    finalize({ analytics: false, advertising: false });
  }, [finalize]);

  const openCustomize = useCallback(() => {
    const stored = getStoredConsent();
    setDraftAnalytics(stored?.analytics ?? false);
    setDraftAdvertising(stored?.advertising ?? false);
    setShowCustomize(true);
  }, []);

  const closeCustomize = useCallback(() => {
    setShowCustomize(false);
    if (hasStoredConsent) setShowBanner(false);
  }, [hasStoredConsent]);

  const savePreferences = useCallback(() => {
    finalize({ analytics: draftAnalytics, advertising: draftAdvertising });
  }, [draftAnalytics, draftAdvertising, finalize]);

  const openPreferences = useCallback(() => {
    window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
  }, []);

  const value = useMemo(
    () => ({
      hasStoredConsent,
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
      openPreferences,
    }),
    [
      hasStoredConsent,
      showBanner,
      showCustomize,
      draftAnalytics,
      draftAdvertising,
      acceptAll,
      rejectAll,
      openCustomize,
      closeCustomize,
      savePreferences,
      openPreferences,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within CookieConsentProvider');
  }
  return context;
}

export function openCookiePreferences() {
  window.dispatchEvent(new CustomEvent(OPEN_PREFERENCES_EVENT));
}
