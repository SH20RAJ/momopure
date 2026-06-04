import React from "react";

export default function TrustBadges() {
  const guarantees = [
    { emoji: "🥟", title: "Handmade Fresh Daily", desc: "Every single momo is rolled, stuffed, and folded by hand every single day. Never frozen." },
    { emoji: "🧼", title: "Hygienic Kitchen", desc: "Prepared in an ultra-clean home environment prioritizing safety, cleanliness, and fresh water." },
    { emoji: "🥕", title: "Fresh Ingredients", desc: "Fresh local vegetables and premium quality farm-sourced meat. Only the best for you." },
    { emoji: "🚀", title: "Hot Delivery", desc: "Dispatched instantly in specialized thermal insulated bags so they reach you piping hot." },
    { emoji: "🌶️", title: "Secret Spicy Chutney", desc: "Our legendary spicy red chili and garlic chutney, made with a secret recipe. Irresistibly hot!" },
    { emoji: "❤️", title: "Steamed with Love", desc: "A local, family-run business doing what we love: serving comfort food that makes you smile." }
  ];

  return (
    <section className="bg-brand-cream-muted/40 py-20 px-4 border-y border-brand-brown/5 relative">
      <div className="absolute inset-0 brand-pattern pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-3">
            Why Ranchi Loves Bunny Bites
          </h2>
          <p className="text-sm md:text-base text-brand-brown-muted font-normal">
            We stand for purity, quality, and mouthwatering taste. Here's what makes us special:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {guarantees.map((card, i) => (
            <div key={i} className="bg-brand-cream/80 backdrop-blur-sm border border-brand-brown/5 p-6 rounded-2xl flex gap-4 hover:shadow-md transition-all duration-300">
              <div className="text-4xl">{card.emoji}</div>
              <div>
                <h3 className="font-bold text-lg text-brand-brown mb-1.5">{card.title}</h3>
                <p className="text-xs md:text-sm text-brand-brown-muted font-normal leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
