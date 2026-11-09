'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

/* =========================================================================
   CONFIGURABLE EVENT PARAMETERS (ILP Study China Admission Campaign)
   ========================================================================= */
const EVENT_CONFIG = {
  // Title displayed in the floating teaser badge
  title: 'HARBIN PATHWAY 2026-27',
  badgeSubtitle: 'Up to 100% Scholarship',
  // Campaign end date: Component turns off automatically after this time (UTC)
  expiryTimestamp: new Date('2027-10-31T23:59:59Z').getTime(),
  // Static image path in public folder
  imageSrc: '/images/advert-image/ilp-20262027-admission.jpg',
  imageAlt: 'Harbin Pathway Program — Study in China Up to 100% Scholarship — ILP Study',
  // Action URL when clicking the banner (Prefilled WhatsApp inquiry for counselors)
  ctaUrl: `https://wa.me/8801895626831?text=${encodeURIComponent(
    "Hello ILP Study! I saw the Harbin Pathway Program banner on your website (March Language Program & September Degree Scholarship). I would like to check my eligibility and scholarship opportunities."
  )}`,
  // Unique storage prefix to avoid conflicts with future campaigns
  storagePrefix: 'ilp_harbin_pathway_2026_2027',
  // Delay before showing the full modal on page load (in milliseconds)
  initialDelayMs: 2000,
  // Maximum lifetime impressions for the full automatic popup (per user/browser)
  maxLifetimeImpressions: 4,
  // Minimum time user must have left before the popup can show again (10 minutes in ms)
  returnCooldownMs: 10 * 60 * 1000,
};

