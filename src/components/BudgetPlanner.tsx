"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Calculator,
  DollarSign,
  AlertCircle,
  HelpCircle,
  CheckCircle2,
  ArrowRight,
  RotateCcw,
  Sparkles
} from 'lucide-react';

export default function BudgetPlanner() {
  const [tuition, setTuition] = useState<number>(20000);
  const [accommodation, setAccommodation] = useState<number>(4000);
  const [monthlyLiving, setMonthlyLiving] = useState<number>(1500);
  const [oneTimeCosts, setOneTimeCosts] = useState<number>(3500);

  // Live total calculation: Tuition + Accommodation + (12 * monthlyLiving) + oneTimeCosts
  const totalAnnual = (tuition || 0) + (accommodation || 0) + ((monthlyLiving || 0) * 12) + (oneTimeCosts || 0);

  // Approximate BDT conversion reference (1 RMB ~ 16.5 BDT for estimation)
  const bdtEstimate = Math.round(totalAnnual * 16.5);

  const handleReset = () => {
    setTuition(20000);
    setAccommodation(4000);
    setMonthlyLiving(1500);
    setOneTimeCosts(3500);
  };

  return (
    <div className="space-y-10">
      {/* Interactive Calculator Card */}
      <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 border border-slate-200/80 shadow-soft">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block">
              THE COMPLETE PICTURE
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-brand-dark mt-0.5">
              Plan Beyond Tuition Fees
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
              Build your budget using current university quotes and your own spending expectations. Enter costs in RMB; this tool works locally in your browser.
            </p>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="text-xs font-bold text-slate-500 hover:text-brand-pink inline-flex items-center gap-1.5 self-start sm:self-auto"
          >
            <RotateCcw size={14} />
            <span>Reset Defaults</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Inputs Column */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Annual Tuition */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="tuitionInput" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Annual Tuition (RMB)
                </label>
                <span className="text-xs font-bold text-brand-pink">
                  RMB {tuition.toLocaleString()}
                </span>
              </div>
              <input
                id="tuitionInput"
                type="number"
                min={0}
                step={500}
                value={tuition}
                onChange={(e) => setTuition(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-pink/50 focus:border-brand-pink"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Typical range: RMB 16,000–34,000 / year for Bachelor’s; RMB 30,000–52,000 for MBBS.
              </span>
            </div>

            {/* 2. Annual Accommodation */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="dormInput" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Annual Accommodation (RMB)
                </label>
                <span className="text-xs font-bold text-brand-green">
                  RMB {accommodation.toLocaleString()}
                </span>
              </div>
              <input
                id="dormInput"
                type="number"
                min={0}
                step={200}
                value={accommodation}
                onChange={(e) => setAccommodation(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-green/50 focus:border-brand-green"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Typical range: RMB 3,000–8,000 / year for university international student dormitory.
              </span>
            </div>

            {/* 3. Monthly Living Costs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="livingInput" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Monthly Living Costs (RMB)
                </label>
                <span className="text-xs font-bold text-brand-purple">
                  RMB {monthlyLiving.toLocaleString()} / mo
                </span>
              </div>
              <input
                id="livingInput"
                type="number"
                min={0}
                step={100}
                value={monthlyLiving}
                onChange={(e) => setMonthlyLiving(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-purple/50 focus:border-brand-purple"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Food, transport, phone, daily items (x12 months = RMB {(monthlyLiving * 12).toLocaleString()}/yr).
              </span>
            </div>

            {/* 4. One-Time and Other Costs */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="otherInput" className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  One-time and Other Costs (RMB)
                </label>
                <span className="text-xs font-bold text-slate-700">
                  RMB {oneTimeCosts.toLocaleString()}
                </span>
              </div>
              <input
                id="otherInput"
                type="number"
                min={0}
                step={200}
                value={oneTimeCosts}
                onChange={(e) => setOneTimeCosts(Math.max(0, parseInt(e.target.value) || 0))}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm font-semibold text-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-dark/50"
              />
              <span className="text-[11px] text-slate-400 mt-1 block">
                Medical examination in China, residence permit (RMB 400–800), insurance (RMB 800), dorm deposit.
              </span>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark text-white rounded-[32px] p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink/15 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-green/15 rounded-full blur-[60px] pointer-events-none" />

            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-1">
                YOUR FIRST-YEAR ESTIMATE
              </span>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                RMB {totalAnnual.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 font-medium mt-1">
                ≈ BDT {bdtEstimate.toLocaleString()} (indicative conversion at 1 RMB ≈ 16.5 BDT)
              </p>
            </div>

            {/* Breakdown List */}
            <div className="relative z-10 divide-y divide-white/10 text-xs text-slate-300 font-medium space-y-2 pt-2">
              <div className="flex justify-between pt-2">
                <span>Tuition:</span>
                <strong className="text-white">RMB {tuition.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between pt-2">
                <span>Accommodation:</span>
                <strong className="text-white">RMB {accommodation.toLocaleString()}</strong>
              </div>
              <div className="flex justify-between pt-2">
                <span>Living Expenses (12 Months):</span>
                <strong className="text-white">RMB {(monthlyLiving * 12).toLocaleString()}</strong>
              </div>
              <div className="flex justify-between pt-2">
                <span>One-Time &amp; Registration:</span>
                <strong className="text-white">RMB {oneTimeCosts.toLocaleString()}</strong>
              </div>
            </div>

            <div className="relative z-10 pt-2 border-t border-white/10 space-y-3">
              <Link
                href="/contact"
                className="w-full py-3.5 rounded-full bg-brand-pink text-white font-bold text-xs text-center shadow-glow-pink hover:bg-[#d10079] transition-all flex items-center justify-center gap-2"
              >
                <span>Discuss Budget with Counselors</span>
                <ArrowRight size={14} />
              </Link>

              <Link
                href="/universities#tuition"
                className="w-full py-3 rounded-full bg-white/10 text-slate-200 font-semibold text-xs text-center hover:bg-white/20 transition-all block"
              >
                Compare Official University Tuition
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* Avoid Surprises Table */}
      <div className="bg-white rounded-[32px] p-6 sm:p-10 border border-slate-200/80 shadow-soft space-y-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
            AVOID SURPRISES
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-brand-dark">
            Include These in Your Plan
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
            Carefully verify each cost category with the university notice before finalizing family funding.
          </p>
        </div>

        <div className="overflow-x-auto pt-2">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="py-3 px-5">Cost Category</th>
                <th className="py-3 px-5">What to Confirm</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr>
                <td className="py-3.5 px-5 font-bold text-brand-dark">Tuition and accommodation</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Fee period, payment schedule, room type (single, double, quad) and required room deposits.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-brand-dark">Daily life</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Food, on-campus halal dining, local transport, mobile data (5G SIM), and personal toiletries.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-brand-dark">Health and insurance</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Required comprehensive medical insurance (RMB 800/yr) and any post-arrival medical check verification fee.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-brand-dark">Before departure</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Passport fee, Chinese embassy visa fee in Dhaka, notarizations, translations, and flights to China.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-brand-dark">Emergency buffer</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Keep an emergency reserve available in Bangladesh for unexpected travel or initial semester setup.</td>
              </tr>
              <tr>
                <td className="py-3.5 px-5 font-bold text-brand-dark">Scholarship support</td>
                <td className="py-3.5 px-5 text-slate-600 font-medium">Subtract only the coverage confirmed in a formal written admission notice and award certificate.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 font-medium mt-4">
          Fees and living costs vary by university, city, room type and lifestyle. Confirm current amounts with ILP Study before finalising your budget.
        </div>
      </div>
    </div>
  );
}
