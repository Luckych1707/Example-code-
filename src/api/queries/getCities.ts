import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.cities.getCities>[0];

export const getCities = createQuery({
  name: "get-cities",
  request: async (_, query?: ListQuery) => {
    return await http.cities.getCities(query);
  },
});
