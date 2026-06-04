import React from "react";
import Image from "next/image";

interface BestsellingCombosProps {
  onAddCombo: (id: string) => void;
}

export default function BestsellingCombos({ onAddCombo }: BestsellingCombosProps) {
  const combos = [
    {
      id: "m14",
      name: "Student Combo",
      badge: "🎓 Best Seller",
      price: 120,
      content: "6 Steamed Momos + Signature Chutney + Cold Soft Drink",
      image: "/steamed_momos.png"
    },
    {
      id: "m15",
      name: "Couple Combo",
      badge: "❤️ Made for Two",
      price: 240,
      content: "2 plates Momos (16 pcs) + 2 Cold Soft Drinks + Dips",
      image: "/fried_momos.png"
    },
    {
      id: "m16",
      name: "Party Box (30 pcs)",
      badge: "🎉 Squad Size",
      price: 450,
      content: "30 Mixed Momos + 3 Large Signature Chutneys + Dips",
      image: "/bunny_bites_box.png"
    },
    {
      id: "m17",
      name: "Family Platter",
      badge: "👨‍👩‍👧‍👦 Platter Pack",
      price: 320,
      content: "24 Mixed Momos (Steamed, Fried & Tandoori) + 4 Dips",
      image: "/og_image.png"
    }
  ];

  return (
    <span id="combos" className="block relative -top-20">
      <section className="px-4 py-20 bg-brand-cream-muted/30 border-y border-brand-brown/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-3">
              Best-Selling Combo Offers
            </h2>
            <p className="text-sm md:text-base text-brand-brown-muted font-normal">
              Perfect pairings designed to feed you, your squad, or your family at pocket-friendly rates!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {combos.map((combo) => (
              <div key={combo.id} className="bg-brand-cream border border-brand-brown/10 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                
                <div>
                  <div className="relative aspect-video w-full">
                    <Image 
                      src={combo.image} 
                      alt={combo.name} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 280px"
                      className="object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-2 left-2 bg-brand-brown text-brand-cream px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider">
                      {combo.badge}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-base text-brand-brown mb-1">{combo.name}</h3>
                    <p className="text-xs text-brand-brown-muted font-light mb-4 leading-relaxed">{combo.content}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-brand-brown/5">
                  <div className="text-lg font-bold text-brand-brown">₹{combo.price}</div>
                  <button 
                    onClick={() => onAddCombo(combo.id)}
                    className="px-3.5 py-2 bg-brand-coral hover:bg-brand-coral-light text-white text-[10px] font-extrabold uppercase tracking-widest rounded-full transition-transform active:scale-95"
                  >
                    + Add Combo
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </span>
  );
}
