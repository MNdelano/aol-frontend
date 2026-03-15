export function init() { return 'page-fade-ready'; }
export function render() { return 'page-fade-render'; }
export function bindEvents() { return null; }
export function setState() { return null; }
export function animateIn(target) { target?.setAttribute('data-state', 'visible'); return target; }
export function animateOut(target) { target?.setAttribute('data-state', 'hidden'); return target; }
export function destroy() { return null; }
