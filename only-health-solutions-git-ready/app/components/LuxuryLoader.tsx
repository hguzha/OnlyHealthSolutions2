"use client";

import { motion } from "framer-motion";

export default function LuxuryLoader() {
  return (
    <motion.div
      key="luxury-loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
    >
      {/* Spinning gradient ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        className="h-16 w-16 rounded-full"
        style={{
          background: "conic-gradient(from 0deg, #22D3EE, #67E8F9, #A855F7, #22D3EE)",
          WebkitMask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
          mask: "radial-gradient(farthest-side, transparent calc(100% - 4px), #000 calc(100% - 4px))",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mt-5 bg-gradient-to-r from-[#22D3EE] to-[#A855F7] bg-clip-text text-sm font-semibold tracking-widest text-transparent uppercase"
      >
        Only Health Solutions
      </motion.p>
    </motion.div>
  );
}
