"use client";

import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  GraduationCap, 
  CheckCircle2, 
  Building2
} from 'lucide-react';

interface Testimonial {
  id: string;
  photoSrc: string;
  photoLabel: string;
  name: string;
  program: string;
  university: string;
  city: string;
  quote: string;
  year: string;
}

export default function StudentTestimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const testimonials: Testimonial[] = [
    {
      id: "01",
      photoSrc: "/images/students/ILP_Student_01.png",
      photoLabel: "Student Photo 01",
      name: "Tanvir Ahmed",
      program: "B.Eng Computer Science & Technology",
      university: "Nanjing University of Aeronautics and Astronautics",
      city: "Nanjing, Jiangsu",
      quote: "ILP Study made my China admission journey straightforward. From initial university shortlisting to document review and final acceptance, the team guided me through every step.",
      year: "Enrolled Student"
    },
    {
      id: "02",
      photoSrc: "/images/students/ILP_Student_02.png",
      photoLabel: "Student Photo 02",
      name: "Farhana Rahman",
      program: "Clinical Medicine (MBBS)",
      university: "Wuhan University",
      city: "Wuhan, Hubei",
      quote: "The counselors in Dhaka explained the medical university requirements and tuition breakdown clearly. Highly recommend ILP Study for anyone planning to study medicine in China.",
      year: "Enrolled Student"
    },
    {
      id: "03",
      photoSrc: "/images/students/ILP_Student_03.png",
      photoLabel: "Student Photo 03",
      name: "Md. Rafiqul Islam",
      program: "M.Sc Civil Engineering",
      university: "Beihang University",
      city: "Beijing",
      quote: "Their guidance on the physical examination and police clearance was invaluable. Everything was organised properly before submission.",
      year: "Enrolled Student"
    },
    {
      id: "04",
      photoSrc: "/images/students/ILP_Student_04.png",
      photoLabel: "Student Photo 04",
      name: "Nusrat Jahan",
      program: "International Economics & Trade",
      university: "Zhejiang University of Science & Technology",
      city: "Hangzhou, Zhejiang",
      quote: "Transparent advisory from day one. They helped me compare accommodation costs and semester dates so I knew exactly what to prepare.",
      year: "Enrolled Student"
    },
    {
      id: "05",
      photoSrc: "/images/students/ILP_Student_05.png",
      photoLabel: "Student Photo 05",
      name: "Sadman Sakib",
      program: "B.Sc Mechanical Engineering",
      university: "Shandong University",
      city: "Jinan, Shandong",
      quote: "I appreciated the honest feedback on program matching based on my HSC results. ILP Study saved me from submitting to ineligible portals.",
      year: "Enrolled Student"
    },
    {
      id: "06",
      photoSrc: "/images/students/ILP_Student_06.png",
      photoLabel: "Student Photo 06",
      name: "Ayesha Siddiqua",
      program: "B.Sc Pharmacy",
      university: "China Pharmaceutical University",
      city: "Nanjing, Jiangsu",
      quote: "Getting an admission letter from CPU was my dream. The Dhaka office supported me through the whole document verification and university portal filing.",
      year: "Enrolled Student"
    },
    {
      id: "07",
      photoSrc: "/images/students/ILP_Student_07.png",
      photoLabel: "Student Photo 07",
      name: "Kazi Nabil",
      program: "B.Eng Electrical Engineering",
      university: "Southeast University",
      city: "Nanjing, Jiangsu",
      quote: "Fast responses on WhatsApp and clear communication throughout the intake process. Very dependable team in Dhaka.",
      year: "Enrolled Student"
    },
    {
      id: "08",
      photoSrc: "/images/students/ILP_Student_08.png",
      photoLabel: "Student Photo 08",
      name: "Mahmudul Hasan",
      program: "Chinese Language Immersion",
      university: "Beijing Language and Culture University (BLCU)",
      city: "Beijing",
      quote: "The pre-departure briefings and visa guidance made campus arrival in Beijing stress-free. Very grateful to ILP Study.",
      year: "Enrolled Student"
    },
    {
      id: "09",
      photoSrc: "/images/students/ILP_Student_09.png",
      photoLabel: "Student Photo 09",
      name: "Tasnim Anjum",
      program: "B.Sc Biotechnology",
      university: "East China University of Science & Technology",
      city: "Shanghai",
      quote: "Clear cost estimates for dorms and food expenses in Shanghai helped my family plan our budget with complete peace of mind.",
      year: "Enrolled Student"
    },
    {
      id: "10",
      photoSrc: "/images/students/ILP_Student_10.png",
      photoLabel: "Student Photo 10",
      name: "Zubair Hossain",
      program: "B.Eng Software Engineering",
      university: "Wuhan University of Technology",
      city: "Wuhan, Hubei",
      quote: "From Bangladesh to China, ILP Study handled every query professionally. Their advice on study plans and recommendation letters made the difference.",
      year: "Enrolled Student"
    },
  ];

  // We duplicate the list to achieve a seamless, continuous infinite loop
  const duplicatedList = [...testimonials, ...testimonials];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden" id="testimonials">
      {/* Decorative Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-brand-pink/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-brand-green/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
              STUDENT EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-brand-dark tracking-tight mb-3">
              Voices of Students in China
            </h2>
            <p className="text-sm sm:text-lg text-slate-600 font-normal leading-relaxed">
              Read how Bangladeshi students navigated university selection, document preparation, and admissions with guidance from ILP Study.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <span className="text-xs text-slate-400 font-medium mr-2 hidden sm:inline-block">
              Hover to pause scroll
            </span>
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-700 hover:text-brand-pink hover:border-brand-pink transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-slate-200 bg-white shadow-soft flex items-center justify-center text-slate-700 hover:text-brand-pink hover:border-brand-pink transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar py-4 cursor-grab active:cursor-grabbing"
      >
        <div className="animate-marquee gap-6 px-4">
          {duplicatedList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all duration-300 flex-shrink-0 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Passport Photo Slot + Student Info */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-slate-100">
                  {/* Passport Photo Frame (254 x 236 aspect ratio) */}
                  <PassportPhotoFrame
                    photoSrc={item.photoSrc}
                    photoLabel={item.photoLabel}
                    studentName={item.name}
                  />

                  {/* Name and Degree */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="text-xs font-extrabold text-brand-dark truncate block">
                        {item.name}
                      </span>
                      <CheckCircle2 size={14} className="text-brand-green flex-shrink-0" />
                    </div>

                    <p className="text-xs font-semibold text-brand-pink leading-tight truncate">
                      {item.program}
                    </p>

                    <p className="text-[11px] text-slate-500 font-medium leading-tight mt-1 truncate">
                      {item.university}
                    </p>

                    <div className="flex items-center gap-1 text-[10px] text-slate-400 mt-0.5">
                      <Building2 size={11} className="flex-shrink-0" />
                      <span className="truncate">{item.city}</span>
                    </div>
                  </div>
                </div>

                {/* Star Rating */}
                <div className="flex items-center gap-1 mb-3 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal italic relative">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-slate-400">
                <span className="inline-flex items-center gap-1 text-brand-green">
                  <GraduationCap size={13} />
                  <span>{item.year}</span>
                </span>
                <span className="text-slate-300 font-mono text-[10px]">
                  #{item.id}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/**
 * PassportPhotoFrame Component
 * Dedicated 254 x 236 aspect ratio frame for student passport photos
 * Gracefully falls back to a clean placeholder with initials if image not yet uploaded
 */
function PassportPhotoFrame({
  photoSrc,
  photoLabel,
  studentName,
}: {
  photoSrc: string;
  photoLabel: string;
  studentName: string;
}) {
  const [imgError, setImgError] = useState(false);

  // Extract initials
  const initials = studentName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();

  return (
    <div className="relative w-16 h-[60px] sm:w-[72px] sm:h-[68px] flex-shrink-0 rounded-2xl overflow-hidden border-2 border-brand-purple/30 bg-slate-100 shadow-sm group-hover:border-brand-pink transition-colors">
      {!imgError ? (
        <img
          src={photoSrc}
          alt={`${studentName} - ${photoLabel}`}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-brand-pink/15 via-brand-purple/15 to-brand-green/15 flex flex-col items-center justify-center text-center p-1">
          <span className="text-xs font-black text-brand-dark tracking-tighter">
            {initials}
          </span>
          <span className="text-[7px] text-slate-500 font-semibold leading-none mt-0.5">
            Passport
          </span>
        </div>
      )}

      {/* Decorative Passport Photo Border Indicator */}
      <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
    </div>
  );
}

