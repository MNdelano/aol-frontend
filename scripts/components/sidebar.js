import { routes, navigate } from '../router.js';

export const mountSidebar = (shell, activeRoute) => {
  const node = shell.querySelector('[data-sidebar]');
  if (!node) return { destroy() {} };
  node.classList.add('sidebar');
  node.innerHTML = `<h2 class="mb-4">AOL Suite</h2>${Object.keys(routes).map((k) => `<div class="mb-2"><button class="btn ${k===activeRoute?'btn-accent':'btn-primary'} w-full" data-route="${k}">${k}</button></div>`).join('')}`;
  const click = (e) => {
    const b = e.target.closest('[data-route]');
    if (b) navigate(b.dataset.route);
  };
  node.addEventListener('click', click);
  return { destroy() { node.removeEventListener('click', click); } };
};
