import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import GlobalNetwork from '@/components/GlobalNetwork';
import Destinations from '@/components/Destinations';
import AdmissionWorkflow from '@/components/AdmissionWorkflow';
import Fields from '@/components/Fields';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Fields />
        <Destinations />
        <GlobalNetwork />
        <AdmissionWorkflow />
      </main>
      <Footer />
    </>
  );
}
