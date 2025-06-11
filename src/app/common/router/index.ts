import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { indexRoute, notFoundRoute } from "./routes";
import { dashboardRoute, overviewRoute, taxesRoute } from "./dashboard";

const routeTree = rootRoute.addChildren([
  indexRoute,
  dashboardRoute.addChildren([overviewRoute, taxesRoute]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
