import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  FileText,
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  Building2,
  MapPin,
  ArrowRight,
  ExternalLink
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'China Student Visa Guidance for Bangladesh | ILP Study',
  description: 'Understand X1 and X2 study visa categories and organise your documents using the Chinese Embassy in Bangladesh’s current instructions.',
  alternates: {
    canonical: '/visa',
  },
};

export default function VisaPage() {
  const visaCategories = [
    {
      category: "X1 Visa",
      title: "Long-Term Study Visa",
      duration: "More than 180 days (Degree Students)",
      desc: "For full-time degree programs (Bachelor’s, Master’s, PhD, and 1-year language students). Issued as a single-entry visa valid for 30 days upon arrival in China, during which the student must apply for a multi-entry Foreigner Residence Permit at the local Exit-Entry Administration (PSB).",
      keyDocs: "Original Passport, Admission Notice, JW202 / DQ Form, Physical Examination Record, Police Clearance",
      badgeColor: "bg-brand-pink text-white"
    },
    {
      category: "X2 Visa",
      title: "Short-Term Study Visa",
      duration: "No more than 180 days (Exchange & Short Courses)",
      desc: "For one-semester Chinese language immersion, short-term exchange, or clinical electives. Issued for the specific period of study (e.g., 90 to 180 days). Does not require conversion to a residence permit in China unless extended by the university.",
      keyDocs: "Original Passport, Official University Admission Notice, JW202 form (if issued by university)",
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
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="China Student Visa Guidance" 
          description="Understand X1 and X2 study visa categories and organise your documents using the Chinese Embassy in Bangladesh’s current instructions."
        />

        {/* Categories Section */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                PREPARE TO TRAVEL
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                X1 &amp; X2 Visa Categories
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed max-w-3xl">
                Follow the latest student visa instructions from the Chinese Embassy in Bangladesh and the authorised Chinese Visa Application Service Center in Dhaka. Your admitted university provides the required admission notice and official JW202 or DQ study forms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {visaCategories.map((visa, idx) => (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-brand-pink hover:shadow-soft transition-all space-y-4"
                >
                  <div className="flex items-center justify-between">
                    <span className={`px-4 py-1 rounded-full text-xs font-black ${visa.badgeColor}`}>
                      {visa.category}
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      {visa.duration}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-brand-dark">
                    {visa.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {visa.desc}
                  </p>

                  <div className="pt-3 border-t border-slate-200/70 text-xs font-medium text-slate-700">
                    <span className="font-bold text-brand-dark block mb-1">Key Documents Required:</span>
                    <span>{visa.keyDocs}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/20 text-xs sm:text-sm text-brand-dark font-medium flex items-start gap-3">
              <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
              <span>
                ILP Study counselors verify your JW202/DQ form and assemble your complete embassy submission file in Dhaka prior to your visa appointment.
              </span>
            </div>
          </div>
        </section>

        {/* Questions Before Departure */}
        <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-5 sm:p-10 border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block mb-1">
                BEFORE DEPARTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
                Key Questions to Resolve
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {questionsToResolve.map((item, idx) => (
                <div key={idx} className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-200/80 space-y-2">
                  <h4 className="font-extrabold text-base text-brand-dark">{item.q}</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                href="/checklist"
                className="px-6 py-3 rounded-full bg-brand-dark text-white text-xs sm:text-sm font-bold hover:bg-brand-pink transition-all inline-flex items-center justify-center gap-2"
              >
                <span>Open Document Preparation Checklist</span>
                <ArrowRight size={14} />
              </Link>
              <Link
                href="/blogs/after-admission-to-visa-in-china-timeline"
                className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-bold transition-all text-center"
              >
                Read Admission to Visa Timeline
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Banner */}
        <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark text-white rounded-3xl sm:rounded-[40px] p-6 sm:p-12 text-center relative overflow-hidden shadow-xl">
            <div className="max-w-2xl mx-auto space-y-4 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                DHAKA EMBASSY SUBMISSION SUPPORT
              </span>
              <h3 className="text-2xl sm:text-4xl font-black">
                Have Questions About Your Visa File?
              </h3>
              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                Meet our counselors at our Mirpur office or message on WhatsApp for JW202 review and visa appointment checklists.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm shadow-glow-pink hover:bg-[#d10079] transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Book Free Consultation</span>
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
