import { LucideIcon } from "lucide-react";

export interface Destination {
	id: string;
	title: string;
	country: string;
	continent: string;
	type: string;
	rating: number;
	image: string;
	description: string;
	price: number;
	highlights: string[];
}

export interface Package {
	id: string;
	title: string;
	destination: string;
	duration: string;
	price: number;
	image: string;
	rating: number;
	originalPrice: number;
	highlights: string[];
	itinerary: {
		day: number;
		title: string;
		description: string;
		activities: string[];
	}[];
	included: string[];
}

export interface Experience {
	id: string;
	name: string;
	location: string;
	image: string;
	description: string;
	duration: string;
	destinations: string[];
}

export interface ExperienceCategory {
	id: string;
	title: string;
	icon: any;
	description: string;
	color: string;
	experiences: Experience[];
}

export interface Faqs {
	id: string;
	question: string;
	answer: string;
}

export enum TripType {
	Destination = "destination",
	Package = "package",
}

export enum TravelerType {
	Adult = "adult",
	Child = "child",
	Infant = "infant",
}

export interface BookingData {
	tripType: TripType | "";
	selectedTrip: Destination | Package | null;
	travelDates: {
		departure: string;
		return: string;
	};
	travelers: {
		adults: number;
		children: number;
		infants: number;
	};

	travelers_info: Array<{
		type: TravelerType;
		firstName: string;
		lastName: string;
		dateOfBirth: string;
		passport: string;
		nationality: string;
	}>;
	emergencyContact: {
		name: string;
		relationship: string;
		phone: string;
		email: string;
	};

	roomPreference: string;
	dietaryRequirements: string[];
	specialRequests: string;
	addOns: string[];
	interests: string[];

	paymentMethod: string;
	billingAddress: {
		firstName: string;
		lastName: string;
		address: string;
		city: string;
		state: string;
		zipCode: string;
		country: string;
	};
	cardDetails: {
		number: string;
		expiry: string;
		cvv: string;
		name: string;
	};
}

export interface Step {
	number: number;
	title: string;
	icon: LucideIcon;
}

export interface ContactInfo {
	icon: LucideIcon;
	title: string;
	details: string[];
}

export interface AddOn {
	id: string;
	name: string;
	price: number;
	description: string;
}

export interface Country {
	id: number;
	code: string;
	name: string;
}

export interface Value {
	icon: LucideIcon;
	title: string;
	description: string;
}
