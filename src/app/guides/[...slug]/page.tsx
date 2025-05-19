"use client";
import { notFound } from "next/navigation";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useMDXComponents } from "../../components/MDXComponents";

export default function WalkthroughPage() {
	const params = useParams();
	const slug = params?.slug as string[];
	type MDXContent = React.ComponentType<{
		components: Record<string, unknown>;
	}>;
	const [mdxModule, setMdxModule] = useState<MDXContent | null>(null);

	const components = useMDXComponents({});
	useEffect(() => {
		if (!slug || slug.length === 0) return;

		import(`../${slug.join("/")}/walkthrough.mdx`)
			.then((mod) => setMdxModule(() => mod.default))
			.catch(() => setMdxModule(() => notFound()));
	}, [slug]);

	if (!slug || slug.length === 0) return notFound();
	if (!mdxModule) return <div className="p-4">Loading...</div>;

	const Content = mdxModule;

	return Content ? (
		<div className="prose dark:prose-invert prose-body:text-black max-w-full p-4 ">
			<Content components={components} />
		</div>
	) : (
		<div className="m-4 text-2xl font-bold">Loading...</div>
	);
}
