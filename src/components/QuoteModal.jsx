import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[999] flex items-center justify-center p-4 sm:p-6"
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        ></div>

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-lg bg-[rgba(15,15,18,0.95)] border border-[rgba(255,255,255,0.1)] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]"
        >
          {/* Subtle gradient glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--blue)] to-[var(--cyan)] opacity-80"></div>
          
          <div className="p-8 sm:p-10">
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 tracking-tight">Request a Quote</h3>
            <p className="text-sm text-[var(--text-secondary)] font-light mb-8">
              Fill out the form below and our experts will get back to you shortly.
            </p>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1.5">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[var(--gold)] focus:bg-[rgba(255,255,255,0.05)] transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1.5">Email</label>
                  <input 
                    type="email" 
                    required
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[var(--gold)] focus:bg-[rgba(255,255,255,0.05)] transition-all"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1.5">Phone</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[var(--gold)] focus:bg-[rgba(255,255,255,0.05)] transition-all"
                    placeholder="+1 234 567 890"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1.5">Product Interest</label>
                <select className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white appearance-none focus:outline-none focus:border-[var(--gold)] focus:bg-[rgba(255,255,255,0.05)] transition-all">
                  <option value="" className="bg-zinc-900 text-white/50">Select a product...</option>
                  <option value="Tile Adhesive" className="bg-zinc-900">Tile Adhesive</option>
                  <option value="Tile Grout" className="bg-zinc-900">Tile Grout</option>
                  <option value="Waterproofing" className="bg-zinc-900">Waterproofing</option>
                  <option value="Wall Putty" className="bg-zinc-900">Wall Putty</option>
                  <option value="Screed" className="bg-zinc-900">Screed</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-white/60 uppercase tracking-widest mb-1.5">Message (Optional)</label>
                <textarea 
                  rows="3"
                  className="w-full px-4 py-3 bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.1)] rounded-xl text-white placeholder-white/20 focus:outline-none focus:border-[var(--gold)] focus:bg-[rgba(255,255,255,0.05)] transition-all resize-none"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <div className="pt-2">
                <button 
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[var(--gold)] to-[#FAD961] text-black text-[15px] font-bold tracking-wide rounded-xl shadow-[0_0_20px_rgba(217,164,65,0.3)] hover:scale-[1.02] active:scale-[0.98] transition-transform"
                >
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuoteModal;
