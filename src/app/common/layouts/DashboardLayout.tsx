import { Outlet } from "@tanstack/react-router";
import { AppSidebar } from "../containers/AppSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function DashboardLayout() {
  return (
    <>
      <AppSidebar />
      <main className="flex-1 p-6">
        <main>
          <SidebarTrigger />
          <Outlet />
        </main>
      </main>
    </>
  );
}
