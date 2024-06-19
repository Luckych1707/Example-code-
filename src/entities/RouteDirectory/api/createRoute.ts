import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { RouteCreateRequest } from "@/shared/api/schemas";

export const createRoute = createMutation({
  request: async (_, data: RouteCreateRequest) => {
    return await http.api.createRouteApiV1RoutesPost(data);
  },
});
