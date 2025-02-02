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
} from "@/components/ui/sidebar";
import {
	Collapsible,
	CollapsibleTrigger,
	CollapsibleContent,
} from "@/components/ui/collapsible";
import Image from "next/image";

// Menu items with optional submenus
const items = [
	// {
	// 	title: "Search",
	// 	url: "#",
	// 	icon: Search,
	// 	submenu: null,
	// },// {
	// 	title: "Home",
	// 	url: "/",
	// 	icon: Home,
	// 	submenu: null,
	// },
	{
		title: "GitHub",
		url: "/github",
		icon: "https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/social/github.svg",
		submenu: [
			{ title: "Create Repository", url: "/create-repo" },
			{ title: "Rules Setup", url: "/rules-setup" },
		],
	},
	{
		title: "Next.js",
		url: "/nextjs",
		icon: "https://torresjdev.github.io/Nextjs-Asset-Host/assets/icons/tech/next.svg",
		submenu: [
			// { title: "Create Repository", url: "/create-repo" },
			// { title: "Rules Setup", url: "/rules-setup" },
		],
	},
	// {
	// 	title: "Settings",
	// 	url: "#",
	// 	icon: Settings,
	// 	submenu: [
	// 		{ title: "Profile", url: "#profile" },
	// 		{ title: "Account", url: "#account" },
	// 	],
	// },
];

// import { LucideIcon } from "lucide-react"; // Add this import at the top

// const renderIcon = (icon: LucideIcon | string, iconType: string) => {
// 	if (iconType === "library" && typeof icon === "function") {
// 		return <LucideIcon />;  // Render library icon
// 	}
// 	if (iconType === "url" && typeof icon === "string") {
// 		return <Image src={icon} width={20} height={20} alt="icon" className="rounded" />;
// 	}
// 	return null;  // No icon fallback
// };

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Walkthrough Guides</SidebarGroupLabel>
					<SidebarGroupContent>
						<SidebarMenu>
							{items.map((item) => (
								<Collapsible
									key={item.title}
									defaultOpen={!item.submenu}
									className="group/collapsible"
								>
									<SidebarMenuItem>
										<CollapsibleTrigger asChild>
											<div className="flex items-center gap-2">
												<SidebarMenuButton asChild>
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
												<ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
											</div>
										</CollapsibleTrigger>
										{item.submenu && (
											<CollapsibleContent>
												<SidebarMenuSub>
													{item.submenu.map((subItem) => (
														<SidebarMenuSubItem key={subItem.title}>
															<a
																href={`${item.url}/${subItem.url}`}
																className="ml-6 text-sm text-gray-600 hover:text-gray-900"
															>
																{subItem.title}
															</a>
														</SidebarMenuSubItem>
													))}
												</SidebarMenuSub>
											</CollapsibleContent>
										)}
									</SidebarMenuItem>
								</Collapsible>
							))}
						</SidebarMenu>
					</SidebarGroupContent>
				</SidebarGroup>
			</SidebarContent>
		</Sidebar>
	);
}
