import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, Search, MapPin, Compass, ArrowLeft, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const popularDestinations = [
	{
		name: "Santorini",
		href: "/destinations",
		image: "/images/african.jpg",
	},
	{
		name: "Kyoto",
		href: "/destinations",
		image: "/images/mountains.jpg",
	},
	{
		name: "Machu Picchu",
		href: "/destinations",
		image: "/images/machu-picchu.jpg",
	},
	{
		name: "Maldives",
		href: "/destinations",
		image: "/images/maldives-luxury.jpg",
	},
];

const quickLinks = [
	{ name: "All Destinations", href: "/destinations", icon: MapPin },
	{ name: "Travel Packages", href: "/packages", icon: Compass },
	{ name: "Travel Experiences", href: "/experiences", icon: Search },
	{ name: "Contact Support", href: "/contact", icon: Mail },
];

export default function NotFound() {
	return (
		<div className="min-h-screen pt-20">
			<section className="py-20 px-4 md:px-6">
				<div className="max-w-4xl mx-auto text-center">
					<div className="relative mb-8">
						<div className="text-8xl md:text-9xl lg:text-[10rem] font-bold text-gray-300 select-none">
							404
						</div>
						<div className="absolute inset-0 flex items-center justify-center">
							<div className="w-32 h-32 bg-gradient-to-r from-secondary to-background rounded-full flex items-center justify-center">
								<Compass
									className="h-16 w-16 text-white animate-spin"
									style={{ animationDuration: "3s" }}
								/>
							</div>
						</div>
					</div>

					<h1 className="text-4xl md:text-5xl font-surfer font-bold text-gray-900 mb-4">
						Oops! You've Wandered Off the Path
					</h1>
					<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
						It looks like the page you're looking for has gone on an
						adventure of its own. Don't worry though – there are
						plenty of amazing destinations waiting to be discovered!
					</p>

					<div className="flex flex-wrap gap-4 justify-center mb-16">
						<Button asChild className="w-fit">
							<Link href="/">
								<Home className="mr-2 h-5 w-5" />
								Back to Home
							</Link>
						</Button>
						<Button
							asChild
							variant="outline"
							className="bg-border-primary w-fit hover:bg-border-primary/80 duration-300"
						>
							<Link href="/destinations">
								<Search className="mr-2 h-5 w-5" />
								Explore Destinations
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className="py-16 md:py-20 px-4 md:px-6">
				<div className="wrapper mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold font-surfer text-gray-900 mb-4">
							While You're Here, Check Out These Popular
							Destinations
						</h2>
						<p className="text-gray-600 md:text-lg">
							Maybe one of these amazing places is what you were
							looking for?
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
						{popularDestinations.map((destination, index) => (
							<Card
								key={index}
								className="group overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
							>
								<div className="relative h-40 overkflow-hidden">
									<Image
										src={destination.image}
										alt={destination.name}
										fill
										className="object-cover group-hover:scale-110 transition-transform duration-300"
									/>
									<div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
									<div className="absolute bottom-4 left-4">
										<h3 className="text-white font-bruno font-bold text-lg md:text-xl">
											{destination.name}
										</h3>
									</div>
								</div>
								<CardContent className="p-4 md:p-6">
									<Button
										asChild
										className="w-fit text-sm md:text-base"
									>
										<Link href={destination.href}>
											Explore {destination.name}
										</Link>
									</Button>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 md:py-20 px-4 md:px-6 bg-[#CDC8BC]">
				<div className="wrapper mx-auto">
					<div className="text-center mb-12">
						<h2 className="text-3xl md:text-4xl font-bold font-surfer text-gray-900 mb-4">
							Or Try These Quick Links
						</h2>
						<p className="text-gray-600 md:text-lg">
							Navigate to the most popular sections of our site
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
						{quickLinks.map((link, index) => (
							<Card
								key={index}
								className="hover:shadow-lg transition-shadow duration-300"
							>
								<CardContent className="p-6 md:p-8">
									<Link
										href={link.href}
										className="flex items-center space-x-4 group"
									>
										<div className="w-12 h-12 bg-background rounded-lg flex items-center justify-center group-hover:bg-background/80 transition-colors duration-300">
											<link.icon className="h-6 w-6 text-secondary" />
										</div>
										<div className="flex-1">
											<h3 className="font-semibold text-lg md:text-xl group-hover:text-secondary transition-colors duration-300 font-bruno">
												{link.name}
											</h3>
											<p className="text-gray-600 text-sm md:text-base">
												{link.name ===
													"All Destinations" &&
													"Browse our complete collection of travel destinations"}
												{link.name ===
													"Travel Packages" &&
													"Discover curated travel packages and itineraries"}
												{link.name ===
													"Travel Experiences" &&
													"Find unique experiences and activities"}
												{link.name ===
													"Contact Support" &&
													"Get help from our travel experts"}
											</p>
										</div>
										<ArrowLeft className="h-5 w-5 text-gray-400 transform rotate-180 group-hover:translate-x-1 transition-transform duration-300" />
									</Link>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 md:py-20 px-4 md:px-6 bg-secondary text-amber-50">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-4 font-surfer">
						Still Can't Find What You're Looking For?
					</h2>
					<p className="text-xl text-blue-100 mb-8">
						Our travel experts are here to help you plan the perfect
						adventure
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Button asChild className="text-amber-50 w-fit">
							<Link href="/contact">
								<Mail className="mr-2 h-5 w-5" />
								Contact Support
							</Link>
						</Button>
						<Button
							asChild
							className="bg-border-primary w-fit hover:bg-border-primary/80 duration-300"
						>
							<Link href="/about">Learn More</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
