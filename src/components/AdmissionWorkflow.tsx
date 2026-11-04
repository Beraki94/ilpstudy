"use client";

import { motion } from 'framer-motion';
import { 
  UserCheck, 
  GraduationCap, 
  FileCheck2, 
  ArrowRight, 
  DollarSign, 
  BookOpen, 
  Award
} from 'lucide-react';
import Link from 'next/link';
import PhotoSpace from '@/components/PhotoSpace';

export default function AdmissionWorkflow() {
  const steps = [
    {
      num: "1",
      title: "Share your profile",
      subtitle: "Academic Background & Intake",
      desc: "Share your SSC/HSC or degree background, subject interests and target intake to review realistic university and funding options.",
      actionText: "Book free consultation",
      link: "/contact",
      icon: UserCheck,
      color: "bg-brand-pink",
      shadow: "shadow-glow-pink"
    },
    {
      num: "2",
      title: "Explore your options",
      subtitle: "Fit, Language & Scholarships",
      desc: "Compare academic fit, teaching language (English vs. Chinese medium), tuition ranges, and scholarship eligibility criteria.",
      actionText: "Explore programmes",
      link: "/study-program",
      icon: GraduationCap,
      color: "bg-brand-green",
      shadow: "shadow-glow-green"
    },
    {
      num: "3",
      title: "Document Filing & Acceptance",
      subtitle: "Admission Notice & JW202 Form",
      desc: "Organise authenticated transcripts, physical examination, and police clearance for direct submission to receive your official Admission Letter and JW202 study visa form.",
      actionText: "View document requirements",
      link: "/checklist",
      icon: FileCheck2,
      color: "bg-brand-purple",
      shadow: "shadow-soft"
    },
  ];

  const studentResources = [
    {
      title: "University tuition fees",
      desc: "Compare annual RMB tuition planning ranges, hostel costs, and first-year estimates across Bachelor's, Master's, and MBBS.",
      link: "/universities#tuition",
      actionText: "Check tuition fees",
      icon: DollarSign,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10"
    },
    {
      title: "China scholarships guide",
      desc: "Compare government, regional, and university funding routes to plan your application.",
      link: "/scholarships",
      actionText: "Explore scholarships",
      icon: Award,
      color: "text-brand-pink",
      bgColor: "bg-brand-pink/10"
    },
    {
      title: "Read the student guides",
      desc: "Comprehensive blog articles and research guides covering CSCA exam preparation, MBBS routes, and scholarship continuation.",
      link: "/blogs",
      actionText: "Browse blog & guides",
      icon: BookOpen,
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10"
    },
  ];

  return (
    <section className="py-14 sm:py-24 bg-[#f8fafc] border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* GET STARTED - Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-2">
            GET STARTED
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-3 sm:mb-4">
            Plan Your Application.
          </h2>
          <p className="text-sm sm:text-lg text-slate-600 font-medium">
            Follow a practical three-step sequence to review your academic eligibility, shortlist realistic institutions, and assemble authenticated files.
          </p>
        </div>

        {/* 3 Step Sequence Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {steps.map((st, i) => {
            const Icon = st.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl sm:rounded-[36px] sm:rounded-br-[60px] p-7 sm:p-9 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Large Background Step Number */}
                <span className="absolute top-4 right-6 text-6xl sm:text-7xl font-black text-slate-100 group-hover:text-brand-pink/15 transition-colors pointer-events-none select-none">
                  {st.num}
                </span>

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${st.color} ${st.shadow} text-white mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={24} />
                  </div>

                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block mb-1">
                    Step {st.num} &middot; {st.subtitle}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-black text-brand-dark mb-3 group-hover:text-brand-pink transition-colors">
                    {st.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed font-normal">
                    {st.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 relative z-10">
                  <Link
                    href={st.link}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors"
                  >
                    <span>{st.actionText}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* STUDENT RESOURCES */}
        <div className="pt-8 sm:pt-12 border-t border-slate-200/80 mb-14 sm:mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
              STUDENT RESOURCES
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
              Useful Information.
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
              Essential planning tools and guidance documents to prepare your China study journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {studentResources.map((res, idx) => {
              const Icon = res.icon;
              return (
                <Link
                  key={idx}
                  href={res.link}
                  className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-2xl ${res.bgColor} ${res.color} flex items-center justify-center font-bold`}>
                      <Icon size={22} />
                    </div>

                    <h4 className="font-extrabold text-lg text-brand-dark group-hover:text-brand-pink transition-colors">
                      {res.title}
                    </h4>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-pink">
                    <span>{res.actionText}</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Photo Space: Visa Preparation & Campus Registration (Placed before closing CTA) */}
        <div className="mb-14 sm:mb-20">
          <PhotoSpace
            title="Pre-Departure Visa Briefing & Chinese University Campus Arrival"
            subtitle="Guidance through JW202 generation, Chinese embassy X-visa clearance, dorm accommodation, and campus registration"
            badge="Pre-Departure & Arrival"
            aspectRatio="aspect-[16/10] sm:aspect-[21/9]"
            fallbackSrc="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80"
            className="shadow-xl"
          />
        </div>

        {/* HIGH-CONTRAST CONVERSION CALLOUT: ANCHORS THE PAGE BEFORE FOOTER */}
        <div className="rounded-3xl sm:rounded-[36px] bg-gradient-to-br from-slate-900 via-brand-dark to-slate-900 p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/15 rounded-full blur-[90px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/15 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full border border-brand-green/20 inline-block">
                Direct Counselor Guidance
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
                Ready to Plan Your Admission to China?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                Speak directly with an ILP Study counselor in Dhaka or schedule an online appointment to review university options, entrance requirements, and scholarship eligibility.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-brand-pink text-white font-bold text-sm hover:bg-[#d10079] transition-all shadow-glow-pink text-center"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/8801895626831?text=Hello%20ILP%20Study,%20I%20would%20like%20to%20plan%20my%20China%20university%20admission."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm transition-colors text-center border border-white/20"
              >
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
