import { notFound } from "next/navigation";
import fs from "fs";
import path from "path";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
	const guidesPath = path.join(process.cwd(), "src/app/guides");
	const files = fs.readdirSync(guidesPath);
	return files.map((file) => ({
		slug: file.replace(".mdx", ""),
	}));
}

export default async function GuidePage({
	params,
}: {
	params: { slug: string };
}) {
	const filePath = path.join(
		process.cwd(),
		`src/app/guides/${params.slug}.mdx`
	);

	if (!fs.existsSync(filePath)) {
		return notFound();
	}

	const content = fs.readFileSync(filePath, "utf-8");

	return (
		<div className="prose dark:prose-invert max-w-4xl mx-auto py-8">
			<MDXRemote source={content} />
		</div>
	);
}
