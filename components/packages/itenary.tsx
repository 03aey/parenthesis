import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoIosCard } from "react-icons/io";
import Link from "next/link";
import { Package } from "@/lib/type";

export default function PackageItenary({ pkg }: { pkg: Package }) {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<div className="w-full flex gap-2 items-center underline font-surfer cursor-pointer">
					<span>View Detailed Itinerary</span>
					<ChevronDown />
				</div>
			</DialogTrigger>
			<DialogContent className="max-w-full max-h-[80vh] overflow-y-scroll">
				<DialogHeader>
					<DialogTitle className="text-2xl text-start">
						{pkg.title}
					</DialogTitle>
				</DialogHeader>

				<div className="">
					<Accordion type="single" collapsible className="w-full">
						{pkg.itinerary.map((day) => (
							<AccordionItem
								key={day.day}
								value={`day-${day.day}`}
							>
								<AccordionTrigger className="text-left">
									<div className="flex items-center">
										<div className="w-8 h-8 bg-secondary text-amber-50 rounded-full flex items-center justify-center mr-3 text-sm font-bold">
											{day.day}
										</div>
										<span className="font-semibold">
											{day.title}
										</span>
									</div>
								</AccordionTrigger>
								<AccordionContent>
									<div className="ml-11 space-y-2">
										{day.activities.map(
											(activity, index) => (
												<div
													key={index}
													className="flex items-center text-foreground/80"
												>
													<Clock className="h-4 w-4 mr-2 text-secondary" />
													{activity}
												</div>
											)
										)}
									</div>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>

					<div className="mt-6 p-2 bg-gray-50 rounded-lg">
						<div className="flex items-center justify-between">
							<div>
								<span className="text-sm text-gray-500 line-through">
									$ {pkg.originalPrice}
								</span>
								<span className="text-2xl font-bold text-green-600 ml-2">
									$ {pkg.price}
								</span>
								<span className="text-sm text-gray-600 ml-1">
									per person
								</span>
							</div>
							<Link href={`/booking?type=package&id=${pkg.id}`}>
								<Button size="lg">
									Book Now
									<IoIosCard />
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
}
