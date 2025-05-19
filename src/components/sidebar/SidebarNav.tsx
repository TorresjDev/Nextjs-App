"use client";
import { Sidebar, SidebarContent } from "../ui/sidebar";
import AboutSidebarGroup from "./AboutSidebarGroup";
import WalkthroughSidebarGroup from "./GuidesSidebarGroup";

export function SidebarNav() {
	return (
		<Sidebar className="top-[60px]">
			<SidebarContent>
				<AboutSidebarGroup />
				<WalkthroughSidebarGroup />
				{/* need group for ai resume builder*/}
				{/* need group for comments*/}
				{/* need group for contributions (donations)*/}
				{/* need group for themes */}
			</SidebarContent>
		</Sidebar>
	);
}
