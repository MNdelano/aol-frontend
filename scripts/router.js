export const routes = {
  'portal-home': '/pages/portal-home/index.html',
  'candidate-application': '/pages/candidate-application/index.html',
  'jury-console': '/pages/jury-console/index.html',
  'public-vote': '/pages/public-vote/index.html',
  'ticket-wallet': '/pages/ticket-wallet/index.html',
  'checkin-console': '/pages/checkin-console/index.html',
  'course-workspace': '/pages/course-workspace/index.html',
  leaderboard: '/pages/leaderboard/index.html'
};

export const navigate = (route) => {
  if (!routes[route]) return;
  window.location.href = routes[route];
};
