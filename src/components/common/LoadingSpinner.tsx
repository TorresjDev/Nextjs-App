import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
	size?: "sm" | "md" | "lg";
	className?: string;
}

export function LoadingSpinner({
	size = "md",
	className,
}: LoadingSpinnerProps) {
	const sizeClasses = {
		sm: "h-4 w-4",
		md: "h-8 w-8",
		lg: "h-12 w-12",
	};

	return (
		<div className="flex items-center justify-center p-8">
			<div
				className={cn(
					"animate-spin rounded-full border-b-2 border-[#DAA520]",
					sizeClasses[size],
					className
				)}
			/>
		</div>
	);
}

export function LoadingPage() {
	return (
		<div className="flex items-center justify-center min-h-[50vh]">
			<div className="text-center">
				<LoadingSpinner size="lg" />
				<p className="mt-4 text-muted-foreground">Loading...</p>
			</div>
		</div>
	);
}
