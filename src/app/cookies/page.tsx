import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  Cookie,
  ShieldCheck,
  CheckCircle2,
  ServerOff,
  Sliders,
  AlertCircle,
  Building2,
  Mail,
  Phone,
  MessageSquare,
  MapPin,
  ArrowRight
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cookie Policy | ILP Study',
  description: 'Understand how ILP Study operates with zero advertising or analytics tracking cookies on our study in China advisory website.',
  alternates: {
    canonical: '/cookies',
  },
};

export default function CookiePolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        <PageHeader 
          title="Cookie Policy" 
          description="Clear and transparent information regarding cookies, web caching, and client-side technologies on this website."
        />

        {/* Core Policy Statement Container */}
        <section className="py-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* Section Tag Header */}
            <div className="border-b border-slate-100 pb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
                COOKIE POLICY &amp; TRANSPARENCY
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Zero Tracking &amp; Technical Delivery Standards
              </h2>
              <p className="text-sm text-slate-500 font-medium mt-1">
                Website policy reviewed and effective as of <strong>October 2026</strong>.
              </p>
            </div>

            {/* 1. What Are Cookies */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold flex-shrink-0">
                  <Cookie size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  What Are Cookies &amp; Local Browser Storage?
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Cookies are small text records placed on your computer or mobile device when you browse websites. They are historically used to remember user preferences, maintain session security, and optimize page load speeds.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Modern web standards also include local storage keys that allow web applications to run calculators and checklists entirely inside your browser without communicating back to a remote tracking server.
                </p>
              </div>
            </div>

            {/* 2. Zero Advertising & Analytics Tracking Guarantee */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center font-bold flex-shrink-0">
                  <ShieldCheck size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Zero Advertising &amp; Commercial Analytics Tracking
                </h3>
              </div>
              <div className="pl-10 space-y-3">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Unlike commercial lead brokers and ad-heavy platforms, <strong>this website does not run advertising cookies, commercial tracking pixels, or third-party behavioral telemetry</strong>.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We believe student counseling should remain private and unmonetized by ad networks. We do not track your activity across other websites or sell your browsing history to third-party commercial data brokers.
                </p>
                <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/20 text-xs sm:text-sm text-brand-dark font-medium flex items-start gap-3 mt-2">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span>
                    <strong>100% Tracker-Free Browsing:</strong> No Meta/Facebook pixels, no Google Analytics behavioral profiling scripts, and no monetized cookie networks.
                  </span>
                </div>
              </div>
            </div>

            {/* 3. Essential Technical Caching & Session Data */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center font-bold flex-shrink-0">
                  <ServerOff size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Strictly Essential Technical Delivery &amp; Caching
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  We only rely on strictly necessary technical caching required for the web server to deliver pages securely, protect against automated denial-of-service traffic, and maintain responsive navigation.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  These transient tokens contain no personal identity markers, require no sign-in profile, and expire automatically when your browsing session concludes.
                </p>
              </div>
            </div>

            {/* 4. Client-Side Educational Tools */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Sliders size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Client-Side Educational Tools (No Server Storage)
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Our interactive tools — such as the <strong>RMB Budget Calculator</strong> and <strong>Student Document Checklists</strong> — operate entirely within your local browser session.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Inputs, currency conversions, and checked items are never saved as tracking cookies on your device or transmitted to any external analytics server.
                </p>
              </div>
            </div>

            {/* 5. External Portals & Third-Party Services */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold flex-shrink-0">
                  <Building2 size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Third-Party Links &amp; Official University Portals
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  Our website provides reference links to official Chinese universities, the China Scholarship Council (CSC) portal, and the Chinese Embassy visa processing centers.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  When you follow an external link to an official sovereign or institutional portal, their respective cookie notices and privacy standards govern your session on their servers.
                </p>
              </div>
            </div>

            {/* 6. Managing Browser Cookies */}
            <div className="space-y-3 pt-4 border-t border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-slate-800/10 text-slate-800 flex items-center justify-center font-bold flex-shrink-0">
                  <AlertCircle size={16} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-dark">
                  Controlling and Disabling Cookies
                </h3>
              </div>
              <div className="pl-10 space-y-2">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  You can set your browser (Chrome, Firefox, Safari, Edge) to block or delete cookies at any time through your browser security settings.
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Because our website does not depend on tracking cookies, disabling cookies will never restrict your ability to browse universities, fee tables, scholarship requirements, or student guides.
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
                    href="/privacy-policy"
                    className="px-6 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:border-brand-green transition-all text-center"
                  >
                    View Privacy Information
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
