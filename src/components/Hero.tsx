"use client";

import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, ArrowUpRight, Building2, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import PhotoSpace from '@/components/PhotoSpace';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-28 pb-16 overflow-hidden bg-brand-light">
      {/* Decorative Brand Shapes Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[80vw] h-[80vw] rounded-full opacity-[0.03] border-[100px] border-brand-pink"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] rounded-full opacity-[0.03] border-[80px] border-brand-green"
        />
        {/* Glows */}
        <div className="absolute top-[20%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-purple/10 blur-[100px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40vw] h-[40vw] rounded-full bg-brand-pink/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white shadow-soft border border-brand-purple/20">
              <Sparkles size={15} className="text-brand-pink" />
              <span className="text-brand-dark font-bold text-xs sm:text-sm tracking-wide uppercase">
                ILP Study &middot; Bangladesh
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-black text-brand-dark leading-[1.12] sm:leading-[1.08] mb-5 sm:mb-6 tracking-tight">
              Plan Your Studies in <br />
              <span className="text-transparent bg-clip-text bg-gradient-brand">
                China from Bangladesh.
              </span>
            </h1>
            
            <p className="text-sm sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl font-normal">
              Explore bachelor’s, master’s, PhD, Chinese language and foundation routes around your results, budget and goals. Operating since 2025 with <strong>50+ students placed</strong> across leading Chinese universities for the September 2026 intake.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto mb-8 sm:mb-10">
              <Link 
                href="/contact" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-dark text-white font-bold hover:bg-brand-pink hover:shadow-glow-pink transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base group"
              >
                Book a Free Consultation 
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link 
                href="/programmes" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-brand-dark font-bold shadow-soft hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base border border-slate-200 hover:border-brand-green"
              >
                <GraduationCap size={18} className="text-brand-green" />
                Explore Programmes
              </Link>
            </div>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full max-w-lg border-t border-slate-200/60 pt-5 sm:pt-6 text-left">
              <div>
                <div className="text-xl sm:text-2xl font-black text-brand-dark">50+</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-tight">Admitted (Sep 2026)</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-brand-green">100%</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-tight">Direct Portals</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-black text-brand-pink">2025</div>
                <div className="text-[10px] sm:text-xs font-semibold text-slate-500 leading-tight">Since Inception</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Visuals & Photo Space */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative w-full mt-6 lg:mt-0"
          >
            <div className="relative">
              {/* Photo Space: Students on Campus */}
              <PhotoSpace
                title="International Students on Campus in China"
                subtitle="ILP Study placed 50+ students in Chinese universities for September 2026 intake"
                badge="China Campus Placements"
                aspectRatio="aspect-[4/5]"
                fallbackSrc="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="shadow-2xl border-2 sm:border-4 border-white rounded-3xl sm:rounded-[40px] sm:rounded-tl-[120px] sm:rounded-br-[120px]"
              />

              {/* Floating Stat Badge 1 */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 left-2 sm:-top-6 sm:-left-6 bg-brand-pink text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-glow-pink z-30 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center font-bold">
                  <GraduationCap size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <div className="text-xs sm:text-xl font-black leading-none">50+ Placements</div>
                  <span className="text-[9px] sm:text-[11px] font-medium opacity-90">China Sept 2026</span>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-4 bg-brand-green text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-glow-green z-30 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center font-bold">
                  <Globe2 size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <div className="text-xs sm:text-xl font-black leading-none">Direct Portals</div>
                  <span className="text-[9px] sm:text-[11px] font-medium opacity-90">Zero Sub-Agents</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
