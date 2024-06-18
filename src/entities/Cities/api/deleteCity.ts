import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const deleteCity = createMutation({
  request: async (_, cityId: string) => {
    return await http.api.deleteCityApiV1CitiesCityIdDelete(cityId);
  },
});
