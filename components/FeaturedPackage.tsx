"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";
import { motion } from "framer-motion";

export default function FeaturedPackage() {
	const cardVariants = {
		hidden: { opacity: 0, y: 40, scale: 0.95 },
		visible: {
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				delay: 0.2,
				duration: 0.6,
			},
		},
	};

	return (
		<motion.div
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.2 }}
			className="px-4 sm:px-6 lg:px-12 py-10 flex flex-col gap-4 items-center bg-secondary"
		>
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				className="text-5xl md:text-7xl text-center font-bold font-surfer text-amber-50"
			>
				Most Popular <br className="hidden lg:block" /> Packages
			</motion.h1>

			<div className="flex flex-col lg:flex-row py-10 gap-10 xl:gap-20">
				{[
					{
						img: "/images/greek-island.jpg",
						title: "Greek Island Paradise",
						price: "1,500/Person",
						hasPrice: true,
					},
					{
						img: "/images/maldives-luxury.jpg",
						title: "Maldives Luxury Escape",
						price: "6D/5N",
						hasPrice: false,
					},
				].map((pkg, index) => (
					<motion.div
						key={pkg.title}
						custom={index}
						variants={cardVariants}
						className="info flex flex-col gap-4 text-amber-50 items-center"
					>
						<div className="p-2 w-full lg:w-[500px] h-[320px] overflow-hidden border-2 rounded-full border-border-primary">
							<motion.img
								src={pkg.img}
								alt={pkg.title}
								initial={{ scale: 1 }}
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.3 }}
								className="h-full w-full rounded-full object-cover"
							/>
						</div>

						<p className="text-border-primary flex items-center font-bruno text-xl">
							{pkg.hasPrice && <PiCurrencyDollarSimpleBold />}
							<span className="ml-2">{pkg.price}</span>
						</p>
						<h2 className="text-3xl font-surfer">{pkg.title}</h2>
					</motion.div>
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5, delay: 0.5 }}
			>
				<Link
					href="/packages"
					className="bg-border-primary uppercase border-2 hover:bg-border-primary/90 duration-300 cursor-pointer border-border-primary px-6 text-xs sm:text-sm md:text-base py-4 rounded-full mx-auto flex items-center gap-4"
				>
					Explore packages <ArrowRight size={16} />
				</Link>
			</motion.div>
		</motion.div>
	);
}
