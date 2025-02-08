import { NextResponse } from "next/server";
import axios from "axios";

const COINBASE_API_KEY = process.env.COINBASE_API_KEY;

export async function GET(request: Request) {
	const { searchParams } = new URL(request.url);
	const transactionId = searchParams.get("transactionId");

	if (!transactionId) {
		return NextResponse.json(
			{ error: "Transaction ID is missing" },
			{ status: 400 }
		);
	}

	try {
		// Fetch the charge details from Coinbase Commerce API
		const response = await axios.get(
			`https://api.commerce.coinbase.com/charges/${transactionId}`,
			{
				headers: {
					"X-CC-Api-Key": COINBASE_API_KEY,
					"X-CC-Version": "2018-03-22",
				},
			}
		);

		return NextResponse.json(response.data);
	} catch (error) {
		console.error("Error fetching crypto charge details:", error);
		return NextResponse.json(
			{ error: "Failed to fetch charge details" },
			{ status: 500 }
		);
	}
}
