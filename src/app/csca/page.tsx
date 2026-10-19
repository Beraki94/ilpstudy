import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  BookOpenCheck,
  Calendar,
  Clock,
  Languages,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Building2,
  FileText,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'CSCA Exam Dates, Subjects & Format | ILP Study Bangladesh',
  description: 'Understand CSCA, upcoming published exam dates, subject durations and test methods. Check the latest official arrangements before registering.',
  alternates: {
    canonical: '/csca',
  },
};

export default function CSCAPage() {
  const upcomingSessions = [
    {
      examDates: "14–15 November 2026",
      regWindow: "15–21 October 2026 · Beijing time (UTC+8)",
      status: "Upcoming Session",
      badgeColor: "bg-brand-pink text-white"
    },
    {
      examDates: "19–20 December 2026",
      regWindow: "Check official session notice for registration window.",
      status: "Scheduled",
      badgeColor: "bg-brand-green text-white"
    },
    {
      examDates: "23–24 January 2027",
      regWindow: "Check official session notice for registration window.",
      status: "Scheduled",
      badgeColor: "bg-brand-purple text-white"
    },
  ];

  const subjects = [
    {
      name: "Professional Chinese · Humanities or STEM",
      duration: "90 minutes",
      questions: "80 multiple choice",
      lang: "Chinese",
      langBadge: "Chinese Only",
      color: "border-l-4 border-l-brand-pink"
    },
    {
      name: "Mathematics",
      duration: "60 minutes",
      questions: "48 multiple choice",
      lang: "Chinese or English",
      langBadge: "Bilingual (EN / CN)",
      color: "border-l-4 border-l-brand-green"
    },
    {
      name: "Physics",
      duration: "60 minutes",
      questions: "48 multiple choice",
      lang: "Chinese or English",
      langBadge: "Bilingual (EN / CN)",
      color: "border-l-4 border-l-brand-purple"
    },
    {
      name: "Chemistry",
      duration: "60 minutes",
      questions: "48 multiple choice",
      lang: "Chinese or English",
      langBadge: "Bilingual (EN / CN)",
      color: "border-l-4 border-l-brand-dark"
    },
  ];

  const testMethods = [
    {
      title: "Home-based online examination",
      desc: "Taken remotely with live online supervision. Check the official equipment, dual-camera environment, room setup, and identity requirements.",
      icon: Laptop,
      color: "bg-brand-pink"
    },
    {
      title: "Computer-based test centre",
      desc: "Taken on computer terminals at an authorised examination centre, where this option is scheduled and available.",
      icon: Building2,
      color: "bg-brand-green"
    },
    {
      title: "Paper-based test centre",
      desc: "Taken with standard physical question papers and OMR sheets at a designated authorised examination centre.",
      icon: FileText,
      color: "bg-brand-purple"
    },
  ];

  const prepSteps = [
    {
      num: "01",
      title: "Confirm your subjects",
      desc: "Check your intended degree programme’s admissions notice and the current official CSCA syllabus (e.g., STEM applicants usually need Mathematics + Physics or Chemistry)."
    },
    {
      num: "02",
      title: "Organise your study",
      desc: "Identify topics you need to review against the syllabus benchmarks and establish a realistic study routine. Solve past multiple-choice question models."
    },
    {
      num: "03",
      title: "Prepare for the arrangements",
      desc: "Read current official instructions for online registration, ID verification (passport), test-day timing, and technical equipment compliance."
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="What is CSCA?" 
          description="Understand CSCA, upcoming published exam dates, subject durations and test methods. Check the latest official arrangements before registering."
        />

        {/* Section 1: Undergraduate Admissions Context */}
        <section className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
              UNDERGRADUATE ADMISSIONS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
              China Scholastic Competency Assessment
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-4xl">
              <strong>CSCA</strong> stands for <strong>China Scholastic Competency Assessment</strong>. It is an assessment for international students planning undergraduate study in China, organised by the China Scholarship Council. Universities use its results as part of admissions and scholarship review.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 font-medium">
              Check your intended programme’s current requirements to confirm whether a score report is needed and which subjects and test languages apply.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row flex-wrap gap-2.5 sm:gap-4">
              <a
                href="#dates"
                className="px-6 py-2.5 rounded-full bg-brand-pink text-white text-xs font-bold hover:bg-[#d10079] transition-all shadow-glow-pink text-center"
              >
                See exam dates
              </a>
              <a
                href="#format"
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all text-center"
              >
                Understand the exam format
              </a>
              <Link
                href="/blogs/csca-exam-preparation-and-syllabus-in-china"
                className="px-6 py-2.5 rounded-full bg-brand-light text-brand-dark text-xs font-bold border border-slate-200 hover:border-brand-green transition-all text-center"
              >
                Read In-Depth CSCA Guide
              </Link>
            </div>
          </div>
        </section>

        {/* Section 2: Published Upcoming Sessions */}
        <section id="dates" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                PUBLISHED UPCOMING SESSIONS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                CSCA Exam Dates
              </h3>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
                  <tr>
                    <th className="py-4 px-6">Examination Dates</th>
                    <th className="py-4 px-6">Registration Information</th>
                    <th className="py-4 px-6 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {upcomingSessions.map((s, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-4 px-6 font-extrabold text-brand-dark whitespace-nowrap">
                        {s.examDates}
                      </td>
                      <td className="py-4 px-6 text-slate-700">
                        {s.regWindow}
                      </td>
                      <td className="py-4 px-6 text-right">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold ${s.badgeColor}`}>
                          {s.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium flex items-start gap-2.5">
              <AlertCircle size={16} className="text-brand-pink flex-shrink-0 mt-0.5" />
              <span>
                Dates checked against the official CSCA website on <strong>12 October 2026</strong>. Visit the official website independently to confirm changes, later sessions and exact examination times. <strong>Bangladesh time is two hours behind Beijing time (UTC+6 vs UTC+8).</strong>
              </span>
            </div>
          </div>
        </section>

        {/* Section 3: Published Subject Format */}
        <section id="format" className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-1">
                PUBLISHED SUBJECT FORMAT
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                How the Examination is Structured
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                The published subject format uses a <strong>100-point score scale</strong>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {subjects.map((sub, idx) => (
                <div key={idx} className={`p-6 rounded-2xl bg-slate-50 border border-slate-200/80 ${sub.color} space-y-2`}>
                  <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-white text-slate-700 shadow-xs inline-block">
                    {sub.langBadge}
                  </span>
                  <h4 className="font-extrabold text-base text-brand-dark">{sub.name}</h4>
                  <div className="text-xs text-slate-600 space-y-1 pt-2 border-t border-slate-200/60 font-medium">
                    <p className="flex justify-between">
                      <span className="text-slate-400">Duration:</span>
                      <strong className="text-brand-dark">{sub.duration}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Questions:</span>
                      <strong className="text-brand-dark">{sub.questions}</strong>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-slate-400">Language:</span>
                      <strong className="text-brand-dark">{sub.lang}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-medium">
              Your university sets its admission requirements; a score alone does not guarantee admission or a scholarship. Format summary checked against the official CSCA examination introduction. Confirm the current session instructions and your university’s required subject combination before registering.
            </div>
          </div>
        </section>

        {/* Section 4: Test Methods */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block mb-1">
                TEST METHODS
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                How Students Take CSCA
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testMethods.map((m, idx) => {
                const Icon = m.icon;
                return (
                  <div key={idx} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                    <div className={`w-12 h-12 rounded-2xl ${m.color} text-white flex items-center justify-center font-bold shadow-sm`}>
                      <Icon size={22} />
                    </div>
                    <h4 className="font-extrabold text-base text-brand-dark">{m.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {m.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="text-xs text-slate-500 font-medium">
              Available methods and centres depend on the session and location. Review your official registration information and admission ticket.
            </p>
          </div>
        </section>

        {/* Section 5: CSCA Preparation Checklist */}
        <section className="py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                PLAN YOUR PREPARATION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                CSCA Preparation Checklist
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Use this general checklist to organise your preparation around the subjects requested by your intended university.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {prepSteps.map((st) => (
                <div key={st.num} className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
                  <span className="text-3xl font-black text-brand-pink">{st.num}</span>
                  <h4 className="font-extrabold text-base text-brand-dark">{st.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Before Registering & Advice */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                BEFORE REGISTERING
              </span>
              <h3 className="text-3xl sm:text-4xl font-black">
                Keep Official Registration Separate
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Visit the official CSCA website independently to check dates, registration windows, syllabuses and test-day instructions. An ILP Study consultation provides strategic guidance; it does not register you for the official exam.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center gap-2"
                >
                  <span>Discuss Your Study Plan</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/checklist"
                  className="px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Read Document Checklist</span>
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
