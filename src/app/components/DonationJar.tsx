"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const DonationJar = () => {
	const [amount, setAmount] = useState<number>(10); // Default amount is $50

	const handleStripePayment = async () => {
		if (amount < 1) {
			alert("Please enter a valid donation amount.");
			return;
		}

		const stripe = await stripePromise;

		const response = await fetch("/api/checkout-session", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount }), // Send dynamic amount to API
		});

		const session = await response.json();
		if (stripe) {
			await stripe.redirectToCheckout({ sessionId: session.id });
		}
	};

	return (
		<section className="bg-black/50 backdrop-blur-lg rounded-lg shadow-md p-8 border border-[#C0C0C0]/10 mt-10">
			<h2 className="text-3xl font-bold text-[#DAA520] text-center mb-6">
				Support My Journey 🚀
			</h2>
			<div className="grid md:grid-cols-2 gap-8">
				{/* Stripe Donation Section */}
				<div className="bg-[#820000]/30 p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center">
					<h3 className="text-2xl font-semibold text-[#DAA520] mb-2">
						Donate with Card 💳
					</h3>
					<p className="text-[#C0C0C0]/80 mb-4">
						Credit, debit, or any form Stripe allows.
					</p>
					<h5 className="text-2xl font-semibold text-[#DAA520] mb-2">
						Enter Your Donation Amount 💸
					</h5>
					<input
						type="number"
						min="1"
						value={amount}
						onChange={(e) => setAmount(Number(e.target.value))}
						className="bg-black/70 text-white rounded-md p-2 w-1/3 mb-4 mx-3"
					/>
					<button
						onClick={handleStripePayment}
						className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:bg-[#C0C0C0] transition-all"
					>
						Support Now
					</button>
				</div>

				{/* Crypto Section Placeholder */}
				<div className="bg-[#820000]/30 p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center">
					<h3 className="text-2xl font-semibold text-[#DAA520] mb-2">
						Donate with Crypto ₿
					</h3>
					<p className="text-[#C0C0C0]/80 mb-4">
						Bitcoin, Ethereum, or any crypto you choose.
					</p>
					<button className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:bg-[#C0C0C0] transition-all">
						Donate Crypto
					</button>
				</div>
			</div>
		</section>
	);
};

export default DonationJar;
