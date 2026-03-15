export const pct = (v) => `${Math.round(v)}%`;
export const dateFmt = (d) => new Intl.DateTimeFormat('en', { dateStyle: 'medium' }).format(new Date(d));
export const titleCase = (v) => v.replace(/[-_]/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
