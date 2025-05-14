import { nextui } from "@nextui-org/theme";
import type { Config } from "tailwindcss";
import Typography from "@tailwindcss/typography";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/@nextui-org/theme/dist/components/(button|navbar|ripple|spinner).js",
	],
	theme: {
		extend: {
			animation: {
				flareSpark: "flare-spark 2.5s ease forwards",
			},
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
				sidebar: {
					DEFAULT: "hsl(var(--sidebar-background))",
					foreground: "hsl(var(--sidebar-foreground))",
					primary: "hsl(var(--sidebar-primary))",
					"primary-foreground": "hsl(var(--sidebar-primary-foreground))",
					accent: "hsl(var(--sidebar-accent))",
					"accent-foreground": "hsl(var(--sidebar-accent-foreground))",
					border: "hsl(var(--sidebar-border))",
					ring: "hsl(var(--sidebar-ring))",
				},
			},
			keyframes: {
				"flare-spark": {
					"0%": { opacity: "0", transform: "scale(0.8)" },
					"77%": { opacity: "0", transform: "scale(0.8)" },
					"82%": { opacity: "1", transform: "scale(1.1)" },
					"88%": { opacity: "0.8", transform: "scale(1.1)" },
					"93%": { opacity: "1", transform: "scale(1)" },
					"100%": { opacity: "1", transform: "scale(1)" },
				},
			},
		},
	},
	plugins: [Typography, nextui()],
} satisfies Config;
