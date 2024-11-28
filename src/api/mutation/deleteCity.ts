import { createMutation } from "../createMutation";
import http from "../http";

export const deleteCity = createMutation({
  request: async (_, id: string) => {
    return await http.cities.deleteCitiesId(id);
  },
});