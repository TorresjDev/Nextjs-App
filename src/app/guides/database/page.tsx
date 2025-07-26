import Link from "next/link";
import { promises as fs } from "fs";
import path from "path";

interface Guide {
	name: string;
	path: string;
	description: string;
}

async function getDatabaseGuides(): Promise<Guide[]> {
	const databasePath = path.join(
		process.cwd(),
		"src",
		"app",
		"guides",
		"database"
	);

	const guides: Guide[] = [];

	try {
		const subDirs = await fs.readdir(databasePath, { withFileTypes: true });

		for (const dir of subDirs) {
			if (dir.isDirectory() && dir.name !== "page.tsx") {
				const walkthrough = path.join(databasePath, dir.name, "walkthrough.md");
				const exists = await fs
					.access(walkthrough)
					.then(() => true)
					.catch(() => false);

				if (exists) {
					guides.push({
						name: dir.name.replace(/-/g, " "),
						path: `database/${dir.name}`,
						description: getGuideDescription(dir.name),
					});
				}
			}
		}
	} catch (error) {
		console.error("Error reading database guides:", error);
	}

	return guides;
}

function getGuideDescription(guide: string): string {
	const descriptions: Record<string, string> = {
		ERD: "Entity Relationship Diagrams and database design fundamentals",
		"sql-basics": "Fundamental SQL queries and database operations",
		normalization: "Database normalization principles and best practices",
		indexing: "Database indexing strategies for performance optimization",
		transactions: "ACID properties and transaction management",
		nosql: "NoSQL databases and when to use them",
		modeling: "Data modeling techniques and methodologies",
		optimization: "Query optimization and performance tuning",
		security: "Database security best practices and implementation",
	};

	return (
		descriptions[guide] ||
		`Learn about ${guide.replace(/-/g, " ")} in database design`
	);
}

export default async function DatabasePage() {
	const guides = await getDatabaseGuides();

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
								Database
							</span>
						</div>
					</li>
				</ol>
			</nav>

			{/* Header */}
			<div className="text-center mb-12">
				<h1 className="text-4xl font-bold text-gray-900 mb-4">
					🗄️ Database Guides
				</h1>
				<p className="text-xl text-gray-600 max-w-2xl mx-auto">
					Master database design, modeling, and management. Learn SQL, NoSQL,
					optimization techniques, and best practices for data storage.
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
					<div className="text-2xl font-bold text-green-600 mb-2">SQL</div>
					<div className="text-sm text-gray-600">Structured Query Language</div>
				</div>
				<div className="bg-purple-50 rounded-lg p-6 text-center">
					<div className="text-2xl font-bold text-purple-600 mb-2">NoSQL</div>
					<div className="text-sm text-gray-600">Modern Database Solutions</div>
				</div>
			</div>

			{/* Database Concepts */}
			<div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 mb-12 text-white">
				<h2 className="text-2xl font-semibold mb-4">
					🎯 Core Database Concepts
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">📊 Design</h3>
						<p className="text-indigo-100 text-sm">
							ERD modeling and schema design
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">🔍 Querying</h3>
						<p className="text-indigo-100 text-sm">
							SQL operations and data retrieval
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">⚡ Performance</h3>
						<p className="text-indigo-100 text-sm">
							Indexing and query optimization
						</p>
					</div>
					<div className="bg-white bg-opacity-20 rounded-lg p-4">
						<h3 className="font-semibold mb-2">🔒 Security</h3>
						<p className="text-indigo-100 text-sm">
							Access control and data protection
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
								className="block bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg hover:border-purple-300 transition-all duration-200"
							>
								<div className="p-6">
									<div className="flex items-start justify-between">
										<div className="flex-1">
											<h3 className="text-lg font-semibold text-gray-900 mb-2">
												{guide.name.toUpperCase() === "ERD"
													? "ERD - Entity Relationship Diagrams"
													: guide.name.replace(/\b\w/g, (l) => l.toUpperCase())}
											</h3>
											<p className="text-gray-600 mb-4">{guide.description}</p>
											<div className="flex items-center text-sm text-purple-600">
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
											<div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
												<span className="text-lg">🗄️</span>
											</div>
										</div>
									</div>
								</div>
							</Link>
						))}
					</div>
				)}
			</div>

			{/* Database Types Comparison */}
			<div className="mt-12 bg-gray-50 rounded-lg p-8">
				<h2 className="text-2xl font-semibold text-gray-900 mb-6">
					⚖️ SQL vs NoSQL
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white rounded-lg p-6 border border-gray-200">
						<h3 className="text-lg font-semibold text-blue-600 mb-3">
							🏗️ SQL Databases
						</h3>
						<ul className="text-sm text-gray-600 space-y-2">
							<li>• Structured data with predefined schema</li>
							<li>• ACID compliance and transactions</li>
							<li>• Complex queries and joins</li>
							<li>• Examples: MySQL, PostgreSQL, SQL Server</li>
						</ul>
					</div>
					<div className="bg-white rounded-lg p-6 border border-gray-200">
						<h3 className="text-lg font-semibold text-purple-600 mb-3">
							🚀 NoSQL Databases
						</h3>
						<ul className="text-sm text-gray-600 space-y-2">
							<li>• Flexible schema and unstructured data</li>
							<li>• Horizontal scaling and performance</li>
							<li>• Document, key-value, graph stores</li>
							<li>• Examples: MongoDB, Redis, Cassandra</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Learning Path */}
			<div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-8">
				<h2 className="text-2xl font-semibold text-gray-900 mb-4">
					🎯 Recommended Learning Path
				</h2>
				<div className="space-y-4">
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
							1
						</div>
						<span className="text-gray-700">
							Start with database fundamentals and ERD modeling
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
							2
						</div>
						<span className="text-gray-700">
							Learn SQL basics and query construction
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
							3
						</div>
						<span className="text-gray-700">
							Master normalization and database design principles
						</span>
					</div>
					<div className="flex items-center space-x-3">
						<div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">
							4
						</div>
						<span className="text-gray-700">
							Explore NoSQL databases and optimization techniques
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}
