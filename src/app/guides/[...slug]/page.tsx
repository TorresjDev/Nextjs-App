"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function WalkthroughPage() {
	const params = useParams();
	const slug = params?.slug as string[];
	const [Component, setComponent] = useState<React.ElementType | null>(null);

	useEffect(() => {
		if (!slug || slug.length === 0) return;

		import(`../${slug.join("/")}/walkthrough.mdx`)
			.then((mod) => setComponent(() => mod.default))
			.catch(() => setComponent(() => notFound()));
	}, [slug]);

	if (!slug || slug.length === 0) return notFound();

	return Component ? (
		<Component />
	) : (
		<div className="m-4 text-2xl font-bold">Loading...</div>
	);
}
