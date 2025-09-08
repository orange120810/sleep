import { motion, AnimatePresence } from 'framer-motion';

type Props = {
  message: string;
  open: boolean;
};

export function Toast({ message, open }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-star text-dawn px-4 py-2 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          role="status"
          aria-live="polite"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
