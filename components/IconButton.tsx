import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
};

export function IconButton({ icon, className, ...props }: Props) {
  return (
    <button
      className={clsx(
        'rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-star text-dawn',
        className
      )}
      {...props}
    >
      {icon}
    </button>
  );
}
