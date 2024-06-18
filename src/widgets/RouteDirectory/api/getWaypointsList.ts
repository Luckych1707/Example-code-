import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

type Request = Parameters<
  typeof http.api.retrieveWaypointListApiV1WaypointsListPost
>[0];

type ListQuery = Parameters<
  typeof http.api.retrieveWaypointListApiV1WaypointsListPost
>[1];

export const getWaypointsList = createQuery({
  name: "get-waypoints-list",
  request: async (_, query: ListQuery, routeId: Request) => {
    return await http.api.retrieveWaypointListApiV1WaypointsListPost(
      routeId,
      query,
    );
  },
});
