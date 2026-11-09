"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MarqueeWord {
  text: string;
  highlight?: boolean;
  accent?: 'pink' | 'green' | 'purple' | 'white';
}

const MARQUEE_WORDS: MarqueeWord[] = [
  { text: "Study in China 2026-27", highlight: true, accent: "pink" },
  { text: "March & September Intakes Open", accent: "white" },
  { text: "CSC Government Scholarships", highlight: true, accent: "green" },
  { text: "Up to 100% Tuition Waivers", accent: "pink" },
  { text: "No IELTS Required Options", accent: "green" },
  { text: "English-Medium MBBS & Engineering", highlight: true, accent: "purple" },
  { text: "Harbin Pathway Program", accent: "green" },
  { text: "Free Profile Assessment", highlight: true, accent: "pink" },
  { text: "JW202 Student Visa Support", accent: "white" },
  { text: "Bachelor’s, Master’s & PhD", accent: "purple" },
  { text: "Dormitory & Halal Food Guidance", accent: "white" },
  { text: "WhatsApp Helpline: +880 1895 626831", highlight: true, accent: "green" },
];

export default function TopAnnouncementBar() {
  // Duplicate array for an unbroken, seamless continuous loop
  const duplicatedWords = [...MARQUEE_WORDS, ...MARQUEE_WORDS];

  return (
    <div
      className="relative w-full bg-[#090d16] border-b border-white/[0.08] text-white overflow-hidden select-none z-50 h-7 sm:h-8 flex items-center"
      role="marquee"
      aria-label="Study in China Admissions Highlights"
    >
      {/* Subtle atmospheric brand glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-pink/10 via-brand-purple/10 to-brand-green/10 opacity-50 pointer-events-none" />

      {/* Left feathered fade mask */}
      <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#090d16] to-transparent z-20 pointer-events-none" />

      {/* Right feathered fade mask */}
      <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#090d16] to-transparent z-20 pointer-events-none" />

      {/* Continuous Infinity Marquee Track */}
      <div className="w-full overflow-hidden flex items-center group relative z-10">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 52,
              ease: 'linear',
            },
          }}
          className="flex items-center whitespace-nowrap gap-5 sm:gap-8 group-hover:[animation-play-state:paused]"
        >
          {duplicatedWords.map((item, idx) => (
            <div key={`${item.text}-${idx}`} className="flex items-center gap-5 sm:gap-8 shrink-0">
              {/* Word text */}
              <span
                className={`text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold transition-colors ${
                  item.accent === 'pink'
                    ? 'text-brand-pink font-bold'
                    : item.accent === 'green'
                    ? 'text-brand-green font-bold'
                    : item.accent === 'purple'
                    ? 'text-purple-300 font-bold'
                    : 'text-slate-300'
                }`}
              >
                {item.text}
              </span>

              {/* Elegant Spark Separator */}
              <span className="text-white/20 text-[10px] sm:text-xs select-none">
                ✦
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

