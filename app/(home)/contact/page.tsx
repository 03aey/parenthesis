import { ContactForm, ContactInfo, Faqs, Office } from "@/components/contact";

export default function Contact() {
	return (
		<div className="min-h-screen pt-20">
			<section className="first-section wrapper flex flex-col items-start md:items-center text-amber-50 py-10 bg-secondary rounded-br-[100px] text-start md:text-center">
				<h1 className="text-4xl md:text-[6vw] font-bold font-surfer animate-fade-up">
					Get in Touch
				</h1>

				<p className="md:text-[1.5vw] text-sm mt-4 animate-fade-up">
					Ready to plan your next adventure? Our travel experts are
					<br className="hidden md:block" />
					here to help make your dreams a reality
				</p>
			</section>

			<ContactInfo />
			<ContactForm />
			<Office />
			<Faqs />
		</div>
	);
}
