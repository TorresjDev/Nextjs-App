"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const StripeDonation = () => {
	const [amount, setAmount] = useState<number>(1); // Default amount is $1
	const [loading, setLoading] = useState<boolean>(false);

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
		<div className="bg-[#820000]/30 p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center">
			<h3 className="text-2xl font-semibold text-[#DAA520] mb-2">
				Donate with Card 💳
			</h3>
			<p className="text-[#C0C0C0]/80 mb-4">
				Credit, debit, or any form of payment offered by Stripe services.
			</p>
			<h5 className="text-2xl font-semibold text-[#DAA520] mb-2">
				Enter Amount you would like to donate💸
			</h5>
			<div className="flex items-center justify-center">
				<div className="flex items-center rounded-md bg-black/70 pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600 max-w-min mx-3">
					<div className="shrink-0 text-base text-[#C0C0C0]/80 select-none sm:text-sm/6">
						$
					</div>
					<input
						id="price"
						name="price"
						type="number"
						className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-white bg-black/70 focus:outline-none sm:text-sm/6"
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
						min={1}
					/>
				</div>
				<button
					onClick={handleStripePayment}
					disabled={loading}
					className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:bg-[#C0C0C0] transition-all"
				>
					{loading ? "Loading..." : "Donate Now"}
				</button>
			</div>
		</div>
	);
};

export default StripeDonation;
