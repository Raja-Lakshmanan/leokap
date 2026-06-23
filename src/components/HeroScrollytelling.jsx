import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroScrollytelling = ({ openQuoteModal }) => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const containerRef = useRef(null);
  const pinnedRef = useRef(null);
  const canvasRef = useRef(null);
  
  // DOM element refs for sections
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);

  // Canvas configuration
  // IMPORTANT: Adjust totalFrames and imagePath based on your actual sequence
  const config = {
    totalFrames: 56, 
    imagePath: (index) => `/leokap-frame/ezgif-frame-${String(index + 1).padStart(3, '0')}.jpg`, // e.g. 0001.jpg
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const container = containerRef.current;
    const pinned = pinnedRef.current;

    if (!canvas || !context || !container || !pinned) return;

    // Add a temporary red border around canvas for debugging
    canvas.style.border = "2px solid red";

    // Set canvas dimensions to window size initially
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Load images
    const images = [];
    let loadedImages = 0;

    const render = (index) => {
      if (images[index]) {
        console.log("Rendering frame:", index);
        const img = images[index];
        
        // Rewrite drawImage logic to center the image preserving aspect ratio
        const scale = Math.max(
          canvas.width / img.width,
          canvas.height / img.height
        );
        
        const drawWidth = img.width * scale;
        const drawHeight = img.height * scale;
        
        const offsetX = (canvas.width - drawWidth) / 2;
        const offsetY = (canvas.height - drawHeight) / 2;

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }
    };

    // Preload all images
    for (let i = 0; i < config.totalFrames; i++) {
      const img = new Image();
      img.src = config.imagePath(i);
      img.onload = () => {
        console.log("Frame loaded:", i);
        loadedImages++;
        
        // Verify render(0) runs successfully immediately after the first image loads
        if (loadedImages === 1) {
          render(0); 
        }
      };
      images.push(img);
    }

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const scrollProgress = ScrollTrigger.maxScroll(window) ? window.scrollY / ScrollTrigger.maxScroll(window) : 0;
    };
    window.addEventListener('resize', handleResize);

    // Setup GSAP Canvas Animation
    const frameObj = { frame: 0 };

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 5, // High scrub for super smooth cinematic lag
        pin: pinned,
      },
    });

    // We set the duration of the timeline exactly to the number of frames.
    // This allows us to place text animations at exact frame numbers!
    const totalDuration = config.totalFrames - 1;

    // Animate canvas frames linearly over the entire duration
    tl.to(frameObj, {
      frame: totalDuration,
      snap: 'frame',
      ease: 'none',
      duration: totalDuration,
      onUpdate: () => render(Math.round(frameObj.frame)),
    }, 0); 

    // Synchronize frame ranges directly with content sections
    
    // SECTION 1: Frame 0-50
    // Fade in immediately, stay until frame 40, fade out by 50
    tl.fromTo(section1Ref.current, { opacity: 1, y: 50 }, { opacity: 1, y: 0, duration: 5, ease: 'power2.out' }, 0);
    tl.to(section1Ref.current, { opacity: 0, y: -50, duration: 10, ease: 'power2.inOut' }, 10);

    // SECTION 2: Frame 50-120
    tl.fromTo(section2Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 10, ease: 'power2.out' }, 15);
    tl.to(section2Ref.current, { opacity: 0, y: -50, duration: 10, ease: 'power2.inOut' }, 24);

    // SECTION 3: Frame 120-180 (Annotations)
    tl.fromTo(section3Ref.current, { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1, duration: 10, ease: 'power2.out' }, 28);
    tl.to(section3Ref.current, { opacity: 0, scale: 1.1, duration: 10, ease: 'power2.inOut' }, 38);

    // SECTION 4: Frame 180-230
    tl.fromTo(section4Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 10, ease: 'power2.out' }, 43);
    tl.to(section4Ref.current, { opacity: 0, y: -50, duration: 10, ease: 'power2.inOut' }, 56);

    // SECTION 5: Frame 230-255 (Final CTA stays until the end)
    // tl.fromTo(section5Ref.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 10, ease: 'power2.out' }, 230);

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} id="home" className="relative w-full bg-[var(--primary)] h-[1200vh]">
      
      {/* GSAP Pinned Container - Only active within Home section */}
      <div ref={pinnedRef} className="relative w-full h-screen overflow-hidden">
        
        {/* Canvas is absolute within the pinned container, NOT fixed globally */}
        <canvas ref={canvasRef} className="absolute inset-0 z-10 w-full h-full object-cover pointer-events-none"></canvas>
          
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 z-20 pointer-events-none"></div>

        {/* --- SCROLLING CONTENT OVERLAYS --- */}
        <div className="absolute inset-0 z-20 pointer-events-none flex items-center justify-center">
          
          {/* SECTION 1: 0% - 20% */}
          <div ref={section1Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 pointer-events-auto px-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              LEOKAP ADHESIVE
            </h1>
            <h2 className="text-2xl md:text-4xl text-[var(--text-secondary)] mb-8 font-light">
              Make It Aesthetic.<br />Make It Long-Lasting.
            </h2>
            <p className="text-lg md:text-xl max-w-2xl text-[var(--text-secondary)] mb-10">
              High-Performance Tile & Stone Installation Materials.<br />
              For architects, builders and construction professionals worldwide.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button 
                onClick={() => scrollToSection('products')}
                className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
              >
                Explore Products
              </button>
              <button 
                onClick={openQuoteModal}
                className="px-8 py-4 bg-transparent border border-white text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>

          {/* SECTION 2: 20% - 40% */}
          <div ref={section2Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 px-4">
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              ENGINEERED FOR<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)]">
                MAXIMUM BONDING
              </span>
            </h2>
            <p className="text-xl md:text-2xl font-light text-[var(--text-secondary)] max-w-3xl leading-relaxed">
              Advanced polymer technology. Superior adhesion.<br />
              Professional-grade performance. Designed for projects that demand durability.
            </p>
          </div>

          {/* SECTION 3: 40% - 60% (Technical Annotations) */}
          <div ref={section3Ref} className="absolute inset-0 flex items-center justify-center opacity-0 px-4">
            <div className="relative w-full max-w-7xl h-full">
              {/* Center focal point (invisible, just for positioning) */}
              <div className="absolute top-1/2 left-1/2 w-4 h-4 -mt-2 -ml-2"></div>
              
              {/* Annotation 1: Top Left */}
              <div className="absolute top-[25%] left-[10%] md:left-[20%] flex items-center">
                <div className="hidden md:block w-32 h-[1px] bg-white/30 mr-4 origin-right scale-x-100"></div>
                <div>
                  <h4 className="text-[var(--gold)] font-bold text-sm tracking-widest mb-1">01</h4>
                  <p className="text-white text-lg font-medium tracking-wide">POLYMER ENHANCED</p>
                </div>
              </div>

              {/* Annotation 2: Bottom Left */}
              <div className="absolute top-[70%] left-[10%] md:left-[20%] flex items-center">
                <div className="hidden md:block w-24 h-[1px] bg-white/30 mr-4"></div>
                <div>
                  <h4 className="text-[var(--gold)] font-bold text-sm tracking-widest mb-1">03</h4>
                  <p className="text-white text-lg font-medium tracking-wide">EXTENDED DURABILITY</p>
                </div>
              </div>

              {/* Annotation 3: Top Right */}
              <div className="absolute top-[30%] right-[10%] md:right-[20%] flex items-center flex-row-reverse">
                <div className="hidden md:block w-40 h-[1px] bg-white/30 ml-4"></div>
                <div className="text-right">
                  <h4 className="text-[var(--gold)] font-bold text-sm tracking-widest mb-1">02</h4>
                  <p className="text-white text-lg font-medium tracking-wide">SUPERIOR BOND STRENGTH</p>
                </div>
              </div>

              {/* Annotation 4: Bottom Right */}
              <div className="absolute top-[65%] right-[10%] md:right-[20%] flex items-center flex-row-reverse">
                <div className="hidden md:block w-20 h-[1px] bg-white/30 ml-4"></div>
                <div className="text-right">
                  <h4 className="text-[var(--gold)] font-bold text-sm tracking-widest mb-1">04</h4>
                  <p className="text-white text-lg font-medium tracking-wide">CRACK RESISTANT</p>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 4: 60% - 80% */}
          <div ref={section4Ref} className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 px-4">
            <h2 className="text-6xl md:text-9xl font-bold tracking-tighter mb-12">
              BUILT TO LAST.
            </h2>
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 text-2xl md:text-4xl text-[var(--text-secondary)] font-light tracking-wide">
              <span>Residential.</span>
              <span>Commercial.</span>
              <span>Industrial.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroScrollytelling;
