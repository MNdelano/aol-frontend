import { initApp } from '../../scripts/app.js';
import { apiMock, db } from '../../scripts/api-mock.js';
import { renderLeaderboard } from '../../scripts/components/leaderboard-table.js';

initApp({ page: 'leaderboard', role: 'guest', title: 'Leaderboard' });
const root = document.querySelector('#main-content');
const rows = await apiMock.get('leaderboardRows');
renderLeaderboard(root, rows, db.candidatesById);
