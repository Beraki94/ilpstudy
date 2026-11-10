import type { Metadata } from 'next';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PhotoSpace from '@/components/PhotoSpace';

export const metadata: Metadata = {
  title: 'University & Institutional Partnerships | ILP Study',
  description:
    'ILP Study collaborates with accredited Chinese universities, pathway centers, and educational bodies to build transparent student recruitment channels and scholarship pathways.',
  keywords: [
    'Chinese university partnerships',
    'China student recruitment agent Bangladesh',
    'university international relations China',
    'ILP Study institutional collaboration',
    'China higher education recruitment',
  ],
  alternates: {
    canonical: '/partnerships',
  },
  openGraph: {
    title: 'University & Institutional Partnerships | ILP Study',
    description:
      'Collaborate with ILP Study for ethical, transparent international student admissions and university pathway representation in South Asia.',
    url: 'https://ilpstudy.com/partnerships',
    siteName: 'ILP Study',
    images: [
      {
        url: '/partnershipImage/ilp-partnership-1.jpg',
        width: 1200,
        height: 630,
        alt: 'ILP Study University Partnerships',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};
import {
  Building2,
  Globe2,
  CheckCircle2,
  MessageSquare,
  FileCheck,
  ShieldCheck,
  Send,
  FileText,
  UserCheck,
  GraduationCap,
  MapPin,
  Phone,
  Mail,
  QrCode,
  ArrowRight,
  Handshake,
  ArrowUpRight,
  Sparkles
} from 'lucide-react';

export default function PartnershipsPage() {

  const stats = [
    { label: "Study Destination", value: "China", desc: "Degree, language and foundation programmes" },
    { label: "Target Intakes", value: "March & September", desc: "Programme availability varies by university" },
    { label: "Primary Student Market", value: "Bangladesh", desc: "Supporting Bangladeshi students planning to study in China" },
    { label: "University Coordination", value: "Application Support", desc: "Programme matching, document preparation and application follow-up" },
  ];

  const recruitmentMarkets = [
    {
      country: "Bangladesh",
      region: "South Asia",
      tag: "Primary South Asian Hub",
      desc: "High volume of STEM, Medicine, and Engineering candidates with verified academic transcripts.",
      color: "border-brand-green/30 bg-brand-green/5 text-brand-green",
    },
    {
      country: "Tajikistan",
      region: "Central Asia",
      tag: "Central Asian Corridor",
      desc: "Strong multilingual students seeking Chinese language, business, and technology degrees.",
      color: "border-brand-purple/30 bg-brand-purple/5 text-brand-purple",
    },
    {
      country: "Azerbaijan",
      region: "Central Asia / Caucasus",
      tag: "Eurasian Sourcing",
      desc: "Competitive undergraduate and postgraduate applicants with strong quantitative backgrounds.",
      color: "border-brand-pink/30 bg-brand-pink/5 text-brand-pink",
    },
    {
      country: "Brazil",
      region: "South America",
      tag: "Latin America Reach",
      desc: "Students interested in Sino-Latin American trade, agriculture tech, and engineering programs.",
      color: "border-amber-500/30 bg-amber-500/5 text-amber-600",
    },
    {
      country: "United States",
      region: "North America",
      tag: "North American Exchanges",
      desc: "Specialized language immersion, humanities, and international business exchange candidates.",
      color: "border-blue-500/30 bg-blue-500/5 text-blue-600",
    },
    {
      country: "African Countries",
      region: "Pan-Africa",
      tag: "Emerging Markets",
      desc: "Talented scholars applying for undergraduate science, economics, and CSC scholarship programs.",
      color: "border-emerald-500/30 bg-emerald-500/5 text-emerald-600",
    },
  ];

  const workflowStages = [
    {
      step: "01",
      title: "Screening",
      desc: "We assess academic records, financial capacity, and language level before recommending any university. Students who cannot meet entry requirements are filtered out at this stage rather than becoming a rejected application on your desk.",
      icon: <UserCheck size={26} className="text-white" />,
      color: "bg-brand-pink",
    },
    {
      step: "02",
      title: "University & Programme Matching",
      desc: "Students are matched to programmes they realistically qualify for, with scholarship eligibility taken into account and fees explained in full before they commit.",
      icon: <GraduationCap size={26} className="text-white" />,
      color: "bg-brand-purple",
    },
    {
      step: "03",
      title: "Document Preparation",
      desc: "Transcripts, certificates, passport, medical report and police clearance are collected, verified and notarised or authenticated according to your requirements.",
      icon: <FileText size={26} className="text-white" />,
      color: "bg-brand-green",
    },
    {
      step: "04",
      title: "Application Submission",
      desc: "Our counsellors submit through your portal and track each file until a decision is issued, responding to requests for additional documents directly.",
      icon: <Send size={26} className="text-white" />,
      color: "bg-brand-dark",
    },
    {
      step: "05",
      title: "Admission & JW202",
      desc: "We manage acceptance confirmation, tuition deposit and JW202 issuance with your international office, and keep the student informed at each step.",
      icon: <FileCheck size={26} className="text-white" />,
      color: "bg-brand-pink",
    },
    {
      step: "06",
      title: "Visa & Arrival Assistance",
      desc: "Students are prepared for the visa application, briefed on arrival procedures and accommodation, and supported through campus registration.",
      icon: <ShieldCheck size={26} className="text-white" />,
      color: "bg-brand-green",
    },
  ];

  const whyWorkWithUs = [
    {
      title: "Reachable on WeChat",
      desc: "We work in the channel your office already uses (+86 156 8568 9193), so questions on a file are answered the same day rather than after a week of email backlog.",
      icon: <MessageSquare size={26} className="text-white" />,
      badge: "Real-Time Comms",
      color: "bg-brand-green",
    },
    {
      title: "Pre-Screened Applicants",
      desc: "We verify academic credentials and check eligibility against your published criteria before submitting, so your admissions team is not processing files that were never going to qualify.",
      icon: <UserCheck size={26} className="text-white" />,
      badge: "Quality Filter",
      color: "bg-brand-pink",
    },
    {
      title: "Documents Prepared at Source",
      desc: "Transcripts, police clearances, medical reports, and certificates are collected, verified, and notarised or authenticated in the student's home country before submission.",
      icon: <FileCheck size={26} className="text-white" />,
      badge: "Zero Incomplete Files",
      color: "bg-brand-purple",
    },
    {
      title: "Direct Submission",
      desc: "Applications are submitted and tracked by our own counsellors directly through your portal. We do not sub-contract recruitment to third-party agencies.",
      icon: <Send size={26} className="text-white" />,
      badge: "No Sub-Contracting",
      color: "bg-brand-dark",
    },
    {
      title: "Visa & Arrival Assistance",
      desc: "We coordinate with universities throughout the admission and JW202 application process, guide students through their X1 visa applications, provide pre-departure guidance, assist with dormitory arrangements, and support on-campus registration after arrival in China",
      icon: <ShieldCheck size={26} className="text-white" />,
      badge: "End-to-End Care",
      color: "bg-brand-pink",
    },
    {
      title: "One Named Contact",
      desc: "A dedicated institutional director (Tanjid Chowdhury — Business Development) manages your university account, guaranteeing direct accountability rather than an anonymous shared inbox.",
      icon: <Building2 size={26} className="text-white" />,
      badge: "Accountability",
      color: "bg-brand-green",
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#f8fafc] pt-36 sm:pt-40">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-brand-dark text-white py-12 sm:py-20 lg:py-28">
          {/* Decorative subtle brand rings */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border border-white/[0.08] pointer-events-none animate-spin-slow" />
          <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full border border-brand-pink/[0.12] pointer-events-none" />

          {/* Subtle Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-pink/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-brand-green/15 rounded-full blur-[120px] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs sm:text-sm font-semibold tracking-wide text-brand-green">
                  <Sparkles size={16} />
                  <span>Prepared for University International Offices · 2026 / 2027</span>
                </div>

                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] mb-5 sm:mb-6">
                  International Student Recruitment for{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-brand">
                    Chinese Universities
                  </span>
                </h1>

                <p className="text-base sm:text-xl text-slate-300 mb-6 sm:mb-8 leading-relaxed font-normal max-w-2xl">
                  <strong>International Learning Pathways</strong> (trading as <strong>ILP Study</strong>) connects top-tier Chinese universities with pre-screened, authentic applicants across six international markets. We handle end-to-end recruitment with direct portal filings and WeChat-speed communication.
                </p>

                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
                  <a
                    href="#proposal"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-brand-green text-white font-bold hover:bg-[#00a85d] shadow-glow-green transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    View Cooperation Terms <ArrowRight size={18} />
                  </a>
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold border border-white/20 transition-all flex items-center justify-center gap-2 text-sm sm:text-base"
                  >
                    Connect on WeChat <MessageSquare size={18} className="text-brand-green" />
                  </a>
                </div>
              </div>

              {/* Photo Space: Chinese Campus & University Network */}
              <div className="lg:col-span-5">
                <PhotoSpace
                  title="Chinese University Campus & International Student Life"
                  subtitle="Primary destination for ILP Study scholars with 50+ students placed for September 2026 intake"
                  badge="Featured University Network"
                  aspectRatio="aspect-[4/3]"
                  fallbackSrc="/partnershipImage/ilp-partnership-1.jpg?v=20261110"
                  className="shadow-2xl border-2 border-white/20"
                />
              </div>

            </div>

            {/* Quick Metrics Ribbon */}
            <div className="mt-10 sm:mt-16 pt-8 sm:pt-12 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6">
              {stats.map((st, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1.5 leading-tight tracking-tight">
                      {st.value}
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-brand-pink uppercase tracking-wide">
                      {st.label}
                    </div>
                  </div>
                  <div className="text-xs text-slate-300/80 mt-2 font-medium leading-relaxed">
                    {st.desc}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* AT A GLANCE DOSSIER */}
        <section className="py-6 sm:py-16 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">
          <div className="bg-white rounded-none sm:rounded-[36px] px-5 py-8 sm:p-12 lg:p-16 border-y sm:border border-slate-200/90 shadow-none sm:shadow-card">
            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider">
                  <Building2 size={14} />
                  <span>Institutional Overview</span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-dark mb-4 sm:mb-6 tracking-tight">
                  At a Glance: International Learning Pathways
                </h2>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                  International Learning Pathways, trading as <strong>ILP Study</strong>, is an overseas education consultancy headquartered in Dhaka, Bangladesh. We counsel international students on higher education abroad and manage the complete application lifecycle on their behalf — university and programme selection, credential verification, scholarship applications, visa preparation, and pre-departure briefings.
                </p>

                <div className="grid sm:grid-cols-2 gap-3 sm:gap-4 text-sm font-medium">
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 text-xs uppercase tracking-wider block font-bold mb-1">Registered Name</span>
                    <strong className="text-brand-dark text-sm sm:text-base">International Learning Pathways</strong>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 text-xs uppercase tracking-wider block font-bold mb-1">Trading Name</span>
                    <strong className="text-brand-dark text-sm sm:text-base">ILP Study</strong>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 text-xs uppercase tracking-wider block font-bold mb-1">Institutional Route</span>
                    <strong className="text-brand-green text-sm sm:text-base">Direct Submissions</strong>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100">
                    <span className="text-slate-400 text-xs uppercase tracking-wider block font-bold mb-1">Primary Destination</span>
                    <strong className="text-brand-pink text-sm sm:text-base">China (Undergraduate &amp; Postgraduate)</strong>
                  </div>
                  <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50 border border-slate-100 sm:col-span-2">
                    <span className="text-slate-400 text-xs uppercase tracking-wider block font-bold mb-1">Head Office</span>
                    <strong className="text-brand-dark text-sm sm:text-base">
                      Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Dhaka-1216, Bangladesh
                    </strong>
                  </div>
                </div>
              </div>

              {/* Photo Space: Dhaka Head Office */}
              <div className="lg:col-span-5">
                <PhotoSpace
                  title="Our Office in Dhaka"
                  subtitle="Kader’s Complex, Lift No. 9, East Shewrapara, Dhaka-1216"
                  badge="Dhaka Headquarters"
                  aspectRatio="aspect-[4/3]"
                  fallbackSrc="/partnershipImage/ilp-partnership-2.jpg?v=20261110"
                  className="shadow-xl"
                />
              </div>

            </div>
          </div>
        </section>

        {/* WHY UNIVERSITIES WORK WITH US (6 PILLARS) */}
        <section className="py-12 sm:py-20 bg-[#f1f5f9] border-y border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider">
                <ShieldCheck size={14} />
                <span>Trusted Liaison for Admissions Offices</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight mb-4 sm:mb-6">
                Why Universities Work With Us
              </h2>
              <p className="text-sm sm:text-lg text-slate-600 font-medium">
                We remove administrative friction, eliminate unqualified files, and provide same-day communication via the channels your international admissions officers use daily.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {whyWorkWithUs.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-5 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center ${pillar.color} shadow-sm group-hover:scale-110 transition-transform flex-shrink-0`}>
                        {pillar.icon}
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-pink transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-brand-dark">
                    <CheckCircle2 size={14} className="text-brand-green" /> Verified Institutional Practice
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* A DIVERSE STUDENT POOL (6 MARKETS) */}
        <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-10 sm:mb-16">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 mb-4 px-3.5 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
                <Globe2 size={14} />
                <span>Mitigating Concentration Risk</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-dark tracking-tight mb-4 sm:mb-6">
                A Diverse Global Student Pool
              </h2>
              <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-6">
                Our applicant network extends well beyond Bangladesh. We recruit from <strong>Tajikistan, Azerbaijan, Brazil, the United States, and several African countries</strong>, expanding these strategic channels every intake.
              </p>
              <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-slate-700 leading-relaxed font-medium text-sm sm:text-base">
                <span className="text-brand-pink font-bold block mb-1">Why Campus Diversity Matters:</span>
                For a university managing its international mix, recruitment source diversity is critical. An organization drawing on six markets across South Asia, Central Asia, the Americas, and Africa supports campus diversity in a way a single-country agent cannot, while reducing the concentration risk that comes with relying on a single geographic source for enrolment.
              </div>
            </div>

            {/* Photo Space: International Students Diversity */}
            <div className="lg:col-span-5">
              <PhotoSpace
                title="Diverse International Students on Campus"
                subtitle="Scholars recruited from South Asia, Central Asia, the Americas, and Africa"
                badge="Student Diversity Pool"
                aspectRatio="aspect-[4/3]"
                fallbackSrc="/partnershipImage/ilp-partnership-3.jpg?v=20261110"
                className="shadow-xl"
              />
            </div>

          </div>

          {/* 6 Recruitment Markets Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {recruitmentMarkets.map((market, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    {market.region}
                  </span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${market.color}`}>
                    {market.tag}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-brand-dark mb-2">{market.country}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{market.desc}</p>
              </div>
            ))}
          </div>

          {/* WHO OUR STUDENTS ARE */}
          <div className="mt-10 sm:mt-16 bg-brand-dark text-white rounded-3xl sm:rounded-[36px] p-5 sm:p-12 lg:p-14 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-80 h-80 bg-brand-purple/20 rounded-full blur-[100px]" />
            <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <span className="text-brand-green font-bold text-xs uppercase tracking-wider block mb-2">
                  Pre-Screening Standard
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-4">
                  Who Our Students Are
                </h3>
                <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                  Applicants are typically secondary school leavers and bachelor’s graduates seeking undergraduate and postgraduate places, most of them self-funded or applying for merit and government scholarships. Every applicant is thoroughly pre-screened on academic record, financial capacity, and English/Chinese language proficiency before we recommend any institution.
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0" />
                  <span>Academic Record Verification</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0" />
                  <span>Financial Solvency Verification</span>
                </div>
                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white/10 border border-white/10 text-sm font-semibold">
                  <CheckCircle2 size={18} className="text-brand-green flex-shrink-0" />
                  <span>Language Proficiency Check</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK (6-STAGE WORKFLOW) */}
        <section className="py-12 sm:py-20 bg-[#f8fafc] border-b border-slate-200/80 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-brand-pink/10 text-brand-pink text-xs font-bold uppercase tracking-wider">
                <FileCheck size={14} />
                <span>Standardized Quality Process</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight mb-4 sm:mb-6">
                How We Work: The 6 Stages
              </h2>
              <p className="text-sm sm:text-lg text-slate-600 font-medium">
                Every applicant we send has been through the same six stages, so the files your international office receives are complete, consistent, and correctly documented.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {workflowStages.map((stage, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-5 sm:p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 relative group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5 sm:mb-6">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center ${stage.color} shadow-sm text-white font-bold flex-shrink-0`}>
                        {stage.icon}
                      </div>
                      <span className="text-2xl sm:text-3xl font-black text-slate-300 group-hover:text-brand-pink transition-colors">
                        {stage.step}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-brand-dark mb-3">
                      {stage.title}
                    </h3>

                    <p className="text-slate-600 text-sm leading-relaxed font-normal">
                      {stage.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-bold text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-brand-green"></span> Stage {stage.step} of 06
                  </div>
                </div>
              ))}
            </div>

            {/* Photo Space: Student Visa & Arrival in China */}
            <div className="mt-10 sm:mt-16">
              <PhotoSpace
                title="Student Pre-Departure Briefing & Campus Arrival in China"
                subtitle="Students accompanied through JW202, Chinese embassy visa clearance, dorm check-in, and campus registration"
                badge="Campus Arrival Support"
                aspectRatio="aspect-[16/10] sm:aspect-[21/9]"
                fallbackSrc="/partnershipImage/ilp-partnership-4.jpg?v=20261110"
                className="shadow-xl"
              />
            </div>

          </div>
        </section>

        {/* PARTNERSHIP PROPOSAL SECTION */}
        <section id="proposal" className="py-12 sm:py-20 bg-[#f1f5f9] border-b border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold uppercase tracking-wider">
                <Handshake size={14} />
                <span>September 2027 Intake &amp; Beyond</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight mb-4 sm:mb-6">
                Institutional Cooperation Proposal
              </h2>
              <p className="text-sm sm:text-lg text-slate-600 font-medium">
                We are actively seeking recruitment cooperation agreements with Chinese universities for the September 2027 intake and beyond. We build deep, long-term institutional ties rather than a long list of nominal agreements.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
              
              {/* What We Ask */}
              <div className="bg-white rounded-3xl sm:rounded-[36px] p-5 sm:p-10 lg:p-12 border border-slate-200/90 shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-pink/10 text-brand-pink flex items-center justify-center font-bold flex-shrink-0">
                      <FileText size={24} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase text-brand-pink tracking-wider block">Institutional Requirements</span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-brand-dark leading-tight">What We Ask From The University</h3>
                    </div>
                  </div>

                  <ul className="space-y-6 text-slate-600">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        1
                      </div>
                      <div>
                        <strong className="block text-brand-dark text-base mb-1 font-bold">Cooperation Agreement</strong>
                        <p className="text-sm">A signed recruitment agreement covering the international markets we recruit from.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        2
                      </div>
                      <div>
                        <strong className="block text-brand-dark text-base mb-1 font-bold">Current Requirements</strong>
                        <p className="text-sm">Admission criteria, deadlines, and scholarship eligibility for each intake, updated whenever they change.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        3
                      </div>
                      <div>
                        <strong className="block text-brand-dark text-base mb-1 font-bold">A Named Contact</strong>
                        <p className="text-sm">One dedicated admissions officer in the international office whom we can reach directly.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-pink/10 text-brand-pink flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        4
                      </div>
                      <div>
                        <strong className="block text-brand-dark text-base mb-1 font-bold">Written Commission Terms</strong>
                        <p className="text-sm">Recruitment rates and payment schedule clearly set out in the bilateral agreement.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 text-xs font-semibold text-slate-500">
                  Ready to share your institution&apos;s standard agency agreement template? Email us directly.
                </div>
              </div>

              {/* What We Commit To */}
              <div className="bg-brand-dark text-white rounded-3xl sm:rounded-[36px] p-5 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/15 rounded-full blur-[80px] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-brand-green/20 text-brand-green flex items-center justify-center font-bold flex-shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold uppercase text-brand-green tracking-wider block">Our Pledge to You</span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">What We Commit To</h3>
                    </div>
                  </div>

                  <ul className="space-y-6 text-slate-300">
                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <strong className="block text-white text-base mb-1 font-bold">Complete Applications Only</strong>
                        <p className="text-sm text-slate-300">Verified documents and screened candidates. We never submit speculative files to artificially inflate numbers.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <strong className="block text-white text-base mb-1 font-bold">Accurate Representation</strong>
                        <p className="text-sm text-slate-300">Your programmes, fees, curriculum, and scholarship terms described to prospective students exactly as you publish them.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <strong className="block text-white text-base mb-1 font-bold">No Misrepresentation of Outcomes</strong>
                        <p className="text-sm text-slate-300">We never promise admission, scholarship awards, or visa approval to any student.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <strong className="block text-white text-base mb-1 font-bold">Post-Arrival Support</strong>
                        <p className="text-sm text-slate-300">We stay in contact with students after enrolment so your office is not overwhelmed with routine settling-in questions.</p>
                      </div>
                    </li>

                    <li className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5 font-bold text-xs">
                        ✓
                      </div>
                      <div>
                        <strong className="block text-white text-base mb-1 font-bold">A Long-Term Relationship</strong>
                        <p className="text-sm text-slate-300">We prioritize building a small number of deep university cooperation channels rather than a superficial directory.</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 text-xs font-semibold text-brand-green flex items-center gap-2">
                  <CheckCircle2 size={16} /> Mutual accountability and contractual compliance
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* START A CONVERSATION & WECHAT QR CODE SECTION */}
        <section id="contact" className="py-12 sm:py-20 bg-[#f8fafc] relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full bg-brand-purple/10 text-brand-purple text-xs font-bold uppercase tracking-wider">
                <MessageSquare size={14} />
                <span>Direct Dialogue</span>
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-brand-dark tracking-tight mb-4 sm:mb-6">
                Start a Conversation
              </h2>
              <p className="text-sm sm:text-lg text-slate-600 font-medium">
                We would welcome the opportunity to discuss cooperation with your international office — by WeChat, video conference, or in person on campus.
              </p>
            </div>

            <div className="grid lg:grid-cols-12 gap-6 sm:gap-10 items-stretch">
              
              {/* Liaison Card */}
              <div className="lg:col-span-7 bg-white rounded-3xl sm:rounded-[36px] p-5 sm:p-10 lg:p-12 border border-slate-200/90 shadow-card flex flex-col justify-between">
                <div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 sm:mb-8 pb-6 border-b border-slate-200">
                    <div>
                      <span className="text-xs font-bold uppercase text-brand-green tracking-wider block mb-1">
                        Institutional Relations &amp; Collaborations
                      </span>
                      <h3 className="text-xl sm:text-3xl font-black text-brand-dark">
                        Tanjid Chowdhury
                      </h3>
                      <p className="text-slate-600 font-semibold text-sm">
                        Business Development &amp; Collaborations
                      </p>
                    </div>
                    <div className="px-3.5 py-2 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold flex items-center gap-1.5 flex-shrink-0">
                      <CheckCircle2 size={14} /> Verified Liaison Representative
                    </div>
                  </div>

                  <div className="space-y-5 sm:space-y-6">
                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-xs flex items-center justify-center text-brand-pink flex-shrink-0">
                        <Mail size={20} className="sm:w-[22px] sm:h-[22px]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold uppercase text-slate-400 block">Direct Institutional Email</span>
                        <a
                          href="mailto:international@ilpstudy.com"
                          className="text-sm sm:text-lg font-bold text-brand-dark hover:text-brand-pink transition-colors break-all sm:break-normal"
                        >
                          international@ilpstudy.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-xs flex items-center justify-center text-brand-green flex-shrink-0">
                        <Phone size={20} className="sm:w-[22px] sm:h-[22px]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold uppercase text-slate-400 block">Bangladesh Phone &amp; WhatsApp</span>
                        <p className="text-sm sm:text-base font-bold text-brand-dark flex flex-wrap items-center gap-x-2 gap-y-0.5">
                          <a href="tel:+8801602566398" className="hover:text-brand-pink transition-colors">+880 1602 566398</a>
                          <span className="text-slate-300 hidden sm:inline">|</span>
                          <a href="https://wa.me/8801895626831" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors">+880 1895 626831</a>
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-xs flex items-center justify-center text-brand-purple flex-shrink-0">
                        <MessageSquare size={20} className="sm:w-[22px] sm:h-[22px]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold uppercase text-slate-400 block">WhatsApp &amp; WeChat</span>
                        <a 
                          href="https://wa.me/8615685689193"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm sm:text-base font-bold text-brand-dark hover:text-brand-green transition-colors"
                        >
                          +86 156 8568 9193
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5 sm:gap-4">
                      <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-slate-50 border border-slate-200/70 shadow-xs flex items-center justify-center text-slate-700 flex-shrink-0">
                        <MapPin size={20} className="sm:w-[22px] sm:h-[22px]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold uppercase text-slate-400 block">Head Office Address</span>
                        <p className="text-xs sm:text-sm font-semibold text-slate-700 leading-relaxed">
                          Kader’s Complex, Lift No. 9, H-888/C, East Shewrapara, Dhaka-1216, Bangladesh
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-stretch sm:items-center">
                  <a
                    href="mailto:international@ilpstudy.com?subject=Cooperation%20Agreement%20Inquiry%20-%20ILP%20Study"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-brand-dark text-white font-bold text-sm hover:bg-brand-pink transition-all flex items-center justify-center gap-2"
                  >
                    Send Email Proposal <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white text-brand-dark font-bold text-sm border border-slate-300 hover:border-brand-green transition-all text-center"
                  >
                    Online Inquiry Form
                  </a>
                </div>
              </div>

              {/* WeChat QR Code Scan Container */}
              <div className="lg:col-span-5 bg-gradient-to-br from-brand-dark via-slate-900 to-brand-dark text-white rounded-3xl sm:rounded-[36px] p-5 sm:p-10 shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-brand-green/20 rounded-full blur-[70px]" />
                
                <div className="relative z-10 flex flex-col items-center w-full">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/20 text-brand-green flex items-center justify-center mb-4">
                    <QrCode size={26} />
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black mb-2">Scan to Add on WeChat</h4>
                  <p className="text-xs text-slate-300 max-w-xs mb-6">
                    Connect directly with Tanjid Chowdhury for fast response on applicant files and bilateral agreements.
                  </p>

                  {/* Actual WeChat QR Code Image */}
                  <div className="w-56 h-56 sm:w-64 sm:h-64 max-w-full bg-white rounded-3xl p-3 sm:p-4 shadow-2xl border-4 border-brand-green/30 relative flex flex-col items-center justify-center group overflow-hidden">
                    <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src="/partnershipImage/patnership-wechat-contact.jpg?v=20261110"
                        alt="ILP Study WeChat QR Code (+86 156 8568 9193)"
                        width={400}
                        height={400}
                        unoptimized={true}
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className="mt-6 text-xs text-slate-300 font-medium">
                    China / WeChat Contact:&nbsp;
                    <span className="text-brand-green font-bold text-sm block sm:inline mt-0.5 sm:mt-0">+86 156 8568 9193</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
