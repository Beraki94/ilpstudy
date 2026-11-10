"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
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
  DollarSign,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

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
  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [pageSize, setPageSize] = useState<number>(3);
  const [carouselHeight, setCarouselHeight] = useState<number | undefined>(undefined);

  const carouselRef = useRef<HTMLDivElement>(null);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Mouse drag support for desktop
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftPos, setScrollLeftPos] = useState<number>(0);
  const [dragDistance, setDragDistance] = useState<number>(0);

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
      image: "/homeImage/01-Beihang-University-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Beijing Govt Awards",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 25,000–35,000 RMB/yr",
      popularCourses: ["Aeronautical Engineering", "Computer Science & AI", "Mechanical Engineering", "Automation"]
    },
    {
      id: "nuaa-02",
      name: "Nanjing University of Aeronautics & Astronautics",
      city: "Nanjing",
      province: "East China",
      subtitle: "Nanjing, Jiangsu · Double First-Class Key",
      tagline: "LEADING AERONAUTICS & MECHANICAL POWERHOUSE",
      highlights: "Specialized aircraft design, mechanical engineering, and computer software with high scholarship allocations.",
      badgeColor: "bg-brand-green text-white",
      image: "/homeImage/02-Nanjing-University-of-Aeronautics-and-Astronautics-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "CSC & Jiangsu Jasmine",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 20,000–26,000 RMB/yr",
      popularCourses: ["Aircraft Design", "Software Engineering", "International Trade", "Mechanical Engineering"]
    },
    {
      id: "sau-03",
      name: "Shenyang Aerospace University",
      city: "Shenyang",
      province: "Northeast Region",
      subtitle: "Shenyang, Liaoning · Specialist Aviation Key",
      tagline: "AIRCRAFT MAINTENANCE & AERONAUTICAL TECH",
      highlights: "Certified aircraft hangars, English-medium aviation engineering, and hands-on maintenance training for international students.",
      badgeColor: "bg-brand-purple text-white",
      image: "/homeImage/03-Shenyang-Aerospace-University-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Liaoning Provincial & Aviation",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–22,000 RMB/yr",
      popularCourses: ["Aeronautical Engineering", "Aircraft Maintenance", "Telecommunications", "Mechanical Design"]
    },
    {
      id: "nhu-04",
      name: "Nanchang Hangkong University",
      city: "Nanchang",
      province: "Jiangxi Province",
      subtitle: "Nanchang, Jiangxi · Aviation & Engineering Key",
      tagline: "AERONAUTICAL, MATERIAL & COMPUTER SCIENCE",
      highlights: "National aviation engineering specialist offering comprehensive English-taught bachelor programs, flight simulators, and university merit scholarships.",
      badgeColor: "bg-brand-dark text-white",
      image: "/homeImage/04-Nanchang-Hangkong-University-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Jiangxi Provincial & Merit",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 16,000–22,000 RMB/yr",
      popularCourses: ["Aeronautical Engineering", "Computer Science", "Materials Engineering", "Business Administration"]
    },
    {
      id: "heu-05",
      name: "Harbin Engineering University",
      city: "Harbin",
      province: "Northeast Region",
      subtitle: "Harbin, Heilongjiang · Double First-Class Key",
      tagline: "SHIPBUILDING, MARINE & AUTOMATION SCIENCES",
      highlights: "Advanced engineering powerhouse, generous government scholarship stipends, and cutting-edge robotics facilities.",
      badgeColor: "bg-brand-pink text-white",
      image: "/homeImage/05-Harbin-Engineering-University-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC Full Coverage & Provincial",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 17,000–23,000 RMB/yr",
      popularCourses: ["Marine Engineering", "Nuclear Technology", "Automation", "Robotics Engineering"]
    },
    {
      id: "cup-06",
      name: "China University of Petroleum (East China)",
      city: "Qingdao",
      province: "East Coast",
      subtitle: "Qingdao, Shandong · National 211 Key",
      tagline: "PETROLEUM, ENERGY & CHEMICAL ENGINEERING",
      highlights: "Seaside campus offering specialized energy engineering, national laboratories, and affordable campus living costs.",
      badgeColor: "bg-brand-green text-white",
      image: "/homeImage/06-China-University-of-Petroleum-East-China-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Energy Enterprise",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–25,000 RMB/yr",
      popularCourses: ["Petroleum Engineering", "Oil & Gas Storage", "Geology", "Chemical Engineering"]
    },
    {
      id: "zzu-07",
      name: "Zhengzhou University",
      city: "Zhengzhou",
      province: "Central China",
      subtitle: "Zhengzhou, Henan · Double First-Class & 211 Key",
      tagline: "COMPREHENSIVE ENGINEERING, MEDICINE & SCIENCE",
      highlights: "One of China's largest comprehensive universities, offering high-standard English-medium engineering, medical degrees, and Henan Provincial awards.",
      badgeColor: "bg-brand-purple text-white",
      image: "/homeImage/07-Zhengzhou-University-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "Henan Govt & President's Scholarship",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 18,000–26,000 RMB/yr",
      popularCourses: ["Civil Engineering", "Software Engineering", "Clinical Medicine", "Chemical Engineering"]
    },
    {
      id: "sdut-08",
      name: "Shandong University of Technology",
      city: "Zibo",
      province: "East Coast",
      subtitle: "Zibo, Shandong · Provincial Engineering Base",
      tagline: "MECHANICAL, AUTOMOTIVE & ELECTRICAL TECH",
      highlights: "Strong industrial partnerships, modern engineering labs, high admission quotas for international students, and low tuition and dorm fees.",
      badgeColor: "bg-brand-dark text-white",
      image: "/homeImage/08-Shandong-University-of-Technology-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Shandong Provincial & Tuition Waiver",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 14,000–18,000 RMB/yr",
      popularCourses: ["Mechanical Engineering", "Automotive Engineering", "Electrical Engineering", "International Economics"]
    },
    {
      id: "scut-09",
      name: "South China University of Technology",
      city: "Guangzhou",
      province: "Greater Bay Area",
      subtitle: "Guangzhou, Guangdong · Project 985 & 211 Key",
      tagline: "TECH, ROBOTICS & GREATER BAY AREA HUB",
      highlights: "Premier engineering university in Guangzhou with direct proximity to China's leading hardware and manufacturing innovation center.",
      badgeColor: "bg-brand-pink text-white",
      image: "/homeImage/09-South-China-University-of-Technology-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Guangdong Govt Awards",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 26,000–35,000 RMB/yr",
      popularCourses: ["Computer Science", "Electronic Information", "Civil Engineering", "Architecture"]
    },
    {
      id: "wut-10",
      name: "Wuhan University of Technology",
      city: "Wuhan",
      province: "Central China",
      subtitle: "Wuhan, Hubei · National 211 Key University",
      tagline: "MATERIALS SCIENCE, NAVAL TECH & LOGISTICS",
      highlights: "Prominent research institution for automotive engineering, naval transport, computer science, and provincial grants.",
      badgeColor: "bg-brand-green text-white",
      image: "/homeImage/10-Wuhan-University-of-Technology-Campus.jpg",
      category: "engineering",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Campus Outstanding",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 20,000–26,000 RMB/yr",
      popularCourses: ["Materials Science", "Automotive Engineering", "Naval Architecture", "Computer Science"]
    },
    {
      id: "bfsu-11",
      name: "Beijing Foreign Studies University",
      city: "Beijing",
      province: "National Capital",
      subtitle: "Beijing · Diplomatic & Business Key",
      tagline: "INTERNATIONAL BUSINESS, FINANCE & DIPLOMACY",
      highlights: "China’s premier international institution for multilingual trade, global diplomacy, and English-taught finance degrees.",
      badgeColor: "bg-brand-purple text-white",
      image: "/homeImage/11-Beijing-Foreign-Studies-University-Campus.jpg",
      category: "language",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "CSC & Silk Road Awards",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 26,000–34,000 RMB/yr",
      popularCourses: ["International Business", "Finance", "Diplomacy", "International Relations"]
    },
    {
      id: "swufe-12",
      name: "Southwestern University of Finance & Economics",
      city: "Chengdu",
      province: "Southwest China",
      subtitle: "Chengdu, Sichuan · National 211 Economics Key",
      tagline: "FINANCE, BANKING, BIG DATA & COMMERCE",
      highlights: "One of China's top four financial universities, located in vibrant Chengdu with leading fintech institutes and high placement rates.",
      badgeColor: "bg-brand-dark text-white",
      image: "/homeImage/12-Southwestern-University-of-Finance-and-Economics-Campus.jpg",
      category: "business",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Sichuan Provincial Grants",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 22,000–30,000 RMB/yr",
      popularCourses: ["International Finance", "Accounting", "Financial Intelligence", "E-Commerce"]
    },
    {
      id: "tufe-13",
      name: "Tianjin University of Finance & Economics",
      city: "Tianjin",
      province: "Northern Hub",
      subtitle: "Tianjin · Major Commercial & Trade Academy",
      tagline: "ACCOUNTING, AUDITING, TRADE & LOGISTICS",
      highlights: "Located 30 minutes from Beijing, offering established English-medium business and accounting degrees with strong scholarship quotas.",
      badgeColor: "bg-brand-pink text-white",
      image: "/homeImage/13-Tianjin-University-of-Finance-and-Economics-Campus.jpg",
      category: "business",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Tianjin Govt & Merit Awards",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–24,000 RMB/yr",
      popularCourses: ["International Business", "Accounting (ACCA)", "Applied Economics", "Logistics Management"]
    },
    {
      id: "zjgsu-14",
      name: "Zhejiang Gongshang University",
      city: "Hangzhou",
      province: "Southeast Tech",
      subtitle: "Hangzhou, Zhejiang · Key Business & Economics",
      tagline: "E-COMMERCE, INTERNATIONAL TRADE & ACCOUNTING",
      highlights: "Direct proximity to Hangzhou’s tech giants, high provincial scholarship coverage, and supportive international offices.",
      badgeColor: "bg-brand-green text-white",
      image: "/homeImage/14-Zhejiang-Gongshang-University-Campus.jpg",
      category: "business",
      degreeBadge: "Bachelor's · Master's",
      scholarshipBadge: "Zhejiang Provincial & Campus",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 18,000–24,000 RMB/yr",
      popularCourses: ["E-Commerce", "Finance", "Accounting", "International Trade"]
    },
    {
      id: "jnu-15",
      name: "Jinan University",
      city: "Guangzhou",
      province: "Greater Bay Area",
      subtitle: "Guangzhou, Guangdong · Project 211 Key",
      tagline: "CHINESE CULTURE, BUSINESS & GLOBAL MEDIA",
      highlights: "Renowned as the pioneer university for international and overseas Chinese students, offering bilingual degrees and prime Greater Bay Area access.",
      badgeColor: "bg-brand-purple text-white",
      image: "/homeImage/15-Jinan-University-Campus.jpg",
      category: "language",
      degreeBadge: "Bachelor's · Master's · PhD",
      scholarshipBadge: "CSC & Guangdong Provincial",
      intakeBadge: "March & Sept Intake",
      tuitionRange: "Approx. 20,000–28,000 RMB/yr",
      popularCourses: ["International Journalism", "Business Chinese", "Finance", "Cross-Border Trade"]
    },
    {
      id: "wmu-16",
      name: "Wenzhou Medical University",
      city: "Wenzhou",
      province: "Southeast Tech",
      subtitle: "Wenzhou, Zhejiang · Provincial Medical Key",
      tagline: "CLINICAL MEDICINE, OPHTHALMOLOGY & NURSING",
      highlights: "Internationally accredited clinical MBBS program with state-level eye institutes and modern teaching hospital grounds.",
      badgeColor: "bg-brand-dark text-white",
      image: "/homeImage/16-Wenzhou-Medical-University-Campus.jpg",
      category: "medical",
      degreeBadge: "MBBS · Master's · PhD",
      scholarshipBadge: "Zhejiang Provincial & Dean",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 30,000–36,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Optometry", "Pharmacy", "Pediatrics"]
    },
    {
      id: "dmu-17",
      name: "Dalian Medical University",
      city: "Dalian",
      province: "Northeast Coastal",
      subtitle: "Dalian, Liaoning · MOE-Approved English MBBS",
      tagline: "MOE-APPROVED ENGLISH-MEDIUM MBBS & SURGERY",
      highlights: "Coastal medical campus with direct hospital rotations, recognized worldwide for quality medical education and low fees.",
      badgeColor: "bg-brand-pink text-white",
      image: "/homeImage/17-Dalian-Medical-University-Campus.jpg",
      category: "medical",
      degreeBadge: "MBBS Specialist · Master's",
      scholarshipBadge: "Liaoning Provincial & Merit",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 35,000–42,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Stomatology (Dentistry)", "Nursing", "Internal Medicine"]
    },
    {
      id: "njmu-18",
      name: "Nanjing Medical University",
      city: "Nanjing",
      province: "East China",
      subtitle: "Nanjing, Jiangsu · Double First-Class Medical Key",
      tagline: "CLINICAL MEDICINE (MBBS), SURGERY & PUBLIC HEALTH",
      highlights: "Top-tier national medical school with extensive affiliated hospitals, high USMLE/BMDC success rates, and outstanding clinical training.",
      badgeColor: "bg-brand-green text-white",
      image: "/homeImage/18-Nanjing-Medical-University-Campus.jpg",
      category: "medical",
      degreeBadge: "MBBS · Master's · PhD",
      scholarshipBadge: "Jiangsu Jasmine & University Award",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 34,000–40,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Public Health", "Medical Imaging", "Pharmacology"]
    },
    {
      id: "fjmu-19",
      name: "Fujian Medical University",
      city: "Fuzhou",
      province: "Southeast Coast",
      subtitle: "Fuzhou, Fujian · MOE-Approved Clinical Center",
      tagline: "MBBS MEDICINE, STOMATOLOGY & BIOMEDICINE",
      highlights: "Scenic subtropical campus with advanced medical simulation centers, dedicated English-medium clinical faculty, and affordable tuition.",
      badgeColor: "bg-brand-purple text-white",
      image: "/homeImage/19-Fujian-Medical-University-Campus.jpg",
      category: "medical",
      degreeBadge: "MBBS · Master's",
      scholarshipBadge: "Fujian Provincial Government",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 28,000–35,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Stomatology", "Nursing", "Biomedical Sciences"]
    },
    {
      id: "smu-20",
      name: "Southern Medical University",
      city: "Guangzhou",
      province: "Greater Bay Area",
      subtitle: "Guangzhou, Guangdong · Former First Military Medical",
      tagline: "PREMIER CLINICAL MBBS & SURGICAL EXCELLENCE",
      highlights: "One of China's most prestigious medical universities, featuring 13 affiliated Grade-A tertiary hospitals and high international recognition.",
      badgeColor: "bg-brand-dark text-white",
      image: "/homeImage/20-Southern-Medical-University-Campus.jpg",
      category: "medical",
      degreeBadge: "MBBS · Master's · PhD",
      scholarshipBadge: "Guangdong Provincial & President's",
      intakeBadge: "September Intake",
      tuitionRange: "Approx. 36,000–45,000 RMB/yr",
      popularCourses: ["Clinical Medicine (MBBS)", "Orthopedic Surgery", "Cardiology", "Anesthesiology"]
    },
  ];

  // Filter Categories with accurate dynamic counts
  const categories = [
    { id: 'all', label: `All Top Choices (${universities.length})`, icon: Sparkles },
    { id: 'engineering', label: `Engineering & Aviation (${universities.filter(u => u.category === 'engineering').length})`, icon: Cpu },
    { id: 'medical', label: `Medicine & MBBS (${universities.filter(u => u.category === 'medical').length})`, icon: Stethoscope },
    { id: 'business', label: `Business & Trade (${universities.filter(u => u.category === 'business').length})`, icon: TrendingUp },
    { id: 'language', label: `Language & Arts (${universities.filter(u => u.category === 'language').length})`, icon: Languages },
  ];

  // Filter universities based on selection
  const filteredList = universities.filter(
    (uni) => selectedCategory === 'all' || uni.category === selectedCategory
  );

  // Responsive cards per slide view:
  // - Mobile (< 768px): 3 cards stacked vertically (1 column of 3 cards)
  // - Tablet (768px - 1023px): 6 cards in a 2x3 grid (2 columns x 3 rows = 6 cards)
  // - Desktop (>= 1024px): 3 cards in a horizontal row (3 columns x 1 row = 3 cards)
  useEffect(() => {
    const updatePageSize = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth >= 1024) {
        setPageSize(3);
      } else if (window.innerWidth >= 768) {
        setPageSize(6);
      } else {
        setPageSize(3);
      }
    };
    updatePageSize();
    window.addEventListener('resize', updatePageSize);
    return () => window.removeEventListener('resize', updatePageSize);
  }, []);

  // Chunk filteredList into slide pages based on pageSize
  const pages: UniversityItem[][] = useMemo(() => {
    const chunks: UniversityItem[][] = [];
    for (let i = 0; i < filteredList.length; i += pageSize) {
      chunks.push(filteredList.slice(i, i + pageSize));
    }
    return chunks;
  }, [filteredList, pageSize]);

  const totalPages = Math.max(1, pages.length);

  // Update button enabled states and current page indicator based on scroll position
  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    
    // Generous threshold to accommodate subpixel scaling and rounding
    setCanScrollLeft(scrollLeft > 12);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);

    if (clientWidth > 0) {
      const page = Math.max(0, Math.min(totalPages - 1, Math.round(scrollLeft / clientWidth)));
      if (page !== currentPage) {
        setCurrentPage(page);
        if (typeof window !== 'undefined' && window.innerWidth < 1024) {
          const activeSlide = slideRefs.current[page];
          if (activeSlide && activeSlide.offsetHeight > 0) {
            setCarouselHeight(activeSlide.offsetHeight);
          }
        }
      }
    }
  };

  // Dynamically size carousel height to the active slide on mobile/tablet so Previous/Next controls sit immediately below the cards
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.innerWidth >= 1024) {
      setCarouselHeight(undefined);
      return;
    }

    const activeSlide = slideRefs.current[currentPage];
    if (!activeSlide) return;

    const measureAndSetHeight = () => {
      if (activeSlide && activeSlide.offsetHeight > 0) {
        setCarouselHeight(activeSlide.offsetHeight);
      }
    };

    measureAndSetHeight();

    let ro: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      ro = new ResizeObserver(() => {
        measureAndSetHeight();
      });
      ro.observe(activeSlide);
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCarouselHeight(undefined);
      } else {
        measureAndSetHeight();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      if (ro) ro.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [currentPage, selectedCategory, pages]);

  // Reset scroll and update state when category changes
  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
    }
    setCurrentPage(0);
    const timer = setTimeout(() => {
      if (!carouselRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 12);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 12);
    }, 60);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const scrollNext = (loop: boolean = true) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    const maxScroll = container.scrollWidth - container.clientWidth;
    
    if (loop && container.scrollLeft >= maxScroll - 16) {
      container.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: container.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    if (container.scrollLeft <= 16) {
      const maxScroll = container.scrollWidth - container.clientWidth;
      container.scrollTo({ left: maxScroll, behavior: 'smooth' });
    } else {
      container.scrollBy({ left: -container.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollToPage = (pageIndex: number) => {
    if (!carouselRef.current) return;
    const container = carouselRef.current;
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      const targetSlide = slideRefs.current[pageIndex];
      if (targetSlide && targetSlide.offsetHeight > 0) {
        setCarouselHeight(targetSlide.offsetHeight);
      }
    }
    container.scrollTo({
      left: pageIndex * container.clientWidth,
      behavior: 'smooth'
    });
  };

  const handleCategoryChange = (catId: UniversityCategory) => {
    setSelectedCategory(catId);
    setCurrentPage(0);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  // Desktop mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeftPos(carouselRef.current.scrollLeft);
    setDragDistance(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = x - startX;
    setDragDistance(Math.abs(walk));
    carouselRef.current.scrollLeft = scrollLeftPos - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const displayStart = filteredList.length > 0 ? currentPage * pageSize + 1 : 0;
  const displayEnd = Math.min((currentPage + 1) * pageSize, filteredList.length);

  // Keep currentPage within bounds if pageSize or category changes
  useEffect(() => {
    if (currentPage >= totalPages) {
      setCurrentPage(0);
      if (carouselRef.current) {
        carouselRef.current.scrollTo({ left: 0, behavior: 'instant' as ScrollBehavior });
      }
    }
  }, [totalPages, currentPage]);

  // Auto-play timer: ticks every 6s, pauses on hover, touch, drag, or modal
  useEffect(() => {
    if (isPaused || isDragging || selectedUniModal || totalPages <= 1) {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
      return;
    }

    autoPlayTimerRef.current = setInterval(() => {
      if (typeof document !== 'undefined' && document.hidden) return;
      scrollNext(true);
    }, 6000);

    return () => {
      if (autoPlayTimerRef.current) {
        clearInterval(autoPlayTimerRef.current);
      }
    };
  }, [isPaused, isDragging, selectedUniModal, totalPages]);

  return (
    <section className="py-16 sm:py-24 bg-[#f1f5f9] border-y border-slate-200 relative" id="destinations">
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

          {/* Slider Navigation Controls (Desktop/Tablet) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-700 hover:text-brand-pink hover:border-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous universities"
                title="Previous university page"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => scrollNext(true)}
                disabled={!canScrollRight}
                className="w-10 h-10 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-700 hover:text-brand-pink hover:border-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next universities"
                title="Next university page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Subject Filter Tabs: Centered with high-contrast pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 sm:mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id as UniversityCategory)}
                className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-2 shadow-xs ${
                  isSelected
                    ? 'bg-brand-dark text-white shadow-md ring-2 ring-brand-dark/20 scale-105'
                    : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-brand-pink/50 hover:text-brand-dark'
                }`}
              >
                <Icon size={15} className={isSelected ? 'text-brand-green' : 'text-slate-400 group-hover:text-brand-pink'} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* TRUE SLIDING CAROUSEL: 3 CARDS MAINTAINED ON DESKTOP, SLIDES HORIZONTALLY ON BOTH DESKTOP AND MOBILE */}
        <div className="relative">
          <div 
            ref={carouselRef}
            onScroll={updateScrollState}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => {
              handleMouseLeave();
              setIsPaused(false);
            }}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setTimeout(() => setIsPaused(false), 2500);
            }}
            className={`overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth snap-x snap-mandatory flex items-start gap-0 touch-pan-y pt-2 pb-6 select-none ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              height: carouselHeight ? `${carouselHeight + 32}px` : undefined,
              transition: 'height 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            {pages.map((slideCards, pageIdx) => (
              <div 
                key={pageIdx}
                ref={(el) => {
                  slideRefs.current[pageIdx] = el;
                }}
                className="w-full flex-shrink-0 snap-start px-0.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 content-start auto-rows-max items-start md:items-stretch"
              >
                {slideCards.map((dest) => (
                  <SpaciousUniversityCard 
                    key={dest.id}
                    dest={dest} 
                    onOpenDetails={(uni) => {
                      if (dragDistance <= 8) {
                        setSelectedUniModal(uni);
                      }
                    }}
                  />
                ))}
              </div>
            ))}
          </div>

          {/* Slider Progress Bar, Pagination Dots & Bottom Mobile Controls */}
          <div className="mt-4 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Left: Counter & Page indicator */}
            <div className="text-xs text-slate-500 font-medium order-2 sm:order-1 text-center sm:text-left">
              Showing <strong className="text-brand-dark">{displayStart}–{displayEnd}</strong> of <strong className="text-brand-dark">{filteredList.length}</strong> top choice universities
              {totalPages > 1 && (
                <span className="text-slate-400 block sm:inline sm:ml-1">
                  (Slide {currentPage + 1} of {totalPages})
                </span>
              )}
            </div>
            
            {/* Center: Pagination Dots */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5 order-1 sm:order-2">
                {Array.from({ length: totalPages }).map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => scrollToPage(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentPage === idx 
                        ? 'w-7 bg-brand-pink shadow-xs' 
                        : 'w-2 bg-slate-200 hover:bg-slate-300'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                    title={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Right: Bottom Next/Prev Buttons */}
            <div className="flex items-center gap-2 order-3 w-full sm:w-auto justify-between sm:justify-end">
              <button
                onClick={scrollPrev}
                disabled={!canScrollLeft}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center gap-1.5 text-xs font-bold text-slate-700 hover:text-brand-pink hover:border-brand-pink disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous universities"
              >
                <ChevronLeft size={16} />
                <span>Previous</span>
              </button>

              <button
                onClick={() => scrollNext(true)}
                disabled={!canScrollRight}
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
            <span>Explore Complete China University Directory (130 Institutions)</span>
            <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* INTERACTIVE UNIVERSITY QUICK VIEW MODAL (When clicking any card or 'View Courses & Fees') */}
      <AnimatePresence>
        {selectedUniModal && (
          <div 
            className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-hidden"
            onClick={() => setSelectedUniModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl sm:rounded-[32px] max-w-xl lg:max-w-2xl w-full max-h-[90vh] sm:max-h-[85vh] flex flex-col overflow-hidden shadow-2xl border border-slate-200 relative my-auto"
            >
              {/* Modal Header: Clean, light & content-first — displays university title, location badges & close button */}
              <div className="p-5 sm:p-6 pb-4 sm:pb-5 border-b border-slate-100 flex-shrink-0 bg-white relative">
                <div className="flex items-center justify-between gap-3 mb-2 pr-9">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className={`px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold shadow-2xs ${selectedUniModal.badgeColor}`}>
                      {selectedUniModal.province}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200">
                      {selectedUniModal.city}
                    </span>
                    <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-brand-pink/10 text-brand-pink border border-brand-pink/20">
                      Verified Institution
                    </span>
                  </div>

                  {/* Close Button */}
                  <button
                    onClick={() => setSelectedUniModal(null)}
                    className="absolute top-4 right-4 sm:top-5 sm:right-5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-brand-dark flex items-center justify-center transition-colors"
                    aria-label="Close dialog"
                  >
                    <X size={18} />
                  </button>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-brand-dark leading-tight pr-6">
                  {selectedUniModal.name}
                </h3>
                <p className="text-slate-500 text-xs sm:text-sm font-medium mt-1">
                  {selectedUniModal.subtitle}
                </p>
              </div>

              {/* Modal Body: Focuses 100% on core academic programs, fee structures and admission requirements */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto flex-1 overscroll-contain">
                {/* Specialty Tagline & Highlights Summary */}
                <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f8fafc] border border-slate-200/80">
                  <span className="text-[11px] sm:text-xs font-bold text-brand-pink uppercase tracking-wider block mb-1">
                    {selectedUniModal.tagline}
                  </span>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {selectedUniModal.highlights}
                  </p>
                </div>

                {/* 4 Core Admissions & Fees Pillars: Indicative Tuition & Scholarships Highlighted */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  {/* Indicative Tuition */}
                  <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-100/90 text-amber-700 flex items-center justify-center shrink-0">
                      <DollarSign size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold uppercase text-amber-800 tracking-wide block">
                        Indicative Tuition
                      </span>
                      <p className="text-xs sm:text-sm font-extrabold text-amber-950 mt-0.5">
                        {selectedUniModal.tuitionRange}
                      </p>
                    </div>
                  </div>

                  {/* Scholarship Routes */}
                  <div className="p-3.5 rounded-2xl bg-emerald-50/70 border border-emerald-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-100/90 text-emerald-700 flex items-center justify-center shrink-0">
                      <Award size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold uppercase text-emerald-800 tracking-wide block">
                        Scholarship Coverage
                      </span>
                      <p className="text-xs sm:text-sm font-extrabold text-emerald-950 mt-0.5">
                        {selectedUniModal.scholarshipBadge}
                      </p>
                    </div>
                  </div>

                  {/* Degree Levels */}
                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-slate-200/70 text-slate-700 flex items-center justify-center shrink-0">
                      <GraduationCap size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold uppercase text-slate-500 tracking-wide block">
                        Degree Levels
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-brand-dark mt-0.5">
                        {selectedUniModal.degreeBadge}
                      </p>
                    </div>
                  </div>

                  {/* Target Intake */}
                  <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/80 flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100/90 text-blue-700 flex items-center justify-center shrink-0">
                      <Calendar size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] font-bold uppercase text-blue-800 tracking-wide block">
                        Target Intake
                      </span>
                      <p className="text-xs sm:text-sm font-bold text-blue-950 mt-0.5">
                        {selectedUniModal.intakeBadge}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Popular English & Bilingual Programs */}
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                      <BookOpen size={14} className="text-brand-dark shrink-0" />
                      <span>Popular English &amp; Bilingual Programs</span>
                    </h4>
                    <span className="text-[10px] font-bold text-brand-green bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                      Intake Open
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedUniModal.popularCourses.map((course, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white border border-slate-200/90 text-xs font-semibold text-slate-700 shadow-2xs flex items-center gap-2 hover:border-brand-pink/50 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-pink shrink-0" />
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal Action Footer: Focused on the 2 essential student actions — WhatsApp counselor inquiry & free assessment */}
              <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-100 flex-shrink-0 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href={`https://wa.me/8801895626831?text=${encodeURIComponent(`Hello ILP Study, I would like to inquire about admission, courses and scholarships for ${selectedUniModal.name}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:flex-1 py-3 px-5 rounded-full bg-brand-green hover:bg-[#009c3b] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-soft"
                >
                  <MessageSquare size={16} />
                  <span>Chat with Counselor on WhatsApp</span>
                </a>

                <Link
                  href={`/contact?university=${encodeURIComponent(selectedUniModal.name)}`}
                  onClick={() => setSelectedUniModal(null)}
                  className="w-full sm:w-auto sm:min-w-[180px] py-3 px-5 rounded-full bg-brand-dark hover:bg-brand-pink text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-soft text-center"
                >
                  <GraduationCap size={16} />
                  <span>Free Assessment</span>
                </Link>
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
    <div
      onClick={() => onOpenDetails(dest)}
      className="group bg-white rounded-3xl sm:rounded-[32px] overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between h-auto md:h-full cursor-pointer select-none"
    >
      <div className="flex-1 flex flex-col">
        {/* Photo Container: Spacious height (h-52 = 208px) on mobile for bold visual punch */}
        <div className="relative h-52 sm:h-52 lg:h-56 overflow-hidden bg-slate-100 flex-shrink-0">
          {!imgError ? (
            <Image 
              src={dest.image} 
              alt={dest.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out select-none pointer-events-none"
              draggable={false}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center p-4 text-center text-white">
              <Building2 size={32} className="text-brand-green mb-2 opacity-80" />
              <span className="text-xs font-bold text-slate-300 line-clamp-1">{dest.name}</span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />
          
          {/* Province / City Pill at Top Left */}
          <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 z-10">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md ${dest.badgeColor}`}>
              {dest.province}
            </span>
          </div>

          {/* Bold University Title & Subtitle at Bottom of Photo */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-4 sm:left-4 sm:right-4 z-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-black text-white leading-tight">
              {dest.name}
            </h3>
            <p className="text-slate-200 text-xs font-medium mt-0.5 line-clamp-1">
              {dest.subtitle}
            </p>
          </div>
        </div>

        {/* Content Body: Consistent height, 3 full lines visible before ellipsis */}
        <div className="p-4 sm:p-5 lg:p-6 flex-1 flex flex-col">
          <div>
            {/* Tagline: 2-line capacity with reserved min-height for uniform card consistency */}
            <p className="text-xs font-bold text-brand-pink uppercase tracking-wider mb-2 line-clamp-2 min-h-[2.25rem] sm:min-h-[2.5rem] leading-snug">
              {dest.tagline}
            </p>
            {/* Third line of text is present before ellipsis with consistent min-height across cards */}
            <p className="text-slate-600 text-xs sm:text-sm font-normal leading-relaxed line-clamp-3 min-h-[4.25rem] sm:min-h-[4.75rem]">
              {dest.highlights}
            </p>
          </div>
        </div>
      </div>

      {/* Action Footer: View Courses & Fees / Ask Counselors with clean positioning */}
      <div className="px-4 pb-4 pt-3 sm:px-5 sm:pb-5 sm:pt-3.5 border-t border-slate-100 flex items-center justify-between gap-2 mt-auto">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onOpenDetails(dest);
          }}
          className="text-xs sm:text-sm font-bold text-brand-dark group-hover:text-brand-pink transition-colors inline-flex items-center gap-1.5 shrink-0"
        >
          <span>View Courses &amp; Fees</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform text-brand-pink" />
        </button>
        
        <a
          href={`https://wa.me/8801895626831?text=${encodeURIComponent(`Hello ILP Study, I would like to inquire about courses, fees and admission for ${dest.name}.`)}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-slate-600 hover:text-brand-green bg-slate-50 hover:bg-emerald-50/80 border border-slate-200/80 hover:border-emerald-300 transition-all shrink-0"
          title="Inquire directly with counselor on WhatsApp"
        >
          <MessageSquare size={12} className="text-brand-green" />
          <span>Ask Counselors</span>
        </a>
      </div>
    </div>
  );
}
