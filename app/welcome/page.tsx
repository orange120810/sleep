'use client';
import { useState } from 'react';
import { Button } from '@/components/Button';

const steps = [
  { title: 'ようこそ', body: 'よるのポストへ' },
  { title: '夜に手紙を', body: '朝に受け取る' },
  { title: 'さあ、始めましょう', body: '' },
];

export default function Welcome() {
  const [step, setStep] = useState(0);
  const s = steps[step];
  return (
    <main className="p-4 text-center space-y-4">
      <h1 className="text-xl">{s.title}</h1>
      <p>{s.body}</p>
      <div className="flex justify-center">
        {step < steps.length - 1 ? (
          <Button onClick={() => setStep(step + 1)}>次へ</Button>
        ) : (
          <Button onClick={() => {}}>はじめる</Button>
        )}
      </div>
    </main>
  );
}
