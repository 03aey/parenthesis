import { packages } from "@/lib/data";
import PackageCard from "./card";

export default function PackageList() {
	return (
		<section className="py-16">
			<div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="space-y-12">
					{packages.map((pkg, index) => (
						<PackageCard key={pkg.id} index={index} pkg={pkg} />
					))}
				</div>
			</div>
		</section>
	);
}
