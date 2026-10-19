"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  DollarSign,
  AlertCircle,
  ArrowRight,
  GraduationCap,
  Stethoscope,
  Sparkles,
  Info
} from 'lucide-react';

interface TuitionRow {
  subject: string;
  institution: string;
  city: string;
  tuition: string;
}

const BACHELOR_TUITION: TuitionRow[] = [
  { subject: "Aeronautical Engineering", institution: "Nanchang Hangkong University", city: "Nanchang", tuition: "RMB 16,000-20,000 / year" },
  { subject: "Aeronautical Engineering", institution: "Nanjing University of Aeronautics and Astronautics", city: "Nanjing", tuition: "RMB 23,900-27,900 / year" },
  { subject: "Aeronautical Engineering / Aircraft Manufacturing", institution: "Shenyang Aerospace University", city: "Shenyang", tuition: "RMB 18,000-22,000 / year" },
  { subject: "Automobile Service", institution: "Shandong Jiaotong University", city: "Jinan", tuition: "RMB 24,800-28,800 / year" },
  { subject: "Biological Engineering", institution: "Liaocheng University", city: "Liaocheng", tuition: "RMB 24,800-28,800 / year" },
  { subject: "Civil Engineering with an Architecture Focus", institution: "Jilin Jianzhu University", city: "Changchun", tuition: "RMB 18,000-22,000 / year" },
  { subject: "Computer Science and Technology / Software Engineering", institution: "Wenzhou University", city: "Wenzhou", tuition: "RMB 20,000-24,000 / year" },
  { subject: "Mechanical Design, Manufacturing and Automation", institution: "Huazhong University of Science and Technology", city: "Wuhan", tuition: "RMB 30,000-34,000 / year" },
  { subject: "Mechanical Engineering and Automation", institution: "Wuhan University of Technology", city: "Wuhan", tuition: "RMB 20,000-24,000 / year" },
  { subject: "Petroleum Engineering", institution: "China University of Petroleum (East China)", city: "Qingdao", tuition: "RMB 20,000-24,000 / year" },
];

const MASTER_TUITION: TuitionRow[] = [
  { subject: "Civil Engineering", institution: "Wenzhou University", city: "Wenzhou", tuition: "RMB 22,000-26,000 / year" },
  { subject: "Computer Science and Technology", institution: "Huazhong University of Science and Technology", city: "Wuhan", tuition: "RMB 38,000-42,000 / year" },
  { subject: "Computer Science and Technology", institution: "Liaoning University of Technology", city: "Jinzhou", tuition: "RMB 24,000-28,000 / year" },
  { subject: "Information and Telecommunications Engineering", institution: "Wuhan University of Technology", city: "Wuhan", tuition: "RMB 30,000-34,000 / year" },
  { subject: "Mechanical Engineering", institution: "Changchun University of Science and Technology", city: "Changchun", tuition: "RMB 22,000-26,000 / year" },
  { subject: "Mining Engineering", institution: "China University of Mining and Technology", city: "Xuzhou", tuition: "RMB 16,200-20,200 / year" },
  { subject: "Petroleum Engineering", institution: "China University of Petroleum (East China)", city: "Qingdao", tuition: "RMB 24,000-28,000 / year" },
  { subject: "Power Machinery and Engineering", institution: "Shandong University of Science and Technology", city: "Qingdao", tuition: "RMB 23,000-27,000 / year" },
  { subject: "Software Engineering", institution: "Bohai University", city: "Jinzhou", tuition: "RMB 16,000-20,000 / year" },
];

const MBBS_TUITION: TuitionRow[] = [
  { subject: "Clinical Medicine / MBBS", institution: "China Medical University", city: "Shenyang", tuition: "RMB 40,000-44,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Chongqing Medical University", city: "Chongqing", tuition: "RMB 30,000-34,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Dalian Medical University", city: "Dalian", tuition: "RMB 42,000-46,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Fujian Medical University", city: "Fuzhou", tuition: "RMB 35,000-39,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Huazhong University of Science and Technology", city: "Wuhan", tuition: "RMB 40,000-44,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Jinzhou Medical University", city: "Jinzhou", tuition: "RMB 38,000-42,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Shandong University", city: "Jinan", tuition: "RMB 45,000-49,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Southeast University", city: "Nanjing", tuition: "RMB 32,800-36,800 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Tianjin Medical University", city: "Tianjin", tuition: "RMB 48,000-52,000 / year" },
  { subject: "Clinical Medicine / MBBS", institution: "Wenzhou Medical University", city: "Wenzhou", tuition: "RMB 30,000-34,000 / year" },
];

