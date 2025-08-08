import { Metadata } from "next";
import { DonationsJar } from "@/components/donations/DonationsJar";

export const metadata: Metadata = {
	title: "Donate | Jesus Torres - Developer",
	description:
		"Make a secure donation to support my development work. Choose between credit/debit card or cryptocurrency payments.",
};

export default function DonatePage() {
	return (
		<div className="min-h-screen">
			<div className="container mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<h1 className="text-3xl font-bold text-foreground mb-4">
						Make a Donation 💖
					</h1>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Choose your preferred payment method below. All transactions are
						secure and processed through trusted payment providers.
					</p>
				</div>

				{/* Main Donation Component */}
				<div className="max-w-2xl mx-auto">
					<DonationsJar />
				</div>

				{/* Security Info */}
				<div className="max-w-2xl mx-auto mt-8">
					<div className="bg-card border border-border rounded-lg p-6">
						<h3 className="font-semibold text-foreground mb-3 text-center">
							🔐 Secure & Trusted Payments
						</h3>
						<div className="grid sm:grid-cols-2 gap-4 text-sm text-muted-foreground">
							<div>
								<strong className="text-foreground">Credit/Debit Cards:</strong>
								<br />
								Processed securely through Stripe with industry-standard
								encryption.
							</div>
							<div>
								<strong className="text-foreground">Cryptocurrency:</strong>
								<br />
								Handled by Coinbase Commerce with full blockchain security.
							</div>
						</div>
						<p className="text-center text-xs text-muted-foreground mt-4">
							Your payment information is never stored on our servers.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
