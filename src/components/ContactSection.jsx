import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section id="contact" className="relative w-full bg-[var(--primary)] py-32 border-t border-[rgba(255,255,255,0.05)]">
        <div className="max-w-screen-xl mx-auto px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-8"
          >
            Need Any Help For Tile Adhesive, Grouts & More?
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center items-center gap-6"
          >
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-[var(--gold)] text-[var(--gold)] font-bold tracking-wide rounded hover:bg-[var(--gold)] hover:text-black transition-colors duration-300">
              Download Our Catalog
            </button>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-10 py-5 bg-[var(--blue)] text-white font-bold tracking-wide rounded hover:bg-[var(--cyan)] transition-colors duration-300 shadow-[0_0_20px_rgba(0,80,255,0.3)]"
            >
              Get A Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
              onClick={() => setIsModalOpen(false)}
            ></motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-2xl bg-[rgba(15,15,18,0.9)] border border-[rgba(255,255,255,0.1)] rounded-2xl shadow-2xl overflow-hidden"
            >
              <div className="p-8 md:p-12">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-6 right-6 text-[var(--text-secondary)] hover:text-white transition-colors"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <h3 className="text-3xl font-bold mb-2">Request a Quote</h3>
                <p className="text-[var(--text-secondary)] mb-8 font-light">
                  Provide your details and we will get back to you with a premium solution.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2 font-semibold">Name</label>
                      <input type="text" className="w-full bg-black/50 border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--blue)] transition-colors" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2 font-semibold">Phone</label>
                      <input type="tel" className="w-full bg-black/50 border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--blue)] transition-colors" placeholder="+91 90000 00000" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2 font-semibold">Email</label>
                    <input type="email" className="w-full bg-black/50 border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--blue)] transition-colors" placeholder="john@example.com" />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2 font-semibold">Product Selection</label>
                    <select className="w-full bg-black/50 border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--blue)] transition-colors appearance-none">
                      <option value="">Select a Category</option>
                      <option value="adhesive">Tile Adhesive</option>
                      <option value="grout">Tile Grout</option>
                      <option value="waterproofing">Waterproofing</option>
                      <option value="putty">Wall Putty</option>
                      <option value="screed">Screed</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-widest text-[var(--text-secondary)] mb-2 font-semibold">Message</label>
                    <textarea rows="4" className="w-full bg-black/50 border border-[rgba(255,255,255,0.1)] rounded-md px-4 py-3 text-white focus:outline-none focus:border-[var(--blue)] transition-colors resize-none" placeholder="Tell us about your project requirements..."></textarea>
                  </div>

                  <button type="button" className="w-full py-4 bg-[var(--gold)] text-black font-bold uppercase tracking-widest rounded-md hover:bg-white transition-colors duration-300">
                    Submit Now
                  </button>
                </form>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
