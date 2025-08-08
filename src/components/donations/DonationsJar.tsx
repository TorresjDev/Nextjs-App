"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CryptoDonation } from "./components/CryptoDonation";
import StripeDonation from "./components/StripeDonation";

interface DonationsJarProps {
	className?: string;
	compact?: boolean;
}

export const DonationsJar: React.FC<DonationsJarProps> = ({
	className = "",
	compact = false,
}) => {
	const [amount] = useState<number | null>(null);

	if (compact) {
		return (
			<section
				className={`bg-card text-center rounded-lg p-4 border border-border ${className}`}
			>
				<h3 className="font-semibold text-foreground mb-3">
					Support this project
				</h3>
				<div className="flex items-center justify-center gap-3">
					<StripeDonation compact />
					<CryptoDonation amount={amount ?? 1} compact />
				</div>
			</section>
		);
	}

	return (
		<section
			className={`bg-card text-center rounded-xl py-6 px-4 max-w-2xl mx-auto border border-border shadow-lg ${className}`}
		>
			<h1 className="text-2xl font-semibold text-foreground mb-2">
				Make a donation today
			</h1>
			<div className="mx-auto">
				<h3 className="text-xl font-bold text-primary mt-3 mb-5">
					Select a payment option you would like to donate in 💸
				</h3>
				<div className="flex items-center justify-center gap-4 mb-6">
					<StripeDonation />
					<CryptoDonation amount={amount ?? 1} />
				</div>
				<div className="p-3">
					<p className="text-muted-foreground font-medium mb-4">
						Currently accepting donations in these payment options:
					</p>
					<div className="flex items-center justify-center gap-4">
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/visa.svg"
							height={40}
							width={40}
							alt="visa icon"
							className="drop-shadow-sm"
						/>
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/master-card.svg"
							height={40}
							width={40}
							alt="mastercard icon"
							className="drop-shadow-sm"
						/>
						<div className="mx-2 h-8 w-px bg-border" />
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/coinbase.svg"
							height={50}
							width={50}
							alt="coinbase icon"
							className="drop-shadow-sm"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default DonationsJar;
