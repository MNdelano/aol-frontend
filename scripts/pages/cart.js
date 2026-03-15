import * as app from '../app.js';
import * as header from '../components/header.js';
import * as nav from '../components/nav.js';
import * as footer from '../components/footer.js';
import * as transitions from '../animations/transitions.js';
import * as pageFade from '../animations/page-fade.js';

const pageState = { page: 'cart' };

export function init() {
  app.init();
  header.init();
  nav.init();
  footer.init();
  transitions.init();
  pageFade.init();
  return pageState;
}

export function render() { return pageState; }
export function bindEvents() { return null; }
export function setState(nextState = {}) { Object.assign(pageState, nextState); return pageState; }
export function destroy() { return null; }

init();
