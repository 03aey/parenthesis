"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Compass, MapPin, Plane, Camera } from "lucide-react";
import { motion } from "framer-motion";

const headingText = "Parenthesis";

export default function SplashWrapper({
	children,
}: {
	children: React.ReactNode;
}) {
	const pathname = usePathname();
	const [showSplash, setShowSplash] = useState(false);
	const [animationPhase, setAnimationPhase] = useState(0);

	useEffect(() => {
		const alreadyShown = sessionStorage.getItem("splash_shown");
		if (!alreadyShown && pathname === "/") {
			setShowSplash(true);
			sessionStorage.setItem("splash_shown", "true");

			const timer1 = setTimeout(() => setAnimationPhase(1), 500);
			const timer2 = setTimeout(() => setAnimationPhase(2), 1500);
			const timer3 = setTimeout(() => setAnimationPhase(3), 2500);
			const timer4 = setTimeout(() => {
				setAnimationPhase(4);
				setTimeout(() => setShowSplash(false), 1000);
			}, 4000);

			return () => {
				clearTimeout(timer1);
				clearTimeout(timer2);
				clearTimeout(timer3);
				clearTimeout(timer4);
			};
		}
	}, [pathname]);

	if (showSplash) {
		return (
			<motion.div
				initial={{ opacity: 1 }}
				animate={{ opacity: animationPhase === 4 ? 0 : 1 }}
				transition={{ duration: 0.8 }}
				style={{
					position: "fixed",
					inset: 0,
					zIndex: 9999,
					background: "#1f2937",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				{/* ICONS + DECORATIVE CIRCLES */}
				<div
					style={{
						position: "absolute",
						inset: 0,
						overflow: "hidden",
					}}
				>
					<motion.div
						initial={{ y: 10, opacity: 0 }}
						animate={
							animationPhase >= 1 ? { y: 0, opacity: 1 } : {}
						}
						transition={{ duration: 1 }}
						style={{
							position: "absolute",
							top: 80,
							left: 80,
							color: "rgba(255,255,255,0.2)",
						}}
					>
						<Plane size={48} />
					</motion.div>

					<motion.div
						initial={{ y: 10, opacity: 0 }}
						animate={
							animationPhase >= 1 ? { y: 0, opacity: 1 } : {}
						}
						transition={{ duration: 1, delay: 0.3 }}
						style={{
							position: "absolute",
							top: 128,
							right: 128,
							color: "rgba(255,255,255,0.2)",
						}}
					>
						<Camera size={40} />
					</motion.div>

					<motion.div
						initial={{ y: 10, opacity: 0 }}
						animate={
							animationPhase >= 1 ? { y: 0, opacity: 1 } : {}
						}
						transition={{ duration: 1, delay: 0.5 }}
						style={{
							position: "absolute",
							bottom: 128,
							left: 128,
							color: "rgba(255,255,255,0.2)",
						}}
					>
						<MapPin size={56} />
					</motion.div>

					{/* Animated decorative circles */}
					<div
						style={{
							position: "absolute",
							top: "25%",
							left: "25%",
							width: 128,
							height: 128,
							border: "1px solid rgba(255,255,255,0.1)",
							borderRadius: "50%",
							animation: "ping 2s infinite",
						}}
					/>
					<div
						style={{
							position: "absolute",
							bottom: "25%",
							right: "25%",
							width: 96,
							height: 96,
							border: "1px solid rgba(255,255,255,0.1)",
							borderRadius: "50%",
							animation: "ping 2s infinite",
							animationDelay: "1s",
						}}
					/>
					<div
						style={{
							position: "absolute",
							top: "50%",
							right: "33%",
							width: 64,
							height: 64,
							border: "1px solid rgba(255,255,255,0.1)",
							borderRadius: "50%",
							animation: "ping 2s infinite",
							animationDelay: "2s",
						}}
					/>

					{/* Floating dots */}
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0 }}
							animate={animationPhase >= 2 ? { opacity: 1 } : {}}
							transition={{
								delay: Math.random() * 3,
								duration: 1,
							}}
							style={{
								position: "absolute",
								width: 4,
								height: 4,
								borderRadius: "50%",
								backgroundColor: "rgba(255,255,255,0.3)",
								left: `${Math.random() * 100}%`,
								top: `${Math.random() * 100}%`,
								animation: `float ${
									3 + Math.random() * 4
								}s ease-in-out infinite`,
								animationDelay: `${Math.random() * 3}s`,
							}}
						/>
					))}
				</div>

				{/* MAIN CONTENT */}
				<div
					style={{
						textAlign: "center",
						color: "white",
						position: "relative",
						zIndex: 10,
					}}
				>
					<motion.div
						initial={{ scale: 0.5, opacity: 0 }}
						animate={
							animationPhase >= 0 ? { scale: 1, opacity: 1 } : {}
						}
						transition={{ duration: 1 }}
						style={{ marginBottom: 32 }}
					>
						<motion.div
							animate={
								animationPhase >= 2
									? { rotate: 360 }
									: { rotate: 0 }
							}
							transition={{ duration: 2 }}
							style={{
								width: 96,
								height: 96,
								margin: "0 auto",
								borderRadius: "50%",
								backgroundColor: "rgba(255,255,255,0.1)",
								backdropFilter: "blur(4px)",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							}}
						>
							<Compass size={48} />
						</motion.div>
					</motion.div>

					<motion.h1
						initial="hidden"
						animate="visible"
						variants={{
							hidden: {},
							visible: {
								transition: {
									staggerChildren: 0.1,
								},
							},
						}}
						style={{
							fontSize: "3rem",
							fontWeight: "bold",
							marginBottom: 16,
							letterSpacing: 2,
						}}
					>
						{headingText.split("").map((char, idx) => (
							<motion.span
								key={idx}
								variants={{
									hidden: { opacity: 0, y: 20 },
									visible: { opacity: 1, y: 0 },
								}}
								transition={{ duration: 0.5 }}
								style={{ display: "inline-block" }}
							>
								{char}
							</motion.span>
						))}
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						animate={
							animationPhase >= 2 ? { opacity: 1, y: 0 } : {}
						}
						transition={{ duration: 1, delay: 0.5 }}
						style={{
							fontSize: "1.25rem",
							opacity: 0.9,
							marginBottom: 32,
						}}
					>
						Explore the World with Wonder
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							animationPhase >= 3 ? { opacity: 1, y: 0 } : {}
						}
						transition={{ duration: 1 }}
					>
						<div
							style={{
								display: "flex",
								justifyContent: "center",
								gap: 8,
								marginBottom: 8,
							}}
						>
							{[0, 1, 2].map((i) => (
								<motion.div
									key={i}
									animate={{ y: [0, -5, 0] }}
									transition={{
										repeat: Infinity,
										duration: 1,
										delay: i * 0.2,
									}}
									style={{
										width: 8,
										height: 8,
										borderRadius: "50%",
										backgroundColor: "white",
									}}
								/>
							))}
						</div>
						<p style={{ opacity: 0.7, fontSize: 14 }}>
							Preparing your journey...
						</p>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={
							animationPhase >= 3 ? { opacity: 1, y: 0 } : {}
						}
						transition={{ duration: 1, delay: 1 }}
						style={{ width: 256, margin: "2rem auto 0" }}
					>
						<div
							style={{
								backgroundColor: "rgba(255,255,255,0.2)",
								borderRadius: 9999,
								height: 4,
							}}
						>
							<motion.div
								animate={
									animationPhase >= 3
										? { width: "100%" }
										: { width: 0 }
								}
								transition={{ duration: 2 }}
								style={{
									height: 4,
									backgroundColor: "white",
									borderRadius: 9999,
								}}
							/>
						</div>
					</motion.div>
				</div>
			</motion.div>
		);
	}

	return <>{children}</>;
}
