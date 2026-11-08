import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Study in China Admissions & Visa Services | ILP Study Bangladesh',
  description:
    'Comprehensive end-to-end education consultancy services for Bangladeshi students studying in China. From university course matching, CSC scholarship assistance, and document translation to CSCA prep and JW202 visa processing.',
  keywords: [
    'China education consultancy services Dhaka',
    'China university admission support Bangladesh',
    'CSC scholarship application service',
    'JW202 China visa processing Dhaka',
    'CSCA exam preparation courses',
    'China student document attestation',
  ],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Study in China Admissions & Visa Services | ILP Study',
    description:
      'Professional student counseling, university admission, scholarship applications, and visa documentation support in Mirpur, Dhaka.',
    url: 'https://ilpstudy.com/services',
    siteName: 'ILP Study',
    images: [
      {
        url: '/homeImage/ilp-home-banner.jpg',
        width: 1200,
        height: 630,
        alt: 'ILP Study China Admissions & Counseling Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Study in China Services | ILP Study',
    description:
      'Transparent advisory and application processing for Bangladeshi students applying to Chinese universities.',
    images: ['/homeImage/ilp-home-banner.jpg'],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

