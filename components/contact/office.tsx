import { MapPin } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Office() {
	return (
		<section className="py-16 px-4 bg-[#CDC8BC]">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-surfer font-semibold mb-4">
						Visit Our Office
					</h2>
					<p className="text-gray-600">
						Located in the heart of New York's travel district, our
						office is always open for consultations
					</p>
				</div>

				<div className="relative h-96 bg-gray-200 rounded-lg overflow-hidden">
					<Image
						src="/office-location.webp"
						alt="Office Location Map"
						fill
						className="object-cover"
					/>
					<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
						<div className="bg-white p-6 rounded-lg shadow-lg text-center">
							<MapPin className="h-8 w-8 text-secondary mx-auto mb-2" />
							<h3 className="font-surfer font-bold text-lg">
								Parenthesis
							</h3>
							<p className="text-gray-600">
								123 Travel Street, New York
							</p>
							<Button className="mt-4 capitalize bg-secondary hover:bg-secondary/90 text-white border-none duration-300">
								Get Directions
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
