import { Calendar, Clock, MapPin, Star, Users } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IoIosCard } from "react-icons/io";
import PackageItenary from "./itenary";
import Link from "next/link";
import { Package } from "@/lib/type";

export default function PackageCard({
	pkg,
	index,
}: {
	pkg: Package;
	index: number;
}) {
	return (
		<Card
			className="card-luxury animate-scale-in border-none shadow-none"
			style={{ animationDelay: `${index * 0.2}s` }}
		>
			<div className="grid grid-cols-1 lg:grid-cols-2">
				<div className="relative overflow-hidden">
					<img
						src={pkg.image}
						alt={pkg.title}
						className="w-full h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
					/>
					<div className="absolute top-4 left-4">
						<Badge className="bg-primary/90 font-bruno text-primary-foreground">
							{pkg.duration}
						</Badge>
					</div>
					<div className="absolute bottom-4 left-4 right-4">
						<div className="bg-secondary/60 backdrop-blur-sm rounded-lg p-4 text-white">
							<div className="flex items-center justify-between">
								<div>
									<p className="text-sm opacity-90">
										Starting from
									</p>
									<p className="text-2xl font-bold">
										$ {pkg.price.toLocaleString()}
									</p>
								</div>
								<div className="text-right">
									<p className="text-sm opacity-90">
										per person
									</p>
									<div className="flex items-center">
										<Star className="h-4 w-4 fill-current text-yellow-500 mr-1" />
										<span className="text-sm">4.8</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<CardContent className="p-4">
					<div className="">
						<div className="">
							<div className="flex items-center gap-2 mb-2">
								<MapPin className="h-5 w-5 text-primary" />
								<span className="text-primary font-bruno font-semibold">
									{pkg.destination}
								</span>
							</div>
							<h2 className="text-3xl font-surfer font-bold mb-4">
								{pkg.title}
							</h2>

							<div className="grid grid-cols-2 gap-4 mb-6">
								<div className="flex items-center gap-2">
									<Clock className="h-5 w-5 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">
										{pkg.duration}
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Users className="h-5 w-5 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">
										2-6 People
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Calendar className="h-5 w-5 text-muted-foreground" />
									<span className="text-sm text-muted-foreground">
										Year Round
									</span>
								</div>
								<div className="flex items-center gap-2">
									<Star className="h-5 w-5 text-yellow-500 fill-current" />
									<span className="text-sm text-muted-foreground">
										Premium
									</span>
								</div>
							</div>
						</div>

						<div className="mb-6">
							<h3 className="text-lg font-surfer font-semibold mb-2">
								Package Highlights
							</h3>
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
								{pkg.highlights.map((highlight, idx) => (
									<div
										key={idx}
										className="flex items-center gap-2"
									>
										<div className="w-2 h-2 bg-secondary rounded-full" />
										<span className="text-sm">
											{highlight}
										</span>
									</div>
								))}
							</div>
						</div>

						<div className="mb-6">
							<h4 className="font-semibold font-surfer text-lg mb-2">
								Included
							</h4>
							<div className="flex flex-wrap items-center gap-2">
								{pkg.included.map((item, idx) => (
									<span
										key={idx}
										className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs"
									>
										{item}
									</span>
								))}
							</div>
						</div>

						<div className="flex items-center gap-4 mt-4">
							<Link href={`/booking?type=package&id=${pkg.id}`}>
								<Button className="btn-luxury bg-border-primary hover:bg-border-primary/80 duration-300 flex-1">
									Book Now <IoIosCard />
								</Button>
							</Link>

							<PackageItenary key={pkg.id} pkg={pkg} />
						</div>
					</div>
				</CardContent>
			</div>
		</Card>
	);
}
