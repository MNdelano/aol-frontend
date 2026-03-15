import { isScore } from '../utils/validators.js';

export const renderScoringGrid = (root, criteria, onSubmit) => {
  root.innerHTML = `<div class="card">${criteria.map((c)=>`<label class="mb-2" style="display:block">${c.name} <input data-criteria="${c.id}" type="number" min="0" max="${c.max}" /></label>`).join('')}<button class="btn btn-primary mt-4" data-submit>Submit Scores</button></div>`;
  root.querySelector('[data-submit]').addEventListener('click', () => {
    const values = {};
    let ok = true;
    criteria.forEach((c) => {
      const v = root.querySelector(`[data-criteria="${c.id}"]`).value;
      if (!isScore(v, c.max)) ok = false;
      values[c.id] = Number(v);
    });
    onSubmit({ ok, values });
  });
};
