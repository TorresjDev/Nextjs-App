import Link from "next/link";

export default function ThankYou() {
	return (
		<div className="text-center p-10">
			<h1 className="text-4xl font-bold text-gold">Thank You! 🎉</h1>
			<p className="text-silver/80 mt-4">
				Your generous support means the world to me! You&apos;ve helped fuel my
				development journey and projects.
			</p>
			<Link
				href="/"
				className="mt-6 inline-block text-gold underline hover:text-white"
			>
				Return to Homepage
			</Link>
		</div>
	);
}
