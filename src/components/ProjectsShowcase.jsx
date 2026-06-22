import React from 'react';
import { motion } from 'framer-motion';

const ProjectsShowcase = () => {
  return (
    <section id="projects" className="relative w-full bg-[var(--secondary)] py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-screen-2xl mx-auto">
        
        <div className="text-center mb-24 md:mb-32">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-[var(--gold)] font-bold tracking-widest uppercase text-sm mb-4"
          >
            Portfolio
          </motion.h3>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight"
          >
            FEATURED PROJECTS.
          </motion.h2>
        </div>

        {/* Project 1 - Full Width */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] mb-8 lg:mb-16 overflow-hidden group cursor-pointer"
        >
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#111] to-[#2a2a2e] transition-transform duration-1000 ease-out group-hover:scale-105"></div>
          
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-700"></div>

          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 right-8 md:right-16 flex flex-col md:flex-row justify-between items-start md:items-end z-10">
            <div>
              <h3 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 md:mb-4">Luxury Commercial Complex</h3>
              <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light max-w-xl">
                A 500,000 sq.ft deployment using LEO Elite for maximum structural integrity.
              </p>
            </div>
            <div className="mt-6 md:mt-0 px-6 py-3 border border-white/30 backdrop-blur-sm rounded-full text-sm font-semibold tracking-wide uppercase hover:bg-white hover:text-black transition-colors duration-300">
              View Project
            </div>
          </div>
        </motion.div>

        {/* Split Projects */}
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          
          {/* Project 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-1/2 relative aspect-[4/3] group cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0C] transition-transform duration-1000 ease-out group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <p className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase mb-2">Residential</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Premium Villa Infrastructure</h3>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full md:w-1/2 relative aspect-[4/3] group cursor-pointer overflow-hidden mt-8 md:mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-[#222] to-[#050505] transition-transform duration-1000 ease-out group-hover:scale-105"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <p className="text-[var(--cyan)] text-sm font-bold tracking-widest uppercase mb-2">Industrial</p>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Heavy Duty Manufacturing Floor</h3>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProjectsShowcase;
