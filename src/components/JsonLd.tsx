import React from "react";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "name": "Bunny Bites Momos",
    "image": "https://momopure.shraj.workers.dev/og_image.png",
    "@id": "https://momopure.shraj.workers.dev",
    "url": "https://momopure.shraj.workers.dev",
    "telephone": "+919876543210",
    "priceRange": "₹",
    "menu": "https://momopure.shraj.workers.dev#menu",
    "servesCuisine": "Momo, Indo-Chinese",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lalpur, near Nucleus Mall",
      "addressLocality": "Ranchi",
      "postalCode": "834001",
      "addressRegion": "JH",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.3698,
      "longitude": 85.3250
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "12:00",
      "closes": "22:00"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
