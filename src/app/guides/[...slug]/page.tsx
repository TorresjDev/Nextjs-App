import { notFound } from "next/navigation";
import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";

interface MarkdownContent {
	content: string;
	data: Record<string, unknown>;
}

interface PageProps {
	params: Promise<{
		slug: string[];
	}>;
}

export default async function WalkthroughPage({ params }: PageProps) {
	const { slug } = await params;

	if (!slug || slug.length === 0) {
		notFound();
	}

	try {
		const filePath = path.join(process.cwd(), 'src', 'app', 'guides', ...slug, 'walkthrough.md');
		const fileContents = await fs.readFile(filePath, 'utf8');
		const { data, content } = matter(fileContents);

		const processedContent = await remark()
			.use(remarkGfm)
			.use(remarkHtml)
			.process(content);

		const markdownContent: MarkdownContent = {
			content: processedContent.toString(),
			data
		};

		return (
			<div className="prose dark:prose-invert prose-body:text-black max-w-full p-4">
				<div dangerouslySetInnerHTML={{ __html: markdownContent.content }} />
			</div>
		);
	} catch (error) {
		console.error('Error loading markdown:', error);
		notFound();
	}
}
