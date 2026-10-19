"use client";

import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Award, Sparkles, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function Destinations() {
  const chinaHubs = [
    {
      city: 'Beijing',
      province: 'National Capital',
      universities: 'Beihang, BLCU, BFSU, BUCM, BUPT',
      tagline: 'World-Renowned National & Research Universities',
      badgeColor: 'bg-brand-pink text-white',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: 'Chinese language immersion, political science, engineering, and traditional medicine.',
    },
    {
      city: 'Jiangsu (Nanjing & Suzhou)',
      province: 'East China',
      universities: 'Southeast Univ, NUAA, CPU, XJTLU',
      tagline: 'Leading STEM, Aeronautics & Pharmacy Hub',
      badgeColor: 'bg-brand-green text-white',
      image: 'https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: 'High scholarship allocation, historic cultural capital, and vibrant innovation centers.',
    },
    {
      city: 'Hubei (Wuhan)',
      province: 'Central China',
      universities: 'HUST, Wuhan University, WUT',
      tagline: 'Top 10 National Engineering & Medical Powerhouses',
      badgeColor: 'bg-brand-purple text-white',
      image: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: 'Clinical Medicine (MBBS), computer science, civil engineering, and lush lakeside campuses.',
    },
    {
      city: 'Shandong (Jinan & Qingdao)',
      province: 'East Coast',
      universities: 'Shandong Univ, CUP, Ocean Univ of China',
      tagline: 'Coastal Living, Marine Science & Petroleum Engineering',
      badgeColor: 'bg-brand-dark text-white',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: 'Affordable living costs, scenic coastal cities, and high English-taught degree capacity.',
    },
    {
      city: 'Shanghai',
      province: 'Global Metropolis',
      universities: 'Fudan, ECNU, ECUST, SISU, Donghua',
      tagline: 'Global Business, Finance, Fashion & Tech',
      badgeColor: 'bg-brand-pink text-white',
      image: 'https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: 'International business, logistics, biotechnology, and direct multinational internship links.',
    },
    {
      city: 'Zhejiang (Hangzhou & Wenzhou)',
      province: 'Southeast Tech Hub',
      universities: 'ZUST, Zhejiang Gongshang, Wenzhou Medical',
      tagline: 'Digital Economy, E-Commerce & Clinical Medicine',
      badgeColor: 'bg-brand-green text-white',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: 'Birthplace of Chinese e-commerce, welcoming international environment, and provincial scholarships.',
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-white relative" id="destinations">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>University Locations in China</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-3 sm:mb-4 tracking-tight"
            >
              Top University Hubs Across China
            </motion.h2>
            <p className="text-slate-600 text-sm sm:text-lg font-normal">
              Browse 60+ partner and state universities across Beijing, Jiangsu, Hubei, Shandong, Shanghai, and Zhejiang.
            </p>
          </div>
          <Link 
            href="/universities" 
            className="inline-flex items-center gap-2 text-brand-pink font-bold hover:text-brand-dark transition-colors group flex-shrink-0 text-xs sm:text-sm"
          >
            Explore All 60+ Universities
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {chinaHubs.map((dest, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="group bg-white rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${dest.badgeColor}`}>
                      {dest.province}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                      {dest.city}
                    </h3>
                    <p className="text-slate-200 text-xs font-medium mt-0.5 line-clamp-1">
                      {dest.universities}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <p className="text-xs font-bold text-brand-pink uppercase tracking-wider mb-2">
                    {dest.tagline}
                  </p>
                  <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
                    {dest.highlights}
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href="/universities"
                  className="text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors inline-flex items-center gap-1.5"
                >
                  <span>View Universities &amp; Fees</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="text-xs font-bold text-slate-400 hover:text-brand-green transition-colors"
                >
                  Ask Counselors
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
