export const on = (node, event, handler, opts) => {
  node.addEventListener(event, handler, opts);
  return () => node.removeEventListener(event, handler, opts);
};

export const delegate = (node, event, selector, handler) => on(node, event, (e) => {
  const target = e.target.closest(selector);
  if (target) handler(e, target);
});
