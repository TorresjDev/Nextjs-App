"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation"; // Import useParams

export default function WalkthroughPage() {
	const params = useParams(); // Use useParams() instead of receiving params as a prop
	const slug = params?.slug as string[]; // Ensure slug is an array
	const [Component, setComponent] = useState<React.ElementType | null>(null);

	console.log("Params:", params);

	useEffect(() => {
		if (!slug || slug.length === 0) return;

		// Dynamically import the MDX component on catch render not-found.tsx compoent
		import(`../${slug.join("/")}/walkthrough.mdx`)
			.then((mod) => setComponent(() => mod.default))
			.catch(() => () => setComponent(() => notFound()));
	}, [slug]);

	if (!slug || slug.length === 0) {
		return notFound();
	}

	return (
		<section className="max-w-full overflow-y-scroll m-1 md:m-2 ">
			<article className="prose bg-slate-200 mx-auto p-6 mt-3 flex flex-col !w-[90%] lg:!w-full max-w-[95vw] border-x-4 border-y-2 rounded-md border-[#650000]">
				{Component ? (
					<Component />
				) : (
					<div className="m-4 text-2xl font-bold">Loading...</div>
				)}
			</article>
		</section>
	);
}
