import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Scholarships for Bangladeshi Students 2026-2027 (CSC Type A & B) | ILP Study',
  description:
    'Complete guide to China scholarships for Bangladeshi students: Chinese Government Scholarship (CSC Type A & Type B), provincial awards, and 100% university tuition fee waivers. Check eligibility criteria, required documents, and application deadlines.',
  keywords: [
    'China scholarship for Bangladeshi students',
    'CSC scholarship 2026 Bangladesh',
    'CSC Type A Type B scholarship China',
    'full free scholarship in China from Bangladesh',
    'China provincial government scholarship',
    'tuition fee waiver Chinese universities',
    'how to get scholarship in China from Bangladesh',
  ],
  alternates: {
    canonical: '/scholarships',
  },
  openGraph: {
    title: 'China Scholarships for Bangladeshi Students 2026-2027 | ILP Study',
    description:
      'Explore Chinese Government Scholarships (CSC), provincial funding, and 100% tuition waivers for Bachelor’s, Master’s, and PhD students.',
    url: 'https://ilpstudy.com/scholarships',
    siteName: 'ILP Study',
    images: [
      {
        url: '/blogImage/13-csc-scholarship-for-bangladesh-students.jpg',
        width: 1200,
        height: 630,
        alt: 'China Scholarships for Bangladeshi Students — ILP Study Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Scholarships for Bangladeshi Students | ILP Study',
    description:
      'Learn how to apply for CSC Type A & B scholarships and tuition waivers to study in China.',
    images: ['/blogImage/13-csc-scholarship-for-bangladesh-students.jpg'],
  },
};

export default function ScholarshipsPage() {
  const scholarshipTypes = [
    {
      title: "Government Scholarship Routes",
      badge: "National Level Funding",
      color: "bg-brand-pink",
      textColor: "text-brand-pink",
      desc: "Administered through bilateral channels and official university nominations. Funding coverage, degree eligibility, and quota allocations depend on academic standing and official intake guidelines.",
      link: "/contact",
      linkText: "Check Eligibility"
    },
    {
      title: "Provincial & Municipal Awards",
      badge: "Regional Opportunities",
      color: "bg-brand-green",
      textColor: "text-brand-green",
      desc: "Established by regional education authorities across major academic hubs. Awards vary by province and host institution to support qualified international scholars with tuition and living contributions.",
      link: "/contact",
      linkText: "Explore Regional Options"
    },
    {
      title: "University Merit Scholarships",
      badge: "Institutional Awards",
      color: "bg-brand-purple",
      textColor: "text-brand-purple",
      desc: "Funded directly by individual Chinese universities to attract high-achieving international scholars. Commonly structured as full or partial tuition fee waivers based on academic merit.",
      link: "/contact",
      linkText: "Explore University Options"
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
      title: "Prepare Your Documents",
      desc: "Gather all required documents according to the university’s and scholarship authority’s requirements, including academic transcripts, a Foreigner Physical Examination Form, a police clearance certificate, proof of financial support, and a study plan.",
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
      <main className="min-h-screen bg-[#f8fafc]">
        
        {/* Page Header */}
        <PageHeader 
          title="Scholarships to Study in China" 
          description="Explore funding alongside your university choice. Start with the award requirements for your intended programme and intake."
        />

        {/* 4 Pillars Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
                  CHOOSE YOUR ROUTE
                </span>
                <h3 className="text-lg sm:text-xl font-black text-brand-dark mb-2">
                  Find the right funding route.
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  Look into government, university and local funding options. Check which route accepts your nationality, academic background and proposed study level.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-2">
                  UNDERSTAND THE OFFER
                </span>
                <h3 className="text-lg sm:text-xl font-black text-brand-dark mb-2">
                  Know what the award covers.
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  Check tuition, accommodation, insurance and living support separately. Confirm the funding period, renewal conditions and any costs you will need to pay.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-2">
                  PREPARE YOUR APPLICATION
                </span>
                <h3 className="text-lg sm:text-xl font-black text-brand-dark mb-2">
                  Build a complete application.
                </h3>
                <p className="text-sm text-slate-600 font-normal leading-relaxed">
                  Follow the current award notice. Prepare your academic records, language evidence, study plan and any other required documents. Scholarship and university deadlines may differ.
                </p>
              </div>
              <Link 
                href="/checklist"
                className="mt-4 pt-3 border-t border-slate-100 text-xs sm:text-sm font-bold text-brand-purple hover:underline inline-flex items-center gap-1"
              >
                <span>Open document checklist</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-7 shadow-card-dark hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-2">
                  DISCUSS YOUR OPTIONS
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mb-2">
                  Get guidance from ILP Study.
                </h3>
                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  Share your results, preferred subject and target intake. Scholarship decisions are made solely by the awarding institution or authority.
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 pt-3 border-t border-white/10 text-xs sm:text-sm font-bold text-brand-pink hover:underline inline-flex items-center gap-1"
              >
                <span>Book a free consultation</span>
                <ArrowRight size={13} />
              </Link>
            </div>

          </div>
        </section>

        {/* Major Funding Categories */}
        <section className="py-16 bg-white border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                SCHOLARSHIP TIERS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
                Major Scholarship Categories in China
              </h2>
              <p className="text-xs sm:text-base text-slate-600 font-medium mt-2">
                Explore the difference between full stipends, government tuition waivers, and institutional awards.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {scholarshipTypes.map((type, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
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
          </div>
        </section>

        {/* 3-Step Admissions Framework */}
        <section className="py-16 bg-[#f1f5f9] border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                ADMISSIONS PROCESS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Prepare Your University Application
              </h2>
              <p className="text-slate-600 text-sm sm:text-base font-medium mt-2">
                Start with your preferred programme, academic results and target intake.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              {steps.map((st) => (
                <div key={st.num} className="p-5 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative space-y-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-pink text-white font-black flex items-center justify-center text-sm shadow-sm">
                    {st.num}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-brand-dark">{st.title}</h3>
                  <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {st.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Checklist CTA Banner */}
            <div className="mt-10 sm:mt-12 p-5 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
              <div>
                <h4 className="text-lg sm:text-xl font-black text-brand-dark">Need the Full Application Document Checklist?</h4>
                <p className="text-xs sm:text-sm text-slate-600 font-medium mt-1">
                  Download or complete the interactive checklist for passports, transcripts, and medical forms.
                </p>
              </div>
              <Link
                href="/checklist"
                className="w-full sm:w-auto px-5 sm:px-6 py-3 rounded-full bg-brand-dark text-white font-bold text-xs sm:text-sm hover:bg-brand-pink transition-colors inline-flex items-center justify-center gap-2 text-center flex-shrink-0"
              >
                <span>View Full Document Checklist</span>
                <ArrowRight size={14} className="flex-shrink-0" />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
