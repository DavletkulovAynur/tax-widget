import { createRouter } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { indexRoute, notFoundRoute, loginRoute, registerRoute } from "./routes";
import { dashboardRoute, overviewRoute, taxesRoute } from "./dashboard";

const routeTree = rootRoute.addChildren([
  indexRoute,
  loginRoute,
  registerRoute,
  dashboardRoute.addChildren([overviewRoute, taxesRoute]),
  notFoundRoute,
]);

export const router = createRouter({ routeTree });
