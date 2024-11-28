import { CreateCitySchema } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

export const createCity = createMutation({
  request: async (_, data: CreateCitySchema) => {
    return await http.cities.postCities(data);
  },
});
