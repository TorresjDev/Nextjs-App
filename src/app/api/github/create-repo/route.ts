import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json();
	// Simulate creating a GitHub repository (e.g., call GitHub API)
	return NextResponse.json({ success: true, data: body }, { status: 200 });
}

export async function GET() {
	// Return data for the create-repo walkthrough or form
	return NextResponse.json(
		{ message: "Create Repository data" },
		{ status: 200 }
	);
}
