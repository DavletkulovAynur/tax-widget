import {
  SidebarMenuItem as BaseSidebarMenuItem,
  SidebarMenuButton,
  SidebarMenu as BaseSidebarMenu,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { MENU_ITEMS } from "../constants/sidebar.const";

interface SidebarMenuItemProps {
  to: string;
  icon: LucideIcon;
  label: string;
}

const SidebarMenuItem = ({ to, icon: Icon, label }: SidebarMenuItemProps) => {
  return (
    <BaseSidebarMenuItem>
      <Link to={to} activeOptions={{ exact: true }}>
        {({ isActive }) => (
          <SidebarMenuButton
            className={`flex items-center gap-2 px-2 py-6 rounded-sm transition-colors ${
              isActive
                ? "bg-[color:var(--color-button)] text-[color:var(--background)] hover:bg-[color:var(--color-button)] hover:text-[color:var(--background)]bg-"
                : "border-transparent text-[color:var(--sidebar-foreground)] hover:bg-muted"
            }`}
          >
            <Icon size={20} className="text-current" />
            <div>{label}</div>
          </SidebarMenuButton>
        )}
      </Link>
    </BaseSidebarMenuItem>
  );
};

const SidebarMenuApp = () => {
  return (
    <BaseSidebarMenu className="space-y-5">
      {MENU_ITEMS.map((item) => (
        <SidebarMenuItem key={item.to} {...item} />
      ))}
    </BaseSidebarMenu>
  );
};

export { SidebarMenuApp };
