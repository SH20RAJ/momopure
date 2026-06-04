import React from "react";
import Image from "next/image";

export default function InstagramGallery() {
  const BRAND_INSTAGRAM = "bunnybites.momos";
  const posts = [
    { img: "/steamed_momos.png", text: "Steaming hot close-up!" },
    { img: "/fried_momos.png", text: "Crunchy fried dip!" },
    { img: "/bunny_bites_steamer.png", text: "Steaming fresh batch." },
    { img: "/bunny_bites_box.png", text: "Delivered fresh daily." }
  ];

  return (
    <section className="bg-brand-cream-muted/30 py-20 border-t border-brand-brown/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-brand-brown mb-2">
            Share the Momo Love!
          </h2>
          <p className="text-xs md:text-sm text-brand-brown-muted font-normal">
            Tag <a href={`https://instagram.com/${BRAND_INSTAGRAM}`} target="_blank" rel="noopener noreferrer" className="font-bold text-brand-coral hover:underline">@{BRAND_INSTAGRAM}</a> on Instagram for a chance to win a free plate of momos!
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, i) => (
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
              <div className="absolute inset-0 bg-brand-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center text-brand-cream text-xs font-semibold p-2 text-center">
                <span>📸 {post.text}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
