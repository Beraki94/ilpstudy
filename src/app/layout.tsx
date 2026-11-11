import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
import EventPromotionModal from "@/components/layout/EventPromotionModal";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ilpstudy.com"),
  icons: {
    icon: [
      { url: "/images/ilp-study-icon.svg", type: "image/svg+xml" },
      { url: "/images/ilp-study-icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/ilp-study-icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/ilp-study-icon.svg",
    apple: [
      { url: "/images/ilp-study-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  title: {
    default: "Study in China from Bangladesh 2026-2027 | ILP Study",
    template: "%s | ILP Study",
  },
  description:
    "Official website of ILP Study. Apply to 60+ top Chinese universities from Bangladesh. Expert guidance on CSC Scholarships, English-taught Bachelor's, Master's, MBBS, Chinese language programs, CSCA prep, and JW202 visa processing in Mirpur, Dhaka.",
  keywords: [
    "study in China",
    "study in China from Bangladesh",
    "China scholarship for Bangladeshi students",
    "CSC scholarship Bangladesh 2026",
    "CSCA exam Bangladesh",
    "JW202 China student visa Dhaka",
    "China university admissions Dhaka",
    "ILP Study",
    "Bachelor in China English medium",
    "Master in China with scholarship",
    "MBBS in China for Bangladeshi students",
    "Chinese language program HSK Harbin",
    "China education consultancy in Dhaka",
    "study in China without IELTS",
    "China university tuition fees in BDT",
  ],
  authors: [{ name: "ILP Study", url: "https://ilpstudy.com" }],
  creator: "ILP Study",
  publisher: "ILP Study",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Study in China from Bangladesh 2026-2027 | ILP Study",
    description:
      "Personalized admissions counseling for 60+ Chinese universities, CSC scholarships, English-taught Bachelor & Master degrees, MBBS, and student visa support in Mirpur, Dhaka.",
    url: "https://ilpstudy.com",
    siteName: "ILP Study",
    locale: "en_US",
    alternateLocale: ["en_BD"],
    type: "website",
    images: [
      {
        url: "/homeImage/ilp-home-banner.jpg",
        width: 1200,
        height: 630,
        alt: "ILP Study — Study in China Education Consultancy in Bangladesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Study in China from Bangladesh 2026-2027 | ILP Study",
    description:
      "Expert guidance for Bangladeshi students studying in China. Admissions, CSC scholarships, CSCA prep, and visa support.",
    images: ["/homeImage/ilp-home-banner.jpg"],
  },
  other: {
    "geo.region": "BD-13",
    "geo.placename": "Dhaka, Bangladesh",
    "geo.position": "23.8071;90.3686",
    ICBM: "23.8071, 90.3686",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://ilpstudy.com/#organization",
      "name": "ILP Study",
      "legalName": "International Learning Pathways",
      "url": "https://ilpstudy.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://ilpstudy.com/#logo",
        "url": "https://ilpstudy.com/images/ilp-logo.png",
        "caption": "ILP Study - Study in China Education Consultancy"
      },
      "image": "https://ilpstudy.com/images/advert-image/ilp-20262027-admission.jpg",
      "description":
        "Leading China education consultancy in Bangladesh providing university admissions, CSC scholarship guidance, English-taught degree enrollment, CSCA prep, and JW202 visa processing.",
      "telephone": "+8801602566398",
      "email": "info@ilpstudy.com",
      "areaServed": {
        "@type": "Country",
        "name": "Bangladesh"
      },
      "knowsLanguage": ["English", "Bengali"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Kader's Complex, Lift No. 9, H-888/C",
        "addressLocality": "Mirpur-10, Dhaka",
        "addressRegion": "Dhaka",
        "postalCode": "1216",
        "addressCountry": "BD"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 23.8071,
        "longitude": 90.3686
      },
      "priceRange": "$$",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Saturday",
            "Sunday"
          ],
          "opens": "09:30",
          "closes": "18:30"
        }
      ],
      "sameAs": [
        "https://wa.me/8801895626831",
        "https://www.facebook.com/ilpstudy",
        "https://www.instagram.com/ilpstudy"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://ilpstudy.com/#website",
      "url": "https://ilpstudy.com",
      "name": "ILP Study",
      "description":
        "Study in China from Bangladesh — Chinese University Admissions, CSC Scholarships, and Student Visa Advisory",
      "publisher": {
        "@id": "https://ilpstudy.com/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ilpstudy.com/blogs?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <JsonLd data={organizationSchema} />
      </head>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        {children}
        <CookieConsent />
        <EventPromotionModal />
      </body>
    </html>
  );
}
