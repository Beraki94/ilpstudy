"use client";

import { motion } from 'framer-motion';
import {
  Code,
  Cpu,
  Stethoscope,
  Briefcase,
  GraduationCap,
  Languages,
  Atom,
  Building,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export default function Fields() {
  const fields = [
    {
      name: 'Computing & IT',
      icon: <Code size={26} />,
      color: 'text-brand-pink',
      bgHover: 'hover:bg-brand-pink',
      badge: 'Bachelor’s, Master’s & PhD',
      subjects: 'Computer Science, Software Engineering, AI, Data Science, Cybersecurity',
      link: '/programmes#bachelor'
    },
    {
      name: 'Engineering & Robotics',
      icon: <Cpu size={26} />,
      color: 'text-brand-green',
      bgHover: 'hover:bg-brand-green',
      badge: 'Bachelor’s & Master’s',
      subjects: 'Mechanical, Electrical, Civil, Automation, Robotics, Aeronautical & Petroleum',
      link: '/programmes#bachelor'
    },
    {
      name: 'Medicine & Health (MBBS)',
      icon: <Stethoscope size={26} />,
      color: 'text-brand-purple',
      bgHover: 'hover:bg-brand-purple',
      badge: 'English Medium MBBS',
      subjects: 'Clinical Medicine (MBBS), Pharmacy, Nursing, Public Health & Dentistry',
      link: '/programmes#bachelor'
    },
    {
      name: 'Business & Global Trade',
      icon: <Briefcase size={26} />,
      color: 'text-brand-pink',
      bgHover: 'hover:bg-brand-pink',
      badge: 'Bachelor’s, MBA & Master’s',
      subjects: 'International Business, BBA, Finance, Accounting, Supply Chain & E-Commerce',
      link: '/programmes#bachelor'
    },
    {
      name: 'Foundation / Pre-University',
      icon: <GraduationCap size={26} />,
      color: 'text-brand-green',
      bgHover: 'hover:bg-brand-green',
      badge: 'Post-SSC / O Levels',
      subjects: 'Science & Engineering, CS, Pre-Medical, Business & Academic Chinese',
      link: '/programmes#foundation'
    },
    {
      name: 'Chinese Language & HSK',
      icon: <Languages size={26} />,
      color: 'text-brand-purple',
      bgHover: 'hover:bg-brand-purple',
      badge: '1-Sem / 1-Year / HSK',
      subjects: 'Short-term Mandarin, Intensive 1-Year immersion & Academic HSK preparation',
      link: '/programmes#language'
    },
    {
      name: 'Postgraduate & PhD Research',
      icon: <Atom size={26} />,
      color: 'text-brand-pink',
      bgHover: 'hover:bg-brand-pink',
      badge: 'Full CSC Scholarship Routes',
      subjects: 'Intelligent Systems, Materials Science, Biotechnology, Economics & Energy',
      link: '/programmes#phd'
    },
    {
      name: 'Architecture & Applied Science',
      icon: <Building size={26} />,
      color: 'text-brand-green',
      bgHover: 'hover:bg-brand-green',
      badge: 'Bachelor’s & Master’s',
      subjects: 'Architecture, Civil Aviation, Renewable Energy, Food Science & Agriculture',
      link: '/programmes#bachelor'
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-brand-light relative overflow-hidden" id="programmes-preview">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
            China Higher Education Curriculum
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-3 sm:mb-4 tracking-tight"
          >
            Study Programmes &amp; Disciplines
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed"
          >
            Choose a study route tailored to your qualifications and career goals. Available across English-taught and Chinese-taught faculties in top Chinese universities.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {fields.map((field, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 shadow-soft hover:shadow-xl transition-all duration-300 group border border-slate-200/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 sm:mb-5">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-slate-50 flex items-center justify-center transition-colors duration-300 ${field.color} ${field.bgHover} group-hover:text-white shadow-sm`}>
                    {field.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 sm:px-3 py-1 rounded-full">
                    {field.badge}
                  </span>
                </div>

                <h3 className="font-extrabold text-brand-dark mb-1.5 sm:mb-2 text-base sm:text-lg group-hover:text-brand-pink transition-colors">
                  {field.name}
                </h3>

                <p className="text-xs text-slate-500 font-medium leading-relaxed mb-3 sm:mb-4">
                  {field.subjects}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={field.link}
                  className="text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors inline-flex items-center gap-1"
                >
                  <span>Explore Route</span>
                  <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-semibold text-slate-400 hover:text-brand-green"
                >
                  Check Eligibility
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore all programmes banner */}
        <div className="mt-10 sm:mt-14 text-center">
          <Link
            href="/programmes"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-dark text-white font-bold text-xs sm:text-sm hover:bg-brand-pink transition-all shadow-soft group w-full sm:w-auto"
          >
            <span>View Complete Programmes Guide &amp; Subject Lists</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        </div>

      </div>
    </section>
  );
}
