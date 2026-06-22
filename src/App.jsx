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

function App() {
  return (
    <div className="bg-[var(--primary)] min-h-screen text-[var(--text-primary)] font-sans antialiased selection:bg-[var(--blue)] selection:text-white">
      <Navbar />
      <FloatingActions />
      
      <main>
        <HeroScrollytelling />
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

export default App;
