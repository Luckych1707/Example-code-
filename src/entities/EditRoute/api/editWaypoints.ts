import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { WaypointUpdateBatchRequest } from "@/shared/api/schemas";

export const editWaypoints = createMutation({
  request: async (_, data: WaypointUpdateBatchRequest[]) => {
    return await http.api.updateWaypointBatchApiV1WaypointsBatchPatch(data);
  },
});
