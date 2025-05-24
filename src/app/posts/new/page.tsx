import React from "react";

export default function NewPostPage() {
	return (
		<main className="max-w-3xl mx-auto p-6">
			<h1 className="text-3xl font-bold">Create a New Post</h1>
			<p className="text-muted">Share your thoughts with the world.</p>
			{/* Add your form or content here */}
			<form>
				{/* Form fields for creating a new post */}
				<div>
					<label htmlFor="title">Title</label>
					<input type="text" id="title" name="title" required />
				</div>
				<div>
					<label htmlFor="content">Content</label>
					<textarea id="content" name="content" required></textarea>
				</div>
				<button type="submit">Create Post</button>
			</form>
		</main>
	);
}
