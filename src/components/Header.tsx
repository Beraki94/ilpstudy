"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  ArrowUpRight,
  ChevronDown,
  GraduationCap,
  Building2,
  Award,
  FileCheck2,
  Phone,
  Mail,
  BookOpen,
  Calendar,
  Calculator
} from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route navigation
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [pathname]);

  const chinaSublinks = [
    {
      name: "Study Programmes",
      path: "/programmes",
      desc: "Bachelor's, Master's, PhD, Foundation & Chinese Language",
      icon: GraduationCap,
      color: "text-brand-pink",
      bgColor: "bg-brand-pink/10"
    },
    {
      name: "Universities & Tuition",
      path: "/universities",
      desc: "Browse 60+ institutions by province & view annual tuition fees",
      icon: Building2,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10"
    },
    {
      name: "CSCA Exam Dates",
      path: "/csca",
      desc: "Upcoming test dates, format breakdown & preparation guidance",
      icon: Calendar,
      color: "text-brand-dark",
      bgColor: "bg-brand-dark/10"
    },
    {
      name: "RMB Budget Planner",
      path: "/budget",
      desc: "Interactive first-year cost calculator & fee schedule",
      icon: Calculator,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10"
    },
    {
      name: "Scholarships Guide",
      path: "/scholarships",
      desc: "CSC Type A/B, provincial awards & tuition waivers",
      icon: Award,
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10"
    },
    {
      name: "Document Checklist",
      path: "/checklist",
      desc: "Interactive checklist for transcripts, passports & medical forms",
      icon: FileCheck2,
      color: "text-brand-pink",
      bgColor: "bg-brand-pink/10"
    },
  ];

  const mainNavItems = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blogs' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Visa Guide', path: '/visa' },
    { name: 'Resources', path: '/resources' },
    { name: 'About Us', path: '/about' },
  ];

  const isChinaActive = pathname.startsWith('/programmes') || 
                        pathname.startsWith('/universities') || 
                        pathname.startsWith('/scholarships') || 
                        pathname.startsWith('/checklist') ||
                        pathname.startsWith('/csca') ||
                        pathname.startsWith('/budget') ||
                        pathname.startsWith('/pathways') ||
                        pathname.startsWith('/tuition');

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? 'bg-white/95 backdrop-blur-xl shadow-sm border-b border-slate-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            {/* Geometric Logo Representation */}
            <div className="grid grid-cols-2 gap-0.5 w-10 h-10 transition-transform group-hover:scale-105 duration-300">
              <div className="bg-[#e90089] rounded-tl-full w-full h-full"></div>
              <div className="bg-[#2a2522] rounded-tl-full w-full h-full"></div>
              <div className="bg-[#00c06a] rounded-tl-full w-full h-full"></div>
              <div className="bg-[#b1a6fb] rounded-tl-full w-full h-full"></div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-extrabold text-2xl text-[#1c1917] tracking-tight">ilp</span>
              <span className="font-extrabold text-2xl text-[#1c1917] tracking-tight -mt-1">study</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-7 items-center bg-white/80 backdrop-blur-md px-7 py-2.5 rounded-full border border-white/60 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.06)]">
            
            {/* Home Link */}
            <Link 
              href="/"
              className={`font-semibold text-sm transition-colors relative py-1 ${
                pathname === '/' ? 'text-brand-pink font-bold' : 'text-slate-600 hover:text-brand-pink'
              }`}
            >
              Home
            </Link>

            {/* Study in China Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
            >
              <button
                type="button"
                className={`font-semibold text-sm transition-colors inline-flex items-center gap-1.5 py-1 ${
                  isChinaActive ? 'text-brand-pink font-bold' : 'text-slate-600 hover:text-brand-pink'
                }`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span>Study in China</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-brand-pink' : 'text-slate-400'}`} 
                />
              </button>

              {/* Dropdown Menu */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full -left-28 pt-3 w-[560px]"
                  >
                    <div className="bg-white rounded-3xl p-4 shadow-2xl border border-slate-100">
                      <div className="px-3 py-2 border-b border-slate-100/80 mb-3 flex items-center justify-between">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pink block">
                            Study in China
                          </span>
                          <p className="text-xs font-bold text-brand-dark">
                            Admissions, Universities, Costs &amp; Exams
                          </p>
                        </div>
                        <Link 
                          href="/resources" 
                          className="text-[11px] font-bold text-brand-green hover:underline flex items-center gap-1"
                        >
                          All Resources &rarr;
                        </Link>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        {chinaSublinks.map((sub) => {
                          const Icon = sub.icon;
                          const isSubActive = pathname === sub.path;
                          return (
                            <Link
                              key={sub.name}
                              href={sub.path}
                              className={`p-2.5 rounded-2xl flex items-start gap-3 transition-all ${
                                isSubActive ? 'bg-slate-50' : 'hover:bg-slate-50'
                              } group`}
                            >
                              <div className={`w-9 h-9 rounded-xl ${sub.bgColor} ${sub.color} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                <Icon size={18} />
                              </div>
                              <div>
                                <strong className="text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors block">
                                  {sub.name}
                                </strong>
                                <span className="text-[11px] text-slate-500 font-medium leading-tight block">
                                  {sub.desc}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>

                      <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between px-2 text-xs">
                        <span className="text-slate-500">Target Intakes: <strong>March 2027</strong> &amp; <strong>September 2027</strong></span>
                        <div className="flex items-center gap-3">
                          <Link href="/how-we-check" className="text-slate-500 hover:text-brand-dark font-medium underline">
                            How we check info
                          </Link>
                          <Link href="/programmes#pathways" className="text-brand-pink font-bold hover:underline">
                            Degree Pathways &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Other Main Nav Items */}
            {mainNavItems.slice(1).map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link 
                  key={item.name} 
                  href={item.path}
                  className={`font-semibold text-sm transition-colors relative py-1 ${
                    isActive ? 'text-brand-pink font-bold' : 'text-slate-600 hover:text-brand-pink'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Link 
              href="/contact" 
              className="px-6 py-2.5 rounded-full bg-brand-dark text-white font-semibold shadow-soft hover:shadow-glow-pink hover:bg-brand-pink transition-all duration-300 flex items-center gap-2 border border-transparent hover:border-brand-pink/50 text-sm group"
            >
              Free Consultation
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-2xl bg-white/80 border border-slate-200 text-brand-dark hover:text-brand-pink hover:bg-slate-50 transition-colors relative z-50"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-slate-200 overflow-hidden shadow-xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-5 max-h-[calc(100dvh-75px)] overflow-y-auto overscroll-contain">
              <nav className="flex flex-col space-y-1.5">
                <Link
                  href="/"
                  className={`px-4 py-2.5 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                    pathname === '/' ? 'bg-brand-pink/10 text-brand-pink' : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>Home</span>
                </Link>

                {/* Mobile Study in China Group */}
                <div className="rounded-2xl bg-slate-50/90 p-3 border border-slate-200/80">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-pink block px-2 mb-2">
                    Study in China Hub
                  </span>
                  <div className="grid grid-cols-1 gap-1">
                    {chinaSublinks.map((sub) => {
                      const Icon = sub.icon;
                      const isSubActive = pathname === sub.path;
                      return (
                        <Link
                          key={sub.name}
                          href={sub.path}
                          className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all ${
                            isSubActive ? 'bg-white text-brand-pink shadow-xs' : 'text-slate-700 hover:text-brand-pink active:bg-slate-100'
                          }`}
                        >
                          <Icon size={16} className={`${sub.color} flex-shrink-0`} />
                          <div className="flex flex-col">
                            <span>{sub.name}</span>
                            <span className="text-[10px] font-normal text-slate-500 line-clamp-1">{sub.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {mainNavItems.slice(1).map((item) => {
                  const isActive = pathname === item.path;
                  return (
                    <Link
                      key={item.name}
                      href={item.path}
                      className={`px-4 py-2.5 rounded-2xl text-base font-bold transition-all flex items-center justify-between ${
                        isActive
                          ? 'bg-brand-pink/10 text-brand-pink'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-brand-pink'
                      }`}
                    >
                      <span>{item.name}</span>
                      {isActive && <div className="w-2 h-2 rounded-full bg-brand-pink"></div>}
                    </Link>
                  );
                })}

                <Link
                  href="/how-we-check"
                  className={`px-4 py-2 rounded-2xl text-xs font-semibold transition-all flex items-center justify-between text-slate-500 hover:text-brand-pink ${
                    pathname === '/how-we-check' ? 'text-brand-pink font-bold' : ''
                  }`}
                >
                  <span>Verification Policy: How We Check Info &rarr;</span>
                </Link>
              </nav>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="w-full py-3.5 rounded-xl bg-brand-dark text-white font-bold text-center shadow-soft hover:bg-brand-pink transition-colors flex items-center justify-center gap-2 text-sm"
                >
                  Book Free Consultation <ArrowUpRight size={16} />
                </Link>

                <div className="flex flex-col gap-2 text-xs font-semibold text-slate-600 pt-1 px-1">
                  <a href="tel:+8801602566398" className="flex items-center gap-2 hover:text-brand-green">
                    <Phone size={14} className="text-brand-green flex-shrink-0" />
                    <span>Hotline: +880 1602 566398</span>
                  </a>
                  <a href="mailto:info@ilpstudy.com" className="flex items-center gap-2 hover:text-brand-pink">
                    <Mail size={14} className="text-brand-pink flex-shrink-0" />
                    <span>Email: info@ilpstudy.com</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
