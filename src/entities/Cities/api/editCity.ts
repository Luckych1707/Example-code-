import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { CityUpdateRequest } from "@/shared/api/schemas";

export const editCity = createMutation({
  request: async (
    _,
    { cityId, data }: { cityId: string; data: CityUpdateRequest },
  ) => {
    return await http.api.updateCityApiV1CitiesCityIdPatch(cityId, data);
  },
});
