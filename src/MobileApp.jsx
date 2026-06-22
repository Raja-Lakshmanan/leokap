import React from 'react';
import MobileNavbar from './components/mobile/MobileNavbar';
import MobileHeroScrollytelling from './components/mobile/MobileHeroScrollytelling';
import MobileAboutSection from './components/mobile/MobileAboutSection';
import MobileProductsGallery from './components/mobile/MobileProductsGallery';
import MobileProjectsShowcase from './components/mobile/MobileProjectsShowcase';
import MobileContactSection from './components/mobile/MobileContactSection';
import Footer from './components/Footer';

function MobileApp({ openQuoteModal }) {
  return (
    <div className="mobile-app-container bg-[var(--primary)] min-h-screen text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--blue)] selection:text-white">
      <MobileNavbar openQuoteModal={openQuoteModal} />
      
      <main>
        <MobileHeroScrollytelling openQuoteModal={openQuoteModal} />
        
        {/* The animated background applies to sections after Hero */}
        <div className="relative w-full">
          {/* Subtle animated background: blueprint lines, construction grid, golden glow */}
          <div className="mobile-blueprint-bg absolute inset-0 z-0 pointer-events-none"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(217,164,65,0.03)] to-transparent z-0 pointer-events-none"></div>
          
          <div className="relative z-10">
            <MobileAboutSection />
            <MobileProductsGallery />
            <MobileProjectsShowcase />
            <MobileContactSection openQuoteModal={openQuoteModal} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default MobileApp;
