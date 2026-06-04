import React from "react";
import Image from "next/image";

interface HeroProps {
  whatsAppLink: string;
}

export default function Hero({ whatsAppLink }: HeroProps) {
  return (
    <section className="relative px-4 py-16 md:py-24 lg:py-28 max-w-7xl mx-auto overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Text Content */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Brand Positioning Sticker */}
          <div className="sticker-badge inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-extrabold tracking-widest uppercase text-brand-cream bg-brand-coral rounded-md">
            Bunny Bites — Ranchi's Favorite Momos!
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-brand-brown mb-6">
            Handmade Momos, <br />
            <span className="text-brand-coral relative italic">
              Steamed with Love
              <svg className="absolute left-0 bottom-1 w-full h-3 text-brand-coral-light/35" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-base md:text-lg text-brand-brown-muted max-w-lg mb-10 font-normal leading-relaxed">
            Fresh, juicy, homemade momos crafted daily and delivered steaming hot right to your doorstep. Satisfy your cravings in one bite.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a 
              href={whatsAppLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="animate-soft-pulse flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold text-base uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-light transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
              </svg>
              Order on WhatsApp
            </a >
            <a 
              href="#menu" 
              className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-base uppercase tracking-wider border border-brand-brown hover:bg-brand-brown hover:text-brand-cream transition-colors duration-200"
            >
              View Menu
            </a>
          </div>

          {/* Quick trust metrics */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12 border-t border-brand-brown/10 pt-8 w-full">
            <div className="flex items-center gap-2">
              <span className="text-brand-coral font-black">✓</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-brown-muted">100% Fresh Daily</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-coral font-black">✓</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-brown-muted">Hygienic Home Kitchen</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-coral font-black">✓</span>
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-brown-muted">Spicy Garlic Chutney</span>
            </div>
          </div>

        </div>
        
        {/* Hero Image Panel */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          
          {/* Outer decorative circle */}
          <div className="absolute w-[85%] aspect-square rounded-full border border-dashed border-brand-coral/15 animate-[spin_80s_linear_infinite]" />
          <div className="absolute w-[95%] aspect-square rounded-full bg-brand-cream-muted/50 -z-10" />

          <div className="relative w-full aspect-square max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="/bunny_bites_steamer.png"
              alt="Delicious fresh momos in a bamboo steamer" 
              fill
              sizes="(max-width: 768px) 100vw, 420px"
              className="object-cover"
              priority
              fetchPriority="high"
            />
            
            {/* Floating tag */}
            <div className="absolute bottom-4 left-4 bg-brand-brown/95 backdrop-blur-sm text-brand-cream px-4 py-2 rounded-2xl shadow-lg border border-brand-cream/10 text-xs font-bold flex items-center gap-2">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-brand-green-veg" />
              Veg & Non-Veg Options
            </div>

            {/* Fire sticker */}
            <div className="absolute top-4 right-4 bg-brand-coral text-white p-3 rounded-full shadow-lg text-lg animate-bounce">
              🔥
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
