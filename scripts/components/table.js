export const renderTable = (root, cols, rows) => {
  root.innerHTML = `<table class="table"><thead><tr>${cols.map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${rows.map((r)=>`<tr>${cols.map((c)=>`<td>${r[c] ?? ''}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
};
