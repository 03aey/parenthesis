import { experienceCategories } from "@/lib/data";
import ExperiencesCard from "./card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ExperienceCategory() {
	return (
		<section className="py-12 wrapper">
			<div className="max-w-[1350px] mx-auto space-y-16">
				{experienceCategories.map((category) => (
					<div key={category.id}>
						<div className="flex items-center mb-8 animate-slide-in">
							<div
								className={`w-16 h-16 ${category.color} flex items-center justify-center mr-6 `}
							>
								<category.icon className="h-8 w-8 text-white" />
							</div>
							<div>
								<h2 className="text-2xl md:text-4xl font-surfer font-bold mb-2">
									{category.title}
								</h2>
								<p className="text-gray-600 text-sm md:text-lg">
									{category.description}
								</p>
							</div>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{category.experiences.map((experience) => (
								<ExperiencesCard
									key={experience.id}
									experience={experience}
								/>
							))}
						</div>

						<Link
							href={`/experiences/${category.id}`}
							className=" mt-8 border-2 hover:bg-border-primary/10 cursor-pointer border-border-primary px-4 text-xs sm:text-sm md:text-base py-2 rounded-full mx-auto flex items-center gap-4 w-fit"
						>
							{category.title} experiences
							<ArrowRight size={16} />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
}
