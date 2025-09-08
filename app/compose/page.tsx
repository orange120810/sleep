'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { LetterTextarea } from '@/components/LetterTextarea';
import { Envelope } from '@/components/Envelope';
import { Button } from '@/components/Button';
import { submitLetter } from '@/lib/api';
import { StampIcon } from '@/components/icons';

export default function Compose() {
  const [variant, setVariant] = useState<'night' | 'dawn'>('night');
  const [sent, setSent] = useState(false);
  const [stamp, setStamp] = useState(false);

  async function handleSubmit() {
    await submitLetter('');
    setStamp(true);
    setTimeout(() => setSent(true), 800);
  }

  if (sent) {
    return (
      <div className="p-4 text-center">
        <p>投函しました。おやすみなさい。</p>
      </div>
    );
  }

  return (
    <main className="p-4 space-y-4">
      <LetterTextarea max={100} placeholder="100字まで" />
      <div className="flex space-x-2">
        <label className="flex items-center space-x-1">
          <input type="radio" name="v" value="night" checked={variant === 'night'} onChange={() => setVariant('night')} />
          <span>夜</span>
        </label>
        <label className="flex items-center space-x-1">
          <input type="radio" name="v" value="dawn" checked={variant === 'dawn'} onChange={() => setVariant('dawn')} />
          <span>朝</span>
        </label>
      </div>
      <motion.div
        className="relative w-40 mx-auto"
        drag
        dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
        onDragEnd={handleSubmit}
      >
        <Envelope variant={variant} />
        {stamp && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute top-2 right-2"
          >
            <StampIcon className="w-8 h-8 text-ink" />
          </motion.span>
        )}
      </motion.div>
      <Button onClick={handleSubmit} className="w-full">
        投函
      </Button>
    </main>
  );
}
