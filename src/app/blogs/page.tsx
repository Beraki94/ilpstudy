"use client";

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Search,
  FileCheck2,
  CheckCircle2,
  Sparkles,
  Compass,
  GraduationCap,
  BadgeDollarSign,
  Calendar,
  Plane,
  ShieldCheck,
  type LucideIcon
} from 'lucide-react';
import { studentGuides, StudentGuide } from '@/data/studentGuides';

interface StepSection {
  stepTitle: string;
  category: string;
  description: string;
  icon: LucideIcon;
  color: string;
  guideIds: string[];
}

const STEP_SECTIONS: StepSection[] = [
  {
    stepTitle: "Start your plan",
    category: "Start your plan",
    description: "A practical sequence for choosing a course, checking eligibility and preparing a complete application.",
    icon: Compass,
    color: "text-brand-pink bg-brand-pink/10",
    guideIds: [
      "study-in-china-from-bangladesh-roadmap",
      "study-in-china-after-hsc",
      "march-or-september-intake-in-china",
    ],
  },
  {
    stepTitle: "Choose your study route",
    category: "Choose your study route",
    description: "Compare bachelor’s, master’s, MBBS, foundation, and Chinese language routes before selecting a program.",
    icon: GraduationCap,
    color: "text-brand-green bg-brand-green/10",
    guideIds: [
      "foundation-in-china-after-ssc-or-o-levels",
      "english-taught-programs-in-china",
      "chinese-language-course-or-foundation",
      "study-in-china-without-ielts",
      "mbbs-in-china-for-bangladesh-students",
      "masters-in-china-from-bangladesh",
      "how-to-choose-a-city-in-china",
      "universities-in-guangzhou",
    ],
  },
  {
    stepTitle: "Understand funding and costs",
    category: "Understand funding and costs",
    description: "A practical budget method covering university bills, CSC scholarships, and reading offer letters accurately.",
    icon: BadgeDollarSign,
    color: "text-brand-purple bg-brand-purple/10",
    guideIds: [
      "study-in-china-cost-from-bangladesh",
      "csc-scholarship-for-bangladesh-students",
      "full-scholarship-or-tuition-waiver",
    ],
  },
  {
    stepTitle: "Prepare for CSCA",
    category: "Prepare for CSCA",
    description: "Check subjects, test formats, syllabus benchmarks, and routine revision plans before taking the CSCA.",
    icon: Calendar,
    color: "text-brand-dark bg-brand-dark/10",
    guideIds: [
      "csca-for-bangladeshi-students",
      "four-week-csca-study-plan",
    ],
  },
  {
    stepTitle: "Organise documents and travel",
    category: "Organise documents and travel",
    description: "Organise accurate documents, verified scans, JW202/DQ forms, and embassy student visa clearance.",
    icon: Plane,
    color: "text-brand-pink bg-brand-pink/10",
    guideIds: [
      "china-university-application-documents",
      "china-student-visa-from-bangladesh",
    ],
  },
];

