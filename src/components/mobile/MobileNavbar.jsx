import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNavbar = ({ openQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: '-100%',
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }
    })
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 ${
          scrolled || isOpen
            ? 'h-[70px] bg-[rgba(10,10,12,0.85)] backdrop-blur-xl border-b border-[rgba(255,255,255,0.05)] shadow-lg'
            : 'h-[80px] bg-transparent'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0 z-50">
          <a href="#" onClick={closeMenu} className="text-white text-sm font-bold tracking-widest hover:text-[var(--gold)] transition-colors">
            LEOKAP
          </a>
        </div>

        {/* Right: Menu Toggle */}
        <div className="z-50">
          <button 
            onClick={toggleMenu}
            className="w-10 h-10 flex flex-col justify-center items-center relative group"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? 'rotate-45 translate-y-[2px]' : '-translate-y-1'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-[2px] bg-white transition-all duration-300 ease-out ${isOpen ? '-rotate-45 -translate-y-[2px]' : 'translate-y-1'}`}></span>
          </button>
        </div>
      </motion.nav>

      {/* Full Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-40 bg-[rgba(10,10,12,0.95)] backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-6 mt-10">
              {menuItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  custom={i}
                  variants={itemVariants}
                  onClick={(e) => {
                    e.preventDefault();
                    closeMenu();
                    if (item.name === 'Home') {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      const el = document.getElementById(item.name.toLowerCase());
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-4xl font-bold tracking-tight text-white hover:text-[var(--gold)] transition-colors"
                >
                  {item.name}
                </motion.a>
              ))}
            </div>

            <motion.div 
              custom={menuItems.length}
              variants={itemVariants}
              className="mt-16 flex flex-col space-y-4"
            >
              <div className="w-12 h-[1px] bg-white/20 mb-4"></div>
              
              <button onClick={() => { closeMenu(); openQuoteModal(); }} className="w-full py-4 bg-gradient-to-r from-[var(--gold)] to-[#FAD961] text-black text-sm font-bold tracking-wide rounded-full text-center hover:scale-[1.02] transition-transform">
                Get Free Quote
              </button>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <a href="tel:+" className="py-3 bg-white/5 border border-white/10 rounded-full text-center text-sm text-white font-medium hover:bg-white/10 transition-colors">
                  Call Now
                </a>
                <a href="https://wa.me/" target="_blank" rel="noreferrer" className="py-3 bg-white/5 border border-white/10 rounded-full text-center text-sm text-white font-medium hover:bg-white/10 transition-colors">
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileNavbar;
