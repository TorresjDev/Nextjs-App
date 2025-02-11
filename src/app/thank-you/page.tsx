// app/thank-you/page.tsx
"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface ChargeDetails {
	code: string;
	name: string;
	pricing_type: string;
	local_price: {
		amount: string;
		currency: string;
	};
	timeline: {
		status: string;
		time: string;
	}[];
	payments: {
		value: {
			local: {
				amount: string;
				currency: string;
			};
		};
		network: string;
		transaction_id: string;
	}[];
}

export default function ThankYou() {
	const params = useSearchParams();
	const chargeCode = params.get("code");
	//   const amount = params.get("amount");

	const [chargeDetails, setChargeDetails] = useState<ChargeDetails | null>(
		null
	);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchDetails = async () => {
			if (!chargeCode) {
				setError("Missing transaction identifier");
				setLoading(false);
				return;
			}

			try {
				const response = await fetch(`/api/crypto-charge?code=${chargeCode}`);
				if (!response.ok) throw new Error("Failed to fetch details");

				const data = await response.json();
				setChargeDetails(data.data);
			} catch (err) {
				setError(err instanceof Error ? err.message : "Unknown error occurred");
			} finally {
				setLoading(false);
			}
		};

		fetchDetails();
	}, [chargeCode]);

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-pulse text-2xl text-[#DAA520]">
					Verifying Transaction...
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center p-4">
				<div className="bg-red-900/30 p-8 rounded-xl text-center max-w-2xl">
					<h1 className="text-3xl font-bold text-red-400 mb-4">
						Error Occurred
					</h1>
					<p className="text-red-200/80 mb-6">{error}</p>
					<Link
						href="/"
						className="text-[#DAA520] hover:text-white transition-colors"
					>
						Return to Homepage
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex flex-col items-center justify-center p-4">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="bg-black/30 backdrop-blur-lg border border-white/10 rounded-xl p-8 max-w-3xl w-full shadow-2xl"
			>
				<h1 className="text-4xl font-bold text-[#DAA520] mb-6 text-center">
					Thank You! 🎉
				</h1>

				{chargeDetails && (
					<div className="space-y-6">
						<div className="bg-black/50 p-6 rounded-lg">
							<h2 className="text-2xl font-semibold text-[#DAA520] mb-4">
								Transaction Details
							</h2>
							<div className="grid grid-cols-2 gap-4 text-gray-300">
								<div>
									<p className="font-medium">Amount:</p>
									<p>${chargeDetails.local_price.amount} USD</p>
								</div>
								<div>
									<p className="font-medium">Status:</p>
									<p className="capitalize">
										{chargeDetails.timeline[0].status.replace(/_/g, " ")}
									</p>
								</div>
								<div>
									<p className="font-medium">Transaction ID:</p>
									<p className="break-all">
										{chargeDetails.payments[0]?.transaction_id || "Pending"}
									</p>
								</div>
								<div>
									<p className="font-medium">Network:</p>
									<p className="capitalize">
										{chargeDetails.payments[0]?.network || "Pending"}
									</p>
								</div>
							</div>
						</div>

						<div className="flex justify-center gap-4">
							<button
								onClick={() => window.print()}
								className="bg-[#DAA520] text-black px-6 py-3 rounded-lg font-medium hover:bg-[#c1931a] transition-colors flex items-center gap-2"
							>
								<span>Print Receipt</span>
								<span>🖨️</span>
							</button>

							<Link
								href="/"
								className="border border-[#DAA520] text-[#DAA520] px-6 py-3 rounded-lg hover:bg-[#DAA520]/10 transition-colors"
							>
								Return Home
							</Link>
						</div>
					</div>
				)}

				<div className="mt-8 text-center text-sm text-gray-400">
					<p>
						A confirmation email has been sent to your Coinbase account email.
					</p>
					<p className="mt-2">Transaction ID: {chargeDetails?.code || "N/A"}</p>
				</div>
			</motion.div>
		</div>
	);
}
