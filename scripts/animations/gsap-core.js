export const hasGSAP = () => typeof window !== 'undefined' && !!window.gsap;
export const animate = (target, props) => {
  if (hasGSAP()) return window.gsap.to(target, props);
  const node = typeof target === 'string' ? document.querySelector(target) : target;
  if (!node) return null;
  Object.assign(node.style, {
    transition: `all ${props.duration || 0.2}s ease`,
    opacity: props.opacity ?? node.style.opacity,
    transform: props.y ? `translateY(${props.y}px)` : node.style.transform
  });
  return null;
};
