import clsx from 'clsx';
import { motion } from 'framer-motion';

type Props = {
  variant?: 'night' | 'dawn';
  state?: 'closed' | 'ajar' | 'open';
  className?: string;
  'aria-label'?: string;
};

export function Envelope({ variant = 'night', state = 'closed', className, ...rest }: Props) {
  const bg = variant === 'night' ? 'bg-star' : 'bg-dawn';
  const rotateX = { closed: 0, ajar: -40, open: -180 }[state];
  return (
    <div className={clsx('relative w-40 h-24', className)} {...rest}>
      <div className={clsx('absolute inset-0 rounded-lg', bg)}></div>
      <motion.div
        className={clsx('absolute inset-0 origin-top rounded-lg', bg)}
        style={{ clipPath: 'polygon(0 0, 100% 0, 50% 50%)' }}
        animate={{ rotateX }}
      />
    </div>
  );
}
