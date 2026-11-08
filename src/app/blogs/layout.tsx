import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study in China Blog & Student Admission Guides 2026-2027 | ILP Study',
  description:
    'Comprehensive articles and verified admissions guides for Bangladeshi students planning to study in China. In-depth coverage of CSC Scholarships, CSCA exam prep, visa requirements, MBBS admissions, and living costs in RMB and BDT.',
  keywords: [
    'study in China blog',
    'CSC scholarship guide for Bangladesh',
    'CSCA exam preparation Bangladesh',
    'China student visa guide Dhaka',
    'MBBS in China guide',
    'cost of living in China for Bangladeshi students',
    'March intake vs September intake in China',
    'study in China after HSC SSC',
  ],
  alternates: {
    canonical: '/blogs',
  },
  openGraph: {
    title: 'Study in China Blog & Student Admission Guides | ILP Study',
    description:
      'Verified guides on CSC scholarships, CSCA exam syllabus, JW202 visa processing, and university applications for Bangladeshi students.',
    url: 'https://ilpstudy.com/blogs',
    siteName: 'ILP Study',
    images: [
      {
        url: '/blogImage/01-study-in-china-from-bangladesh-roadmap.jpg',
        width: 1200,
        height: 630,
        alt: 'Study in China from Bangladesh Roadmap — ILP Study Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in China Blog & Guides | ILP Study',
    description:
      'Step-by-step admissions guides and scholarship instructions for Bangladeshi students studying in China.',
    images: ['/blogImage/01-study-in-china-from-bangladesh-roadmap.jpg'],
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

