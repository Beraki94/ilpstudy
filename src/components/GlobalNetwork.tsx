"use client";

import { motion } from 'framer-motion';
import { Building2, ShieldCheck, CheckCircle2, ArrowRight, Award, GraduationCap, MapPin } from 'lucide-react';
import Link from 'next/link';
import PhotoSpace from '@/components/PhotoSpace';

export default function GlobalNetwork() {
  const credentials = [
    {
      title: "50+ Placements in China",
      desc: "More than fifty Bangladeshi and international students placed in Chinese universities for the September 2026 intake.",
      icon: <GraduationCap size={24} className="text-brand-pink" />,
      tag: "Verified Intake Track Record"
    },
    {
      title: "100% Direct Portal Filings",
      desc: "Applications are filed and monitored directly through university admission portals by our own counselors. Zero sub-contracting.",
      icon: <Building2 size={24} className="text-brand-green" />,
      tag: "Institutional Integrity"
    },
    {
      title: "Authenticated Source Documents",
      desc: "Educational certificates, police clearances, medical checks, and financial statements verified and authenticated in Dhaka before submission.",
      icon: <ShieldCheck size={24} className="text-brand-purple" />,
      tag: "Document Authenticity"
    },
    {
      title: "Direct WeChat University Liaison",
      desc: "Real-time communication with Chinese university international admissions officers via WeChat (+86 156 8568 9193) for rapid issue resolution.",
      icon: <Award size={24} className="text-brand-dark" />,
      tag: "Direct Communication"
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-brand-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-10 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>China Higher Education Specialists</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-4 sm:mb-6 leading-tight">
              A Transparent Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-brand">
                Chinese Universities
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed mb-4 sm:mb-6">
              Headquartered in Mirpur, Dhaka, <strong>ILP Study</strong> provides end-to-end educational counseling for Bangladeshi students pursuing Bachelor’s, Master’s, PhD, MBBS, and Chinese language programmes across China.
            </p>

            <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-soft text-slate-700 leading-relaxed font-medium text-xs sm:text-sm">
              <span className="text-brand-green font-bold block mb-1">Our Counseling Standard:</span>
              Our guidance starts with your academic background, preferred subject, budget, and target intake (March or September). We help students explore realistic university matches, understand CSC scholarship requirements, and navigate CSCA preparation.
            </div>
          </div>

          {/* Photo Space: Dhaka Counseling Suite */}
          <div className="lg:col-span-5">
            <PhotoSpace
              title="ILP Study Consultation Suite in Dhaka"
              subtitle="East Shewrapara, Mirpur, Dhaka — Personalized university shortlisting and document guidance"
              badge="Dhaka Headquarters"
              aspectRatio="aspect-[4/3]"
              fallbackSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
              className="shadow-xl"
            />
          </div>
        </div>

        {/* 4 Trust Pillars */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 shadow-xs">
                  {cred.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  {cred.tag}
                </span>
                <h3 className="text-lg font-bold text-brand-dark mb-2">
                  {cred.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {cred.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-bold text-brand-green">
                <CheckCircle2 size={13} />
                <span>ILP Study Standard</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
