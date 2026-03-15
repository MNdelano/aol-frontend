import { animate } from './gsap-core.js';
import { prefersReducedMotion } from './reduced-motion.js';

export const fadeUp = (target, delay = 0) => {
  if (prefersReducedMotion()) return;
  animate(target, { opacity: 1, y: 0, duration: 0.32, delay });
};
