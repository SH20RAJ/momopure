"use client";

import { useState } from "react";
import Image from "next/image";

// WhatsApp number configuration (default placeholder for Bunny Bites Ranchi)
const WHATSAPP_NUMBER = "919876543210"; 
const BRAND_INSTAGRAM = "bunnybites.momos";

interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  isVeg: boolean;
  spiceLevel: 1 | 2 | 3;
  image: string;
  description: string;
}

export default function Home() {
  // Navigation active tab
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Cart state for compilation
  const [cart, setCart] = useState<{ [key: string]: number }>({});
  
  // Menu Category definitions
  const categories = [
    { id: 'all', name: 'Show All' },
    { id: 'steamed', name: 'Steamed Momos' },
    { id: 'fried', name: 'Fried Momos' },
    { id: 'kurkure', name: 'Kurkure Momos' },
    { id: 'tandoori', name: 'Tandoori Momos' },
    { id: 'cheese-paneer', name: 'Cheese & Paneer' },
    { id: 'chicken', name: 'Chicken Special' },
    { id: 'combos', name: 'Combo Meals' },
    { id: 'addons', name: 'Chutneys & Sides' },
  ];

  // Menu items list matching all client instructions
  const menuItems: MenuItem[] = [
    {
      id: "m1",
      name: "Classic Veg Steamed Momos",
      category: "steamed",
      price: 90,
      isVeg: true,
      spiceLevel: 2,
      image: "/steamed_momos.png",
      description: "Hand-rolled thin wrappers stuffed with finely chopped fresh veggies and light spices, steamed to juicy perfection."
    },
    {
      id: "m2",
      name: "Juicy Chicken Steamed Momos",
      category: "steamed",
      price: 130,
      isVeg: false,
      spiceLevel: 2,
      image: "/steamed_momos.png",
      description: "Tender minced chicken breast seasoned with ginger, garlic, onions, and select herbs, steamed hot and fresh."
    },
    {
      id: "m3",
      name: "Paneer Steamed Momos",
      category: "steamed",
      price: 120,
      isVeg: true,
      spiceLevel: 1,
      image: "/steamed_momos.png",
      description: "Soft fresh paneer crumbles spiced lightly and mixed with herbs, wrapped and steamed for a melt-in-mouth taste."
    },
    {
      id: "m4",
      name: "Crispy Veg Fried Momos",
      category: "fried",
      price: 110,
      isVeg: true,
      spiceLevel: 2,
      image: "/fried_momos.png",
      description: "Classic vegetable momos golden-fried to a satisfying, crispy crunch. Served with our spicy signature red chutney."
    },
    {
      id: "m5",
      name: "Chicken Fried Momos",
      category: "fried",
      price: 140,
      isVeg: false,
      spiceLevel: 2,
      image: "/fried_momos.png",
      description: "Juicy chicken momos deep fried to a beautiful golden-brown, locked-in flavors. Crunchy outside, moist inside."
    },
    {
      id: "m6",
      name: "Crispy Veg Kurkure Momos",
      category: "kurkure",
      price: 140,
      isVeg: true,
      spiceLevel: 2,
      image: "/kurkure_cheese_momos.png",
      description: "Momo coated in our special seasoned crunchy batter, deep fried for that loud satisfying Kurkure crunch!"
    },
    {
      id: "m7",
      name: "Crunchy Chicken Kurkure Momos",
      category: "kurkure",
      price: 160,
      isVeg: false,
      spiceLevel: 3,
      image: "/kurkure_cheese_momos.png",
      description: "Coated in a spicy batter and cornflakes, fried for ultimate crispiness. A fiery crunch in every bite."
    },
    {
      id: "m8",
      name: "Smoky Tandoori Veg Momos",
      category: "tandoori",
      price: 150,
      isVeg: true,
      spiceLevel: 3,
      image: "/tandoori_momos.png",
      description: "Marinated in a rich, spiced tandoori yogurt marinade, skewered and charred to smoky perfection in our clay oven style."
    },
    {
      id: "m9",
      name: "Smoky Tandoori Chicken Momos",
      category: "tandoori",
      price: 180,
      isVeg: false,
      spiceLevel: 3,
      image: "/tandoori_momos.png",
      description: "Charcoal-grilled smoky chicken momos smothered in rich tandoori spices and butter. Served with mint chutney."
    },
    {
      id: "m10",
      name: "Kurkure Cheese Momos",
      category: "cheese-paneer",
      price: 180,
      isVeg: true,
      spiceLevel: 2,
      image: "/kurkure_cheese_momos.png",
      description: "Crispy outside, bursting with hot melted mozzarella cheese inside. Today's Special & रांची's favorite!"
    },
    {
      id: "m11",
      name: "Paneer Cheese Steamed Momos",
      category: "cheese-paneer",
      price: 140,
      isVeg: true,
      spiceLevel: 1,
      image: "/steamed_momos.png",
      description: "Filled with a rich mixture of fresh paneer crumbles and melted cheese, seasoned with mild black pepper."
    },
    {
      id: "m12",
      name: "Cheese Chicken Momos",
      category: "chicken",
      price: 160,
      isVeg: false,
      spiceLevel: 2,
      image: "/kurkure_cheese_momos.png",
      description: "Tender chicken filling loaded with melted cheese. Juicy, cheesy, and packed with savory umami flavors."
    },
    {
      id: "m13",
      name: "Spicy Chili Chicken Momos",
      category: "chicken",
      price: 150,
      isVeg: false,
      spiceLevel: 3,
      image: "/tandoori_momos.png",
      description: "For the spice lovers: shredded chicken tossed in local ghost pepper spices, green chillies, and ginger."
    },
    {
      id: "m14",
      name: "Student Combo",
      category: "combos",
      price: 120,
      isVeg: true,
      spiceLevel: 2,
      image: "/steamed_momos.png",
      description: "Budget friendly! 6 Steamed Momos + Signature Red Spicy Chutney + 1 Chilled Soft Drink."
    },
    {
      id: "m15",
      name: "Couple Combo",
      category: "combos",
      price: 240,
      isVeg: true,
      spiceLevel: 2,
      image: "/fried_momos.png",
      description: "Double the love! 2 Full Plates of Momos (16 pcs total) + 2 Chilled Soft Drinks."
    },
    {
      id: "m16",
      name: "Party Box (30 Momos)",
      category: "combos",
      price: 450,
      isVeg: true,
      spiceLevel: 2,
      image: "/bunny_bites_box.png",
      description: "Huge box containing 30 mixed momos of your choice, served with 3 large tubs of chutneys. Perfect for hostels & offices!"
    },
    {
      id: "m17",
      name: "Family Platter",
      category: "combos",
      price: 320,
      isVeg: true,
      spiceLevel: 2,
      image: "/og_image.png",
      description: "A grand platter of 24 mixed momos (steamed, fried, and tandoori), with 4 signature dips."
    },
    {
      id: "m18",
      name: "Secret Spicy Red Chutney",
      category: "addons",
      price: 20,
      isVeg: true,
      spiceLevel: 3,
      image: "/logo_icon.png",
      description: "Extra tub of our legendary homemade fire-red chili and garlic chutney. Dip at your own risk!"
    },
    {
      id: "m19",
      name: "Creamy Mint-Yogurt Dip",
      category: "addons",
      price: 20,
      isVeg: true,
      spiceLevel: 1,
      image: "/logo_icon.png",
      description: "Cooling mint, coriander, and yogurt dip to soothe your taste buds after a spicy kick."
    }
  ];

  // Add to cart compiler
  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      if (copy[id] <= 1) {
        delete copy[id];
      } else {
        copy[id]--;
      }
      return copy;
    });
  };

  // Compile items in cart into WhatsApp pre-filled text link
  const getWhatsAppLink = () => {
    const items = Object.entries(cart).map(([id, quantity]) => {
      const item = menuItems.find((m) => m.id === id);
      return item ? `${quantity} x ${item.name} (₹${item.price * quantity})` : "";
    }).filter(Boolean);

    const total = Object.entries(cart).reduce((sum, [id, qty]) => {
      const item = menuItems.find((m) => m.id === id);
      return sum + (item ? item.price * qty : 0);
    }, 0);

    let text = "";
    if (items.length === 0) {
      // Default message if cart is empty
      text = "Hi Bunny Bites, I want to order momos. Please share today's menu!";
    } else {
      text = `Hi Bunny Bites, I want to place an order:\n\n${items.join("\n")}\n\nTotal: ₹${total}\n\nPlease confirm availability and share payment details!`;
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const totalCartItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = menuItems.find((m) => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const filteredMenuItems = activeCategory === "all" 
    ? menuItems 
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-brown selection:bg-brand-coral selection:text-white">
      
      {/* Decorative Brand Pattern Layer */}
      <div className="absolute inset-0 brand-pattern-light pointer-events-none" />

      {/* STICKY HEADER */}
      <header className="sticky top-0 z-50 w-full px-4 py-3 md:px-8 transition-all bg-brand-cream/90 backdrop-blur-md border-b border-brand-brown/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <Image 
              src="/bunny_bites_logo_transparent.png" 
              alt="Bunny Bites Logo" 
              width={160} 
              height={48} 
              className="h-10 w-auto md:h-12"
              priority
            />
          </a>
          
          <nav className="hidden md:flex items-center gap-8 font-medium">
            <a href="#special" className="hover:text-brand-coral transition-colors">Today's Special</a>
            <a href="#combos" className="hover:text-brand-coral transition-colors">Bestselling Combos</a>
            <a href="#menu" className="hover:text-brand-coral transition-colors">Our Menu</a>
            <a href="#story" className="hover:text-brand-coral transition-colors">Our Story</a>
            <a href="#contact" className="hover:text-brand-coral transition-colors">Location</a>
          </nav>

          <div className="flex items-center gap-3">
            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm text-white bg-brand-coral hover:bg-brand-coral-light shadow-lg transition-all transform hover:-translate-y-0.5 hover:shadow-brand-coral/20"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
              </svg>
              Order on WhatsApp
            </a>
            
            {/* View Menu anchor */}
            <a 
              href="#menu" 
              className="px-4 py-2.5 rounded-full font-bold text-sm border border-brand-brown hover:bg-brand-brown hover:text-brand-cream transition-colors duration-200"
            >
              View Menu
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative px-4 py-12 md:py-20 lg:py-24 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            
            {/* Brand Positioning Sticker */}
            <div className="sticker-badge inline-block px-4 py-1.5 mb-6 text-xs md:text-sm font-extrabold tracking-wide uppercase text-brand-cream bg-brand-coral rounded-md">
              Bunny Bites — Ranchi's Favorite Momos!
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-brand-brown mb-6">
              Handmade Momos, <br />
              <span className="text-brand-coral relative">
                Steamed with Love
                <svg className="absolute left-0 bottom-0 w-full h-3 text-brand-coral-light/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0,8 Q50,0 100,8" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-brand-brown-muted max-w-lg mb-8 font-light leading-relaxed">
              Fresh, juicy, homemade momos crafted daily and delivered steaming hot right to your doorstep. Satisfy your cravings in one bite.
            </p>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a 
                href={getWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="animate-soft-pulse flex items-center justify-center gap-3 px-8 py-4 rounded-full font-extrabold text-lg text-white bg-brand-coral hover:bg-brand-coral-light transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
                </svg>
                Order on WhatsApp
              </a >
              <a 
                href="#menu" 
                className="flex items-center justify-center px-8 py-4 rounded-full font-bold text-lg border-2 border-brand-brown hover:bg-brand-brown hover:text-brand-cream transition-colors duration-200"
              >
                View Menu
              </a>
            </div>

            {/* Quick trust metrics */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10 border-t border-brand-brown/10 pt-8 w-full">
              <div className="flex items-center gap-2">
                <span className="text-brand-coral font-bold text-xl">✓</span>
                <span className="text-sm font-medium text-brand-brown-muted">100% Fresh Daily</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-coral font-bold text-xl">✓</span>
                <span className="text-sm font-medium text-brand-brown-muted">Hygienic Home Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-brand-coral font-bold text-xl">✓</span>
                <span className="text-sm font-medium text-brand-brown-muted">Spicy Garlic Chutney</span>
              </div>
            </div>

          </div>
          
          {/* Hero Image Panel */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Outer decorative circle */}
            <div className="absolute w-[80%] aspect-square rounded-full border border-dashed border-brand-coral/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[95%] aspect-square rounded-full bg-brand-cream-muted/60 -z-10" />

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
              <div className="absolute bottom-4 left-4 bg-brand-brown text-brand-cream px-4 py-2 rounded-2xl shadow-lg border border-brand-cream/10 text-xs md:text-sm font-bold flex items-center gap-2">
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

      {/* WHY BUNNY BITES (TRUST BADGES) */}
      <section className="bg-brand-cream-muted/50 py-16 px-4 border-y border-brand-brown/5 relative">
        <div className="absolute inset-0 brand-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-brown mb-3">
              Why Ranchi Loves Bunny Bites
            </h2>
            <p className="text-sm md:text-base text-brand-brown-muted font-light">
              We stand for purity, quality, and mouthwatering taste. Here's what makes us special:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { emoji: "🥟", title: "Handmade Fresh Daily", desc: "Every single momo is rolled, stuffed, and folded by hand every single day. Never frozen." },
              { emoji: "🧼", title: "Hygienic Kitchen", desc: "Prepared in an ultra-clean home environment prioritizing safety, cleanliness, and fresh water." },
              { emoji: "🥕", title: "Fresh Ingredients", desc: "Fresh local vegetables and premium quality farm-sourced meat. Only the best for you." },
              { emoji: "🚀", title: "Hot Delivery", desc: "Dispatched instantly in specialized thermal insulated bags so they reach you piping hot." },
              { emoji: "🌶️", title: "Secret Spicy Chutney", desc: "Our legendary spicy red chili and garlic chutney, made with a secret recipe. Irresistibly hot!" },
              { emoji: "❤️", title: "Steamed with Love", desc: "A local, family-run business doing what we love: serving comfort food that makes you smile." }
            ].map((card, i) => (
              <div key={i} className="bg-brand-cream border border-brand-brown/5 p-6 rounded-2xl flex gap-4 hover:shadow-md transition-shadow">
                <div className="text-4xl">{card.emoji}</div>
                <div>
                  <h3 className="font-bold text-lg text-brand-brown mb-1.5">{card.title}</h3>
                  <p className="text-sm text-brand-brown-muted font-light leading-relaxed">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TODAY'S SPECIAL */}
      <span id="special" className="block relative -top-20" />
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="bg-brand-brown text-brand-cream rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute inset-0 brand-pattern opacity-10 pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center p-8 md:p-12 lg:p-16 relative">
            
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
              <div className="absolute top-4 left-4 bg-brand-coral text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded-lg sticker-badge shadow-md">
                LIMITED PLATES TODAY!
              </div>
            </div>

            {/* Content Panel */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green-veg" />
                <span className="text-xs font-bold uppercase tracking-wider text-brand-cream-muted">Today's Special</span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Kurkure Cheese Momos
              </h2>
              <p className="text-brand-cream-muted text-base md:text-lg font-light leading-relaxed mb-6 max-w-md">
                Crispy golden crust coated in seasoned Kurkure crumbs on the outside, stuffed with molten stringy mozzarella and spiced paneer on the inside. A cheese pull lover's dream!
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="text-3xl font-black text-brand-coral">₹180 <span className="text-xs text-brand-cream-muted font-normal">/ 8 pcs</span></div>
                <div className="bg-brand-coral/20 border border-brand-coral text-brand-coral-light px-2.5 py-1 rounded-md text-xs font-bold">
                  🔥 Spice Level: Medium
                </div>
              </div>

              <button 
                onClick={() => addToCart("m10")}
                className="px-8 py-3.5 bg-brand-coral hover:bg-brand-coral-light text-white rounded-full font-bold shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Add Special to Order
              </button>
            </div>
            
          </div>
        </div>
      </section>

      {/* BESTSELLING COMBOS */}
      <span id="combos" className="block relative -top-20" />
      <section className="px-4 py-16 bg-brand-cream-muted/30 border-y border-brand-brown/5 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-brown mb-3">
              Best-Selling Combo Offers
            </h2>
            <p className="text-sm md:text-base text-brand-brown-muted font-light">
              Perfect pairings designed to feed you, your squad, or your family at absolute pocket-friendly rates!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
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
            ].map((combo) => (
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
                    <div className="absolute top-2 left-2 bg-brand-brown text-brand-cream px-2.5 py-1 rounded-lg text-xs font-bold">
                      {combo.badge}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg text-brand-brown mb-1">{combo.name}</h3>
                    <p className="text-xs text-brand-brown-muted font-light mb-4 leading-relaxed">{combo.content}</p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-0 flex items-center justify-between border-t border-brand-brown/5">
                  <div className="text-xl font-bold text-brand-brown">₹{combo.price}</div>
                  <button 
                    onClick={() => addToCart(combo.id)}
                    className="px-3.5 py-2 bg-brand-coral hover:bg-brand-coral-light text-white text-xs font-extrabold rounded-full transition-transform active:scale-95"
                  >
                    + Add Combo
                  </button>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL MENU SECTION */}
      <span id="menu" className="block relative -top-20" />
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-3">
            Explore Our Full Menu
          </h2>
          <p className="text-sm md:text-base text-brand-brown-muted font-light">
            Every plate is handmade, steamed fresh, and served with our spicy secret chutney.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 no-scrollbar justify-start md:justify-center border-b border-brand-brown/10 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-coral text-white shadow-md"
                  : "bg-brand-cream-muted/55 text-brand-brown hover:bg-brand-cream-muted"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMenuItems.map((item) => (
            <div 
              key={item.id} 
              className="momo-card bg-brand-cream rounded-2xl overflow-hidden p-4 flex flex-col justify-between"
            >
              <div>
                
                {/* Image and Badges */}
                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden mb-4 bg-brand-cream-muted/50 border border-brand-brown/5">
                  <Image 
                    src={item.image} 
                    alt={item.name} 
                    fill 
                    sizes="(max-width: 768px) 100vw, 340px"
                    className="object-cover"
                    loading="lazy"
                  />
                  
                  {/* Veg / Non-Veg badge */}
                  <div className="absolute top-3 left-3 bg-white px-2 py-1 rounded-md shadow-sm border border-brand-brown/5 flex items-center gap-1.5">
                    <span className={`inline-block w-2.5 h-2.5 rounded-full ${item.isVeg ? "bg-brand-green-veg" : "bg-brand-red-nonveg"}`} />
                    <span className="text-[10px] font-black uppercase text-brand-brown tracking-wide">
                      {item.isVeg ? "Veg" : "Non-Veg"}
                    </span>
                  </div>
                  
                  {/* Spice level badge */}
                  <div className="absolute top-3 right-3 bg-brand-brown/85 backdrop-blur-sm text-brand-cream px-2 py-1 rounded-md text-[10px] font-bold">
                    {"🌶️".repeat(item.spiceLevel)}
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-bold text-lg text-brand-brown mb-1.5">{item.name}</h3>
                <p className="text-xs text-brand-brown-muted font-light leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              {/* Price and Action */}
              <div className="flex items-center justify-between border-t border-brand-brown/5 pt-3 mt-auto">
                <div className="text-lg font-black text-brand-brown">₹{item.price}</div>
                
                <div className="flex items-center gap-2">
                  {cart[item.id] ? (
                    <div className="flex items-center border border-brand-coral rounded-full overflow-hidden bg-white shadow-sm">
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="px-3 py-1 font-extrabold text-brand-coral hover:bg-brand-cream-muted transition-colors active:scale-95"
                      >
                        -
                      </button>
                      <span className="px-2 text-sm font-bold text-brand-brown">{cart[item.id]}</span>
                      <button 
                        onClick={() => addToCart(item.id)}
                        className="px-3 py-1 font-extrabold text-brand-coral hover:bg-brand-cream-muted transition-colors active:scale-95"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button 
                      onClick={() => addToCart(item.id)}
                      className="px-4 py-2 bg-brand-coral hover:bg-brand-coral-light text-white text-xs font-black rounded-full shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
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

      {/* BRAND STORY */}
      <span id="story" className="block relative -top-20" />
      <section className="py-16 px-4 bg-brand-cream-muted/50 border-t border-brand-brown/5 relative">
        <div className="absolute inset-0 brand-pattern pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
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
              <div className="sticker-badge inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-brand-brown rounded-md uppercase tracking-wider">
                Our Story
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-6">
                Handmade Momos That Make You Smile
              </h2>
              <p className="text-sm md:text-base text-brand-brown-muted font-light leading-relaxed mb-6">
                Bunny Bites started in Ranchi with one simple idea — fresh, homemade momos that feel warm, comforting, and full of flavor. We didn't want to build another cold, dark restaurant brand. Instead, we wanted to deliver the comfort of a piping-hot, hand-rolled plate of momos made exactly like you would at home, with love and fresh ingredients.
              </p>
              <p className="text-sm md:text-base text-brand-brown-muted font-light leading-relaxed mb-8">
                Every vegetable is hand-diced, every chicken stuffing is mixed fresh daily, and our special red chili-garlic chutney is prepared according to an old family recipe. When you open a box from Bunny Bites, you're opening a box of happiness.
              </p>
              
              <div className="flex items-center gap-3 border-l-4 border-brand-coral pl-4 text-left">
                <p className="font-serif italic text-base md:text-lg text-brand-brown font-medium">
                  "One bite is all it takes to make you smile."
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-brown mb-3">
            What Ranchi Says About Us
          </h2>
          <div className="flex justify-center items-center gap-1.5 mb-3 text-brand-coral">
            {"★".repeat(5)}
            <span className="ml-2 text-sm font-bold text-brand-brown">4.9 / 5.0 Google Rating</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              name: "Priya",
              city: "Ranchi",
              text: "Best momos in the area. The chutney is crazy good! I order from their Kanke Road outlet regularly.",
              rating: 5
            },
            {
              name: "Rohit",
              city: "Lalpur",
              text: "The Kurkure Cheese Momos are out of this world. Super crispy and cheesy inside. My hostel mates are addicted!",
              rating: 5
            },
            {
              name: "Anjali",
              city: "Morabadi",
              text: "Piping hot delivery! The chicken steamed momos are incredibly juicy, not dry at all like other delivery joints.",
              rating: 5
            }
          ].map((review, i) => (
            <div key={i} className="bg-brand-cream border border-brand-brown/10 p-6 rounded-2xl flex flex-col justify-between hover:shadow-sm">
              <p className="text-sm md:text-base text-brand-brown-muted italic font-light leading-relaxed mb-6">
                “{review.text}”
              </p>
              <div className="flex items-center justify-between border-t border-brand-brown/5 pt-4">
                <div>
                  <h4 className="font-bold text-sm text-brand-brown">{review.name}</h4>
                  <p className="text-xs text-brand-brown-muted">{review.city}</p>
                </div>
                <div className="text-brand-coral text-xs">
                  {"★".repeat(review.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INSTAGRAM GALLERY */}
      <section className="bg-brand-cream-muted/30 py-16 border-t border-brand-brown/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h2 className="font-serif text-3xl font-extrabold text-brand-brown mb-2">
              Share the Momo Love!
            </h2>
            <p className="text-xs md:text-sm text-brand-brown-muted">
              Tag <a href={`https://instagram.com/${BRAND_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-coral hover:underline">@{BRAND_INSTAGRAM}</a> on Instagram for a chance to win a free plate of momos!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { img: "/steamed_momos.png", text: "Steaming hot close-up!" },
              { img: "/fried_momos.png", text: "Crunchy fried dip!" },
              { img: "/bunny_bites_steamer.png", text: "Steaming fresh batch." },
              { img: "/bunny_bites_box.png", text: "Delivered fresh daily." }
            ].map((post, i) => (
              <a 
                href={`https://instagram.com/${BRAND_INSTAGRAM}`} 
                target="_blank" 
                rel="noopener noreferrer"
                key={i} 
                className="relative aspect-square rounded-2xl overflow-hidden group shadow-sm border border-brand-brown/5"
              >
                <Image 
                  src={post.img} 
                  alt={post.text} 
                  fill 
                  sizes="(max-width: 768px) 50vw, 260px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-brown/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-brand-cream text-xs font-semibold p-2 text-center">
                  <span>📸 {post.text}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION + DELIVERY INFO */}
      <span id="contact" className="block relative -top-20" />
      <section className="px-4 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Address & Timings */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="sticker-badge inline-block px-3 py-1 mb-4 text-xs font-bold text-white bg-brand-coral rounded-md uppercase tracking-wider">
                Delivery & Timings
              </div>
              <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-brown mb-6">
                Fresh Momos, Delivered Hot
              </h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-xl">📍</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Pickup Location</h4>
                    <p className="text-sm text-brand-brown-muted font-light mt-1">
                      Lalpur (Near Nucleus Mall), Ranchi, Jharkhand - 834001
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xl">🚀</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Delivery Radius</h4>
                    <p className="text-sm text-brand-brown-muted font-light mt-1">
                      We deliver within 8 KMs including Lalpur, Morabadi, Kanke Road, Bariatu, Kokar, Doranda, Hinoo, and Ranchi University Area.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xl">⏰</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Opening Hours</h4>
                    <p className="text-sm text-brand-brown-muted font-light mt-1">
                      Daily: 12:00 PM – 10:00 PM (Steaming hot batches prepared every hour)
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-xl">📞</div>
                  <div>
                    <h4 className="font-bold text-brand-brown">Direct Line</h4>
                    <p className="text-sm text-brand-brown-muted font-semibold mt-1">
                      +91 98765 43210 / +91 98765 43211
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Delivery platforms */}
            <div className="border-t border-brand-brown/10 pt-8 mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-brand-brown-muted mb-4">Also Find Us On</h4>
              <div className="flex gap-4">
                <a 
                  href="https://swiggy.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="px-4 py-2 bg-brand-cream-muted border border-brand-brown/10 hover:border-brand-coral hover:text-brand-coral font-bold text-xs rounded-xl transition-all"
                >
                  Swiggy
                </a>
                <a 
                  href="https://zomato.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-cream-muted border border-brand-brown/10 hover:border-brand-coral hover:text-brand-coral font-bold text-xs rounded-xl transition-all"
                >
                  Zomato
                </a>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-brand-cream-muted border border-brand-brown/10 hover:border-brand-coral hover:text-brand-coral font-bold text-xs rounded-xl transition-all"
                >
                  Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Map Preview Graphic */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden min-h-[300px] border border-brand-brown/10 relative shadow-sm">
            <div className="absolute inset-0 bg-brand-cream-muted flex flex-col items-center justify-center p-8 text-center">
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

      {/* FOOTER */}
      <footer className="bg-brand-brown text-brand-cream py-12 px-4 relative mt-12">
        <div className="absolute inset-0 brand-pattern opacity-5 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 border-b border-brand-cream/10 pb-8">
            <div className="md:col-span-2">
              <Image 
                src="/bunny_bites_logo_transparent.png" 
                alt="Bunny Bites Logo" 
                width={160} 
                height={48} 
                className="h-10 w-auto mb-4 invert"
              />
              <p className="text-xs text-brand-cream-muted leading-relaxed max-w-xs font-light">
                Serving रांची Ranchi's crunchiest, cheesiest, and juiciest handmade momos. Steamed with love, crafted daily.
              </p>
            </div>
            
            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-coral mb-4">Quick Links</h5>
              <ul className="space-y-2.5 text-xs text-brand-cream-muted font-light">
                <li><a href="#special" className="hover:text-brand-coral transition-colors">Today's Special</a></li>
                <li><a href="#combos" className="hover:text-brand-coral transition-colors">Combo Offers</a></li>
                <li><a href="#menu" className="hover:text-brand-coral transition-colors">Full Menu</a></li>
                <li><a href="#story" className="hover:text-brand-coral transition-colors">Our Story</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-xs uppercase tracking-wider text-brand-coral mb-4">Contact Info</h5>
              <ul className="space-y-2.5 text-xs text-brand-cream-muted font-light">
                <li>📍 Lalpur, Ranchi, Jharkhand</li>
                <li>📞 +91 98765 43210</li>
                <li>💬 WhatsApp: +91 98765 43210</li>
                <li>✉️ hello@bunnybites.momos</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between text-[11px] text-brand-cream-muted font-light">
            <p>© {new Date().getFullYear()} Bunny Bites Momos. All Rights Reserved. Steamed with Love in Ranchi.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href={`https://instagram.com/${BRAND_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="hover:text-brand-coral">Instagram</a>
              <a href="#" className="hover:text-brand-coral">Privacy Policy</a>
              <a href="#" className="hover:text-brand-coral">Terms & Conditions</a>
            </div>
          </div>

        </div>
      </footer>

      {/* COMPILING FLOATING ORDER TRAY (HIGH CONVERSION CTA) */}
      {totalCartItems > 0 && (
        <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 z-50 animate-bounce">
          <div className="bg-brand-brown text-brand-cream rounded-2xl shadow-2xl p-4 border-2 border-brand-coral flex flex-col gap-3 max-w-sm md:w-[320px] transition-transform">
            <div className="flex justify-between items-center border-b border-brand-cream/10 pb-2">
              <span className="font-bold text-sm">Compiled Order ({totalCartItems})</span>
              <button 
                onClick={() => setCart({})} 
                className="text-[10px] text-brand-coral hover:underline font-bold"
              >
                Clear All
              </button>
            </div>
            
            <div className="max-h-[140px] overflow-y-auto space-y-1.5 pr-1 no-scrollbar text-xs">
              {Object.entries(cart).map(([id, qty]) => {
                const item = menuItems.find((m) => m.id === id);
                return item ? (
                  <div key={id} className="flex justify-between items-center text-brand-cream-muted">
                    <span>{qty} x {item.name}</span>
                    <span>₹{item.price * qty}</span>
                  </div>
                ) : null;
              })}
            </div>

            <div className="border-t border-brand-cream/10 pt-2 flex justify-between items-center">
              <span className="font-bold text-sm">Total Price:</span>
              <span className="font-black text-brand-coral text-base">₹{totalCartPrice}</span>
            </div>

            <a 
              href={getWhatsAppLink()} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full py-3 bg-brand-coral hover:bg-brand-coral-light text-white font-extrabold text-center text-sm rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
              </svg>
              Send Order to WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* FLOATING WHATSAPP CHAT BUTTON (DEFAULT FALLBACK CTA) */}
      {totalCartItems === 0 && (
        <a 
          href={getWhatsAppLink()} 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-[#25d366] hover:bg-[#20ba5a] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 duration-200 w-14 h-14 flex items-center justify-center border border-white/10"
          aria-label="Order on WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.45L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.967C16.58 2.023 14.12 1 11.995 1 6.558 1 2.133 5.369 2.129 10.799c-.002 1.76.47 3.483 1.368 5.013l-.974 3.561 3.655-.944-.131-.075zM17.48 14.77c-.3-.15-1.774-.875-2.046-.975-.273-.1-.472-.15-.671.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.206-.6-2.11-.99-2.925-2.39-.214-.37-.033-.586.13-.764.15-.16.3-.35.45-.53.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.671-1.62-.92-2.22-.242-.584-.487-.504-.671-.514-.174-.01-.373-.01-.572-.01-.2 0-.525.075-.8 1.075-.274 1-1.045 3.325.2 5.475 1.245 2.15 2.748 3.275 4.5 4.025.422.182.845.29 1.161.39.426.136.813.117 1.119.071.341-.05 1.774-.725 2.022-1.425.249-.7.249-1.3.174-1.425-.075-.125-.274-.2-.573-.35z"/>
          </svg>
        </a>
      )}

    </div>
  );
}
