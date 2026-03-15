import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { renderTable } from '../../scripts/components/table.js';

initApp({ page: 'checkin-console', role: 'staff', title: 'Check-in Console' });
const root = document.querySelector('#main-content');
const tickets = await apiMock.get('tickets');
renderTable(root, ['id', 'holder', 'status', 'qr'], tickets);
