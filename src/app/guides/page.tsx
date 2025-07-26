import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

interface GuideCategory {
	name: string;
	path: string;
	description: string;
	icon: string;
	guides: string[];
}

async function getGuideCategories(): Promise<GuideCategory[]> {
	const guidesPath = path.join(process.cwd(), "src", "app", "guides");

	const categories: GuideCategory[] = [
		{
			name: "Version Control",
			path: "version-control",
			description:
				"Learn Git, GitHub workflows, and version control best practices",
			icon: "🔄",
			guides: [],
		},
		{
			name: "Next.js",
			path: "nextjs",
			description:
				"Master Next.js framework, components, and modern React development",
			icon: "⚡",
			guides: [],
		},
		{
			name: "SDLC",
			path: "sdlc",
			description:
				"Software Development Life Cycle methodologies and practices",
			icon: "🔄",
			guides: [],
		},
		{
			name: "Database",
			path: "database",
			description: "Database design, ERD modeling, and data management",
			icon: "🗄️",
			guides: [],
		},
	];

	// Get available guides for each category
	for (const category of categories) {
		try {
			const categoryPath = path.join(guidesPath, category.path);
			const exists = await fs
				.access(categoryPath)
				.then(() => true)
				.catch(() => false);

			if (exists) {
				const subDirs = await fs.readdir(categoryPath, { withFileTypes: true });
				category.guides = subDirs
					.filter((dirent) => dirent.isDirectory())
					.map((dirent) => dirent.name);
			}
		} catch (error) {
			console.error(`Error reading category ${category.path}:`, error);
		}
	}

	return categories;
}

export default async function GuidesLandingPage() {
	const categories = await getGuideCategories();

	return (
		<div className="max-w-6xl mx-auto p-6">
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">
					🚀 Walkthrough Guides
				</h1>
				<p className="text-xl text-gray-600 max-w-2xl mx-auto">
					Comprehensive guides covering modern web development, version control,
					database design, and software development best practices.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
				{categories.map((category) => (
					<div
						key={category.path}
						className="bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
					>
						<div className="p-6">
							<div className="flex items-center mb-4">
								<span className="text-3xl mr-3">{category.icon}</span>
								<h2 className="text-2xl font-semibold text-gray-900">
									{category.name}
								</h2>
							</div>

							<p className="text-gray-600 mb-6">{category.description}</p>

							{category.guides.length > 0 && (
								<div className="mb-6">
									<h3 className="text-sm font-medium text-gray-700 mb-3">
										Available Guides:
									</h3>
									<div className="flex flex-wrap gap-2">
										{category.guides.map((guide) => (
											<Link
												key={guide}
												href={`/guides/${category.path}/${guide}`}
												className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-200"
											>
												{guide
													.replace(/-/g, " ")
													.replace(/\b\w/g, (l) => l.toUpperCase())}
											</Link>
										))}
									</div>
								</div>
							)}

							<Link
								href={`/guides/${category.path}`}
								className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium"
							>
								Explore {category.name}
								<svg
									className="ml-2 h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</Link>
						</div>
					</div>
				))}
			</div>

			<div className="bg-gray-50 rounded-lg p-8 text-center">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					🎯 What You&apos;ll Learn
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">
							📚 Comprehensive Coverage
						</h3>
						<p className="text-gray-600 text-sm">
							From basic concepts to advanced techniques, each guide provides
							step-by-step instructions.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">
							💡 Practical Examples
						</h3>
						<p className="text-gray-600 text-sm">
							Real-world examples and code snippets you can use in your projects
							immediately.
						</p>
					</div>
					<div>
						<h3 className="font-semibold text-gray-900 mb-2">
							🔄 Regular Updates
						</h3>
						<p className="text-gray-600 text-sm">
							Guides are regularly updated to reflect the latest best practices
							and technologies.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
