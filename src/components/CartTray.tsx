import React from "react";
import { menuItems } from "../data/menu";

interface CartTrayProps {
  cart: { [key: string]: number };
  onClear: () => void;
  whatsAppLink: string;
}

export default function CartTray({ cart, onClear, whatsAppLink }: CartTrayProps) {
  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);
  
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  if (totalCartItems === 0) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-50 transition-all duration-300">
      <div className="bg-brand-brown/95 backdrop-blur-md text-brand-cream rounded-2xl shadow-2xl p-5 border border-brand-coral/30 flex flex-col gap-4 max-w-sm md:w-[340px]">
        
        {/* Cart Header */}
        <div className="flex justify-between items-center border-b border-brand-cream/15 pb-2.5">
          <span className="font-bold text-xs uppercase tracking-wider text-brand-cream-muted">Compiled Order ({totalCartItems})</span>
          <button 
            onClick={onClear} 
            className="text-[10px] text-brand-coral hover:text-brand-coral-light font-extrabold uppercase tracking-widest hover:underline cursor-pointer"
          >
            Clear All
          </button>
        </div>
        
        {/* Cart Items List */}
        <div className="max-h-[140px] overflow-y-auto space-y-2 pr-1 no-scrollbar text-xs">
          {Object.entries(cart).map(([id, qty]) => {
            const item = menuItems.find((m) => m.id === id);
            return item ? (
              <div key={id} className="flex justify-between items-center text-brand-cream-muted font-normal">
                <span>{qty} x {item.name}</span>
                <span className="font-semibold text-brand-cream">₹{item.price * qty}</span>
              </div>
            ) : null;
          })}
        </div>

        {/* Cart Footer */}
        <div className="border-t border-brand-cream/15 pt-3.5 flex justify-between items-center">
          <span className="font-bold text-xs uppercase tracking-wider">Total Price:</span>
          <span className="font-black text-brand-coral text-lg">₹{totalCartPrice}</span>
        </div>

        {/* Order WhatsApp CTA */}
        <a 
          href={whatsAppLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3.5 bg-brand-coral hover:bg-brand-coral-light text-white font-extrabold text-center text-xs uppercase tracking-widest rounded-xl flex items-center justify-center gap-2 shadow-lg hover:shadow-brand-coral/25 transition-all duration-300 active:scale-98"
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
          </svg>
          Send Order to WhatsApp
        </a>
      </div>
    </div>
  );
}
