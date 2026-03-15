import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { renderScoringGrid } from '../../scripts/components/scoring-grid.js';
import { showToast } from '../../scripts/components/toast.js';

initApp({ page: 'jury-console', role: 'jury', title: 'Jury Console' });
const root = document.querySelector('#main-content');
const criteria = await apiMock.get('criteria');
renderScoringGrid(root, criteria, ({ ok, values }) => {
  showToast(ok ? `Scores saved: ${Object.values(values).reduce((a,b)=>a+b,0)}` : 'Invalid score');
});
