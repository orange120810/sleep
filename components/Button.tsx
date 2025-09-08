import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', className, ...props }: Props) {
  const base = 'rounded-xl px-4 py-2 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const styles = {
    primary: 'bg-star text-dawn hover:bg-star/90 focus-visible:ring-dawn',
    secondary: 'bg-dawn text-ink hover:bg-dawn/90 focus-visible:ring-star',
  };
  return <button className={clsx(base, styles[variant], className)} {...props} />;
}
