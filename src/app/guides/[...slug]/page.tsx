"use client";

import { notFound } from "next/navigation";
import { useMemo, Suspense, lazy } from "react";

const mdxFiles: {
	[key: string]: () => Promise<{ default: React.ComponentType }>;
} = {
	"database/ERD": () => import("../database/ERD/walkthrough.mdx"),
	"github/create-repo": () => import("../github/create-repo/walkthrough.mdx"),
	"github/git-commands": () => import("../github/git-commands/walkthrough.mdx"),
	"github/rules-setup": () => import("../github/rules-setup/walkthrough.mdx"),
	nextjs: () => import("../nextjs/walkthrough.mdx"),
};

export default function WalkthroughPage({
	params,
}: {
	params: { slug: string[] };
}) {
	const path = params?.slug.join("/");

	const WalkthroughComponent = useMemo(() => {
		if (mdxFiles.hasOwnProperty(path)) {
			return lazy(mdxFiles[path]);
		}
		return null;
	}, [path]);

	if (!WalkthroughComponent) {
		return notFound();
	}

	return (
		<Suspense fallback={<div>Loading...</div>}>
			<section className="max-w-full overflow-y-scroll ">
				<article className="prose bg-slate-300 mx-auto p-8 flex flex-col max-w-[90%]">
					<WalkthroughComponent />
				</article>
			</section>
		</Suspense>
	);
}
