import { Outlet } from "@tanstack/react-router";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-200 p-4">Sidebar</aside>
      <main className="flex-1 p-6">
        <Outlet />
      </main>
    </div>
  );
}
