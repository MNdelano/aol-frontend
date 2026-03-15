export function init() { return 'transitions-ready'; }
export function render() { return 'transitions-render'; }
export function bindEvents() { return null; }
export function setState() { return null; }
export function animateIn(target) { target?.classList.add('is-active'); return target; }
export function animateOut(target) { target?.classList.remove('is-active'); return target; }
export function destroy() { return null; }
