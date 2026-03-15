export const mountTopbar = (shell, title) => {
  const node = shell.querySelector('[data-topbar]');
  if (!node) return { destroy() {} };
  node.classList.add('topbar');
  node.innerHTML = `<div class="flex justify-between items-center"><strong>${title}</strong><span class="badge">Live Mock</span></div>`;
  return { destroy() {} };
};
