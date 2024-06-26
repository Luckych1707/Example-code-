import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const deleteRoute = createMutation({
  request: async (_, id: string) => {
    return await http.api.deleteWaypointApiV1RoutesRouteIdDelete(id);
  },
});
