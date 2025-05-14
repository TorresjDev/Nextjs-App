import { Navbar, NavbarBrand, NavbarContent } from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";

export default function Navigation() {
	return (
		<Navbar className="absolute top-0 left-0 !max-w-[100vw] z-[60] bg-transparent">
			<NavbarContent justify="start" className="absolute top-0 left-0">
				<Link href="/">
					<NavbarBrand>
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/dev/dev-xl.svg"
							alt="jt dev logo"
							width="45"
							height="45"
						/>
						<p className="font-bold text-inherit ps-1 ms-1 md:ms-3 text-3xl">
							Jesus Torres
						</p>

						<div className="animate-flareSpark">
							<Image
								src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/gif/anime/fire-burn-fabio-nikolaus.gif"
								height={33}
								width={33}
								alt="fire giphy"
								className="pb-2"
								unoptimized={true}
							/>
						</div>
					</NavbarBrand>
				</Link>{" "}
			</NavbarContent>
		</Navbar>
	);
}
