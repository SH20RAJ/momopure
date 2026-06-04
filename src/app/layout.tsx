import type { Metadata } from "next";
import { Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
	variable: "--font-outfit",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
	variable: "--font-playfair",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Bunny Bites — Handmade Momos That Make You Smile",
	description: "Fresh, juicy, homemade momos delivered hot to your doorstep. Steamed with love in Ranchi. Order on WhatsApp now!",
	metadataBase: new URL("https://momopure.shraj.workers.dev"),
	openGraph: {
		title: "Bunny Bites — Handmade Momos That Make You Smile",
		description: "Fresh, juicy, homemade momos delivered hot to your doorstep. Steamed with love in Ranchi.",
		url: "https://momopure.shraj.workers.dev",
		siteName: "Bunny Bites Momos",
		images: [
			{
				url: "/og_image.png",
				width: 1200,
				height: 1200,
				alt: "Bunny Bites Momos — Handmade Momos That Make You Smile",
			},
		],
		locale: "en_IN",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Bunny Bites — Handmade Momos That Make You Smile",
		description: "Fresh, juicy, homemade momos delivered hot to your doorstep. Steamed with love in Ranchi.",
		images: ["/og_image.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
			</head>
			<body className={`${outfit.variable} ${playfair.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
