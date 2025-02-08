import type { Config } from "tailwindcss";

export default {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				midLg: "938px",
				"2xl": "1400px",
				"3xl": "1900px",
			},
		},
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
		},
	},
	plugins: [],
} satisfies Config;
