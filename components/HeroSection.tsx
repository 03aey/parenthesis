"use client";

import { useEffect, useState } from "react";
import { BiSolidPlaneAlt } from "react-icons/bi";
import CircleImage from "./CircleImage";
import Link from "next/link";
import FeaturedDestination from "./FeaturedDestination";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	visible: {
		transition: {
			staggerChildren: 0.25,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, scale: 0.5, rotate: -45 },
	visible: {
		opacity: 1,
		scale: 1,
		rotate: 0,
		transition: {
			duration: 1,
		},
	},
};

export default function HeroSection() {
	const [visible, setVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true);
		}, 200);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="flex flex-col justify-start pt-24 mt-20 px-4 md:px-6 lg:px-12">
			<div className="heading leading-tight">
				<motion.h1
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-6xl md:text-[8vw] md:pl-[15vw] font-surfer font-semibold"
				>
					Find Your
				</motion.h1>

				<div className="second-head md:pl-[20vw] flex items-center gap-4">
					<motion.div
						initial={{ width: 0, opacity: 0 }}
						animate={{
							width: visible ? "18vw" : 0,
							opacity: visible ? 1 : 0,
						}}
						transition={{ duration: 1.2, ease: "easeInOut" }}
						className="overflow-hidden rounded-full h-[9vw]"
					>
						<img
							src="/images/heading.jpg"
							alt="heading_image"
							width={100}
							height={100}
							className="object-cover h-[9vw] w-full"
						/>
					</motion.div>

					<motion.h1
						initial={{ opacity: 0, y: 40 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.8 }}
						className="text-5xl md:text-[8vw] font-surfer font-bold"
					>
						Ideal Stay
					</motion.h1>
				</div>
			</div>

			<div className="intro flex flex-col items-center">
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.7 }}
					className="text-lg lg:text-[1.25vw] mt-8 text-foreground/75 text-center"
				>
					Over 1.5 million aggregated hotel ratings allow you to find
					out
					<br className="hidden lg:block" /> more about where you are
					travelling.
				</motion.p>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.8, duration: 0.6 }}
				>
					<Link
						href="/packages"
						className="mt-7 uppercase flex items-center gap-2 group cursor-pointer overflow-hidden w-fit relative auto-underline px-2 py-1"
					>
						<BiSolidPlaneAlt className="text-xl translate-y-6 -translate-x-6 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-500" />
						Explore Trips
						<BiSolidPlaneAlt className="text-xl translate-y-0 translate-x-0 group-hover:-translate-y-6 group-hover:translate-x-6 transition-all duration-500" />
					</Link>
				</motion.div>
			</div>

			<motion.div
				initial="hidden"
				whileInView="visible"
				variants={containerVariants}
				viewport={{ once: true }}
				className="md:mt-20 lg:mt-40 mb-10 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-20"
			>
				{[
					{
						src: "/images/feature-1.jpg",
						alt: "profile_image",
						className: "mt-20",
					},
					{ src: "/images/feature-2.jpg", alt: "profile_image" },
					{
						src: "/images/feature-3.jpg",
						alt: "profile_image",
						className: "mt-20 hidden lg:block",
					},
				].map((item, i) => (
					<motion.div key={i} variants={itemVariants}>
						<CircleImage {...item} />
					</motion.div>
				))}
			</motion.div>

			<div className="my-20 flex flex-col gap-10 w-full">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="grid grid-cols-1 xl:grid-cols-2 gap-4 w-full"
				>
					<div className="second-head flex flex-col gap-4">
						<h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-5xl font-surfer font-semibold">
							Explore our
						</h1>
						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-6xl font-surfer font-bold leading-[0.5] md:leading-none">
							Elegence Dest.
						</h1>
					</div>

					<p className="text-md sm:text-lg pt-4 lg:text-xl w-full text-foreground/90">
						Discover captivating destinations, each boasting unique
						blends of stunning landscapes, rich cultural
						experiences, and thrilling activities.
					</p>
				</motion.div>

				<motion.div
					initial="hidden"
					whileInView="visible"
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.2 },
						},
					}}
					viewport={{ once: true }}
					className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-start w-full"
				>
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 40 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<FeaturedDestination
							src="/images/paris.jpg"
							alt="paris image"
							name="Paris, France"
							desc="Paris is a city and a municipality in France, the most populous city in the country, and the capital of the Île-de-France region."
							price={200}
						/>
					</motion.div>
					<motion.div
						variants={{
							hidden: { opacity: 0, y: 40 },
							visible: { opacity: 1, y: 0 },
						}}
					>
						<FeaturedDestination
							src="/images/venice.jpg"
							alt="venice image"
							name="Venice, Italy"
							desc="Venice is a city in northern Italy, known for its canals, gondolas, and historic architecture. It is also known for its famous St. Mark's Basilica, which is the largest cathedral in the world."
							price={200}
						/>
					</motion.div>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.6 }}
					viewport={{ once: true }}
				>
					<Link
						href="/destinations"
						className="uppercase border-2 hover:bg-border-primary/10 cursor-pointer border-border-primary px-6 text-xs sm:text-sm md:text-base py-4 rounded-full mx-auto flex items-center gap-4 w-fit"
					>
						Check all destinations <ArrowRight size={16} />
					</Link>
				</motion.div>
			</div>
		</div>
	);
}
