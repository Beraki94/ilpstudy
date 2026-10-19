"use client";

import { motion } from 'framer-motion';
import { Building2, Award, FileCheck2, Calendar, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function Features() {
  const services = [
    {
      code: "UNIVERSITIES",
      title: "University Selection",
      description: "Browse university names by province and city, then discuss your shortlist with our Dhaka counselors.",
      actionText: "Explore universities",
      link: "/universities",
      icon: Building2,
      color: "bg-brand-pink",
      shadow: "shadow-glow-pink",
      badge: "60+ Partner Hubs",
    },
    {
      code: "SCHOLARSHIPS",
      title: "Scholarship Guidance",
      description: "Compare eligibility, funding coverage and the costs you still need to pay across CSC and provincial awards.",
      actionText: "Explore scholarships",
      link: "/scholarships",
      icon: Award,
      color: "bg-brand-green",
      shadow: "shadow-glow-green",
      badge: "CSC Type A/B & Grants",
    },
    {
      code: "APPLICATIONS",
      title: "Application Support",
      description: "Prepare a complete document pack and follow your university’s instructions through direct portal submission.",
      actionText: "Explore applications",
      link: "/contact",
      icon: FileCheck2,
      color: "bg-brand-purple",
      shadow: "shadow-soft",
      badge: "Zero Sub-Contracting",
    },
    {
      code: "CSCA",
      title: "CSCA Information",
      description: "Check exam dates, subjects and the published test format before registering for your undergraduate assessment.",
      actionText: "Explore CSCA",
      link: "/csca",
      icon: Calendar,
      color: "bg-brand-dark",
      shadow: "shadow-soft",
      badge: "Exam Notices & Dates",
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-white relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading matching Page 1 */}
        <div className="text-center mb-10 sm:mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
            OUR SERVICES
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-3 sm:mb-4 tracking-tight"
          >
            How We Can Help.
          </motion.h2>
          <p className="text-sm sm:text-lg text-slate-600 font-medium">
            Personalized guidance for Bangladeshi students across university selection, scholarships, official document verification, and CSCA preparation.
          </p>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-brand-light rounded-3xl sm:rounded-[32px] sm:rounded-tl-[70px] p-6 sm:p-8 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl rounded-tl-full ${item.color} ${item.shadow} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                      <Icon size={26} />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                      {item.badge}
                    </span>
                  </div>
                  
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-pink block mb-1">
                    {item.code}
                  </span>

                  <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-slate-600 leading-relaxed text-sm font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60">
                  <Link
                    href={item.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors"
                  >
                    <span>{item.actionText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
