"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const StripeDonation = ({ amount }: { amount: number }) => {
	const [loading, setLoading] = useState<boolean>(false);
	// console.log(donation);
	const handleStripePayment = async () => {
		setLoading(true);

		if (amount < 1) {
			alert("Please enter a valid donation amount.");
			setLoading(false);
			return;
		}

		try {
			const response = await fetch("/api/stripe-payment/donate-checkout", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ amount: Math.round(amount * 100) }), // Convert to cents
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Something went wrong.");
			}

			const stripe = await stripePromise;
			if (stripe) {
				await stripe.redirectToCheckout({ sessionId: data.id });
			} else {
				throw new Error("Stripe initialization failed.");
			}
		} catch (error) {
			console.error("Stripe Payment Error:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			onClick={handleStripePayment}
			disabled={loading}
			className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:bg-[#C0C0C0] transition-all"
		>
			{loading ? "Loading..." : "Click here to donate"}
		</button>
	);
};

export default StripeDonation;
