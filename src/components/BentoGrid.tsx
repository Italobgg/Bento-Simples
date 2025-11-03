"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoGridProps {
  children: ReactNode;
}

const gridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const BentoGrid = ({ children }: BentoGridProps) => {
  return (
    <motion.div
      className="
        grid w-full max-w-5xl grid-cols-1 md:grid-cols-3 
        gap-4 auto-rows-[200px]
      "
      variants={gridVariants}
      initial="hidden"
      animate="visible"
    >
      {children}
    </motion.div>
  );
};
