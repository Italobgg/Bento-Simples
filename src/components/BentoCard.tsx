"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <motion.div
      className={`
        p-6 rounded-2xl shadow-lg
        dark:shadow-xl
        text-light-text 
        dark:text-brand-light

        ${className} 
      `}
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
