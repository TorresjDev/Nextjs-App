import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		domains: [
			"torresjdev.github.io",
			"fonts.googleapis.com",
			"avatars.githubusercontent.com",
			"avatars.githubusercontent.com",
			"github-readme-streak-stats.herokuapp.com",
			"github-readme-stats.vercel.app",
			"ghchart.rshah.org",
		],
	},
};

const withMDX = createMDX({
	extension: /\.(md|mdx)$/,
	options: {
		remarkPlugins: [remarkGfm],
	},
});

export default withMDX(nextConfig);
