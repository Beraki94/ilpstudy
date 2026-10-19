import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import {
  Calendar,
  Clock,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  BookOpen,
  Share2,
  FileText,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { studentGuides, StudentGuide } from '@/data/studentGuides';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const params: { id: string }[] = [];
  studentGuides.forEach((guide) => {
    params.push({ id: guide.id });
    if (guide.numericId) {
      params.push({ id: guide.numericId });
    }
  });
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const guide = studentGuides.find((g) => g.id === id || g.numericId === id);

  if (!guide) {
    return {
      title: 'Guide Not Found | ILP Study',
    };
  }

  return {
    title: guide.pageTitle,
    description: guide.searchDescription,
    alternates: {
      canonical: `/blogs/${guide.id}`,
    },
    openGraph: {
      title: guide.pageTitle,
      description: guide.searchDescription,
      type: 'article',
      images: [{ url: guide.image, width: 1200, height: 630, alt: guide.title }],
    },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const guide = studentGuides.find((g) => g.id === id || g.numericId === id);

  if (!guide) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b border-slate-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-brand-pink transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blogs" className="hover:text-brand-pink transition-colors">Blog &amp; Guides</Link>
            <span>/</span>
            <span className="text-brand-pink truncate">{guide.category}</span>
          </div>
        </div>

        {/* Article Container */}
        <article className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Card */}
          <div className="bg-white rounded-[36px] sm:rounded-[48px] rounded-tl-[80px] p-8 sm:p-12 border border-slate-200/80 shadow-soft space-y-6">
            
            {/* Badges & Meta */}
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="px-3.5 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink font-extrabold uppercase tracking-wider">
                {guide.badge}
              </span>

              <div className="flex items-center gap-4 text-slate-400 font-semibold">
                <div className="flex items-center gap-1.5">
                  <Calendar size={13} />
                  <span>{guide.reviewedDate}</span>
                </div>
                <div className="flex items-center gap-1.5 text-brand-purple">
                  <Clock size={13} />
                  <span>{guide.readTime}</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-brand-dark leading-tight">
              {guide.title}
            </h1>

            {/* Subtitle / Excerpt */}
            <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
              {guide.excerpt}
            </p>

            {/* Lead Callout */}
            {guide.leadParagraph && (
              <div className="p-5 sm:p-6 rounded-2xl bg-brand-light border-l-4 border-brand-pink text-sm sm:text-base text-slate-700 font-semibold leading-relaxed">
                {guide.leadParagraph}
              </div>
            )}

            {/* Hero Image */}
            <div className="relative h-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden shadow-inner">
              <img 
                src={guide.image} 
                alt={guide.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Sections */}
            <div className="space-y-8 pt-4">
              {guide.sections.map((sec, idx) => (
                <div key={idx} className="space-y-3 pt-6 border-t border-slate-100 first:border-0 first:pt-0">
                  <h2 className="text-xl sm:text-2xl font-bold text-brand-dark flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-pink flex-shrink-0" />
                    <span>{sec.heading}</span>
                  </h2>

                  <div className="space-y-3 text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>

                  {sec.checklist && sec.checklist.length > 0 && (
                    <div className="mt-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                      <strong className="block text-xs uppercase tracking-wider text-brand-dark font-extrabold mb-1">
                        Key Verification Points:
                      </strong>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 font-medium">
                        {sec.checklist.map((item, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-2">
                            <CheckCircle2 size={15} className="text-brand-green flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Consultation Action Box */}
            <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-brand-dark text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-brand-pink/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
                  <Sparkles size={14} /> Next Steps for Bangladeshi Students
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  Discuss Your Study in China Plan
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-medium leading-relaxed max-w-xl">
                  Discuss your completed qualifications (SSC/HSC/Degree), preferred subjects, and budget with ILP Study counselors in Mirpur, Dhaka.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <Link
                    href="/contact"
                    className="px-6 py-3 rounded-full bg-brand-pink hover:bg-[#d10079] text-white font-bold text-xs uppercase tracking-wider shadow-glow-pink transition-all inline-flex items-center gap-2"
                  >
                    Book a Free Consultation <ArrowRight size={14} />
                  </Link>
                  <a
                    href="https://wa.me/8801895626831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-brand-green font-bold text-xs uppercase tracking-wider border border-slate-700 transition-all inline-flex items-center gap-2"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Related Guides */}
          {guide.relatedGuides && guide.relatedGuides.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-brand-dark">Continue Your Research</h3>
                <Link href="/blogs" className="text-xs font-bold text-brand-pink hover:underline">
                  View All Blog Articles &rarr;
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {guide.relatedGuides.map((rel, rIdx) => (
                  <Link
                    key={rIdx}
                    href={`/blogs/${rel.slug}`}
                    className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-brand-pink hover:shadow-soft transition-all group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-brand-pink uppercase tracking-wider block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="font-bold text-sm text-brand-dark group-hover:text-brand-pink transition-colors line-clamp-2 mb-2">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-medium line-clamp-2">
                        {rel.description}
                      </p>
                    </div>
                    <span className="mt-4 text-xs font-bold text-brand-dark group-hover:text-brand-pink flex items-center gap-1">
                      Read Article <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back button */}
          <div className="pt-4 flex justify-between items-center text-xs font-bold text-slate-500">
            <Link href="/blogs" className="inline-flex items-center gap-1.5 hover:text-brand-pink transition-colors">
              <ArrowLeft size={14} /> Back to All Blog Articles
            </Link>
          </div>

        </article>
      </main>
      <Footer />
    </>
  );
}
