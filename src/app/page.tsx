// src/app/page.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { landingCards } from "../lib/landing-cards";

export default function LandingPage() {
	return (
		<main className="space-y-24 px-4 md:px-10 py-16 text-white max-w-7xl mx-auto overflow-y-scroll scroll-m-0">
			{/* Hero Section */}
			<section className="text-center">
				<h1 className="text-5xl font-extrabold">
					Welcome to my Dev Studio
					<div className="animate-flareSpark contents">
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/gif/anime/fire-burn-fabio-nikolaus.gif"
							height={45}
							width={45}
							alt="fire giphy"
							className="inline-block ml-2 pb-5"
							unoptimized={true}
						/>
					</div>
				</h1>

				<p className="mt-4 text-xl text-gray-300">
					Explore hands-on dev projects, AI tools, walkthroughs, and more —
					built with cutting-edge tech.
				</p>
				<div className="mt-6 flex justify-center gap-4 flex-wrap">
					<Link
						href="/about"
						className="px-6 py-3 bg-yellow-500 text-black rounded shadow hover:bg-yellow-400 font-semibold"
					>
						About Me
					</Link>
					<Link
						href="/posts"
						className="px-6 py-3 bg-white text-black rounded shadow hover:bg-gray-300 font-semibold"
					>
						Live Post Feed
					</Link>
				</div>
			</section>

			{/* Section Previews */}
			<section>
				<h2 className="text-3xl font-bold mb-10 text-center">
					Explore the Platform
				</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{landingCards.map((card) => (
						<LandingCard key={card.title} {...card} />
					))}
				</div>
			</section>

			{/* Call to Action */}
			<section className="text-center">
				<h3 className="text-2xl font-semibold">
					Want to collaborate or support?
				</h3>
				<p className="text-gray-400 mt-2">
					Contact me or donate to support ongoing development.
				</p>
				<Link
					href="/support"
					className="mt-4 inline-block px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-500"
				>
					Support the Journey
				</Link>
			</section>
		</main>
	);
}

function LandingCard({
	title,
	desc,
	href,
}: {
	title: string;
	desc: string;
	href: string;
}) {
	return (
		<Link
			href={href}
			className="block p-6 bg-zinc-900 rounded-lg shadow hover:bg-zinc-800 transition"
		>
			<h4 className="text-xl font-bold text-yellow-400 mb-2">{title}</h4>
			<p className="text-gray-300">{desc}</p>
		</Link>
	);
}
