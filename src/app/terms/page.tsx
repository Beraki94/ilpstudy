import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  Scale,
  CheckCircle2,
  AlertCircle,
  FileCheck2,
  GraduationCap,
  Building2,
  ShieldCheck,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Terms of Service | Study in China Consultancy | ILP Study',
  description: 'Clear, transparent terms governing China university admissions counseling, scholarship guidance, and student visa advisory by ILP Study.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        <PageHeader 
          title="Terms of Service" 
          description="Clear, straightforward guidelines governing student admissions guidance, scholarship applications, and visa counseling for studying in China."
        />

        {/* Core Terms Container */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* Section Tag Header */}
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                TERMS OF SERVICE &amp; ADVISORY AGREEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Advisory Standards &amp; Student Service Guidelines
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Terms reviewed and applicable for the <strong>2026/2027 China admissions cycle</strong>.
              </p>
            </div>

            {/* 1. Scope of Educational Advisory Services */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold flex-shrink-0">
                  <GraduationCap size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Scope of Educational Advisory Services
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  <strong>ILP Study</strong> provides professional educational counseling for Bangladeshi and international students seeking admission to Chinese universities.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Our advisory covers university program matching (Bachelor’s, Master’s, PhD, MBBS, Chinese Language, and Foundation pathways), CSCA examination preparation guidance, Chinese Government (CSC Type A/B), provincial, municipal, and university scholarship evaluations, as well as step-by-step document attestation roadmaps.
                </p>
              </div>
            </div>

            {/* 2. University Admissions & Sovereign Discretion */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold flex-shrink-0">
                  <Building2 size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  University Admissions &amp; Sovereign Discretion
                </h3>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  ILP Study provides strategic document review, university portal submissions, and interview coaching. However, the final granting of an admission offer, scholarship coverage (such as full scholarship vs. partial tuition waiver), and student visa issuance (X1 or X2 visa) rests solely under the sovereign authority of Chinese university admissions committees, the China Scholarship Council, and the Chinese Embassy in Dhaka.
                </p>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 font-medium flex items-start gap-3 mt-2">
                  <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Strict Ethical Standard:</strong> No educational consultancy can legitimately guarantee a visa or university scholarship award. ILP Study strictly prohibits deceptive &ldquo;guaranteed visa&rdquo; claims.
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Applicant Responsibilities & Document Authenticity */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                  <FileCheck2 size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Applicant Responsibilities &amp; Document Authenticity
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Applicants and their financial sponsors warrant that all submitted educational transcripts (SSC, HSC, Bachelor’s), diploma certificates, Foreigner Physical Examination forms, police clearance reports, and financial solvency statements provided to ILP Study are authentic, verifiable, and unaltered.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Submitting forged or tampered documents results in immediate cancellation of advisory support, forfeiture of service records, and reporting to relevant university admission departments.
                </p>
              </div>
            </div>

            {/* 4. Direct Communication & No Web Database */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Direct Verification &amp; No Public Web Portal
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  This website does not operate an open student database, public account portal, or cloud data repository.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Consultation intake, document assessments, and visa coordination are handled directly through our verified channels: official email (<a href="mailto:info@ilpstudy.com" className="text-brand-pink font-bold hover:underline">info@ilpstudy.com</a>), verified WhatsApp (<a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold hover:underline">+880 1895 626831</a>), or in person at our Mirpur, Dhaka office.
                </p>
              </div>
            </div>

            {/* 5. Tuition Estimates & University Fees */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Scale size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Tuition Estimates &amp; Living Cost Planning
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Tuition ranges and living expense estimates published on this site are indicative planning benchmarks in RMB to help families plan realistic budgets before applying.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Official university tuition, dormitory accommodation fees, and mandatory health insurance must always be confirmed on the official admission notice and JW202/DQ form issued by the Chinese institution for your specific intake year.
                </p>
              </div>
            </div>

            {/* 6. Service Roadmap & Written Agreements */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-800/10 text-slate-800 flex items-center justify-center font-bold flex-shrink-0">
                  <CheckCircle2 size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Counseling Roadmap &amp; Written Agreements
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Initial profile assessments and preliminary eligibility checks are provided completely free of charge to prospective students.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Formal university processing and visa guidance are governed by clear, transparent service agreements detailing application milestones, university application fees, and pre-departure support without hidden surcharges.
                </p>
              </div>
            </div>

            {/* Contact ILP Study Box */}
            <div className="pt-6 border-t border-slate-100">
              <div className="p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 space-y-4">
                <h4 className="font-extrabold text-base text-brand-dark">
                  Contact ILP Study
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm font-semibold text-slate-700">
                  <div className="flex items-center gap-2">
                    <Phone size={15} className="text-brand-green flex-shrink-0" />
                    <span>Hotline: <a href="tel:+8801602566398" className="hover:text-brand-pink">+880 1602 566398</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageSquare size={15} className="text-brand-green flex-shrink-0" />
                    <span>WhatsApp: <a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green">+880 1895 626831</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={15} className="text-brand-pink flex-shrink-0" />
                    <span>Email: <a href="mailto:info@ilpstudy.com" className="hover:text-brand-pink">info@ilpstudy.com</a></span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={15} className="text-brand-purple flex-shrink-0" />
                    <span>Mirpur, Dhaka-1216, Bangladesh</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-all inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Request Free Consultation</span>
                    <ArrowRight size={13} />
                  </Link>
                  <Link
                    href="/how-we-check"
                    className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-green transition-all text-center"
                  >
                    How We Check Information
                  </Link>
                </div>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Website content | October 2026
                </span>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
