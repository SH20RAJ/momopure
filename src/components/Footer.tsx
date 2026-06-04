import React from "react";
import Image from "next/image";

export default function Footer() {
  const BRAND_INSTAGRAM = "bunnybites.momos";

  return (
    <footer className="bg-brand-brown text-brand-cream py-16 px-4 relative mt-16">
      <div className="absolute inset-0 brand-pattern opacity-5 pointer-events-none" />
      <div className="max-w-7xl mx-auto relative">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-brand-cream/10 pb-12">
          <div className="md:col-span-2">
            <Image 
              src="/bunny_bites_logo_transparent.png" 
              alt="Bunny Bites Logo" 
              width={160} 
              height={48} 
              style={{ width: "auto", height: "auto" }}
              className="h-10 w-auto mb-4 invert"
            />
            <p className="text-xs text-brand-cream-muted leading-relaxed max-w-xs font-light">
              Serving Ranchi's crunchiest, cheesiest, and juiciest handmade momos. Steamed with love, crafted daily.
            </p>
          </div>
          
          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest text-brand-coral mb-4">Quick Links</h5>
            <ul className="space-y-3 text-xs text-brand-cream-muted font-normal uppercase tracking-wider">
              <li><a href="#special" className="hover:text-brand-coral transition-colors">Today's Special</a></li>
              <li><a href="#combos" className="hover:text-brand-coral transition-colors">Combo Offers</a></li>
              <li><a href="#menu" className="hover:text-brand-coral transition-colors">Full Menu</a></li>
              <li><a href="#story" className="hover:text-brand-coral transition-colors">Our Story</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-xs uppercase tracking-widest text-brand-coral mb-4">Contact Info</h5>
            <ul className="space-y-3 text-xs text-brand-cream-muted font-light">
              <li>📍 Lalpur, Ranchi, Jharkhand</li>
              <li>📞 +91 98765 43210</li>
              <li>💬 WhatsApp: +91 98765 43210</li>
              <li>✉️ hello@bunnybites.momos</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-cream-muted font-light">
          <p>© {new Date().getFullYear()} Bunny Bites Momos. All Rights Reserved. Steamed with Love in Ranchi.</p>
          <div className="flex gap-4 mt-4 md:mt-0 uppercase tracking-widest text-[9px]">
            <a href={`https://instagram.com/${BRAND_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-coral">Instagram</a>
            <a href="#" className="hover:text-brand-coral">Privacy Policy</a>
            <a href="#" className="hover:text-brand-coral">Terms & Conditions</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
