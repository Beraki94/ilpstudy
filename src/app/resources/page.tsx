import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  FileCheck2,
  Calendar,
  BookOpen,
  DollarSign,
  GraduationCap,
  Award,
  Plane,
  ArrowRight,
  Sparkles,
  Download,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Study in China Student Resources | ILP Study Bangladesh',
  description: 'Find China study resources for Bangladeshi students: application steps, tuition planning, CSCA information, scholarship guidance and a document checklist.',
  alternates: {
    canonical: '/resources',
  },
};

export default function ResourcesPage() {
  const quickLinks = [
    {
      title: "Document Checklist & Downloads",
      desc: "Interactive application document checklist for passport, transcripts, and medical examination.",
      icon: FileCheck2,
      path: "/checklist",
      badge: "Application Tool",
      color: "text-brand-pink",
      bgColor: "bg-brand-pink/10"
    },
    {
      title: "CSCA Dates & Exam Information",
      desc: "Upcoming published examination dates, subject durations, multiple-choice format and preparation.",
      icon: Calendar,
      path: "/csca",
      badge: "Exam Notice",
      color: "text-brand-green",
      bgColor: "bg-brand-green/10"
    },
    {
      title: "RMB Student Budget Planner",
      desc: "Calculate your first-year estimate across tuition, accommodation, living, and registration expenses.",
      icon: DollarSign,
      path: "/budget",
      badge: "Interactive Calculator",
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10"
    },
    {
      title: "Blog & Student Guidance",
      desc: "Articles and roadmaps covering CSCA syllabus, MBBS requirements, scholarship criteria, and intake timelines.",
      icon: BookOpen,
      path: "/blogs",
      badge: "Blog & Guides",
      color: "text-brand-dark",
      bgColor: "bg-brand-dark/10"
    },
  ];

  const planCategories = [
    {
      category: "ADMISSIONS",
      title: "Application Steps",
      desc: "Understand the main steps before you apply. Match programmes, check prerequisites, and follow university instructions.",
      actionText: "Explore admissions",
      link: "/programmes",
      color: "bg-brand-pink"
    },
    {
      category: "FUNDING",
      title: "Scholarships & Waivers",
      desc: "Review funding types, CSC Type A/B awards, provincial grants, and the exact continuation conditions to check.",
      actionText: "Explore scholarships",
      link: "/scholarships",
      color: "bg-brand-green"
    },
    {
      category: "BUDGET",
      title: "Study Costs & Fees",
      desc: "Plan tuition, accommodation, and monthly living expenses across cities with indicative RMB estimates.",
      actionText: "Explore costs",
      link: "/budget",
      color: "bg-brand-purple"
    },
    {
      category: "ARRIVAL",
      title: "Visa and Arrival",
      desc: "Prepare your documents, understand X1 vs X2 visa categories, and resolve essential travel questions.",
      actionText: "Explore visa guidance",
      link: "/visa",
      color: "bg-brand-dark"
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Study in China Student Resources" 
          description="Find China study resources for Bangladeshi students: application steps, tuition planning, CSCA information, scholarship guidance and a document checklist."
        />

        {/* Quick Links Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
              STUDENT GUIDES &amp; ESSENTIAL TOOLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
              Find the Information and Documents You Need
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link
                  key={idx}
                  href={item.path}
                  className="p-6 rounded-[32px] bg-white border border-slate-200/80 shadow-soft hover:shadow-xl hover:border-brand-pink transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center font-bold`}>
                        <Icon size={22} />
                      </div>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-brand-dark group-hover:text-brand-pink transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-pink">
                    <span>Open Resource</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Information Verification Box */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-4">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold flex-shrink-0 mt-1">
                <ShieldCheck size={24} />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-green block">
                  EDITORIAL &amp; DATA POLICY
                </span>
                <h3 className="text-lg font-bold text-brand-dark">
                  How We Check University Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-3xl leading-relaxed">
                  Our approach to university sources, programme guidance, intake dates, indicative tuition ranges, and independent verification. Last reviewed 12 October 2026.
                </p>
              </div>
            </div>
            <Link
              href="/how-we-check"
              className="px-6 py-2.5 rounded-full bg-brand-dark hover:bg-brand-pink text-white text-xs font-bold transition-all flex items-center gap-1.5 flex-shrink-0 shadow-sm"
            >
              <span>Read Our Review Policy</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Plan Your Application Categories */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
              PLAN YOUR APPLICATION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
              Browse the Guides by Application Stage
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {planCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-[32px] bg-white border border-slate-200/80 shadow-soft hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                    {cat.category}
                  </span>
                  <h3 className="text-xl font-black text-brand-dark">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {cat.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    href={cat.link}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-100 hover:bg-brand-pink hover:text-white text-brand-dark text-xs font-bold transition-all"
                  >
                    <span>{cat.actionText}</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Free Consultation Callout */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                PERSONALIZED ADMISSION REVIEW
              </span>
              <h3 className="text-3xl sm:text-4xl font-black">
                Ready to Review Your Study Plans?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Connect with an ILP Study counselor in Dhaka or on WhatsApp. We provide honest eligibility evaluations, university shortlisting, and source document checklists.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center gap-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/blogs"
                  className="px-8 py-3.5 rounded-full bg-white/10 text-white font-bold text-sm hover:bg-white/20 transition-all inline-flex items-center gap-2"
                >
                  <span>Explore Blog &amp; Guides</span>
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
