import Navbar from "@/components/base/Navbar";
import Footer from "@/components/base/Footer";

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
