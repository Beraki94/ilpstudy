import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import BudgetPlanner from '@/components/BudgetPlanner';
import { DollarSign, ArrowRight, Building2, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cost of Studying in China | Student Budget Planner | ILP Study',
  description: 'Plan tuition, accommodation, monthly expenses and one-time costs for studying in China with an interactive RMB budget planner.',
  alternates: {
    canonical: '/budget',
  },
};

export default function BudgetPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white sm:bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Student Budget Planner" 
          description="Plan tuition, accommodation, monthly expenses and one-time costs for studying in China with an interactive RMB budget planner."
        />

        {/* Intro Navigation Bar - Seamless on mobile */}
        <section className="py-0 sm:pt-10 sm:pb-4 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-none sm:rounded-2xl bg-white border-b sm:border border-slate-100 sm:border-slate-200/80 sm:shadow-xs">
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              Compare approximate tuition ranges by university and subject, then confirm the updated fee for your intake.
            </div>
            <Link
              href="/universities#tuition"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors whitespace-nowrap inline-flex items-center justify-center gap-1.5"
            >
              <span>View Tuition by University</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* Interactive Planner Section - Seamless on mobile */}
        <section className="py-0 sm:py-6 sm:pb-20 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <BudgetPlanner />
        </section>

      </main>
      <Footer />
    </>
  );
}
