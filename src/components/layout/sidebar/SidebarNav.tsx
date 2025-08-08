"use client";
import { Sidebar, SidebarContent } from "../../ui/sidebar";
import AboutSidebarGroup from "./AboutSidebarGroup";
import WalkthroughSidebarGroup from "./GuidesSidebarGroup";
import PostSidebarGroup from "./PostSidebarGroup";
import SupportSidebarGroup from "./SupportSidebarGroup";

export function SidebarNav() {
	return (
		<Sidebar className="top-[60px]">
			<SidebarContent>
				<AboutSidebarGroup />
				<WalkthroughSidebarGroup />
				<PostSidebarGroup />
				<SupportSidebarGroup />

				{/* need group for ai resume builder*/}
				{/* need group for comments*/}
				{/* need group for themes */}
			</SidebarContent>
		</Sidebar>
	);
}
