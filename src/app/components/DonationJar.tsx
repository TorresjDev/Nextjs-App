"use client";
import React from "react";
import StripeDonation from "./StripeDonation";
import CryptoDonation from "./CryptoDonation";

const DonationJar = () => {
	return (
		<section className="bg-black/50 backdrop-blur-lg rounded-lg shadow-md p-8 border border-[#C0C0C0]/10 mt-10">
			<h2 className="text-3xl font-bold text-[#DAA520] text-center mb-6">
				Support My Journey 🚀
			</h2>
			<div className="grid md:grid-cols-2 gap-8">
				{/* Stripe Donation Section */}
				<StripeDonation />

				{/* Crypto Section Placeholder */}
				<CryptoDonation />
			</div>
		</section>
	);
};

export default DonationJar;
