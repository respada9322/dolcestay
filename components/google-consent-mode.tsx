import Script from 'next/script';
import {
  COOKIE_CONSENT_STORAGE_KEY,
  COOKIE_CONSENT_VERSION,
} from '@/lib/cookie-consent';

/**
 * Sets Google Consent Mode v2 defaults before any Google tag loads.
 * Restores saved preferences synchronously for returning visitors.
 */
export function GoogleConsentMode() {
  const restoreScript = `
(function () {
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}

  var analytics = 'denied';
  var ad = 'denied';

  try {
    var raw = localStorage.getItem('${COOKIE_CONSENT_STORAGE_KEY}');
    if (raw) {
      var consent = JSON.parse(raw);
      if (consent && consent.version === ${COOKIE_CONSENT_VERSION}) {
        analytics = consent.analytics ? 'granted' : 'denied';
        ad = consent.advertising ? 'granted' : 'denied';
      }
    }
  } catch (e) {}

  gtag('consent', 'default', {
    analytics_storage: analytics,
    ad_storage: ad,
    ad_user_data: ad,
    ad_personalization: ad,
    wait_for_update: 500,
  });
})();
`.trim();

  return (
    <Script
      id="google-consent-mode"
      strategy="beforeInteractive"
      dangerouslySetInnerHTML={{ __html: restoreScript }}
    />
  );
}
