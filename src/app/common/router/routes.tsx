import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { AuthPage } from "@/app/auth/pages/Auth.page";

export const authRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/auth",
  component: () => <AuthPage />,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    // TODO: Replace with actual auth check
    const isAuthenticated = false;
    if (!isAuthenticated) {
      throw redirect({ to: "/auth" });
    }
    throw redirect({ to: "/dashboard" });
  },
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <div>404 - Страница не найдена</div>,
});
