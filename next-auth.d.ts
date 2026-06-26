declare module "next-auth" {
	interface User extends DefaultUser {
		id: string;
		role: UserRole;
		onboardingCompleted: boolean;
	}

	interface Session {
		user: DefaultSession["user"] & {
			id: string;
			role: UserRole;
			onboardingCompleted: boolean;
		};
	}
}

declare module "next-auth/jwt" {
	interface JWT {
		id: string;
		role: UserRole;
		onboardingCompleted: boolean;
	}
}

export {};
