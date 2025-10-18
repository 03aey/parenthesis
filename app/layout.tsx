import type { Metadata } from "next";
import { Rubik, Bruno_Ace, Original_Surfer } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ReduxProvider } from "@/components/base/redux-provider";
import { Toaster } from "@/components/ui/sonner";

const surfer = Original_Surfer({
	subsets: ["latin"],
	variable: "--font-surfer",
	weight: "400",
});

const avante = localFont({
	src: "../public/fonts/avant-garde.woff2",
	variable: "--font-avante",
});

const rubik = Rubik({
	subsets: ["latin"],
	variable: "--font-rubik",
});

const bruno = Bruno_Ace({
	subsets: ["latin"],
	variable: "--font-bruno",
	weight: "400",
});

export const metadata: Metadata = {
	title: "Parenthesis - Explore the World",
	description:
		"Discover extraordinary destinations and create unforgettable memories with Parenthesis. Premium travel experiences, luxury accommodations, and authentic cultural adventures.",
	keywords:
		"travel, destinations, luxury travel, adventure, cultural experiences, vacation packages",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${rubik.variable} ${bruno.variable} ${surfer.variable} ${avante.variable} antialiased`}
			>
				<ReduxProvider>{children}</ReduxProvider>
				<Toaster
					toastOptions={{
						unstyled: true,
						classNames: {
							toast: "bg-[#CDC8BC] w-fit rounded-sm p-2 flex items-center gap-2 border border-border-primary",
							title: "text-base font-surfer",
							error: "text-destructive",
							warning: "text-secondary",
						},
					}}
				/>
			</body>
		</html>
	);
}
