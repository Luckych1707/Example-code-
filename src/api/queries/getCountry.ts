import { createQuery } from "../createQuery";
import http from "../http";

export const getCountry = createQuery({
  name: "get-country-id",
  request: async (_, id: string) => {
    return await http.countries.getCountriesId(id);
  },
});
