import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import BudgetPlanner from '@/components/BudgetPlanner';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cost of Studying in China from Bangladesh (RMB & BDT) | ILP Study',
  description:
    'Calculate the true cost of studying in China for Bangladeshi students. Interactive budget planner covering annual tuition, campus accommodation, meals, medical insurance, residence permits, and RMB to BDT currency conversion.',
  keywords: [
    'cost of studying in China from Bangladesh',
    'China student living expenses RMB BDT',
    'China university tuition fees',
    'hostel fee Chinese universities',
    'monthly expenses for students in China',
  ],
  alternates: {
    canonical: '/budget',
  },
  openGraph: {
    title: 'Cost of Studying in China from Bangladesh (RMB & BDT) | ILP Study',
    description:
      'Plan your tuition, campus housing, meals, and flight expenses with ILP Study’s interactive China student budget planner.',
    url: 'https://ilpstudy.com/budget',
    siteName: 'ILP Study',
    images: [
      {
        url: '/blogImage/12-study-in-china-cost-from-bangladesh.jpg',
        width: 1200,
        height: 630,
        alt: 'Cost of Studying in China from Bangladesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cost of Studying in China Calculator | ILP Study',
    description:
      'Calculate tuition, accommodation, and living costs in China for Bangladeshi students.',
    images: ['/blogImage/12-study-in-china-cost-from-bangladesh.jpg'],
  },
};

export default function BudgetPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc]">
        
        {/* Page Header */}
        <PageHeader 
          title="Student Budget Planner" 
          description="Plan tuition, accommodation, and initial one-time costs for studying in China with an interactive RMB budget planner."
        />

        {/* Intro Navigation Bar - Seamless on mobile */}
        <section className="pt-2 pb-2 sm:pt-10 sm:pb-4 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-5 py-6 sm:p-5 rounded-none sm:rounded-2xl bg-white border-y sm:border border-slate-100 sm:border-slate-200/80 sm:shadow-xs">
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              Compare approximate tuition ranges by university and subject, then confirm the updated fee for your intake.
            </div>
            <Link
              href="/universities#tuition"
              className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors whitespace-normal sm:whitespace-nowrap text-center inline-flex items-center justify-center gap-1.5 flex-shrink-0"
            >
              <span>View Tuition by University</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* Interactive Planner Section - Seamless on mobile */}
        <section className="py-2.5 sm:py-6 sm:pb-20 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <BudgetPlanner />
        </section>

      </main>
      <Footer />
    </>
  );
}
