import {
  createRootRouteWithContext,
  createRoute,
  createRouter,
  Outlet,
  redirect,
} from "@tanstack/react-router";

import DashboardLayout from "./common/layouts/DashboardLayout";
import Overview from "./overview/pages/Overview";
import Taxes from "./taxes/pages/Overview";

const DASHBOARD_PATH = "/dashboard";

// Корневой маршрут с контекстом
const rootRoute = createRootRouteWithContext()({
  component: () => <Outlet />,
});

// / — корневая страница
const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    throw redirect({ to: "/dashboard" });
  },
});

// /dashboard layout
const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: DASHBOARD_PATH,
  component: DashboardLayout,
});

// /dashboard (index) — показывает Overview
const overviewRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: Overview,
});

// /dashboard/taxes
const taxesRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "taxes",
  component: Taxes,
});

// 404
const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <div>404 - Страница не найдена</div>,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([overviewRoute, taxesRoute]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
