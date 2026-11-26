/** Reads a key from a dictionary without throwing on missing or empty keys. */
export const getEntry = (source, key) =>
  key && source && Object.prototype.hasOwnProperty.call(source, key) ? source[key] : null;
