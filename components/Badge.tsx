import { ReactNode } from 'react';

export function Badge({ children }: { children: ReactNode }) {
  return <span className="inline-block rounded-full bg-dawn text-ink px-2 py-1 text-xs">{children}</span>;
}
