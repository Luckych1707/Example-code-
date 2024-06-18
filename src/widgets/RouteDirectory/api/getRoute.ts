import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getRoute = createQuery({
  name: "get-route-id",
  request: async (_, id: string) => {
    return await http.api.retrieveRouteApiV1RoutesRouteIdGet(id);
  },
});
