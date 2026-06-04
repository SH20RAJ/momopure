import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
	variable: "--font-sans",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

const serif = Fraunces({
	variable: "--font-serif",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
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
			<body className={`${sans.variable} ${serif.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
