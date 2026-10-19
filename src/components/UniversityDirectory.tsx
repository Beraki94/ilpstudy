"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  MapPin,
  Building2,
  DollarSign,
  GraduationCap,
  ArrowRight,
  ExternalLink,
  HelpCircle,
  AlertCircle,
  CheckCircle2
} from 'lucide-react';

interface UniversityItem {
  name: string;
  province: string;
  city: string;
}

const UNIVERSITIES_DATA: UniversityItem[] = [
  // Beijing
  { name: "Beihang University", province: "Beijing", city: "Beijing" },
  { name: "Beijing Foreign Studies University", province: "Beijing", city: "Beijing" },
  { name: "Beijing Language and Culture University", province: "Beijing", city: "Beijing" },
  { name: "Beijing University of Chinese Medicine", province: "Beijing", city: "Beijing" },
  { name: "Beijing University of Posts and Telecommunications", province: "Beijing", city: "Beijing" },
  { name: "Capital Normal University", province: "Beijing", city: "Beijing" },
  { name: "Capital University of Physical Education and Sports", province: "Beijing", city: "Beijing" },
  { name: "China University of Petroleum (Beijing)", province: "Beijing", city: "Beijing" },
  { name: "China University of Political Science and Law", province: "Beijing", city: "Beijing" },

  // Chongqing
  { name: "Chongqing Medical University", province: "Chongqing", city: "Chongqing" },
  { name: "Chongqing University", province: "Chongqing", city: "Chongqing" },
  { name: "Chongqing University of Posts and Telecommunications", province: "Chongqing", city: "Chongqing" },
  { name: "Southwest University", province: "Chongqing", city: "Chongqing" },

  // Fujian
  { name: "Fujian Medical University", province: "Fujian", city: "Fuzhou" },
  { name: "Xiamen University", province: "Fujian", city: "Xiamen" },

  // Guangdong
  { name: "South China Normal University", province: "Guangdong", city: "Guangzhou" },
  { name: "South China University of Technology", province: "Guangdong", city: "Guangzhou" },

  // Guangxi
  { name: "Guangxi Normal University", province: "Guangxi", city: "Guilin" },
  { name: "Guangxi Medical University", province: "Guangxi", city: "Nanning" },

  // Hebei
  { name: "Yanshan University", province: "Hebei", city: "Qinhuangdao" },
  { name: "Hebei Medical University", province: "Hebei", city: "Shijiazhuang" },

  // Heilongjiang
  { name: "Harbin Engineering University", province: "Heilongjiang", city: "Harbin" },

  // Henan
  { name: "Xinyang Normal University", province: "Henan", city: "Xinyang" },
  { name: "Zhengzhou University", province: "Henan", city: "Zhengzhou" },

  // Hubei
  { name: "Huazhong University of Science and Technology", province: "Hubei", city: "Wuhan" },
  { name: "Hubei University", province: "Hubei", city: "Wuhan" },
  { name: "Wuhan University", province: "Hubei", city: "Wuhan" },
  { name: "Wuhan University of Technology", province: "Hubei", city: "Wuhan" },

  // Hunan
  { name: "Hunan University", province: "Hunan", city: "Changsha" },

  // Jiangsu
  { name: "China Pharmaceutical University", province: "Jiangsu", city: "Nanjing" },
  { name: "Nanjing Medical University", province: "Jiangsu", city: "Nanjing" },
  { name: "Nanjing University of Aeronautics and Astronautics", province: "Jiangsu", city: "Nanjing" },
  { name: "Nanjing University of Chinese Medicine", province: "Jiangsu", city: "Nanjing" },
  { name: "Nanjing University of Information Science and Technology", province: "Jiangsu", city: "Nanjing" },
  { name: "Nanjing University of Science and Technology", province: "Jiangsu", city: "Nanjing" },
  { name: "Southeast University", province: "Jiangsu", city: "Nanjing" },
  { name: "Xi'an Jiaotong-Liverpool University", province: "Jiangsu", city: "Suzhou" },
  { name: "Jiangnan University", province: "Jiangsu", city: "Wuxi" },
  { name: "China University of Mining and Technology", province: "Jiangsu", city: "Xuzhou" },
  { name: "Jiangsu University", province: "Jiangsu", city: "Zhenjiang" },

  // Jiangxi
  { name: "Nanchang Hangkong University", province: "Jiangxi", city: "Nanchang" },
  { name: "Nanchang Institute of Technology", province: "Jiangxi", city: "Nanchang" },
  { name: "Nanchang University", province: "Jiangxi", city: "Nanchang" },

  // Jilin
  { name: "Changchun University of Science and Technology", province: "Jilin", city: "Changchun" },
  { name: "Jilin Jianzhu University", province: "Jilin", city: "Changchun" },

  // Liaoning
  { name: "Dalian Medical University", province: "Liaoning", city: "Dalian" },
  { name: "Dalian University of Foreign Languages", province: "Liaoning", city: "Dalian" },
  { name: "Liaoning Normal University", province: "Liaoning", city: "Dalian" },
  { name: "Liaoning Petrochemical University", province: "Liaoning", city: "Fushun" },
  { name: "Bohai University", province: "Liaoning", city: "Jinzhou" },
  { name: "Jinzhou Medical University", province: "Liaoning", city: "Jinzhou" },
  { name: "Liaoning University of Technology", province: "Liaoning", city: "Jinzhou" },
  { name: "China Medical University", province: "Liaoning", city: "Shenyang" },
  { name: "Liaoning Communication University", province: "Liaoning", city: "Shenyang" },
  { name: "Shenyang Aerospace University", province: "Liaoning", city: "Shenyang" },

  // Shandong
  { name: "Shandong University of Aeronautics", province: "Shandong", city: "Binzhou" },
  { name: "Shandong Agriculture and Engineering University", province: "Shandong", city: "Jinan" },
  { name: "Shandong Jiaotong University", province: "Shandong", city: "Jinan" },
  { name: "Shandong University", province: "Shandong", city: "Jinan" },
  { name: "Liaocheng University", province: "Shandong", city: "Liaocheng" },
  { name: "China University of Petroleum (East China)", province: "Shandong", city: "Qingdao" },
  { name: "Ocean University of China", province: "Shandong", city: "Qingdao" },
  { name: "Qingdao University of Technology", province: "Shandong", city: "Qingdao" },
  { name: "Shandong University of Science and Technology", province: "Shandong", city: "Qingdao" },
  { name: "Shandong University of Technology", province: "Shandong", city: "Zibo" },

  // Shanghai
  { name: "Donghua University", province: "Shanghai", city: "Shanghai" },
  { name: "East China Normal University", province: "Shanghai", city: "Shanghai" },
  { name: "East China University of Science and Technology", province: "Shanghai", city: "Shanghai" },
  { name: "Fudan University", province: "Shanghai", city: "Shanghai" },
  { name: "Shanghai International Studies University", province: "Shanghai", city: "Shanghai" },
  { name: "The Sino-British College, University of Shanghai for Science and Technology", province: "Shanghai", city: "Shanghai" },

  // Sichuan
  { name: "Sichuan University", province: "Sichuan", city: "Chengdu" },
  { name: "Southwestern University of Finance and Economics", province: "Sichuan", city: "Chengdu" },
  { name: "Leshan Normal University", province: "Sichuan", city: "Leshan" },

  // Tianjin
  { name: "Tianjin Medical University", province: "Tianjin", city: "Tianjin" },
  { name: "Tianjin University of Finance and Economics", province: "Tianjin", city: "Tianjin" },

  // Yunnan
  { name: "Kunming University of Science and Technology", province: "Yunnan", city: "Kunming" },

  // Zhejiang
  { name: "Zhejiang A&F University", province: "Zhejiang", city: "Hangzhou" },
  { name: "Zhejiang Gongshang University", province: "Zhejiang", city: "Hangzhou" },
  { name: "Zhejiang University of Science and Technology", province: "Zhejiang", city: "Hangzhou" },
  { name: "Lishui University", province: "Zhejiang", city: "Lishui" },
  { name: "Wenzhou Medical University", province: "Zhejiang", city: "Wenzhou" },
  { name: "Wenzhou University", province: "Zhejiang", city: "Wenzhou" },
];

export default function UniversityDirectory() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProvince, setSelectedProvince] = useState<string>('All');

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

  return (
    <div className="space-y-8">
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
            Showing <strong className="text-brand-dark">{filteredUniversities.length}</strong> institutions
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
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredUniversities.map((uni, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-pink hover:shadow-soft transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-2 py-0.5 rounded-full">
                  {uni.province}
                </span>
                <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                  <MapPin size={12} />
                  {uni.city}
                </span>
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-brand-dark group-hover:text-brand-pink transition-colors">
                {uni.name}
              </h4>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
              <Link
                href={`/contact?university=${encodeURIComponent(uni.name)}`}
                className="text-xs font-bold text-brand-pink hover:underline inline-flex items-center gap-1"
              >
                <span>Discuss Admission</span>
                <ArrowRight size={12} />
              </Link>
              <a
                href={`https://www.google.com/search?q=${encodeURIComponent(uni.name + " China official website")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-semibold text-slate-400 hover:text-slate-600 inline-flex items-center gap-1"
                title="Search Official Website"
              >
                <span>Official Site</span>
                <ExternalLink size={10} />
              </a>
            </div>
          </div>
        ))}
      </div>

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
