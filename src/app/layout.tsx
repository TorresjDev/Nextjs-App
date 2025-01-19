import type { Metadata } from "next";
import "./globals.css";

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
			<body>
				<main className="container mx-auto p-4">{children}</main>
			</body>
		</html>
	);
}
