import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import GlobalNetwork from '@/components/GlobalNetwork';
import Destinations from '@/components/Destinations';
import StudentTestimonials from '@/components/StudentTestimonials';
import AdmissionWorkflow from '@/components/AdmissionWorkflow';
import Fields from '@/components/Fields';
import Footer from '@/components/Footer';
import JsonLd from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'Study in China from Bangladesh | Chinese University Admissions & Scholarships 2026-2027',
  description:
    'Apply to top Chinese universities from Bangladesh with ILP Study. Expert admissions counseling for CSC Scholarships, English-taught Bachelor’s, Master’s, MBBS, Harbin pathway language programs, CSCA prep, and JW202 visa processing in Mirpur, Dhaka.',
  keywords: [
    'study in China from Bangladesh',
    'China university admission Bangladesh 2026',
    'CSC scholarship for Bangladeshi students',
    'China student visa JW202 Dhaka',
    'MBBS in China for Bangladesh students',
    'English medium bachelor degree in China',
    'study in China without IELTS',
    'China university tuition fee waiver',
    'Harbin pathway program Bangladesh',
    'China education consultancy in Mirpur Dhaka',
  ],
  alternates: {
    canonical: 'https://ilpstudy.com',
  },
  openGraph: {
    title: 'Study in China from Bangladesh | Chinese University Admissions & Scholarships 2026-2027',
    description:
      'Apply to top Chinese universities with ILP Study. CSC scholarships, English-taught degree admissions, language pathway courses, and student visa support.',
    url: 'https://ilpstudy.com',
    siteName: 'ILP Study',
    images: [
      {
        url: '/homeImage/ilp-home-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'ILP Study — Study in China Education Consultancy in Bangladesh',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in China from Bangladesh | ILP Study',
    description:
      'Admissions advisory, CSC scholarships, English-taught degree programs, and visa support for Bangladeshi students.',
    images: ['/homeImage/ilp-home-banner.jpg'],
  },
};

const homeFaqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can Bangladeshi students study in China without IELTS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Most Chinese universities offer English-taught Bachelor and Master programs where an English Proficiency Certificate (MOI - Medium of Instruction) from your college or university in Bangladesh is accepted in place of IELTS.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I apply for a CSC Scholarship to China from Bangladesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Chinese Government Scholarships (CSC Type A & Type B) can be applied through the official bilateral embassy channel or directly through designated university portals. ILP Study assists with document preparation, university pre-admission, and study plan drafting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Harbin Pathway Program offered by ILP Study?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The Harbin Pathway Program allows students to begin with an intensive Chinese language program in March, qualifying them for up to 100% degree scholarships for the September academic intake.',
      },
    },
    {
      '@type': 'Question',
      name: 'What documents are required for a China Student Visa (X1/X2) in Bangladesh?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Key documents include a valid passport, official Admission Notice, JW202/JW201 visa application form issued by the Chinese Ministry of Education, Foreigner Physical Examination form, police clearance, and academic certificates.',
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={homeFaqSchema} />
      <Header />
      <main>
        <Hero />
        <Features />
        <Fields />
        <Destinations />
        <GlobalNetwork />
        <StudentTestimonials />
        <AdmissionWorkflow />
      </main>
      <Footer />
    </>
  );
}
