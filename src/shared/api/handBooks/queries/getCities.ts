import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

type ListQuery = Parameters<
  typeof http.api.retrieveCityListApiV1CitiesListPost
>[0];

export const getCitiesList = createQuery({
  name: "get-cities",
  request: async (_, query: ListQuery) => {
    return await http.api.retrieveCityListApiV1CitiesListPost(query);
  },
});
