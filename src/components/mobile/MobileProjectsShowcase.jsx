import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    name: 'LUXURY VILLA',
    location: 'Banjara Hills, Hyderabad',
    type: 'Residential',
    image: 'bg-zinc-800'
  },
  {
    id: 2,
    name: 'TECH PARK IT',
    location: 'Madhapur, Hyderabad',
    type: 'Commercial',
    image: 'bg-zinc-800'
  },
  {
    id: 3,
    name: 'METRO STATION',
    location: 'Hitec City, Hyderabad',
    type: 'Infrastructure',
    image: 'bg-zinc-800'
  }
];

const MobileProjectsShowcase = () => {
  return (
    <section id="projects" className="relative py-20 bg-black">
      <div className="px-6 mb-12">
        <div className="flex items-center mb-4">
          <div className="w-12 h-[1px] bg-[var(--gold)] mr-4"></div>
          <span className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase">Featured Projects</span>
        </div>
        <h2 className="text-[clamp(28px,7vw,40px)] font-bold tracking-tight text-white">
          Our Mark of Excellence.
        </h2>
      </div>

      <div className="flex flex-col space-y-10">
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
            className="w-full relative"
          >
            {/* Full width image container */}
            <div className={`w-full aspect-[4/5] ${project.image} relative overflow-hidden`}>
              {/* Fallback pattern if no image */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:10px_10px]"></div>
              
              {/* Gradient Overlay for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              
              {/* Content pinned to bottom */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                <p className="text-[var(--gold)] text-xs font-bold tracking-widest uppercase mb-2">
                  {project.type}
                </p>
                <h3 className="text-3xl font-bold text-white mb-2 tracking-tight">
                  {project.name}
                </h3>
                <p className="text-white/70 text-sm font-light">
                  {project.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="px-6 mt-12">
        <button className="w-full py-4 bg-transparent border border-white/30 text-white font-semibold rounded-full tracking-wide hover:bg-white/5 transition-colors">
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default MobileProjectsShowcase;
