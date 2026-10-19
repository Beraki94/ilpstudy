import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  ShieldCheck,
  Building2,
  BookOpen,
  Calendar,
  AlertCircle,
  FileCheck2,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'How We Check University Information | ILP Study',
  description: 'Our approach to university sources, programme information, intake dates, corrections and independent education guidance.',
  alternates: {
    canonical: '/how-we-check',
  },
};

export default function HowWeCheckPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        <PageHeader 
          title="How We Check University Information" 
          description="Our approach to university sources, programme information, intake dates, corrections and independent education guidance."
        />

        {/* Core Review Statement */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* Section Tag */}
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                INFORMATION REVIEW
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Independent Education Guidance Standards
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Website content reviewed and published on <strong>12 October 2026</strong>.
              </p>
            </div>

            {/* 1. University and official sources */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold flex-shrink-0">
                  <Building2 size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  University and Official Sources
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  The tuition table contains indicative planning ranges. They are not verified current university quotations.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Visit the university’s official website to check the updated fee for your programme and intake.
                </p>
              </div>
            </div>

            {/* 2. Useful student guidance */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold flex-shrink-0">
                  <BookOpen size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Useful Student Guidance
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Our blog articles and study guides explain how to compare study routes and prepare an application from Bangladesh. General subject lists are areas to explore, not an intake catalogue.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  The university’s current notice determines eligibility, documents and programme availability.
                </p>
              </div>
            </div>

            {/* 3. Dates and updates */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                  <Calendar size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Dates and Updates
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  The tuition page was updated and CSCA information was reviewed on <strong>12 October 2026</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A review date records when information was checked; it does not establish a later intake’s fees or admission rules.
                </p>
              </div>
            </div>

            {/* 4. Corrections */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                  <AlertCircle size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Corrections
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  If you find a discrepancy, tell ILP Study the page title and share the relevant official notice with our team.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We will review the information before updating it.
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
                    href="/universities#tuition"
                    className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-green transition-all text-center"
                  >
                    View Indicative Tuition Planning Ranges
                  </Link>
                </div>
              </div>

              <div className="pt-4 text-center">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                  Website content | 12 October 2026
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
