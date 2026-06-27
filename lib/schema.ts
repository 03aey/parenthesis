import { z } from "zod";

export enum TripType {
	DESTINATION = "destination",
	PACKAGE = "package",
}

export const signupSchema = z.object({
	name: z
		.string()
		.trim()
		.min(2, "Name must be at least 2 characters")
		.max(50, "Name must be less than 50 characters"),
	email: z.email().trim().toLowerCase(),
	password: z
		.string()
		.min(8, "Password must be at least 8 characters")
		.max(100, "Password must be less than 100 characters"),
});

export const bookingSchema = z.object({
	travelers_info: z.array(
		z.object({
			type: z.enum(["adult", "child", "infant"]),
			firstName: z.string("First name is required"),
			lastName: z.string("Last name is required"),
			dateOfBirth: z.string("Date of birth is required"),
			passport: z.string("Passport number is required"),
			nationality: z.string("Nationality is required"),
		}),
	),
	emergencyContact: z.object({
		name: z.string("Name is required"),
		relationship: z.string("Relationship is required"),
		phone: z.string("Phone number is required"),
		email: z.string("Email is required"),
	}),
	roomPreference: z.string("Room preference is required"),
	dietaryRequirements: z.array(z.string()),
	specialRequests: z.string("Special requests are required"),
	addOns: z.array(z.string()),
	interests: z.array(z.string()),
	paymentMethod: z.string("Payment method is required"),
	billingAddress: z.object({
		firstName: z.string("First name is required"),
		lastName: z.string("Last name is required"),
		address: z.string("Address is required"),
		city: z.string("City is required"),
		state: z.string("State is required"),
		zipCode: z.string("Zip code is required"),
		country: z.string("Country is required"),
	}),
	cardDetails: z.object({
		number: z.string("Card number is required"),
		expiry: z.string("Card expiry is required"),
		cvv: z.string("Card CVV is required"),
		name: z.string("Cardholder name is required"),
	}),
});

export type BookingFormData = z.infer<typeof bookingSchema>;
