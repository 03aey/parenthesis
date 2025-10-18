"use server";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth";
import { revalidateTag } from "next/cache";
import prisma from "@/db/prisma";
import { ONBOARDING_FIELDS } from "@/lib/data";

export async function getMissingOnboardingFields() {
	const session = await getServerSession(authOptions);

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const user = await prisma.user.findUnique({
		where: { id: session.user.id },
		select: {
			phone: true,
			location: true,
			bio: true,
			travelStyle: true,
			budget: true,
			groupSize: true,
			accommodation: true,
			dietaryRequirements: true,
			interests: true,
		},
	});

	if (!user) {
		throw new Error("User not found");
	}

	const missingFields = ONBOARDING_FIELDS.filter((field) => {
		const value = user[field.key as keyof typeof user];
		if (field.required) {
			if (Array.isArray(value)) {
				return value.length === 0;
			}
			if (!value) {
				return true;
			}
			if (typeof value === "string") {
				return value.trim() === "";
			}

			return false;
		}

		return false;
	});

	return {
		missingFields,
		allFields: ONBOARDING_FIELDS,
		currentData: user,
	};
}

export async function completeOnboarding(data: Record<string, any>) {
	const session = await getServerSession(authOptions);

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	const cleanedData: any = {};

	for (const [key, value] of Object.entries(data)) {
		const field = ONBOARDING_FIELDS.find((f) => f.key === key);
		if (!field) continue;

		if (field.type === "multiselect") {
			cleanedData[key] = Array.isArray(value) ? value : [];
		} else if (typeof value === "string") {
			cleanedData[key] = value.trim();
		} else {
			cleanedData[key] = value;
		}
	}

	const updatedUser = await prisma.user.update({
		where: { id: session.user.id },
		data: cleanedData,
	});

	revalidateTag("current-user");
	revalidateTag("user-profile");

	return updatedUser;
}

export async function skipOnboarding() {
	const session = await getServerSession(authOptions);

	if (!session?.user?.id) {
		throw new Error("Unauthorized");
	}

	await new Promise((resolve) => setTimeout(resolve, 1000));

	await prisma.user.updateMany({
		where: { id: session.user.id },
		data: {},
	});

	revalidateTag("current-user");
	revalidateTag("user-profile");
}
