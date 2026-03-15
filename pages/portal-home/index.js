import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { renderTable } from '../../scripts/components/table.js';

initApp({ page: 'portal-home', role: 'admin', title: 'Portal Home' });
const root = document.querySelector('#main-content');
const notifications = await apiMock.get('notifications');
renderTable(root, ['id', 'text', 'level'], notifications);
