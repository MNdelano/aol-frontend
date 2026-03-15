import { showToast } from '../components/toast.js';

export const announceState = (status) => {
  if (status === 'error') showToast('Action failed');
  if (status === 'success') showToast('Action complete');
  if (status === 'loading') showToast('Loading...');
};
