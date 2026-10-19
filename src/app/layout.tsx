import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CookieConsent from "@/components/CookieConsent";
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
  title: {
    default: "Study in China from Bangladesh | ILP Study",
    template: "%s | ILP Study",
  },
  description:
    "Plan study in China from Bangladesh with ILP Study. Explore degrees, language and foundation routes, universities, tuition and application support.",
  keywords: [
    "study in China",
    "China scholarship for Bangladeshi students",
    "CSC scholarship",
    "CSCA exam",
    "JW202 China student visa",
    "China university admissions Dhaka",
    "ILP Study",
    "Bachelor in China",
    "Master in China",
    "MBBS in China",
    "Chinese language HSK",
  ],
  authors: [{ name: "ILP Study", url: "https://ilpstudy.com" }],
  creator: "ILP Study",
  publisher: "ILP Study",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ILP Study | Study in China Education Consultancy in Bangladesh",
    description: "Personalized admissions counseling, 60+ Chinese universities, CSC scholarships, CSCA guidance, and visa support.",
    url: "https://ilpstudy.com",
    siteName: "ILP Study",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ILP Study | Study in China Education Consultancy",
    description: "End-to-end guidance for Bangladeshi students studying in China.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body className="min-h-screen flex flex-col font-sans" suppressHydrationWarning>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
