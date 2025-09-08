import clsx from 'clsx';

type Tab = {
  id: string;
  label: string;
};

type Props = {
  tabs: Tab[];
  current: string;
  onTabChange: (id: string) => void;
};

export function Tabs({ tabs, current, onTabChange }: Props) {
  return (
    <div className="flex space-x-2 border-b border-dawn/20">
      {tabs.map((t) => (
        <button
          key={t.id}
          className={clsx(
            'px-3 py-2 text-sm focus:outline-none',
            current === t.id ? 'border-b-2 border-dawn text-dawn' : 'text-dawn/50'
          )}
          onClick={() => onTabChange(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}
