"use client";

import { motion } from 'framer-motion';
import { Sparkles, GraduationCap, ArrowUpRight, Globe2 } from 'lucide-react';
import Link from 'next/link';
import PhotoSpace from '@/components/PhotoSpace';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center pt-32 sm:pt-36 lg:pt-40 pb-16 overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/60">
      {/* Decorative Brand Shapes Background - Distinctive Sweeping Hero Rings */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-Right Rotating Brand Pink Ring - Clockwise */}
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[4%] -right-[20%] sm:-top-[18%] sm:-right-[10%] lg:-top-[18%] lg:-right-[8%] w-[125vw] h-[125vw] min-w-[420px] max-w-[520px] sm:min-w-[850px] sm:max-w-[1250px] sm:w-[82vw] sm:h-[82vw] lg:w-[80vw] lg:h-[80vw] rounded-full opacity-[0.08] sm:opacity-[0.05] lg:opacity-[0.05] border-[38px] sm:border-[85px] lg:border-[105px] border-brand-pink"
        />
        
        {/* Left Rotating Brand Green Ring - Counter-Clockwise (Crosses Pink Ring on Mobile Behind Heading) */}
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 130, repeat: Infinity, ease: "linear" }}
          className="absolute top-[14%] -left-[20%] sm:top-auto sm:-bottom-[20%] sm:-left-[12%] lg:-bottom-[22%] lg:-left-[10%] w-[115vw] h-[115vw] min-w-[390px] max-w-[490px] sm:min-w-[650px] sm:max-w-[950px] sm:w-[65vw] sm:h-[65vw] lg:w-[65vw] lg:h-[65vw] rounded-full opacity-[0.08] sm:opacity-[0.05] lg:opacity-[0.05] border-[34px] sm:border-[70px] lg:border-[85px] border-brand-green"
        />

        {/* Ambient Glows creating luminous multi-hue halo behind heading */}
        <div className="absolute top-[8%] -left-[10%] sm:top-[18%] sm:-left-[8%] w-[70vw] sm:w-[55vw] h-[70vw] sm:h-[55vw] rounded-full bg-brand-purple/15 blur-[90px] sm:blur-[120px]" />
        <div className="absolute top-[4%] -right-[10%] sm:top-auto sm:bottom-[12%] sm:-right-[8%] w-[65vw] sm:w-[50vw] h-[65vw] sm:h-[50vw] rounded-full bg-brand-pink/15 blur-[90px] sm:blur-[120px]" />
        <div className="absolute top-[22%] left-[5%] sm:top-[38%] sm:right-[24%] w-[60vw] sm:w-[42vw] h-[60vw] sm:h-[42vw] rounded-full bg-brand-green/12 blur-[100px] sm:blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white shadow-soft border border-brand-purple/20">
              <Sparkles size={15} className="text-brand-pink" />
              <span className="text-brand-dark font-bold text-xs sm:text-sm tracking-wide uppercase">
                ILP Study &middot; Bangladesh
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-black text-brand-dark leading-[1.15] sm:leading-[1.08] mb-5 sm:mb-6 tracking-tight">
              Plan Your Studies in <br />
              <span className="text-transparent bg-clip-text bg-gradient-brand">
                China from Bangladesh.
              </span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-xl font-normal">
              Explore bachelor’s, master’s, PhD, Chinese language and foundation programmes based on your academic results, budget and goals. ILP Study supports Bangladeshi students with university selection, scholarship guidance and application assistance.
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
                href="/study-program" 
                className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-brand-dark font-bold shadow-soft hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm sm:text-base border border-slate-200 hover:border-brand-green"
              >
                <GraduationCap size={18} className="text-brand-green" />
                Explore Programmes
              </Link>
            </div>

            {/* Quick Proof Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full max-w-lg border-t border-slate-200/80 pt-5 sm:pt-6 text-left">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-dark">130+</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 leading-tight">Chinese Universities</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-brand-green">Dhaka</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 leading-tight">Mirpur Headquarters</div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-2xl sm:text-3xl font-black text-brand-pink">Direct</div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 leading-tight">Application Advisory</div>
              </div>
            </div>
          </div>

          {/* Right Column - Visuals & Photo Space */}
          <div className="lg:col-span-5 relative w-full mt-6 lg:mt-0">
            <div className="relative">
              {/* Photo Space: Students on Campus - Distinctive Asymmetric Cutout Container */}
              <PhotoSpace
                title="International Students on Campus in China"
                subtitle="Personalised guidance on university selection, scholarship opportunities and application procedures"
                badge="Study in China"
                hideTopBadge={true}
                captionClassName="max-w-[55%] sm:max-w-[50%] pr-2"
                aspectRatio="aspect-[4/5]"
                fallbackSrc="/homeImage/irp-hero-image.jpg?v=fb67bbcc"
                sizes="(max-width: 1024px) 100vw, 480px"
                priority={true}
                className="shadow-2xl border-2 sm:border-4 border-white rounded-3xl sm:rounded-[40px] sm:rounded-tl-[120px] sm:rounded-br-[120px]"
              />

              {/* Floating Stat Badge 1 - Pink Degree Pathways (Overhangs left edge like green badge, animates safely below top) */}
              <motion.div 
                animate={{ y: [0, -22, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-6 left-2 sm:top-14 sm:-left-5 bg-brand-pink text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-glow-pink z-30 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center font-bold flex-shrink-0">
                  <GraduationCap size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <div className="text-xs sm:text-base font-black leading-none">University Pathways</div>
                  <span className="text-[10px] sm:text-xs font-medium opacity-90 block mt-0.5">Bachelor, Master &amp; PhD</span>
                </div>
              </motion.div>

              {/* Floating Stat Badge 2 - Green Direct Guidance */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-2 right-2 sm:-bottom-6 sm:-right-4 bg-brand-green text-white rounded-xl sm:rounded-2xl p-2.5 sm:p-4 shadow-glow-green z-30 flex items-center gap-2 sm:gap-3"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center font-bold flex-shrink-0">
                  <Globe2 size={18} className="sm:w-[22px] sm:h-[22px]" />
                </div>
                <div>
                  <div className="text-xs sm:text-base font-black leading-none">Direct Guidance</div>
                  <span className="text-[10px] sm:text-xs font-medium opacity-90 block mt-0.5">Application Support</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
