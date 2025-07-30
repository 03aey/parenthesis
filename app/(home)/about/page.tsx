import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { values } from "@/lib/data";
import { Compass, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
	return (
		<div className="min-h-screen pt-20">
			<section className="first-section wrapper flex flex-col items-start md:items-center text-amber-50 py-10 bg-secondary rounded-br-[100px] text-start md:text-center">
				<h1 className="text-4xl md:text-[6vw] font-bold font-surfer animate-fade-up">
					Know About Us
				</h1>

				<p className="md:text-[1.5vw] text-sm mt-4 animate-fade-up">
					Born from a passion for extraordinary travel, we craft
					luxury experiences that <br className="hidden md:block" />
					transform journeys into lifelong memories.
				</p>
			</section>

			<section className="py-10">
				<div className="wrapper animate-slide-in">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						<div className="space-y-6">
							<h2 className="text-5xl font-bold font-surfer">
								Our Story
							</h2>
							<div className="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									Parenthesis was founded in 2009 by a group
									of passionate travelers who believed that
									everyone deserves to experience the world's
									most incredible destinations in luxury and
									comfort.
								</p>
								<p>
									What started as a small boutique travel
									agency has grown into a globally recognized
									luxury travel brand, trusted by discerning
									travelers who seek authentic, transformative
									experiences.
								</p>
								<p>
									We've carefully curated relationships with
									the world's finest hotels, local guides, and
									experience providers to ensure every detail
									of your journey exceeds expectations.
								</p>
								<p>
									Today, we're proud to have facilitated over
									10,000 extraordinary journeys across 150+
									destinations, earning recognition as one of
									the world's leading luxury travel
									specialists.
								</p>
							</div>
						</div>
						<div className="hidden lg:block relative">
							<img
								src="/images/beach.jpg"
								alt="Luxury travel experience"
								className="rounded-lg shadow-luxury w-full h-96 object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
						</div>
					</div>
				</div>
			</section>

			<section className="py-10">
				<div className="wrapper">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
						<div className="lg:block relative h-96 hidden rounded-lg overflow-hidden">
							<Image
								src="/images/costa-rica.jpg"
								alt="Our Mission"
								fill
								className="object-cover"
							/>
						</div>

						<div>
							<h2 className="text-5xl font-surfer font-bold mb-6">
								Our Mission
							</h2>

							<div className="space-y-4 text-muted-foreground leading-relaxed">
								<p>
									At Parenthesis, we believe that travel is
									more than just visiting new places—it's
									about creating transformative experiences
									that broaden perspectives, forge
									connections, and create lifelong memories.
								</p>
								<p>
									We curate exceptional journeys that combine
									luxury, adventure, and authentic cultural
									experiences, ensuring every trip is as
									unique as the traveler embarking on it.
								</p>
							</div>

							<div className="space-y-2 mt-4 text-sm sm:text-base text-muted-foreground">
								<div className="flex items-center">
									<div className="w-2 h-2 bg-secondary rounded-full mr-2" />
									<span>
										Personalized travel experiences tailored
										to your dreams
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-secondary rounded-full mr-2" />
									<span>
										Expert local guides and authentic
										cultural immersion
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-secondary rounded-full mr-2" />
									<span>
										Sustainable and responsible tourism
										practices
									</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-secondary rounded-full mr-2" />
									<span>Unmatched luxury and comfort</span>
								</div>
								<div className="flex items-center">
									<div className="w-2 h-2 bg-secondary rounded-full mr-2" />
									<span>Exceptional service and support</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-muted/30">
				<div className="wrapper">
					<div className="text-center mb-16">
						<h2 className="text-5xl font-surfer font-bold mb-4">
							What Drives Us
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
							Our core beliefs and values shape every experience
							we create
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{values.map((value, index) => (
							<Card
								key={index}
								className="card-luxury text-center animate-scale-in"
								style={{ animationDelay: `${index * 0.2}s` }}
							>
								<CardContent className="p-8">
									<div className="inline-flex items-center justify-center w-16 h-16 bg-[#CDC8BC] rounded-full mb-6  hover:animate-ping">
										<value.icon className="h-8 w-8 text-secondary" />
									</div>
									<h3 className="text-2xl font-bold mb-4 font-bruno">
										{value.title}
									</h3>
									<p className="text-muted-foreground leading-relaxed">
										{value.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section className="py-20 px-4 bg-[#CDC8BC]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-4xl md:text-5xl font-bold mb-4 font-surfer">
						Ready to Start Your Journey?
					</h2>
					<p className="text-xl text-foreground/80 mb-8">
						Let our expert team help you plan the adventure of a
						lifetime
					</p>
					<div className="flex flex-wrap gap-4 justify-center">
						<Button asChild className="w-fit">
							<Link href="/contact">
								<Users className="mr-1 h-5 w-5" />
								Contact Team
							</Link>
						</Button>
						<Button asChild variant="outline" className="w-fit">
							<Link href="/packages">
								<Compass className="mr-1 h-5 w-5" />
								Explore Packages
							</Link>
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
