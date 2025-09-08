import { HTMLAttributes } from 'react';
import clsx from 'clsx';

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx('rounded-xl bg-star/40 p-4 shadow-card backdrop-blur text-dawn', className)}
      {...props}
    />
  );
}
