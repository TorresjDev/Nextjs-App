"use client";
import React, { useState } from "react";
import axios from "axios";

const CryptoDonation = ({ amount }: { amount: number }) => {
	const [loading, setLoading] = useState<boolean>(false);

	// console.log(donation);

	const handleCryptoDonation = async () => {
		setLoading(true);
		if (amount < 1) {
			alert("Please enter a valid donation amount.");
			setLoading(false);
			return;
		}

		try {
			const response = await axios.post("/api/crypto-donation", { amount });
			const { hosted_url } = response.data;
			window.location.href = hosted_url; // Redirect to Coinbase-hosted payment page
		} catch (error) {
			console.error("Crypto donation failed:", error);
			alert("Failed to initiate crypto donation.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<button
			onClick={handleCryptoDonation}
			disabled={loading}
			className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:font-bold hover:text-[#820000] transition-all"
		>
			Donate Crypto
		</button>
	);
};

export default CryptoDonation;
