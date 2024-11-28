import { createMutation } from "../createMutation";
import http from "../http";

type EditCitySchema = {
  id: string;
  countryId: string;
  name: string;
  utcOffset: string;
};

export const editCity = createMutation({
  request: async (_, { id, name, countryId, utcOffset }: EditCitySchema) => {
    return await http.cities.putCitiesId(id, { name, countryId, utcOffset });
  },
});
