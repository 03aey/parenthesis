"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	destinationContinents,
	destinations,
	destinationTypes,
} from "@/lib/data";
import { ArrowRight, Heart, MapPin, Search, Star } from "lucide-react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { addToWishlist, removeFromWishlist } from "@/features/wishlistSlice";
import { toast } from "sonner";
import Link from "next/link";

export default function Destinations() {
	const [selectedContinent, setSelectedContinent] = useState("all");
	const [selectedType, setSelectedType] = useState("all");
	const [searchTerm, setSearchTerm] = useState("");

	const filteredDestinations = destinations.filter((dest) => {
		const continentMatch =
			selectedContinent === "all" || dest.continent === selectedContinent;
		const typeMatch = selectedType === "all" || dest.type === selectedType;
		const searchMatch = dest.title
			.toLowerCase()
			.includes(searchTerm.toLowerCase());
		return continentMatch && typeMatch && searchMatch;
	});

	const wishlists = useAppSelector((state) => state.wishlist.items);
	const dispatch = useAppDispatch();

	const isWishlisted = (id: string) =>
		wishlists.find((item) => item.id === id);

	return (
		<div className="min-h-screen pt-20">
			<section className="first-section flex flex-col justify-center items-center text-amber-50 rounded-br-[100px] py-10 bg-secondary">
				<h1 className="text-4xl md:text-[6vw] font-bold font-surfer animate-fade-up">
					Discover Destinations
				</h1>

				<p className="text-sm px-6 w-full md:text-[1.5vw] mt-4 text-center animate-fade-up">
					Explore our curated collection of the world's most <br />
					incredible destinations
				</p>
			</section>

			<section className="py-10">
				<div className="mx-auto wrapper animate-slide-in">
					<div className="flex flex-col md:flex-row gap-4">
						<div className="relative flex-1 max-w-md">
							<Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
							<Input
								placeholder="Search destinations..."
								className="pl-10"
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
							/>
						</div>

						<div className="flex gap-4 flex-wrap">
							<Select
								value={selectedContinent}
								onValueChange={setSelectedContinent}
							>
								<SelectTrigger className="w-40">
									<SelectValue placeholder="Continent" />
								</SelectTrigger>
								<SelectContent>
									{destinationContinents.map((continent) => (
										<SelectItem
											key={continent}
											value={continent}
										>
											{continent === "all"
												? "All Continents"
												: continent}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							<Select
								value={selectedType}
								onValueChange={setSelectedType}
							>
								<SelectTrigger className="w-40">
									<SelectValue placeholder="Type" />
								</SelectTrigger>
								<SelectContent>
									{destinationTypes.map((type) => (
										<SelectItem key={type} value={type}>
											{type === "all"
												? "All Types"
												: type}
										</SelectItem>
									))}
								</SelectContent>
							</Select>

							{/* <Button
								variant="outline"
								className="rounded-full capitalize border-border hover:bg-secondary/10 cursor-pointer"
							>
								<Filter className="h-4 w-4 mr-2" />
								More Filters
							</Button> */}
						</div>
					</div>
				</div>
			</section>

			<section className="wrapper pb-12">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{filteredDestinations.map((destination, index) => (
						<Card
							key={destination.id}
							className="card-luxury group animate-scale-in rounded-tr-3xl"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<div className="relative overflow-hidden rounded-tr-3xl">
								<img
									src={destination.image}
									alt={destination.title}
									className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute bottom-4 left-4">
									<span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium font-surfer">
										{destination.type}
									</span>
								</div>
								<div className="absolute top-4 right-4 cursor-pointer">
									{isWishlisted(destination.id) ? (
										<div
											className="animate-float"
											onClick={() => {
												dispatch(
													removeFromWishlist(
														destination.id
													)
												);
												toast.error(
													"Destination removed from wishlist."
												);
											}}
										>
											<Heart className="h-5 w-5 fill-current text-red-600" />
										</div>
									) : (
										<div
											className="bg-white/90 rounded-full backdrop-blur-sm p-2"
											onClick={() => {
												dispatch(
													addToWishlist(destination)
												);
												toast.success(
													"Destination added to wishlist."
												);
											}}
										>
											<Heart className="h-5 w-5" />
										</div>
									)}
								</div>
							</div>

							<CardContent className="p-4">
								<div className="flex items-start justify-between mb-3">
									<div>
										<h3 className="text-xl font-bold mb-1 font-bruno">
											{destination.title}
										</h3>
										<div className="flex items-center text-muted-foreground">
											<MapPin className="h-4 w-4 mr-1" />
											<span className="text-sm">
												{destination.country},{" "}
												{destination.continent}
											</span>
										</div>
									</div>
									<div className="text-right">
										<div className="px-2 py-1 rounded-lg flex items-center gap-1">
											<Star className="h-4 w-4 text-secondary fill-current" />
											<span className="text-sm font-medium">
												{destination.rating}
											</span>
										</div>
									</div>
								</div>

								<p className="text-muted-foreground mb-4">
									{destination.description}
								</p>

								<div className="mb-4">
									<div className="flex flex-wrap items-center gap-2">
										{destination.highlights
											.slice(0, 3)
											.map((highlight, idx) => (
												<span
													key={idx}
													className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs"
												>
													{highlight}
												</span>
											))}
										{destination.highlights.length > 3 && (
											<span className="text-xs text-muted-foreground">
												+
												{destination.highlights.length -
													3}{" "}
												more
											</span>
										)}
									</div>
								</div>

								<div className="card-bottom flex justify-between items-end">
									<div className="text-left">
										<p className="text-sm text-muted-foreground">
											Starting
										</p>
										<p className="text-lg font-bold text-primary">
											From $ {destination.price}
										</p>
									</div>

									<Link
										href={`/booking?type=destination&id=${destination.id}`}
									>
										<Button className="w-fit capitalize rounded-full cursor-pointer">
											Book Now
											<ArrowRight className="ml-1" />
										</Button>
									</Link>
								</div>
							</CardContent>
						</Card>
					))}
				</div>

				{filteredDestinations.length === 0 && (
					<div className="text-center py-16">
						<h3 className="text-2xl font-semibold mb-4">
							No destinations found
						</h3>
						<p className="text-muted-foreground mb-6">
							Try adjusting your filters to see more destinations.
						</p>
						<Button
							onClick={() => {
								setSelectedContinent("all");
								setSelectedType("all");
								setSearchTerm("");
							}}
							className="rounded-full cursor-pointer"
						>
							Clear Filters
						</Button>
					</div>
				)}
			</section>
		</div>
	);
}
