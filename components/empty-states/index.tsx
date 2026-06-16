import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface EmptyStateProps {
	icon: ReactNode;
	title: string;
	description: string;
	action?: {
		label: string;
		href: string;
	};
	secondaryAction?: {
		label: string;
		href: string;
	};
}

export function EmptyState({
	icon,
	title,
	description,
	action,
	secondaryAction,
}: EmptyStateProps) {
	return (
		<div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-12 text-center">
			<div className="mb-6 flex justify-center">
				<div className="text-secondary/30 dark:text-secondary/20">
					{icon}
				</div>
			</div>
			<h3 className="text-2xl md:text-3xl font-bruno font-bold text-gray-900 dark:text-gray-50 mb-3">
				{title}
			</h3>
			<p className="text-gray-600 dark:text-gray-400 max-w-md mb-8 text-base md:text-lg">
				{description}
			</p>
			<div className="flex flex-wrap gap-3 justify-center">
				{action && (
					<Button asChild>
						<Link href={action.href}>{action.label}</Link>
					</Button>
				)}
				{secondaryAction && (
					<Button asChild variant="outline" className="bg-border-primary hover:bg-border-primary/80">
						<Link href={secondaryAction.href}>
							{secondaryAction.label}
						</Link>
					</Button>
				)}
			</div>
		</div>
	);
}

import { Compass, MapPin, Heart, Plane, Calendar, BarChart3 } from "lucide-react";

export function NoTripsEmpty() {
	return (
		<EmptyState
			icon={<Calendar className="h-20 w-20" />}
			title="No Trips Yet"
			description="You haven't booked any trips yet. Explore our amazing destinations and start your adventure!"
			action={{ label: "Explore Destinations", href: "/destinations" }}
			secondaryAction={{ label: "Browse Packages", href: "/packages" }}
		/>
	);
}

export function NoDestinationsEmpty() {
	return (
		<EmptyState
			icon={<MapPin className="h-20 w-20" />}
			title="No Destinations Found"
			description="Try adjusting your search filters or explore our featured destinations below."
			action={{ label: "Clear Filters", href: "/destinations" }}
			secondaryAction={{ label: "View All", href: "/destinations" }}
		/>
	);
}

export function NoExperiencesEmpty() {
	return (
		<EmptyState
			icon={<Compass className="h-20 w-20" />}
			title="No Experiences Found"
			description="Check back soon for unique travel experiences. Browse other attractions in the meantime!"
			action={{ label: "Browse Destinations", href: "/destinations" }}
			secondaryAction={{ label: "View Packages", href: "/packages" }}
		/>
	);
}

export function NoWishlistEmpty() {
	return (
		<EmptyState
			icon={<Heart className="h-20 w-20" />}
			title="Your Wishlist is Empty"
			description="Start adding your favorite destinations and experiences to create your perfect trip!"
			action={{ label: "Explore Destinations", href: "/destinations" }}
			secondaryAction={{ label: "See Experiences", href: "/experiences" }}
		/>
	);
}

export function NoBookingsEmpty() {
	return (
		<EmptyState
			icon={<Plane className="h-20 w-20" />}
			title="No Bookings Yet"
			description="Start your journey by booking a destination or package that excites you!"
			action={{ label: "Browse Destinations", href: "/destinations" }}
			secondaryAction={{ label: "View Packages", href: "/packages" }}
		/>
	);
}

export function NoPackagesEmpty() {
	return (
		<EmptyState
			icon={<Plane className="h-20 w-20" />}
			title="No Packages Available"
			description="Our travel team is preparing amazing packages for you. Check back soon!"
			action={{ label: "Explore Destinations", href: "/destinations" }}
			secondaryAction={{ label: "Browse Experiences", href: "/experiences" }}
		/>
	);
}

export function NoReviewsEmpty() {
	return (
		<EmptyState
			icon={<BarChart3 className="h-20 w-20" />}
			title="No Reviews Yet"
			description="Be the first to share your travel experience with our community!"
			action={{ label: "Write a Review", href: "#" }}
		/>
	);
}
