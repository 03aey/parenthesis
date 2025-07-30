import { faqs } from "@/lib/mocData";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faqs() {
	return (
		<section className="py-20 px-4">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl font-surfer font-semibold mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-gray-600">
						Quick answers to common questions about planning your
						trip with Parenthesis
					</p>
				</div>

				<div className="space-y-6">
					<Accordion type="single" collapsible className="w-full">
						{faqs.map((faq) => (
							<AccordionItem key={faq.id} value={faq.id}>
								<AccordionTrigger className="text-left">
									<h2 className="text-lg">{faq.question}</h2>
								</AccordionTrigger>
								<AccordionContent>
									<p className="text-gray-600 text-base">
										{faq.answer}
									</p>
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
