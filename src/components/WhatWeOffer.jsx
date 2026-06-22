import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const categories = [
  {
    title: "Tile Adhesive",
    desc: "Engineered for maximum bond strength and extended durability.",
    number: "01"
  },
  {
    title: "Tile Grout",
    desc: "Premium finish with crack-resistant and waterproof technology.",
    number: "02"
  },
  {
    title: "Waterproofing",
    desc: "Advanced barrier systems protecting your structural integrity.",
    number: "03"
  },
  {
    title: "Wall Putty",
    desc: "Ultra-smooth finish providing the perfect foundation.",
    number: "04"
  },
  {
    title: "Screed",
    desc: "High-performance leveling compounds for demanding environments.",
    number: "05"
  }
];

const CategoryPanel = ({ category, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true, margin: "-100px" }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-24 w-full group`}
    >
      {/* Image Panel */}
      <div className="w-full lg:w-1/2 aspect-[16/9] lg:aspect-[4/3] overflow-hidden relative">
        <div className="absolute inset-0 bg-[var(--secondary)] transition-transform duration-700 ease-out group-hover:scale-105">
           {/* Placeholder for real category image */}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#111] to-[#222]"></div>
           <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
        </div>
        
        {/* Overlay Text */}
        <div className="absolute bottom-6 left-8 z-10 overflow-hidden">
           <motion.div
             initial={{ y: 50 }}
             whileInView={{ y: 0 }}
             transition={{ duration: 0.5, delay: 0.2 }}
             className="text-[var(--gold)] font-bold text-lg tracking-widest"
           >
             {category.number}
           </motion.div>
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 group-hover:text-[var(--blue)] transition-colors duration-500">
          {category.title}
        </h3>
        <p className="text-lg md:text-xl text-[var(--text-secondary)] font-light max-w-lg mb-8">
          {category.desc}
        </p>
        
        <div className="flex items-center text-sm uppercase tracking-widest font-semibold text-[var(--text-primary)] group-hover:text-[var(--gold)] transition-colors duration-300 cursor-pointer w-max">
          <span className="mr-4">Discover Series</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform group-hover:translate-x-2 transition-transform duration-300">
            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </motion.div>
  );
};

const WhatWeOffer = () => {
  return (
    <section id="what-we-offer" className="relative w-full bg-[#030303] py-32 md:py-48 px-8 md:px-16">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 md:mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8"
          >
            WHAT WE OFFER.
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="h-[1px] bg-gradient-to-r from-[rgba(255,255,255,0.2)] to-transparent max-w-4xl"
          ></motion.div>
        </div>

        {/* Category Panels */}
        <div className="flex flex-col space-y-32 md:space-y-48">
          {categories.map((category, idx) => (
            <CategoryPanel key={category.title} category={category} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;
