const state = { page: 'home', data: {} };

export function init() { return state; }
export function render() { return state; }
export function bindEvents() { return null; }
export function setState(nextState = {}) { Object.assign(state, nextState); return state; }
export function destroy() { return null; }
