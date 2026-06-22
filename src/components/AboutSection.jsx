import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutSection = () => {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [200, -200]);

  return (
    <section ref={containerRef} id="about" className="relative w-full bg-[var(--primary)] py-32 md:py-48 px-8 md:px-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
        
        {/* Left Side: Massive Typography */}
        <div className="flex-1">
          <motion.h3 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-[var(--gold)] font-bold tracking-widest uppercase text-sm mb-6"
          >
            About Company
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-12 leading-tight"
          >
            Explore Tile Adhesive, Grouts & Waterproofing.
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8 text-lg md:text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-2xl"
          >
            <p>
              With over two decades of industry experience and having led the growth journey of two leading organizations in the market, Mr. Desigan decided to begin his entrepreneurial journey in 2021 with LeoKap.
            </p>
            <p>
              We are backed by immense practical knowledge of the industry to offer products that promise flawless results and complete customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Right Side: Editorial Parallax Images (Placeholders) */}
        <div className="flex-1 relative w-full aspect-square lg:aspect-[4/5] flex items-center justify-center">
          {/* Decorative background element */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[var(--secondary)] to-transparent opacity-50 rounded-3xl"></div>
          
          {/* Main Image */}
          <motion.div style={{ y: y1 }} className="absolute w-[80%] h-[70%] z-10 overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-[var(--secondary)] border border-[rgba(255,255,255,0.05)] flex items-center justify-center group">
               {/* This would be an actual architectural image in production */}
               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1e] to-[#0A0A0C]"></div>
               <span className="relative z-10 text-[var(--text-secondary)] uppercase tracking-widest text-xs font-bold group-hover:scale-110 transition-transform duration-500">Premium Imagery</span>
            </div>
          </motion.div>
          
          {/* Secondary Image floating over */}
          <motion.div style={{ y: y2 }} className="absolute bottom-[5%] -left-[10%] w-[50%] h-[40%] z-20 overflow-hidden shadow-2xl">
            <div className="w-full h-full bg-[var(--primary)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center group">
               <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue)]/20 to-transparent"></div>
               <span className="relative z-10 text-white uppercase tracking-widest text-[10px] font-bold group-hover:scale-110 transition-transform duration-500">Texture Detail</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
