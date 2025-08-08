import {
	SidebarGroup,
	SidebarGroupContent,
	SidebarGroupLabel,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
} from "../../ui/sidebar";
import Link from "next/link";

const supportItems = [
	{
		title: "Support",
		url: "/support",
		icon: "💖",
	},
	{
		title: "Donate",
		url: "/support/donate",
		icon: "💳",
	},
];

export default function SupportSidebarGroup() {
	return (
		<SidebarGroup>
			<SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
				Support
			</SidebarGroupLabel>
			<SidebarGroupContent>
				<SidebarMenu>
					{supportItems.map((item) => (
						<SidebarMenuItem key={item.title}>
							<SidebarMenuButton asChild>
								<Link href={item.url} className="flex items-center gap-2">
									<span className="text-sm">{item.icon}</span>
									<span className="text-sm font-medium">{item.title}</span>
								</Link>
							</SidebarMenuButton>
						</SidebarMenuItem>
					))}
				</SidebarMenu>
			</SidebarGroupContent>
		</SidebarGroup>
	);
}
