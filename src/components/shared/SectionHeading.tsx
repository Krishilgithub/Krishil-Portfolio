'use client';

import React from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  center = true,
  className = ''
}) => {
  return (
    <div className={`max-w-4xl ${center ? 'mx-auto text-center' : ''} mb-16 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative inline-block mb-8"
      >
        <h2 className="text-4xl md:text-5xl font-bold relative z-10">
          <AnimatedText text={title} className="gradient-text" />
        </h2>
        <div className="absolute -bottom-3 left-0 right-0 h-3 bg-gradient-to-r from-[#7B61FF] to-[#FF61D8] rounded-full opacity-50"></div>
      </motion.div>
      
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#8892B0] text-lg"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading; 