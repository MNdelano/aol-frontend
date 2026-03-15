export const renderQrCard = (root, ticket) => {
  root.innerHTML = `<div class="card"><h3>${ticket.holder}</h3><p class="text-muted">${ticket.id}</p><div style="font-family:monospace;border:var(--border-subtle);padding:1rem">${ticket.qr}</div></div>`;
};
