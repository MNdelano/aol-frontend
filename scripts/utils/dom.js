export const qs = (sel, root = document) => root.querySelector(sel);
export const qsa = (sel, root = document) => [...root.querySelectorAll(sel)];
export const html = (strings, ...vals) => strings.map((s, i) => s + (vals[i] ?? '')).join('');
export const render = (root, markup) => { root.innerHTML = markup; return root; };
