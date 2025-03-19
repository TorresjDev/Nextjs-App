"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const StripeDonation = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | null>(null);

	const handleStripePayment = async () => {
		setLoading(true);
		setError(null);

		try {
			const response = await fetch("/api/stripe-payment/donate-checkout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});

			const data = await response.json();

			if (!response.ok)
				throw new Error(data.error || "Failed to create session.");

			const stripe = await stripePromise;

			if (!stripe) throw new Error("Stripe failed to load.");

			const { error } = await stripe.redirectToCheckout({ sessionId: data.id });

			if (error) throw new Error(error.message);
		} catch (err) {
			const errorMessage =
				err instanceof Error ? err.message : "An unknown error occurred";
			console.error(errorMessage);
			setError(errorMessage);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div>
			<button
				onClick={handleStripePayment}
				disabled={loading}
				className="bg-gold/70 text-black p-3 rounded-md font-bold transition-all border-2 border-black hover:border-abn/70 hover:bg-gold disabled:opacity-50 disabled:cursor-not-allowed"
			>
				{loading ? "Loading..." : "Credit/Debit 💳"}
			</button>
			{error && <p className="text-red-500 text-sm mt-2">{error}</p>}
		</div>
	);
};

export default StripeDonation;
