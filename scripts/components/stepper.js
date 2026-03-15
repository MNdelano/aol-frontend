export const renderStepper = (root, steps, active) => {
  root.innerHTML = `<div class="flex gap-2">${steps.map((s, i) => `<span class="badge" style="background:${i<=active?'var(--color-success-500)':'var(--color-neutral-300)'};color:white">${s}</span>`).join('')}</div>`;
};
