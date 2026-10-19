"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check } from 'lucide-react';

interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt: number;
}

const COOKIE_STORAGE_KEY = 'ilp_cookie_consent_v1';

export default function CookieConsent() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (!stored) {
        // Small delay so it smoothly animates in after initial page load
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      // Fallback if localStorage is disabled in strict privacy mode
    }

    // Listen for custom trigger from Footer or other links to re-open
    const handleOpenModal = () => {
      setIsOpen(true);
    };

    window.addEventListener('open_cookie_preferences', handleOpenModal);
    return () => window.removeEventListener('open_cookie_preferences', handleOpenModal);
  }, []);

  const saveConsent = (prefs: { essential: boolean; analytics: boolean; marketing: boolean }) => {
    const payload: CookiePreferences = {
      ...prefs,
      savedAt: Date.now(),
    };
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(payload));
      window.dispatchEvent(new CustomEvent('ilp_cookie_consent_updated', { detail: payload }));
    } catch {
      // Ignored if storage unavailable
    }
    setIsOpen(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleDecline = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.98 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-md z-[9999]"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie Consent Banner"
        >
          <div className="bg-[#1c1917]/95 backdrop-blur-2xl border border-white/15 rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-white relative overflow-hidden">
            {/* Ambient Brand Glows */}
            <div className="absolute -top-12 -right-12 w-36 h-36 bg-brand-pink/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-3 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-brand-pink/20 to-brand-purple/20 border border-white/10 flex items-center justify-center text-brand-pink flex-shrink-0">
                  <Cookie size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-base tracking-tight text-white">
                    Cookie Notice
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">We respect your privacy and data</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Dismiss banner"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed mb-5 relative z-10">
              ILP Study uses cookies to provide smooth navigation, analyze site performance, and improve your study abroad consulting experience. Read our{' '}
              <Link href="/privacy-policy" className="text-brand-pink underline hover:text-brand-purple transition-colors font-semibold">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/cookies" className="text-brand-green underline hover:text-emerald-300 transition-colors font-semibold">
                Cookie Policy
              </Link>
              .
            </p>

            {/* Two Clean Action Buttons */}
            <div className="flex items-center gap-3 relative z-10">
              <button
                onClick={handleAcceptAll}
                className="flex-1 py-3 px-4 rounded-xl bg-brand-green hover:bg-[#00a85d] text-white font-bold text-xs sm:text-sm shadow-glow-green hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1.5"
              >
                <Check size={16} strokeWidth={2.5} />
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs sm:text-sm border border-white/10 transition-colors text-center"
              >
                Decline
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
