import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";

// Корневой маршрут с контекстом
export const rootRoute = createRootRouteWithContext()({
  component: () => <Outlet />,
});
