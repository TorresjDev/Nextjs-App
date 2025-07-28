import type { EnvironmentVariables } from "./types";

// Validate environment variables
const requiredEnvVars = {
	NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
	NEXT_PUBLIC_WAKATIME_USERNAME: process.env.NEXT_PUBLIC_WAKATIME_USERNAME,
} as const;

// Check for missing environment variables
Object.entries(requiredEnvVars).forEach(([key, value]) => {
	if (!value) {
		throw new Error(`Missing required environment variable: ${key}`);
	}
});

export const env: EnvironmentVariables =
	requiredEnvVars as EnvironmentVariables;
