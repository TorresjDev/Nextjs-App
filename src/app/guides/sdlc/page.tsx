import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

interface Guide {
	name: string;
	path: string;
	description: string;
}

async function getSDLCGuides(): Promise<Guide[]> {
	const sdlcPath = path.join(process.cwd(), "src", "app", "guides", "sdlc");

	const guides: Guide[] = [];

	try {
		const subDirs = await fs.readdir(sdlcPath, { withFileTypes: true });

		for (const dir of subDirs) {
			if (dir.isDirectory() && dir.name !== "page.tsx") {
				const walkthrough = path.join(sdlcPath, dir.name, "walkthrough.md");
				const exists = await fs
					.access(walkthrough)
					.then(() => true)
					.catch(() => false);

				if (exists) {
					guides.push({
						name: dir.name.replace(/-/g, " "),
						path: `sdlc/${dir.name}`,
						description: getGuideDescription(dir.name),
					});
				}
			}
		}
	} catch (error) {
		console.error("Error reading SDLC guides:", error);
	}

	return guides;
}

function getGuideDescription(guide: string): string {
	const descriptions: Record<string, string> = {
		overview:
			"Comprehensive overview of Software Development Life Cycle methodologies",
		"phase-one": "Requirements gathering and project planning fundamentals",
		"phase-two": "System design and architecture planning",
		"phase-three": "Implementation and development best practices",
		"phase-four": "Testing strategies and quality assurance",
		"phase-five": "Deployment and release management",
		"phase-six": "Maintenance and ongoing support strategies",
		agile: "Agile development methodologies and practices",
		waterfall: "Traditional waterfall project management approach",
		devops: "DevOps integration and continuous delivery practices",
	};

	return (
		descriptions[guide] || `Learn about ${guide.replace(/-/g, " ")} in SDLC`
	);
}

export default async function SDLCPage() {
	const guides = await getSDLCGuides();

	return (
		<div className="max-w-4xl mx-auto p-6">
			{/* Breadcrumb */}
			<nav className="flex mb-8" aria-label="Breadcrumb">
				<ol className="inline-flex items-center space-x-1 md:space-x-3">
					<li className="inline-flex items-center">
						<Link
							href="/guides"
							className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
						>
							🏠 Guides
						</Link>
					</li>
					<li aria-current="page">
						<div className="flex items-center">
							<svg
								className="mx-1 w-3 h-3 text-gray-400"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									fillRule="evenodd"
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
								></path>
							</svg>
							<span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
								SDLC
							</span>
						</div>
					</li>
				</ol>
			</nav>

			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">
					🔄 SDLC Guides
				</h1>
				<p className="text-xl text-gray-600 max-w-2xl mx-auto">
					Master Software Development Life Cycle methodologies, project
					management, and best practices for delivering high-quality software
					solutions.
				</p>
			</div>

			{/* Quick Stats */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
				<div className="bg-blue-50 rounded-lg p-6 text-center">
					<div className="text-2xl font-bold text-blue-600 mb-2">
						{guides.length}
					</div>
					<div className="text-sm text-gray-600">Available Guides</div>
				</div>
				<div className="bg-green-50 rounded-lg p-6 text-center">
					<div className="text-2xl font-bold text-green-600 mb-2">6</div>
					<div className="text-sm text-gray-600">SDLC Phases</div>
				</div>
				<div className="bg-purple-50 rounded-lg p-6 text-center">
					<div className="text-2xl font-bold text-purple-600 mb-2">
						Multiple
					</div>
					<div className="text-sm text-gray-600">Methodologies</div>
				</div>
			</div>

			{/* SDLC Phases Overview */}
			<div className="bg-gradient-to-r from-green-500 to-blue-600 rounded-lg p-8 mb-12 text-white">
				<h2 className="text-2xl font-semibold mb-4">🔄 SDLC Phases</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">1️⃣ Planning</h3>
						<p className="text-green-100 text-sm">
							Requirements gathering and project scope definition
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">2️⃣ Analysis</h3>
						<p className="text-green-100 text-sm">
							System analysis and feasibility studies
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">3️⃣ Design</h3>
						<p className="text-green-100 text-sm">
							Architecture and system design specifications
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">4️⃣ Implementation</h3>
						<p className="text-green-100 text-sm">
							Coding and development of the system
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">5️⃣ Testing</h3>
						<p className="text-green-100 text-sm">
							Quality assurance and bug fixing
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">6️⃣ Maintenance</h3>
						<p className="text-green-100 text-sm">
							Ongoing support and system updates
						</p>
					</div>
				</div>
			</div>

			{/* Guides List */}
			<div className="space-y-6">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					📚 Available Guides
				</h2>

				{guides.length === 0 ? (
					<div className="text-center py-12">
						<p className="text-gray-500">
							No guides available yet. Check back soon!
						</p>
					</div>
				) : (
					<div className="grid gap-6">
						{guides.map((guide) => (
							<Link
								key={guide.path}
								href={`/guides/${guide.path}`}
								className="block bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-green-300 transition-all duration-200"
							>
								<div className="p-6">
									<div className="flex items-start justify-between">
										<div className="flex-1">
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												{guide.name.replace(/\b\w/g, (l) => l.toUpperCase())}
											</h3>
											<p className="text-gray-600 mb-4">{guide.description}</p>
											<div className="flex items-center text-sm text-green-600">
												<span>Read Guide</span>
												<svg
													className="ml-1 w-4 h-4"
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
											</div>
										</div>
										<div className="ml-4 flex-shrink-0">
											<div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
												<span className="text-lg">🔄</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>

			{/* Methodologies Comparison */}
			<div className="mt-12 bg-gray-50 rounded-lg p-8">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					⚖️ Popular Methodologies
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg p-6 border border-gray-200">
						<h3 className="text-lg font-semibold text-blue-600 mb-3">
							🌊 Waterfall
						</h3>
						<ul className="text-sm text-gray-600 space-y-2">
							<li>• Sequential phase-by-phase approach</li>
							<li>• Clear documentation and milestones</li>
							<li>• Best for well-defined requirements</li>
							<li>• Traditional project management</li>
						</ul>
					</div>
					<div className="bg-white rounded-lg p-6 border border-gray-200">
						<h3 className="text-lg font-semibold text-green-600 mb-3">
							🚀 Agile
						</h3>
						<ul className="text-sm text-gray-600 space-y-2">
							<li>• Iterative and incremental development</li>
							<li>• Flexible and adaptive to changes</li>
							<li>• Continuous customer collaboration</li>
							<li>• Regular feedback and improvements</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Learning Path */}
			<div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					🎯 Recommended Learning Path
				</h2>
				<div className="space-y-4">
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
							1
						</div>
						<span className="text-gray-700">
							Start with SDLC overview and fundamental concepts
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
							2
						</div>
						<span className="text-gray-700">
							Learn each phase in detail, starting with planning
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
							3
						</div>
						<span className="text-gray-700">
							Compare different methodologies (Agile vs Waterfall)
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">
							4
						</div>
						<span className="text-gray-700">
							Apply SDLC principles to real-world projects
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
