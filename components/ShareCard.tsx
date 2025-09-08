import { ReactNode } from 'react';

export function ShareCard({ children }: { children: ReactNode }) {
  return (
    <div className="w-[270px] h-[480px] bg-dawn text-ink p-4 rounded-xl flex flex-col justify-center items-center">
      {children}
    </div>
  );
}
