// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<header className="bg-maroon/80 backdrop-blur-sm border-b border-[#DAA520]/20 shadow-lg">
			<nav className="max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex-shrink-0">
						<Link href="/">
							<h1 className="flex text-[#DAA520] text-2xl font-bold tracking-tight">
								<Image
									src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/dev/dev-xl.svg"
									height={35}
									width={35}
									alt="fire giphy"
									className="pb-2"
								/>{" "}
								&nbsp; <span className="p-1">Support My Journey</span>{" "}
							</h1>
						</Link>
					</div>
					<div className="hidden md:block">
						<p className="flex items-center gap-x-2 text-[#C0C0C0] hover:text-[#DAA520] ">
							Fuel the Passion
							<Image
								src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdXk2aGUzYzhyNHRjYXJvaXVpdHprbHZ2aDBtM3p6YTV2ODk1MG9mNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ewh4ipgPw1bBVj4HI5/giphy.gif"
								height={21}
								width={21}
								alt="fire giphy"
								className="pb-2"
							/>
						</p>
					</div>
				</div>
			</nav>{" "}
		</header>
	);
};

export default Navbar;
