const amountFormatter = new Intl.NumberFormat("en-US", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

/** Converts an input value to a finite number, or null when it is empty/invalid. */
export const toNumber = (value) => {
  if (value === "" || value === null || value === undefined) return null;
  const number = typeof value === "number" ? value : Number(value);
  return Number.isFinite(number) ? number : null;
};

export const formatAmount = (value) => {
  const number = toNumber(value);
  return number === null ? "—" : amountFormatter.format(number);
};

export const formatPercent = (rate) => {
  const number = toNumber(rate);
  return number === null ? "—" : `${amountFormatter.format(number * 100)}%`;
};
