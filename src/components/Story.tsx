import React from "react";
import Image from "next/image";

export default function Story() {
  return (
    <span id="story" className="block relative -top-20">
      <section className="py-20 px-4 bg-brand-cream-muted/50 border-t border-brand-brown/5 relative">
        <div className="absolute inset-0 brand-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Mockup Box Frame */}
            <div className="relative aspect-[4/3] w-full max-w-[480px] mx-auto rounded-3xl overflow-hidden shadow-xl border-4 border-white rotate-[-1deg]">
              <Image 
                src="/bunny_bites_box.png" 
                alt="Bunny Bites momo packaging delivery box mockup" 
                fill 
                sizes="(max-width: 768px) 100vw, 480px"
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Narrative text */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="sticker-badge inline-block px-3.5 py-1.5 mb-6 text-xs font-extrabold text-white bg-brand-brown rounded-md uppercase tracking-widest">
                Our Story
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-6 leading-tight">
                Handmade Momos <br />That Make You Smile
              </h2>
              <p className="text-sm md:text-base text-brand-brown-muted font-normal leading-relaxed mb-6">
                Bunny Bites started in Ranchi with one simple idea — fresh, homemade momos that feel warm, comforting, and full of flavor. We didn't want to build another cold, dark restaurant brand. Instead, we wanted to deliver the comfort of a piping-hot, hand-rolled plate of momos made exactly like you would at home, with love and fresh ingredients.
              </p>
              <p className="text-sm md:text-base text-brand-brown-muted font-normal leading-relaxed mb-8">
                Every vegetable is hand-diced, every chicken stuffing is mixed fresh daily, and our special red chili-garlic chutney is prepared according to an old family recipe. When you open a box from Bunny Bites, you're opening a box of happiness.
              </p>
              
              <div className="flex items-center gap-3 border-l-4 border-brand-coral pl-4 text-left">
                <p className="font-serif italic text-base md:text-lg text-brand-brown font-medium leading-relaxed">
                  "One bite is all it takes to make you smile."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </span>
  );
}
