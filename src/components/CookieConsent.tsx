"use client";

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  Check,
  ShieldCheck,
  SlidersHorizontal,
  Lock,
  ChevronLeft,
} from 'lucide-react';

export interface CookiePreferences {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
  savedAt: number;
  version: number;
}

const COOKIE_NAME = 'ilp_cookie_consent';
const STORAGE_KEY = 'ilp_cookie_consent_v1';
const EXPIRY_DAYS = 365; // Standard 1-year duration
const EXPIRY_MS = EXPIRY_DAYS * 24 * 60 * 60 * 1000;

// Read consent from document.cookie or localStorage
function readStoredConsent(): CookiePreferences | null {
  // 1. Try document.cookie
  if (typeof document !== 'undefined') {
    try {
      const match = document.cookie.match(
        new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]*)`)
      );
      if (match && match[1]) {
        const parsed = JSON.parse(decodeURIComponent(match[1]));
        if (
          parsed &&
          typeof parsed.savedAt === 'number' &&
          Date.now() - parsed.savedAt < EXPIRY_MS
        ) {
          return parsed;
        }
      }
    } catch {
      // Ignore cookie parse error
    }
  }

  // 2. Fallback to localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (
          parsed &&
          typeof parsed.savedAt === 'number' &&
          Date.now() - parsed.savedAt < EXPIRY_MS
        ) {
          return parsed;
        }
      }
    } catch {
      // Ignore localStorage access errors (e.g. strict private mode)
    }
  }

  return null;
}

// Write consent to both document.cookie and localStorage
function writeStoredConsent(prefs: {
  essential?: boolean;
  analytics: boolean;
  marketing: boolean;
}): CookiePreferences {
  const payload: CookiePreferences = {
    essential: true, // Strictly necessary cookies are always active
    analytics: Boolean(prefs.analytics),
    marketing: Boolean(prefs.marketing),
    savedAt: Date.now(),
    version: 1,
  };

  const serialized = JSON.stringify(payload);

  // 1. Write to document.cookie
  if (typeof document !== 'undefined') {
    try {
      const maxAge = EXPIRY_DAYS * 24 * 60 * 60;
      const isSecure =
        typeof window !== 'undefined' && window.location.protocol === 'https:';
      document.cookie = `${COOKIE_NAME}=${encodeURIComponent(
        serialized
      )}; max-age=${maxAge}; path=/; SameSite=Lax${
        isSecure ? '; Secure' : ''
      }`;
    } catch {
      // Ignore cookie write errors
    }
  }

  // 2. Write to localStorage
  if (typeof window !== 'undefined' && window.localStorage) {
    try {
      window.localStorage.setItem(STORAGE_KEY, serialized);
    } catch {
      // Ignore localStorage write errors
    }
  }

  // 3. Dispatch standard custom event for listeners / analytics scripts
  if (typeof window !== 'undefined') {
    try {
      window.dispatchEvent(
        new CustomEvent('ilp_cookie_consent_updated', { detail: payload })
      );

      // 4. Update Google Consent Mode v2 if gtag is available
      const win = window as unknown as {
        gtag?: (command: string, action: string, params: Record<string, string>) => void;
      };
      if (typeof win.gtag === 'function') {
        win.gtag('consent', 'update', {
          analytics_storage: payload.analytics ? 'granted' : 'denied',
          ad_storage: payload.marketing ? 'granted' : 'denied',
          ad_user_data: payload.marketing ? 'granted' : 'denied',
          ad_personalization: payload.marketing ? 'granted' : 'denied',
        });
      }
    } catch {
      // Ignore event dispatch errors
    }
  }

  return payload;
}

export default function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'summary' | 'customize'>('summary');

  // Custom granular state for the preferences view
  const [customAnalytics, setCustomAnalytics] = useState(false);
  const [customMarketing, setCustomMarketing] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Check if user has already made a valid choice that has not expired
    const existing = readStoredConsent();
    if (existing) {
      setCustomAnalytics(existing.analytics);
      setCustomMarketing(existing.marketing);
      // Valid preference exists: DO NOT display banner
      setIsOpen(false);
    } else {
      // No consent recorded or expired: gently reveal banner after delay
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  // Global listener allowing Footer or Privacy pages to re-open settings
  useEffect(() => {
    const handleOpen = () => {
      const current = readStoredConsent();
      if (current) {
        setCustomAnalytics(current.analytics);
        setCustomMarketing(current.marketing);
      }
      setViewMode('customize');
      setIsOpen(true);
    };

    window.addEventListener('open_cookie_preferences', handleOpen);
    return () =>
      window.removeEventListener('open_cookie_preferences', handleOpen);
  }, []);

  const handleAcceptAll = useCallback(() => {
    writeStoredConsent({ analytics: true, marketing: true });
    setCustomAnalytics(true);
    setCustomMarketing(true);
    setIsOpen(false);
  }, []);

  const handleEssentialOnly = useCallback(() => {
    // Declines all non-essential cookies and stores consent so banner won't re-appear
    writeStoredConsent({ analytics: false, marketing: false });
    setCustomAnalytics(false);
    setCustomMarketing(false);
    setIsOpen(false);
  }, []);

  const handleSaveCustom = useCallback(() => {
    writeStoredConsent({
      analytics: customAnalytics,
      marketing: customMarketing,
    });
    setIsOpen(false);
  }, [customAnalytics, customMarketing]);

  // Clicking close (X) is treated as Essential Only to respect privacy and prevent recurring popups
  const handleDismiss = useCallback(() => {
    handleEssentialOnly();
  }, [handleEssentialOnly]);

  if (!mounted) {
    return null;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 25, scale: 0.96 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-3 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-6 sm:w-[440px] max-w-[95vw] z-[95] select-none"
          role="dialog"
          aria-live="polite"
          aria-label="Cookie and Privacy Consent Banner"
        >
          <div className="bg-[#12161f]/95 backdrop-blur-2xl border border-white/15 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.7)] text-white relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand-pink/20 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand-green/20 rounded-full blur-2xl pointer-events-none" />

            {/* Top Bar / Header */}
            <div className="flex items-start justify-between gap-3 mb-3.5 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/15 p-1.5 flex items-center justify-center flex-shrink-0 shadow-inner">
                  <Image
                    src="/images/ilp-study-icon.svg"
                    alt="ILP Study"
                    width={28}
                    height={28}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-2">
                    {viewMode === 'summary'
                      ? 'Privacy & Cookie Choices'
                      : 'Customize Preferences'}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-400 font-medium">
                    {viewMode === 'summary'
                      ? 'GDPR & Privacy Compliant • Valid for 12 months'
                      : 'Control which cookies you permit'}
                  </p>
                </div>
              </div>

              {/* Close Button: Saves essential only so it never re-appears repeatedly */}
              <button
                type="button"
                onClick={handleDismiss}
                className="text-slate-400 hover:text-white p-1.5 rounded-xl hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20 cursor-pointer"
                title="Dismiss (Save Essential Only)"
                aria-label="Close and save essential cookies only"
              >
                <X size={18} />
              </button>
            </div>

            {/* View Mode 1: Summary Banner */}
            {viewMode === 'summary' && (
              <div className="relative z-10">
                <p className="text-xs sm:text-[13px] text-slate-300 font-medium leading-relaxed mb-4">
                  ILP Study uses strictly necessary cookies for security, form
                  submissions, and smooth navigation. We also request optional
                  performance cookies to optimize university research and
                  counseling tools. Read our{' '}
                  <Link
                    href="/privacy-policy"
                    className="text-brand-pink underline hover:text-pink-300 font-semibold"
                  >
                    Privacy Policy
                  </Link>{' '}
                  and{' '}
                  <Link
                    href="/cookies"
                    className="text-brand-green underline hover:text-emerald-300 font-semibold"
                  >
                    Cookie Policy
                  </Link>
                  .
                </p>

                {/* Primary Action Buttons */}
                <div className="grid grid-cols-2 gap-2 sm:gap-2.5 mb-3">
                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="py-2.5 px-2.5 sm:px-4 rounded-xl bg-brand-green hover:bg-[#00a85d] text-white font-bold text-[11px] sm:text-sm shadow-glow-green hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                  >
                    <Check size={15} strokeWidth={2.5} className="flex-shrink-0" />
                    <span>Accept All</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleEssentialOnly}
                    className="py-2.5 px-2.5 sm:px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-[11px] sm:text-sm border border-white/15 transition-all text-center flex items-center justify-center gap-1 sm:gap-1.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    <ShieldCheck size={14} className="text-slate-300 flex-shrink-0" />
                    <span>Essential Only</span>
                  </button>
                </div>

                {/* Customize / Preferences Link */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-white/10 text-[11px] text-slate-400">
                  <button
                    type="button"
                    onClick={() => setViewMode('customize')}
                    className="text-slate-300 hover:text-brand-green font-semibold inline-flex items-center gap-1.5 transition-colors cursor-pointer py-1"
                  >
                    <SlidersHorizontal size={13} />
                    <span>Customize Preferences</span>
                  </button>
                  <span className="text-[10px] text-slate-400 font-medium">
                    Strictly No Ad Telemetry
                  </span>
                </div>
              </div>
            )}

            {/* View Mode 2: Granular Preferences Customizer */}
            {viewMode === 'customize' && (
              <div className="relative z-10 space-y-3">
                {/* Category 1: Strictly Necessary (Locked) */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <Lock size={13} className="text-brand-green" />
                      <span className="text-xs font-bold text-white">
                        Strictly Necessary
                      </span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green bg-brand-green/15 px-2 py-0.5 rounded-full border border-brand-green/30">
                      Always Active
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Required for basic site navigation, form submission security,
                    and remember your cookie preferences. Cannot be disabled.
                  </p>
                </div>

                {/* Category 2: Performance & Analytics (Toggle) */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">
                      Performance &amp; Analytics
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={customAnalytics}
                      onClick={() => setCustomAnalytics((prev) => !prev)}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/50 ${
                        customAnalytics ? 'bg-brand-green' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                          customAnalytics ? 'translate-x-4' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Helps us measure site performance and popular university
                    searches to optimize page load times.
                  </p>
                </div>

                {/* Category 3: Functional & Media (Toggle) */}
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-white">
                      Functional &amp; Media
                    </span>
                    <button
                      type="button"
                      role="switch"
                      aria-checked={customMarketing}
                      onClick={() => setCustomMarketing((prev) => !prev)}
                      className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-pink/50 ${
                        customMarketing ? 'bg-brand-pink' : 'bg-slate-700'
                      }`}
                    >
                      <span
                        className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform ${
                          customMarketing ? 'translate-x-4' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-normal">
                    Enables interactive calculator state, student guide embeds,
                    and direct WhatsApp counseling channels.
                  </p>
                </div>

                {/* Customizer Action Buttons */}
                <div className="grid grid-cols-2 gap-2.5 pt-1">
                  <button
                    type="button"
                    onClick={handleSaveCustom}
                    className="py-2.5 px-4 rounded-xl bg-brand-green hover:bg-[#00a85d] text-white font-bold text-xs sm:text-sm shadow-glow-green hover:shadow-lg transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-green/50"
                  >
                    Save Preferences
                  </button>

                  <button
                    type="button"
                    onClick={handleAcceptAll}
                    className="py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-semibold text-xs sm:text-sm border border-white/15 transition-all text-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/20"
                  >
                    Accept All
                  </button>
                </div>

                {/* Back to summary view */}
                <div className="pt-1 text-center">
                  <button
                    type="button"
                    onClick={() => setViewMode('summary')}
                    className="text-[11px] text-slate-400 hover:text-white inline-flex items-center gap-1 font-medium cursor-pointer transition-colors"
                  >
                    <ChevronLeft size={13} />
                    <span>Back to summary</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
