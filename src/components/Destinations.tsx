"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  Building2, 
  ChevronLeft, 
  ChevronRight, 
  Cpu,
  Stethoscope,
  TrendingUp,
  Languages,
  GraduationCap,
  Award,
  Calendar,
  X,
  MessageSquare,
  CheckCircle2,
  DollarSign,
  MapPin,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';

type UniversityCategory = 'all' | 'engineering' | 'medical' | 'business' | 'language';

interface UniversityItem {
  id: string;
  name: string;
  city: string;
  province: string;
  subtitle: string;
  tagline: string;
  highlights: string;
  badgeColor: string;
  image: string;
  category: UniversityCategory;
  degreeBadge: string;
  scholarshipBadge: string;
  intakeBadge: string;
  tuitionRange: string;
  popularCourses: string[];
}

export default function Destinations() {
  const [selectedCategory, setSelectedCategory] = useState<UniversityCategory>('all');
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [selectedUniModal, setSelectedUniModal] = useState<UniversityItem | null>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  // Touch swipe support for mobile
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedUniModal(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Filter Categories
  const categories = [
    { id: 'all', label: 'All Top Choices (20)', icon: Sparkles },
    { id: 'engineering', label: 'Engineering & Aviation (9)', icon: Cpu },
    { id: 'medical', label: 'Medicine & MBBS (5)', icon: Stethoscope },
    { id: 'business', label: 'Business & Trade (3)', icon: TrendingUp },
    { id: 'language', label: 'Language & Arts (3)', icon: Languages },
  ];

  // The 20 individual top choice universities with fixed height & rich student options
  const universities: UniversityItem[] = [
    {
      id: "bu-01",
      name: "Beihang University",
      city: "Beijing",
      province: "National Capital",
      subtitle: "Beijing · Project 985 & 211 Key University",
      tagline: "AEROSPACE, ROBOTICS & COMPUTER SCIENCE",
      highlights: "Premier national engineering university offering English-taught degrees, top research labs, and CSC scholarship eligibility.",
      badgeColor: "bg-brand-pink text-white",
      image: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Beijing Govt Awards",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 25,000–35,000 RMB/yr",
      popularCourses: ["Aeronautical Engineering", "Computer Science & AI", "Mechanical Engineering", "Automation"]
    },
    {
      id: "nuaa-02",
      name: "Nanjing Univ of Aeronautics & Astronautics",
      city: "Nanjing",
      province: "East China",
      subtitle: "Nanjing, Jiangsu · Double First-Class Key",
      tagline: "LEADING AERONAUTICS & MECHANICAL POWERHOUSE",
      highlights: "Specialized aircraft design, mechanical engineering, and computer software with high scholarship allocations.",
      badgeColor: "bg-brand-green text-white",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "CSC & Jiangsu Jasmine",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 20,000–26,000 RMB/yr",
      popularCourses: ["Aircraft Design", "Software Engineering", "International Trade", "Mechanical Engineering"]
    },
    {
      id: "wu-03",
      name: "Wuhan University",
      city: "Wuhan",
      province: "Central China",
      subtitle: "Wuhan, Hubei · Project 985 World Top 150",
      tagline: "CLINICAL MEDICINE (MBBS), LAW & SCIENCES",
      highlights: "Scenic lakeside campus offering recognized English-medium MBBS, international law, and full scholarship routes.",
      badgeColor: "bg-brand-purple text-white",
      image: "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=800&q=80",
      category: "medical",
      degreeBadge: "MBBS · Master's · PhD",
      scholarshipBadge: "CSC & Hubei Provincial",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 32,000–40,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "International Law", "Software Engineering", "Environmental Science"]
    },
    {
      id: "seu-04",
      name: "Southeast University",
      city: "Nanjing",
      province: "East China",
      subtitle: "Nanjing, Jiangsu · Project 985 National Key",
      tagline: "TOP CIVIL ENGINEERING, ARCHITECTURE & AI",
      highlights: "One of China's most historic engineering universities, renowned globally for architecture, civil, and tuition waivers.",
      badgeColor: "bg-brand-dark text-white",
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Tuition Waivers",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 22,000–30,000 RMB/yr",
      popularCourses: ["Civil Engineering", "Architecture", "Biomedical Engineering", "Artificial Intelligence"]
    },
    {
      id: "cpu-05",
      name: "China Pharmaceutical University",
      city: "Nanjing",
      province: "East China",
      subtitle: "Nanjing, Jiangsu · National Specialist Key",
      tagline: "PREMIER PHARMACY & BIOMEDICAL INSTITUTION",
      highlights: "China’s top-ranked pharmaceutical academy, offering cutting-edge laboratories, pharmacology, and high career placement.",
      badgeColor: "bg-brand-green text-white",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      category: "medical",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Campus Excellence",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 20,000–28,000 RMB/yr",
      popularCourses: ["Pharmacy", "Clinical Pharmacy", "Pharmacology", "Biopharmaceutical Science"]
    },
    {
      id: "sdu-06",
      name: "Shandong University",
      city: "Jinan & Qingdao",
      province: "East Coast",
      subtitle: "Jinan, Shandong · Project 985 Comprehensive",
      tagline: "CLINICAL MEDICINE, MATERIALS & ECONOMICS",
      highlights: "Major comprehensive national university with top teaching hospitals, affordable living, and high scholarship ratios.",
      badgeColor: "bg-brand-pink text-white",
      image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=800&q=80",
      category: "medical",
      degreeBadge: "MBBS · Bachelor's · Master's",
      scholarshipBadge: "CSC & Shandong Provincial",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 24,000–32,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Materials Science", "International Economics", "Chinese Language"]
    },
    {
      id: "blcu-07",
      name: "Beijing Language & Culture University",
      city: "Beijing",
      province: "National Capital",
      subtitle: "Beijing · National Language Specialist",
      tagline: "PREMIER CHINESE LANGUAGE & HSK PATHWAYS",
      highlights: "Global center for international Chinese language education, cross-cultural studies, and intensive degree preparation.",
      badgeColor: "bg-brand-purple text-white",
      image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80",
      category: "language",
      degreeBadge: "Language Course · Bachelor's",
      scholarshipBadge: "CIS & Beijing City Grants",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–26,000 RMB/yr",
      popularCourses: ["Intensive Chinese Language", "HSK Preparation", "International Education", "Business Chinese"]
    },
    {
      id: "zust-08",
      name: "Zhejiang Univ of Science & Technology",
      city: "Hangzhou",
      province: "Southeast Tech",
      subtitle: "Hangzhou, Zhejiang · Applied Science Leader",
      tagline: "CIVIL ENGINEERING, E-COMMERCE & TECH",
      highlights: "Located in the digital hub of Hangzhou, offering German-model applied engineering, trade, and provincial awards.",
      badgeColor: "bg-brand-green text-white",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Zhejiang Provincial Grants",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–22,000 RMB/yr",
      popularCourses: ["Civil Engineering", "International Economics & Trade", "Computer Science", "Communication Engineering"]
    },
    {
      id: "hust-09",
      name: "Huazhong Univ of Science & Technology",
      city: "Wuhan",
      province: "Central China",
      subtitle: "Wuhan, Hubei · Project 985 National Top 10",
      tagline: "MECHANICAL, COMPUTER & BIOMEDICAL POWERHOUSE",
      highlights: "World-class engineering and medical campus with leading telecommunications labs and high international student support.",
      badgeColor: "bg-brand-dark text-white",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "MBBS · Bachelor's · Master's",
      scholarshipBadge: "CSC & Hubei Government",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 28,000–38,000 RMB/yr",
      popularCourses: ["Mechanical Engineering", "Computer Science", "Telecommunications", "Clinical Medicine"]
    },
    {
      id: "ecust-10",
      name: "East China Univ of Science & Technology",
      city: "Shanghai",
      province: "Global Metropolis",
      subtitle: "Shanghai · Project 211 National Key",
      tagline: "CHEMICAL ENGINEERING, BIOTECH & COMMERCE",
      highlights: "Direct industry connections in central Shanghai, corporate internships, and Shanghai Government Scholarship eligibility.",
      badgeColor: "bg-brand-pink text-white",
      image: "https://images.unsplash.com/photo-1538428494232-9c0d8a3ab403?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "Shanghai Govt (SGS) & CSC",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 22,000–30,000 RMB/yr",
      popularCourses: ["Chemical Engineering", "Biotechnology", "Business Administration", "Applied Chemistry"]
    },
    {
      id: "dmu-11",
      name: "Dalian Medical University",
      city: "Dalian",
      province: "Northeast Coastal",
      subtitle: "Dalian, Liaoning · MOE-Approved English MBBS",
      tagline: "MOE-APPROVED ENGLISH-MEDIUM MBBS & SURGERY",
      highlights: "Coastal medical campus with direct hospital rotations, recognized worldwide for quality medical education and low fees.",
      badgeColor: "bg-brand-green text-white",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      category: "medical",
      degreeBadge: "MBBS Specialist · Master's",
      scholarshipBadge: "Liaoning Provincial & Merit",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 35,000–42,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Stomatology (Dentistry)", "Nursing", "Internal Medicine"]
    },
    {
      id: "cup-12",
      name: "China University of Petroleum",
      city: "Qingdao & Beijing",
      province: "East Coast",
      subtitle: "Qingdao, Shandong · National 211 Key",
      tagline: "PETROLEUM, ENERGY & CHEMICAL ENGINEERING",
      highlights: "Seaside campus offering specialized energy engineering, national laboratories, and affordable campus living costs.",
      badgeColor: "bg-brand-dark text-white",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Energy Enterprise",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–25,000 RMB/yr",
      popularCourses: ["Petroleum Engineering", "Oil & Gas Storage", "Geology", "Chemical Engineering"]
    },
    {
      id: "wmu-13",
      name: "Wenzhou Medical University",
      city: "Wenzhou",
      province: "Southeast Tech",
      subtitle: "Wenzhou, Zhejiang · Provincial Medical Key",
      tagline: "CLINICAL MEDICINE, OPHTHALMOLOGY & NURSING",
      highlights: "Internationally accredited clinical MBBS program with state-level eye institutes and modern teaching hospital grounds.",
      badgeColor: "bg-brand-purple text-white",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
      category: "medical",
      degreeBadge: "MBBS · Master's · PhD",
      scholarshipBadge: "Zhejiang Provincial & Dean",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 30,000–36,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Optometry", "Pharmacy", "Pediatrics"]
    },
    {
      id: "ouc-14",
      name: "Ocean University of China",
      city: "Qingdao",
      province: "East Coast",
      subtitle: "Qingdao, Shandong · Project 985 & 211 Key",
      tagline: "MARINE SCIENCES, ENVIRONMENTAL TECH & TRADE",
      highlights: "Scenic European-heritage campus in coastal Qingdao, leading marine sciences, and direct CSC scholarship nomination quotas.",
      badgeColor: "bg-brand-pink text-white",
      image: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?auto=format&fit=crop&w=800&q=80",
      category: "language",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Qingdao Municipal",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 18,000–24,000 RMB/yr",
      popularCourses: ["Marine Science", "Environmental Engineering", "International Economics", "Chinese Culture"]
    },
    {
      id: "bfsu-15",
      name: "Beijing Foreign Studies University",
      city: "Beijing",
      province: "National Capital",
      subtitle: "Beijing · Diplomatic & Business Key",
      tagline: "INTERNATIONAL BUSINESS, FINANCE & DIPLOMACY",
      highlights: "China’s premier international institution for multilingual trade, global diplomacy, and English-taught finance degrees.",
      badgeColor: "bg-brand-green text-white",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80",
      category: "business",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "CSC & Silk Road Awards",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 26,000–34,000 RMB/yr",
      popularCourses: ["International Business", "Finance", "Diplomacy", "International Relations"]
    },
    {
      id: "wut-16",
      name: "Wuhan University of Technology",
      city: "Wuhan",
      province: "Central China",
      subtitle: "Wuhan, Hubei · National 211 Key University",
      tagline: "MATERIALS SCIENCE, NAVAL TECH & LOGISTICS",
      highlights: "Prominent research institution for automotive engineering, naval transport, computer science, and provincial grants.",
      badgeColor: "bg-brand-purple text-white",
      image: "https://images.unsplash.com/photo-1568792923760-d70635a89fac?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Campus Outstanding",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 20,000–26,000 RMB/yr",
      popularCourses: ["Materials Science", "Automotive Engineering", "Naval Architecture", "Computer Science"]
    },
    {
      id: "zjgsu-17",
      name: "Zhejiang Gongshang University",
      city: "Hangzhou",
      province: "Southeast Tech",
      subtitle: "Hangzhou, Zhejiang · Key Business & Economics",
      tagline: "E-COMMERCE, INTERNATIONAL TRADE & ACCOUNTING",
      highlights: "Direct proximity to Hangzhou’s tech giants, high provincial scholarship coverage, and supportive international offices.",
      badgeColor: "bg-brand-dark text-white",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      category: "business",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Zhejiang Provincial & Campus",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–24,000 RMB/yr",
      popularCourses: ["E-Commerce", "Finance", "Accounting", "International Trade"]
    },
    {
      id: "heu-18",
      name: "Harbin Engineering University",
      city: "Harbin",
      province: "Northeast Region",
      subtitle: "Harbin, Heilongjiang · Double First-Class Key",
      tagline: "SHIPBUILDING, MARINE & AUTOMATION SCIENCES",
      highlights: "Advanced engineering powerhouse, generous government scholarship stipends, and cutting-edge robotics facilities.",
      badgeColor: "bg-brand-pink text-white",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC Full Coverage & Provincial",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 17,000–23,000 RMB/yr",
      popularCourses: ["Marine Engineering", "Nuclear Technology", "Automation", "Robotics Engineering"]
    },
    {
      id: "sau-19",
      name: "Shenyang Aerospace University",
      city: "Shenyang",
      province: "Northeast Region",
      subtitle: "Shenyang, Liaoning · Specialist Aviation Key",
      tagline: "AIRCRAFT MAINTENANCE & AERONAUTICAL TECH",
      highlights: "Certified aircraft hangars, English-medium aviation engineering, and hands-on maintenance training for international students.",
      badgeColor: "bg-brand-green text-white",
      image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Liaoning Provincial & Aviation",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–22,000 RMB/yr",
      popularCourses: ["Aeronautical Engineering", "Aircraft Maintenance", "Telecommunications", "Mechanical Design"]
    },
    {
      id: "xjtlu-20",
      name: "Xi'an Jiaotong-Liverpool University",
      city: "Suzhou",
      province: "East China",
      subtitle: "Suzhou, Jiangsu · Sino-British International",
      tagline: "DUAL UK & CHINA DEGREES IN COMPUTING & COMMERCE",
      highlights: "100% English-taught international campus in Suzhou offering dual degrees from University of Liverpool and XJTLU.",
      badgeColor: "bg-brand-purple text-white",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      category: "business",
      degreeBadge: "Dual UK/China Bachelor's · Master's",
      scholarshipBadge: "Entry Merit (Up to 50% waiver)",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 88,000 RMB/yr (Dual Award)",
      popularCourses: ["Computer Science", "Financial Mathematics", "Architecture", "Business Analytics"]
    },
  ];

  // Filter universities based on selection
  const filteredList = universities.filter(
    (uni) => selectedCategory === 'all' || uni.category === selectedCategory
  );

  // Responsive cards per slide view (3 cards on desktop)
  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredList.length / cardsPerPage);

  // Smooth scroll back to top of cards on mobile so users don't start at the bottom of the next card
  const scrollToCardsTop = () => {
    if (typeof window !== 'undefined' && window.innerWidth < 768 && cardsContainerRef.current) {
      cardsContainerRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(totalPages - 1, prev + 1));
  };

  const handlePrevWithScroll = () => {
    if (currentPage > 0) {
      handlePrev();
      scrollToCardsTop();
    }
  };

  const handleNextWithScroll = () => {
    if (currentPage < totalPages - 1) {
      handleNext();
      scrollToCardsTop();
    }
  };

  const handlePageSelectWithScroll = (pageIndex: number) => {
    setCurrentPage(pageIndex);
    scrollToCardsTop();
  };

  // Reset page index when category changes
  const handleCategoryChangeWithScroll = (catId: UniversityCategory) => {
    setSelectedCategory(catId);
    setCurrentPage(0);
    scrollToCardsTop();
  };

  // Touch Swipe Handlers for mobile
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentPage < totalPages - 1) {
      handleNextWithScroll();
    } else if (isRightSwipe && currentPage > 0) {
      handlePrevWithScroll();
    }
  };

  const startIndex = currentPage * cardsPerPage;
  const currentCards = filteredList.slice(startIndex, startIndex + cardsPerPage);
  const displayStart = filteredList.length > 0 ? startIndex + 1 : 0;
  const displayEnd = Math.min(startIndex + cardsPerPage, filteredList.length);

  return (
    <section className="py-14 sm:py-24 bg-white relative" id="destinations">
      <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider">
              <Sparkles size={13} />
              <span>Top Choice Universities in China</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark mb-3 sm:mb-4 tracking-tight"
            >
              Top Choice Chinese Universities
            </motion.h2>
            <p className="text-slate-600 text-sm sm:text-lg font-normal">
              Browse 20 leading high-intake institutions across Beijing, Jiangsu, Hubei, Shandong, Shanghai, and Zhejiang.
            </p>
          </div>

          {/* Slider Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                disabled={currentPage === 0}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-700 hover:text-brand-pink hover:border-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous universities"
                title="Previous university page"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                disabled={currentPage >= totalPages - 1}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-700 hover:text-brand-pink hover:border-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next universities"
                title="Next university page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Subject Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-100">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChangeWithScroll(cat.id as UniversityCategory)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-brand-dark text-white shadow-soft scale-105'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                <Icon size={14} className={isSelected ? 'text-brand-green' : 'text-slate-400'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* CONTROLLED 3-CARD SLIDER: FIXED CARD ERGONOMICS WITH GOOD OPTIONS */}
        <div 
          ref={cardsContainerRef}
          className="overflow-hidden scroll-mt-24"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch"
            key={`${selectedCategory}-${currentPage}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {currentCards.map((dest) => (
              <SpaciousUniversityCard 
                key={dest.id} 
                dest={dest} 
                onOpenDetails={(uni) => setSelectedUniModal(uni)}
              />
            ))}
          </motion.div>

          {/* Slider Progress Bar, Pagination Dots & Bottom Mobile Controls */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Counter & Page indicator */}
            <div className="text-xs text-slate-500 font-medium order-2 sm:order-1 text-center sm:text-left">
              Showing <strong className="text-brand-dark">{displayStart}–{displayEnd}</strong> of <strong className="text-brand-dark">{filteredList.length}</strong> top choice universities
              <span className="text-slate-400 block sm:inline sm:ml-1">
                (Page {currentPage + 1} of {totalPages})
              </span>
            </div>
            
            {/* Center: Pagination Dots */}
            <div className="flex items-center gap-1.5 order-1 sm:order-2">
              {Array.from({ length: totalPages }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handlePageSelectWithScroll(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === idx 
                      ? 'w-7 bg-brand-pink shadow-xs' 
                      : 'w-2 bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Go to slide page ${idx + 1}`}
                  title={`Page ${idx + 1}`}
                />
              ))}
            </div>

            {/* Right: Bottom Next/Prev Buttons (Directly accessible at the bottom on mobile) */}
            <div className="flex items-center gap-2 order-3 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={handlePrevWithScroll}
                disabled={currentPage === 0}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-pink hover:border-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous universities"
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <button
                onClick={handleNextWithScroll}
                disabled={currentPage >= totalPages - 1}
                className="flex-1 sm:flex-initial px-5 py-2.5 rounded-full bg-brand-dark text-white shadow-soft flex items-center justify-center gap-1.5 text-xs font-bold hover:bg-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next universities"
              >
                <span>Next Universities</span>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Action Link to Full Directory */}
        <div className="mt-12 sm:mt-16 text-center">
          <Link
            href="/universities"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-brand-dark text-white font-bold text-xs sm:text-sm hover:bg-brand-pink transition-all shadow-soft"
          >
            <span>Explore Complete 60+ China University Directory</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* INTERACTIVE UNIVERSITY QUICK VIEW MODAL (When clicking any card or 'View Courses & Fees') */}
      <AnimatePresence>
        {selectedUniModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setSelectedUniModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl sm:rounded-[36px] max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 relative my-8"
            >
              {/* Modal Banner Photo */}
              <div className="relative h-56 sm:h-64 overflow-hidden bg-slate-900">
                <img 
                  src={selectedUniModal.image} 
                  alt={selectedUniModal.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />
                
                {/* Close Button */}
                <button
                  onClick={() => setSelectedUniModal(null)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 text-white hover:bg-black/70 flex items-center justify-center transition-colors z-20"
                  aria-label="Close dialog"
                >
                  <X size={18} />
                </button>

                {/* Location Badges */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${selectedUniModal.badgeColor}`}>
                    {selectedUniModal.province}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30">
                    {selectedUniModal.city}
                  </span>
                </div>

                {/* Title inside Banner */}
                <div className="absolute bottom-5 left-5 right-5 z-10">
                  <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                    {selectedUniModal.name}
                  </h3>
                  <p className="text-slate-200 text-xs sm:text-sm font-medium mt-1">
                    {selectedUniModal.subtitle}
                  </p>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                {/* Specialty Tagline & Highlights */}
                <div>
                  <span className="text-xs font-bold text-brand-pink uppercase tracking-wider block mb-1">
                    {selectedUniModal.tagline}
                  </span>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {selectedUniModal.highlights}
                  </p>
                </div>

                {/* Key Options Breakdown Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <span className="text-[11px] font-bold uppercase text-slate-400 block mb-1 flex items-center gap-1.5">
                      <GraduationCap size={13} className="text-brand-pink" />
                      Degree Levels
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-brand-dark">
                      {selectedUniModal.degreeBadge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-emerald-50/60 border border-emerald-100">
                    <span className="text-[11px] font-bold uppercase text-emerald-600 block mb-1 flex items-center gap-1.5">
                      <Award size={13} className="text-emerald-600" />
                      Scholarship Routes
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      {selectedUniModal.scholarshipBadge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-blue-50/60 border border-blue-100">
                    <span className="text-[11px] font-bold uppercase text-blue-600 block mb-1 flex items-center gap-1.5">
                      <Calendar size={13} className="text-blue-600" />
                      Target Intake
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      {selectedUniModal.intakeBadge}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-100">
                    <span className="text-[11px] font-bold uppercase text-amber-700 block mb-1 flex items-center gap-1.5">
                      <DollarSign size={13} className="text-amber-600" />
                      Indicative Tuition
                    </span>
                    <p className="text-xs sm:text-sm font-bold text-slate-800">
                      {selectedUniModal.tuitionRange}
                    </p>
                  </div>
                </div>

                {/* Popular Degree Courses */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5 flex items-center gap-1.5">
                    <BookOpen size={14} className="text-brand-dark" />
                    Popular English &amp; Bilingual Programs
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniModal.popularCourses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-semibold text-slate-700"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Action Footer */}
              <div className="p-6 bg-slate-50 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/8801895626831?text=${encodeURIComponent(`Hello ILP Study, I would like to inquire about admission, courses and scholarships for ${selectedUniModal.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-full bg-brand-green text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 hover:bg-[#009c3b] transition-colors shadow-sm"
                >
                  <MessageSquare size={16} />
                  <span>Chat with Counselor on WhatsApp</span>
                </a>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                  <Link
                    href={`/contact?university=${encodeURIComponent(selectedUniModal.name)}`}
                    onClick={() => setSelectedUniModal(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-brand-dark text-white font-bold text-xs sm:text-sm hover:bg-brand-pink transition-colors text-center"
                  >
                    Free Assessment
                  </Link>
                  <Link
                    href={`/universities?search=${encodeURIComponent(selectedUniModal.name)}`}
                    onClick={() => setSelectedUniModal(null)}
                    className="w-full sm:w-auto px-5 py-3 rounded-full bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-300 transition-colors text-center"
                  >
                    Directory
                  </Link>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/**
 * SpaciousUniversityCard Component
 * Fixed card height & proportions: Large photo, location badge, bold title, pink tagline, 2-line description.
 * Displays 3 clear student option badges and interactive footer with clickable card behavior.
 */
function SpaciousUniversityCard({ 
  dest, 
  onOpenDetails 
}: { 
  dest: UniversityItem;
  onOpenDetails: (uni: UniversityItem) => void;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      layout
      whileHover={{ y: -6 }}
      onClick={() => onOpenDetails(dest)}
      className="group bg-white rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Photo Container: Clean, Spacious, Breathing Room */}
        <div className="relative h-48 sm:h-56 overflow-hidden bg-slate-100">
          {!imgError ? (
            <img 
              src={dest.image} 
              alt={dest.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 text-center text-white">
              <Building2 size={32} className="text-brand-green mb-2 opacity-80" />
              <span className="text-xs font-bold text-slate-300">{dest.name}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
          
          {/* Province / City Pill at Top Left */}
          <div className="absolute top-4 left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${dest.badgeColor}`}>
              {dest.province}
            </span>
          </div>

          {/* Bold University Title & Subtitle at Bottom of Photo */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <h3 className="text-xl sm:text-2xl font-black text-white leading-tight">
              {dest.name}
            </h3>
            <p className="text-slate-200 text-xs font-medium mt-0.5 line-clamp-1">
              {dest.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body: Clean, uncrowded, breathable typography */}
        <div className="p-5 sm:p-6">
          <p className="text-xs font-bold text-brand-pink uppercase tracking-wider mb-2">
            {dest.tagline}
          </p>
          <p className="text-slate-600 text-xs sm:text-sm font-medium leading-relaxed">
            {dest.highlights}
          </p>
        </div>
      </div>

      {/* Action Footer: View Courses & Fees / Ask Counselors */}
      <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dest);
          }}
          className="text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors inline-flex items-center gap-1.5"
        >
          <span>View Courses &amp; Fees</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
        
        <a
          href={`https://wa.me/8801895626831?text=${encodeURIComponent(`Hello ILP Study, I would like to inquire about courses, fees and admission for ${dest.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="text-xs font-bold text-slate-400 hover:text-brand-green transition-colors"
          title="Inquire directly with counselor"
        >
          Ask Counselors
        </a>
      </div>
    </motion.div>
  );
}
