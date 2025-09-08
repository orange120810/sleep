import { TextareaHTMLAttributes, useState } from 'react';
import clsx from 'clsx';

const NG = ['死', '殺'];

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  max: number;
};

export function LetterTextarea({ max, className, ...props }: Props) {
  const [value, setValue] = useState('');
  const remaining = max - value.length;
  const hasNg = NG.some((w) => value.includes(w));
  return (
    <div>
      <textarea
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value.slice(0, max))}
        className={clsx('w-full rounded-xl p-4 bg-dawn text-ink', className)}
        aria-describedby="counter"
      />
      <div id="counter" className="text-right text-xs mt-1">
        {hasNg && <span className="text-red-500 mr-2">NGワードが含まれています</span>}
        <span className={remaining < 20 ? 'text-red-500' : ''}>{remaining}</span> / {max}
      </div>
    </div>
  );
}
