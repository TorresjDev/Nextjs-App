// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import Image from "next/image";

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
			<body className="gradient-background min-h-screen relative overflow-hidden">
				<header className="bg-maroon/80 backdrop-blur-sm border-b border-[#DAA520]/20 shadow-lg">
					<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex items-center justify-between h-16">
							<div className="flex-shrink-0">
								<h1 className="text-[#DAA520] text-2xl font-bold tracking-tight">
									Support My Journey 💻
								</h1>
							</div>
							<div className="hidden md:block">
								<p className="flex items-center gap-x-2 text-[#C0C0C0] hover:text-[#DAA520] ">
									Fuel the Passion
									<Image
										src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXk2aGUzYzhyNHRjYXJvaXVpdHprbHZ2aDBtM3p6YTV2ODk1MG9mNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ewh4ipgPw1bBVj4HI5/giphy.gif"
										height={21}
										width={21}
										alt="fire giphy"
										className="pb-2"
									/>
								</p>
							</div>
						</div>
					</nav>
				</header>

				<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
					{children}
				</main>
				<Footer />
			</body>
		</html>
	);
}
