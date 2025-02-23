"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // ✅ Correct way to track URL
import { ChevronRight } from "lucide-react";
import {
	Sidebar,
	SidebarContent,
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
} from "../components/ui/sidebar";
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "../components/ui/collapsible";

// Menu items with optional submenus
const items = [
	{
		title: "GitHub",
		url: "/github",
		icon: "https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/github.svg",
		submenu: [
			{ title: "Create Repository", url: "/github/create-repo" },
			{ title: "Rules Setup", url: "/github/rules-setup" },
		],
	},
	{
		title: "Next.js",
		url: "/nextjs",
		icon: "https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/next.svg",
		submenu: [{ title: "Walkthrough", url: "/nextjs/walkthrough" }],
	},
];

export function AppSidebar() {
	const pathname = usePathname(); // ✅ Correct Next.js App Router method

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Walkthrough Guides</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => {
								const isActive = pathname.startsWith(item.url);
								const hasSubmenu = item.submenu && item.submenu.length > 0;

								return (
									<Collapsible
										key={item.title}
										defaultOpen={isActive}
										className="group/collapsible"
									>
										<SidebarMenuItem>
											<CollapsibleTrigger asChild>
												<div className="flex items-center gap-2">
													<SidebarMenuButton asChild isActive={isActive}>
														<Link href={item.url}>
															<Image
																src={item.icon}
																width={20}
																height={20}
																alt="icon"
																className="rounded"
															/>
															<span>{item.title}</span>
														</Link>
													</SidebarMenuButton>
													{hasSubmenu && (
														<ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
													)}
												</div>
											</CollapsibleTrigger>

											{hasSubmenu && (
												<CollapsibleContent>
													<SidebarMenuSub>
														{item.submenu.map((subItem) => {
															const isSubActive = pathname === subItem.url;

															return (
																<SidebarMenuSubItem key={subItem.title}>
																	<Link
																		href={subItem.url}
																		className={`ml-6 text-sm ${
																			isSubActive
																				? "text-white font-bold"
																				: "text-[#C0C0C0]/80"
																		}`}
																	>
																		{subItem.title}
																	</Link>
																</SidebarMenuSubItem>
															);
														})}
													</SidebarMenuSub>
												</CollapsibleContent>
											)}
										</SidebarMenuItem>
									</Collapsible>
								);
							})}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
