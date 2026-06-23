import React from 'react';

const MobileProductReveal = () => {
  const products = [
    {
      name: "LEO Duro 311",
      desc: "Premium grade adhesive for heavy duty applications.",
      image: "/products/duro311.jpg"
    },
    {
      name: "LEO Elite",
      desc: "High-performance polymer modified cementitious adhesive.",
      image: "/products/elite.jpg"
    },
    {
      name: "LEO Marvel 360",
      desc: "Versatile bonding solution for large format tiles.",
      image: "/products/marvel360.jpg"
    },
    {
      name: "LEOKAP Reaktif 319",
      desc: "Epoxy based reactive adhesive for critical substrates.",
      image: "/products/reaktif.jpg"
    },
    {
      name: "LEOKAP Fino",
      desc: "Ultra-smooth finish for delicate installations.",
      image: "/products/fino.jpg"
    },
    {
      name: "LEOKAP Esnek",
      desc: "Highly flexible adhesive for demanding environments.",
      image: "/products/esnek.jpg"
    }
  ];

  return (
    <section id="products" className="relative w-full bg-[var(--primary)] py-24 overflow-hidden z-20">
      <div className="px-6 mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white mb-4">
          Professional Grade<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--blue)] to-[var(--cyan)]">
            Product Line
          </span>
        </h2>
        <p className="text-[var(--text-secondary)] text-sm font-light">
          Swipe to explore our industry-leading adhesive solutions.
        </p>
      </div>

      {/* Carousel */}
      <div className="w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar flex px-6 pb-12 space-x-6">
        {products.map((product, idx) => (
          <div 
            key={idx} 
            className="snap-center shrink-0 w-[85%] max-w-[320px] bg-[rgba(15,15,18,0.6)] backdrop-blur-md rounded-3xl border border-[rgba(255,255,255,0.05)] overflow-hidden flex flex-col"
          >
            {/* Image Placeholder */}
            <div className="w-full h-[300px] bg-gradient-to-b from-white/5 to-transparent relative flex items-center justify-center p-8">
               <div className="w-full h-full border-2 border-dashed border-white/10 rounded-xl flex items-center justify-center text-center p-4">
                 <span className="text-white/20 font-bold tracking-widest uppercase text-xs">{product.name}<br/>Image Layout</span>
               </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-2xl font-bold text-white tracking-tight mb-2">
                {product.name}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6 flex-grow">
                {product.desc}
              </p>
              
              <button className="w-full py-3 rounded-full bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors border border-white/10">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {/* Hide scrollbar styles inline */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
};

export default MobileProductReveal;
