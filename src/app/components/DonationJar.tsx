"use client";
import React, { useState } from "react";
import StripeDonation from "./StripeDonation";
import CryptoDonation from "./CryptoDonation";

const DonationJar = () => {
	const [amount] = useState<number | null>(null);

	return (
		<section className="bg-[#820000]/20 backdrop-blur-lg rounded-lg shadow-md p-6 border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all mt-3 text-center">
			<h2 className=" font-bold text-[#DAA520] mb-3">Support My Journey 🚀</h2>{" "}
			<h3 className="mb-2 animate-pulse text-[#DAA520] mx-auto">
				Make a donation today
			</h3>
			<div className="mx-auto max-w-[65vw]">
				<div className=" p-4 text-center">
					<p className="text-[#C0C0C0]/80 mb-3">
						Accepting donations via Debit/Credit 💳 or Crypto through Coinbase
						₿🪙
					</p>
					<div className="mt-4 transition-all">
						<h5 className="text-2xl font-semibold text-[#DAA520] mb-2">
							Select a payment option 💸
						</h5>
						<div className="flex items-center justify-center space-x-4">
							<StripeDonation amount={amount ?? 1} />
							<CryptoDonation amount={amount ?? 1} />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DonationJar;
