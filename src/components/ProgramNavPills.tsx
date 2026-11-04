"use client";

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  BookOpen,
  Award,
  Building2,
  Languages,
  DollarSign
} from 'lucide-react';

interface PillItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  activeClass: string;
  inactiveClass: string;
  iconColor: string;
}

const PILLS: PillItem[] = [
  {
    id: "bachelor",
    label: "Bachelor’s Degree",
    href: "#bachelor",
    icon: GraduationCap,
    activeClass: "bg-brand-pink text-white border-brand-pink shadow-glow-pink",
    inactiveClass: "bg-white text-slate-700 border-slate-200/90 hover:bg-pink-50/60 hover:border-brand-pink/40 hover:text-brand-pink",
    iconColor: "text-brand-pink",
  },
  {
    id: "master",
    label: "Master’s Degree",
    href: "#master",
    icon: BookOpen,
    activeClass: "bg-brand-green text-white border-brand-green shadow-glow-green",
    inactiveClass: "bg-white text-slate-700 border-slate-200/90 hover:bg-emerald-50/60 hover:border-brand-green/40 hover:text-brand-green",
    iconColor: "text-brand-green",
  },
  {
    id: "phd",
    label: "PhD Research",
    href: "#phd",
    icon: Award,
    activeClass: "bg-brand-purple text-white border-brand-purple shadow-md",
    inactiveClass: "bg-white text-slate-700 border-slate-200/90 hover:bg-purple-50/60 hover:border-brand-purple/40 hover:text-brand-purple",
    iconColor: "text-brand-purple",
  },
  {
    id: "foundation",
    label: "Foundation / Pre-Uni",
    href: "#foundation",
    icon: Building2,
    activeClass: "bg-amber-500 text-white border-amber-500 shadow-md",
    inactiveClass: "bg-white text-slate-700 border-slate-200/90 hover:bg-amber-50/60 hover:border-amber-400/40 hover:text-amber-600",
    iconColor: "text-amber-500",
  },
  {
    id: "language",
    label: "Chinese Language",
    href: "#language",
    icon: Languages,
    activeClass: "bg-sky-600 text-white border-sky-600 shadow-md",
    inactiveClass: "bg-white text-slate-700 border-slate-200/90 hover:bg-sky-50/60 hover:border-sky-400/40 hover:text-sky-600",
    iconColor: "text-sky-500",
  },
  {
    id: "tuition",
    label: "View Tuition Fees",
    href: "/universities#tuition",
    icon: DollarSign,
    activeClass: "bg-brand-dark text-white border-brand-dark shadow-md",
    inactiveClass: "bg-white text-slate-700 border-slate-200/90 hover:bg-emerald-50/60 hover:border-emerald-400/40 hover:text-emerald-700",
    iconColor: "text-emerald-600",
  },
];

export default function ProgramNavPills() {
  const [activeId, setActiveId] = useState<string>("bachelor");

  // Sync with initial URL hash
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      if (hash && PILLS.some(p => p.id === hash)) {
        setActiveId(hash);
      }
    }
  }, []);

  // IntersectionObserver to update active pill on scroll
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sectionIds = ["bachelor", "master", "phd", "foundation", "language"];
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -65% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setActiveId(id);
      const target = document.getElementById(id);
      if (target) {
        const headerOffset = 90;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        window.history.replaceState(null, '', href);
      }
    }
  };

  return (
    <div className="pt-4">
      <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 overflow-x-auto no-scrollbar py-1 -mx-1 px-1">
        {PILLS.map((pill) => {
          const Icon = pill.icon;
          const isSelected = activeId === pill.id;

          return (
            <a
              key={pill.id}
              href={pill.href}
              onClick={(e) => handleClick(e, pill.href, pill.id)}
              className={`flex-shrink-0 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl sm:rounded-full text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 border select-none hover:-translate-y-0.5 ${
                isSelected ? pill.activeClass : pill.inactiveClass
              }`}
              aria-current={isSelected ? 'true' : undefined}
            >
              <Icon
                size={15}
                className={`flex-shrink-0 transition-colors ${
                  isSelected ? 'text-white' : pill.iconColor
                }`}
              />
              <span className="whitespace-nowrap">{pill.label}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
