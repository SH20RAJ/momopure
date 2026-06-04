import React from "react";

export default function Reviews() {
  const testimonials = [
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
  ];

  return (
    <section className="px-4 py-20 max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-16">
        <h2 className="font-serif text-3xl md:text-5xl font-extrabold text-brand-brown mb-4">
          What Ranchi Says About Us
        </h2>
        <div className="flex justify-center items-center gap-1.5 mb-3 text-brand-coral">
          {"★".repeat(5)}
          <span className="ml-2 text-xs font-extrabold text-brand-brown uppercase tracking-wider">4.9 / 5.0 Google Rating</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((review, i) => (
          <div key={i} className="bg-brand-cream border border-brand-brown/10 p-6 rounded-2xl flex flex-col justify-between hover:shadow-sm transition-all duration-300">
            <p className="text-sm md:text-base text-brand-brown-muted italic font-light leading-relaxed mb-6">
              “{review.text}”
            </p>
            <div className="flex items-center justify-between border-t border-brand-brown/5 pt-4">
              <div>
                <h4 className="font-bold text-sm text-brand-brown">{review.name}</h4>
                <p className="text-xs text-brand-brown-muted font-normal uppercase tracking-wider">{review.city}</p>
              </div>
              <div className="text-brand-coral text-xs">
                {"★".repeat(review.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
