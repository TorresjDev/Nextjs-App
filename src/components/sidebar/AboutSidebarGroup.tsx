"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	useSidebar,
} from "../ui/sidebar";
import Icon from "../ui/icon";

export default function AboutSidebarGroup() {
	const pathname = usePathname();
	const { isMobile, setOpenMobile } = useSidebar();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>About Me</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<div className="flex items-center gap-2 cursor-pointer">
							<SidebarMenuButton asChild isActive={pathname === "/about"}>
								<Link
									href="/about"
									className="text-white"
									onClick={() => isMobile && setOpenMobile(false)}
								>
									<Icon
										name="person"
										className="rounded-full align-bottom bg-white"
									/>
									<span className="ps-2">Profile</span>
								</Link>
							</SidebarMenuButton>
						</div>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
