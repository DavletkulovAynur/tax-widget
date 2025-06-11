import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./root";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../../overview/pages/Overview";
import Taxes from "../../taxes/pages/Overview";

export const DASHBOARD_PATH = "/dashboard";

export const dashboardRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: DASHBOARD_PATH,
  component: DashboardLayout,
  beforeLoad: () => {
    // TODO: Replace with actual auth check
    const isAuthenticated = false;
    if (!isAuthenticated) {
      throw redirect({ to: "/auth" });
    }
  },
});

export const overviewRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "/",
  component: Overview,
});

export const taxesRoute = createRoute({
  getParentRoute: () => dashboardRoute,
  path: "taxes",
  component: Taxes,
});
