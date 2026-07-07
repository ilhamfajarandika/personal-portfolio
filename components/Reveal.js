"use client";

import { motion } from "framer-motion";

// Membungkus children dengan animasi "wipe" clip-path saat masuk viewport —
// dipakai berulang di About/Projects/Contact supaya konsisten.
export default function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      whileInView={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
