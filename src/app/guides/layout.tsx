import React, { Suspense } from "react";
import { ErrorBoundary } from "@/components/common/ErrorBoundary";
import { LoadingPage } from "@/components/common/LoadingSpinner";

export default function WalkthroughLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="max-w-full max-h-[93vh] overflow-y-scroll m-1 md:m-2 !text-black">
			<article className="prose bg-slate-200 mx-auto p-6 mt-3 flex flex-col !w-[90%] lg:!w-full max-w-[95vw] border-x-4 border-y-2 rounded-md border-x-[#650000] !text-black">
				<ErrorBoundary>
					<Suspense fallback={<LoadingPage />}>{children}</Suspense>
				</ErrorBoundary>
			</article>
		</section>
	);
}
