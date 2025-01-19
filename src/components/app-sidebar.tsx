import {
	Calendar,
	ChevronRight,
	Home,
	Inbox,
	Search,
	Settings,
} from "lucide-react";
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

// Menu items with optional submenus
const items = [
	{
		title: "Home",
		url: "/",
		icon: Home,
		submenu: null,
	},
	{
		title: "GitHub",
		url: "/github",
		icon: Inbox,
		submenu: [
			{ title: "Create Repository", url: "/create-repo" },
			// { title: "Notifications", url: "#notifications" },
		],
	},
	{
		title: "Calendar",
		url: "#",
		icon: Calendar,
		submenu: null,
	},
	{
		title: "Search",
		url: "#",
		icon: Search,
		submenu: null,
	},
	{
		title: "Settings",
		url: "#",
		icon: Settings,
		submenu: [
			{ title: "Profile", url: "#profile" },
			{ title: "Account", url: "#account" },
		],
	},
];

export function AppSidebar() {
	return (
		<Sidebar>
			<SidebarContent>
				<SidebarGroup>
					<SidebarGroupLabel>Application</SidebarGroupLabel>
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
														<item.icon />
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
