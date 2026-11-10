"use client";

import { useEffect } from 'react';
import Link from 'next/link';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error('[ILP Study] Critical application error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans flex items-center justify-center p-4">
        <div className="max-w-lg w-full bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl text-center space-y-5">
          <span className="inline-block px-3 py-1 rounded-full bg-rose-50 text-rose-600 border border-rose-200 text-xs font-extrabold uppercase tracking-wider">
            System Notice
          </span>

          <h1 className="text-2xl sm:text-3xl font-black text-[#0f172a]">
            Unable to Load Page
          </h1>

          <p className="text-sm text-slate-600 leading-relaxed">
            A temporary application error occurred while rendering this page. Please reload or reach out to our admissions helpline on WhatsApp (+880 1895 626831).
          </p>

          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
            <button
              type="button"
              onClick={() => reset()}
              className="px-6 py-3 rounded-full bg-[#e6008d] text-white font-bold text-sm hover:opacity-90 transition-opacity cursor-pointer"
            >
              Reload Page
            </button>
            <Link
              href="/"
              className="px-6 py-3 rounded-full bg-slate-100 text-[#0f172a] font-bold text-sm hover:bg-slate-200 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

