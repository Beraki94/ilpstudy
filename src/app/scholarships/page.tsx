import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Building2,
  DollarSign
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scholarships to Study in China from Bangladesh | ILP Study',
  description: 'Understand Chinese Government Scholarship, university and regional funding routes, coverage and preparation for study in China.',
  alternates: {
    canonical: '/scholarships',
  },
};

export default function ScholarshipsPage() {
  const scholarshipTypes = [
    {
      title: "Chinese Government Scholarships (CSC)",
      badge: "CSC Type A & Type B",
      color: "bg-brand-pink",
      textColor: "text-brand-pink",
      desc: "Bilateral programs through the Ministry of Education in Bangladesh (Type A) or direct university nominations (Type B). Typically covers full tuition, campus accommodation, comprehensive medical insurance, and monthly stipend (RMB 2,500 for Bachelor’s, RMB 3,000 for Master’s, RMB 3,500 for PhD).",
      link: "/blogs/full-scholarship-or-tuition-waiver",
      linkText: "Read Scholarship Guide"
    },
    {
      title: "Provincial Government Scholarships",
      badge: "Regional Awards",
      color: "bg-brand-green",
      textColor: "text-brand-green",
      desc: "Offered by municipal or provincial governments (such as Jiangsu Jasmine Scholarship, Zhejiang Provincial Award, Shanghai Government Scholarship). Usually covers full or partial tuition fees (RMB 15,000 to 30,000 / year), with select awards including living allowances.",
      link: "/blogs/full-scholarship-or-tuition-waiver",
      linkText: "Compare Funding Types"
    },
    {
      title: "University & Presidential Scholarships",
      badge: "Institutional Awards",
      color: "bg-brand-purple",
      textColor: "text-brand-purple",
      desc: "Funded directly by individual Chinese universities to attract high-achieving international scholars. Commonly structured as 100% full tuition waiver, 50% partial waiver, or free on-campus student dormitory accommodation.",
      link: "/contact",
      linkText: "Check University Eligibility"
    },
  ];

  const steps = [
    {
      num: "1",
      title: "Check the programme",
      desc: "Review the current academic requirements (HSC GPA, O/A Levels, or Bachelor’s CGPA), language requirements (English-medium certificate, IELTS, or HSK), and examination requirements (such as CSCA).",
    },
    {
      num: "2",
      title: "Prepare the documents",
      desc: "Follow the university’s and scholarship authority’s checklist. Assemble transcripts, Foreigner Physical Examination forms, police clearances, bank solvency statements, and study plans.",
    },
    {
      num: "3",
      title: "Submit and follow up",
      desc: "Use the official institutional portal or designated channel. Monitor portal messages and reply promptly to admission officer requests during document screening and interview rounds.",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Scholarships to Study in China" 
          description="Explore funding alongside your university choice. Start with the award requirements for your intended programme and intake."
        />

        {/* 4 Pillars Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pink block mb-2">
                  CHOOSE YOUR ROUTE
                </span>
                <h3 className="text-lg font-extrabold text-brand-dark mb-2">
                  Find the right funding route.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Look into government, university and local funding options. Check which route accepts your nationality, academic background and proposed study level.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-2">
                  UNDERSTAND THE OFFER
                </span>
                <h3 className="text-lg font-extrabold text-brand-dark mb-2">
                  Know what the award covers.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Check tuition, accommodation, insurance and living support separately. Confirm the funding period, renewal conditions and any costs you will need to pay.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-purple block mb-2">
                  PREPARE YOUR APPLICATION
                </span>
                <h3 className="text-lg font-extrabold text-brand-dark mb-2">
                  Build a complete application.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  Follow the current award notice. Prepare your academic records, language evidence, study plan and any other required documents. Scholarship and university deadlines may differ.
                </p>
              </div>
              <Link 
                href="/checklist"
                className="mt-4 pt-3 border-t border-slate-100 text-xs font-bold text-brand-purple hover:underline inline-flex items-center gap-1"
              >
                <span>Open document checklist</span>
                <ArrowRight size={12} />
              </Link>
            </div>

            <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-7 shadow-soft flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-2">
                  DISCUSS YOUR OPTIONS
                </span>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Get guidance from ILP Study.
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed">
                  Share your results, preferred subject and target intake. Scholarship decisions are made solely by the awarding institution or authority.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 pt-3 border-t border-white/10 text-xs font-bold text-brand-pink hover:underline inline-flex items-center gap-1"
              >
                <span>Book a free consultation</span>
                <ArrowRight size={12} />
              </Link>
            </div>

          </div>
        </section>

        {/* Major Funding Categories */}
        <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
              SCHOLARSHIP TIERS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
              Major Scholarship Categories in China
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Explore the difference between full stipends, government tuition waivers, and institutional awards.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {scholarshipTypes.map((type, idx) => (
              <div
                key={idx}
                className="bg-white rounded-[32px] p-7 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${type.color} text-white inline-block mb-4`}>
                    {type.badge}
                  </span>
                  <h3 className="text-xl font-extrabold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors">
                    {type.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium leading-relaxed">
                    {type.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={type.link}
                    className="text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors inline-flex items-center gap-1"
                  >
                    <span>{type.linkText}</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-Step Admissions Framework */}
        <section className="py-16 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                ADMISSIONS PROCESS
              </span>
              <h2 className="text-3xl font-black text-brand-dark tracking-tight">
                Prepare Your University Application
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
                Start with your preferred programme, academic results and target intake.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((st) => (
                <div key={st.num} className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 relative space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-pink text-white font-black flex items-center justify-center text-sm shadow-sm">
                    {st.num}
                  </div>
                  <h3 className="text-lg font-black text-brand-dark">{st.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklist CTA Banner */}
            <div className="mt-12 p-8 rounded-3xl bg-brand-light border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-xl font-black text-brand-dark">Need the Full Application Document Checklist?</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Download or complete the interactive checklist for passports, transcripts, and medical forms.
                </p>
              </div>
              <Link
                href="/checklist"
                className="px-6 py-3 rounded-full bg-brand-dark text-white font-bold text-xs sm:text-sm hover:bg-brand-pink transition-colors whitespace-nowrap inline-flex items-center gap-2"
              >
                <span>View Full Document Checklist</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
