"use client";
import React, { useState } from "react";
import axios from "axios";

const CryptoDonation = () => {
	const [amount, setAmount] = useState<number>(10); // Default amount is $10

	const handleCryptoDonation = async () => {
		if (amount < 1) {
			alert("Please enter a valid donation amount.");
			return;
		}

		try {
			const response = await axios.post("/api/crypto-donation", { amount });
			const { hosted_url } = response.data;
			window.location.href = hosted_url; // Redirect to Coinbase-hosted payment page
		} catch (error) {
			console.error("Crypto donation failed:", error);
			alert("Failed to initiate crypto donation.");
		}
	};

	return (
		<div className="bg-[#820000]/30 p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center">
			<h3 className="text-2xl font-semibold text-[#DAA520] mb-2">
				Donate with Crypto ₿
			</h3>
			<p className="text-[#C0C0C0]/80 mb-4">
				Bitcoin, Ethereum, or any crypto you choose.
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
				onClick={handleCryptoDonation}
				className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:bg-[#C0C0C0] transition-all"
			>
				Donate Crypto
			</button>
		</div>
	);
};

export default CryptoDonation;
