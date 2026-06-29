import { auth } from "@/auth";
import { NextResponse } from "next/server";

const authRoutes = ["/sign-in", "/get-started"];

const protectedRoutes = ["/profile", "/bookings", "/wishlist", "/settings"];

export default auth((req) => {
	const session = req.auth;

	const pathname = req.nextUrl.pathname;

	const isLoggedIn = !!session;

	const isAuthRoute = authRoutes.includes(pathname);

	const isProtectedRoute = protectedRoutes.some((route) =>
		pathname.startsWith(route),
	);

	const callbackUrl = pathname + req.nextUrl.search;

	/**
	 * Guest-only routes
	 */
	if (isAuthRoute) {
		if (isLoggedIn) {
			return NextResponse.redirect(new URL("/", req.url));
		}

		return NextResponse.next();
	}

	/**
	 * Protected routes
	 */
	if (isProtectedRoute && !isLoggedIn) {
		return NextResponse.redirect(
			new URL(
				`/sign-in?callbackUrl=${encodeURIComponent(callbackUrl)}`,
				req.url,
			),
		);
	}

	/**
	 * Everything else is public
	 */
	return NextResponse.next();
});

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
