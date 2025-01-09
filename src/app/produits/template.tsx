"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0.7, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        ease: "easeOut",
        duration: 1.2,
        delay: 0.2,
      }}
    >
      {children}
    </motion.div>
  );
}
