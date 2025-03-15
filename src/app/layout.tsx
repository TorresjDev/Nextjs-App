// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
	title: "Support My Journey",
	authors: [{ name: "Jesus Torres" }],
	description:
		"support my journey, donation page, software developer, contribute, tech projects, personal growth",
	icons: "https://torresjdev.github.io/assets-host/assets/icons/dev/dev-md.svg",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="gradient-background">
				<Navbar />
				<main className="max-w-7xl md:!min-h-[36rem] mx-auto py-6 px-3">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
