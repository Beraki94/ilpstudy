"use client";

import { Building2, ShieldCheck, FileCheck2, Compass } from 'lucide-react';
import PhotoSpace from '@/components/PhotoSpace';

export default function GlobalNetwork() {
  const credentials = [
    {
      title: "Dhaka Head Office Advisory",
      desc: "In-person consultation and document verification at our East Shewrapara, Mirpur office before submission.",
      icon: <Building2 size={24} className="text-brand-pink" />,
    },
    {
      title: "Direct Portal Submissions",
      desc: "Applications are filed directly through official Chinese university international portals and CSC systems.",
      icon: <ShieldCheck size={24} className="text-brand-green" />,
    },
    {
      title: "Transparent Fee Policies",
      desc: "Clear upfront breakdowns of official RMB tuition, dorm accommodation, and insurance with zero hidden costs.",
      icon: <FileCheck2 size={24} className="text-brand-purple" />,
    },
    {
      title: "Visa & Pre-Departure Briefing",
      desc: "Step-by-step guidance on JW202 clearance, Chinese embassy X-visa appointments, and campus arrival reception.",
      icon: <Compass size={24} className="text-brand-dark" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center mb-10 sm:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 mb-3 px-3.5 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>China Higher Education Guidance</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-4 sm:mb-6 leading-tight">
              A Transparent Gateway to <br />
              <span className="text-transparent bg-clip-text bg-gradient-brand">
                Chinese Universities
              </span>
            </h2>

            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed mb-4 sm:mb-6">
              Headquartered in Mirpur, Dhaka, <strong>ILP Study</strong> provides end-to-end educational counseling for Bangladeshi students pursuing Bachelor’s, Master’s, PhD, and Chinese language programmes across China.
            </p>

            <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-emerald-50/70 via-slate-50 to-white border-l-4 border-l-brand-green border border-slate-200 shadow-soft text-slate-700 leading-relaxed font-medium text-xs sm:text-sm">
              <span className="text-brand-green font-bold block mb-1">Our Counseling Approach:</span>
              Our guidance starts with your academic background, preferred subject, budget, and target intake. We help students explore realistic university matches, understand scholarship requirements, and navigate application procedures.
            </div>
          </div>

          {/* Photo Space: Dhaka Counseling Suite */}
          <div className="lg:col-span-5">
            <PhotoSpace
              title="ILP Study Consultation Suite in Dhaka"
              subtitle="East Shewrapara, Mirpur, Dhaka — Personalized university shortlisting and document guidance"
              badge="Dhaka Headquarters"
              aspectRatio="aspect-[4/3]"
              fallbackSrc="/homeImage/ilp-office-room.jpg?v=20261108"
              className="shadow-xl"
            />
          </div>
        </div>

        {/* 4 Credibility Blocks */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {credentials.map((cred, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-200/70 flex items-center justify-center mb-4 shadow-xs group-hover:scale-105 transition-transform">
                  {cred.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-pink transition-colors">
                  {cred.title}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {cred.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
