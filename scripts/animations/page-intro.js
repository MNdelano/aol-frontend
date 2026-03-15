import { fadeUp } from './presets.js';

export const initPageIntro = (root) => {
  if (!root) return;
  [...root.children].forEach((child, i) => {
    child.style.opacity = 0;
    child.style.transform = 'translateY(10px)';
    requestAnimationFrame(() => fadeUp(child, i * 0.04));
  });
};
