// components/Navbar.js
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	return (
		<nav className="bg-maroon/80 backdrop-blur-sm border-b-[2px] border-silver/60">
			<div className="flex items-center justify-between h-16 max-w-[95vw] mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex-shrink-0">
					<Link href="/">
						<h1 className="flex text-gold/90 text-2xl font-bold tracking-tight hover:text-gold ">
							<Image
								src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/dev/dev-1.svg"
								height={45}
								width={45}
								alt="fire giphy"
								className="pb-2"
								unoptimized={true}
							/>{" "}
							&nbsp;&nbsp;
							<span className="font-bold text-inherit pt-2 text-3xl drop-shadow-2xl subpixel-antialiased">
								Jesus Torres
							</span>
						</h1>
					</Link>
				</div>{" "}
				<div className="hidden md:block">
					<p className="flex items-center gap-x-2 text-silver font-extrabold drop-shadow-2xl subpixel-antialiased">
						Fuel the Passion
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/gif/anime/fire-burn-fabio-nikolaus.gif"
							height={21}
							width={21}
							alt="fire giphy"
							className="pb-2"
							unoptimized={true}
						/>
					</p>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

{
	/* */
}
