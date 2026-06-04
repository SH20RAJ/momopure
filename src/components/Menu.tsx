import React, { useState } from "react";
import Image from "next/image";
import { menuItems, categories } from "../data/menu";

interface MenuProps {
  cart: { [key: string]: number };
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
}

export default function Menu({ cart, addToCart, removeFromCart }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredMenuItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <span id="menu" className="block relative -top-20">
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-4">
            Explore Our Full Menu
          </h2>
          <p className="text-sm md:text-base text-brand-brown-muted font-normal">
            Every plate is handmade, steamed fresh, and served with our spicy secret chutney.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar justify-start md:justify-center border-b border-brand-brown/10 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-brand-coral text-white shadow-md shadow-brand-coral/10"
                  : "bg-brand-cream-muted/50 text-brand-brown hover:bg-brand-cream-muted"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredMenuItems.map((item) => (
            <div 
              key={item.id} 
              className="momo-card rounded-2xl overflow-hidden p-4 flex flex-col justify-between"
            >
              <div>
                
                {/* Image and Badges */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 bg-brand-cream-muted/40 border border-brand-brown/5">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Veg / Non-Veg badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-sm border border-brand-brown/5 flex items-center gap-1.5">
                    <span className={`inline-block w-2 h-2 rounded-full ${item.isVeg ? "bg-brand-green-veg" : "bg-brand-red-nonveg"}`} />
                    <span className="text-[9px] font-black uppercase text-brand-brown tracking-widest">
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </div>
                  
                  {/* Spice level badge */}
                  <div className="absolute top-3 right-3 bg-brand-brown/80 backdrop-blur-sm text-brand-cream px-2.5 py-1 rounded-md text-[9px] font-black tracking-widest">
                    {"🌶️".repeat(item.spiceLevel)}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-bold text-lg text-brand-brown mb-2">{item.name}</h3>
                <p className="text-xs md:text-sm text-brand-brown-muted font-normal leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Price and Action */}
              <div className="flex items-center justify-between border-t border-brand-brown/5 pt-4 mt-auto">
                <div className="text-lg font-black text-brand-brown">₹{item.price}</div>
                
                <div className="flex items-center gap-2">
                  {cart[item.id] ? (
                    <div className="flex items-center border border-brand-coral rounded-full overflow-hidden bg-white shadow-sm">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="px-3.5 py-1.5 font-extrabold text-brand-coral hover:bg-brand-cream-muted transition-colors active:scale-95 cursor-pointer"
                      >
                        -
                      </button>
                      <span className="px-2 text-xs font-bold text-brand-brown">{cart[item.id]}</span>
                      <button 
                        onClick={() => addToCart(item.id)}
                        className="px-3.5 py-1.5 font-extrabold text-brand-coral hover:bg-brand-cream-muted transition-colors active:scale-95 cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addToCart(item.id)}
                      className="px-4 py-2.5 bg-brand-coral hover:bg-brand-coral-light text-white text-xs font-bold uppercase tracking-wider rounded-full shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                    >
                      Order Now
                    </button>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>
    </span>
  );
}
