export const WORKER_BONUS = 0.02;
export const WORKER_BONUS_LIMIT = 200000;

export const TIERED_RATES = [
  { label: "اسبوع واقل من اسبوعين", minDeposit: 500000, rate: 0.0125 },
  { label: "اسبوعين واقل من شهر", minDeposit: 500000, rate: 0.0225 },
  { label: "شهر واقل من ثلاثة شهور", minDeposit: 0, rate: 0.0475 },
  { label: "ثلاثة شهور واقل من ستة شهور", minDeposit: 0, rate: 0.05 },
  { label: "ستة شهور واقل من سنة", minDeposit: 0, rate: 0.05 },
  { label: "سنة واقل من سنتين", minDeposit: 0, rate: 0.0525 },
  { label: "سنتين واقل من ثلاث سنوات", minDeposit: 0, rate: 0.0525 },
  { label: "ثلاث سنوات", minDeposit: 0, rate: 0.0575 },
];
