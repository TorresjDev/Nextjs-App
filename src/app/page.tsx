import DonationJar from "./components/DonationJar";

export default function Home() {
	return (
		<div>
			{/* Existing Intro Section */}
			<div className="p-6 mb-8 mx-auto max-w-[42rem] text-center">
				<h2 className="text-3xl font-bold text-[#DAA520] mb-2">
					Empower My Code Journey
				</h2>
				<p className="text-[#C0C0C0]/80 mb-3">
					Your support directly fuels my development adventures and tech
					explorations.
				</p>
			</div>
			{/* Donation Section */}
			<DonationJar />
		</div>
	);
}
