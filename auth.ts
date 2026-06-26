import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/db/prisma";
import bcrypt from "bcrypt";

export const { handlers, signIn, signOut, auth } = NextAuth({
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHub,
		Credentials({
			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				if (
					!credentials ||
					typeof credentials.email !== "string" ||
					typeof credentials.password !== "string"
				) {
					return null;
				}

				const { email, password } = credentials;

				const user = await prisma.user.findUnique({
					where: { email },
				});

				if (!user?.hashedPassword) return null;

				const isValid = await bcrypt.compare(
					password,
					user.hashedPassword,
				);

				if (!isValid) return null;

				return {
					id: user.id,
					name: user.name,
					email: user.email,
					image: user.image,
					role: user.role,
					onboardingCompleted: user.onboardingCompleted,
				};
			},
		}),
	],
	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				token.role = user.role;
				token.onboardingCompleted = user.onboardingCompleted;
			}
			return token;
		},

		async session({ session, token }) {
			session.user.id = token.id;
			session.user.role = token.role;
			session.user.onboardingCompleted = token.onboardingCompleted;
			return session;
		},
	},
});
