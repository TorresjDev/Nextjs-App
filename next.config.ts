import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
	/* config options here */
	pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
	images: {
		domains: ["torresjdev.github.io"],
	},
};

const withMDX = createMDX({
	extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
