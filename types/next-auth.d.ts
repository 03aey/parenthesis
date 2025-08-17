import NextAuth from "next-auth";
import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			name: string;
			role: string;
			bio: string | null;
		} & DefaultSession["user"];
	}

	interface User extends DefaultUser {
		id: string;
		name: string;
		role: string;
		bio: string | null;
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		name: string;
		role: string;
		bio: string | null;
	}
}

export {};
