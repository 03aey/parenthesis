import { Card, CardContent } from "@/components/ui/card";
import { contactInfo } from "@/lib/mocData";

export default function ContactInfo() {
	return (
		<section className="py-16 bg-muted/30">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{contactInfo.map((info, index) => (
						<Card
							key={index}
							className="card-luxury text-center rounded-none animate-scale-in"
							style={{ animationDelay: `${index * 0.1}s` }}
						>
							<CardContent className="p-6">
								<div className="inline-flex items-center justify-center w-12 h-12 bg-secondary rounded-full mb-4">
									<info.icon className="h-6 w-6 text-white" />
								</div>
								<h3 className="text-lg font-semibold mb-3 font-surfer">
									{info.title}
								</h3>
								<div className="space-y-1">
									{info.details.map((detail, idx) => (
										<p
											key={idx}
											className="text-sm text-muted-foreground"
										>
											{detail}
										</p>
									))}
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
