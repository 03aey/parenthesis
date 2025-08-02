"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CTA() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95, y: 30 }}
			whileInView={{ opacity: 1, scale: 1, y: 0 }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
			className="wrapper bg-[#CDC8BC] py-32 flex flex-col items-center"
		>
			<motion.h1
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-4xl md:text-[6vw] text-center leading-[1.05] font-bold font-surfer"
			>
				The Hotel And Luxury <br /> Room Discover
			</motion.h1>

			<motion.p
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="text-start md:text-center py-12 text-lg"
			>
				Is a website that showcases a collection of extraordinary
				boutique hotels across the globe.
				<br className="hidden md:block" /> Each hotel is unique and
				connected to its locale,
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.4 }}
			>
				<Link
					href="/booking"
					className="uppercase border-2 hover:bg-border-primary/10 cursor-pointer border-border-primary px-12 text-xs sm:text-sm md:text-base py-3 rounded-full mx-auto flex items-center gap-4"
				>
					Book now <ArrowRight size={16} />
				</Link>
			</motion.div>
		</motion.div>
	);
}
