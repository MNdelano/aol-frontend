import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { renderQrCard } from '../../scripts/components/qr-card.js';

initApp({ page: 'ticket-wallet', role: 'candidate', title: 'Ticket Wallet' });
const root = document.querySelector('#main-content');
const tickets = await apiMock.get('tickets');
renderQrCard(root, tickets[0]);
