import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { CityCreate } from "@/shared/api/schemas";

export const createCity = createMutation({
  request: async (_, { name, imageId, description }: CityCreate) => {
    return await http.api.createCityApiV1CitiesPost({
      name,
      imageId,
      description,
    });
  },
});
