import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black py-20 px-8 md:px-16 border-t border-[rgba(255,255,255,0.05)]">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
        
        {/* Brand & About */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold tracking-tight mb-6">
            LEOKAP ADHESIVE
          </h2>
          <p className="text-[var(--text-secondary)] font-light leading-relaxed max-w-md">
            Our aim is to become an industry leader with ground-breaking technology, unique products, and introducing high-performance building materials for architects, builders, and other construction professionals worldwide.
          </p>
        </div>

        {/* Contact Links */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--gold)] mb-6">Contact</h4>
          <ul className="space-y-4 text-[var(--text-secondary)] font-light">
            <li>
              <a href="tel:+919884003999" className="hover:text-white transition-colors block">
                +91 98840 03999
              </a>
            </li>
            <li>
              <a href="mailto:info@leokap.org" className="hover:text-white transition-colors block">
                info@leokap.org
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div>
          <h4 className="text-sm font-bold tracking-widest uppercase text-[var(--gold)] mb-6">Office</h4>
          <address className="not-italic text-[var(--text-secondary)] font-light space-y-2">
            <p>S.No.352/2,</p>
            <p>Avidapoigai to Velangudi Road,</p>
            <p>Kadambavanam,</p>
            <p>Sivaganga District - 630208,</p>
            <p>Tamil Nadu, India</p>
          </address>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-screen-2xl mx-auto pt-8 border-t border-[rgba(255,255,255,0.05)] flex flex-col md:flex-row justify-between items-center text-xs text-[var(--text-secondary)] font-mono uppercase tracking-widest">
        <p>&copy; {new Date().getFullYear()} LEOKAP ADHESIVE INDIA PVT. LTD.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
