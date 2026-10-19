"use client";

import React, { useState } from 'react';
import {
  CheckSquare,
  Square,
  Printer,
  RotateCcw,
  AlertCircle,
  FileText,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

interface ChecklistSection {
  title: string;
  badge: string;
  items: {
    id: string;
    title: string;
    desc: string;
  }[];
}

const CHECKLIST_SECTIONS: ChecklistSection[] = [
  {
    title: "Core Application Documents",
    badge: "Required for All Applicants",
    items: [
      {
        id: "core-passport",
        title: "Valid passport",
        desc: "Prepare a clear colour scan of the information page. Check the university’s passport-validity requirement. Include visa or residence pages if requested."
      },
      {
        id: "core-photo",
        title: "Recent photograph",
        desc: "Prepare a recent passport-style colour photo. Follow the university’s background colour, dimensions, file size and format instructions."
      },
      {
        id: "core-certificates",
        title: "Education certificates",
        desc: "Prepare all completed qualifications relevant to your application: SSC or O Levels, HSC or A Levels, bachelor’s and master’s certificates, as applicable. Submit the stages requested by the university."
      },
      {
        id: "core-transcripts",
        title: "Academic transcripts",
        desc: "Prepare complete official transcripts or mark sheets for the relevant qualifications, including all semesters or years and the grading scale where requested."
      },
      {
        id: "core-medical",
        title: "Medical examination form",
        desc: "If required, use the university’s specified Foreigner Physical Examination Form or accepted template. Complete every required section and attach the requested reports, photograph, doctor’s signature and hospital stamp. Check its validity period."
      },
      {
        id: "core-police",
        title: "Police clearance or non criminal record certificate",
        desc: "If required, obtain the certificate from the competent authority. Check the issue date, validity, translation and any authentication requirements."
      },
      {
        id: "core-bank",
        title: "Bank solvency certificate and bank statement",
        desc: "Prepare bank-issued financial evidence in the required name and format. Confirm the minimum balance, statement period and currency. If sponsored, provide the sponsor’s guarantee and identity or relationship evidence when requested. BDT 4-6 lakh is not a universal funding requirement."
      },
      {
        id: "core-language",
        title: "Language proficiency evidence",
        desc: "Submit IELTS, PTE Academic, Duolingo, TOEFL or an English-medium education certificate only where accepted. For Chinese-taught study, prepare the required HSK evidence. Check score, validity and verification rules."
      },
      {
        id: "core-cv",
        title: "Curriculum vitae",
        desc: "Prepare an accurate CV with your education, employment, projects, achievements and contact details. Keep dates consistent with your certificates. Submit where requested."
      },
      {
        id: "core-statement",
        title: "Personal statement or study plan",
        desc: "Explain your academic background, chosen subject, reasons for applying and future goals. Follow the university’s template, language and word limit."
      },
      {
        id: "core-video",
        title: "Introduction video",
        desc: "If requested, prepare a clear self-introduction. A 1-2 minute draft can be useful, but follow the university’s exact duration, language, topics, file format and size limit."
      },
    ]
  },
  {
    title: "Additional Documents for Postgraduate Applicants",
    badge: "Master’s & PhD Applicants",
    items: [
      {
        id: "pg-proposal",
        title: "Research proposal",
        desc: "For research-focused master’s and PhD applications, prepare the proposal or study plan requested by the programme. Include the research topic, objectives, approach and relevance. Follow its format and word limit."
      },
      {
        id: "pg-recs",
        title: "Academic recommendation letters",
        desc: "Provide the number and type of recommendations specified by the university. Confirm referee eligibility, signatures, contact details and whether direct submission is required."
      },
      {
        id: "pg-pubs",
        title: "Research publications and achievements",
        desc: "Prepare genuine publications, thesis abstracts, project summaries, patents or awards where relevant or required. Publications are not a universal requirement for every master’s or PhD programme."
      },
      {
        id: "pg-supervisor",
        title: "Supervisor or pre admission letter",
        desc: "Submit only if the programme or scholarship route requires it. Use the specified process; an informal reply is not automatically an admission offer."
      },
    ]
  },
  {
    title: "Other Documents Where Applicable",
    badge: "Specialized Pathways",
    items: [
      {
        id: "other-csca",
        title: "CSCA score report",
        desc: "For undergraduate applications that require CSCA, submit the relevant subject reports in the accepted format and by the specified deadline."
      },
      {
        id: "other-pregrad",
        title: "Pre graduation or enrolment certificate",
        desc: "If final qualifications are pending, check whether an official expected-graduation or enrolment certificate is accepted and when final documents must follow."
      },
      {
        id: "other-specific",
        title: "Other programme specific documents",
        desc: "Check for portfolios, work-experience evidence, scholarship forms, guardian or parental consent documents for minors, and any additional university forms."
      },
    ]
  },
  {
    title: "CHECK BEFORE SUBMITTING — Final Review",
    badge: "Final Quality Check",
    items: [
      {
        id: "final-consistent",
        title: "Consistency across documents",
        desc: "Names, passport number, dates and grades are consistent across all documents."
      },
      {
        id: "final-scans",
        title: "High quality scans",
        desc: "Scans are complete, upright, readable and within the portal’s file limits."
      },
      {
        id: "final-notary",
        title: "Translations & Notarization",
        desc: "Required Chinese or English translations and notarisation or authentication are arranged."
      },
      {
        id: "final-validity",
        title: "Validity periods",
        desc: "Medical, police and language documents remain valid at the required stage."
      },
      {
        id: "final-channel",
        title: "Deadline & submission channel",
        desc: "The latest university checklist, deadline and submission channel have been checked."
      },
      {
        id: "final-backups",
        title: "Backups saved",
        desc: "Original documents and a copy of the final application pack are saved."
      },
    ]
  }
];

export default function InteractiveChecklist() {
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const totalItems = CHECKLIST_SECTIONS.reduce((acc, sec) => acc + sec.items.length, 0);
  const checkedCount = Object.values(checkedIds).filter(Boolean).length;
  const progressPercent = Math.round((checkedCount / totalItems) * 100);

  const toggleCheck = (id: string) => {
    setCheckedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const resetAll = () => {
    setCheckedIds({});
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-8">
      {/* Interactive Progress Bar & Action Toolbar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-soft flex flex-col md:flex-row items-start md:items-center justify-between gap-6 print:hidden">
        <div className="space-y-2 w-full md:w-auto">
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
              Your Preparation Progress
            </span>
            <span className="text-xs font-extrabold px-2.5 py-0.5 rounded-full bg-brand-pink/10 text-brand-pink">
              {checkedCount} / {totalItems} Completed ({progressPercent}%)
            </span>
          </div>

          {/* Progress track */}
          <div className="w-full md:w-80 h-3 rounded-full bg-slate-100 overflow-hidden">
            <div 
              className="h-full bg-gradient-brand transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={resetAll}
            className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:text-brand-pink text-xs font-bold transition-colors inline-flex items-center gap-1.5"
          >
            <RotateCcw size={14} />
            <span>Reset</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="px-5 py-2.5 rounded-xl bg-brand-dark text-white hover:bg-brand-pink text-xs font-bold transition-colors inline-flex items-center gap-1.5 shadow-sm"
          >
            <Printer size={14} />
            <span>Print / Save Checklist</span>
          </button>
        </div>
      </div>

      {/* Checklist Sections */}
      <div className="space-y-8">
        {CHECKLIST_SECTIONS.map((section, sIdx) => (
          <div 
            key={sIdx}
            className="bg-white rounded-[32px] p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-4"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block">
                  {section.badge}
                </span>
                <h3 className="text-xl font-extrabold text-brand-dark mt-0.5">
                  {section.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3 pt-2">
              {section.items.map((item) => {
                const isChecked = !!checkedIds[item.id];
                return (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-start gap-3.5 ${
                      isChecked
                        ? 'bg-brand-green/5 border-brand-green/30'
                        : 'bg-slate-50 border-slate-200/70 hover:bg-white hover:border-slate-300'
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={isChecked ? `Uncheck ${item.title}` : `Check ${item.title}`}
                      className="mt-0.5 text-brand-dark hover:text-brand-pink transition-colors flex-shrink-0"
                    >
                      {isChecked ? (
                        <CheckSquare size={20} className="text-brand-green" />
                      ) : (
                        <Square size={20} className="text-slate-400" />
                      )}
                    </button>

                    <div className="space-y-0.5">
                      <strong className={`text-sm block font-bold transition-colors ${
                        isChecked ? 'text-brand-dark line-through opacity-70' : 'text-brand-dark'
                      }`}>
                        {item.title}
                      </strong>
                      <p className="text-xs text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Submission Instructions Box */}
      <div className="p-6 sm:p-8 rounded-[32px] bg-amber-50 border border-amber-200/80 text-amber-950 space-y-3">
        <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
          <AlertCircle size={18} className="text-amber-700" />
          <span>Important Document Safety Notice</span>
        </div>
        <p className="text-xs sm:text-sm font-medium leading-relaxed text-amber-900">
          Share documents with ILP Study through an agreed channel after confirming your application scope. <strong>Do not upload passport, medical or bank records through the general consultation form.</strong> This checklist is for university application preparation; visa and arrival documents require a separate review.
        </p>
        <div className="pt-2 flex flex-wrap gap-4 print:hidden">
          <Link
            href="/contact"
            className="px-6 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors"
          >
            Discuss Application with Counselors
          </Link>
          <a
            href="https://wa.me/8801895626831"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-brand-green text-white text-xs font-bold hover:bg-[#00a85d] transition-colors shadow-glow-green"
          >
            Direct WhatsApp (+880 1895 626831)
          </a>
        </div>
      </div>
    </div>
  );
}
