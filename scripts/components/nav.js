const componentState = { name: 'nav' };

export function init() { return componentState; }
export function render() { return '<div class="c-nav" data-component="nav">Nav component</div>'; }
export function bindEvents() { return null; }
export function setState(nextState = {}) { Object.assign(componentState, nextState); return componentState; }
export function destroy() { return null; }
