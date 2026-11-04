import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ProgramNavPills from '@/components/ProgramNavPills';
import {
  Cpu,
  Code,
  Briefcase,
  Stethoscope,
  Plane,
  BookOpen,
  ArrowRight,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study Programmes in China for Bangladesh Students | ILP Study',
  description: 'Explore bachelor’s, master’s, PhD, foundation and Chinese language routes. Compare subject areas and plan your university application with ILP Study.',
  alternates: {
    canonical: '/study-program',
  },
};

export default function StudyProgramPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc]">
        
        {/* Page Header */}
        <PageHeader 
          title="Study Programmes in China" 
          description="Explore bachelor’s, master’s, PhD, foundation and Chinese language routes. Compare subject areas and plan your university application with ILP Study."
        />

        {/* Intro Section - Seamless on mobile, rounded card on desktop */}
        <section className="py-0 sm:pt-10 sm:pb-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none sm:rounded-[32px] p-5 sm:p-8 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
              PROGRAMMES
            </span>
            <h2 className="text-xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Choose a Study Route Around Your Qualifications
            </h2>
            <p className="text-xs sm:text-base text-slate-600 font-medium mt-1.5 sm:mt-2 leading-relaxed max-w-3xl">
              Explore subject areas below; availability and teaching language (English or Chinese) must be verified for the university and intake you choose.
            </p>
            
            {/* Quick Navigation Anchor Tabs with Color Coded Icons & Active State */}
            <ProgramNavPills />
          </div>
        </section>

        {/* 1. BACHELOR'S DEGREE - Seamless on mobile, rounded card on desktop */}
        <section id="bachelor" className="py-0 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                  Undergraduate Degree (4-6 Years)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-0.5 sm:mt-1">
                  Bachelor’s Degree in China
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-pink text-white text-xs sm:text-sm font-bold shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
              {/* Computing */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-pink/30 hover:shadow-xs transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold flex-shrink-0">
                    <Code size={18} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                    Computing &amp; IT
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed sm:pl-12">
                  Computer Science, Software Engineering, Artificial Intelligence, Data Science, Cybersecurity.
                </p>
              </div>

              {/* Engineering */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold flex-shrink-0">
                    <Cpu size={18} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                    Engineering Disciplines
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed sm:pl-12">
                  Mechanical, Automation, Electrical, Civil, Electronic, Automotive, Mechatronics, Robotics, Petroleum, Aeronautical Engineering.
                </p>
              </div>

              {/* Business */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                    <Briefcase size={18} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                    Business &amp; Management
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed sm:pl-12">
                  International Business, Business Administration (BBA), Finance, Accounting, Marketing, E-commerce.
                </p>
              </div>

              {/* Medicine */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-rose-300 hover:shadow-xs transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold flex-shrink-0">
                    <Stethoscope size={18} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                    Medicine &amp; Health Sciences
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed sm:pl-12">
                  Clinical Medicine (MBBS - 5+1 Years), Pharmacy, Clinical Pharmacy, Nursing, Public Health, Dentistry.
                </p>
              </div>

              {/* Logistics */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                    <Plane size={18} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                    Logistics &amp; International Trade
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed sm:pl-12">
                  Logistics Management, Supply Chain Management, International Economics and Trade.
                </p>
              </div>

              {/* Other */}
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-200 text-brand-dark flex items-center justify-center font-bold flex-shrink-0">
                    <BookOpen size={18} />
                  </div>
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark leading-tight">
                    Other Study Areas
                  </h4>
                </div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed sm:pl-12">
                  Architecture, Civil Aviation, Renewable Energy, Agriculture, Food Science, Chinese Language and Literature.
                </p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 font-medium flex items-start gap-2.5">
              <AlertCircle size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                Use these fields as a starting point for your shortlist. Teaching language, entry requirements and availability must be checked for the specific programme and intake.
              </span>
            </div>
          </div>
        </section>

        {/* 2. MASTER'S DEGREE - Seamless on mobile, rounded card on desktop */}
        <section id="master" className="py-0 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                  Postgraduate Degree (2-3 Years)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-0.5 sm:mt-1">
                  Master’s Degree in China
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-green text-white text-xs sm:text-sm font-bold shadow-glow-green hover:bg-[#00a85d] transition-all inline-flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Computing &amp; Technology</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Artificial Intelligence, Computer Science, Data Science, Software Engineering.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Engineering</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Mechanical, Civil, Chemical, Petroleum, Mining, Materials Science, Renewable Energy, Telecommunications.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Business &amp; MBA</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">MBA, International Business, Finance, Management, Accounting.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Economics &amp; Trade</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">International Trade, Applied Economics, Development Economics.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Medicine &amp; Health</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Public Health, Pharmacy, Biomedical Engineering, Clinical Medicine (subject to eligibility).</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Education</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Education, Teaching Chinese to Speakers of Other Languages (MTCSOL), Educational Management.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Logistics &amp; Transport</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Supply Chain Management, Logistics Engineering, Transportation Engineering.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Agriculture &amp; Environment</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Agricultural Science, Environmental Engineering, Food Science.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-green/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">International Relations</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">International Relations, Political Science, Chinese Studies.</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-700 font-medium">
              Build your shortlist around your previous degree, academic results, career plans and programme prerequisites.
            </div>
          </div>
        </section>

        {/* 3. PHD RESEARCH AREAS - Seamless on mobile, rounded card on desktop */}
        <section id="phd" className="py-0 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                  Doctoral Research (3-4 Years)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-0.5 sm:mt-1">
                  PhD Research Areas
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-purple text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:bg-[#9688fa] transition-all inline-flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Computing &amp; Intelligent Systems</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Artificial Intelligence, Machine Learning, Robotics, Computer Science, Data Science.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Engineering &amp; New Energy</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Mechanical, Electrical and Civil Engineering, Materials Science, Nanotechnology, New Energy.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Life Sciences &amp; Health</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Biotechnology, Biomedical Science, Pharmaceutical Science, Public Health, Medical Research.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Agriculture &amp; Environment</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Agricultural Science, Food Technology, Environmental Science, Climate Change.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Economics &amp; Business</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Economics, Finance, International Trade, Business Administration, Management.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-brand-purple/30 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Education &amp; Society</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Education, Linguistics, Chinese Studies, International Relations.</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/70 border border-amber-200/60 text-xs text-amber-900 font-medium">
              A research route should fit your previous degree, proposal and prospective supervisor. Funding depends on the institution, department, supervisor and admission year; a research area does not guarantee a scholarship.
            </div>
          </div>
        </section>

        {/* 4. FOUNDATION / PRE-UNIVERSITY - Seamless on mobile, rounded card on desktop */}
        <section id="foundation" className="py-0 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Bridge Pathway (1 Year)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-0.5 sm:mt-1">
                  Foundation / Pre-University
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-amber-500 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-amber-600 transition-all inline-flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Science &amp; Engineering Preparation</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Mathematics, Physics, Chemistry, introductory computing and academic Chinese or English.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Computer Science Preparation</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Mathematics, basic programming, computer fundamentals and academic preparation.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Medicine / Pre-Medical Preparation</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Biology, Chemistry, Physics and language preparation, where offered as a formal pathway.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Business &amp; Economics Preparation</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Mathematics, Economics, Business Studies, English or Chinese and academic skills.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-amber-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Chinese Language Preparation</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Listening, speaking, reading and writing in preparation for further university study.</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-700 font-medium">
              These are examples of preparation areas; foundation curricula vary. Confirm qualification recognition and degree progression requirements before choosing a course. Completion does not automatically guarantee bachelor’s admission or a scholarship.
            </div>
          </div>
        </section>

        {/* 5. CHINESE LANGUAGE PROGRAMMES - Seamless on mobile, rounded card on desktop */}
        <section id="language" className="py-0 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 block">
                  Mandarin Language Pathways
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-0.5 sm:mt-1">
                  Chinese Language Programmes
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-sky-600 text-white text-xs sm:text-sm font-bold shadow-md hover:bg-sky-700 transition-all inline-flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Short-Term Chinese</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Explore beginner Mandarin, cultural activities and summer or winter course options.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">One-Semester Chinese</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Develop Mandarin listening, speaking, reading and writing over an intensive semester.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">One-Year Chinese</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Explore intensive language learning, cultural immersion and preparation for further degree study.</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-slate-50/70 border border-slate-200/70 hover:bg-white hover:border-sky-300 hover:shadow-xs transition-all space-y-1">
                <strong className="text-brand-dark font-extrabold text-sm block">Academic Chinese / HSK</strong>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">Build Chinese proficiency for study goals, HSK 4/5 certification, and Chinese-taught degree entry.</p>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-100/80 border border-slate-200/80 text-xs text-slate-700 font-medium">
              Confirm the course length, starting level, teaching schedule and intended language outcome. Language study and later degree admission are separate decisions.
            </div>
          </div>
        </section>

        {/* 6. MARCH 2027 TO SEPTEMBER DEGREE PATHWAYS - Seamless on mobile, rounded card on desktop */}
        <section id="pathways" className="py-0 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-none sm:rounded-[36px] p-5 sm:p-10 md:p-12 border-b sm:border border-slate-100 sm:border-slate-200/90 shadow-card space-y-6 sm:space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-100 pb-5">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                  MARCH PREPARATION · SEPTEMBER DIRECTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-0.5 sm:mt-1">
                  March Language &amp; Foundation to September Degree Pathways
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-brand-purple text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg hover:bg-[#9688fa] transition-all inline-flex items-center justify-center gap-2 self-start sm:self-auto"
              >
                <span>Plan my preparation route</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <p className="text-xs sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
              A language or foundation course can help you build the skills needed for a later degree application. Choose the preparation route around the degree you want to study.
            </p>

            {/* 3 Step Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-5">
              <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-1.5 sm:space-y-2">
                <span className="text-[11px] font-black uppercase text-brand-pink tracking-wider">Step 1 · March 2027</span>
                <h4 className="font-extrabold text-sm sm:text-base text-brand-dark">Language or Foundation</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Build Chinese proficiency or strengthen academic subjects. Confirm the course length and your starting level.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-1.5 sm:space-y-2">
                <span className="text-[11px] font-black uppercase text-brand-green tracking-wider">Step 2 · During Preparation</span>
                <h4 className="font-extrabold text-sm sm:text-base text-brand-dark">Work Toward Entry Requirements</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Prepare the relevant CSCA subjects, language evidence (HSK or English cert), and application documents.
                </p>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-1.5 sm:space-y-2">
                <span className="text-[11px] font-black uppercase text-brand-purple tracking-wider">Step 3 · September 2027 Target</span>
                <h4 className="font-extrabold text-sm sm:text-base text-brand-dark">Apply for Your Degree</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Review admission and scholarship criteria separately. Course completion does not guarantee a degree place or funding.
                </p>
              </div>
            </div>

            {/* Which Route Fits Comparison Table */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                  WHICH ROUTE FITS?
                </span>
                <h4 className="text-base sm:text-lg font-bold text-brand-dark">
                  Language, Foundation or Direct Entry?
                </h4>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-200/80">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-4 sm:px-5">Route</th>
                      <th className="py-3 px-4 sm:px-5">Best Starting Question</th>
                      <th className="py-3 px-4 sm:px-5">What to Confirm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="py-3.5 px-4 sm:px-5 font-bold text-brand-pink whitespace-nowrap">Chinese Language</td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-700">Do I need stronger Chinese for study or daily life?</td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-600">HSK target, course level, length and the intended degree’s language requirements.</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 sm:px-5 font-bold text-brand-green whitespace-nowrap">Foundation</td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-700">Do I need academic preparation for my degree?</td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-600">Subjects, qualification recognition, progression criteria and whether a separate degree application is needed.</td>
                    </tr>
                    <tr>
                      <td className="py-3.5 px-4 sm:px-5 font-bold text-brand-purple whitespace-nowrap">Direct Degree</td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-700">Do I already meet the entry requirements?</td>
                      <td className="py-3.5 px-4 sm:px-5 text-slate-600">Academic eligibility, language evidence, CSCA subjects and intake-specific deadlines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-200/70 text-xs text-slate-600 font-medium">
                <strong>BUILD YOUR PLAN:</strong> Share your completed qualification, preferred degree and target teaching language. For SSC or O Levels applicants, confirm that the proposed foundation qualification is accepted for the intended degree before choosing a course.
              </div>
            </div>

          </div>
        </section>

        {/* PLAN YOUR BUDGET BANNER */}
        <section className="py-8 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black">
                Explore Tuition Fees in China
              </h3>
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Teaching language, availability and entry requirements vary by university and intake. Compare approximate tuition rates in RMB across Bachelor’s, Master’s and MBBS routes.
              </p>
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/universities#tuition"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-xs sm:text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>View approximate tuition fees</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Book Free Consultation</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

