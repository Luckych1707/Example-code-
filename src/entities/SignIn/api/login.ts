import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { UserAuthenticateRequest } from "@/shared/api/schemas";

export const login = createMutation({
  request: async (_, data: UserAuthenticateRequest) => {
    return await http.api.authenticateApiV1AuthAuthenticationPost(data);
  },
});
