import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md"],
	images: {
		domains: [
			"torresjdev.github.io",
			"fonts.googleapis.com",
			"avatars.githubusercontent.com",
			"github-readme-streak-stats.herokuapp.com",
			"github-readme-stats.vercel.app",
			"ghchart.rshah.org",
		],
	},
};

export default nextConfig;
