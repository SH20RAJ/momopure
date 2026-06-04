import React from "react";

export default function LocationDelivery() {
  return (
    <span id="contact" className="block relative -top-20">
      <section className="px-4 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Address & Timings */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="sticker-badge inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-brand-coral rounded-md uppercase tracking-wider">
                Delivery & Timings
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-6 leading-tight">
                Fresh Momos, <br />Delivered Hot
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-xl">📍</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Pickup Location</h4>
                    <p className="text-xs md:text-sm text-brand-brown-muted font-normal mt-1">
                      Lalpur (Near Nucleus Mall), Ranchi, Jharkhand - 834001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xl">🚀</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Delivery Radius</h4>
                    <p className="text-xs md:text-sm text-brand-brown-muted font-normal mt-1">
                      We deliver within 8 KMs including Lalpur, Morabadi, Kanke Road, Bariatu, Kokar, Doranda, Hinoo, and Ranchi University Area.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xl">⏰</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Opening Hours</h4>
                    <p className="text-xs md:text-sm text-brand-brown-muted font-normal mt-1">
                      Daily: 12:00 PM – 10:00 PM (Steaming hot batches prepared every hour)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xl">📞</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Direct Line</h4>
                    <p className="text-xs md:text-sm text-brand-brown-muted font-semibold mt-1">
                      +91 98765 43210 / +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Delivery platforms */}
            <div className="border-t border-brand-brown/10 pt-8 mt-8">
              <h4 className="text-xs font-black uppercase tracking-widest text-brand-brown-muted mb-4">Also Find Us On</h4>
              <div className="flex gap-4">
                <a 
                  href="https://swiggy.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-brand-cream-muted/50 border border-brand-brown/10 hover:border-brand-coral hover:text-brand-coral font-bold text-xs rounded-xl transition-all"
                >
                  Swiggy
                </a>
                <a 
                  href="https://zomato.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-cream-muted/50 border border-brand-brown/10 hover:border-brand-coral hover:text-brand-coral font-bold text-xs rounded-xl transition-all"
                >
                  Zomato
                </a>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-cream-muted/50 border border-brand-brown/10 hover:border-brand-coral hover:text-brand-coral font-bold text-xs rounded-xl transition-all"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Map Preview Graphic */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden min-h-[300px] border border-brand-brown/10 relative shadow-sm">
            <div className="absolute inset-0 bg-brand-cream-muted/50 flex flex-col items-center justify-center p-8 text-center">
              {/* Custom maps aesthetic look */}
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-md mb-4 animate-bounce">
                📍
              </div>
              <h4 className="font-bold text-brand-brown text-lg">Bunny Bites Kitchen</h4>
              <p className="text-xs text-brand-brown-muted max-w-sm mt-1 mb-6">
                Hygienic Home Kitchen, Circle Road, Lalpur, Ranchi. Ready for pickups and express dispatch.
              </p>
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-6 py-3 bg-brand-brown hover:bg-brand-coral text-white font-bold text-sm rounded-full transition-colors shadow-md"
              >
                Get Directions
              </a>
            </div>
          </div>

        </div>
      </section>
    </span>
  );
}
