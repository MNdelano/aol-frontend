export const createModal = ({ title, body }) => {
  const node = document.createElement('div');
  node.innerHTML = `<div class="card" style="position:fixed;inset:10% 20%;z-index:10"><h3 class="mb-2">${title}</h3><p class="mb-4">${body}</p><button class="btn btn-primary" data-close>Close</button></div>`;
  document.body.append(node);
  const close = () => node.remove();
  node.querySelector('[data-close]').addEventListener('click', close);
  return { close, destroy: close };
};
