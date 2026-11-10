import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ArrowLeft,
  ArrowRight,
  Building2,
  BookOpen,
  Calendar,
  MessageSquare,
  SearchX
} from 'lucide-react';

export default function NotFound() {
  const quickDestinations = [
    {
      title: 'Browse 130+ Universities',
      desc: 'Explore Chinese institutions by province & city',
      href: '/universities',
      icon: Building2,
      color: 'text-brand-green bg-brand-green/10',
    },
    {
      title: 'Student Blog & Guides',
      desc: 'Admissions, scholarships & visa roadmaps',
      href: '/blogs',
      icon: BookOpen,
      color: 'text-brand-pink bg-brand-pink/10',
    },
    {
      title: 'CSCA Exam Dates',
      desc: 'Published 2026–2027 sessions & syllabus',
      href: '/csca',
      icon: Calendar,
      color: 'text-brand-purple bg-brand-purple/15',
    },
    {
      title: 'Free Consultation',
      desc: 'Speak directly with our counselors',
      href: '/contact',
      icon: MessageSquare,
      color: 'text-brand-dark bg-slate-100',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc] pt-32 sm:pt-36 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-4xl w-full space-y-8">
          <div className="bg-brand-dark text-white rounded-3xl sm:rounded-[40px] p-6 sm:p-12 text-center relative overflow-hidden shadow-2xl border border-slate-800">
            <div className="absolute -top-16 -right-16 w-64 h-64 bg-brand-pink/20 rounded-full blur-[90px] pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-brand-green/20 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-5">
              <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mx-auto text-brand-pink">
                <SearchX size={32} />
              </div>

              <span className="inline-block px-3.5 py-1 rounded-full bg-brand-pink/20 text-brand-pink border border-brand-pink/30 text-xs font-extrabold uppercase tracking-wider">
                Error 404 &middot; Page Not Found
              </span>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                We Couldn&apos;t Find That Page
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The link may have been moved, renamed, or mistyped. Explore the verified sections below or return to the ILP Study homepage.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link
                  href="/"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-brand-pink text-white font-bold text-sm hover:bg-[#d10079] shadow-glow-pink transition-all inline-flex items-center justify-center gap-2"
                >
                  <ArrowLeft size={16} />
                  <span>Back to Homepage</span>
                </Link>
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-all inline-flex items-center justify-center gap-2"
                >
                  <span>Contact Counselors</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickDestinations.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="p-5 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1 hover:border-brand-pink/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-10 h-10 rounded-xl ${item.color} flex items-center justify-center mb-3`}>
                      <Icon size={20} />
                    </div>
                    <h2 className="font-extrabold text-sm text-brand-dark group-hover:text-brand-pink transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-brand-pink">
                    <span>Explore</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

