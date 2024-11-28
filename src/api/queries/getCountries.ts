import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.countries.getCountries>[0];

export const getCountries = createQuery({
  name: "get-countries",
  request: async (_, query?: ListQuery) => {
    return await http.countries.getCountries(query);
  },
});