export default function EventPromotionModal() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(false);

  // Storage keys
  const sessionSeenKey = `${EVENT_CONFIG.storagePrefix}_session_seen`;
  const badgeDismissedKey = `${EVENT_CONFIG.storagePrefix}_badge_dismissed`;
  const impressionCountKey = `${EVENT_CONFIG.storagePrefix}_impression_count`;
  const lastShownTimeKey = `${EVENT_CONFIG.storagePrefix}_last_shown_time`;

  // 1. Initial Mount & Professional Frequency Cap Logic
  useEffect(() => {
    // 1. Check if campaign has expired
    if (Date.now() > EVENT_CONFIG.expiryTimestamp) {
      return;
    }

    setMounted(true);

    try {
      // 2. Check if user already dismissed teaser badge in this session
      const badgeDismissed = sessionStorage.getItem(badgeDismissedKey);
      if (!badgeDismissed) {
        setShowBadge(true);
      }

      // 3. Check lifetime impression count (Maximum 4 times per visitor)
      const rawCount = localStorage.getItem(impressionCountKey);
      const impressionCount = rawCount ? parseInt(rawCount, 10) : 0;
      if (impressionCount >= EVENT_CONFIG.maxLifetimeImpressions) {
        // Capped at 4 times: Do NOT show full modal automatically ever again.
        // The side teaser badge remains active so the user can still open it manually.
        return;
      }

      // 4. Check if already shown in this active browser session (prevents showing during page navigation)
      const hasSeenThisSession = sessionStorage.getItem(sessionSeenKey);
      if (hasSeenThisSession) {
        // User already saw it during this visit or is navigating between pages
        return;
      }

      // 5. Check returning visitor cooldown (must have left for at least 10 minutes)
      const rawLastShown = localStorage.getItem(lastShownTimeKey);
      if (rawLastShown) {
        const lastShownTime = parseInt(rawLastShown, 10);
        const timeSinceLast = Date.now() - lastShownTime;
        if (timeSinceLast < EVENT_CONFIG.returnCooldownMs) {
          // Returning visitor has been away less than 10 minutes: suppress popup
          return;
        }
      }

      // 6. User qualifies! (First-time visitor OR returning visitor after 10+ minutes, under 4 impressions)
      const timer = setTimeout(() => {
        setIsOpen(true);

        try {
          // Mark as seen for this active session (prevents showing while navigating other pages)
          sessionStorage.setItem(sessionSeenKey, 'true');

          // Increment lifetime impression count in localStorage
          const newCount = impressionCount + 1;
          localStorage.setItem(impressionCountKey, newCount.toString());

          // Record last shown timestamp in localStorage
          localStorage.setItem(lastShownTimeKey, Date.now().toString());
        } catch {
          // Fallback if storage access is restricted
        }
      }, EVENT_CONFIG.initialDelayMs);

      return () => clearTimeout(timer);
    } catch {
      // Fallback if storage is blocked (e.g. strict incognito mode)
      const timer = setTimeout(() => setIsOpen(true), EVENT_CONFIG.initialDelayMs);
      return () => clearTimeout(timer);
    }
  }, [badgeDismissedKey, sessionSeenKey, impressionCountKey, lastShownTimeKey]);

  // 2. Lock background page scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    // Record original overflow styles
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    // Calculate scrollbar width to prevent horizontal page jitter
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    // Completely lock background scrolling
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      // Restore previous styles when modal closes
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    // Ensure the floating badge remains visible so users can re-open it anytime
    setShowBadge(true);
    try {
      sessionStorage.setItem(sessionSeenKey, 'true');
    } catch {}
  }, [sessionSeenKey]);

  const dismissBadge = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setShowBadge(false);
    try {
      sessionStorage.setItem(badgeDismissedKey, 'true');
    } catch {}
  }, [badgeDismissedKey]);

  // Keyboard shortcut: Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      {/* ===================================================================
          1. FULL POP-UP MODAL (First-visit pop-up, pure flyer with WhatsApp CTA)
          =================================================================== */}
      <AnimatePresence>
        {isOpen && (
          <div
            className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5"
            aria-modal="true"
            role="dialog"
            aria-label={`${EVENT_CONFIG.title} Invitation`}
          >
            {/* Dark blurred backdrop - Clicking outside closes modal */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={closeModal}
              className="fixed inset-0 bg-slate-950/85 backdrop-blur-md cursor-pointer"
            />

            {/* Flyer Container - Responsively constrained to fit fully inside screen */}
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 16 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="relative z-10 w-full max-w-[90vw] sm:max-w-[390px] md:max-w-[420px] select-none my-auto flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button on top of the flyer */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  closeModal();
                }}
                className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 z-30 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/80 hover:bg-slate-950 text-white hover:text-brand-pink flex items-center justify-center shadow-2xl transition-all duration-200 border border-white/25 focus:outline-none focus:ring-2 focus:ring-brand-pink cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Clickable Pure Flyer Card with Drop Shadow */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border border-white/20 bg-slate-950 group max-h-[82vh] flex items-center justify-center">
                <a
                  href={EVENT_CONFIG.ctaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative transition-transform active:scale-[0.99] cursor-pointer"
                  title="Click to check your eligibility on WhatsApp"
                >
                  <Image
                    src={EVENT_CONFIG.imageSrc}
                    alt={EVENT_CONFIG.imageAlt}
                    width={1000}
                    height={1000}
                    priority
                    unoptimized={true}
                    sizes="(max-width: 640px) 90vw, 420px"
                    className="w-full max-h-[82vh] h-auto object-contain block select-none transition-transform duration-300 group-hover:scale-[1.01]"
                  />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ===================================================================
          2. FLOATING TEASER BADGE (Bottom-left reminder with top-crop preview)
          =================================================================== */}
      <AnimatePresence>
        {showBadge && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed bottom-3 left-3 sm:bottom-5 sm:left-5 z-40 w-[184px] sm:w-[220px] select-none"
          >
            <div className="relative bg-slate-900 rounded-xl sm:rounded-2xl border border-brand-pink/50 shadow-2xl overflow-hidden group transition-all duration-300 hover:border-brand-pink hover:shadow-glow-pink">
              
              {/* Header Bar with Live Pulsing Dot */}
              <div className="flex items-center justify-between px-2.5 py-1.5 bg-slate-950 border-b border-slate-800 text-[11px] sm:text-xs">
                <div className="flex items-center gap-1.5 font-bold text-slate-100 truncate">
                  <Image
                    src="/images/ilp-study-icon.svg"
                    alt="ILP"
                    width={14}
                    height={14}
                    className="w-3.5 h-3.5 rounded-xs shrink-0"
                  />
                  <span className="relative flex h-1.5 w-1.5 shrink-0">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-green"></span>
                  </span>
                  <span className="tracking-wide text-[10px] sm:text-[11px] font-extrabold truncate">
                    {EVENT_CONFIG.title}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 shrink-0">
                  <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label={`Expand ${EVENT_CONFIG.title} promotion`}
                    title="Expand flyer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={dismissBadge}
                    className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                    aria-label={`Dismiss ${EVENT_CONFIG.title} reminder`}
                    title="Dismiss"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Cropped Flyer Teaser (Preview of upper part) */}
              <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="relative block w-full text-left cursor-pointer overflow-hidden focus:outline-none"
                title="Click to view full admission flyer"
              >
                <div className="relative w-full h-20 sm:h-24 overflow-hidden bg-slate-950">
                  <Image
                    src={EVENT_CONFIG.imageSrc}
                    alt={EVENT_CONFIG.imageAlt}
                    width={480}
                    height={480}
                    unoptimized={true}
                    sizes="220px"
                    className="w-full h-auto object-cover object-top transition-transform duration-300 group-hover:scale-105"
                  />
                  {/* Subtle bottom fade gradient with scholarship pill */}
                  <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent flex items-end px-2 pb-1">
                    <span className="text-[10px] font-extrabold text-brand-green tracking-tight truncate">
                      {EVENT_CONFIG.badgeSubtitle}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
