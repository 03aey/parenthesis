export default function PackageHeader() {
	return (
		<section className="first-section wrapper flex flex-col items-start md:items-center text-amber-50 py-10 bg-secondary rounded-br-[100px] text-start md:text-center">
			<h1 className="text-[6vw] font-bold font-surfer animate-fade-up">
				Curated Travel Packages
			</h1>

			<p className="md:text-[1.5vw] text-sm mt-4 animate-fade-up">
				Carefully crafted itineraries that combine the best experiences,
				accommodations, <br className="hidden md:block" /> and
				activities for unforgettable journeys.
			</p>
		</section>
	);
}
