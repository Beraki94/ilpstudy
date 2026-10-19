import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import PhotoSpace from '@/components/PhotoSpace';
import {
  Home,
  UtensilsCrossed,
  MessageCircle,
  Bus,
  HeartPulse,
  Scale,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MapPin,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Life in China | Preparation for Bangladeshi Students | ILP Study',
  description: 'Prepare for everyday student life in China: accommodation, food, language, transport and university support.',
  alternates: {
    canonical: '/student-life',
  },
};

export default function StudentLifePage() {
  const essentials = [
    {
      category: "SETTLE IN",
      title: "Campus Accommodation",
      desc: "Ask about room type (single, double, or shared), kitchen access, night curfews, dorm deposits, and the check-in process upon arrival.",
      icon: Home,
      color: "text-brand-pink",
      bgColor: "bg-brand-pink/10",
      badge: "On-Campus Dorms"
    },
    {
      category: "EVERYDAY ESSENTIALS",
      title: "Food, Halal Dining & Budget",
      desc: "Research campus dining halls and dietary options, including dedicated Halal canteens (清真餐厅) available at most state universities. Plan food and grocery spending in your monthly budget (RMB 1,200–2,000/mo).",
      icon: UtensilsCrossed,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10",
      badge: "Halal & Dining"
    },
    {
      category: "GET CONNECTED",
      title: "Language & Communication",
      desc: "Learn basic everyday Mandarin for ordering food and campus directions. Confirm how to purchase a local 5G SIM card, set up WeChat and Alipay with your passport, and connect to university Wi-Fi.",
      icon: MessageCircle,
      color: "text-brand-purple",
      bgColor: "bg-brand-purple/10",
      badge: "Phone & WeChat"
    },
    {
      category: "MOVE AROUND",
      title: "Transport & City Life",
      desc: "Learn your campus location and nearby metro/high-speed rail stations. Save arrival instructions, airport pickup points, and the university international student office's emergency contact numbers.",
      icon: Bus,
      color: "text-brand-dark",
      bgColor: "bg-brand-dark/10",
      badge: "Metro & High-Speed Rail"
    },
    {
      category: "STAY SUPPORTED",
      title: "Health & Wellbeing",
      desc: "Understand the comprehensive medical insurance policy for international students (RMB 800/year), campus clinics, and local hospitals for health check-ups and adjusting to seasonal climate changes.",
      icon: HeartPulse,
      color: "text-rose-600",
      bgColor: "bg-rose-50",
      badge: "Medical Insurance"
    },
    {
      category: "KNOW THE RULES",
      title: "Study, Attendance & Work",
      desc: "Understand strict class attendance rules (usually 80%+ required for visa renewals) and regulations regarding internships or part-time work approvals. Always obtain official university and PSB approval before starting any off-campus activity.",
      icon: Scale,
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      badge: "Visa Compliance"
    },
  ];

  const arrivalChecklist = [
    "Keep digital and paper copies of key documents (Passport, JW202/DQ, Admission Notice, Physical Exam)",
    "Save the university international office’s arrival emergency contact and dorm manager numbers",
    "Confirm dormitory reservation, opening times, and university official reporting dates",
    "Prepare suitable clothing for the city’s climate (winter coats for northern China vs temperate clothing for southeast)",
    "Plan your first month’s essential expenses in cash (RMB 2,000–3,000) before your local bank card is active",
    "Share your flight itinerary and travel plan with family in Bangladesh"
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Prepare for Life Beyond the Classroom" 
          description="Prepare for everyday student life in China: accommodation, food, language, transport and university support."
        />

        {/* Intro Section */}
        <section className="pt-12 pb-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 border border-slate-200/80 shadow-soft">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink block mb-1">
              MAKE CHINA FEEL FAMILIAR
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-dark tracking-tight">
              A Complete Everyday Guide for Bangladeshi Students
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium mt-2 leading-relaxed max-w-3xl">
              Moving abroad to study in China is an exciting milestone. With modern high-speed trains, cashless campus dining, international student dormitories, and vibrant student communities, preparation makes your transition smooth and enjoyable.
            </p>
          </div>
        </section>

        {/* 6 Core Life Dimensions */}
        <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {essentials.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl sm:rounded-[32px] p-5 sm:p-7 border border-slate-200/80 shadow-soft hover:shadow-xl transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.category}
                      </span>
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${item.bgColor} ${item.color}`}>
                        {item.badge}
                      </span>
                    </div>

                    <div className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${item.bgColor} ${item.color} flex items-center justify-center font-bold`}>
                      <Icon size={20} className="sm:w-[22px] sm:h-[22px]" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-extrabold text-brand-dark group-hover:text-brand-pink transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Photo Space: Campus Life in China */}
        <section className="py-6 sm:py-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoSpace
            title="Everyday Life & International Campus Communities in China"
            subtitle="Campus libraries, modern international student dormitories, halal dining facilities, and athletic grounds"
            badge="Campus Life in China"
            aspectRatio="aspect-[16/10] sm:aspect-[21/9]"
            fallbackSrc="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
            className="shadow-xl rounded-3xl sm:rounded-[40px]"
          />
        </section>

        {/* Arrival Checklist */}
        <section className="py-8 sm:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl sm:rounded-[40px] p-5 sm:p-8 md:p-12 border border-slate-200/80 shadow-soft space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                YOUR ARRIVAL CHECKLIST
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-brand-dark">
                Small Preparations. A Smoother Start.
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                Tick these essential travel preparation items before leaving Hazrat Shahjalal International Airport in Dhaka.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {arrivalChecklist.map((task, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                    {task}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-slate-500 font-medium">
                Need pre-departure orientation in our Dhaka office?
              </span>
              <Link
                href="/contact"
                className="px-6 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors inline-flex items-center gap-1.5"
              >
                <span>Book Pre-Departure Counseling</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
