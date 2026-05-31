/**
 * Google Reviews URL for the testimonials review CTA.
 *
 * Client-side env vars must be prefixed with NEXT_PUBLIC_.
 * Local: set in `.env` (see `.env.example`). Vercel: same name in Project → Environment Variables.
 *
 *   NEXT_PUBLIC_GOOGLE_REVIEWS_URL=https://g.page/r/your-place/review
 *
 * Restart the dev server after changing `.env` locally (`npm run dev`).
 */
const PLACEHOLDER_GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=DolceStay+reviews';

export function getGoogleReviewsUrl(): string {
  const url = process.env.NEXT_PUBLIC_GOOGLE_REVIEWS_URL;
  const trimmed = typeof url === 'string' ? url.trim() : '';
  return trimmed.length > 0 ? trimmed : PLACEHOLDER_GOOGLE_REVIEWS_URL;
}

export const GOOGLE_REVIEWS_ENV_VAR = 'NEXT_PUBLIC_GOOGLE_REVIEWS_URL' as const;
