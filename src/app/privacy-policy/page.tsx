import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  ShieldCheck,
  Mail,
  Phone,
  MapPin,
  Lock,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Building2,
  Sliders,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Information | ILP Study',
  description: 'How this ILP Study website handles consultation drafts, learning tools, direct email, and WhatsApp communications with zero tracking.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        <PageHeader 
          title="Privacy Information" 
          description="How this ILP Study website handles consultation requests, client-side tools, and direct student communications."
        />

        {/* Core Privacy Container */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* Section Tag Header */}
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                PRIVACY &amp; DATA PROTECTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Student Information &amp; Data Privacy Policy
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Privacy framework reviewed and published for <strong>October 2026</strong>.
              </p>
            </div>

            {/* 1. Consultation Form Submissions */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold flex-shrink-0">
                  <MessageSquare size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Consultation Requests &amp; Inquiries
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  When you submit the <strong>&ldquo;Send consultation request&rdquo;</strong> form, your full name, age, email, phone number, desired programme level, current academic background, target intake, English-test details, and message are securely collected.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These details are transmitted strictly to our counselors so ILP Study can assess your scholarship eligibility and reach out to you with tailored advice. The submission requires your explicit consent before dispatch.
                </p>
              </div>
            </div>

            {/* 2. Direct Application & Visa Files */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold flex-shrink-0">
                  <Lock size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Direct Submissions (WhatsApp &amp; Encrypted Email)
                </h3>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  This website does not operate an exposed cloud database or student login account system.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Official university application and visa documents (such as passport copies, academic marksheets, police clearances, medical exam reports, and financial solvency letters) are received and reviewed directly by assigned counselors via our verified WhatsApp (<a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold hover:underline">+880 1895 626831</a>) or official email (<a href="mailto:info@ilpstudy.com" className="text-brand-pink font-bold hover:underline">info@ilpstudy.com</a>).
                </p>
                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs sm:text-sm text-amber-900 font-medium flex items-start gap-3 mt-2">
                  <AlertCircle size={18} className="text-amber-700 flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>Student Security Advisory:</strong> Always verify that you are communicating exclusively with our official numbers before transmitting personal identity cards or bank statements. We never sell, rent, or trade student records.
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Zero Advertising & Tracking Scripts */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Zero Third-Party Advertising &amp; Tracking Scripts
                </h3>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Our website operates under a strict privacy-first architecture. <strong>We do not embed third-party advertising cookies, retargeting pixels, or behavioral analytics trackers.</strong>
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your browsing activity, university searches, and degree pathway reviews remain completely private. We do not build commercial tracking profiles or sell prospective student data to marketing networks.
                </p>
                <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/20 text-xs sm:text-sm text-brand-dark font-medium flex items-start gap-3 mt-2">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    No Meta/Facebook pixels, no commercial tracking scripts, and no monetized cookie networks operate on this website.
                  </span>
                </div>
              </div>
            </div>

            {/* 4. Client-Side Educational Tools */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Sliders size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Client-Side Tools &amp; Local Session Storage
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Our interactive features — such as the RMB Budget Planner, CSCA Exam Syllabus viewer, and Student Document Checklists — run exclusively in your browser memory.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your budget calculations and checklist progress are not stored on any external server or linked to your identity.
                </p>
              </div>
            </div>

            {/* 5. External Portals & University Links */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Building2 size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  External Sovereign Portals &amp; Official Links
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Our website provides helpful direct links to external official domains including the China Scholarship Council (CSC), Chinese university international admission pages, and the Chinese Embassy in Dhaka.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When you visit these external platforms, their respective privacy policies and data regulations apply. Standard web hosting infrastructure processes transient technical connection logs needed to safeguard the site against malicious automated traffic.
                </p>
              </div>
            </div>

            {/* 6. Access, Correction and Removal */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-800/10 text-slate-800 flex items-center justify-center font-bold flex-shrink-0">
                  <Mail size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Student Rights: Access, Correction &amp; Deletion
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  You retain full control over your personal inquiry data. You have the right to request access to the information you submitted, request corrections, or ask for complete deletion of your consultation record from our internal counselor inbox.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To request data removal or inquire about your records, contact our privacy officer at <a href="mailto:info@ilpstudy.com" className="text-brand-pink font-bold hover:underline">info@ilpstudy.com</a> or call <a href="tel:+8801602566398" className="text-brand-dark font-bold hover:underline">+880 1602 566398</a>.
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
                    href="/cookies"
                    className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-purple transition-all text-center"
                  >
                    View Cookie Policy
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
