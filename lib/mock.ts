export type Letter = {
  id: string;
  body: string;
  date: string;
};

export const user = { id: 'u1', name: 'テスター' };

export const letters: Letter[] = [
  { id: '1', body: 'おやすみ', date: '2024-05-01' },
  { id: '2', body: '星がきれい', date: '2024-05-02' },
];

export const todayDelivery: Letter = {
  id: 'today',
  body: 'おはようございます',
  date: new Date().toISOString(),
};
