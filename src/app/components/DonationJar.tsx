"use client";
import Image from "next/image";
import React, { useState } from "react";
import StripeDonation from "./StripeDonation";
import CryptoDonation from "./CryptoDonation";

const DonationJar = () => {
	const [amount] = useState<number | null>(null);

	return (
		<section className="bg-[#484848] text-center rounded-xl py-5 max-w-[60%] mx-auto mt-5 border-2 border-white">
			<h1 className="font-bold mx-auto text-white">Make a donation today</h1>
			<div className="mx-auto">
				<h3 className="text-2xl font-semibold text-[#DAA520] mt-3 mb-5">
					Select a payment option you would like to donate in 💸
				</h3>
				<div className="flex items-center justify-center space-x-4">
					<StripeDonation />
					<CryptoDonation amount={amount ?? 1} />
				</div>
				<div className=" p-3 mt-3">
					<p className="text-[#C0C0C0]/90">
						Currently accepting donations in these payment options:
					</p>
				</div>
				<div className="flex items-center justify-center space-x-4">
					<Image
						src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/visa.svg"
						height={40}
						width={40}
						alt="visa icon"
					/>
					<Image
						src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/master-card.svg"
						height={40}
						width={40}
						alt="visa icon"
					/>
					<span className="mx-5"></span>
					<Image
						src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/coinbase.svg"
						height={70}
						width={70}
						alt="visa icon"
					/>
				</div>
			</div>
		</section>
	);
};

export default DonationJar;
