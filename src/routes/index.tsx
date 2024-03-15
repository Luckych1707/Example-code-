import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
} from "@tanstack/react-router";

import { Layout } from "@/components/Layout";

const rootRoute = createRootRoute({
  component: () => <Layout />,
});

const emptyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/" />,
});

const directoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/routes",
  component: () => <div>routes</div>,
});
const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/categories",
  component: () => <div>categories</div>,
});
const citiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cities",
  component: () => <div>cities</div>,
});
const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calendar",
  component: () => <div>calendar</div>,
});
const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/feedback",
  component: () => <div>feedback</div>,
});

const routeTree = rootRoute.addChildren([
  emptyRoute,
  directoryRoute,
  categoriesRoute,
  citiesRoute,
  calendarRoute,
  feedbackRoute,
]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
