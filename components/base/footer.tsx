"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	Facebook,
	Heart,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { footerLinks } from "@/lib/data";

export default function Footer() {
	const itemVariants = {
		hidden: { opacity: 0, y: 10 },
		visible: {
			opacity: 1,
			y: 0,
		},
	};

	const pathname = usePathname();

	return (
		<footer className="flex flex-col">
			<div className="bg-secondary text-amber-50 w-full">
				<div className="border-b border-border-primary mx-auto px-4 pt-12">
					<div className="text-center pb-16 max-w-2xl mx-auto">
						<h3 className="text-3xl font-bold mb-6 font-surfer">
							Stay Updated
						</h3>
						<p className="mb-6 text-start md:text-center">
							Get the latest travel deals, destination guides, and
							insider tips deliveyellow to your inbox
						</p>
						<form
							action={(formData: FormData) => {
								const email = formData.get("email");
								if (email) {
									toast.success(
										"Subscribed! to our newsletter."
									);
								}
							}}
							className="flex gap-1 max-w-md mx-auto"
						>
							<Input
								type="email"
								required
								name="email"
								placeholder="peb@uhkabi.bg"
								className="flex-1 rounded-r-none focus:border-border-primary duration-300 placeholder:text-background/80"
							/>
							<Button
								type="submit"
								className="bg-border-primary rounded-l-none hover:bg-border-primary/80 cursor-pointer duration-300"
							>
								Subscribe
							</Button>
						</form>
						<p className="text-sm text-background/80 mt-4">
							No spam, unsubscribe anytime. We respect your
							privacy.
						</p>
					</div>

					<div className="md:flex justify-between flex-wrap gap-6 hidden">
						{[
							"home",
							"destinations",
							"packages",
							"experiences",
							"about",
							"contact",
						].map((link, index) => (
							<div
								key={index}
								className="flex flex-col items-center"
							>
								<Link
									href={`/${link === "home" ? "" : link}`}
									className={`text-xl hover:text-border-primary duration-300 mb-4 capitalize font-surfer ${
										pathname ===
										`/${link === "home" ? "" : link}`
											? "text-border-primary"
											: ""
									}`}
								>
									{link}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>

			<h1 className="text-[12vw] text-center font-bold bg-secondary text-amber-50 font-bruno">
				Parenthesis.
			</h1>

			<div className="foot wrapper bg-secondary text-amber-50 pb-8">
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8">
					<motion.div
						variants={itemVariants}
						className="space-y-4 col-span-full sm:col-span-2 md:col-span-1 lg:col-span-1"
					>
						<p className="w-full">
							Transform your events into unforgettable experiences
							with our comprehensive event management platform.
						</p>
						<div className="flex space-x-4 mt-6">
							{[Facebook, Twitter, Instagram, Linkedin].map(
								(Icon, index) => (
									<motion.a
										key={index}
										href="#"
										whileHover={{ scale: 1.2, rotate: 5 }}
										whileTap={{ scale: 0.9 }}
										className="hover:text-yellow-400 transition-colors"
									>
										<Icon size={20} />
									</motion.a>
								)
							)}
						</div>
					</motion.div>

					{Object.entries(footerLinks).map(([title, links]) => (
						<motion.div
							key={title}
							variants={itemVariants}
							className="space-y-4"
						>
							<h3 className="text-xl text-yellow-300 font-semibold font-surfer tracking-wider capitalize">
								{title}
							</h3>
							<ul className="space-y-2">
								{links.map((link, linkIndex) => (
									<motion.li
										key={linkIndex}
										whileHover={{ x: 5 }}
										transition={{
											type: "spring",
											stiffness: 300,
										}}
									>
										<Link
											href={link.href}
											className="hover:text-yellow-400 transition-colors duration-200"
										>
											{link.label}
										</Link>
									</motion.li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				<motion.div
					variants={itemVariants}
					className="flex flex-wrap justify-between w-full gap-4 mt-12 py-8 border-t border-border-primary"
				>
					{[
						{ icon: Mail, text: "hello@parenthesis.com" },
						{ icon: Phone, text: "+1 (555) 123-4567" },
						{
							icon: MapPin,
							text: "123 Event Street, City, Country",
						},
					].map((item, index) => (
						<motion.div
							key={index}
							className="flex items-center justify-center md:justify-start gap-2"
							whileHover={{ scale: 1.02 }}
						>
							<item.icon size={18} />
							<span>{item.text}</span>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					variants={itemVariants}
					className="pt-8 border-t border-border-primary"
				>
					<div className="flex flex-wrap justify-between gap-4">
						<p className="text-center md:text-left">
							© {new Date().getFullYear()} Parenthesis. All rights
							reserved.
						</p>
						<motion.div
							className="flex items-center gap-2"
							whileHover={{ scale: 1.02 }}
						>
							<span>Made with</span>
							<motion.div
								animate={{
									scale: [1, 1.2, 1],
									rotate: [0, 10, -10, 0],
								}}
								transition={{
									duration: 1.5,
									repeat: Infinity,
									repeatType: "reverse",
								}}
							>
								<Heart size={18} className="text-yellow-500" />
							</motion.div>
							<Link
								href="https://github.com/alok-x0s1"
								target="_blank"
							>
								by @LokYadav
							</Link>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</footer>
	);
}
