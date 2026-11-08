import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import InteractiveChecklist from '@/components/InteractiveChecklist';

export const metadata: Metadata = {
  title: 'China University Application Document Checklist | ILP Study Bangladesh',
  description:
    'Complete document checklist for Bangladeshi students applying to Chinese universities: passport validity, notarized academic certificates & transcripts, study plan / SOP, letters of recommendation, physical exam, and police clearance.',
  keywords: [
    'China university application documents checklist',
    'documents required for study in China from Bangladesh',
    'notarized certificate for Chinese university',
    'foreign physical examination form China',
    'police clearance certificate China visa Bangladesh',
  ],
  alternates: {
    canonical: '/checklist',
  },
  openGraph: {
    title: 'China University Application Document Checklist | ILP Study',
    description:
      'Prepare every required document for Chinese university admissions and CSC scholarships without delays.',
    url: 'https://ilpstudy.com/checklist',
    siteName: 'ILP Study',
    images: [
      {
        url: '/blogImage/17-china-university-application-documents.jpg',
        width: 1200,
        height: 630,
        alt: 'China University Application Document Checklist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Document Checklist for Chinese Universities | ILP Study',
    description:
      'Download and check all required documents for study in China from Bangladesh.',
    images: ['/blogImage/17-china-university-application-documents.jpg'],
  },
};

export default function ChecklistPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc]">
        
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
