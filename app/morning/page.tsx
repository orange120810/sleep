'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Letter } from '@/lib/mock';
import { getTodayDelivery } from '@/lib/api';
import { Envelope } from '@/components/Envelope';
import { Button } from '@/components/Button';
import { ShareCard } from '@/components/ShareCard';

export default function Morning() {
  const [letter, setLetter] = useState<Letter | null>(null);
  const [opened, setOpened] = useState(false);
  const [share, setShare] = useState(false);

  useEffect(() => {
    getTodayDelivery().then(setLetter);
  }, []);

  if (!letter) return <p className="p-4">読み込み中...</p>;

  return (
    <main className="p-4 text-center space-y-4">
      <h1 className="text-xl">おはようございます</h1>
      {!opened && (
        <div className="flex justify-center">
          <Envelope
            variant="dawn"
            state="closed"
            className="cursor-pointer"
            onClick={() => setOpened(true)}
            aria-label="開封"
          />
        </div>
      )}
      {opened && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
          <p className="text-lg">{letter.body}</p>
          {share ? (
            <ShareCard>{letter.body}</ShareCard>
          ) : (
            <Button onClick={() => setShare(true)}>開封カードをシェア</Button>
          )}
        </motion.div>
      )}
    </main>
  );
}
