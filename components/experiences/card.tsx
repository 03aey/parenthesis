import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Compass } from "lucide-react";
import { Experience } from "@/lib/type";

export default function ExperiencesCard({
	experience,
}: {
	experience: Experience;
}) {
	return (
		<Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-tr-none rounded-br-3xl animate-scale-in">
			<div className="relative h-48 overflow-hidden">
				<img
					src={experience.image}
					alt={experience.name}
					className="object-cover object-bottom group-hover:scale-110 transition-transform duration-300"
				/>

				<Badge className="absolute font-surfer bottom-4 left-4 bg-white/90 text-black">
					{experience.duration}
				</Badge>
			</div>
			<CardContent className="p-4">
				<h3 className="text-xl font-bruno font-bold mb-2">
					{experience.name}
				</h3>
				<h5 className="text-base text-foreground/85 mb-2">
					{experience.description}
				</h5>
				<p className="text-foreground/80 mb-3 flex items-center">
					<Compass className="h-4 w-4 mr-1" />
					{experience.location}
				</p>

				<div className="mb-1">
					<h4 className="font-semibold mb-3 text-base font-surfer">
						Popular Destinations
					</h4>
					<div className="flex flex-wrap gap-2">
						{experience.destinations.map((destination, idx) => (
							<Badge
								key={idx}
								variant="outline"
								className="text-xs"
							>
								{destination}
							</Badge>
						))}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
