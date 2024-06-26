import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const deleteWaypoint = createMutation({
  request: async (_, id: string) => {
    return await http.api.deleteWaypointApiV1WaypointsWaypointIdDelete(id);
  },
});
