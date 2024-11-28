import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.countries.getCountries>[0];

export const getCountriesWithCities = createQuery({
  name: "get-countries-with-cities",
  request: async (_, query?: ListQuery) => {
    return await http.countries.getCountriesWithcities(query);
  },
});