export default function TuitionPlanningTables() {
  const [activeTab, setActiveTab] = useState<'bachelor' | 'master' | 'mbbs'>('bachelor');

  const rows = activeTab === 'bachelor' 
    ? BACHELOR_TUITION 
    : activeTab === 'master' 
    ? MASTER_TUITION 
    : MBBS_TUITION;

  return (
    <div className="space-y-6">
      {/* Tab Switchers */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-slate-200/80 shadow-soft">
        <div className="grid grid-cols-3 sm:flex rounded-xl sm:rounded-full bg-slate-100 p-1 border border-slate-200 text-xs sm:text-sm font-bold w-full sm:w-auto">
          <button
            type="button"
            onClick={() => setActiveTab('bachelor')}
            className={`px-2 sm:px-6 py-2 rounded-lg sm:rounded-full transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${
              activeTab === 'bachelor'
                ? 'bg-brand-pink text-white shadow-sm'
                : 'text-slate-600 hover:text-brand-dark'
            }`}
          >
            <GraduationCap size={15} className="flex-shrink-0" />
            <span>Bachelor’s <span className="hidden sm:inline">({BACHELOR_TUITION.length})</span></span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('master')}
            className={`px-2 sm:px-6 py-2 rounded-lg sm:rounded-full transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${
              activeTab === 'master'
                ? 'bg-brand-green text-white shadow-sm'
                : 'text-slate-600 hover:text-brand-dark'
            }`}
          >
            <Sparkles size={15} className="flex-shrink-0" />
            <span>Master’s <span className="hidden sm:inline">({MASTER_TUITION.length})</span></span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('mbbs')}
            className={`px-2 sm:px-6 py-2 rounded-lg sm:rounded-full transition-all flex items-center justify-center gap-1.5 sm:gap-2 text-xs sm:text-sm ${
              activeTab === 'mbbs'
                ? 'bg-brand-purple text-white shadow-sm'
                : 'text-slate-600 hover:text-brand-dark'
            }`}
          >
            <Stethoscope size={15} className="flex-shrink-0" />
            <span>MBBS <span className="hidden sm:inline">({MBBS_TUITION.length})</span></span>
          </button>
        </div>

        <span className="text-[11px] sm:text-xs font-semibold text-slate-400">
          Planning estimates · Updated Oct 2026
        </span>
      </div>

      {/* Official Notice Box */}
      <div className="p-4 sm:p-5 rounded-2xl bg-brand-pink/5 border border-brand-pink/20 text-xs sm:text-sm text-brand-dark flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <AlertCircle size={17} className="text-brand-pink flex-shrink-0 mt-0.5" />
          <p className="leading-relaxed text-slate-700">
            <strong className="text-brand-dark">Indicative Planning Ranges:</strong> The tuition table contains indicative planning ranges. They are not verified current university quotations. Visit the university’s official website to check the updated fee for your programme and intake.
          </p>
        </div>
        <Link 
          href="/how-we-check" 
          className="text-xs font-bold text-brand-pink hover:underline whitespace-nowrap self-start sm:self-center flex items-center gap-1 flex-shrink-0"
        >
          <span>How we check information</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* Responsive Table */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200/80 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-4 px-6">Subject to Research</th>
                <th className="py-4 px-6">Institution</th>
                <th className="py-4 px-6">City</th>
                <th className="py-4 px-6 text-right">Approximate Annual Tuition</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                  <td className="py-4 px-6 font-bold text-brand-dark">
                    {row.subject}
                  </td>
                  <td className="py-4 px-6 text-slate-700 font-medium">
                    {row.institution}
                  </td>
                  <td className="py-4 px-6 text-slate-500 font-medium">
                    {row.city}
                  </td>
                  <td className="py-4 px-6 text-right font-extrabold text-brand-pink whitespace-nowrap">
                    {row.tuition}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Disclaimers & Advice Box */}
      <div className="p-6 rounded-3xl bg-amber-50 border border-amber-200/80 text-amber-950 space-y-3">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
          <AlertCircle size={16} className="text-amber-700" />
          <span>OTHER COSTS — Plan beyond tuition</span>
        </div>
        <p className="text-xs sm:text-sm font-medium leading-relaxed text-amber-900">
          Include accommodation (RMB 3,000–8,000/year), medical insurance (RMB 800/year), living expenses (RMB 1,200–2,500/month), visa extensions, and flight tickets in your full study budget. Visit the university’s official website to check the latest tuition notice.
        </p>
        <div className="pt-2 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors inline-flex items-center gap-1.5"
          >
            <span>Discuss my study budget</span>
            <ArrowRight size={14} />
          </Link>
          <Link
            href="/blogs/study-in-china-cost-from-bangladesh"
            className="px-6 py-2.5 rounded-full bg-white text-brand-dark text-xs font-bold border border-amber-300 hover:bg-amber-100 transition-colors"
          >
            Read Complete Budget Guide
          </Link>
        </div>
      </div>
    </div>
  );
}
