import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { progress } from '../../scripts/components/progress.js';

initApp({ page: 'course-workspace', role: 'candidate', title: 'Course Workspace' });
const root = document.querySelector('#main-content');
const modules = await apiMock.get('lessonsModules');
root.innerHTML = modules.map((m) => `<div class="mb-4"><strong>${m.title}</strong>${progress(m.progress)}</div>`).join('');
