import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	// NavbarItem,
} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";

export default function App() {
	return (
		<Navbar className="w-full">
			<NavbarContent justify="start">
				<Link href="/">
					<NavbarBrand>
						<Image
							src="https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/dev/dev-1.svg"
							alt="jt dev logo"
							width="33"
							height="33"
						/>
						<p className="font-bold text-inherit p-1">TorresjDev</p>
					</NavbarBrand>{" "}
				</Link>{" "}
			</NavbarContent>

			<NavbarContent className="hidden sm:flex gap-4 ml-5" justify="center">
				{/* <NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem> */}
			</NavbarContent>
		</Navbar>
	);
}
