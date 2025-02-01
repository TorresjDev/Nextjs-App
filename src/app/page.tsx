import Image from "next/image";

// app/page.tsx
export default function Home() {
	return (
		<div className="bg-black/50 backdrop-blur-lg rounded-lg shadow-sm p-6 mb-8 border border-[#C0C0C0]/10">
			<h2 className="text-3xl font-bold text-[#DAA520] mb-2">
				Empower My Code Journey
			</h2>
			<p className="text-[#C0C0C0]/80 mb-6">
				Your support directly fuels my development adventures and tech
				explorations.
			</p>

			<div className="grid md:grid-cols-2 gap-6">
				{/* One-Time Donation Card */}
				<div className="bg-[#820000]/30 backdrop-blur-sm p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center items-center justify-center">
					<div>
						<h3 className="flex text-xl font-semibold text-[#DAA520] mb-2">
							Code Fuel
							<Image
								src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNDRqYXd0b3Y1NDJzdjNxbjYzdTlscDV2Z2ZydHI2enFveDZhaG91dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/nU3o3aOBp08yQ/giphy.gif"
								height={33}
								width={33}
								alt="coffee giphy"
								className="pb-3"
							/>
						</h3>
					</div>

					<p className="text-[#C0C0C0]/80 mb-4">
						Single contribution to keep the IDE running
					</p>
					<button className="bg-[#DAA520]/90 text-black hover:font-bold p-2 rounded-md hover:bg-[#DAA520] transition-colors w-1/2 font-medium">
						Instant Boost
					</button>
				</div>

				{/* Monthly Support Card */}
				<div className="bg-[#820000]/30 backdrop-blur-sm p-6 rounded-lg border border-[#DAA520]/10 hover:border-[#DAA520]/30 transition-all text-center justify-center">
					<h3 className="text-xl font-semibold text-[#DAA520] mb-2">
						Sustained Momentum 🚀
					</h3>
					<p className="text-[#C0C0C0]/80 mb-4">
						Monthly support for continuous growth
					</p>
					<button className="bg-[#DAA520]/90 text-black hover:font-bold p-2 rounded-md hover:bg-[#DAA520] transition-colors w-1/2 font-medium">
						Recurring Power
					</button>
				</div>
			</div>
		</div>
	);
}
