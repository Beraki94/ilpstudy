import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import UniversityDirectory from '@/components/UniversityDirectory';
import TuitionPlanningTables from '@/components/TuitionPlanningTables';
import { Building2, DollarSign, ArrowRight, Sparkles, BookOpenCheck, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Choosing a University in China & Tuition Fees | ILP Study',
  description: 'Browse institutions in China by province and city, and explore approximate annual tuition fees for bachelor’s, master’s and MBBS study.',
  alternates: {
    canonical: '/universities',
  },
};

export default function UniversitiesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Choosing a University in China" 
          description="Browse institutions in China by province and city, and discuss your study plans with ILP Study. You can also visit each university’s official website independently for its latest admissions information."
        />

        {/* Section 1: Universities Directory */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                UNIVERSITIES IN CHINA
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Browse by Name, Province or City
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Select a university to discuss your study plans with ILP Study counselors.
              </p>
            </div>

            <a
              href="#tuition"
              className="px-5 py-2.5 rounded-full bg-slate-200 hover:bg-brand-pink hover:text-white text-slate-700 font-bold text-xs transition-colors self-start sm:self-auto inline-flex items-center gap-1.5"
            >
              <DollarSign size={14} />
              <span>Jump to Tuition Fees</span>
            </a>
          </div>

          <UniversityDirectory />
        </section>

        {/* Section 2: Annual Tuition Fees */}
        <section id="tuition" className="py-16 bg-white border-t border-slate-200/80 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                TUITION PLANNING
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                University Tuition Fees in China
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed max-w-3xl">
                Explore approximate annual tuition ranges by university and subject to plan your budget. These are <strong>indicative planning estimates</strong>, not confirmed current university fees. Visit the university’s official website to check updated tuition for your programme and intake.
              </p>
              <p className="text-xs text-slate-400 mt-1 font-medium">
                These subjects are research interests, not confirmed offers. A planning estimate does not establish programme availability or a scholarship.
              </p>
            </div>

            <TuitionPlanningTables />
          </div>
        </section>

        {/* Consultation Call to Action */}
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-[40px] p-8 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                FREE ADMISSIONS ASSESSMENT
              </span>
              <h3 className="text-3xl sm:text-4xl font-black">
                Need Help Shortlisting Universities?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Our counselors will evaluate your HSC/Bachelor’s results, preferred discipline, and target intake (March or September) to provide a tailored shortlist of 3-5 universities.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center gap-2"
                >
                  <span>Request Free University Shortlist</span>
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="https://wa.me/8801895626831"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3.5 rounded-full bg-brand-green text-white font-bold text-sm hover:bg-[#00a85d] transition-all inline-flex items-center gap-2 shadow-glow-green"
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
