import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { WaypointCreateRequest } from "@/shared/api/schemas";

export const createWaypoints = createMutation({
  request: async (_, data: WaypointCreateRequest[]) => {
    return await http.api.createWaypointBatchApiV1WaypointsBatchPost(data);
  },
});
