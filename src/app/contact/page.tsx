import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ConsultationForm from '@/components/ConsultationForm';
import PhotoSpace from '@/components/PhotoSpace';
import { FacebookIcon, InstagramIcon } from '@/components/SocialLinks';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  AlertCircle
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Study in China Consultation | Dhaka Office & WhatsApp | ILP Study',
  description:
    'Book a free study in China consultation with ILP Study counselors in Mirpur, Dhaka. Direct counseling via hotline (+880 1602 566398) and WhatsApp (+880 1895 626831) for Chinese university admissions, CSC scholarships, CSCA prep, and visas.',
  keywords: [
    'study in China consultation Dhaka',
    'China education consultancy contact number',
    'ILP Study Mirpur office address',
    'free China student visa counseling',
    'China scholarship consultation Bangladesh',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Free Study in China Consultation | Dhaka Office & WhatsApp | ILP Study',
    description:
      'Book a 1-on-1 session with ILP Study counselors in Mirpur, Dhaka or chat on WhatsApp for university admissions and scholarships in China.',
    url: 'https://ilpstudy.com/contact',
    siteName: 'ILP Study',
    images: [
      {
        url: '/contactImage/ilp-office-meeting-room.jpg',
        width: 1200,
        height: 630,
        alt: 'ILP Study Dhaka Consultation Office',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact ILP Study — Free China Admissions Counseling',
    description:
      'Reach our Mirpur, Dhaka counselors directly by phone, WhatsApp, or email for university admissions in China.',
    images: ['/contactImage/ilp-office-meeting-room.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc]">
        
        {/* Page Header */}
        <PageHeader 
          title="LET’S PLAN YOUR STUDY IN CHINA" 
          description="Tell us your academic background and study goals. ILP Study will need to agree an appointment time with you; submitting a request does not book a confirmed slot."
        />

        <section className="py-4 sm:py-10 lg:py-16 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-4 sm:gap-8 lg:gap-12 items-start">
            
            {/* Left Column: Direct Contact & Preparation Advice */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              
              {/* Prefer to contact directly box */}
              <div className="bg-white rounded-none sm:rounded-[36px] px-5 py-8 sm:p-8 md:p-10 border-y sm:border border-slate-100 sm:border-slate-200/90 shadow-none sm:shadow-card space-y-5 sm:space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">
                    Direct Counseling Channels
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-dark tracking-tight">
                    PREFER TO CONTACT US DIRECTLY?
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1">
                    You can contact our Mirpur Dhaka counselors directly via hotline, WhatsApp, or email.
                  </p>
                </div>

                {/* Hotline */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-pink/10 text-brand-pink flex items-center justify-center flex-shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        ILP Study hotline
                      </span>
                      <a href="tel:+8801602566398" className="text-base sm:text-lg font-black text-brand-dark hover:text-brand-pink transition-colors">
                        +880 1602 566398
                      </a>
                    </div>
                  </div>
                  <a
                    href="tel:+8801602566398"
                    className="px-3.5 py-1.5 rounded-full bg-brand-dark text-white text-xs font-bold hover:bg-brand-pink transition-colors"
                  >
                    Call
                  </a>
                </div>

                {/* WhatsApp */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-brand-green/5 border border-brand-green/20 flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-green/15 text-brand-green flex items-center justify-center flex-shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-brand-green block">
                        Chat on WhatsApp
                      </span>
                      <a 
                        href="https://wa.me/8801895626831" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-black text-brand-dark hover:text-brand-green transition-colors"
                      >
                        +880 1895 626831
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/8801895626831"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-full bg-brand-green text-white text-xs font-bold hover:bg-[#00a85d] transition-colors shadow-glow-green"
                  >
                    Chat
                  </a>
                </div>

                {/* Email */}
                <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/70 flex items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center flex-shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold uppercase text-slate-400 block">
                        Official Inquiry Email
                      </span>
                      <a href="mailto:info@ilpstudy.com" className="text-sm sm:text-base font-bold text-brand-dark hover:text-brand-pink transition-colors">
                        info@ilpstudy.com
                      </a>
                    </div>
                  </div>
                  <a
                    href="mailto:info@ilpstudy.com"
                    className="px-3.5 py-1.5 rounded-full bg-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-300 transition-colors"
                  >
                    Email
                  </a>
                </div>

                {/* Advice Card: Before your consultation */}
                <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-wider text-amber-800">
                    <AlertCircle size={16} className="text-amber-700" />
                    <span>Before your consultation</span>
                  </div>
                  <p className="text-xs sm:text-sm font-medium leading-relaxed text-amber-900">
                    Have your latest qualification, results, preferred subject and budget ready. <strong>Please do not send sensitive documents through this form.</strong>
                  </p>
                </div>

                {/* Dhaka Office Address */}
                <div className="pt-2 border-t border-slate-100 flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                  <MapPin size={18} className="text-brand-pink flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-brand-dark block font-bold">Dhaka Office:</strong>
                    <span>Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Mirpur, Dhaka-1216, Bangladesh.</span>
                  </div>
                </div>

              </div>

              {/* Photo Space / Office Suite */}
              <div className="bg-white p-4 sm:p-0 border-b sm:border-0 border-slate-100">
                <PhotoSpace
                  title="ILP Study Consultation Suite"
                  subtitle="East Shewrapara, Mirpur, Dhaka — In-person appointment sessions"
                  badge="Dhaka Office"
                  aspectRatio="aspect-[16/9]"
                  fallbackSrc="/contactImage/ilp-office-meeting-room.jpg?v=20261108"
                  className="shadow-sm rounded-2xl sm:rounded-[32px]"
                />
              </div>

              {/* WhatsApp & WeChat Box */}
              <div className="bg-white p-4 sm:p-0 border-b sm:border-0 border-slate-100">
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-brand-dark text-white shadow-card-dark border border-slate-800 flex items-center justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block">
                      WhatsApp &amp; WeChat
                    </span>
                    <div className="text-sm font-bold mt-1 text-slate-200">
                      <a 
                        href="https://wa.me/8615685689193"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-brand-green transition-colors"
                      >
                        WhatsApp &amp; WeChat: <strong className="text-white">+86 156 8568 9193</strong>
                      </a>
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">
                      For messaging and university coordination
                    </div>
                  </div>
                  <a
                    href="https://wa.me/8615685689193"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green hover:bg-brand-green hover:text-white transition-colors flex items-center justify-center flex-shrink-0"
                  >
                    <MessageSquare size={20} />
                  </a>
                </div>
              </div>

              {/* Official Social Media Channels */}
              <div className="bg-white p-4 sm:p-0 border-b sm:border-0 border-slate-100">
                <div className="p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 text-white shadow-card-dark border border-slate-800">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-pink">
                      Official Social Media
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      @ilpstudy
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Follow us for real student campus moments, scholarship notifications, and live admission updates.
                  </p>
                  <div className="grid grid-cols-2 gap-2.5">
                    <a
                      href="https://www.facebook.com/ilpstudy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-[#1877F2] text-white text-xs font-bold border border-white/10 hover:border-[#1877F2] transition-all group shadow-xs"
                    >
                      <FacebookIcon className="w-4 h-4 text-[#1877F2] group-hover:text-white transition-colors" />
                      <span>Facebook</span>
                    </a>
                    <a
                      href="https://www.instagram.com/ilpstudy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/10 hover:bg-[#E4405F] text-white text-xs font-bold border border-white/10 hover:border-[#E4405F] transition-all group shadow-xs"
                    >
                      <InstagramIcon className="w-4 h-4 text-[#E4405F] group-hover:text-white transition-colors" />
                      <span>Instagram</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: The Official Consultation Form */}
            <div className="lg:col-span-7">
              <ConsultationForm />
            </div>

          </div>
        </section>

        {/* Full Width Map Section with East Shewrapara Pin */}
        <section className="h-[380px] w-full bg-slate-200 relative border-t border-slate-200">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.835471015694!2d90.37267107593502!3d23.78887648790315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0b4b2484fa1%3A0x63eb3715d5ec3b55!2sEast%20Shewrapara%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1715456781234!5m2!1sen!2sbd" 
            className="w-full h-full border-0" 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="ILP Study Dhaka Office Location"
          ></iframe>
        </section>

      </main>
      <Footer />
    </>
  );
}
