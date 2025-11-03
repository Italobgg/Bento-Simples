import { ReactNode } from "react";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
}

export const BentoCard = ({ children, className }: BentoCardProps) => {
  return (
    <div
      className={`
        bg-dark-card p-6 rounded-2xl shadow-lg 
        transform transition-all duration-300 
        hover:scale-[1.02] hover:shadow-xl
        ${className} 
      `}
    >
      {children}
    </div>
  );
};
