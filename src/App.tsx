import { useEffect } from 'react';
import { SpaceBackground } from './components/SpaceBackground';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { ServicesSection } from './sections/ServicesSection';
import { PricingSection } from './sections/PricingSection';
import { PromoSection } from './sections/PromoSection';
import { GallerySection } from './sections/GallerySection';
import { FooterSection } from './sections/FooterSection';
import { Phone, MessageCircle } from 'lucide-react';

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div className="relative min-h-screen bg-space-900 font-body overflow-x-hidden">
      {/* Global space background */}
      <SpaceBackground />

      {/* Content layer */}
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <PromoSection />
        <GallerySection />
        <FooterSection />
      </div>

      {/* Fixed mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="flex">
          <a
            href="https://wa.me/393513064391"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-lime text-space-900 font-bold text-xs tracking-wider"
          >
            <MessageCircle size={16} />
            WHATSAPP
          </a>
          <a
            href="tel:0331331414"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-space-800 text-white font-bold text-xs tracking-wider border-t border-white/10"
          >
            <Phone size={16} />
            CHIAMA
          </a>
        </div>
      </div>

      {/* Mobile spacer */}
      <div className="h-14 md:hidden" />
    </div>
  );
}

export default App;
