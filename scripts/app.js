import * as state from './state.js';
import * as router from './router.js';
import * as api from './api-mock.js';

const appState = { mounted: false };

export function init() {
  state.init();
  router.init();
  api.init();
  appState.mounted = true;
  return appState;
}

export function render() { return appState; }
export function bindEvents() { return null; }
export function setState(nextState = {}) { Object.assign(appState, nextState); return appState; }
export function destroy() { appState.mounted = false; return appState; }
