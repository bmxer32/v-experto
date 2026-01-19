import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import ContactsSection from '@/components/ContactsSection';
import Portfolio from '@/components/Portfolio';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Trust from '@/components/Trust';
import Faq from '@/components/Faq';

export default function Home() {
  return (
    <main className="min-h-screen font-sans text-slate-800 bg-white">
      <Header />
      <Hero />
      <Partners />
      <Services />
      <Trust />
      <Portfolio />
      <Faq />
      <ContactsSection />
      <Footer />
    </main>
  );
}