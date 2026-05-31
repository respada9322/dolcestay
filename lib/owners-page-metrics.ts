/** Editable trust metrics for /proprietarios — update numeric values here. */
export const OWNERS_PAGE_METRICS = {
  metric1: {
    value: '100%',
    counterType: 'percent' as const,
    counterValue: 100,
  },
  metric2: {
    value: '4.9',
    counterType: 'decimal' as const,
    counterValue: 4.9,
  },
  metric3: {
    value: '24/7',
    counterType: 'static' as const,
  },
  metric4: {
    value: '+32%',
    counterType: 'percentPlus' as const,
    counterValue: 32,
  },
} as const;

export type OwnersPageMetricKey = keyof typeof OWNERS_PAGE_METRICS;
