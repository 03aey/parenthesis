"use server";

import bcrypt from "bcryptjs";
import prisma from "@/db/prisma";
import { Prisma } from "@/lib/generated/prisma/client";
import { signupSchema } from "@/lib/schema";

export async function registerUser(
	email: string,
	name: string,
	password: string,
): Promise<{ success: boolean; message?: string }> {
	const result = signupSchema.safeParse({
		name,
		email,
		password,
	});

	if (!result.success) {
		return {
			success: false,
			message: result.error.issues[0].message,
		};
	}

	const hashedPassword = await bcrypt.hash(password, 10);

	try {
		await prisma.user.create({
			data: {
				email,
				name,
				hashedPassword,
			},
		});

		return {
			success: true,
		};
	} catch (error) {
		if (
			error instanceof Prisma.PrismaClientKnownRequestError &&
			error.code === "P2002"
		) {
			return {
				success: false,
				message: "Email already registered.",
			};
		}

		throw error;
	}
}
