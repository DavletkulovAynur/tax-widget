import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { indexRoute, notFoundRoute, authRoute } from "./routes";
import { dashboardRoute, overviewRoute, taxesRoute } from "./dashboard";

const routeTree = rootRoute.addChildren([
  indexRoute,
  authRoute,
  dashboardRoute.addChildren([overviewRoute, taxesRoute]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
