"use client";

import { useState } from "react";
import { menuItems } from "../data/menu";

// Import Modular Components
import JsonLd from "../components/JsonLd";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import TodaySpecial from "../components/TodaySpecial";
import BestsellingCombos from "../components/BestsellingCombos";
import Menu from "../components/Menu";
import Story from "../components/Story";
import Reviews from "../components/Reviews";
import InstagramGallery from "../components/InstagramGallery";
import LocationDelivery from "../components/LocationDelivery";
import Footer from "../components/Footer";
import CartTray from "../components/CartTray";
import FloatingWhatsApp from "../components/FloatingWhatsApp";

const WHATSAPP_NUMBER = "919876543210";

export default function Home() {
  const [cart, setCart] = useState<{ [key: string]: number }>({});

  // Add to cart helper
  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Remove from cart helper
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

  // Compile cart items into prefilled WhatsApp message
  const getWhatsAppLink = () => {
    const items = Object.entries(cart)
      .map(([id, quantity]) => {
        const item = menuItems.find((m) => m.id === id);
        return item ? `${quantity} x ${item.name} (₹${item.price * quantity})` : "";
      })
      .filter(Boolean);

    const total = Object.entries(cart).reduce((sum, [id, qty]) => {
      const item = menuItems.find((m) => m.id === id);
      return sum + (item ? item.price * qty : 0);
    }, 0);

    let text = "";
    if (items.length === 0) {
      text = "Hi Bunny Bites, I want to order momos. Please share today's menu.";
    } else {
      text = `Hi Bunny Bites, I want to place an order:\n\n${items.join("\n")}\n\nTotal: ₹${total}\n\nPlease confirm availability and share payment details!`;
    }

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const whatsAppLink = getWhatsAppLink();

  return (
    <div className="relative min-h-screen bg-brand-cream text-brand-brown">
      {/* Local Structured SEO Schema */}
      <JsonLd />

      {/* Decorative Brand Pattern Background */}
      <div className="absolute inset-0 brand-pattern-light pointer-events-none" />

      {/* Page layout assembled of modular parts */}
      <Navbar whatsAppLink={whatsAppLink} />
      <Hero whatsAppLink={whatsAppLink} />
      <TrustBadges />
      <TodaySpecial onAddSpecial={addToCart} />
      <BestsellingCombos onAddCombo={addToCart} />
      <Menu cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} />
      <Story />
      <Reviews />
      <InstagramGallery />
      <LocationDelivery />
      <Footer />

      {/* Floating compiled order checkout check tray (bounce animation removed) */}
      <CartTray 
        cart={cart} 
        onClear={() => setCart({})} 
        whatsAppLink={whatsAppLink} 
      />

      {/* Floating standard green WhatsApp CTA when cart is empty */}
      {Object.keys(cart).length === 0 && (
        <FloatingWhatsApp whatsAppLink={whatsAppLink} />
      )}
    </div>
  );
}
