import { Footer, Navbar } from "@/components/base";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="antialiased">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
