import {
  createRootRoute,
  createRoute,
  createRouter,
  Navigate,
} from "@tanstack/react-router";

import { Layout } from "@/components/Layout";
import { LayoutDirectory } from "@/components/LayoutDirectory";
import AdminList from "@/routes/Admins/AdminList";
import Countries from "@/routes/Directory/Countries";
import Specializations from "@/routes/Directory/Specializations";
import TrainersList from "@/routes/TrainersList";
import User from "@/routes/Users/User";
import UsersList from "@/routes/Users/UsersList";

type SearchType = {
  limit: number;
  page: number;
};

const rootRoute = createRootRoute({
  component: () => <Layout />,
});

const emptyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: () => <Navigate to="/trainers" search={{ limit: 10, page: 1 }} />,
});

const trainersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/trainers",
  component: () => <TrainersList />,
  validateSearch: (search: Record<string, unknown>): SearchType => {
    return {
      limit: (search.limit as number) ?? 10,
      page: (search.page as number) || 1,
    };
  },
});

const usersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/users",
  component: () => <UsersList />,
  validateSearch: (search: Record<string, unknown>): SearchType => {
    return {
      limit: (search.limit as number) ?? 10,
      page: (search.page as number) || 1,
    };
  },
});

const userRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/user/$id",
  component: () => <User />,
});

const adminsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admins",
  component: () => <AdminList />,
  validateSearch: (search: Record<string, unknown>): SearchType => {
    return {
      limit: (search.limit as number) ?? 10,
      page: (search.page as number) || 1,
    };
  },
});

const directoryLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/directory",
  component: () => <LayoutDirectory />,
});

const countriesRoute = createRoute({
  getParentRoute: () => directoryLayoutRoute,
  path: "/countries",
  component: () => <Countries />,
});

const specializationsRoute = createRoute({
  getParentRoute: () => directoryLayoutRoute,
  path: "/specializations",
  component: () => <Specializations />,
});

const routeTree = rootRoute.addChildren([
  emptyRoute,
  trainersRoute,
  usersRoute,
  adminsRoute,
  userRoute,
  directoryLayoutRoute.addChildren([countriesRoute, specializationsRoute]),
]);

export const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
