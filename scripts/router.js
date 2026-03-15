const routes = new Map();

export function init() { return routes; }
export function render() { return Array.from(routes.keys()); }
export function bindEvents() { return null; }
export function setState(path, handler) { if (path && handler) routes.set(path, handler); return routes; }
export function destroy() { routes.clear(); }
