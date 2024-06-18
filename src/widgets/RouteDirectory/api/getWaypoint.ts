import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getWaypoint = createQuery({
  name: "get-waypoint-id",
  request: async (_, id: string) => {
    return await http.api.retrieveWaypointApiV1WaypointsWaypointIdGet(id);
  },
});
