import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getMe = createQuery({
  name: "get-me",
  request: async () => {
    return await http.api.getMeApiV1UsersMeGet();
  },
});
