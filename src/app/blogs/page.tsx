"use client";

import { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import Pagination from '@/components/Pagination';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BookOpen,
  Search,
  FileCheck2,
  Compass,
  GraduationCap,
  BadgeDollarSign,
  Calendar,
  Plane,
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
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const articlesTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // For rich blog cards: 6 per page on mobile, 9 per page on desktop/tablet (3 rows of 3)
  const itemsPerPage = isMobile ? 6 : 9;

  // Reset to page 1 on filter, search or screen size change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter, searchQuery, isMobile]);

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

  // Ordered list of guides respecting pedagogical stage sequence
  const allOrderedGuides = useMemo(() => {
    const list: StudentGuide[] = [];
    const seen = new Set<string>();
    STEP_SECTIONS.forEach((sec) => {
      sec.guideIds.forEach((id) => {
        const g = guidesById.get(id);
        if (g && !seen.has(g.id)) {
          seen.add(g.id);
          list.push(g);
        }
      });
    });
    return list;
  }, [guidesById]);

  // Filtered guides based on search and category filter
  const filteredGuides = useMemo(() => {
    return allOrderedGuides.filter((g) => {
      if (selectedFilter !== 'All') {
        const sec = STEP_SECTIONS.find((s) => s.category === selectedFilter);
        if (sec && !sec.guideIds.includes(g.id)) {
          return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          g.title.toLowerCase().includes(q) ||
          g.excerpt.toLowerCase().includes(q) ||
          g.searchDescription.toLowerCase().includes(q) ||
          g.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allOrderedGuides, selectedFilter, searchQuery]);

  const totalPages = Math.ceil(filteredGuides.length / itemsPerPage) || 1;

  const paginatedGuides = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredGuides.slice(start, start + itemsPerPage);
  }, [filteredGuides, currentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (articlesTopRef.current) {
      articlesTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const activeSectionInfo = useMemo(() => {
    if (selectedFilter === 'All') return null;
    return STEP_SECTIONS.find((sec) => sec.category === selectedFilter) || null;
  }, [selectedFilter]);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc]">
        
        {/* Page Header */}
        <PageHeader 
          title="Study in China Blog & Student Guides" 
          description="In-depth articles, roadmaps, CSCA test preparation, scholarship analysis, and practical study-in-China advice for Bangladeshi students."
        />

        {/* Intro & Action Bar */}
        <section className="pt-8 sm:pt-12 pb-4 sm:pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/90 shadow-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
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
                className="px-6 py-3 rounded-full bg-brand-dark text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-glow-pink hover:bg-brand-pink transition-all inline-flex items-center justify-center gap-2"
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
        <section className="py-8 sm:py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              {filteredGuides.length > 0 ? (
                <>
                  Showing <strong>{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredGuides.length)}</strong> of <strong>{filteredGuides.length}</strong> articles &amp; guides &middot; Regularly updated knowledge base
                </>
              ) : (
                <>Showing <strong>0</strong> articles &amp; guides</>
              )}
            </div>
          </div>
        </section>

        {/* Guides Organized with Responsive Pagination */}
        <section className="pt-2 pb-20 sm:pb-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative">
          <div ref={articlesTopRef} className="absolute -top-28 left-0 pointer-events-none" />

          {filteredGuides.length === 0 ? (
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
            <div className="space-y-8">
              {/* Stage / Section Header */}
              {activeSectionInfo ? (
                <div className="flex items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-pink">
                        YOUR NEXT STEP
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs font-bold text-slate-500">
                        {filteredGuides.length} {filteredGuides.length === 1 ? 'Guide' : 'Guides'}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-dark flex items-center gap-2.5">
                      <span className={`w-8 h-8 rounded-xl ${activeSectionInfo.color} inline-flex items-center justify-center flex-shrink-0 text-sm`}>
                        <activeSectionInfo.icon size={16} />
                      </span>
                      <span>{activeSectionInfo.stepTitle}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl">
                      {activeSectionInfo.description}
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-start sm:items-center justify-between gap-4 border-b border-slate-200/80 pb-4">
                  <div className="space-y-1">
                    <div className="inline-flex items-center gap-2">
                      <span className="text-[11px] font-extrabold uppercase tracking-wider text-brand-pink">
                        {searchQuery ? 'SEARCH RESULTS' : 'ALL STUDENT GUIDES'}
                      </span>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs font-bold text-slate-500">
                        {filteredGuides.length} Guides Available
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-brand-dark flex items-center gap-2.5">
                      <span className="w-8 h-8 rounded-xl text-brand-pink bg-brand-pink/10 inline-flex items-center justify-center flex-shrink-0 text-sm">
                        <BookOpen size={16} />
                      </span>
                      <span>{searchQuery ? `Articles matching "${searchQuery}"` : 'Step-by-Step Study in China Guides'}</span>
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium max-w-2xl">
                      Practical roadmaps for Bangladeshi students covering university admissions, CSC scholarships, CSCA benchmarks, and visa travel.
                    </p>
                  </div>
                </div>
              )}

              {/* Cards Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {paginatedGuides.map((guide, idx) => (
                  <motion.article 
                    key={guide.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="bg-white rounded-3xl sm:rounded-[36px] overflow-hidden shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-brand-pink/50 transition-all duration-300 group flex flex-col border border-slate-200/90 justify-between"
                  >
                    {/* Image Thumbnail */}
                    <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden bg-slate-100 flex-shrink-0">
                      <Image 
                        src={guide.image} 
                        alt={guide.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent"></div>
                      
                      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                        <span className="text-[10px] sm:text-xs font-bold bg-white/95 backdrop-blur-md px-3.5 py-1 rounded-full text-brand-dark shadow-sm">
                          {guide.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-semibold flex items-center justify-between drop-shadow-sm">
                        <span className="text-[11px] opacity-90">{guide.readTime}</span>
                        <span className="text-[10px] opacity-80">{guide.reviewedDate}</span>
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                      <div className="space-y-2.5">
                        <h4 className="font-extrabold text-lg sm:text-xl text-brand-dark group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                          <Link href={`/blogs/${guide.id}`}>
                            {guide.title}
                          </Link>
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-normal">
                          {guide.searchDescription || guide.excerpt}
                        </p>
                      </div>

                      {/* Footer Action */}
                      <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm">
                        <Link 
                          href={`/blogs/${guide.id}`}
                          className="font-bold text-brand-pink group-hover:text-brand-dark transition-colors inline-flex items-center gap-1.5"
                        >
                          <span>Read guide</span>
                          <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
                        </Link>

                        <span className="text-[11px] text-slate-400 font-medium">
                          Bangladeshi Students
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>

              {/* Pagination Controls */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                totalItems={filteredGuides.length}
                itemsPerPage={itemsPerPage}
                itemName="articles"
              />
            </div>
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
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
