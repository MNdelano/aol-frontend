const byId = (list) => Object.fromEntries(list.map((i) => [i.id, i]));

export const mockData = {
  usersByRole: {
    admin: [{ id: 'u1', name: 'AOL Admin' }],
    candidate: [{ id: 'u2', name: 'Nadia Candidate' }],
    jury: [{ id: 'u3', name: 'Rami Jury' }],
    staff: [{ id: 'u4', name: 'Mia Check-in' }]
  },
  candidates: [
    { id: 'c1', name: 'Nadia Karim', discipline: 'Vocal', status: 'submitted' },
    { id: 'c2', name: 'Lina Ayad', discipline: 'Dance', status: 'draft' }
  ],
  competitions: [{ id: 'cmp1', name: 'AOL 2026 Qualifiers', phase: 'jury' }],
  events: [{ id: 'e1', title: 'Semi Final Night', date: '2026-03-20' }],
  tickets: [{ id: 't1', holder: 'Nadia Karim', status: 'active', qr: 'AOL-T1' }],
  juryAssignments: [{ id: 'ja1', juryId: 'u3', candidateId: 'c1' }],
  criteria: [{ id: 'cr1', name: 'Technique', max: 10 }, { id: 'cr2', name: 'Stage Presence', max: 10 }],
  scores: [{ id: 's1', candidateId: 'c1', juryId: 'u3', values: { cr1: 8, cr2: 9 } }],
  notifications: [{ id: 'n1', text: 'Application window closes in 2 days', level: 'warning' }],
  lessonsModules: [{ id: 'm1', title: 'Vocal Warmup Basics', progress: 70 }],
  paymentStatuses: [{ id: 'p1', candidateId: 'c1', status: 'paid' }],
  leaderboardRows: [{ rank: 1, candidateId: 'c1', score: 89 }, { rank: 2, candidateId: 'c2', score: 76 }]
};

export const db = {
  candidatesById: byId(mockData.candidates),
  ticketsById: byId(mockData.tickets)
};

export const apiMock = {
  get: (key) => Promise.resolve(structuredClone(mockData[key] ?? [])),
  simulateState: (state) => Promise.resolve({ ok: state !== 'error', state })
};
