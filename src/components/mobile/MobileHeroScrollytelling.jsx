import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const MobileHeroScrollytelling = () => {
  const containerRef = useRef(null);
  const pinnedRef = useRef(null);
  const canvasRef = useRef(null);
  
  // Section Refs
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Mobile Configuration
  const config = {
    totalFrames: 49, 
    // Use every second frame (1, 3, 5...)
    imagePath: (index) => `/leokap-frames/ezgif-frame-${String(index  + 1).padStart(3, '0')}.jpg`, 
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
        
        // Cinematic Mobile layout: 90% width, centered vertically and horizontally
        const scale = (window.innerWidth * 1) / img.width;
        
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
        scrub: 2, 
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

    // 4 Minimal Narrative Beats for 600vh (totalDuration = 75)
    // 1. Hero (0-15)
    tl.fromTo(section1Ref.current, { opacity: 1 }, { opacity: 1, duration: 4, ease: 'power2.out' }, 0);
    tl.to(section1Ref.current, { opacity: 0, duration: 4, ease: 'power2.inOut' }, 11);

    // 2. Engineering (16-35)
    tl.fromTo(section2Ref.current, { opacity: 0 }, { opacity: 1, duration: 5, ease: 'power2.out' }, 16);
    tl.to(section2Ref.current, { opacity: 0, duration: 5, ease: 'power2.inOut' }, 30);

    // 3. Built To Last (36-55)
    tl.fromTo(section4Ref.current, { opacity: 0 }, { opacity: 1, duration: 5, ease: 'power2.out' }, 36);
    tl.to(section4Ref.current, { opacity: 0, duration: 5, ease: 'power2.inOut' }, 50);

    // 4. Final CTA (56-75)
    tl.fromTo(section5Ref.current, { opacity: 0 }, { opacity: 1, duration: 5, ease: 'power2.out' }, 56);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Strict typography scaling per user request
  const heroHeading = "text-[36px] font-bold tracking-tight leading-[1.1]";
  const sectionHeading = "text-[28px] font-bold tracking-tight leading-[1.1]";
  const bodyText = "text-[15px] text-[var(--text-secondary)] font-light leading-snug";

  return (
    <section ref={containerRef} id="home" className="relative w-full bg-[#0a0a0c] h-[600vh]">
      
      <div ref={pinnedRef} className="relative w-full h-screen overflow-hidden bg-[#0a0a0c]">
        
        {/* Sequence Canvas */}
        <canvas ref={canvasRef} style={{width: '100%', height: '100%'}} className="absolute inset-0 z-10 block pointer-events-none"></canvas>
          
        {/* Text Overlay Gradient for legibility at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-[#0a0a0c] opacity-60 z-20 pointer-events-none"></div>

        {/* Content Container */}
        <div className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center px-6 pb-24 pt-safe pb-safe">
          
          {/* SECTION 1: HERO */}
          <div ref={section1Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto w-full px-4">
            <span className="text-[10px] tracking-widest text-[var(--gold)] uppercase font-semibold mb-4 bg-[var(--gold)]/10 px-3 py-1 rounded-full">
              Trusted by Professionals
            </span>
            <h1 className={`${heroHeading} mb-3`}>
              LEOKAP ADHESIVE
            </h1>
            <h2 className={`${bodyText} max-w-[280px]`}>
              Make It Aesthetic.<br />Make It Long-Lasting.
            </h2>
          </div>

          {/* SECTION 2: ENGINEERING */}
          <div ref={section2Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 w-full px-4">
            <h2 className={`${sectionHeading} mb-3`}>
              ENGINEERED FOR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)]">
                MAXIMUM BONDING
              </span>
            </h2>
            <p className={`${bodyText} max-w-[280px]`}>
              Advanced polymer technology engineered for superior adhesion and long-lasting performance.
            </p>
          </div>

          {/* SECTION 3: BUILT TO LAST */}
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

          {/* SECTION 4: FINAL CTA */}
          <div ref={section5Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto w-full px-4">
            <h2 className={`${heroHeading} mb-3 tracking-widest`}>
              AESTHETIC.<br/>
              DURABLE.<br/>
              TRUSTED.
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MobileHeroScrollytelling;
