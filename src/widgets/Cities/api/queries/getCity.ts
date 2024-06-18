import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getCity = createQuery({
  name: "get-city-id",
  request: async (_, id: string) => {
    return await http.api.getCityApiV1CitiesCityIdGet(id);
  },
});
