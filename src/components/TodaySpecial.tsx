import React from "react";
import Image from "next/image";

interface TodaySpecialProps {
  onAddSpecial: (id: string) => void;
}

export default function TodaySpecial({ onAddSpecial }: TodaySpecialProps) {
  return (
    <span id="special" className="block relative -top-20">
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="bg-brand-brown text-brand-cream rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 brand-pattern opacity-10 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16 relative">
            
            {/* Graphic Panel */}
            <div className="relative aspect-square max-w-[400px] w-full mx-auto lg:mx-0 rounded-2xl overflow-hidden border-2 border-brand-cream/20 shadow-lg">
              <Image 
                src="/kurkure_cheese_momos.png" 
                alt="Today's Special - Kurkure Cheese Momos" 
                fill 
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover"
                loading="lazy"
              />
              <div className="absolute top-4 left-4 bg-brand-coral text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg sticker-badge shadow-md">
                LIMITED PLATES TODAY!
              </div>
            </div>

            {/* Content Panel */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green-veg" />
                <span className="text-xs font-bold uppercase tracking-widest text-brand-cream-muted">Today's Special</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Kurkure Cheese Momos
              </h2>
              <p className="text-brand-cream-muted text-sm md:text-base font-light leading-relaxed mb-6 max-w-md">
                Crispy golden crust coated in seasoned Kurkure crumbs on the outside, stuffed with molten stringy mozzarella and spiced paneer on the inside. A cheese pull lover's dream!
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl font-black text-brand-coral">₹180 <span className="text-xs text-brand-cream-muted font-normal">/ 8 pcs</span></div>
                <div className="bg-brand-coral/20 border border-brand-coral text-brand-coral-light px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider">
                  🔥 Spice Level: Medium
                </div>
              </div>

              <button 
                onClick={() => onAddSpecial("m10")}
                className="px-8 py-3.5 bg-brand-coral hover:bg-brand-coral-light text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Add Special to Order
              </button>
            </div>
            
          </div>
        </div>
      </section>
    </span>
  );
}
