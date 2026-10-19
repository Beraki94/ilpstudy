import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  GraduationCap,
  Cpu,
  Code,
  Briefcase,
  Stethoscope,
  Plane,
  Languages,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Building2,
  DollarSign,
  HelpCircle,
  FileCheck2
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study Programmes in China for Bangladesh Students | ILP Study',
  description: 'Explore bachelor’s, master’s, PhD, foundation and Chinese language routes. Compare subject areas and plan your university application with ILP Study.',
  alternates: {
    canonical: '/programmes',
  },
};

export default function ProgrammesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Study Programmes in China" 
          description="Explore bachelor’s, master’s, PhD, foundation and Chinese language routes. Compare subject areas and plan your university application with ILP Study."
        />

        {/* Intro Banner */}
        <section className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
              PROGRAMMES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
              Choose a Study Route Around Your Qualifications
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed max-w-3xl">
              Explore subject areas below; availability and teaching language (English or Chinese) must be verified for the university and intake you choose.
            </p>
            
            {/* Quick Navigation Anchor Pills */}
            <div className="flex flex-wrap gap-2.5 pt-5">
              {[
                { label: "Bachelor’s Degree", href: "#bachelor" },
                { label: "Master’s Degree", href: "#master" },
                { label: "PhD Research", href: "#phd" },
                { label: "Foundation / Pre-University", href: "#foundation" },
                { label: "Chinese Language", href: "#language" },
                { label: "View Tuition Fees", href: "/universities#tuition" },
              ].map((pill) => (
                <a
                  key={pill.label}
                  href={pill.href}
                  className="px-4 py-2 rounded-full bg-slate-100 hover:bg-brand-pink hover:text-white text-slate-700 text-xs font-bold transition-colors"
                >
                  {pill.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 1. BACHELOR'S DEGREE */}
        <section id="bachelor" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                  Undergraduate Degree (4-6 Years)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  Bachelor’s Degree in China
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-pink text-white text-xs sm:text-sm font-bold shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Computing */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold">
                  <Code size={20} />
                </div>
                <h4 className="font-extrabold text-base text-brand-dark">Computing &amp; Information Technology</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Computer Science, Software Engineering, Artificial Intelligence, Data Science, Cybersecurity.
                </p>
              </div>

              {/* Engineering */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold">
                  <Cpu size={20} />
                </div>
                <h4 className="font-extrabold text-base text-brand-dark">Engineering Disciplines</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Mechanical Engineering, Mechanical Design &amp; Manufacturing, Automation, Electrical Engineering, Civil Engineering, Electronic Engineering, Automotive Engineering, Automobile Service Engineering, Mechatronics, Robotics, Petroleum Engineering, Aeronautical Engineering, Aircraft Manufacturing, Biological Engineering.
                </p>
              </div>

              {/* Business */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold">
                  <Briefcase size={20} />
                </div>
                <h4 className="font-extrabold text-base text-brand-dark">Business &amp; Management</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  International Business, Business Administration (BBA), Finance, Accounting, Marketing, E-commerce.
                </p>
              </div>

              {/* Medicine */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Stethoscope size={20} />
                </div>
                <h4 className="font-extrabold text-base text-brand-dark">Medicine &amp; Health Sciences</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Clinical Medicine (MBBS - 5+1 Years), Pharmacy, Clinical Pharmacy, Nursing, Public Health, Dentistry, Medical Laboratory Science.
                </p>
              </div>

              {/* Logistics */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                  <Plane size={20} />
                </div>
                <h4 className="font-extrabold text-base text-brand-dark">Logistics &amp; International Trade</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Logistics Management, Supply Chain Management, International Economics and Trade.
                </p>
              </div>

              {/* Other */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-slate-200 text-brand-dark flex items-center justify-center font-bold">
                  <BookOpen size={20} />
                </div>
                <h4 className="font-extrabold text-base text-brand-dark">Other Study Areas</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Architecture, Civil Aviation, Renewable Energy, Agriculture, Food Science, Chinese Language and Literature.
                </p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 font-medium flex items-start gap-2.5">
              <AlertCircle size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
              <span>
                Use these fields as a starting point for your shortlist. Teaching language, entry requirements and availability must be checked for the specific programme and intake.
              </span>
            </div>
          </div>
        </section>

        {/* 2. MASTER'S DEGREE */}
        <section id="master" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                  Postgraduate Degree (2-3 Years)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  Master’s Degree in China
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-green text-white text-xs sm:text-sm font-bold shadow-glow-green hover:bg-[#00a85d] transition-all inline-flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Computing &amp; Technology</strong>
                <p className="text-xs text-slate-600">Artificial Intelligence, Computer Science, Data Science, Software Engineering.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Engineering</strong>
                <p className="text-xs text-slate-600">Mechanical Engineering, Power Machinery and Engineering, Civil Engineering, Chemical Engineering, Petroleum Engineering, Mining Engineering, Materials Science, Renewable Energy, Information and Telecommunications Engineering.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Business &amp; MBA</strong>
                <p className="text-xs text-slate-600">MBA, International Business, Finance, Management, Accounting.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Economics &amp; Trade</strong>
                <p className="text-xs text-slate-600">International Trade, Applied Economics, Development Economics.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Medicine &amp; Health</strong>
                <p className="text-xs text-slate-600">Public Health, Pharmacy, Biomedical Engineering, Clinical Medicine (subject to eligibility).</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Education</strong>
                <p className="text-xs text-slate-600">Education, Teaching Chinese to Speakers of Other Languages (MTCSOL), Educational Management.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Logistics &amp; Transport</strong>
                <p className="text-xs text-slate-600">Supply Chain Management, Logistics Engineering, Transportation Engineering.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Agriculture &amp; Environment</strong>
                <p className="text-xs text-slate-600">Agricultural Science, Environmental Engineering, Food Science.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">International Relations</strong>
                <p className="text-xs text-slate-600">International Relations, Political Science, Chinese Studies.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
              Build your shortlist around your previous degree, academic results, career plans and programme prerequisites.
            </div>
          </div>
        </section>

        {/* 3. PHD RESEARCH AREAS */}
        <section id="phd" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                  Doctoral Research (3-4 Years)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  PhD Research Areas
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-purple text-white text-xs sm:text-sm font-bold shadow-soft hover:bg-[#9688fa] transition-all inline-flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Computing &amp; Intelligent Systems</strong>
                <p className="text-xs text-slate-600">Artificial Intelligence, Machine Learning, Robotics, Computer Science, Data Science.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Engineering &amp; New Energy</strong>
                <p className="text-xs text-slate-600">Mechanical, Electrical and Civil Engineering, Materials Science, Nanotechnology, New Energy.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Life Sciences &amp; Health</strong>
                <p className="text-xs text-slate-600">Biotechnology, Biomedical Science, Pharmaceutical Science, Public Health, Medical Research.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Agriculture &amp; Environment</strong>
                <p className="text-xs text-slate-600">Agricultural Science, Food Technology, Environmental Science, Climate Change.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Economics &amp; Business</strong>
                <p className="text-xs text-slate-600">Economics, Finance, International Trade, Business Administration, Management.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Education &amp; Society</strong>
                <p className="text-xs text-slate-600">Education, Linguistics, Chinese Studies, International Relations.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 text-xs text-amber-900 font-medium">
              A research route should fit your previous degree, proposal and prospective supervisor. Funding depends on the institution, department, supervisor and admission year; a research area does not guarantee a scholarship.
            </div>
          </div>
        </section>

        {/* 4. FOUNDATION / PRE-UNIVERSITY */}
        <section id="foundation" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                  Bridge Pathway (1 Year)
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  Foundation / Pre-University
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-pink text-white text-xs sm:text-sm font-bold shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Science &amp; Engineering Preparation</strong>
                <p className="text-xs text-slate-600">Mathematics, Physics, Chemistry, introductory computing and academic Chinese or English.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Computer Science Preparation</strong>
                <p className="text-xs text-slate-600">Mathematics, basic programming, computer fundamentals and academic preparation.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Medicine / Pre-Medical Preparation</strong>
                <p className="text-xs text-slate-600">Biology, Chemistry, Physics and language preparation, where offered as a formal pathway.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Business &amp; Economics Preparation</strong>
                <p className="text-xs text-slate-600">Mathematics, Economics, Business Studies, English or Chinese and academic skills.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Chinese Language Preparation</strong>
                <p className="text-xs text-slate-600">Listening, speaking, reading and writing in preparation for further university study.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
              These are examples of preparation areas; foundation curricula vary. Confirm qualification recognition and degree progression requirements before choosing a course. Completion does not automatically guarantee bachelor’s admission or a scholarship.
            </div>
          </div>
        </section>

        {/* 5. CHINESE LANGUAGE PROGRAMMES */}
        <section id="language" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                  Mandarin Language Pathways
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  Chinese Language Programmes
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-green text-white text-xs sm:text-sm font-bold shadow-glow-green hover:bg-[#00a85d] transition-all inline-flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Ask about this programme</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Short-Term Chinese</strong>
                <p className="text-xs text-slate-600">Explore beginner Mandarin, cultural activities and summer or winter course options.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">One-Semester Chinese</strong>
                <p className="text-xs text-slate-600">Develop Mandarin listening, speaking, reading and writing over an intensive semester.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">One-Year Chinese</strong>
                <p className="text-xs text-slate-600">Explore intensive language learning, cultural immersion and preparation for further degree study.</p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                <strong className="text-brand-dark font-extrabold text-sm block">Academic Chinese / HSK</strong>
                <p className="text-xs text-slate-600">Build Chinese proficiency for study goals, HSK 4/5 certification, and Chinese-taught degree entry.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-xs text-slate-700 font-medium">
              Confirm the course length, starting level, teaching schedule and intended language outcome. Language study and later degree admission are separate decisions.
            </div>
          </div>
        </section>

        {/* 6. MARCH 2027 TO SEPTEMBER DEGREE PATHWAYS */}
        <section id="pathways" className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                  MARCH PREPARATION · SEPTEMBER DIRECTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-brand-dark mt-1">
                  March Language &amp; Foundation to September Degree Pathways
                </h3>
              </div>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-brand-purple text-white text-xs sm:text-sm font-bold shadow-soft hover:bg-[#9688fa] transition-all inline-flex items-center gap-2 self-start sm:self-auto"
              >
                <span>Plan my preparation route</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-3xl">
              A language or foundation course can help you build the skills needed for a later degree application. Choose the preparation route around the degree you want to study.
            </p>

            {/* 3 Step Timeline */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-black uppercase text-brand-pink tracking-wider">Step 1 · March 2027</span>
                <h4 className="font-extrabold text-base text-brand-dark">Language or Foundation</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Build Chinese proficiency or strengthen academic subjects. Confirm the course length and your starting level.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-black uppercase text-brand-green tracking-wider">Step 2 · During Preparation</span>
                <h4 className="font-extrabold text-base text-brand-dark">Work Toward Entry Requirements</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Prepare the relevant CSCA subjects, language evidence (HSK or English cert), and application documents.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
                <span className="text-xs font-black uppercase text-brand-purple tracking-wider">Step 3 · September 2027 Target</span>
                <h4 className="font-extrabold text-base text-brand-dark">Apply for Your Degree</h4>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Review admission and scholarship criteria separately. Course completion does not guarantee a degree place or funding.
                </p>
              </div>
            </div>

            {/* Which Route Fits Comparison Table */}
            <div className="space-y-4 pt-4 border-t border-slate-100">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                    WHICH ROUTE FITS?
                  </span>
                  <h4 className="text-lg font-bold text-brand-dark">
                    Language, Foundation or Direct Entry?
                  </h4>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                    <tr>
                      <th className="py-3 px-5">Route</th>
                      <th className="py-3 px-5">Best Starting Question</th>
                      <th className="py-3 px-5">What to Confirm</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-medium">
                    <tr>
                      <td className="py-4 px-5 font-bold text-brand-pink whitespace-nowrap">Chinese Language</td>
                      <td className="py-4 px-5 text-slate-700">Do I need stronger Chinese for study or daily life?</td>
                      <td className="py-4 px-5 text-slate-600">HSK target, course level, length and the intended degree’s language requirements.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-bold text-brand-green whitespace-nowrap">Foundation</td>
                      <td className="py-4 px-5 text-slate-700">Do I need academic preparation for my degree?</td>
                      <td className="py-4 px-5 text-slate-600">Subjects, qualification recognition, progression criteria and whether a separate degree application is needed.</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-5 font-bold text-brand-purple whitespace-nowrap">Direct Degree</td>
                      <td className="py-4 px-5 text-slate-700">Do I already meet the entry requirements?</td>
                      <td className="py-4 px-5 text-slate-600">Academic eligibility, language evidence, CSCA subjects and intake-specific deadlines.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-medium">
                <strong>BUILD YOUR PLAN:</strong> Share your completed qualification, preferred degree and target teaching language. For SSC or O Levels applicants, confirm that the proposed foundation qualification is accepted for the intended degree before choosing a course.
              </div>
            </div>

          </div>
        </section>


        {/* PLAN YOUR BUDGET BANNER */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                PLAN YOUR BUDGET
              </span>
              <h3 className="text-3xl sm:text-4xl font-black">
                Explore Tuition Fees in China
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Teaching language, availability and entry requirements vary by university and intake. Compare approximate tuition rates in RMB across Bachelor’s, Master’s and MBBS routes.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/universities#tuition"
                  className="px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center gap-2"
                >
                  <span>View approximate tuition fees</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2"
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
