"use client";

import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function FeaturedDestination({
	src,
	name,
	desc,
	price,
	alt,
}: {
	src: string;
	name: string;
	desc: string;
	price: number;
	alt: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 40 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, ease: "easeOut" }}
			viewport={{ once: true, amount: 0.3 }}
			className="w-full h-auto flex flex-col gap-2"
		>
			<motion.img
				src={src}
				alt={alt}
				className="w-full h-[60vw] sm:h-[50vw] md:h-[400px] object-cover"
			/>

			<div className="info flex font-surfer justify-between items-center">
				<h1 className="font-bold text-[5vw] sm:text-xl md:text-2xl">
					{name}
				</h1>
				<p className="flex items-center gap-1 text-[4vw] sm:text-base md:text-lg lg:text-xl">
					<PiCurrencyDollarSimpleBold size={16} />
					{price}
				</p>
			</div>

			<p className="text-[3.5vw] sm:text-sm md:text-base text-foreground/60">
				{desc}
			</p>
		</motion.div>
	);
}
