import React from "react";
import Image from "next/image";

interface NavbarProps {
  whatsAppLink: string;
}

export default function Navbar({ whatsAppLink }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 w-full px-4 py-4 md:px-8 bg-brand-cream/80 backdrop-blur-md border-b border-brand-brown/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <Image 
            src="/bunny_bites_logo_transparent.png" 
            alt="Bunny Bites Logo" 
            width={160} 
            height={48} 
            style={{ width: "auto", height: "auto" }}
            className="h-9 md:h-11"
            priority
          />
        </a>
        
        <nav className="hidden md:flex items-center gap-8 font-medium text-xs tracking-wider uppercase">
          <a href="#special" className="hover:text-brand-coral transition-colors duration-200">Today's Special</a>
          <a href="#combos" className="hover:text-brand-coral transition-colors duration-200">Bestselling Combos</a>
          <a href="#menu" className="hover:text-brand-coral transition-colors duration-200">Our Menu</a>
          <a href="#story" className="hover:text-brand-coral transition-colors duration-200">Our Story</a>
          <a href="#contact" className="hover:text-brand-coral transition-colors duration-200">Location</a>
        </nav>

        <div className="flex items-center gap-3">
          <a 
            href={whatsAppLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-brand-coral hover:bg-brand-coral-light shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-brand-coral/20"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
            </svg>
            Order
          </a>
          
          <a 
            href="#menu" 
            className="px-4 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider border border-brand-brown hover:bg-brand-brown hover:text-brand-cream transition-colors duration-200"
          >
            View Menu
          </a>
        </div>
      </div>
    </header>
  );
}
