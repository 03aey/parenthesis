"use server";

import bcrypt from "bcryptjs";
import prisma from "@/db/prisma";

export async function registerUser(
	email: string,
	name: string,
	password: string
): Promise<boolean> {
	const hashedPassword = await bcrypt.hash(password, 10);

	const user = await prisma.user.create({
		data: {
			email,
			name,
			hashedPassword,
			role: "USER",
		},
	});

	return user === null ? false : true;
}