export default function BlogsPage() {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterTabs = [
    'All',
    'Start your plan',
    'Choose your study route',
    'Understand funding and costs',
    'Prepare for CSCA',
    'Organise documents and travel',
  ];

  // Map each guide by ID for fast retrieval
  const guidesById = useMemo(() => {
    const map = new Map<string, StudentGuide>();
    studentGuides.forEach((g) => map.set(g.id, g));
    return map;
  }, []);

  // Filtered sections based on search and category filter
  const visibleSections = useMemo(() => {
    return STEP_SECTIONS.map((sec) => {
      // Check if section matches filter
      if (selectedFilter !== 'All' && sec.category !== selectedFilter) {
        return null;
      }

      // Filter section guides by search
      const matchingGuides = sec.guideIds
        .map((id) => guidesById.get(id))
        .filter((g): g is StudentGuide => {
          if (!g) return false;
          if (!searchQuery.trim()) return true;
          const q = searchQuery.toLowerCase();
          return (
            g.title.toLowerCase().includes(q) ||
            g.excerpt.toLowerCase().includes(q) ||
            g.searchDescription.toLowerCase().includes(q)
          );
        });

      if (matchingGuides.length === 0) return null;

      return {
        ...sec,
        guides: matchingGuides,
      };
    }).filter(Boolean) as (StepSection & { guides: StudentGuide[] })[];
  }, [selectedFilter, searchQuery, guidesById]);

  const totalMatchingGuides = visibleSections.reduce((acc, s) => acc + s.guides.length, 0);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Study in China Blog & Student Guides" 
          description="In-depth articles, roadmaps, CSCA test preparation, scholarship analysis, and practical study-in-China advice for Bangladeshi students."
        />

        {/* Intro & Action Bar */}
        <section className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
                ILP STUDY BLOG &amp; KNOWLEDGE BASE
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
                Articles, Updates &amp; Step-by-Step Guidance
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                Explore practical guidance on admissions, scholarship criteria, CSCA benchmarks, living costs, and visa preparation from Bangladesh. New articles and intake updates are published regularly.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto flex-shrink-0">
              <Link
                href="/checklist"
                className="px-6 py-3 rounded-full bg-brand-dark text-white text-xs sm:text-sm font-bold shadow-soft hover:bg-brand-pink transition-all inline-flex items-center justify-center gap-2"
              >
                <FileCheck2 size={16} />
                <span>Download Document Checklist</span>
              </Link>
              <div className="px-4 py-2.5 rounded-full bg-brand-pink/10 text-brand-pink font-extrabold text-xs text-center border border-brand-pink/20">
                {studentGuides.length}+ Articles &amp; Guides
              </div>
            </div>
          </div>
        </section>

        {/* Controls: Search & Stage Filters */}
        <section className="py-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {/* Search Input */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input
                type="text"
                placeholder="Search articles and guides (e.g. CSCA, MBBS, Scholarships, HSC)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink shadow-sm transition-all text-slate-800 placeholder:text-slate-400"
              />
            </div>

            {/* Stage Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setSelectedFilter(tab)}
                  className={`px-3.5 sm:px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedFilter === tab
                      ? 'bg-brand-pink text-white shadow-glow-pink scale-105'
                      : 'bg-white text-slate-600 border border-slate-200/80 hover:border-brand-pink hover:text-brand-pink'
                  }`}
                >
                  {tab === 'All' ? 'All Articles' : tab}
                </button>
              ))}
            </div>

            <div className="text-center text-xs font-semibold text-slate-500 pt-1">
              Showing <strong>{totalMatchingGuides}</strong> articles &amp; guides &middot; Regularly updated knowledge base
            </div>
          </div>
        </section>

        {/* Guides Organized by "YOUR NEXT STEP" Stages */}
        <section className="pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {visibleSections.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 max-w-lg mx-auto space-y-3">
              <BookOpen size={32} className="text-slate-300 mx-auto" />
              <p className="text-base font-bold text-brand-dark">No articles found matching &quot;{searchQuery}&quot;</p>
              <button
                type="button"
                onClick={() => { setSearchQuery(''); setSelectedFilter('All'); }}
                className="text-xs font-bold text-brand-pink hover:underline"
              >
                Clear filters and show all articles
              </button>
            </div>
          ) : (
            visibleSections.map((section, sIdx) => {
              const Icon = section.icon;
              return (
                <div key={sIdx} className="space-y-6">
                  {/* Stage Section Header */}
                  <div className="flex items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                    <div className="space-y-1">
                      <div className="inline-flex items-center gap-2">
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-pink">
                          YOUR NEXT STEP
                        </span>
                        <span className="text-slate-300">·</span>
                        <span className="text-xs font-bold text-slate-500">
                          {section.guides.length} {section.guides.length === 1 ? 'Guide' : 'Guides'}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-brand-dark flex items-center gap-2.5">
                        <span className={`w-8 h-8 rounded-xl ${section.color} inline-flex items-center justify-center flex-shrink-0 text-sm`}>
                          <Icon size={16} />
                        </span>
                        <span>{section.stepTitle}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {/* Cards Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {section.guides.map((guide, idx) => (
                      <motion.article 
                        key={guide.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                        className="bg-white rounded-3xl sm:rounded-[36px] sm:rounded-tl-[70px] overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 group flex flex-col border border-slate-200/80 justify-between"
                      >
                        {/* Image Thumbnail */}
                        <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100 flex-shrink-0">
                          <img 
                            src={guide.image} 
                            alt={guide.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                          
                          <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                            <span className="text-[10px] sm:text-xs font-bold bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-brand-dark shadow-sm">
                              {guide.category}
                            </span>
                          </div>

                          <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between drop-shadow-sm">
                            <span className="text-[11px] opacity-90">{guide.readTime}</span>
                            <span className="text-[10px] opacity-80">{guide.reviewedDate}</span>
                          </div>
                        </div>

                        {/* Content Body */}
                        <div className="p-5 sm:p-7 flex flex-col justify-between flex-1">
                          <div className="space-y-2">
                            <h4 className="font-extrabold text-base sm:text-lg text-brand-dark group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                              <Link href={`/blogs/${guide.id}`}>
                                {guide.title}
                              </Link>
                            </h4>
                            <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                              {guide.searchDescription || guide.excerpt}
                            </p>
                          </div>

                          {/* Footer Action */}
                          <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                            <Link 
                              href={`/blogs/${guide.id}`}
                              className="font-bold text-brand-pink group-hover:text-brand-dark transition-colors inline-flex items-center gap-1.5"
                            >
                              <span>Read guide</span>
                              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <span className="text-[10px] text-slate-400 font-medium">
                              Bangladeshi Students
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </section>

        {/* Review & Verification Footer Banner */}
        <section className="py-12 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
              INDEPENDENT EDUCATION GUIDANCE
            </span>
            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">
              Our blog articles and student guides explain how to compare study routes and prepare an application from Bangladesh. General subject lists are areas to explore, not an intake catalogue. The university’s current notice determines eligibility, documents and programme availability.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/how-we-check"
                className="px-6 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-all inline-flex items-center gap-1.5"
              >
                <span>How We Check University Information</span>
                <ArrowRight size={13} />
              </Link>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-all inline-flex items-center gap-1.5"
              >
                <span>Request Free Counseling</span>
                <ArrowRight size={13} />
              </Link>
            </div>
            <div className="text-[11px] text-slate-400 font-semibold pt-2">
              Website content | 12 October 2026
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
