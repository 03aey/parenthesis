"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Heart, User } from "lucide-react";
import { useAppSelector } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
	const pathname = usePathname();
	const [isOpen, setIsOpen] = useState(false);
	const [showContent, setShowContent] = useState(false);
	const [showNavbar, setShowNavbar] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);

	const wishlists = useAppSelector((state) => state.wishlist.items);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (isOpen) {
			timeout = setTimeout(() => setShowContent(true), 1000);
		} else {
			setShowContent(false);
		}

		return () => clearTimeout(timeout);
	}, [isOpen]);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				setShowNavbar(false);
			} else {
				setShowNavbar(true);
			}
			setLastScrollY(currentScrollY);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	const navLinks = [
		{ label: "Home", href: "/" },
		{ label: "Destinations", href: "/destinations" },
		{ label: "Packages", href: "/packages" },
		{ label: "Experiences", href: "/experiences" },
		{ label: "About", href: "/about" },
		{ label: "Contact", href: "/contact" },
	];

	return (
		<>
			<AnimatePresence>
				{showNavbar && !isOpen && (
					<motion.nav
						initial={{ y: -60, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: -60, opacity: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="flex justify-between items-start px-6 py-4 bg-background fixed top-0 left-0 w-full z-50 border-b"
					>
						<div
							onClick={() => setIsOpen(true)}
							className="cursor-pointer mt-1"
						>
							MENU
						</div>

						<Link
							href="/"
							className="sm:flex flex-col items-center font-surfer hidden"
						>
							<h1 className="text-3xl font-bold">Parenthesis.</h1>
							<span className="text-sm">Travel co.</span>
						</Link>

						<div className="flex gap-4 items-center font-surfer">
							<Link
								href="/wishlists"
								className={`relative p-2 hover:text-red-600 duration-300 ${
									pathname === "/wishlists"
										? "text-red-600"
										: ""
								}`}
							>
								<Heart className="h-6 w-6" />
								{wishlists.length > 0 && (
									<span className="absolute top-0 -right-1 text-md">
										{wishlists.length}
									</span>
								)}
							</Link>
							<Link
								href="/profile"
								className={`p-2 hover:bg-foreground/10 rounded-sm duration-300 ${
									pathname === "/profile"
										? "bg-foreground/10"
										: ""
								}`}
							>
								<User className="h-6 w-6" />
							</Link>
						</div>
					</motion.nav>
				)}
			</AnimatePresence>

			{/* Mobile fullscreen menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ height: 0, opacity: 0, y: -20 }}
						animate={{ height: "100vh", opacity: 1, y: 0 }}
						exit={{ height: 0, opacity: 0, y: -20 }}
						transition={{ duration: 0.6 }}
						className="fixed top-0 left-0 w-full bg-[#003d5b] text-white overflow-hidden px-6 py-4 z-40"
					>
						<div className="top-nav flex justify-between items-start">
							<div
								onClick={() => setIsOpen(false)}
								className="cursor-pointer"
							>
								CLOSE
							</div>

							<div className="flex flex-col items-center font-surfer">
								<h1 className="text-3xl font-bold">
									Parenthesis.
								</h1>
								<span className="text-sm">Travel co.</span>
							</div>
						</div>

						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: showContent ? 1 : 0 }}
							transition={{ delay: 0.4 }}
							className={`flex flex-col items-center justify-center h-full gap-8 text-4xl font-semibold ${
								!showContent ? "pointer-events-none" : ""
							}`}
						>
							{navLinks.map((link) => (
								<Link
									key={link.href}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className={`transition-colors font-surfer relative auto-underline px-2 duration-300 ${
										pathname === link.href
											? "text-yellow-400"
											: "hover:text-yellow-300"
									}`}
								>
									{link.label}
								</Link>
							))}
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
