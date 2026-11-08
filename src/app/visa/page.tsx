import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Student Visa (X1 & X2) Guide for Bangladeshi Students | ILP Study',
  description:
    'Complete step-by-step China student visa guide for Bangladeshi citizens. Understand X1 (long-term) vs X2 (short-term) visa requirements, JW202 / JW201 forms, physical examination, police clearance, and Chinese Embassy Dhaka application protocols.',
  keywords: [
    'China student visa Bangladesh',
    'China X1 visa requirements Dhaka',
    'JW202 form China visa',
    'JW201 visa application China',
    'Chinese Embassy in Dhaka student visa',
    'China study visa documents checklist',
  ],
  alternates: {
    canonical: '/visa',
  },
  openGraph: {
    title: 'China Student Visa (X1 & X2) Guide for Bangladeshi Students | ILP Study',
    description:
      'Organize your Chinese Embassy Dhaka study visa application: X1 and X2 categories, JW202 form processing, and document attestation.',
    url: 'https://ilpstudy.com/visa',
    siteName: 'ILP Study',
    images: [
      {
        url: '/blogImage/18-china-student-visa-from-bangladesh.jpg',
        width: 1200,
        height: 630,
        alt: 'China Student Visa from Bangladesh Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'China Student Visa Guide | ILP Study Bangladesh',
    description:
      'Instructions for X1 and X2 China student visas, JW202 forms, and embassy appointments in Dhaka.',
    images: ['/blogImage/18-china-student-visa-from-bangladesh.jpg'],
  },
};

export default function VisaPage() {
  const visaCategories = [
    {
      category: "X1 Visa",
      title: "X1 Visa — Study Longer Than 180 Days",
      desc: "For students undertaking programmes lasting more than 180 days. Prepare your admission notice, JW201 or JW202 form, and other documents required for your application. After entering China, apply for a study residence permit within 30 days with guidance from your university.",
      badgeColor: "bg-brand-pink text-white"
    },
    {
      category: "X2 Visa",
      title: "X2 Visa — Study Up to 180 Days",
      desc: "For students undertaking programmes lasting no more than 180 days, including eligible short-term language and exchange courses. Confirm the required admission and supporting documents before applying, and follow the permitted stay shown on your issued visa.",
      badgeColor: "bg-brand-green text-white"
    },
  ];

  const questionsToResolve = [
    {
      q: "Which documents should I check?",
      a: "Consult the official visa checklist for your category at the Chinese Visa Application Service Center in Dhaka. Check that your passport has at least 6 months validity (12+ months recommended for X1), complete official Admission Notice, and verified JW202 or DQ study document."
    },
    {
      q: "What should I arrange with the university before departure?",
      a: "Confirm exact campus reporting dates, international dorm room reservation, arrival airport pickup contact, registration procedures, and any post-arrival local health check or residence permit fees (RMB 400–800)."
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc]">
        
        {/* Page Header */}
        <PageHeader 
          title="China Student Visa Guidance" 
          description="Understand X1 and X2 study visa categories and organise your documents using the Chinese Embassy in Bangladesh’s current instructions."
        />

        {/* Categories Section */}
        <section className="pt-2 pb-3 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none sm:rounded-[36px] px-5 py-8 sm:p-10 md:p-12 border-y sm:border border-slate-100 sm:border-slate-200/90 shadow-none sm:shadow-card space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Student Visas for China
              </h2>
              <p className="text-xs sm:text-base text-slate-600 font-medium mt-2 leading-relaxed max-w-3xl">
                Follow the latest student visa requirements from the Chinese Embassy in Bangladesh and the Chinese Visa Application Service Center in Dhaka. Your visa category depends on the duration of your study programme.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {visaCategories.map((visa, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-brand-pink/50 transition-all duration-300 space-y-3 sm:space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-3.5 py-1 rounded-full text-xs font-black ${visa.badgeColor}`}>
                      {visa.category}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-brand-dark">
                    {visa.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {visa.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-green/5 border border-brand-green/20 text-xs sm:text-sm text-brand-dark font-medium flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block font-bold text-brand-dark mb-0.5">Visa Application Support</strong>
                <span>
                  ILP Study helps you understand the application steps and organise supporting documents according to the applicable requirements.
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Questions Before Departure */}
        <section className="py-3 sm:py-6 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none sm:rounded-[36px] px-5 py-8 sm:p-10 border-y sm:border border-slate-100 sm:border-slate-200/90 shadow-none sm:shadow-card space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-1">
                BEFORE DEPARTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                Key Questions to Resolve
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-6">
              {questionsToResolve.map((item, idx) => (
                <div key={idx} className="p-4 sm:p-6 rounded-2xl bg-slate-50/70 border border-slate-200/70 space-y-2">
                  <h4 className="font-extrabold text-sm sm:text-base text-brand-dark">{item.q}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/checklist"
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-dark text-white text-xs sm:text-sm font-bold hover:bg-brand-pink transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Open Document Preparation Checklist</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <h3 className="text-2xl sm:text-4xl font-black">
                Have Questions About Your Visa Application?
              </h3>
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Contact our counselors or message us on WhatsApp for guidance on required documents and application steps.
              </p>
              <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Book Free Consultation</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/8801895626831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-green text-white font-bold text-sm hover:bg-[#00a85d] transition-all inline-flex items-center justify-center gap-2 shadow-glow-green"
                >
                  <span>WhatsApp (+880 1895 626831)</span>
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
