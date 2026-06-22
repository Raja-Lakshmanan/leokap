import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

const MobileNavbar = ({ openQuoteModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('Home');

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
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active Section Detection
      const sections = ['Home', 'About', 'Products', 'Projects', 'Contact'];
      let current = 'Home';
      
      for (const section of [...sections].reverse()) {
        if (section === 'Home') continue;
        const el = document.getElementById(section.toLowerCase());
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            current = section;
            break;
          }
        }
      }
      
      if (window.scrollY < 100) {
        current = 'Home';
      }
      
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
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
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: 0.1 + i * 0.05, duration: 0.4, ease: [0.16, 1, 0.3, 1] }
    })
  };

  return (
    <>
      {/* Premium Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#0050FF] to-[#00D6FF] z-[60] origin-left shadow-[0_0_10px_rgba(0,214,255,0.5)]"
        style={{ scaleX }}
      />

      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 flex items-center justify-between px-6 ${
          scrolled || isOpen
            ? 'h-[70px] bg-[rgba(5,5,5,0.75)] backdrop-blur-[20px] border-b border-[rgba(255,255,255,0.05)] shadow-lg'
            : 'h-[80px] bg-transparent'
        }`}
      >
        {/* Left: Logo */}
        <div className="flex-shrink-0 z-50">
          <a href="#" onClick={closeMenu} className="text-white text-sm font-bold tracking-widest hover:text-[#00D6FF] transition-colors">
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
            className="fixed inset-0 z-40 bg-[rgba(5,5,5,0.95)] backdrop-blur-2xl flex flex-col justify-center px-8"
          >
            <div className="flex flex-col space-y-6 mt-10">
              {menuItems.map((item, i) => {
                const isActive = activeSection === item.name;
                
                return (
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
                    className={`block text-4xl font-bold tracking-tight transition-all duration-300 border-l-[3px] py-1 ${
                      isActive
                        ? 'text-white opacity-100 border-[#00D6FF] pl-5 drop-shadow-[0_0_15px_rgba(0,214,255,0.5)]'
                        : 'text-white opacity-40 hover:opacity-100 border-transparent pl-4'
                    }`}
                  >
                    {item.name}
                  </motion.a>
                );
              })}
            </div>

            <motion.div 
              custom={menuItems.length}
              variants={itemVariants}
              className="mt-16 flex flex-col space-y-4"
            >
              <div className="w-12 h-[1px] bg-white/20 mb-4"></div>
              
              <button 
                onClick={() => { closeMenu(); openQuoteModal(); }} 
                className="w-full py-4 bg-white/5 border border-white/10 text-white text-sm font-bold tracking-wide rounded-full text-center hover:bg-white/10 transition-colors"
              >
                Get Free Quote
              </button>
              
              <div className="grid grid-cols-2 gap-4 mt-2">
                <a href="tel:+919884003999" className="py-3 bg-[var(--blue)] shadow-[0_0_15px_rgba(0,80,255,0.3)] rounded-full text-center text-sm text-white font-bold hover:bg-[var(--cyan)] transition-colors">
                  Call Now
                </a>
                <a href="https://wa.me/919884003999" target="_blank" rel="noreferrer" className="py-3 bg-[#25D366] shadow-[0_0_15px_rgba(37,211,102,0.3)] rounded-full text-center text-sm text-white font-bold hover:bg-[#1EBE5D] transition-colors">
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
