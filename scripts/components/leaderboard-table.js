export const renderLeaderboard = (root, rows, candidatesById) => {
  root.innerHTML = `<table class="table"><thead><tr><th>Rank</th><th>Candidate</th><th>Score</th></tr></thead><tbody>${rows.map((r)=>`<tr><td>${r.rank}</td><td>${candidatesById[r.candidateId]?.name ?? r.candidateId}</td><td>${r.score}</td></tr>`).join('')}</tbody></table>`;
};
