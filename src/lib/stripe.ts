import "server-only";

import Stripe from "stripe";

// Validate environment variable exists
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
	throw new Error(
		"STRIPE_SECRET_KEY is not defined. Please check your environment variables."
	);
}

export const stripe = new Stripe(stripeSecretKey, {
	apiVersion: "2025-07-30.basil",
});
