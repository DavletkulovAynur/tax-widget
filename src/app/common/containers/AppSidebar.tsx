import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LogOut, PanelLeft } from "lucide-react";
import { SidebarMenuApp } from "../components/Menu.sidebar";

const AppSidebar = () => {
  return (
    <Sidebar className="rounded-r-2xl shadow-xl border-r border-sidebar-border bg-sidebar min-h-svh">
      <SidebarHeader className="flex flex-row items-center gap-2 px-4 py-6">
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-[color:var(--sidebar-accent)]/10 text-[color:var(--sidebar-accent-foreground)] dark:bg-[color:var(--sidebar-accent)]/20 dark:text-[color:var(--sidebar-accent-foreground)]">
          <PanelLeft size={22} />
        </span>
        <span className="text-lg font-semibold tracking-tight">
          МодульБухгалтерия
        </span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenuApp />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="mt-auto px-4 pb-6">
        <button
          type="button"
          className="w-full flex items-center gap-2 rounded-md px-3 py-2 text-left text-sm font-medium text-gray-500 hover:bg-red-50 hover:text-red-600 transition-colors"
        >
          <LogOut size={18} />
          Выйти
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
