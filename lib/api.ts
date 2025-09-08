import { letters, todayDelivery, Letter } from './mock';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function submitLetter(body: string): Promise<Letter> {
  await delay(500);
  const letter = { id: String(Date.now()), body, date: new Date().toISOString() };
  letters.push(letter);
  return letter;
}

export async function getTodayDelivery(): Promise<Letter | null> {
  await delay(300);
  return todayDelivery;
}

export async function getArchive(): Promise<Letter[]> {
  await delay(300);
  return letters;
}
