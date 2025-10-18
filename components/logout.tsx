"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
	return (
		<button
			className="bg-white text-black px-4 py-2 rounded-md shadow-md"
			onClick={() => signOut()}
		>
			Log Out
		</button>
	);
}
