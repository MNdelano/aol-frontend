export const createTabs = (root, items, onChange) => {
  root.innerHTML = `<div class="flex gap-2">${items.map((i, idx) => `<button class="btn ${idx===0?'btn-primary':''}" data-tab="${i.id}">${i.label}</button>`).join('')}</div>`;
  const click = (e) => {
    const b = e.target.closest('[data-tab]');
    if (!b) return;
    [...root.querySelectorAll('[data-tab]')].forEach((n) => n.classList.remove('btn-primary'));
    b.classList.add('btn-primary');
    onChange?.(b.dataset.tab);
  };
  root.addEventListener('click', click);
  return { destroy() { root.removeEventListener('click', click); } };
};
