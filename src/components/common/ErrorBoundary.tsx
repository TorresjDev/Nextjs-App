"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

interface ErrorBoundaryProps {
	children: React.ReactNode;
	fallback?: React.ComponentType<{ error: Error; reset: () => void }>;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrorBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("ErrorBoundary caught an error:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			const FallbackComponent = this.props.fallback || DefaultErrorFallback;
			return (
				<FallbackComponent
					error={this.state.error!}
					reset={() => this.setState({ hasError: false, error: undefined })}
				/>
			);
		}

		return this.props.children;
	}
}

function DefaultErrorFallback({
	error,
	reset,
}: {
	error: Error;
	reset: () => void;
}) {
	return (
		<div className="flex items-center justify-center min-h-[50vh]">
			<div className="text-center max-w-md">
				<h2 className="text-2xl font-bold text-red-600 mb-4">
					Something went wrong
				</h2>
				<p className="text-muted-foreground mb-4">
					{error.message || "An unexpected error occurred"}
				</p>
				<Button onClick={reset} variant="outline">
					Try again
				</Button>
			</div>
		</div>
	);
}
