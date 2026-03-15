import { appState, pageState } from './state.js';
import { mountSidebar } from './components/sidebar.js';
import { mountTopbar } from './components/topbar.js';
import { initPageIntro } from './animations/page-intro.js';

// Porting note (OWL/QWeb): convert initApp to component setup and mount hooks.
export const initApp = ({ page, role = 'guest', title = 'AOL' }) => {
  appState.setState({ route: page, userRole: role });
  const shell = document.querySelector('[data-app-shell]');
  if (shell) {
    mountSidebar(shell, page);
    mountTopbar(shell, title);
  }
  pageState.setState({ status: 'success', message: '' });
  initPageIntro(document.querySelector('.page-content'));
};
