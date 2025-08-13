"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	ArrowRight,
	Heart,
	MapPin,
	Plus,
	Share,
	Share2,
	ShoppingCart,
	Star,
	Trash2,
} from "lucide-react";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { clearWishlist, removeFromWishlist } from "@/features/wishlistSlice";
import { toast } from "sonner";

export default function Wishlists() {
	const wishlists = useAppSelector((state) => state.wishlist.items);
	const dispatch = useAppDispatch();

	const total = wishlists.reduce((acc, item) => acc + item.price, 0);

	return (
		<div className="min-h-screen pt-20">
			<section className="first-section flex flex-wrap justify-between items-center text-amber-50 py-12 bg-secondary rounded-br-[100px] px-6">
				<div className="left animate-fade-up">
					<h1 className="text-5xl md:text-[6vw] flex items-center gap-2 font-bold font-surfer">
						My Wishlists
						<Heart className="h-12 w-12 fill-current animate-float text-border-primary" />
					</h1>

					<p className="text-start mt-6 md:text-[1.25vw] md:mt-2 md:text-center">
						Your saved destinations and dream trips. Start planning
						your next adventure from here!
					</p>
				</div>

				<div className="right animate-fade-up">
					<div className="mt-6 md:mt-0 flex gap-4">
						<Button
							className="text-amber-50 cursor-pointer capitalize"
							onClick={() => {
								navigator.clipboard.writeText(
									window.location.origin + "/wishlists"
								);
								toast.success(
									"Wishlist link copied to clipboard."
								);
							}}
						>
							<Share2 className="mr-2 h-4 w-4" />
							Share Wishlist
						</Button>
						<Button
							asChild
							className="bg-border-primary text-foreground hover:bg-border-primary/90 cursor-pointer capitalize"
						>
							<Link href="/packages">
								<ShoppingCart className="mr-2 h-4 w-4" />
								Browse Packages
							</Link>
						</Button>
					</div>
				</div>
			</section>

			<section className="pb-16">
				<div className="wrapper mx-auto px-4 sm:px-6 lg:px-8">
					{wishlists.length > 0 ? (
						<>
							<div className="flex animate-slide-in justify-between items-center my-8">
								<div>
									<h2 className="text-3xl font-surfer font-bold">
										Saved Destinations{" "}
										<span className="text-muted-foreground text-sm">
											($ {total} usd)
										</span>
									</h2>
									<p className="text-muted-foreground">
										{wishlists.length} destination
										{wishlists.length !== 1 ? "s" : ""}{" "}
										saved
									</p>
								</div>

								<Button
									variant="outline"
									onClick={() => {
										dispatch(clearWishlist());
										toast.error(
											"Wishlist cleared successfully."
										);
									}}
									className="text-destructive border-destructive hover:bg-destructive hover:text-white cursor-pointer duration-300"
								>
									Clear All
								</Button>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
								{wishlists.map((destination, index) => (
									<Card
										key={destination.id}
										className="card-luxury group animate-scale-in rounded-none"
										style={{
											animationDelay: `${index * 0.1}s`,
										}}
									>
										<div className="relative overflow-hidden">
											<img
												src={destination.image}
												alt={destination.title}
												className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
											/>
											<div className="absolute top-4 left-4">
												<Badge className="bg-primary/90 font-surfer text-primary-foreground">
													{destination.type}
												</Badge>
											</div>
											<div className="absolute top-4 right-4 flex gap-2">
												<div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg flex items-center gap-1">
													<Star className="h-4 w-4 text-secondary fill-current" />
													<span className="text-sm font-medium">
														{destination.rating}
													</span>
												</div>
												<Button
													size="icon"
													variant="ghost"
													className="bg-white/90 backdrop-blur-sm hover:bg-red-500 hover:text-white w-8 h-8 cursor-pointer"
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
													<Trash2 className="h-4 w-4" />
												</Button>
											</div>
											<div className="absolute bottom-4 right-4">
												<Heart className="h-6 w-6 text-red-500 fill-current animate-float" />
											</div>
										</div>

										<CardContent className="p-4 md:p-6">
											<div className="flex items-start justify-between mb-3">
												<div>
													<h3 className="text-lg md:text-xl font-bruno font-bold mb-1">
														{destination.title}
													</h3>
													<div className="flex items-center text-muted-foreground">
														<MapPin className="h-4 w-4 mr-1" />
														<span className="text-sm">
															{
																destination.country
															}
															,
															{
																destination.continent
															}
														</span>
													</div>
												</div>
												<div className="text-right">
													<p className="text-sm text-muted-foreground">
														Starting
													</p>
													<p className="text-base font-semibold text-primary">
														From $
														{destination.price}
													</p>
												</div>
											</div>

											<p className="text-muted-foreground mb-4">
												{destination.description}
											</p>

											<div className="mb-4">
												<div className="flex flex-wrap gap-2 items-center">
													{destination.highlights
														.slice(0, 3)
														.map(
															(
																highlight: string,
																idx: number
															) => (
																<span
																	key={idx}
																	className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs"
																>
																	{highlight}
																</span>
															)
														)}
													{destination.highlights
														.length > 3 && (
														<span className="text-xs text-muted-foreground">
															+
															{destination
																.highlights
																.length -
																3}{" "}
															more
														</span>
													)}
												</div>
											</div>

											<div className="flex gap-2">
												<Link
													href={`/booking?type=destination&id=${destination.id}`}
												>
													<Button className="btn-luxury bg-border-primary hover:bg-border-primary/80 cursor-pointer duration-300">
														<ShoppingCart className="h-4 w-4 mr-2" />
														Book Now
													</Button>
												</Link>
												<Button
													className="btn-outline-luxury cursor-pointer rounded-full"
													onClick={() => {
														navigator.clipboard.writeText(
															window.location
																.origin +
																`/booking?type=destination&id=${destination.id}`
														);
														toast.success(
															"Link copied to clipboard."
														);
													}}
												>
													<Share className="h-4 w-4" />
												</Button>
											</div>
										</CardContent>
									</Card>
								))}
							</div>

							<div className="mt-16 text-center">
								<h3 className="text-3xl font-bold mb-4 font-surfer">
									Ready to Turn Dreams into Reality?
								</h3>
								<p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
									Contact our travel experts to start planning
									your perfect itinerary from your saved
									destinations.
								</p>
								<div className="flex flex-wrap gap-4 justify-center">
									<Button className="btn-luxury w-fit">
										Plan My Trip
									</Button>
									<Button className="btn-outline-luxury w-fit bg-border-primary hover:bg-border-primary/90 duration-300 cursor-pointer">
										Talk to Expert <ArrowRight size={16} />
									</Button>
								</div>
							</div>
						</>
					) : (
						<div className="text-center py-20">
							<div className="mb-8">
								<Heart className="h-24 w-24 text-border-primary mx-auto mb-4" />
								<h2 className="text-3xl font-bold mb-4">
									Your Wishlist is Empty
								</h2>
								<p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
									Start exploring our amazing destinations and
									save your favorites for later planning.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link href="/destinations">
									<Button className="btn-luxury cursor-pointer">
										Explore Destinations
									</Button>
								</Link>
								<Link href="/packages">
									<Button
										variant="outline"
										className="btn-outline-luxury bg-border-primary hover:bg-border-primary/90 duration-300 cursor-pointer"
									>
										View Packages <ArrowRight size={16} />
									</Button>
								</Link>
							</div>

							<div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
								<div className="text-center p-6">
									<Heart className="h-8 w-8 text-primary mx-auto mb-3" />
									<h4 className="font-semibold mb-2">
										Save Favorites
									</h4>
									<p className="text-sm text-muted-foreground">
										Click the heart icon on any destination
										to save it here
									</p>
								</div>
								<div className="text-center p-6">
									<Star className="h-8 w-8 text-primary mx-auto mb-3" />
									<h4 className="font-semibold mb-2">
										Compare Options
									</h4>
									<p className="text-sm text-muted-foreground">
										Keep track of different destinations and
										packages
									</p>
								</div>
								<div className="text-center p-6">
									<ShoppingCart className="h-8 w-8 text-primary mx-auto mb-3" />
									<h4 className="font-semibold mb-2">
										Easy Booking
									</h4>
									<p className="text-sm text-muted-foreground">
										Book directly from your wishlist when
										ready
									</p>
								</div>
							</div>
						</div>
					)}
				</div>

				{wishlists.length > 0 && (
					<section className="py-16">
						<div className="wrapper mx-auto">
							<h2 className="text-3xl font-surfer font-bold text-center mb-12">
								You Might Also Like
							</h2>
							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{[
									{
										name: "Bali Paradise",
										country: "Indonesia",
										image: "/images/romance-1.jpg",
										price: "$1,199",
									},
									{
										name: "Iceland Adventure",
										country: "Iceland",
										image: "/images/greek-island.jpg",
										price: "$2,299",
									},
									{
										name: "Dubai Luxury",
										country: "UAE",
										image: "/images/maldives-luxury.jpg",
										price: "$1,699",
									},
								].map((item, index) => (
									<Card
										key={index}
										className="group overflow-hidden hover:shadow-xl transition-all duration-300"
									>
										<div className="relative h-48 overflow-hidden">
											<img
												src={item.image}
												alt={item.name}
												className="object-cover group-hover:scale-110 transition-transform duration-300"
											/>
										</div>
										<CardContent className="p-4">
											<h3 className="font-bold mb-1 font-bruno">
												{item.name}
											</h3>
											<p className="text-gray-600 text-sm mb-2">
												{item.country}
											</p>
											<div className="flex items-center justify-between">
												<span className="font-bold text-secondary">
													{item.price}
												</span>
												<Link href="#">
													<Button className="capitalize">
														<Plus size={16} />{" "}
														Wishlist
													</Button>
												</Link>
											</div>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</section>
				)}
			</section>
		</div>
	);
}
