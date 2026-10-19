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
  AlertCircle
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
          description="Clear and transparent information regarding cookies and caching technologies on this website."
        />

        <section className="py-12 sm:py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft space-y-8">
            
            {/* 1. What Are Cookies */}
            <div className="space-y-2.5">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                1. Overview
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">What Are Cookies?</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Cookies are small text files placed on your computer or mobile device when you browse websites. They are commonly used to remember preferences, maintain website security, and help pages load quickly.
              </p>
            </div>

            {/* 2. Zero Advertising & Tracking Guarantee */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                2. Our Privacy Standard
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Zero Advertising &amp; Analytics Tracking</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Unlike many commercial platforms, <strong>this website does not run advertising cookies, commercial tracking pixels, or third-party behavioral telemetry</strong>. We do not track your activity across other websites or sell browsing history to advertisers.
              </p>
              <div className="p-3.5 rounded-2xl bg-brand-green/5 border border-brand-green/20 text-xs text-brand-dark font-medium flex items-start gap-2 mt-2">
                <CheckCircle2 size={16} className="text-brand-green flex-shrink-0 mt-0.5" />
                <span>
                  No Meta/Facebook tracking pixels, no behavioral profiling scripts, and no monetized cookie networks.
                </span>
              </div>
            </div>

            {/* 3. Essential Technical Cookies Only */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-purple block">
                3. Technical Delivery
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Essential Caching &amp; Session Data</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                We only rely on strictly necessary technical caching required for the web server to deliver pages securely, protect against automated denial-of-service traffic, and maintain responsive navigation.
              </p>
            </div>

            {/* 4. Client-Side Educational Tools */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                4. Interactive Tools
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Client-Side Tools (No Tracking)</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                Our interactive tools — such as the <strong>RMB Budget Calculator</strong> and <strong>Student Document Checklists</strong> — operate entirely within your local browser session. Inputs and checked items are never saved as a cookie on your device or sent to any analytics server.
              </p>
            </div>

            {/* 5. Managing Your Cookies */}
            <div className="space-y-2.5 pt-6 border-t border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-dark block">
                5. Browser Control
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-brand-dark">Managing Browser Cookies</h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                You can set your browser (Chrome, Firefox, Safari, Edge) to block or delete cookies at any time through your browser settings. Because our site does not depend on tracking cookies, disabling cookies will not affect your ability to browse universities, programs, or student guides.
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
              <Link href="/privacy-policy" className="text-brand-pink font-bold hover:underline">
                View Privacy Policy →
              </Link>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
