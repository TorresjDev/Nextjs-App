export interface DonationAmount {
	value: number;
	currency: "USD" | "EUR" | "GBP";
}

export interface StripeSessionData {
	id: string;
	url: string;
}

export interface CryptoPaymentData {
	hosted_url: string;
	id: string;
	code: string;
}

export interface DonationError {
	message: string;
	code?: string;
}

export interface DonationConfig {
	stripePublishableKey?: string;
	coinbaseApiKey?: string;
	enabledPaymentMethods: {
		stripe: boolean;
		crypto: boolean;
	};
}

export type PaymentMethod = "stripe" | "crypto";

export type DonationStatus = "idle" | "loading" | "success" | "error";
