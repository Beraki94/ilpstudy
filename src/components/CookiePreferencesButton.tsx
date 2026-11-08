"use client";

import { SlidersHorizontal } from 'lucide-react';

export default function CookiePreferencesButton({
  className = '',
  label = 'Manage Cookie Preferences',
}: {
  className?: string;
  label?: string;
}) {
  const handleClick = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open_cookie_preferences'));
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-brand-dark hover:bg-brand-green text-white text-xs sm:text-sm font-bold transition-all duration-200 shadow-sm cursor-pointer ${className}`}
    >
      <SlidersHorizontal size={15} />
      <span>{label}</span>
    </button>
  );
}

