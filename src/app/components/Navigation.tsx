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
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/dev/dev-1.svg"
							alt="jt dev logo"
							width="50"
							height="50"
						/>
						<p className="font-bold text-inherit p-1 mx-3 text-3xl">
							TorresjDev
						</p>
					</NavbarBrand>{" "}
				</Link>{" "}
			</NavbarContent>
		</Navbar>
	);
}
