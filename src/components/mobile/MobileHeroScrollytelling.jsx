import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MobileHeroScrollytelling = ({ openQuoteModal }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerRef = useRef(null);
  const pinnedRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Section Refs
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Mobile Configuration
  const config = {
    totalFrames: 76, 
    // Use every second frame (1, 3, 5...)
    imagePath: (index) => `/leokap-frames/ezgif-frame-${String((index * 2) + 1).padStart(3, '0')}.jpg`, 
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;
    const pinned = pinnedRef.current;

    if (!canvas || !context || !container || !pinned) return;

    // Set high-res canvas
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    context.scale(dpr, dpr);

    const images = [];
    let loadedImages = 0;

    const render = (index) => {
      if (images[index]) {
        const img = images[index];
        
        // Cinematic Mobile layout: 85% width, centered vertically and horizontally
        const scale = (window.innerWidth * 0.85) / img.width;
        
        const drawWidth = img.width * scale;
        const drawHeight = img.height * scale;
        
        const offsetX = (window.innerWidth - drawWidth) / 2;
        const offsetY = (window.innerHeight - drawHeight) / 2;

        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Preload
    for (let i = 0; i < config.totalFrames; i++) {
      const img = new Image();
      img.src = config.imagePath(i);
      img.onload = () => {
        loadedImages++;
        if (loadedImages === 1) render(0); 
      };
      images.push(img);
    }

    const handleResize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      context.scale(dpr, dpr);
      render(Math.round(frameObj.frame));
    };
    window.addEventListener('resize', handleResize);

    const frameObj = { frame: 0 };
    const totalDuration = config.totalFrames - 1;

    // Timeline setup
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 3, // Mobile optimized scrub (faster feel)
        pin: pinned,
      },
    });

    // Frame sequence
    tl.to(frameObj, {
      frame: totalDuration,
      snap: 'frame',
      ease: 'none',
      duration: totalDuration,
      onUpdate: () => render(Math.round(frameObj.frame)),
    }, 0);

    // Timeline calculations based on totalDuration (75)
    // Section 1: 0% - 20% (Frames 0 - 15)
    tl.fromTo(section1Ref.current, { opacity: 0 }, { opacity: 1, duration: 3, ease: 'power2.out' }, 0);
    tl.to(section1Ref.current, { opacity: 0, duration: 3, ease: 'power2.inOut' }, 12);

    // Section 2: 20% - 40% (Frames 15 - 30)
    tl.fromTo(section2Ref.current, { opacity: 0 }, { opacity: 1, duration: 4, ease: 'power2.out' }, 15);
    tl.to(section2Ref.current, { opacity: 0, duration: 4, ease: 'power2.inOut' }, 26);

    // Section 3: 40% - 60% (Frames 30 - 45)
    tl.fromTo(section3Ref.current, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 4, ease: 'power2.out' }, 30);
    tl.to(section3Ref.current, { opacity: 0, scale: 1.05, duration: 4, ease: 'power2.inOut' }, 41);

    // Section 4: 60% - 80% (Frames 45 - 60)
    tl.fromTo(section4Ref.current, { opacity: 0 }, { opacity: 1, duration: 4, ease: 'power2.out' }, 45);
    tl.to(section4Ref.current, { opacity: 0, duration: 4, ease: 'power2.inOut' }, 56);

    // Section 5: 80% - 100% (Frames 60 - 75)
    tl.fromTo(section5Ref.current, { opacity: 0 }, { opacity: 1, duration: 4, ease: 'power2.out' }, 60);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Typography utilities for consistent scaling
  const heroHeading = "text-[clamp(28px,7vw,40px)] font-bold tracking-tight leading-[1.1]";
  const sectionHeading = "text-[clamp(24px,6vw,32px)] font-bold tracking-tight leading-[1.1]";
  const bodyText = "text-[clamp(14px,4vw,16px)] text-[var(--text-secondary)] font-light leading-snug";
  const buttonClass = "w-full py-4 text-[16px] font-semibold rounded-full flex items-center justify-center transition-transform active:scale-95";

  return (
    <section ref={containerRef} id="home" className="relative w-full bg-[var(--primary)] h-[700vh]">
      
      <div ref={pinnedRef} className="relative w-full h-screen overflow-hidden bg-[var(--primary)]">
        
        {/* Sequence Canvas */}
        <canvas ref={canvasRef} style={{width: '100%', height: '100%'}} className="absolute inset-0 z-10 block pointer-events-none"></canvas>
          
        {/* Text Overlay Gradient for legibility at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)] via-transparent to-[var(--primary)] opacity-80 z-20 pointer-events-none"></div>

        {/* Content Container */}
        <div className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center px-6 pb-24 pt-safe pb-safe">
          
          {/* SECTION 1 */}
          <div ref={section1Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto w-full px-4">
            <h1 className={`${heroHeading} mb-3`}>
              LEOKAP ADHESIVE
            </h1>
            <h2 className={`${bodyText} mb-6`}>
              Make It Aesthetic.<br />Make It Long-Lasting.
            </h2>
            <div className="flex flex-col space-y-3 w-full max-w-[280px]">
              <button 
                onClick={() => scrollToSection('products')}
                className={`${buttonClass} bg-white text-black`}
              >
                Explore Products
              </button>
              <button 
                onClick={openQuoteModal}
                className={`${buttonClass} bg-white/5 border border-white/20 text-white backdrop-blur-sm`}
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* SECTION 2 */}
          <div ref={section2Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 w-full px-4">
            <h2 className={`${sectionHeading} mb-3`}>
              ENGINEERED FOR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)]">
                MAXIMUM BONDING
              </span>
            </h2>
            <p className={`${bodyText} max-w-[280px]`}>
              Advanced polymer technology.<br />
              Superior adhesion.<br />
              Professional-grade performance.
            </p>
          </div>

          {/* SECTION 3 - Feature Chips */}
          <div ref={section3Ref} className="absolute inset-0 flex flex-col items-center justify-center opacity-0 w-full px-4">
            <div className="flex flex-col w-full max-w-[280px] space-y-2.5">
              {[
                { n: "01", t: "Polymer Enhanced" },
                { n: "02", t: "Superior Bond Strength" },
                { n: "03", t: "Crack Resistant" },
                { n: "04", t: "Extended Durability" },
                { n: "05", t: "Professional Grade" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center px-5 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-xl backdrop-blur-md">
                  <span className="text-[var(--gold)] text-xs font-bold tracking-widest mr-4">{feature.n}</span>
                  <span className="text-white text-sm font-medium tracking-wide">{feature.t}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4 */}
          <div ref={section4Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 w-full px-4">
            <h2 className={`${heroHeading} mb-8`}>
              BUILT TO LAST.
            </h2>
            <div className="flex flex-col space-y-6 text-xl text-[var(--text-secondary)] font-light tracking-widest uppercase">
              <span className="relative">
                Residential
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--gold)] rounded-full"></div>
              </span>
              <span className="relative">
                Commercial
                <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[var(--gold)] rounded-full"></div>
              </span>
              <span>
                Industrial
              </span>
            </div>
          </div>

          {/* SECTION 5 */}
          <div ref={section5Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto w-full px-4">
            <h2 className={`${heroHeading} mb-5 tracking-widest`}>
              AESTHETIC.<br/>
              DURABLE.<br/>
              TRUSTED.
            </h2>
            <div className="flex flex-col space-y-3 w-full max-w-[280px]">
              <button 
                onClick={openQuoteModal}
                className={`${buttonClass} bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)] text-white shadow-[0_0_20px_rgba(0,80,255,0.3)]`}
              >
                Get Free Quote
              </button>
              <button 
                onClick={() => scrollToSection('products')}
                className={`${buttonClass} bg-transparent text-white border-b border-white/20 rounded-none w-auto mx-auto px-4 py-2 hover:border-white transition-colors`}
              >
                Explore Products
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileHeroScrollytelling;
