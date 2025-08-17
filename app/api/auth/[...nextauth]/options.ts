import type { AuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/db/prisma";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import bcrypt from "bcryptjs";

export const authOptions: AuthOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GitHubProvider({
			clientId: process.env.GITHUB_CLIENT_ID as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET_KEY as string,
		}),

		CredentialsProvider({
			name: "credentials",

			credentials: {
				email: { label: "Email", type: "email" },
				password: { label: "Password", type: "password" },
			},

			async authorize(credentials) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};
				if (!email || !password) return null;

				const user = await prisma.user.findUnique({
					where: { email },
				});

				if (!user?.hashedPassword) return null;

				const isValid = await bcrypt.compare(
					password,
					user.hashedPassword ?? ""
				);

				if (!isValid) return null;

				return user;
			},
		}),
	],

	session: {
		strategy: "jwt",
	},

	callbacks: {
		async session({ session, token }) {
			if (token) {
				session.user = {
					id: token.id as string,
					name: token.name as string,
					role: token.role as string,
					bio: token.bio as string,
				};
			}
			return session;
		},

		async jwt({ token, user }) {
			if (user) {
				token = {
					...token,
					id: user.id,
					name: user.name,
					role: user.role,
					bio: user.bio,
				};
			}
			return token;
		},
	},

	pages: {
		signIn: "/signin",
		error: "/signin",
	},
};
