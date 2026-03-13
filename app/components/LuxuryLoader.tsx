'use client';

import { motion } from 'framer-motion';

export default function LuxuryLoader() {
  return (
    <motion.div className="fixed inset-0 z-50 flex items-center justify-center bg-white" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
      <div className="relative h-16 w-16">
        <motion.div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#22D3EE] border-r-[#67E8F9]" animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute inset-2 rounded-full border-2 border-transparent border-b-[#A855F7] border-l-[#A855F7]" animate={{ rotate: -360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
        <motion.div className="absolute inset-0 flex items-center justify-center" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-[#22D3EE] to-[#A855F7]" />
        </motion.div>
      </div>
    </motion.div>
  );
}
