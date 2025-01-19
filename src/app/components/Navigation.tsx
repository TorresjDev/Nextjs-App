import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Image from "next/image";

export default function App() {
	return (
		<Navbar className="w-full">
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
			</Link>
			<NavbarContent className="hidden sm:flex gap-4 ml-5" justify="center">
				<NavbarItem>
					<Link color="foreground" href="#">
						Features
					</Link>
				</NavbarItem>
				<NavbarItem isActive>
					<Link aria-current="page" href="#">
						Customers
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color="foreground" href="#">
						Integrations
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify="end">
				<NavbarItem className="hidden lg:flex">
					<Link href="#">Login</Link>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color="primary" href="#" variant="flat">
						Sign Up
					</Button>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
