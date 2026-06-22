import React from 'react';
import { motion } from 'framer-motion';

const products = [
  "LEO Duro 311",
  "LEO Elite",
  "LEO Marvel 360",
  "LEOKAP Reaktif 319",
  "LEOKAP Fino",
  "LEOKAP Esnek"
];

const ProductsGallery = () => {
  return (
    <section id="products" className="relative w-full bg-[var(--primary)] py-32 px-8 md:px-16 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[var(--gold)] font-bold tracking-widest uppercase text-sm mb-4">
              Our Products
            </h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              PERFORMANCE LINE.
            </h2>
          </motion.div>
          <motion.button 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="group flex items-center space-x-4 text-sm font-bold tracking-widest uppercase"
          >
            <span>View All Products</span>
            <div className="w-12 h-[1px] bg-white group-hover:w-20 transition-all duration-300"></div>
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, idx) => (
            <motion.div
              key={product}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group cursor-pointer"
            >
              <div className="w-full aspect-[4/5] bg-[#0A0A0C] relative overflow-hidden mb-6 rounded-sm">
                {/* Product Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#111] to-[#050505] transition-transform duration-700 ease-in-out group-hover:scale-110"></div>
                
                {/* Technical Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>

                {/* Simulated product rendering */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border border-[rgba(255,255,255,0.05)] rounded flex items-center justify-center shadow-2xl bg-gradient-to-br from-[#1a1a1e] to-black">
                     <span className="text-[var(--text-secondary)] font-mono text-xs opacity-50">PRODUCT_RENDER</span>
                  </div>
                </div>

                {/* Hover overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--blue)]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl font-bold tracking-tight mb-2 group-hover:text-[var(--gold)] transition-colors duration-300">
                    {product}
                  </h4>
                  <p className="text-sm text-[var(--text-secondary)] font-mono uppercase">Industrial Grade</p>
                </div>
                <div className="w-10 h-10 rounded-full border border-[rgba(255,255,255,0.2)] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H4M13 1V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductsGallery;
