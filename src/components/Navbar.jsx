import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar background after scrolling down 50px
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-8 md:px-16 ${
        scrolled
          ? 'h-[72px] bg-[rgba(10,10,12,0.6)] backdrop-blur-md border-b border-[rgba(255,255,255,0.05)]'
          : 'h-[100px] bg-transparent'
      }`}
    >
      {/* Left: Logo */}
      <div className="flex-shrink-0">
        <a href="#" className="text-white text-xs md:text-sm font-semibold tracking-wider hover:text-[var(--gold)] transition-colors duration-300">
          LEOKAP ADHESIVE INDIA PVT. LTD.
        </a>
      </div>

      {/* Center: Links */}
      <div className="hidden lg:flex items-center space-x-10">
        {['Home', 'About', 'Products', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-[var(--text-secondary)] text-sm font-medium hover:text-[var(--text-primary)] transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[var(--text-primary)] transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </div>

      {/* Right: CTA */}
      <div className="hidden md:block">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-6 py-2.5 rounded-full overflow-hidden group"
        >
          {/* Subtle gradient border trick */}
          <span className="absolute inset-0 rounded-full border border-[rgba(255,255,255,0.2)] group-hover:border-transparent transition-colors duration-300"></span>
          <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[var(--gold)] to-[#FAD961] p-[1px]">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-[var(--primary)]"></span>
          </span>
          <span className="relative z-10 text-white text-sm font-semibold tracking-wide">
            Get A Free Quote
          </span>
        </motion.button>
      </div>
      
      {/* Mobile Menu Toggle (Placeholder) */}
      <div className="lg:hidden">
        <button className="text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
