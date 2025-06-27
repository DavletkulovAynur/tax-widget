import { createRoute, redirect } from "@tanstack/react-router";
import { rootRoute } from "./root";
import { AuthorizationPage } from "@/app/auth/pages/Authorization.page";
import { RegistrationPage } from "@/app/auth/pages/Registration.page";

export const loginRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: () => <AuthorizationPage />,
});

export const registerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: () => <RegistrationPage />,
});

export const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  loader: () => {
    // TODO: Replace with actual auth check
    const isAuthenticated = false;
    if (!isAuthenticated) {
      throw redirect({ to: "/login" });
    }
    throw redirect({ to: "/dashboard" });
  },
});

export const notFoundRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "*",
  component: () => <div>404 - Страница не найдена</div>,
});
