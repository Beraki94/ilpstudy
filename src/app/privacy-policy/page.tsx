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
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Information | ILP Study',
  description: 'How this ILP Study website handles consultation drafts, learning tools, direct email, and WhatsApp communications.',
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
          description="How this ILP Study website handles consultation drafts, client-side tools, and direct student communications."
        />

        <section className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* 1. Consultation Requests */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                Your Information
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Consultation Requests</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                When you choose <strong>“Send consultation request”</strong>, your full name, age, email, optional phone number, programme, academic background, target intake, English-test details and message are saved so ILP Study can review the request and contact you. The form requires your consent before submission.
              </p>
            </div>

            {/* 2. Direct Application & Visa Files (Email & WhatsApp) */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                Visa &amp; Application Documents
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Direct Submissions (Email &amp; WhatsApp)</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                This website has no public database or student login portal. Official application and visa files (passports, transcripts, police clearances, medical checks, and financial records) are shared directly with our counselors via our official WhatsApp (<a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="text-brand-green font-bold hover:underline">+880 1895 626831</a>) or email (<a href="mailto:info@ilpstudy.com" className="text-brand-pink font-bold hover:underline">info@ilpstudy.com</a>).
              </p>
              <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200/80 text-xs text-amber-900 font-medium flex items-start gap-2 mt-2">
                <AlertCircle size={16} className="text-amber-700 flex-shrink-0 mt-0.5" />
                <span>
                  Always verify you are contacting our official numbers before transmitting personal identity or bank records. We never sell or lease student data.
                </span>
              </div>
            </div>

            {/* 3. Learning Tools & Zero Tracking */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                Client-Side Tools
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Learning Tools &amp; Zero Tracking</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                The budget planner and checklists work within the current page in your browser. They are not saved as a student profile on any server. <strong>This site has no advertising or analytics tracking scripts.</strong>
              </p>
            </div>

            {/* 4. External Services & Website Delivery */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                Third-Party Links &amp; Hosting
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">External Services &amp; Delivery</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                WhatsApp, university websites and official embassy portals have their own privacy policies. Standard hosting services process technical access information needed to operate and protect the website.
              </p>
            </div>

            {/* 5. Access and Removal */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                Control &amp; Deletion
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Access and Removal</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Consultation records are available through the restricted ILP Study owner inbox. To request correction or removal of your inquiries, contact <a href="mailto:info@ilpstudy.com" className="text-brand-pink font-bold hover:underline">info@ilpstudy.com</a> or call <a href="tel:+8801602566398" className="text-brand-dark font-bold hover:underline">+880 1602 566398</a>. Include enough information to identify your request; do not send sensitive identity documents.
              </p>
            </div>

            {/* Contact Box */}
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
              <span>Updated 8 October 2026</span>
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
