import React from 'react';
import MobileNavbar from './components/mobile/MobileNavbar';
import MobileHeroScrollytelling from './components/mobile/MobileHeroScrollytelling';
import MobileProductReveal from './components/mobile/MobileProductReveal';
import MobileAboutSection from './components/mobile/MobileAboutSection';
import MobileProductsGallery from './components/mobile/MobileProductsGallery';
import MobileProjectsShowcase from './components/mobile/MobileProjectsShowcase';
import MobileContactSection from './components/mobile/MobileContactSection';
import MobileBottomBar from './components/mobile/MobileBottomBar';
import Footer from './components/Footer';

function MobileApp({ openQuoteModal }) {
  return (
    <div className="relative mobile-app-container bg-[var(--primary)] min-h-screen text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--blue)] selection:text-white">
      {/* Global Blueprint Grid with slow movement */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none animate-grid-pan"
           style={{
             backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}
      ></div>

      <div className="relative z-10">
        <MobileNavbar openQuoteModal={openQuoteModal} />
        
        <main>
          <MobileHeroScrollytelling openQuoteModal={openQuoteModal} />
          <MobileProductReveal />
          
          <MobileAboutSection />
          <MobileProductsGallery />
          <MobileProjectsShowcase />
          <MobileContactSection openQuoteModal={openQuoteModal} />
        </main>

        <Footer />
        
        {/* <MobileBottomBar openQuoteModal={openQuoteModal} /> */}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gridPan {
          from { background-position: 0 0; }
          to { background-position: 40px 40px; }
        }
        .animate-grid-pan {
          animation: gridPan 10s linear infinite;
        }
      `}} />
    </div>
  );
}

export default MobileApp;
