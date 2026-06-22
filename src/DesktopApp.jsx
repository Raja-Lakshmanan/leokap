import React from 'react';
import Navbar from './components/Navbar';
import FloatingActions from './components/FloatingActions';
import HeroScrollytelling from './components/HeroScrollytelling';
import AboutSection from './components/AboutSection';
import WhatWeOffer from './components/WhatWeOffer';
import ProductsGallery from './components/ProductsGallery';
import ProjectsShowcase from './components/ProjectsShowcase';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function DesktopApp({ openQuoteModal }) {
  return (
    <div className="bg-[var(--primary)] min-h-screen text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--blue)] selection:text-white">
      <Navbar openQuoteModal={openQuoteModal} />
      <FloatingActions openQuoteModal={openQuoteModal} />
      
      <main>
        <HeroScrollytelling openQuoteModal={openQuoteModal} />
        <AboutSection />
        <WhatWeOffer />
        <ProductsGallery />
        <ProjectsShowcase />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default DesktopApp;
