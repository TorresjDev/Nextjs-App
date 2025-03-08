import { NextResponse } from "next/server";
import { stripe } from "../../../../lib/stripe";

export async function POST(req: Request) {
	console.log({ req });

	try {
		// Parse JSON body
		const { amount } = await req.json();

		if (!amount || amount < 100) {
			return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
		}

		// Create Stripe checkout session
		const session = await stripe.checkout.sessions.create({
			line_items: [
				{
					price_data: {
						currency: "usd",
						product_data: {
							name: "Support My Journey - Donation",
							description: "A contribution to support my development projects.",
						},
						unit_amount: amount, // amount in cents
					},
					quantity: 1,
				},
			],
			mode: "payment",
			success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
			cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/cancel`,
		});

		// Return session ID for redirect
		return NextResponse.json({ id: session.id }, { status: 200 });
	} catch (error) {
		console.error(error);
		return NextResponse.json(
			{ error: "Failed to create Stripe session" },
			{ status: 500 }
		);
	}
}
