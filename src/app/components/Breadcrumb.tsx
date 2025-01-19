"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const Breadcrumb = () => {
	const pathname = usePathname(); // Get the current route
	const pathSegments = pathname.split("/").filter((segment) => segment); // Split and clean the path

	return (
		<nav aria-label="Breadcrumb" className="mb-4">
			<ol className="flex items-center gap-2 text-sm text-zinc-300">
				<li>
					<Link href="/" className="hover:underline text-blue-500">
						Home
					</Link>
				</li>
				{pathSegments.map((segment, index) => {
					const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
					const isLast = index === pathSegments.length - 1;

					return (
						<li key={href} className="flex items-center gap-2">
							<span>/</span>
							{!isLast ? (
								<Link href={href} className="hover:underline text-blue-500">
									{decodeURIComponent(segment)}
								</Link>
							) : (
								<span className="text-zinc-300 font-medium">
									{decodeURIComponent(segment)}
								</span>
							)}
						</li>
					);
				})}
			</ol>
		</nav>
	);
};

export default Breadcrumb;
