"use client";
import React from "react";

const CryptoDonation = () => {
	const handleCryptoDonation = () => {
		alert("Crypto donation feature coming soon!");
	};

	return (
		<div className="bg-[#820000]/30 p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center">
			<h3 className="text-2xl font-semibold text-[#DAA520] mb-2">
				Donate with Crypto ₿
			</h3>
			<p className="text-[#C0C0C0]/80 mb-4">
				Bitcoin, Ethereum, or any crypto you choose.
			</p>
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
