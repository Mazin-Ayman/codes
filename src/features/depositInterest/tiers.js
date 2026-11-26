// Each tier applies to durations from 7 days up to (but not including) `upTo`.
export const DEPOSIT_TIERS = [
  { upTo: 15, rate: 0.0125 },
  { upTo: 30, rate: 0.0225 },
  { upTo: 90, rate: 0.0475 },
  { upTo: 180, rate: 0.05 },
  { upTo: 720, rate: 0.0525 },
  { upTo: 1080, rate: 0.055 },
  { upTo: Infinity, rate: 0.0575 },
];

export const MIN_DURATION_DAYS = 7;
