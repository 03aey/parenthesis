import { ExperienceCategory, ExperienceHeader } from "@/components/experiences";

export default function Experiences() {
	return (
		<div className="min-h-screen pt-20">
			<ExperienceHeader />
			<ExperienceCategory />
		</div>
	);
}
