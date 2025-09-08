import { ReactNode, useState } from 'react';

export function Tooltip({ children, content }: { children: ReactNode; content: ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 -translate-x-1/2 mt-2 rounded bg-star text-dawn text-xs px-2 py-1"
        >
          {content}
        </span>
      )}
    </span>
  );
}
