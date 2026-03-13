'use client';

import { motion } from 'framer-motion';

export default function AIChatAssistant() {
  return (
    <motion.div
      className="fixed bottom-6 right-6 z-40"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.4 }}
    >
      <button
        className="relative h-14 w-14 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#A855F7] shadow-lg shadow-cyan-500/40 transition-all hover:scale-110 hover:shadow-xl flex items-center justify-center text-white"
        aria-label="AI Chat Assistant"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>
    </motion.div>
  );
}
