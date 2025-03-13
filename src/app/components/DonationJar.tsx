"use client";
import React, { useState } from "react";
import StripeDonation from "./StripeDonation";
import CryptoDonation from "./CryptoDonation";

const DonationJar = () => {
	const [amount] = useState<number | null>(null);

	return (
		<section className="bg-[#820000]/20 backdrop-blur-lg rounded-lg shadow-md border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all m-3 p-3 text-center">
			<h2 className="text-[#DAA520] mx-auto">Make a donation today</h2>
			<div className="mx-auto">
				<h3 className="text-2xl font-semibold text-[#DAA520] mt-3 mb-5">
					Select a payment option 💸
				</h3>
				<div className="flex items-center justify-center space-x-4">
					<StripeDonation amount={amount ?? 1} />
					<CryptoDonation amount={amount ?? 1} />
				</div>
				<div className=" p-4">
					<p className="text-[#C0C0C0]/80 mb-3">
						Accepting donations via Debit/Credit 💳 or Crypto through these
						accepted exchanges ₿🪙
					</p>
				</div>
			</div>
		</section>
	);
};

export default DonationJar;
