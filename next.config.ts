import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	pageExtensions: ["js", "jsx", "ts", "tsx", "md"],

	// Skip API routes during static generation
	experimental: {
		optimizePackageImports: [
			"@nextui-org/button",
			"@nextui-org/navbar",
			"@radix-ui/react-tooltip",
			"framer-motion",
		],
	},

	// Enhanced image configuration
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

	// Security headers
	async headers() {
		return [
			{
				source: "/(.*)",
				headers: [
					{
						key: "X-Frame-Options",
						value: "DENY",
					},
					{
						key: "X-Content-Type-Options",
						value: "nosniff",
					},
					{
						key: "Referrer-Policy",
						value: "origin-when-cross-origin",
					},
				],
			},
		];
	},
};

export default nextConfig;
