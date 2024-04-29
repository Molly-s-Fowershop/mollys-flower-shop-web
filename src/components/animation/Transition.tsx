"use client";

import { motion } from "framer-motion";

interface TransitionProps {
  children: React.ReactNode;
}

export default function Transition({ children }: TransitionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
}
