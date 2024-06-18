import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
} from "@tanstack/react-router";
import includes from "lodash/includes";

import Calendar from "@/pages/Calendar";
import Cities from "@/pages/Cities";
import AddRoute from "@/pages/CreateRoute";
import Feedback from "@/pages/Feedback";
import RouteInformation from "@/pages/InfoRoute";
import RouteDirectory from "@/pages/RouteDirectory";
import Categories from "@/pages/Сategories";
import { Layout } from "@/widgets/Layout";

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
  validateSearch: (search?: Record<string, unknown>) => {
    if (!search) {
      return {};
    }

    const order = includes(["asc", "desc"], search?.order)
      ? search?.order
      : "asc";

    return {
      search: search?.search as string,
      order: order as string,
      page: (search?.page as number) || 1,
      limit: (search?.limit as number) || 5,
    };
  },
});
const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/categories",
  component: () => <Categories />,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      page: (search?.page as number) || 1,
      limit: (search?.limit as number) || 10,
    };
  },
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
  validateSearch: (search: Record<string, unknown>) => {
    const order = includes(["asc", "desc"], search.order)
      ? search.order
      : "asc";

    return {
      order: order as string,
      new: (search?.new as boolean) || false,
      processed: (search?.processed as boolean) || false,
      viewed: (search?.viewed as boolean) || false,
      page: (search?.page as number) || 1,
      limit: (search?.limit as number) || 5,
    };
  },
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
