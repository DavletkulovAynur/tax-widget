import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Link } from "@tanstack/react-router";

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>МодульБухгалтерия</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Link
                to="/dashboard"
                activeProps={{
                  className:
                    "[&>button]:bg-sidebar-accent [&>button]:text-sidebar-accent-foreground",
                }}
                inactiveProps={{}}
                activeOptions={{ exact: true }}
              >
                <SidebarMenuButton>Главная</SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Link
                to="/dashboard/taxes"
                activeProps={{
                  className:
                    "[&>button]:bg-sidebar-accent [&>button]:text-sidebar-accent-foreground",
                }}
                inactiveProps={{}}
                activeOptions={{ exact: true }}
              >
                <SidebarMenuButton>Налоги и отчётность</SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <button
          type="button"
          className="w-full rounded-md px-3 py-2 text-left text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
        >
          Выйти
        </button>
      </SidebarFooter>
    </Sidebar>
  );
};

export { AppSidebar };
