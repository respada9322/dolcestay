/**
 * Google Analytics 4 (GA4) configuration.
 * Set NEXT_PUBLIC_GA_MEASUREMENT_ID in .env (see .env.example).
 */

export function getGaMeasurementId(): string {
  const id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  return typeof id === 'string' ? id.trim() : '';
}

export function hasGaMeasurementId(): boolean {
  return getGaMeasurementId().length > 0;
}

export const GA4_ENV_VAR = 'NEXT_PUBLIC_GA_MEASUREMENT_ID' as const;
