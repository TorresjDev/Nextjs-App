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

export default function PostSidebarGroup() {
	const pathname = usePathname();
	const { isMobile, setOpenMobile } = useSidebar();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Posts</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					<SidebarMenuItem>
						<div className="flex items-center gap-2 cursor-pointer">
							<SidebarMenuButton asChild isActive={pathname === "/posts"}>
								<Link
									href="/posts"
									className="text-white"
									onClick={() => isMobile && setOpenMobile(false)}
								>
									<Icon name="post" className="rounded-full p-0.5 bg-white" />
									<span className="ps-2">Posts</span>
								</Link>
							</SidebarMenuButton>
						</div>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
