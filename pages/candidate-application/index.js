import { initApp } from '../../scripts/app.js';
import { apiMock } from '../../scripts/api-mock.js';
import { renderStepper } from '../../scripts/components/stepper.js';
import { showToast } from '../../scripts/components/toast.js';

initApp({ page: 'candidate-application', role: 'candidate', title: 'Candidate Application' });
const root = document.querySelector('#main-content');
root.innerHTML = '<div id="stepper" class="mb-4"></div><button class="btn btn-accent" id="submit">Submit Application</button>';
renderStepper(root.querySelector('#stepper'), ['Profile', 'Media', 'Review'], 1);
root.querySelector('#submit').addEventListener('click', async () => {
  const result = await apiMock.simulateState('submitted');
  showToast(result.ok ? 'Application submitted' : 'Submission failed');
});
