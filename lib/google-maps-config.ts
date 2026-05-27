/**
 * Google Maps API key (Next.js).
 *
 * This project uses Next.js — client-side env vars must be prefixed with NEXT_PUBLIC_.
 * Set the key in `.env.local` (not committed):
 *
 *   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
 *
 * Restart the dev server after changing env files (`npm run dev`).
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
