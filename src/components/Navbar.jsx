import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const Navbar = ({ openQuoteModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');
  const [hoveredSection, setHoveredSection] = useState(null);

  // Scroll Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      // Background blur trigger
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active Section Detection
      const sections = ['Home', 'About', 'Products', 'Projects', 'Contact'];
      let current = 'Home';
      
      // Check from bottom to top
      for (const section of [...sections].reverse()) {
        if (section === 'Home') continue;
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the top of the section is anywhere above the middle of the screen
          if (rect.top <= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      
      // Force Home if at the very top
      if (window.scrollY < 100) {
        current = 'Home';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Premium Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] z-[60] origin-left shadow-[0_0_10px_rgba(0,214,255,0.5)]"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 flex items-center justify-between px-8 md:px-16 ${
          scrolled
            ? 'h-[72px] bg-[rgba(5,5,5,0.75)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)]'
            : 'h-[100px] bg-transparent'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <a href="#" className="text-white text-xs md:text-sm font-semibold tracking-wider hover:text-[#00D6FF] transition-colors duration-300">
            LEOKAP ADHESIVE INDIA PVT. LTD.
          </a>
        </div>

        {/* Center: Premium Animated Links */}
        <div className="hidden lg:flex items-center space-x-2">
          {['Home', 'About', 'Products', 'Projects', 'Contact'].map((item) => {
            const isActive = activeSection === item;
            const isHovered = hoveredSection === item;

            return (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onMouseEnter={() => setHoveredSection(item)}
                onMouseLeave={() => setHoveredSection(null)}
                onClick={(e) => {
                  e.preventDefault();
                  if (item === 'Home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    const el = document.getElementById(item.toLowerCase());
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className={`relative px-5 py-2 transition-colors duration-300 ${
                  isActive ? 'text-white font-[600]' : 'text-white/60 font-[500] hover:text-white'
                }`}
              >
                <span className="relative z-10 text-sm tracking-wide">{item}</span>
                
                {/* Active Indicator (Framer Motion Layout Animation) */}
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] rounded-full shadow-[0_0_12px_rgba(0,214,255,0.4)]"
                    transition={{ type: "spring", stiffness: 350, damping: 30, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}

                {/* Hover Preview Indicator */}
                {!isActive && isHovered && (
                  <motion.div
                    layoutId="navbar-hover-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-0 left-4 right-4 h-[2px] bg-white/30 rounded-full"
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="hidden md:block">
          <motion.button
            onClick={openQuoteModal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-6 py-2.5 rounded-full overflow-hidden group bg-white/5 border border-white/10 hover:bg-white/10 transition-colors duration-300"
          >
            <span className="relative z-10 text-white text-sm font-semibold tracking-wide">
              Get A Free Quote
            </span>
          </motion.button>
        </div>
        
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button className="text-white hover:text-[#00D6FF] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
