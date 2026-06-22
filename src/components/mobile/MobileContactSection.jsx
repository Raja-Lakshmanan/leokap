import React from 'react';
const MobileContactSection = ({ openQuoteModal }) => {
  return (
    <section id="contact" className="relative py-24 px-6 bg-[var(--primary)] overflow-hidden">
      <div className="relative z-10 max-w-lg mx-auto pb-32">
        <div className="flex items-center mb-6">
          <div className="w-12 h-[1px] bg-[var(--gold)] mr-4"></div>
          <span className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase">Get In Touch</span>
        </div>
        
        <h2 className="text-[clamp(32px,8vw,48px)] font-bold tracking-tight mb-6">
          Let's Build <br/>Together.
        </h2>
        
        <p className="text-[var(--text-secondary)] text-[clamp(14px,4vw,16px)] font-light leading-relaxed mb-10">
          Ready to elevate your project? Contact our experts for technical support, product recommendations, or bulk quotes.
        </p>

        {/* Contact Info Cards */}
        <div className="space-y-4 mb-12">
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 text-[var(--gold)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-1">Phone</p>
              <a href="tel:+919884003999" className="text-white text-lg font-medium">+91 98840 03999</a>
            </div>
          </div>
          
          <div className="p-6 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-2xl flex items-start space-x-4">
            <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.05)] flex items-center justify-center flex-shrink-0 text-[var(--gold)]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div>
              <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-1">Email</p>
              <a href="mailto:info@leokap.org" className="text-white text-lg font-medium">info@leokap.org</a>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 w-full z-40 bg-[rgba(10,10,12,0.9)] backdrop-blur-xl border-t border-white/10 px-4 py-4 pb-safe flex items-center justify-between gap-3 shadow-[0_-10px_40px_rgba(0,0,0,0.5)]">
        <a href="tel:+919884003999" className="flex-1 flex flex-col items-center justify-center py-2 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5 text-white mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          <span className="text-[10px] text-white font-medium uppercase tracking-widest">Call</span>
        </a>
        <a href="https://wa.me/919884003999" target="_blank" rel="noreferrer" className="flex-1 flex flex-col items-center justify-center py-2 bg-[#25D366]/10 text-[#25D366] rounded-xl hover:bg-[#25D366]/20 transition-colors">
          <svg className="w-5 h-5 mb-1" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
          <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
        </a>
        <button 
          onClick={openQuoteModal}
          className="flex-[1.5] py-3.5 bg-[var(--blue)] text-white rounded-xl text-sm font-bold tracking-wide shadow-[0_0_15px_rgba(0,80,255,0.4)] hover:bg-[var(--cyan)] transition-colors text-center"
        >
          Get Quote
        </button>
      </div>
    </section>
  );
};

export default MobileContactSection;
