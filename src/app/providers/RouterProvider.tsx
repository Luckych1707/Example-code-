import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
} from "@tanstack/react-router";

import Calendar from "@/pages/Calendar";
import Cities from "@/pages/Cities";
import AddRoute from "@/pages/CreateRoute";
import Feedback from "@/pages/Feedback";
import RouteDirectory from "@/pages/RouteDirectory";
import Categories from "@/pages/Сategories";
import { Layout } from "@/widgets/Layout";
import RouteInformation from "@/pages/InfoRoute";

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
  component: () => <RouteDirectory />,
});
const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/categories",
  component: () => <Categories />,
});
const citiesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cities",
  component: () => <Cities />,
});
const calendarRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/calendar",
  component: () => <Calendar />,
});
const feedbackRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/feedback",
  component: () => <Feedback />,
});
const createRouteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/create-route",
  component: () => <AddRoute />,
});
const infoRouteRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/info-route/$id",
  component: () => <RouteInformation />,
});

const routeTree = rootRoute.addChildren([
  emptyRoute,
  directoryRoute,
  categoriesRoute,
  citiesRoute,
  calendarRoute,
  feedbackRoute,
  createRouteRoute,
  infoRouteRoute,
]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
