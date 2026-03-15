const componentState = { name: 'header' };

export function init() { return componentState; }
export function render() { return '<div class="c-header" data-component="header">Header component</div>'; }
export function bindEvents() { return null; }
export function setState(nextState = {}) { Object.assign(componentState, nextState); return componentState; }
export function destroy() { return null; }
