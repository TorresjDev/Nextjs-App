/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getGitHubProfile } from "../services/github";
import Image from "next/image";

export default async function AboutPage() {
	const profile = await getGitHubProfile();

	console.log("GitHub Profile Data:", profile);

	return (
		<section
			id="about"
			className="w-full mx-auto max-h-[110vh] h-[full] overflow-hidden"
		>
			<div className="flex flex-col md:flex-row items-start md:items-center gap-6 my-3">
				<Image
					src={profile.avatar_url}
					alt="GitHub Avatar"
					className="rounded-full border shadow self-center md:self-start"
					width={65}
					height={65}
				></Image>
				<div className="text-center md:text-left">
					<h1 className="text-4xl md:text-5xl font-semibold text-[#DAA520]">
						{profile.name}
					</h1>
					<p className="text-muted text-sm md:text-xl my-1 md:my-2">
						{profile.bio}
					</p>
					<section
						id="social-links"
						className="flex gap-4 mx-3 my-1 justify-center md:justify-start md:mx-4"
					>
						<a
							href={profile.html_url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/github.svg"
								alt="github-image"
								className="hover:w-[26px]"
								width={24}
								height={24}
							></Image>
						</a>
						<a
							href="https://linkedin.com/in/torresjdev"
							target="_blank"
							aria-label="LinkedIn"
						>
							<Image
								src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/linkedIn.svg"
								alt="github-image"
								className="hover:w-[26px]"
								width={24}
								height={24}
							></Image>
						</a>
					</section>
				</div>
			</div>
			<p className="text-muted text-sm md:text-xl my-1 md:my-2 text-center">
				💻 I’m a software engineer with hands-on experience in full-stack
				development, system design, and database work. My background in Computer
				Information Systems gives me the foundation to understand both the
				technical and business side of software projects.
			</p>
			<section className="place-items-center gap-8">
				{/* <a
					href="https://gh-stats-gen.vercel.app/"
					className="w-full max-w-2xl "
				>
					<img
						src="https://github-readme-streak-stats.herokuapp.com/?user=TorresjDev&theme=tokyonight&hide_border=true&ring=820000"
						alt="GitHub Streak"
						className="w-full rounded-lg shadow"
					/>
				</a> */}
				<div className="flex gap-2 my-1">
					<img
						src="https://github-readme-stats.vercel.app/api?username=TorresjDev&show_icons=true&theme=tokyonight&count_private=true&hide_border=true&hide=contribs"
						alt="GitHub Stats"
						className="w-full max-w-2xl rounded-lg shadow"
					/>

					<img
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=TorresjDev&theme=tokyonight&layout=compact&hide_border=true"
						alt="Top Languages"
						className="w-full max-w-2xl rounded-lg shadow"
					/>
				</div>

				{/* <img
					src="https://github-readme-stats.vercel.app/api/wakatime?username=@@Jtorres&layout=compact&theme=tokyonight&hide_border=true"
					alt="WakaTime Stats"
					className="w-full max-w-2xl rounded-lg shadow"
				/> */}

				<img
					src="https://ghchart.rshah.org/TorresjDev"
					alt="GitHub Contributions"
					className="w-full max-w-4xl rounded-lg shadow"
				/>
			</section>
		</section>
	);
}
