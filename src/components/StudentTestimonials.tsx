"use client";

import React, { useRef, useState } from 'react';
import Image from 'next/image';
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
      photoSrc: "/images/students-images/Aadnan Habib - Hankou University of Wuhan - Chinese Language Program.jpg",
      photoLabel: "Aadnan Habib - Hankou University of Wuhan",
      name: "Aadnan Habib",
      program: "Chinese Language Program",
      university: "Hankou University of Wuhan",
      city: "Wuhan, Hubei",
      quote: "ILP Study made my China admission journey straightforward. From initial university shortlisting to document review and final acceptance, the team guided me through every step.",
      year: "Enrolled Student"
    },
    {
      id: "02",
      photoSrc: "/images/students-images/Al Shahria Dip - Harbin Engineering University - Chinese Language Program.jpg",
      photoLabel: "Al Shahria Dip - Harbin Engineering University",
      name: "Al Shahria Dip",
      program: "Chinese Language Program",
      university: "Harbin Engineering University",
      city: "Harbin, Heilongjiang",
      quote: "From university shortlisting to dormitory reservation in Harbin, ILP Study handled every single detail with utmost honesty and clarity.",
      year: "Enrolled Student"
    },
    {
      id: "03",
      photoSrc: "/images/students-images/Fuad Hasanzade - Shanghai Jiaotong University - MBBS.jpg",
      photoLabel: "Fuad Hasanzade - Shanghai Jiao Tong University",
      name: "Fuad Hasanzade",
      program: "Clinical Medicine (MBBS)",
      university: "Shanghai Jiao Tong University",
      city: "Shanghai",
      quote: "The counselors in Dhaka explained the medical university requirements and tuition breakdown clearly. Highly recommend ILP Study for anyone planning to study medicine in China.",
      year: "Enrolled Student"
    },
    {
      id: "04",
      photoSrc: "/images/students-images/Jason Binoy Mondol - Harbin Engineering University - Chinese Language Program.jpg",
      photoLabel: "Jason Binoy Mondol - Harbin Engineering University",
      name: "Jason Binoy Mondol",
      program: "Chinese Language Program",
      university: "Harbin Engineering University",
      city: "Harbin, Heilongjiang",
      quote: "Transparent advice on living costs and semester preparations. The pre-departure briefing was thorough and gave my family complete peace of mind.",
      year: "Enrolled Student"
    },
    {
      id: "05",
      photoSrc: "/images/students-images/Maruf Hossen - Liaoning Communication University - Diploma - Business Studies.jpg",
      photoLabel: "Maruf Hossen - Liaoning Communication University",
      name: "Maruf Hossen",
      program: "Diploma in Business Studies",
      university: "Liaoning Communication University",
      city: "Shenyang, Liaoning",
      quote: "Fast responses on WhatsApp and direct submission through the university portal. ILP Study is genuinely dependable for Bangladeshi students.",
      year: "Enrolled Student"
    },
    {
      id: "06",
      photoSrc: "/images/students-images/Md Sujon Alam - Jiangxi University of Science and technology - Bachelor - International Trade and Economics.jpg",
      photoLabel: "Md Sujon Alam - Jiangxi University of Science and Technology",
      name: "Md Sujon Alam",
      program: "Bachelor in International Trade & Economics",
      university: "Jiangxi University of Science and Technology",
      city: "Ganzhou, Jiangxi",
      quote: "They matched me to an English-taught Economics degree within my family budget and guided me through tuition fee payments safely.",
      year: "Enrolled Student"
    },
    {
      id: "07",
      photoSrc: "/images/students-images/Md Ziyaadur Rahman - Harbin Engineering University - Chinese Language Program.jpg",
      photoLabel: "Md Ziyaadur Rahman - Harbin Engineering University",
      name: "Md Ziyaadur Rahman",
      program: "Chinese Language Program",
      university: "Harbin Engineering University",
      city: "Harbin, Heilongjiang",
      quote: "Their guidance on the physical examination and police clearance was invaluable. Everything was organised properly before submission.",
      year: "Enrolled Student"
    },
    {
      id: "08",
      photoSrc: "/images/students-images/Mohammad Sibbir Mahmud -Liaoning Communication University - Chinese Language Program.jpg",
      photoLabel: "Mohammad Sibbir Mahmud - Liaoning Communication University",
      name: "Mohammad Sibbir Mahmud",
      program: "Chinese Language Program",
      university: "Liaoning Communication University",
      city: "Shenyang, Liaoning",
      quote: "Professional counselors who know Chinese university policies inside out. I arrived on campus and settled into my dorm without any issues.",
      year: "Enrolled Student"
    },
    {
      id: "09",
      photoSrc: "/images/students-images/Priom Chandra Bhadra - Liaoning Communication University - Bachelor - International Trade and Economics.jpg",
      photoLabel: "Priom Chandra Bhadra - Liaoning Communication University",
      name: "Priom Chandra Bhadra",
      program: "Bachelor in International Trade & Economics",
      university: "Liaoning Communication University",
      city: "Shenyang, Liaoning",
      quote: "ILP Study evaluated my academic certificates thoroughly and secured my admission smoothly. Highly recommend them to anyone aiming for China.",
      year: "Enrolled Student"
    },
    {
      id: "10",
      photoSrc: "/images/students-images/Purab Tanvir Ahamed - Wuzhou University - Bachelor - International Trade and Economics.png",
      photoLabel: "Purab Tanvir Ahamed - Wuzhou University",
      name: "Purab Tanvir Ahamed",
      program: "Bachelor in International Trade & Economics",
      university: "Wuzhou University",
      city: "Wuzhou, Guangxi",
      quote: "Honest counseling without false promises. They explained scholarship criteria and semester dates clearly before I made any deposit.",
      year: "Enrolled Student"
    },
    {
      id: "11",
      photoSrc: "/images/students-images/Rafew Karim - University of South China - Bachelor - Civil Engineering.jpg",
      photoLabel: "Rafew Karim - University of South China",
      name: "Rafew Karim",
      program: "Bachelor in Civil Engineering",
      university: "University of South China",
      city: "Hengyang, Hunan",
      quote: "Great guidance for engineering aspirants. The Dhaka office verified all my transcripts and followed up with the university until my JW202 was issued.",
      year: "Enrolled Student"
    },
    {
      id: "12",
      photoSrc: "/images/students-images/Shahriar Julfiker - Wuzhou University - Bachelor - Artificial Intelligence.jpg",
      photoLabel: "Shahriar Julfiker - Wuzhou University",
      name: "Shahriar Julfiker",
      program: "Bachelor in Artificial Intelligence",
      university: "Wuzhou University",
      city: "Wuzhou, Guangxi",
      quote: "Enrolling in an Artificial Intelligence degree in China was seamless with ILP Study. Their step-by-step visa assistance was spot on.",
      year: "Enrolled Student"
    },
    {
      id: "13",
      photoSrc: "/images/students-images/SifatulIslam Tonmoy - Hunan Logistic College - Diploma - Modern Logistic Management.jpg",
      photoLabel: "Sifatul Islam Tonmoy - Hunan Logistic College",
      name: "Sifatul Islam Tonmoy",
      program: "Diploma in Modern Logistic Management",
      university: "Hunan Logistic College",
      city: "Changsha, Hunan",
      quote: "Personalized care from the first counseling session to airport arrival instructions. ILP Study is the top consultancy for China education.",
      year: "Enrolled Student"
    },
    {
      id: "14",
      photoSrc: "/images/students-images/Zobayer Hossain Shikder - Donguan University of Technology - Masters - Mechanical Engineering.jpg",
      photoLabel: "Zobayer Hossain Shikder - Dongguan University of Technology",
      name: "Zobayer Hossain Shikder",
      program: "Master in Mechanical Engineering",
      university: "Dongguan University of Technology",
      city: "Dongguan, Guangdong",
      quote: "Securing a Master's place with scholarship support in Dongguan was made easy by ILP Study's direct university filing and quick responses.",
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
    <section className="py-20 sm:py-28 bg-[#0f172a] relative overflow-hidden" id="testimonials">
      {/* Decorative Ambient Glows matching PageHeader */}
      <div className="absolute top-1/4 -left-20 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-brand-purple/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-brand-green/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
              STUDENT EXPERIENCES
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-3">
              Voices of Students in China
            </h2>
            <p className="text-sm sm:text-lg text-slate-300 font-normal leading-relaxed">
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
              className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800/80 text-white shadow-soft flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full border border-slate-700 bg-slate-800/80 text-white shadow-soft flex items-center justify-center hover:bg-brand-pink hover:border-brand-pink transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Infinite Scroll Marquee Container */}
      <div 
        ref={scrollContainerRef}
        className="w-full overflow-x-auto no-scrollbar py-4 cursor-grab active:cursor-grabbing relative z-10"
      >
        <div className="animate-marquee gap-6 px-4">
          {duplicatedList.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[320px] sm:w-[380px] bg-white rounded-3xl p-6 sm:p-7 border border-slate-100 shadow-card-dark hover:shadow-card-dark-hover hover:-translate-y-2 hover:border-brand-pink/50 transition-all duration-300 flex-shrink-0 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Passport Photo Slot + Student Info */}
                <div className="flex items-start gap-4 mb-5 pb-5 border-b border-slate-100">
                  {/* Student Photo Avatar */}
                  <PassportPhotoFrame
                    photoSrc={item.photoSrc}
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
                <p className="text-sm text-slate-700 leading-relaxed font-normal italic relative">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1 text-brand-green font-bold">
                  <GraduationCap size={13} />
                  <span>{item.year}</span>
                </span>
                <span className="text-slate-400 font-mono text-xs">
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
  studentName,
}: {
  photoSrc: string;
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
    <div className="relative w-16 h-20 sm:w-[70px] sm:h-[86px] flex-shrink-0 rounded-2xl overflow-hidden border-2 border-brand-purple/30 bg-slate-100 shadow-sm group-hover:border-brand-pink transition-colors">
      {!imgError ? (
        <Image
          src={encodeURI(photoSrc)}
          alt={studentName}
          fill
          sizes="(max-width: 640px) 64px, 70px"
          className="object-cover object-top"
          onError={() => setImgError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-brand-pink/15 via-brand-purple/15 to-brand-green/15 flex items-center justify-center text-center p-1">
          <span className="text-sm font-black text-brand-dark tracking-tight">
            {initials}
          </span>
        </div>
      )}

      {/* Decorative Border */}
      <div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none" />
    </div>
  );
}

