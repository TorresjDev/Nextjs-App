"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { items } from "@/lib/data";

export function AppSidebar() {
	const pathname = usePathname();

	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Walkthrough Guides</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => {
								const hasSubmenu = item.submenu && item.submenu.length > 0;
								const isActive =
									hasSubmenu &&
									item.submenu.some((subItem) =>
										pathname.startsWith(subItem.url)
									);

								return (
									<Collapsible
										key={item.title}
										defaultOpen={isActive}
										className="group/collapsible"
									>
										<SidebarMenuItem>
											<CollapsibleTrigger asChild>
												<div className="flex items-center gap-2 cursor-pointer">
													<SidebarMenuButton asChild isActive={isActive}>
														<div>
															<Image
																src={item.icon}
																width={20}
																height={20}
																alt="icon"
																className="rounded"
															/>
															<span>{item.title}</span>
														</div>
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
