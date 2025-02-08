import { NextResponse } from "next/server";
import axios, { AxiosResponse } from "axios";

const COINBASE_API_KEY = process.env.COINBASE_API_KEY;

interface CoinbaseResponse {
	data: {
		code: string;
		hosted_url: string;
	};
}

export async function POST(request: Request) {
	try {
		const { amount } = await request.json();

		// Create the charge using Coinbase Commerce API
		const response: AxiosResponse<CoinbaseResponse> = await axios.post(
			"https://api.commerce.coinbase.com/charges",
			{
				name: "Support My Journey",
				description: "A contribution to support my development projects.",
				pricing_type: "fixed_price",
				local_price: {
					amount: amount,
					currency: "USD",
				},
				redirect_url: `${request.headers.get(
					"origin"
				)}/thank-you?method=crypto&amount=${amount}`,
				cancel_url: `${request.headers.get("origin")}`,
			},
			{
				headers: {
					"Content-Type": "application/json",
					"X-CC-Api-Key": COINBASE_API_KEY,
					"X-CC-Version": "2018-03-22",
				},
			}
		);

		// Return the hosted payment page URL
		return NextResponse.json({ hosted_url: response.data.data.hosted_url });
	} catch (error) {
		console.error("Error creating crypto charge:", error);
		return NextResponse.json(
			{ error: "Failed to create crypto donation charge" },
			{ status: 500 }
		);
	}
}
