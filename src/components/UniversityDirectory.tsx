"use client";

import React, { useState, useMemo, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Search,
  MapPin,
  ArrowRight
} from 'lucide-react';
import Pagination from '@/components/Pagination';

interface UniversityItem {
  name: string;
  province: string;
  city: string;
  logo: string;
}

const UNIVERSITIES_DATA: UniversityItem[] = [
  // Beijing
  { name: "Beihang University", province: "Beijing", city: "Beijing", logo: "/images/university-logos/001-beihang-university.png" },
  { name: "Beijing Foreign Studies University", province: "Beijing", city: "Beijing", logo: "/images/university-logos/002-beijing-foreign-studies-university.png" },
  { name: "Beijing Language and Culture University", province: "Beijing", city: "Beijing", logo: "/images/university-logos/003-beijing-language-and-culture-university.png" },
  { name: "Beijing University of Chinese Medicine", province: "Beijing", city: "Beijing", logo: "/images/university-logos/004-beijing-university-of-chinese-medicine.png" },
  { name: "Beijing University of Posts and Telecommunications", province: "Beijing", city: "Beijing", logo: "/images/university-logos/005-beijing-university-of-posts-and-telecommunications.png" },
  { name: "Capital Normal University", province: "Beijing", city: "Beijing", logo: "/images/university-logos/006-capital-normal-university.png" },
  { name: "Capital University of Physical Education and Sports", province: "Beijing", city: "Beijing", logo: "/images/university-logos/007-capital-university-of-physical-education-and-sports.png" },
  { name: "China University of Petroleum (Beijing)", province: "Beijing", city: "Beijing", logo: "/images/university-logos/008-china-university-of-petroleum-beijing.png" },
  { name: "China University of Political Science and Law", province: "Beijing", city: "Beijing", logo: "/images/university-logos/009-china-university-of-political-science-and-law.png" },
  { name: "North China Electric Power University", province: "Beijing", city: "Beijing", logo: "/images/university-logos/121-north-china-electric-power-university.png" },

  // Chongqing
  { name: "Chongqing Medical University", province: "Chongqing", city: "Chongqing", logo: "/images/university-logos/010-chongqing-medical-university.png" },
  { name: "Chongqing University", province: "Chongqing", city: "Chongqing", logo: "/images/university-logos/011-chongqing-university.png" },
  { name: "Chongqing University of Posts and Telecommunications", province: "Chongqing", city: "Chongqing", logo: "/images/university-logos/012-chongqing-university-of-posts-and-telecommunications.png" },
  { name: "Southwest University", province: "Chongqing", city: "Chongqing", logo: "/images/university-logos/013-southwest-university.png" },

  // Fujian
  { name: "Fujian Medical University", province: "Fujian", city: "Fuzhou", logo: "/images/university-logos/014-fujian-medical-university.png" },
  { name: "Xiamen University", province: "Fujian", city: "Xiamen", logo: "/images/university-logos/015-xiamen-university.png" },
  { name: "Fuzhou Software Technology Vocational College", province: "Fujian", city: "Fuzhou", logo: "/images/university-logos/126-fuzhou-software-technology-vocational-college.png" },

  // Guangdong
  { name: "South China Normal University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/016-south-china-normal-university.png" },
  { name: "South China University of Technology", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/017-south-china-university-of-technology.png" },
  { name: "Sun Yat-sen University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/084-sun-yat-sen-university.png" },
  { name: "Jinan University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/085-jinan-university.png" },
  { name: "South China Agricultural University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/086-south-china-agricultural-university.png" },
  { name: "Guangzhou Medical University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/087-guangzhou-medical-university.png" },
  { name: "Guangzhou University of Chinese Medicine", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/088-guangzhou-university-of-chinese-medicine.png" },
  { name: "Guangdong Pharmaceutical University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/089-guangdong-pharmaceutical-university.png" },
  { name: "Guangzhou Sport University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/090-guangzhou-sport-university.png" },
  { name: "Guangzhou Academy of Fine Arts", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/091-guangzhou-academy-of-fine-arts.png" },
  { name: "Xinghai Conservatory of Music", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/092-xinghai-conservatory-of-music.png" },
  { name: "Guangdong Polytechnic Normal University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/093-guangdong-polytechnic-normal-university.png" },
  { name: "Guangdong University of Finance & Economics", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/094-guangdong-university-of-finance-economics.png" },
  { name: "Guangzhou University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/095-guangzhou-university.png" },
  { name: "Guangzhou Maritime University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/096-guangzhou-maritime-university.png" },
  { name: "Guangdong Police College", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/097-guangdong-police-college.png" },
  { name: "Zhongkai University of Agriculture and Engineering", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/098-zhongkai-university-of-agriculture-and-engineering.png" },
  { name: "Guangdong University of Finance", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/099-guangdong-university-of-finance.png" },
  { name: "Guangdong University of Technology", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/100-guangdong-university-of-technology.png" },
  { name: "Guangdong University of Foreign Studies", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/101-guangdong-university-of-foreign-studies.png" },
  { name: "Southern Medical University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/102-southern-medical-university.png" },
  { name: "Guangdong University of Education", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/103-guangdong-university-of-education.png" },
  { name: "Guangdong Industry Polytechnic University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/104-guangdong-industry-polytechnic-university.png" },
  { name: "Guangzhou Polytechnic University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/105-guangzhou-polytechnic-university.png" },
  { name: "Guangdong Baiyun University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/106-guangdong-baiyun-university.png" },
  { name: "Guangdong Peizheng College", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/107-guangdong-peizheng-college.png" },
  { name: "Guangzhou City University of Technology", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/108-guangzhou-city-university-of-technology.png" },
  { name: "Guangzhou University of Software", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/109-guangzhou-university-of-software.png" },
  { name: "Nanfang College Guangzhou", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/110-nanfang-college-guangzhou.png" },
  { name: "South China Business College (GDUFS)", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/111-south-china-business-college-guangdong-university-of-foreign-studies.png" },
  { name: "Guangzhou Huashang College", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/112-guangzhou-huashang-college.png" },
  { name: "SCAU Pearl River College", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/113-south-china-agricultural-university-pearl-river-college.png" },
  { name: "Guangzhou Institute of Science and Technology", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/114-guangzhou-institute-of-science-and-technology.png" },
  { name: "Guangzhou Huali College", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/115-guangzhou-huali-college.png" },
  { name: "Guangzhou College of Applied Science and Technology", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/116-guangzhou-college-of-applied-science-and-technology.png" },
  { name: "Guangzhou College of Commerce", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/117-guangzhou-college-of-commerce.png" },
  { name: "Guangzhou College of Technology and Business", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/118-guangzhou-college-of-technology-and-business.png" },
  { name: "Guangzhou Xinhua University", province: "Guangdong", city: "Guangzhou", logo: "/images/university-logos/119-guangzhou-xinhua-university.png" },

  // Guangxi
  { name: "Guangxi Normal University", province: "Guangxi", city: "Guilin", logo: "/images/university-logos/018-guangxi-normal-university.png" },
  { name: "Guangxi Medical University", province: "Guangxi", city: "Nanning", logo: "/images/university-logos/019-guangxi-medical-university.png" },

  // Hebei
  { name: "Yanshan University", province: "Hebei", city: "Qinhuangdao", logo: "/images/university-logos/020-yanshan-university.png" },
  { name: "Hebei Medical University", province: "Hebei", city: "Shijiazhuang", logo: "/images/university-logos/021-hebei-medical-university.png" },

  // Heilongjiang
  { name: "Harbin Engineering University", province: "Heilongjiang", city: "Harbin", logo: "/images/university-logos/022-harbin-engineering-university.png" },
  { name: "Jiamusi University", province: "Heilongjiang", city: "Jiamusi", logo: "/images/university-logos/123-jiamusi-university.png" },

  // Henan
  { name: "Xinyang Normal University", province: "Henan", city: "Xinyang", logo: "/images/university-logos/023-xinyang-normal-university.png" },
  { name: "Zhengzhou University", province: "Henan", city: "Zhengzhou", logo: "/images/university-logos/024-zhengzhou-university.png" },
  { name: "Henan University of Technology", province: "Henan", city: "Zhengzhou", logo: "/images/university-logos/125-henan-university-of-technology.png" },

  // Hubei
  { name: "Huazhong University of Science and Technology", province: "Hubei", city: "Wuhan", logo: "/images/university-logos/025-huazhong-university-of-science-and-technology.png" },
  { name: "Hubei University", province: "Hubei", city: "Wuhan", logo: "/images/university-logos/026-hubei-university.png" },
  { name: "Wuhan University", province: "Hubei", city: "Wuhan", logo: "/images/university-logos/027-wuhan-university.png" },
  { name: "Wuhan University of Technology", province: "Hubei", city: "Wuhan", logo: "/images/university-logos/028-wuhan-university-of-technology.png" },

  // Hunan
  { name: "Hunan University", province: "Hunan", city: "Changsha", logo: "/images/university-logos/029-hunan-university.png" },
  { name: "Changsha University of Science and Technology", province: "Hunan", city: "Changsha", logo: "/images/university-logos/124-changsha-university-of-science-and-technology.png" },

  // Jiangsu
  { name: "China Pharmaceutical University", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/030-china-pharmaceutical-university.png" },
  { name: "Nanjing Medical University", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/031-nanjing-medical-university.png" },
  { name: "Nanjing University of Aeronautics and Astronautics", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/032-nanjing-university-of-aeronautics-and-astronautics.png" },
  { name: "Nanjing University of Chinese Medicine", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/033-nanjing-university-of-chinese-medicine.png" },
  { name: "Nanjing University of Information Science and Technology", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/034-nanjing-university-of-information-science-and-technology.png" },
  { name: "Nanjing University of Science and Technology", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/035-nanjing-university-of-science-and-technology.png" },
  { name: "Southeast University", province: "Jiangsu", city: "Nanjing", logo: "/images/university-logos/036-southeast-university.png" },
  { name: "Xi'an Jiaotong-Liverpool University", province: "Jiangsu", city: "Suzhou", logo: "/images/university-logos/037-xi-an-jiaotong-liverpool-university.png" },
  { name: "Jiangnan University", province: "Jiangsu", city: "Wuxi", logo: "/images/university-logos/038-jiangnan-university.png" },
  { name: "China University of Mining and Technology", province: "Jiangsu", city: "Xuzhou", logo: "/images/university-logos/039-china-university-of-mining-and-technology.png" },
  { name: "Jiangsu University", province: "Jiangsu", city: "Zhenjiang", logo: "/images/university-logos/040-jiangsu-university.png" },
  { name: "Huaiyin Normal University", province: "Jiangsu", city: "Huai'an", logo: "/images/university-logos/120-huaiyin-normal-university.png" },

  // Jiangxi
  { name: "Nanchang Hangkong University", province: "Jiangxi", city: "Nanchang", logo: "/images/university-logos/041-nanchang-hangkong-university.png" },
  { name: "Nanchang Institute of Technology", province: "Jiangxi", city: "Nanchang", logo: "/images/university-logos/042-nanchang-institute-of-technology.png" },
  { name: "Nanchang University", province: "Jiangxi", city: "Nanchang", logo: "/images/university-logos/043-nanchang-university.png" },

  // Jilin
  { name: "Changchun University of Science and Technology", province: "Jilin", city: "Changchun", logo: "/images/university-logos/044-changchun-university-of-science-and-technology.png" },
  { name: "Jilin Jianzhu University", province: "Jilin", city: "Changchun", logo: "/images/university-logos/045-jilin-jianzhu-university.png" },

  // Liaoning
  { name: "Dalian Medical University", province: "Liaoning", city: "Dalian", logo: "/images/university-logos/046-dalian-medical-university.png" },
  { name: "Dalian University of Foreign Languages", province: "Liaoning", city: "Dalian", logo: "/images/university-logos/047-dalian-university-of-foreign-languages.png" },
  { name: "Liaoning Normal University", province: "Liaoning", city: "Dalian", logo: "/images/university-logos/048-liaoning-normal-university.png" },
  { name: "Liaoning Petrochemical University", province: "Liaoning", city: "Fushun", logo: "/images/university-logos/049-liaoning-petrochemical-university.png" },
  { name: "Bohai University", province: "Liaoning", city: "Jinzhou", logo: "/images/university-logos/050-bohai-university.png" },
  { name: "Jinzhou Medical University", province: "Liaoning", city: "Jinzhou", logo: "/images/university-logos/051-jinzhou-medical-university.png" },
  { name: "Liaoning University of Technology", province: "Liaoning", city: "Jinzhou", logo: "/images/university-logos/052-liaoning-university-of-technology.png" },
  { name: "China Medical University", province: "Liaoning", city: "Shenyang", logo: "/images/university-logos/053-china-medical-university.png" },
  { name: "Liaoning Communication University", province: "Liaoning", city: "Shenyang", logo: "/images/university-logos/054-liaoning-communication-university.png" },
  { name: "Shenyang Aerospace University", province: "Liaoning", city: "Shenyang", logo: "/images/university-logos/055-shenyang-aerospace-university.png" },
  { name: "Shenyang City University", province: "Liaoning", city: "Shenyang", logo: "/images/university-logos/127-shenyang-city-university.png" },

  // Shaanxi
  { name: "Chang'an University", province: "Shaanxi", city: "Xi'an", logo: "/images/university-logos/128-Changan-University.png" },

  // Shandong
  { name: "Shandong University of Aeronautics", province: "Shandong", city: "Binzhou", logo: "/images/university-logos/056-shandong-university-of-aeronautics.png" },
  { name: "Shandong Agriculture and Engineering University", province: "Shandong", city: "Jinan", logo: "/images/university-logos/057-shandong-agriculture-and-engineering-university.png" },
  { name: "Shandong Jiaotong University", province: "Shandong", city: "Jinan", logo: "/images/university-logos/058-shandong-jiaotong-university.png" },
  { name: "Shandong University", province: "Shandong", city: "Jinan", logo: "/images/university-logos/059-shandong-university.png" },
  { name: "Liaocheng University", province: "Shandong", city: "Liaocheng", logo: "/images/university-logos/060-liaocheng-university.png" },
  { name: "China University of Petroleum (East China)", province: "Shandong", city: "Qingdao", logo: "/images/university-logos/061-china-university-of-petroleum-east-china.png" },
  { name: "Ocean University of China", province: "Shandong", city: "Qingdao", logo: "/images/university-logos/062-ocean-university-of-china.png" },
  { name: "Qingdao University of Technology", province: "Shandong", city: "Qingdao", logo: "/images/university-logos/063-qingdao-university-of-technology.png" },
  { name: "Shandong University of Science and Technology", province: "Shandong", city: "Qingdao", logo: "/images/university-logos/064-shandong-university-of-science-and-technology.png" },
  { name: "Shandong University of Technology", province: "Shandong", city: "Zibo", logo: "/images/university-logos/065-shandong-university-of-technology.png" },
  { name: "Binzhou Polytechnic University", province: "Shandong", city: "Binzhou", logo: "/images/university-logos/122-binzhou-polytechnic-university.png" },

  // Shanghai
  { name: "Donghua University", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/066-donghua-university.png" },
  { name: "East China Normal University", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/067-east-china-normal-university.png" },
  { name: "East China University of Science and Technology", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/068-east-china-university-of-science-and-technology.png" },
  { name: "Fudan University", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/069-fudan-university.png" },
  { name: "Shanghai International Studies University", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/070-shanghai-international-studies-university.png" },
  { name: "The Sino-British College, University of Shanghai for Science and Technology", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/071-the-sino-british-college-university-of-shanghai-for-science-and-technology.png" },
  { name: "Shanghai University of Engineering Science", province: "Shanghai", city: "Shanghai", logo: "/images/university-logos/129-Shanghai-University-of-Engineering-Science.png" },

  // Sichuan
  { name: "Sichuan University", province: "Sichuan", city: "Chengdu", logo: "/images/university-logos/072-sichuan-university.png" },
  { name: "Southwestern University of Finance and Economics", province: "Sichuan", city: "Chengdu", logo: "/images/university-logos/073-southwestern-university-of-finance-and-economics.png" },
  { name: "Leshan Normal University", province: "Sichuan", city: "Leshan", logo: "/images/university-logos/074-leshan-normal-university.png" },

  // Tianjin
  { name: "Tianjin Medical University", province: "Tianjin", city: "Tianjin", logo: "/images/university-logos/075-tianjin-medical-university.png" },
  { name: "Tianjin University of Finance and Economics", province: "Tianjin", city: "Tianjin", logo: "/images/university-logos/076-tianjin-university-of-finance-and-economics.png" },

  // Yunnan
  { name: "Kunming University of Science and Technology", province: "Yunnan", city: "Kunming", logo: "/images/university-logos/077-kunming-university-of-science-and-technology.png" },

  // Zhejiang
  { name: "Zhejiang A&F University", province: "Zhejiang", city: "Hangzhou", logo: "/images/university-logos/078-zhejiang-a-f-university.png" },
  { name: "Zhejiang Gongshang University", province: "Zhejiang", city: "Hangzhou", logo: "/images/university-logos/079-zhejiang-gongshang-university.png" },
  { name: "Zhejiang University of Science and Technology", province: "Zhejiang", city: "Hangzhou", logo: "/images/university-logos/080-zhejiang-university-of-science-and-technology.png" },
  { name: "Lishui University", province: "Zhejiang", city: "Lishui", logo: "/images/university-logos/081-lishui-university.png" },
  { name: "Wenzhou Medical University", province: "Zhejiang", city: "Wenzhou", logo: "/images/university-logos/082-wenzhou-medical-university.png" },
  { name: "Wenzhou University", province: "Zhejiang", city: "Wenzhou", logo: "/images/university-logos/083-wenzhou-university.png" },
  { name: "Zhejiang University of Finance and Economics", province: "Zhejiang", city: "Hangzhou", logo: "/images/university-logos/130-Zhejiang-University-of-Finance-and-Economics.png" },

];

export default function UniversityDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('All');

  // Sync search term from URL query parameter (e.g. ?search=Beihang)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('search');
      if (q) {
        setSearchTerm(q);
      }
    }
  }, []);

  // Extract unique provinces
  const provinces = useMemo(() => {
    const list = Array.from(new Set(UNIVERSITIES_DATA.map(u => u.province))).sort();
    return ['All', ...list];
  }, []);

  // Filter universities
  const filteredUniversities = useMemo(() => {
    return UNIVERSITIES_DATA.filter(item => {
      const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.province.toLowerCase().includes(searchTerm.toLowerCase());
      const matchProvince = selectedProvince === 'All' || item.province === selectedProvince;
      return matchSearch && matchProvince;
    });
  }, [searchTerm, selectedProvince]);

  // Responsive Pagination State: 10 on mobile, 18 on desktop/tablet (divisible by 2 & 3)
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const directoryTopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const itemsPerPage = isMobile ? 10 : 18;

  // Reset to first page when search query, province filter, or device mode changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedProvince, isMobile]);

  const totalPages = Math.ceil(filteredUniversities.length / itemsPerPage) || 1;

  // Paginated slice for the current view
  const paginatedUniversities = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredUniversities.slice(start, start + itemsPerPage);
  }, [filteredUniversities, currentPage, itemsPerPage]);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    if (directoryTopRef.current) {
      directoryTopRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="space-y-8 relative">
      <div ref={directoryTopRef} className="absolute -top-28 left-0 pointer-events-none" />

      {/* Search and Province Filters */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-soft space-y-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search university, city or province..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
            />
          </div>

          <span className="text-xs font-bold text-slate-500">
            {filteredUniversities.length > 0 ? (
              <>
                Showing <strong className="text-brand-dark">{(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, filteredUniversities.length)}</strong> of <strong className="text-brand-dark">{filteredUniversities.length}</strong> institutions
              </>
            ) : (
              <>Showing <strong className="text-brand-dark">0</strong> institutions</>
            )}
          </span>
        </div>

        {/* Province Pills */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {provinces.map(prov => (
            <button
              key={prov}
              type="button"
              onClick={() => setSelectedProvince(prov)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                selectedProvince === prov
                  ? 'bg-brand-pink text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {prov}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Universities */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
        {paginatedUniversities.map((uni, idx) => (
          <motion.div
            key={`${uni.name}-${idx}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: Math.min(idx * 0.02, 0.3) }}
            whileHover={{ y: -4 }}
            className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-start gap-4 mb-2.5">
                {/* University Logo Crest */}
                <UniversityCrest src={uni.logo} name={uni.name} />

                {/* Badges & Name */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full truncate">
                      {uni.province}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1 flex-shrink-0">
                      <MapPin size={11} className="text-slate-400" />
                      <span>{uni.city}</span>
                    </span>
                  </div>

                  <h4 className="font-extrabold text-base sm:text-[17px] text-brand-dark group-hover:text-brand-pink transition-colors line-clamp-2 leading-snug">
                    {uni.name}
                  </h4>
                </div>
              </div>
            </div>

            <div className="mt-3.5 pt-3.5 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/contact?university=${encodeURIComponent(uni.name)}`}
                className="text-xs sm:text-sm font-bold text-brand-pink hover:text-[#d10079] inline-flex items-center gap-1 transition-colors group-hover:translate-x-0.5 group-hover:transition-transform"
              >
                <span>Discuss Admission</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        totalItems={filteredUniversities.length}
        itemsPerPage={itemsPerPage}
        itemName="institutions"
      />

      {filteredUniversities.length === 0 && (
        <div className="p-12 text-center bg-white rounded-3xl border border-slate-200/80">
          <p className="text-sm font-bold text-slate-600">No institutions found matching &quot;{searchTerm}&quot;.</p>
          <button
            onClick={() => { setSearchTerm(''); setSelectedProvince('All'); }}
            className="mt-3 text-xs font-bold text-brand-pink hover:underline"
          >
            Reset search filters
          </button>
        </div>
      )}
    </div>
  );
}

function UniversityCrest({ src, name }: { src: string; name: string }) {
  const [hasError, setHasError] = useState(false);

  const initials = name
    .split(/\s+/)
    .filter((w) => w.length > 2 && !['and', 'the', 'for'].includes(w.toLowerCase()))
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() || '')
    .join('') || name.slice(0, 2).toUpperCase();

  return (
    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-50 border border-slate-200/80 p-1.5 flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:border-brand-pink/40 group-hover:bg-white transition-all shadow-xs overflow-hidden">
      {!hasError ? (
        <Image
          src={src}
          alt={`${name} crest`}
          width={64}
          height={64}
          sizes="64px"
          className="w-full h-full object-contain"
          onError={() => setHasError(true)}
        />
      ) : (
        <span className="text-xs sm:text-sm font-black text-brand-dark tracking-tight">
          {initials}
        </span>
      )}
    </div>
  );
}
