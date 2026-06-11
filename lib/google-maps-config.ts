/**
 * Google Maps API key (Next.js).
 *
 * Client-side env vars must be prefixed with NEXT_PUBLIC_.
 * Local: set in `.env` (see `.env.example`). Vercel: same name in Project → Environment Variables.
 *
 *   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
 *
 * Restart the dev server after changing `.env` locally (`npm run dev`).
 * On Vercel, redeploy after adding or updating the variable.
 *
 * @see README.md — "Google Maps setup"
 */
export function getGoogleMapsApiKey(): string {
  const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return typeof key === 'string' ? key.trim() : '';
}

export function hasGoogleMapsApiKey(): boolean {
  return getGoogleMapsApiKey().length > 0;
}

/** Env var name shown in UI / docs (not a secret). */
export const GOOGLE_MAPS_ENV_VAR = 'NEXT_PUBLIC_GOOGLE_MAPS_API_KEY' as const;
