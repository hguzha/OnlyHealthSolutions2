'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';

export default function FloatingContactButtons() {
  return (
    <motion.div className="fixed bottom-24 right-6 z-40 flex flex-col gap-3" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.6, duration: 0.4 }}>
      <motion.a href="tel:770-439-7666" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/40 transition-all hover:scale-110 hover:shadow-xl" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} aria-label="Call us">
        <Phone size={20} />
      </motion.a>
      <motion.a href="mailto:info@onlyhealthsolutions.com" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 text-white shadow-lg shadow-blue-500/40 transition-all hover:scale-110 hover:shadow-xl" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} aria-label="Email us">
        <Mail size={20} />
      </motion.a>
    </motion.div>
  );
}
