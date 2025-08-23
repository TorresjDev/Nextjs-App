import folder_data from "../../public/folder_data.svg";
import sdlc from "../../public/sdlc.svg";

export const guideSidebarItems = [
	// {
	// 	title: "Database",
	// 	icon: "https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/db.svg",
	// 	submenu: [{ title: "ERD", url: "/guides/database/ERD" }],
	// },
	{
		title: "Version Control",
		url: "/guides/version-control",
		icon: folder_data,
		submenu: [
			{
				title: "1: Commands",
				url: "/guides/version-control/git-github/commands",
			},
			{
				title: "2: Rules Setup",
				url: "/guides/version-control/github/rules-setup",
			},
			// { title: "Migrate Repository", url: "/guides/github/migrate-repository" },
		],
	},
	{
		title: "Next.js",
		icon: "https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/next.svg",
		submenu: [{ title: "1: Components", url: "/guides/nextjs/component" }],
	},
	{
		title: "SDLC",
		url: "/guides/sdlc",
		icon: sdlc,
		submenu: [
			{
				title: "1: Overview",
				url: "/guides/sdlc/overview",
			},
			{
				title: "2: Phase i",
				url: "/guides/sdlc/phase-one",
			},
		],
	},
];

export const supportItems = [
	{
		title: "Donate",
		url: "/support/donations",
		icon: "💖",
	},
];
