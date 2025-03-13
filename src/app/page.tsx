"use client";
import DonationJar from "./components/DonationJar";
import Image from "next/image";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { useState, useEffect } from "react";

export default function Home() {
	const words = `Empower My Coding Journey `;
	const [showImage, setShowImage] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShowImage(true);
		}, 3100);

		return () => clearTimeout(timer);
	}, []);

	return (
		<div className="p-3 items-center justify-center text-center">
			<div className="flex p-3 mb-2 mx-auto justify-center ">
				<TextGenerateEffect
					filter={true}
					duration={3}
					words={words}
					className="text-center text-[40px] md:text-5xl ld:text-6xl text-[#DAA520]/70"
				/>
				<div
					className={`transition-opacity duration-500 ease-in ${
						showImage ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/gif/anime/fire-burn-fabio-nikolaus.gif"
						height={45}
						width={45}
						alt="fire giphy"
						className="relative bottom-1"
					/>
				</div>
			</div>
			<p className="text-[#C0C0C0]/80 mb-3">
				Your support directly fuels my open projects and allows me to continue
				innovating new software. 💻
			</p>
			<DonationJar />
		</div>
	);
}
