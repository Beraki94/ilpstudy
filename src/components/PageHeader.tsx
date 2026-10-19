"use client";

import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="relative bg-[#0f172a] pt-24 pb-14 sm:pt-36 sm:pb-28 overflow-hidden mt-[64px] sm:mt-[76px] max-w-full">
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-brand-purple/20 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[250px] sm:w-[500px] h-[250px] sm:h-[500px] bg-brand-green/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />
      
      {/* Noise Texture Overlay for Premium Feel */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          {title}
        </motion.h1>

        {/* Green Underline */}
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: 80 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1 bg-brand-green mt-4 sm:mt-6 mb-5 sm:mb-8 rounded-full"
        />

        {description && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal sm:font-medium max-w-3xl"
          >
            {description}
          </motion.p>
        )}
      </div>
    </div>
  );
}
