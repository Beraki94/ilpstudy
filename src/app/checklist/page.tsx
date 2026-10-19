import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import InteractiveChecklist from '@/components/InteractiveChecklist';
import { FileCheck2, Download, Printer, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'China University Application Document Checklist | ILP Study',
  description: 'Download ILP Study’s student document checklist for passports, education records, financial and language evidence, and postgraduate application documents.',
  alternates: {
    canonical: '/checklist',
  },
};

export default function ChecklistPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="Student Application Documents" 
          description="Prepare clear copies of the documents relevant to your study level. Use your chosen university’s current admission notice as the final checklist. Some items below are required only for particular programmes, scholarships or applicants."
        />

        {/* Notice & Meta */}
        <section className="pt-10 pb-4 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-semibold text-slate-500">
            <span>Reviewed 12 October 2026. Tick items as you prepare them; selections stay in the current page only.</span>
            <div className="flex items-center gap-4 flex-shrink-0">
              <Link href="/contact" className="text-brand-pink font-bold hover:underline">
                Book Consultation →
              </Link>
            </div>
          </div>
        </section>

        {/* Interactive Checklist Container */}
        <section className="py-6 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <InteractiveChecklist />
        </section>

      </main>
      <Footer />
    </>
  );
}
