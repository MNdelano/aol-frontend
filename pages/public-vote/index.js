import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { renderTable } from '../../scripts/components/table.js';

initApp({ page: 'public-vote', role: 'guest', title: 'Public Vote' });
const root = document.querySelector('#main-content');
const candidates = await apiMock.get('candidates');
renderTable(root, ['id', 'name', 'discipline', 'status'], candidates);
