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
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Student Budget Planner" 
          description="Plan tuition, accommodation, monthly expenses and one-time costs for studying in China with an interactive RMB budget planner."
        />

        {/* Intro Navigation Bar */}
        <section className="pt-10 pb-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
            <div className="text-xs sm:text-sm text-slate-600 font-medium">
              Compare approximate tuition ranges by university and subject, then confirm the updated fee for your intake.
            </div>
            <Link
              href="/universities#tuition"
              className="px-5 py-2 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors whitespace-nowrap self-start sm:self-auto inline-flex items-center gap-1.5"
            >
              <span>View Tuition by University</span>
              <ArrowRight size={12} />
            </Link>
          </div>
        </section>

        {/* Interactive Planner Section */}
        <section className="py-6 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <BudgetPlanner />
        </section>

      </main>
      <Footer />
    </>
  );
}
