'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glassEffect?: boolean;
  onClick?: () => void;
}

const Card = ({
  children,
  className = '',
  hoverEffect = true,
  glassEffect = false,
  onClick,
}: CardProps) => {
  const baseStyles = 'rounded-xl p-6 transition-all duration-300';
  
  const glassStyles = glassEffect
    ? 'bg-white/10 backdrop-blur-lg border border-white/20'
    : 'bg-[#112240] border border-[#233554]';

  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5, scale: 1.02 } : undefined}
      className={`${baseStyles} ${glassStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
};

export default Card; 