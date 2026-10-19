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
  Globe2
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

        <section className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* 1. Advisory Scope */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                1. Scope of Services
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Advisory &amp; Admission Guidance</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                <strong>ILP Study</strong> provides professional educational counseling for Bangladeshi students pursuing higher education in China. Our services include university and program shortlisting (Bachelor’s, Master’s, PhD, MBBS, Foundation, and Chinese language routes), scholarship application guidance (CSC Type A/B, provincial, and university awards), CSCA examination information, and document preparation.
              </p>
            </div>

            {/* 2. Admission & Visa Decisions */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                2. Sovereign Decisions
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">University Admissions &amp; Visa Discretion</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                ILP Study provides strategic document review, application processing, and pre-departure counseling. However, the final granting of an admission offer, scholarship coverage (such as full scholarship vs. partial tuition waiver), and student visa issuance (X1 or X2 visa) rests solely under the sovereign authority of the respective Chinese university admissions committees, the China Scholarship Council, and the Chinese Embassy in Bangladesh.
              </p>
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-medium flex items-start gap-2 mt-2">
                <AlertCircle size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  No education agency can guarantee a visa or scholarship outcome. We advise students to be cautious of any entity claiming guaranteed admissions.
                </span>
              </div>
            </div>

            {/* 3. Document Authenticity */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                3. Student Responsibilities
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Authenticity of Documents</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Applicants and their sponsors warrant that all submitted educational transcripts (SSC, HSC, Bachelor’s), certificates, Foreigner Physical Examination forms, police clearance reports, and financial solvency statements provided to ILP Study are authentic and unaltered. Providing fraudulent documents will result in immediate cancellation of advisory support and disqualification by institutions.
              </p>
            </div>

            {/* 4. Direct Communication & No Web Database */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                4. Communication Channels
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Direct Submissions &amp; No Web Portal</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                This website does not operate an online student database or login account system. Consultations, intake deadlines, and document packets are handled directly through our verified channels: official email (<a href="mailto:info@ilpstudy.com" className="text-brand-pink font-bold hover:underline">info@ilpstudy.com</a>), official WhatsApp (<a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold hover:underline">+880 1895 626831</a>), or in-person at our Mirpur office.
              </p>
            </div>

            {/* 5. Tuition & University Payments */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                5. Tuition &amp; Living Costs
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Tuition Estimates &amp; University Fees</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Tuition fees and living expense ranges published on this site are indicative planning estimates in RMB to help families plan realistic budgets. Official university tuition, dormitory costs, and insurance fees must always be verified on the university’s current admission notice for your specific intake year.
              </p>
            </div>

            {/* Office & Contact Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2 text-xs sm:text-sm text-slate-700 font-medium">
              <strong className="block text-brand-dark font-bold text-sm">ILP Study — Education Consultancy</strong>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-xs text-slate-600">
                <span>Hotline: <strong className="text-brand-dark">+880 1602 566398</strong></span>
                <span>WhatsApp: <strong className="text-brand-green">+880 1895 626831</strong></span>
              </div>
              <p className="text-xs text-slate-500">
                Kader’s Complex, Lift No. 9, H-888/C, Mirpur, Dhaka, Bangladesh.
              </p>
            </div>

            {/* Footer timestamp */}
            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
              <span>Updated October 2026</span>
              <Link href="/contact" className="text-brand-pink font-bold hover:underline">
                Book a Free Consultation →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
