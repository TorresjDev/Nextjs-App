import {
	Navbar,
	NavbarBrand,
	// NavbarContent
} from "@nextui-org/navbar";
import Link from "next/link";
import Image from "next/image";

export default function App() {
	return (
		<Navbar
			className="absolute top-0 left-0 w-full z-[60] bg-transparent" // Increased z-index to ensure it’s on top
		>
			{/* <NavbarContent justify="start"> */}
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
			{/* </NavbarContent> */}
		</Navbar>
	);
}
