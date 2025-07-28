import { Clock, User } from "lucide-react";
import type { GuideMetadata } from "@/lib/types";

interface GuideHeaderProps {
	metadata: GuideMetadata;
	readingTime?: number;
}

export function GuideHeader({ metadata, readingTime }: GuideHeaderProps) {
	return (
		<header className="mb-8 pb-8 border-b">
			<div className="mb-4">
				<span className="inline-block px-3 py-1 text-sm font-semibold text-[#DAA520] bg-[#DAA520]/10 rounded-full mb-4">
					{metadata.category}
				</span>
				<h1 className="text-3xl md:text-4xl font-bold mb-4">
					{metadata.title}
				</h1>
				<p className="text-xl text-muted-foreground mb-6">
					{metadata.description}
				</p>
			</div>

			<div className="flex items-center gap-6 text-sm text-muted-foreground">
				{metadata.author && (
					<div className="flex items-center gap-2">
						<User className="h-4 w-4" />
						<span>{metadata.author}</span>
					</div>
				)}

				{readingTime && (
					<div className="flex items-center gap-2">
						<Clock className="h-4 w-4" />
						<span>{readingTime} min read</span>
					</div>
				)}

				{metadata.publishedAt && (
					<div>
						<span>
							Published: {new Date(metadata.publishedAt).toLocaleDateString()}
						</span>
					</div>
				)}
			</div>
		</header>
	);
}
