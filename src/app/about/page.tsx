import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import PhotoSpace from '@/components/PhotoSpace';
import StudentTestimonials from '@/components/StudentTestimonials';
import { FacebookIcon, InstagramIcon } from '@/components/SocialLinks';
import {
  GraduationCap,
  Award,
  FileCheck2,
  BookOpenCheck,
  PlaneTakeoff,
  MessageSquare,
  MapPin,
  ArrowRight,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About ILP Study | Top China Education Consultancy in Bangladesh',
  description:
    'Learn about ILP Study (International Learning Pathways), Bangladesh’s trusted study in China education consultancy headquartered in Mirpur, Dhaka. Dedicated counselors for university admissions, CSC scholarships, CSCA prep, and JW202 visa guidance.',
  keywords: [
    'about ILP Study',
    'China education consultancy Bangladesh',
    'study in China agency Dhaka',
    'Mirpur education consultancy for China',
    'China scholarship consultants Bangladesh',
    'International Learning Pathways Dhaka',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About ILP Study | China Education Consultancy in Bangladesh',
    description:
      'Learn about ILP Study: Bangladesh’s dedicated education consultancy for 60+ Chinese universities, CSC scholarships, and student visas.',
    url: 'https://ilpstudy.com/about',
    siteName: 'ILP Study',
    images: [
      {
        url: '/aboutImage/abbout-ilp-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'About ILP Study — China Education Consultancy Dhaka',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About ILP Study | China Education Consultancy',
    description:
      'Meet ILP Study: professional university matching and scholarship guidance for Bangladeshi students studying in China.',
    images: ['/aboutImage/abbout-ilp-banner.jpg'],
  },
};

export default function AboutPage() {
  const services = [
    {
      num: "01",
      title: "University and programme selection",
      desc: "Careful matching of Bachelor’s, Chinese language, Foundation, Diploma, Master’s, and PhD routes based on your academic background, preferred city in China, and career aspirations.",
      link: "/contact",
      linkText: "Request Shortlisting",
      icon: GraduationCap,
      color: "bg-brand-pink",
    },
    {
      num: "02",
      title: "Scholarship application guidance",
      desc: "Transparent advisory covering Chinese Government Scholarships (CSC Type A & Type B), provincial government awards, and institutional full or partial tuition waivers.",
      link: "/blogs/full-scholarship-or-tuition-waiver",
      linkText: "Explore Scholarship Guide",
      icon: Award,
      color: "bg-brand-green",
    },
    {
      num: "03",
      title: "Document preparation and application support",
      desc: "Comprehensive review of source documents: academic transcripts, notarized certificates, Foreigner Physical Examination forms, police clearance records, and study proposals.",
      link: "/blogs/student-visa-china-from-bangladesh-x1-x2",
      linkText: "View Document Checklist",
      icon: FileCheck2,
      color: "bg-brand-purple",
    },
    {
      num: "04",
      title: "CSCA information and preparation guidance",
      desc: "Independent student guidance on the China Standardized Competence Assessment (CSCA), syllabus components, eligibility criteria, and preparation sequence for undergraduate routes.",
      link: "/blogs/csca-exam-preparation-and-syllabus-in-china",
      linkText: "Read CSCA Guide",
      icon: BookOpenCheck,
      color: "bg-brand-dark",
    },
    {
      num: "05",
      title: "Visa document and arrival guidance",
      desc: "End-to-end guidance from university admission notice and JW202/DQ verification to Dhaka embassy visa (X1/X2) appointment, pre-departure orientation, and campus registration.",
      link: "/blogs/after-admission-to-visa-in-china-timeline",
      linkText: "Read Visa Timeline",
      icon: PlaneTakeoff,
      color: "bg-brand-pink",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="About ILP Study" 
          description="Meet ILP Study, a Bangladesh-based education consultancy supporting university selection, scholarship planning, documents and study applications in China."
        />

        {/* ABOUT US: Story & Identity - Full width on mobile, rounded card on desktop */}
        <section className="pt-2 pb-4 sm:py-16 lg:py-24 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none sm:rounded-[40px] px-5 py-8 sm:p-14 lg:p-16 border-y sm:border border-slate-100 sm:border-slate-200/90 shadow-none sm:shadow-card">
            <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-2">
                    ABOUT US
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-black text-brand-dark tracking-tight leading-tight">
                    Your Study in China Journey Starts Here
                  </h2>
                </div>

                <div className="space-y-4 text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  <p>
                    ILP Study is a Bangladesh-based education consultancy helping students explore study opportunities in China.
                  </p>
                  <p>
                    We provide guidance on university and programme selection, scholarship opportunities, document preparation and application procedures.
                  </p>
                  <p className="p-4 rounded-2xl bg-brand-light border border-slate-200/80 text-brand-dark font-medium text-base">
                    Our guidance starts with your academic background, preferred subject, budget and target intake to help you explore suitable study options.
                  </p>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3 text-sm text-slate-600">
                  <MapPin size={18} className="text-brand-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark block font-bold">Dhaka Office:</strong>
                    <span>Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Mirpur, Dhaka-1216, Bangladesh.</span>
                  </div>
                </div>

              </div>

              {/* Photo Space: Office Suite */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <PhotoSpace
                  title="ILP Study Consultation Suite in Dhaka"
                  subtitle="East Shewrapara, Mirpur, Dhaka — Personalized university shortlisting and document guidance"
                  badge="Dhaka Headquarters"
                  aspectRatio="aspect-[16/10]"
                  fallbackSrc="/aboutImage/ilp-office-room-1.jpg?v=20261108"
                  className="shadow-lg rounded-3xl"
                />

                <div className="p-6 rounded-3xl bg-brand-dark text-white shadow-card-dark border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Direct Counseling</span>
                    <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-slate-300">Mirpur Suite</span>
                  </div>
                  <h4 className="text-lg font-black text-white">Personalized China Advisory</h4>
                  <p className="text-slate-300 text-xs font-medium mt-1 mb-3">
                    In-person guidance for students &amp; families across Dhaka and all districts of Bangladesh.
                  </p>
                  <div className="text-xs space-y-1 text-slate-300 border-t border-white/10 pt-3">
                    <p>Hotline: <strong className="text-white">+880 1602 566398</strong></p>
                    <p>WhatsApp: <strong className="text-brand-green">+880 1895 626831</strong></p>
                    <p>WhatsApp &amp; WeChat: <strong className="text-brand-green">+86 156 8568 9193</strong></p>
                    <p>Email: <strong className="text-brand-pink">info@ilpstudy.com</strong></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* OUR SERVICES: Support for your study plans */}
        <section className="py-16 sm:py-24 bg-[#f1f5f9] border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-2">
                OUR SERVICES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-dark tracking-tight mb-3">
                Support for Your Study Plans
              </h2>
              <p className="text-slate-600 text-base sm:text-lg font-normal">
                Structured, end-to-end guidance tailored for Bangladeshi students applying to Chinese universities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={idx}
                    className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-brand-pink/50 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-white ${item.color} shadow-sm group-hover:scale-105 transition-transform`}>
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-black text-slate-400 group-hover:text-brand-pink transition-colors">
                          {item.num}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-sm text-slate-600 font-medium leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link 
                        href={item.link}
                        className="text-xs font-bold text-brand-dark group-hover:text-brand-pink transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{item.linkText}</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* Bonus 6th Card: Authentic Knowledge Base */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark text-white shadow-card-dark hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-brand-green/20 text-brand-green">
                      <Sparkles size={22} />
                    </div>
                    <span className="text-xs font-bold text-brand-green uppercase tracking-wider">
                      Blog &amp; Knowledge Base
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white mb-3">
                    Study in China Blog &amp; Guides
                  </h3>

                  <p className="text-sm text-slate-300 font-medium leading-relaxed">
                    Explore our comprehensive editorial library of guides and blog articles covering CSCA exam syllabuses, MBBS rules, March vs. September intakes, and living expenses in China.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link 
                    href="/blogs"
                    className="text-xs font-bold text-brand-green hover:underline inline-flex items-center gap-1.5"
                  >
                    <span>Browse Blog &amp; Guides</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* OPERATIONAL FACTS */}
        <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-2">
                Operational Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4">
                Committed to Student Success
              </h2>
              <p className="text-slate-300 text-base">
                Transparent student guidance, application assistance, and direct institutional support for higher education in China.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Brand Name</div>
                <div className="text-xl sm:text-3xl lg:text-4xl font-black text-brand-pink my-auto leading-tight">ILP Study</div>
                <div className="text-xs text-slate-400 mt-2">Education Consultancy</div>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Primary Focus</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-purple my-auto leading-tight">China</div>
                <div className="text-xs text-slate-400 mt-2">Higher Education</div>
              </div>

              <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-between">
                <div className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Dhaka Head Office</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-white my-auto leading-tight">Mirpur</div>
                <div className="text-xs text-slate-400 mt-2">In-person consultations</div>
              </div>
            </div>
          </div>
        </section>

        {/* STUDENT EXPERIENCES & VOICES */}
        <StudentTestimonials />

        {/* PHOTO SPACE: China Campus Arrival */}
        <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoSpace
            title="Student Pre-Departure Briefing & Campus Arrival in China"
            subtitle="Guidance through university admission, Chinese embassy visa preparation in Dhaka, dorm check-in, and campus registration"
            badge="Campus Arrival Support"
            aspectRatio="aspect-[16/10] sm:aspect-[21/9]"
            fallbackSrc="/aboutImage/abbout-ilp-banner.jpg?v=20261108"
            objectPosition="center 50%"
            className="shadow-xl rounded-[40px]"
          />
        </section>

        {/* CONTACT US: Speak with ILP Study */}
        <section className="py-16 sm:py-24 bg-[#f8fafc] border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-brand-dark text-white rounded-[40px] p-8 sm:p-14 lg:p-16 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-80 h-80 bg-brand-pink/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-green/20 rounded-full blur-[100px]" />
              
              <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
                <div>
                  <span className="text-brand-green text-xs font-bold uppercase tracking-wider block mb-2">
                    CONTACT US
                  </span>
                  <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                    Speak with ILP Study
                  </h2>
                  <p className="text-slate-300 text-sm sm:text-base mt-2">
                    Connect directly with our counselors to discuss your target university and scholarship path.
                  </p>
                </div>

                {/* Contact items grid */}
                <div className="grid sm:grid-cols-3 gap-4 pt-4 text-left">
                  
                  {/* Hotline */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold uppercase text-slate-400 block mb-1">
                      Hotline
                    </span>
                    <a href="tel:+8801602566398" className="text-sm sm:text-base font-bold text-white hover:text-brand-pink transition-colors">
                      +880 1602 566398
                    </a>
                  </div>

                  {/* WhatsApp */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold uppercase text-brand-green block mb-1">
                      WhatsApp
                    </span>
                    <a 
                      href="https://wa.me/8801895626831" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-brand-green transition-colors"
                    >
                      +880 1895 626831
                    </a>
                  </div>

                  {/* WhatsApp & WeChat */}
                  <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                    <span className="text-[10px] font-bold uppercase text-brand-purple block mb-1">
                      WhatsApp &amp; WeChat
                    </span>
                    <a 
                      href="https://wa.me/8615685689193"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base font-bold text-white hover:text-brand-pink transition-colors"
                    >
                      +86 156 8568 9193
                    </a>
                  </div>

                </div>

                {/* Address */}
                <p className="text-xs sm:text-sm text-slate-400 font-medium">
                  Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Mirpur, Dhaka-1216, Bangladesh.
                </p>

                {/* Action button */}
                <div className="pt-4 flex flex-wrap justify-center gap-4">
                  <Link
                    href="/contact"
                    className="px-8 py-4 rounded-full bg-brand-pink text-white font-bold hover:bg-[#d10079] shadow-glow-pink transition-all flex items-center gap-2 text-sm sm:text-base"
                  >
                    <span>Book a free consultation</span>
                    <ArrowRight size={18} />
                  </Link>

                  <a
                    href="https://wa.me/8801895626831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 rounded-full bg-brand-green text-white font-bold hover:bg-[#00a85d] shadow-glow-green transition-all flex items-center gap-2 text-sm sm:text-base"
                  >
                    <MessageSquare size={18} />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>

                {/* Social Channels */}
                <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                  <span className="text-xs text-slate-400 font-medium">Follow ILP Study:</span>
                  <a
                    href="https://www.facebook.com/ilpstudy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow ILP Study on Facebook"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#1877F2] text-xs font-semibold text-slate-200 hover:text-white transition-all border border-white/10 hover:border-[#1877F2]"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-[#1877F2] group-hover:text-white" />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/ilpstudy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow ILP Study on Instagram"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#E4405F] text-xs font-semibold text-slate-200 hover:text-white transition-all border border-white/10 hover:border-[#E4405F]"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F] group-hover:text-white" />
                    <span>Instagram</span>
                  </a>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
