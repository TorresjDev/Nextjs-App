"use client";
import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
// import { ChevronDownIcon } from '@heroicons/react/16/solid'

// Initialize Stripe
const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

const StripeDonation = () => {
	const [amount, setAmount] = useState<number>(10); // Default amount is $10

	const handleStripePayment = async () => {
		if (amount < 1) {
			alert("Please enter a valid donation amount.");
			return;
		}

		const stripe = await stripePromise;

		const response = await fetch("/api/stripe-payment/donate-checkout", {
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
					/>
					<div className="grid shrink-0 grid-cols-1 focus-within:relative">
						<select
							id="currency"
							name="currency"
							aria-label="Currency"
							className="col-start-1 row-start-1 w-full appearance-none rounded-md py-1.5 pr-7 pl-3 text-base text-[#C0C0C0]/80 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6 bg-black/70"
						>
							<option>USD</option>
							<option>CAD</option>
							<option>EUR</option>
						</select>
						{/* <ChevronDownIcon
              aria-hidden="true"
              className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
            /> */}
					</div>
				</div>
				<button
					onClick={handleStripePayment}
					className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:bg-[#C0C0C0] transition-all"
				>
					Support Now
				</button>{" "}
			</div>
		</div>
	);
};

export default StripeDonation;
