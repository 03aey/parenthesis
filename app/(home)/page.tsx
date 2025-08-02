"use client";

import CTA from "@/components/CTA";
import FeaturedPackage from "@/components/FeaturedPackage";
import HeroSection from "@/components/HeroSection";
import { useEffect } from "react";

export default function Home() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll"))
				.default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<main className="min-h-screen">
			<HeroSection />
			<FeaturedPackage />
			<CTA />
		</main>
	);
}
