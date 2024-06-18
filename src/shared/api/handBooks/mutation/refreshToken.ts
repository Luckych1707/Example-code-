import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const refreshToken = createMutation({
  request: async (_, token: string) => {
    return await http.api.updateRefreshTokenApiV1AuthRefreshPost({
      refresh_token: token,
    });
  },
});
