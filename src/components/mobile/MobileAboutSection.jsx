import React from 'react';
import { motion } from 'framer-motion';

const MobileAboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center mb-6">
            <div className="w-12 h-[1px] bg-[var(--gold)] mr-4"></div>
            <span className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase">About Us</span>
          </div>
          
          <h2 className="text-[clamp(28px,7vw,40px)] font-bold tracking-tight leading-tight mb-8">
            Pioneering the Future of Building Materials.
          </h2>
          
          <div className="space-y-6 text-[clamp(15px,4.5vw,17px)] text-[var(--text-secondary)] font-light leading-relaxed">
            <p>
              LEOKAP ADHESIVE INDIA PVT. LTD. is an ISO 9001:2015 certified company, manufacturing a wide array of premium construction materials.
            </p>
            <p>
              We specialize in Adhesives, Grouts, Epoxies, Waterproofing products, Wall Putty, and specialized mortars designed for modern architectural demands.
            </p>
            <p>
              Our products are engineered in state-of-the-art facilities to deliver uncompromising quality, ensuring your projects stand the test of time.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4">
            <div className="p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl backdrop-blur-sm">
              <h4 className="text-[var(--gold)] text-3xl font-bold mb-1">10+</h4>
              <p className="text-white text-xs font-medium tracking-wide uppercase">Years Experience</p>
            </div>
            <div className="p-5 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.05)] rounded-2xl backdrop-blur-sm">
              <h4 className="text-[var(--gold)] text-3xl font-bold mb-1">1M+</h4>
              <p className="text-white text-xs font-medium tracking-wide uppercase">Sq.Ft Covered</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MobileAboutSection;
