import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
	apiVersion: "2024-12-18.acacia", // Adjust if needed
});

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// Create a checkout session
		const session = await stripe.checkout.sessions.create({
			payment_method_types: ["card"],
			mode: "payment",
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "Support My Journey Donation",
							description: "A contribution to support my development projects.",
						},
						unit_amount: body.amount * 100, // Convert dollars to cents
					},
					quantity: 1,
				},
			],
			success_url: `${request.headers.get("origin")}/thank-you`,
			cancel_url: `${request.headers.get("origin")}`,
		});

		return NextResponse.json({ id: session.id });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to create Stripe session" },
			{ status: 500 }
		);
	}
}
