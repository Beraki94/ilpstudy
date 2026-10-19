import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import ConsultationForm from '@/components/ConsultationForm';
import PhotoSpace from '@/components/PhotoSpace';
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  QrCode,
  AlertCircle,
  HelpCircle,
  Clock,
  Sparkles
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Study in China Consultation | ILP Study Bangladesh',
  description: 'Request a free ILP Study consultation about studying in China, university selection, scholarships and CSCA preparation.',
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50">
        
        {/* Page Header */}
        <PageHeader 
          title="LET’S PLAN YOUR STUDY IN CHINA" 
          description="Tell us your academic background and study goals. ILP Study will need to agree an appointment time with you; submitting a request does not book a confirmed slot."
        />

        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Direct Contact & Preparation Advice */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Prefer to contact directly box */}
              <div className="bg-white rounded-[32px] sm:rounded-[40px] p-6 sm:p-8 border border-slate-200/80 shadow-soft space-y-6">
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
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
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
                <div className="p-4 rounded-2xl bg-brand-green/5 border border-brand-green/20 flex items-center justify-between gap-4">
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
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4">
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
                <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200/80 text-amber-950 space-y-2">
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
              <PhotoSpace
                title="ILP Study Consultation Suite"
                subtitle="East Shewrapara, Mirpur, Dhaka — In-person appointment sessions"
                badge="Dhaka Office"
                aspectRatio="aspect-[16/9]"
                fallbackSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                className="shadow-sm rounded-[32px]"
              />

              {/* China & WeChat Box */}
              <div className="p-6 rounded-3xl bg-brand-dark text-white shadow-soft flex items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block">
                    China Office / WeChat
                  </span>
                  <div className="text-sm font-bold mt-1 text-slate-200">
                    WeChat ID: <strong className="text-white">+86 156 8568 9193</strong>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">
                    For Chinese university international offices and overseas scholars
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-brand-green">
                  <QrCode size={20} />
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
