import React from 'react';

const products = [
  {
    id: 1,
    name: 'LEOKAP GOLD',
    category: 'PREMIUM ADHESIVE',
    desc: 'Ultimate bond strength for large format tiles and natural stone.',
    color: 'from-amber-400 to-yellow-600',
    image: 'bg-zinc-800' // Placeholder
  },
  {
    id: 2,
    name: 'LEOKAP SILVER',
    category: 'STANDARD ADHESIVE',
    desc: 'High-performance adhesive for ceramic and vitrified tiles.',
    color: 'from-gray-300 to-gray-500',
    image: 'bg-zinc-800'
  },
  {
    id: 3,
    name: 'EPOXY GROUT',
    category: 'JOINT FILLER',
    desc: 'Stain-free, hygienic, and chemical resistant grout.',
    color: 'from-blue-400 to-cyan-600',
    image: 'bg-zinc-800'
  },
  {
    id: 4,
    name: 'WATERPROOFING',
    category: 'PROTECTION',
    desc: 'Advanced acrylic polymer based waterproofing coating.',
    color: 'from-teal-400 to-emerald-600',
    image: 'bg-zinc-800'
  }
];

const MobileProductsGallery = () => {
  return (
    <section id="products" className="relative py-20 overflow-hidden">
      <div className="px-6 mb-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-[1px] bg-[var(--gold)] mr-4"></div>
          <span className="text-[var(--gold)] text-sm font-bold tracking-widest uppercase">Our Products</span>
        </div>
        <h2 className="text-[clamp(28px,7vw,40px)] font-bold tracking-tight">
          Engineered for <br/>Every Need.
        </h2>
      </div>

      {/* Horizontal Snap Scroll Container */}
      <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar pl-6 pr-6 pb-8 pt-4 gap-6" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
        {products.map((product) => (
          <div 
            key={product.id} 
            className="flex-none w-[85vw] max-w-[320px] snap-center bg-[rgba(20,20,22,0.6)] backdrop-blur-md border border-[rgba(255,255,255,0.05)] rounded-3xl overflow-hidden shadow-2xl relative group"
          >
            {/* Product Image Area */}
            <div className={`w-full h-56 ${product.image} relative flex items-center justify-center p-6`}>
              {/* Decorative gradient orb */}
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${product.color}`}></div>
              
              {/* Fallback box if no image */}
              <div className="w-24 h-32 bg-white/5 border border-white/10 rounded-lg shadow-lg backdrop-blur-sm z-10 flex items-center justify-center">
                <span className="text-white/20 text-xs font-bold tracking-widest -rotate-90">PRODUCT</span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6">
              <p className="text-[var(--gold)] text-xs font-bold tracking-widest mb-2 uppercase">{product.category}</p>
              <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">{product.name}</h3>
              <p className="text-sm text-[var(--text-secondary)] font-light leading-relaxed mb-6">
                {product.desc}
              </p>
              
              <button className="w-full py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold rounded-full transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
        {/* Spacer for end of scroll */}
        <div className="flex-none w-6"></div>
      </div>
    </section>
  );
};

export default MobileProductsGallery;
