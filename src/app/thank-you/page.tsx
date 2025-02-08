"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

interface CoinbaseAPIResponse {
	data: {
		code: string;
		name: string;
		timeline: {
			status: string;
			time: string;
		}[];
	};
	error?: string;
}

export default function ThankYou() {
	const params = useSearchParams();
	const amount = params.get("amount");
	const method = params.get("method");
	const transactionId = params.get("transactionId");

	const [transactionDetails, setTransactionDetails] =
		useState<CoinbaseAPIResponse | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchTransactionDetails = async () => {
			if (transactionId) {
				try {
					const response = await fetch(
						`/api/crypto-charge?transactionId=${transactionId}`
					);
					const data: CoinbaseAPIResponse = await response.json();

					if (data.error) {
						setError(data.error);
					} else {
						setTransactionDetails(data);
					}
				} catch {
					setError("Failed to fetch transaction details.");
				} finally {
					setLoading(false);
				}
			}
		};

		fetchTransactionDetails();
	}, [transactionId]);

	if (loading) {
		return <p>Loading transaction details...</p>;
	}

	if (error) {
		return <p className="text-red-500">Error: {error}</p>;
	}

	return (
		<div className="text-center p-10">
			<h1 className="text-4xl font-bold text-[#DAA520]">Thank You! 🎉</h1>
			<p className="text-[#C0C0C0]/80 mt-4">
				{method === "crypto"
					? "Your crypto donation means the world to me! 🚀"
					: "Your support through Stripe keeps this project alive! 💳"}
			</p>

			{/* Display the Transaction Details */}
			{transactionDetails && (
				<div className="bg-black/70 p-6 mt-6 rounded-md text-white inline-block text-left">
					<h2 className="text-2xl font-semibold mb-4">Donation Receipt 🧾</h2>
					<p>
						<strong>Donation Amount:</strong> ${amount} USD
					</p>
					<p>
						<strong>Payment Method:</strong>{" "}
						{method === "crypto" ? "Crypto" : "Card (Stripe)"}
					</p>
					<p>
						<strong>Transaction ID:</strong> {transactionId}
					</p>
					<p>
						<strong>Charge Status:</strong>{" "}
						{transactionDetails.data.timeline[0].status}
					</p>
					<p>
						<strong>Date:</strong> {new Date().toLocaleString()}
					</p>
				</div>
			)}

			<div className="mt-6">
				<button
					onClick={() => window.print()}
					className="bg-[#DAA520] text-black p-3 rounded-md font-medium hover:bg-[#C0C0C0] transition-all"
				>
					Print or Save Receipt 🖨️
				</button>
			</div>

			<Link
				href="/"
				className="mt-6 block text-[#DAA520] underline hover:text-white"
			>
				Return to Homepage
			</Link>
		</div>
	);
}
