"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  ChevronDown, 
  ArrowUpRight,
  ShieldCheck
} from 'lucide-react';
import { FacebookIcon, InstagramIcon } from './SocialLinks';

export default function Footer() {
  // Mobile accordion state for links; Contact/Offices section stays OPEN by default on mobile
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(true);

  const toggleSection = (id: string) => {
    if (id === 'contact') {
      setIsContactOpen((prev) => !prev);
    } else {
      setOpenSection((prev) => (prev === id ? null : id));
    }
  };

  const studyRoutes = [
    { name: "Bachelor's Degrees", path: '/study-program#bachelor' },
    { name: "Master's & PhD", path: '/study-program#master' },
    { name: "MBBS (Medicine)", path: '/study-program#bachelor' },
    { name: "CSC Scholarships", path: '/scholarships' },
    { name: "Foundation & Language", path: '/study-program#foundation' },
    { name: "CSCA Exam & Syllabus", path: '/csca' },
    { name: "March / Sept Intakes", path: '/study-program#pathways' },
    { name: "Tuition Fees (RMB)", path: '/universities#tuition' },
  ];

  const guideResources = [
    { name: "Blog & Guides", path: '/blogs' },
    { name: "Document Checklist", path: '/checklist' },
    { name: "RMB Budget Planner", path: '/budget' },
    { name: "Visa Guide", path: '/visa' },
    { name: "Campus Life & Housing", path: '/student-life' },
    { name: "About ILP Study", path: '/about' },
    { name: "Resources", path: '/resources' },
  ];

  return (
    <footer className="bg-brand-dark text-slate-300 pt-16 sm:pt-20 pb-12 relative overflow-hidden border-t border-slate-800">
      {/* Decorative Subtle Ambient Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-purple/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main 4-Column Layout: Balanced Spacing Across All 4 Columns */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex lg:flex-row lg:justify-between items-start gap-8 lg:gap-6 xl:gap-8 mb-14">
          
          {/* Column 1: Authoritative Brand & Credentials */}
          <div className="w-full lg:w-[280px] xl:w-[320px] lg:flex-shrink-0 space-y-6">
            <Link 
              href="/" 
              className="inline-flex items-center bg-white px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl sm:rounded-3xl shadow-sm group transition-transform hover:scale-105" 
              aria-label="ILP Study Home"
            >
              <Image
                src="/images/ilp-logo.png?v=20261108"
                alt="ILP Study — Study in China Education Consultancy in Bangladesh"
                width={238}
                height={100}
                unoptimized={true}
                className="h-10 sm:h-11 md:h-12 lg:h-[50px] w-auto object-contain"
              />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed">
              <strong>International Learning Pathways</strong>, trading as <strong>ILP Study</strong>. A Dhaka-based education consultancy dedicated to university admissions, scholarship evaluations, and study guidance for China.
            </p>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-brand-green font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
                  Education Consultancy
                </span>
                <span className="text-slate-400 font-medium">Study in China</span>
              </div>
              <p className="text-slate-400 leading-normal">
                Dedicated education consultancy supporting university selection, scholarship opportunities, document preparation and application procedures.
              </p>
            </div>

            {/* Primary Action Button */}
            <div className="pt-1 flex flex-col gap-3">
              <div>
                <Link 
                  href="/contact" 
                  className="px-5 py-2.5 rounded-full bg-brand-pink hover:bg-[#d10079] text-white font-bold text-xs sm:text-sm shadow-soft transition-all inline-flex items-center gap-2 group"
                >
                  <span>Book Free Consultation</span>
                  <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>

              {/* Social Media Links */}
              <div className="pt-2">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                  Follow Us Online
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href="https://www.facebook.com/ilpstudy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ILP Study on Facebook"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#1877F2] text-slate-300 hover:text-white border border-white/10 hover:border-[#1877F2] text-xs font-semibold transition-all group"
                  >
                    <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/ilpstudy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ILP Study on Instagram"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-[#E4405F] text-slate-300 hover:text-white border border-white/10 hover:border-[#E4405F] text-xs font-semibold transition-all group"
                  >
                    <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Column 2: Study in China (Desktop Always Open, Mobile Accordion) */}
          <div className="w-full lg:w-auto border-b border-slate-800/80 pb-4 lg:border-b-0 lg:pb-0">
            {/* Desktop Header */}
            <h4 className="hidden lg:flex items-center gap-2 text-white font-bold text-base mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-green"></span>
              <span>Study in China</span>
            </h4>
            
            {/* Mobile Accordion Toggle Header */}
            <button
              type="button"
              onClick={() => toggleSection('study')}
              className="lg:hidden w-full py-3 flex items-center justify-between text-left text-white font-bold text-base"
              aria-expanded={openSection === 'study'}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                <span>Study in China Programmes</span>
              </span>
              <ChevronDown 
                size={18} 
                className={`text-slate-400 transition-transform duration-200 ${
                  openSection === 'study' ? 'rotate-180 text-brand-green' : ''
                }`}
              />
            </button>

            {/* Desktop List: Always Open */}
            <ul className="hidden lg:block space-y-3.5 text-sm">
              {studyRoutes.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-slate-400 hover:text-brand-green transition-colors flex items-center gap-2 group whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-green group-hover:scale-150 transition-all flex-shrink-0"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Collapsible Content */}
            <AnimatePresence>
              {openSection === 'study' && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="lg:hidden overflow-hidden pt-2 pb-4 space-y-3 text-sm text-slate-300 pl-4 border-l-2 border-brand-green/30 my-2"
                >
                  {studyRoutes.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="text-slate-300 hover:text-brand-green transition-colors block py-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          
          {/* Column 3: Resources & Guides (Desktop Always Open, Mobile Accordion) */}
          <div className="w-full lg:w-auto border-b border-slate-800/80 pb-4 lg:border-b-0 lg:pb-0">
            {/* Desktop Header */}
            <h4 className="hidden lg:flex items-center gap-2 text-white font-bold text-base mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-pink"></span>
              <span>Guides &amp; Tools</span>
            </h4>

            {/* Mobile Accordion Toggle Header */}
            <button
              type="button"
              onClick={() => toggleSection('resources')}
              className="lg:hidden w-full py-3 flex items-center justify-between text-left text-white font-bold text-base"
              aria-expanded={openSection === 'resources'}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-pink"></span>
                <span>Guides &amp; Tools</span>
              </span>
              <ChevronDown 
                size={18} 
                className={`text-slate-400 transition-transform duration-200 ${
                  openSection === 'resources' ? 'rotate-180 text-brand-pink' : ''
                }`}
              />
            </button>

            {/* Desktop List: Always Open */}
            <ul className="hidden lg:block space-y-3.5 text-sm">
              {guideResources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="text-slate-400 hover:text-brand-pink transition-colors flex items-center gap-2 group whitespace-nowrap"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-brand-pink group-hover:scale-150 transition-all flex-shrink-0"></span>
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Collapsible Content */}
            <AnimatePresence>
              {openSection === 'resources' && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="lg:hidden overflow-hidden pt-2 pb-4 space-y-3 text-sm text-slate-300 pl-4 border-l-2 border-brand-pink/30 my-2"
                >
                  {guideResources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className="text-slate-300 hover:text-brand-pink transition-colors block py-1"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          
          {/* Column 4: Offices & Contacts (Desktop Always Open, Mobile Accordion) */}
          <div className="w-full lg:w-[280px] xl:w-[310px] lg:flex-shrink-0 pb-2 lg:pb-0">
            {/* Desktop Header */}
            <h4 className="hidden lg:flex items-center gap-2 text-white font-bold text-base mb-6 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
              <span>Offices &amp; Contacts</span>
            </h4>

            {/* Mobile Accordion Toggle Header */}
            <button
              type="button"
              onClick={() => toggleSection('contact')}
              className="lg:hidden w-full py-3 flex items-center justify-between text-left text-white font-bold text-base"
              aria-expanded={isContactOpen}
            >
              <span className="flex items-center gap-2.5">
                <span className="w-2 h-2 rounded-full bg-brand-purple"></span>
                <span>Offices, Phone &amp; WeChat</span>
              </span>
              <ChevronDown 
                size={18} 
                className={`text-slate-400 transition-transform duration-200 ${
                  isContactOpen ? 'rotate-180 text-brand-purple' : ''
                }`}
              />
            </button>

            {/* Desktop Content: Always Open */}
            <div className="hidden lg:block space-y-4">
              <div className="flex items-start gap-3.5 group">
                <div className="p-2 rounded-xl bg-slate-800/80 text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors flex-shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <strong className="block text-white text-xs font-semibold mb-0.5">Head Office (Dhaka):</strong>
                  <span className="text-slate-400 text-xs leading-relaxed block">
                    Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Mirpur, Dhaka-1216, Bangladesh.
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2 rounded-xl bg-slate-800/80 text-brand-pink group-hover:bg-brand-pink group-hover:text-white transition-colors flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <strong className="block text-white text-[11px] font-semibold">ILP Hotline:</strong>
                  <a href="tel:+8801602566398" className="text-slate-300 text-sm font-bold hover:text-brand-pink transition-colors">
                    +880 1602 566398
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2 rounded-xl bg-slate-800/80 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors flex-shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <strong className="block text-white text-[11px] font-semibold">WhatsApp:</strong>
                  <a 
                    href="https://wa.me/8801895626831" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-slate-300 text-sm font-bold hover:text-brand-green transition-colors"
                  >
                    +880 1895 626831
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group">
                <div className="p-2 rounded-xl bg-slate-800/80 text-brand-purple group-hover:bg-brand-purple group-hover:text-white transition-colors flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <strong className="block text-white text-[11px] font-semibold">Email:</strong>
                  <a href="mailto:info@ilpstudy.com" className="text-slate-300 text-sm font-medium hover:text-brand-purple transition-colors">
                    info@ilpstudy.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 group pt-1">
                <div className="p-2 rounded-xl bg-slate-800/80 text-brand-green group-hover:bg-brand-green group-hover:text-white transition-colors flex-shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <strong className="block text-white text-[11px] font-semibold">WhatsApp &amp; WeChat:</strong>
                  <a 
                    href="https://wa.me/8615685689193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 text-xs font-bold hover:text-brand-green transition-colors"
                  >
                    +86 156 8568 9193
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Collapsible Content (Stays OPEN by Default) */}
            <AnimatePresence initial={false}>
              {isContactOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="lg:hidden overflow-hidden pt-2 pb-4 space-y-4 text-sm text-slate-300 pl-4 border-l-2 border-brand-purple/30 my-2"
                >
                  <div>
                    <strong className="text-white block font-semibold text-xs mb-1">Head Office (Dhaka):</strong>
                    <span className="text-slate-400 text-xs leading-relaxed block">
                      Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Mirpur, Dhaka-1216.
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1">
                    <a href="tel:+8801602566398" className="flex items-center gap-2.5 text-slate-200 hover:text-brand-pink font-semibold text-xs sm:text-sm">
                      <Phone size={15} className="text-brand-pink flex-shrink-0" />
                      <span>Hotline: +880 1602 566398</span>
                    </a>
                    <a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-200 hover:text-brand-green font-semibold text-xs sm:text-sm">
                      <MessageSquare size={15} className="text-brand-green flex-shrink-0" />
                      <span>WhatsApp: +880 1895 626831</span>
                    </a>
                    <a href="mailto:info@ilpstudy.com" className="flex items-center gap-2.5 text-slate-200 hover:text-brand-purple font-medium text-xs sm:text-sm min-w-0">
                      <Mail size={15} className="text-brand-purple flex-shrink-0" />
                      <span className="break-all sm:break-normal">Email: info@ilpstudy.com</span>
                    </a>
                    <a href="https://wa.me/8615685689193" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 text-slate-200 hover:text-brand-green font-semibold text-xs sm:text-sm">
                      <MessageSquare size={15} className="text-brand-green flex-shrink-0" />
                      <span>WhatsApp &amp; WeChat: +86 156 8568 9193</span>
                    </a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
        
        {/* Bottom Legal / Editorial Policy Bar (Each Link Unique) */}
        <div className="pt-8 border-t border-slate-800/90 flex flex-col md:flex-row justify-between items-center gap-5 sm:gap-6">
          <p suppressHydrationWarning className="text-xs text-slate-400 font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} International Learning Pathways (trading as ILP Study). All rights reserved.
          </p>

          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2.5 sm:gap-6 text-xs text-slate-400 font-medium">
            <Link href="/how-we-check" className="hover:text-white transition-colors flex items-center gap-1.5 text-slate-300 font-semibold">
              <ShieldCheck size={14} className="text-brand-green" />
              <span>How We Check Information</span>
            </Link>
            <Link href="/privacy-policy" className="hover:text-brand-pink transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-green transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-brand-purple transition-colors">
              Cookie Policy
            </Link>
            <button
              type="button"
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new CustomEvent('open_cookie_preferences'));
                }
              }}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Cookie Settings
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
