import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { RouteUpdateRequest } from "@/shared/api/schemas";

export const editRoute = createMutation({
  request: async (
    _,
    { routeId, data }: { routeId: string; data: RouteUpdateRequest },
  ) => {
    return await http.api.updateRouteApiV1RoutesRouteIdPatch(routeId, data);
  },
});
