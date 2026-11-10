"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  AlertTriangle,
  RefreshCw,
  ArrowLeft,
  MessageSquare
} from 'lucide-react';

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('[ILP Study] Application runtime error:', error);
  }, [error]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc] pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl w-full bg-white rounded-3xl sm:rounded-[36px] p-6 sm:p-12 border border-slate-200/90 shadow-card text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200/80 text-rose-600 flex items-center justify-center mx-auto">
            <AlertTriangle size={32} />
          </div>

          <div className="space-y-2">
            <span className="text-xs font-extrabold uppercase tracking-wider text-rose-600 block">
              Temporary Issue
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight">
              Something Went Wrong
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed max-w-lg mx-auto">
              An unexpected error interrupted loading this page. Please try refreshing the view, return to the homepage, or contact our counselors directly on WhatsApp.
            </p>
          </div>

          {error.digest && (
            <div className="text-[11px] font-mono text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg inline-block border border-slate-200/70">
              Reference Code: {error.digest}
            </div>
          )}

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-dark hover:bg-brand-pink text-white font-bold text-sm transition-all inline-flex items-center justify-center gap-2 cursor-pointer shadow-soft"
            >
              <RefreshCw size={16} />
              <span>Try Again</span>
            </button>

            <Link
              href="/"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-brand-dark font-bold text-sm transition-all inline-flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              <span>Go to Homepage</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex justify-center">
            <a
              href="https://wa.me/8801895626831"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs sm:text-sm font-bold text-brand-green hover:underline inline-flex items-center gap-1.5"
            >
              <MessageSquare size={15} />
              <span>Need urgent help? Chat with ILP Study on WhatsApp</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

