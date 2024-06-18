import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

type Request = Parameters<
  typeof http.api.retrieveRouteListApiV1RoutesListPost
>[0];

type ListQuery = Parameters<
  typeof http.api.retrieveRouteListApiV1RoutesListPost
>[1];

export const getRoutesList = createQuery({
  name: "get-routes-list",
  request: async (_, query: ListQuery, search: Request) => {
    return await http.api.retrieveRouteListApiV1RoutesListPost(search, query);
  },
});
