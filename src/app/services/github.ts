const githubUsername = process.env.GITHUB_USERNAME;

export async function getGitHubProfile() {
	if (!githubUsername) {
		throw new Error("GitHub username is not defined in env file.");
	}

	const response = await fetch(
		`https://api.github.com/users/${githubUsername}`,
		{
			headers: {
				Accept: "application/vnd.github+json",
			},
			next: {
				revalidate: 3600, // Revalidate every 60 seconds
			},
		}
	);

	if (!response.ok) {
		throw new Error("Failed to fetch GitHub profile");
	}

	return response.json();
}
