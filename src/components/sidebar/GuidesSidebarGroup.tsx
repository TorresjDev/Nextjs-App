"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from "../ui/collapsible";
import Icon from "../ui/icon";
import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarMenuSub,
	SidebarMenuSubItem,
	useSidebar,
} from "../ui/sidebar";
import { guideSidebarItems } from "../../lib/sidebar-config";

export default function WalkthroughSidebarGroup() {
	const pathname = usePathname();
	const { isMobile, setOpenMobile } = useSidebar();

	return (
		<SidebarGroup>
			<SidebarGroupLabel>Walkthrough Guides</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{guideSidebarItems.map((item) => {
						const hasSubmenu = item.submenu?.length > 0;
						const isActive =
							hasSubmenu &&
							item.submenu.some((subItem) => pathname.startsWith(subItem.url));

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
														alt={`${item.title} icon`}
														className="rounded-full"
													/>
													<span>{item.title}</span>
												</div>
											</SidebarMenuButton>
											{hasSubmenu && (
												<Icon
													name="chevron_right"
													className="align-bottom !text-white ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90"
												/>
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
																onClick={() => isMobile && setOpenMobile(false)}
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
	);
}
