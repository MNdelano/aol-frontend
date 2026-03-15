const getStack = () => {
  let stack = document.querySelector('.toast-stack');
  if (!stack) { stack = document.createElement('div'); stack.className = 'toast-stack'; document.body.append(stack); }
  return stack;
};

export const showToast = (text, timeout = 2400) => {
  const t = document.createElement('div');
  t.className = 'toast';
  t.textContent = text;
  getStack().append(t);
  setTimeout(() => t.remove(), timeout);
};
