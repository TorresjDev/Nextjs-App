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
	useSidebar,
} from "../ui/sidebar";
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "../ui/collapsible";
import { items } from "@/lib/data";

export function AppSidebar() {
	const pathname = usePathname();
	const { isMobile, setOpenMobile } = useSidebar();

	return (
		<Sidebar>
			<SidebarContent>
				{/* group for about me section */}
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
																alt={`${item.title} icon`}
																className={`rounded-full ${
																	item.title === "Database"
																		? "bg-[#FFFFFF] "
																		: "bg-transparent"
																}`}
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
																		onClick={() => {
																			if (isMobile) {
																				setOpenMobile(false); // <== Close sidebar on mobile
																			}
																		}}
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
				{/* themes group  */}
				<SidebarGroup className="mt-4 bottom-2 absolute ">
					<SidebarGroupLabel>Themes</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu className="">
							<SidebarMenuItem>
								<button
									onClick={() => {
										document.documentElement.classList.remove(
											"light",
											"dark",
											"custom-theme"
										);
										document.documentElement.classList.add("light");
									}}
								>
									Light
								</button>
							</SidebarMenuItem>
							<SidebarMenuItem>
								<button
									onClick={() => {
										document.documentElement.classList.remove(
											"light",
											"dark",
											"custom-theme"
										);
										document.documentElement.classList.add("dark");
									}}
								>
									Dark
								</button>
							</SidebarMenuItem>
							{/* <SidebarMenuItem>
								<button
									onClick={() => {
										document.documentElement.classList.remove(
											"light",
											"dark",
											"custom-theme"
										);
										document.documentElement.classList.add("custom-theme");
									}}
								>
									Custom Theme
								</button>
							</SidebarMenuItem> */}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
