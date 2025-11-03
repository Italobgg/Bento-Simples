"use client";
import { ReactNode } from "react";
import { motion } from "framer-motion"; // 1. Importar o motion

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
        bg-dark-card p-6 rounded-2xl shadow-lg 
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
