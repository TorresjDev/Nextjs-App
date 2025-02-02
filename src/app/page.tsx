export default function Home() {
	return (
		<div className="min-h-screen flex flex-col p-8 bg-inherit bg-blur">
			<main className="flex flex-col gap-8 items-center sm:items-start">
				<h1 className="text-4xl font-bold text-center sm:text-left">
					Welcome to My Walkthrough Guide
				</h1>
				<p className="text-lg text-center sm:text-left">
					Explore step-by-step walkthroughs and documentation to help you set up
					and manage your software projects effortlessly. Navigate between
					guides using the breadcrumb navigation or the links below.
				</p>
			</main>

			{/* <footer className="mt-12 text-center text-gray-500">
				Built with ❤️ using Next.js.
			</footer> */}
		</div>
	);
}
