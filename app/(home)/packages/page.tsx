import { PackageHeader, PackageList } from "@/components/packages";

export default function Packages() {
	return (
		<div className="min-h-screen pt-20">
			<PackageHeader />
			<PackageList />
		</div>
	);
}
