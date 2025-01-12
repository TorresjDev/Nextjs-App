export default function Home() {
	return (
		<div className="min-h-screen flex flex-col p-8 bg-slate-900">
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<h1 className="text-4xl font-bold text-center sm:text-left">
					Welcome to My Walkthrough Guide
				</h1>
				<p className="text-lg text-center sm:text-left">
					Explore step-by-step walkthroughs and documentation to help you set up
					and manage your software projects effortlessly. Navigate between
					guides using the breadcrumb navigation or the links below.
				</p>

				<div className="flex flex-col gap-4 sm:flex-row">
					<a
						className="rounded-md bg-blue-500 text-white px-4 py-2 hover:bg-blue-600"
						href="/github"
					>
						GitHub Walkthrough
					</a>
					<a
						className="rounded-md bg-green-500 text-white px-4 py-2 hover:bg-green-600"
						href="/nextjs"
					>
						Next.js Walkthrough
					</a>
				</div>
			</main>

			<footer className="mt-12 text-center text-gray-500">
				Built with ❤️ using Next.js.
			</footer>
		</div>
	);
}
