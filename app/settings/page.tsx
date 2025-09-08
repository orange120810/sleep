'use client';
import { useState } from 'react';

export default function Settings() {
  const [notify, setNotify] = useState(false);
  const [theme, setTheme] = useState('night');
  const [lang, setLang] = useState('ja');

  return (
    <main className="p-4 space-y-4">
      <h1 className="text-xl">設定</h1>
      <label className="flex items-center space-x-2">
        <input type="checkbox" checked={notify} onChange={() => setNotify(!notify)} />
        <span>通知</span>
      </label>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          checked={theme === 'night'}
          onChange={() => setTheme(theme === 'night' ? 'dawn' : 'night')}
        />
        <span>静かな時間</span>
      </label>
      <label className="flex items-center space-x-2">
        <span>言語</span>
        <select
          value={lang}
          onChange={(e) => setLang(e.target.value)}
          className="text-ink"
        >
          <option value="ja">日本語</option>
          <option value="en">English</option>
        </select>
      </label>
    </main>
  );
}
