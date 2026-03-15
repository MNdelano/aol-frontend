export const required = (v) => typeof v === 'string' && v.trim().length > 0;
export const minLen = (v, n) => (v || '').trim().length >= n;
export const isScore = (v, max = 10) => Number.isFinite(+v) && +v >= 0 && +v <= max;
