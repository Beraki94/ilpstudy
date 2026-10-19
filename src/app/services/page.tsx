"use client";

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import PhotoSpace from '@/components/PhotoSpace';
import { motion, AnimatePresence } from 'framer-motion';
import {
  GraduationCap,
  Building2,
  FileCheck,
  ShieldCheck,
  Send,
  UserCheck,
  FileText,
  BadgeDollarSign,
  PiggyBank,
  ArrowRight,
  ChevronDown,
  CheckCircle2,
  Sparkles,
  Plane,
} from 'lucide-react';

export default function ServicesPage() {
  const [activeAccordion, setActiveAccordion] = useState<number>(0);

  const workflowStages = [
    {
      step: "01",
      title: "Screening & Eligibility Assessment",
      desc: "We assess academic records, financial capacity, and language level before recommending any university. Students who cannot meet entry requirements are filtered out at this stage rather than becoming a rejected application.",
      details: ["High school and Bachelor transcript verification", "Financial solvency and bank statement assessment", "Language capability check (IELTS, TOEFL, or Medium of Instruction)"],
      icon: <UserCheck size={28} className="text-white" />,
      color: "bg-brand-pink",
    },
    {
      step: "02",
      title: "University & Programme Matching",
      desc: "Students are matched to programmes they realistically qualify for, with scholarship eligibility (CSC, Provincial, Presidential awards) taken into account and fees explained in full before they commit.",
      details: ["Institutional matching against admission criteria", "Full fee and living expenditure breakdown", "Comprehensive scholarship evaluation"],
      icon: <GraduationCap size={28} className="text-white" />,
      color: "bg-brand-purple",
    },
    {
      step: "03",
      title: "Document Preparation & Authentication",
      desc: "Transcripts, certificates, passport, medical report (Foreigner Physical Examination Form), and police clearance are collected, verified, and notarised or authenticated according to institutional requirements.",
      details: ["Notarization & ministry attestation checks", "Foreigner Physical Examination Form guidance", "Police Clearance Certificate verification"],
      icon: <FileText size={28} className="text-white" />,
      color: "bg-brand-green",
    },
    {
      step: "04",
      title: "Direct Application Submission",
      desc: "Our counsellors submit through university portals and track each file until a decision is issued, responding to requests for additional documents directly without intermediate sub-agencies.",
      details: ["100% direct university portal submissions", "Application status tracking & real-time updates", "Prompt response to admissions department queries"],
      icon: <Send size={28} className="text-white" />,
      color: "bg-brand-dark",
    },
    {
      step: "05",
      title: "Admission & JW202 Issuance",
      desc: "We manage acceptance confirmation, tuition deposit, and JW202 issuance with university international offices, and keep the student informed at each step.",
      details: ["Offer letter acceptance confirmation", "Deposit payment facilitation", "JW202 / DQ Form procurement & dispatch tracking"],
      icon: <FileCheck size={28} className="text-white" />,
      color: "bg-brand-pink",
    },
    {
      step: "06",
      title: "Visa, Travel & Campus Arrival",
      desc: "Students are prepared for the visa application (X1/X2 visa), briefed on arrival procedures, flight itineraries, dorm accommodation, and supported through campus registration.",
      details: ["Chinese Embassy visa document checklist & mock interview", "Pre-departure luggage & cultural orientation", "Airport reception coordination & on-campus registration"],
      icon: <ShieldCheck size={28} className="text-white" />,
      color: "bg-brand-green",
    },
  ];

  const studentServices = [
    {
      icon: <UserCheck size={32} className="text-white" />,
      title: "Academic & Profile Screening",
      desc: "Rigorous assessment of academic transcripts, certificates, and language levels to recommend suitable degree tracks.",
      color: "bg-brand-pink",
    },
    {
      icon: <Building2 size={32} className="text-white" />,
      title: "University & Degree Selection",
      desc: "Precise matching to top Chinese universities based on your career ambitions, academic history, and budget.",
      color: "bg-brand-green",
    },
    {
      icon: <BadgeDollarSign size={32} className="text-white" />,
      title: "Scholarship Applications",
      desc: "Guidance on Chinese Government Scholarship (CSC), Provincial Scholarships, and university tuition waivers.",
      color: "bg-brand-purple",
    },
    {
      icon: <Plane size={32} className="text-white" />,
      title: "JW202 & Visa Processing",
      desc: "Complete facilitation of JW202/DQ forms, student visa applications (X1/X2), and pre-departure briefings.",
      color: "bg-brand-dark",
    },
  ];

  const accordions = [
    {
      title: "JW202 & Visa Application Assistance",
      content: (
        <p className="text-slate-600 font-medium leading-relaxed">
          For students heading to China, the JW202 (or new DQ form) is the mandatory government authorization required to apply for the X1/X2 student visa. Our team directly coordinates with university international offices to track JW202 generation, verifies details against your passport, prepares your visa dossier, and guides you step-by-step through embassy submission.
        </p>
      )
    },
    {
      title: "Scholarship Opportunities (CSC & Provincial)",
      content: (
        <p className="text-slate-600 font-medium leading-relaxed">
          We counsel eligible undergraduate and postgraduate applicants on the Chinese Government Scholarship (Type A and Type B), local municipal scholarships, and university presidential grants. We help you prepare compelling study plans, recommendation letters, and portfolio submissions.
        </p>
      )
    },
    {
      title: "Document Notarization & Source Authentication",
      content: (
        <p className="text-slate-600 font-medium leading-relaxed">
          Incomplete or unverified documents cause the vast majority of university rejections. ILP Study oversees the verification, official translation, notary attestation, and Ministry of Foreign Affairs authentication of your transcripts and certificates before submitting to portals.
        </p>
      )
    },
    {
      title: "Pre-Departure Briefing & Campus Arrival",
      content: (
        <p className="text-slate-600 font-medium leading-relaxed">
          Stepping onto a foreign campus should be thrilling, not stressful. We brief you on currency exchange, Chinese banking, campus SIM cards, WeChat Pay/Alipay setup, dormitory check-in, residence permit registration with local authorities, and physical campus orientation.
        </p>
      )
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <PageHeader 
          title="Our Services & Admissions System" 
          description="From academic screening and document authentication to direct university portal submission, JW202 issuance, and on-campus registration — we guide students through a structured, 6-stage journey to top Chinese universities."
        />

        {/* HERO FEATURE BLOCK */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-[40px] rounded-br-[120px] p-8 sm:p-14 lg:p-20 relative overflow-hidden shadow-2xl text-white">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-green/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-pink/20 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-6">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-3">
                  Comprehensive Student &amp; Institutional Support
                </span>
                <h2 className="text-3xl sm:text-5xl font-black mb-6 leading-tight">
                  Structured Guidance for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-brand">
                    Higher Education Abroad
                  </span>
                </h2>
                <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed mb-8">
                  Operating since 2025 with over 50 students placed in Chinese universities for the September 2026 intake, ILP Study manages every phase of the international application process with rigorous quality checks and direct university communication.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/contact"
                    className="px-8 py-4 rounded-xl rounded-tr-3xl bg-brand-green text-white font-bold text-base shadow-glow-green hover:bg-[#00a85d] transition-all flex items-center gap-2"
                  >
                    Book A Free Consultation <ArrowRight size={18} />
                  </a>
                  <a
                    href="/partnerships"
                    className="px-8 py-4 rounded-xl rounded-tl-3xl bg-white/10 text-white font-bold text-base hover:bg-white/20 transition-all border border-white/20"
                  >
                    University Partnerships
                  </a>
                </div>
              </div>

              {/* Photo Space: Student Counseling */}
              <div className="lg:col-span-6">
                <PhotoSpace
                  title="One-on-One Student Counseling & Profile Review"
                  subtitle="Experienced advisors matching students to qualified degree programs and scholarships"
                  badge="Admissions Counseling"
                  aspectRatio="aspect-[4/3]"
                  fallbackSrc="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  className="shadow-2xl border-2 border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4 CORE SERVICE TILES */}
        <section className="py-24 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
                What We Offer
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-4">
                Full-Lifecycle Admissions Support
              </h2>
              <p className="text-slate-600 text-lg">
                We eliminate guesswork, verify credentials, and guarantee that every application submitted meets the highest institutional standard.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {studentServices.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color} shadow-sm group-hover:scale-110 transition-transform`}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-green">
                    <CheckCircle2 size={14} /> Verified Service
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* THE 6-STAGE WORKFLOW (DETAILED) */}
        <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider">
              <ShieldCheck size={14} />
              <span>Standard Operating Procedure</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-brand-dark tracking-tight mb-6">
              How We Work: The 6 Stages
            </h2>
            <p className="text-lg text-slate-600 font-medium">
              Every applicant we send has been through the exact same six stages, ensuring files received by partner universities are complete, consistent, and correctly documented.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workflowStages.map((stage, idx) => (
              <div
                key={idx}
                className="bg-brand-light rounded-[32px] rounded-tl-[70px] p-8 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl rounded-tl-full flex items-center justify-center ${stage.color} shadow-sm`}>
                      {stage.icon}
                    </div>
                    <span className="text-3xl font-black text-slate-300 group-hover:text-brand-pink transition-colors">
                      {stage.step}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-brand-dark mb-3">
                    {stage.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {stage.desc}
                  </p>

                  <ul className="space-y-2 border-t border-slate-200/60 pt-4 text-xs font-medium text-slate-600">
                    {stage.details.map((detail, di) => (
                      <li key={di} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className="text-brand-green mt-0.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-400">
                  <span>Stage {stage.step} of 06</span>
                  <span className="text-brand-dark group-hover:text-brand-pink transition-colors">Quality Assured</span>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Space: Visa & Campus Registration */}
          <div className="mt-16">
            <PhotoSpace
              title="Student Pre-Departure Briefing & Campus Arrival in China"
              subtitle="Students accompanied through JW202, Chinese embassy visa clearance, dorm check-in, and campus registration"
              badge="Campus Arrival Support"
              aspectRatio="aspect-[21/9]"
              fallbackSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              className="shadow-xl"
            />
          </div>

        </section>

        {/* ACCORDION FAQ SECTION */}
        <section className="py-24 bg-brand-light relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              
              <div className="lg:col-span-5">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-3">
                  Key Inquiries
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-6">
                  Clear Answers to Critical Admissions Questions
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  Whether understanding JW202 processing, embassy visa requirements, or scholarship criteria, our counsellors give you direct, honest answers before you commit.
                </p>
                <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-soft">
                  <h4 className="font-bold text-brand-dark text-base mb-1">Need One-on-One Counsel?</h4>
                  <p className="text-xs text-slate-500 mb-4">Visit our Dhaka office or connect with us directly on WeChat.</p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-[#d10079]"
                  >
                    Contact Advisors Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                {accordions.map((acc, idx) => (
                  <div 
                    key={idx} 
                    className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === idx ? 'border-brand-green bg-white shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'}`}
                  >
                    <button 
                      onClick={() => setActiveAccordion(activeAccordion === idx ? -1 : idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left"
                    >
                      <span className={`text-base font-bold transition-colors ${activeAccordion === idx ? 'text-brand-green' : 'text-brand-dark'}`}>
                        {acc.title}
                      </span>
                      <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 ${activeAccordion === idx ? 'text-brand-green rotate-180' : 'text-slate-400'}`} 
                      />
                    </button>
                    <AnimatePresence>
                      {activeAccordion === idx && (
                        <motion.div 
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2 border-t border-slate-100">
                            {acc.content}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
