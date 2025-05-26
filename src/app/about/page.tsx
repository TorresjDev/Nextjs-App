/* eslint-disable @next/next/no-img-element */
import React from "react";
import { getGitHubProfile } from "../services/github";
import Image from "next/image";

export default async function AboutPage() {
	const profile = await getGitHubProfile();

	return (
		<section
			id="about"
			className="w-full mx-auto max-h-[110vh] h-[full] overflow-y-scroll scroll-m-0"
		>
			<div className="flex flex-col md:flex-row justify-self-start md:justify-self-center gap-6 my-3">
				<Image
					src={profile.avatar_url}
					alt="GitHub Avatar"
					className="rounded-full border shadow self-center md:self-start"
					width={65}
					height={65}
				></Image>
				<div className="text-center md:text-left">
					<h1 className="text-3xl md:text-4xl font-semibold text-[#DAA520]">
						{profile.name}
					</h1>
					<p className="text-muted text-sm md:text-lg my-1 md:my-2">
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
								className="hover:animate-bounce"
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
								className="hover:animate-bounce"
								width={24}
								height={24}
							></Image>
						</a>
					</section>
				</div>
			</div>
			<p className="text-muted text-sm md:text-xl my-1 md:my-2 text-center">
				💻 I&#39;m software engineer with hands-on experience in full-stack
				development, system design, and database work. My background in Computer
				Information Systems gives me the foundation to understand both the
				technical and business side of software projects.
			</p>
			<section className="mx-auto max-w-[80vw]">
				<div className="block justify-items-center my-1 w-full mx-auto gap-3">
					{/* <a href="https://github.com/anuraghazra/github-readme-stats"> */}
					<img
						src="https://github-readme-stats.vercel.app/api/top-langs/?username=TorresjDev&theme=tokyonight&layout=compact&hide=jupyter+notebook"
						alt="Top Languages"
						className="m-1 h-[25vh] w-[60vw] lg:w-[40vw] rounded-lg shadow"
					/>
					{/* </a> */}
					<img
						src="https://github-readme-stats.vercel.app/api?username=TorresjDev&show_icons=true&theme=tokyonight&count_private=true&hide=contribs"
						alt="GitHub Stats"
						className="m-1 h-[17vh] lg:h-[25vh] w-[60vw] rounded-lg shadow"
					/>

					<img
						alt="Top Languages"
						src="https://github-readme-stats.vercel.app/api/wakatime?username=@@Jtorres&layout=compact&theme=tokyonight&hide=text,other,binary,tsconfig,markdown,xml,scss,git,git+config,json,YAML,image+(svg),mdx,prisma,c"
						className="m-1 h-[17vh] lg:h-[27vh] w-[63vw] rounded-lg shadow"
					/>
				</div>
				<div
					id="github-contributions"
					className=" mt-2 md:mt-4 justify-items-center my-1 w-full mx-auto"
				>
					<h2 className="font-bold text-lg">Github Contributions</h2>
					<img
						src="https://ghchart.rshah.org/TorresjDev"
						alt="GitHub Contributions"
						className="w-full max-w-[75vw] xl:max-w-[60vw] rounded-lg shadow p-3 text-bold"
					/>
				</div>
			</section>
		</section>
	);
}
