import React from 'react';
import { motion } from 'framer-motion';

const MobileBottomBar = ({ openQuoteModal }) => {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[90%] max-w-[400px] h-[64px] z-[100] flex items-center justify-between p-1.5 rounded-full bg-[rgba(10,10,12,0.85)] backdrop-blur-xl border border-[rgba(255,255,255,0.05)] shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
      
      <motion.a 
        href="tel:+919884003999"
        whileTap={{ scale: 0.95 }}
        className="flex-1 h-full flex items-center justify-center rounded-full text-white text-[13px] font-semibold hover:bg-white/10 transition-colors"
      >
        Call
      </motion.a>

      <div className="w-[1px] h-6 bg-white/10 mx-1"></div>

      <motion.a 
        href="https://wa.me/919884003999"
        target="_blank"
        rel="noreferrer"
        whileTap={{ scale: 0.95 }}
        className="flex-1 h-full flex items-center justify-center rounded-full text-white text-[13px] font-semibold hover:bg-[#25D366]/20 transition-colors"
      >
        WhatsApp
      </motion.a>

      <motion.button 
        onClick={openQuoteModal}
        whileTap={{ scale: 0.95 }}
        className="flex-[1.5] h-full ml-1 flex items-center justify-center rounded-full bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)] text-white text-[13px] font-bold shadow-[0_0_15px_rgba(0,80,255,0.3)]"
      >
        Get Quote
      </motion.button>

    </div>
  );
};

export default MobileBottomBar;
