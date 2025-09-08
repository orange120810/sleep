import './globals.css';
import { ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

export const metadata = {
  title: 'よるのポスト',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body className="noise min-h-screen bg-night transition-colors">
        <MotionConfig reducedMotion="user">{children}</MotionConfig>
      </body>
    </html>
  );
}
