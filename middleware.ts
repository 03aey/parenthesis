import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	function middleware(req) {
		const token = req.nextauth.token;
		const pathname = req.nextUrl.pathname;

		if (token) {
			// console.log(token);
			const isProfileIncomplete = !token.bio;

			const isProtectedPage =
				pathname.startsWith("/profile") ||
				pathname.startsWith("/booking");

			if (isProtectedPage && isProfileIncomplete) {
				return NextResponse.redirect(new URL("/onboarding", req.url));
			}
		}

		return NextResponse.next();
	},
	{
		callbacks: {
			authorized: ({ token, req }) => {
				const pathname = req.nextUrl.pathname;

				if (pathname.startsWith("/admin")) {
					return (
						token?.role === "ADMIN" || token?.role === "SUPER_ADMIN"
					);
				}

				if (
					pathname.startsWith("/profile") ||
					pathname.startsWith("/booking") ||
					pathname.startsWith("/onboarding")
				) {
					return !!token;
				}

				return true;
			},
		},
	}
);

export const config = {
	matcher: [
		"/admin/:path*",
		"/profile/:path*",
		"/booking/:path*",
		"/onboarding",
		"/signin",
		"/get-started",
	],
};
