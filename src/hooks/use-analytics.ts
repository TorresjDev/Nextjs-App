"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Simple analytics utility
export function useAnalytics() {
	const pathname = usePathname();

	useEffect(() => {
		// Track page views
		trackPageView(pathname);
	}, [pathname]);

	return {
		trackEvent,
		trackGuideView,
	};
}

// Track page views
export function trackPageView(path: string) {
	if (typeof window !== "undefined") {
		console.log(`Page view: ${path}`);
		// Add your analytics service here (Google Analytics, Plausible, etc.)
	}
}

// Track custom events
export function trackEvent(
	eventName: string,
	properties?: Record<string, string | number | boolean>
) {
	if (typeof window !== "undefined") {
		console.log(`Event: ${eventName}`, properties);
		// Add your analytics service here
	}
}

// Track guide interactions
export function trackGuideView(category: string, guide: string) {
	trackEvent("guide_view", {
		guide_category: category,
		guide_name: guide,
	});
}
