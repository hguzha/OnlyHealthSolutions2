"use client";

import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <motion.a
        href="tel:7704397666"
        aria-label="Call Only Health Solutions"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#22D3EE] to-[#67E8F9] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#22D3EE] focus:ring-offset-2"
      >
        <Phone className="h-5 w-5 text-white" />
      </motion.a>

      <motion.a
        href="mailto:info@onlyhealthsolutions.com"
        aria-label="Email Only Health Solutions"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#A855F7] to-[#C084FC] shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#A855F7] focus:ring-offset-2"
      >
        <Mail className="h-5 w-5 text-white" />
      </motion.a>
    </div>
  );
}
