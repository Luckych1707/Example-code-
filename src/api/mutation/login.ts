import { createMutation } from "../createMutation";
import http from "../http";
import { LoginData } from "../schemas";

export const login = createMutation({
  request: async (_, data: LoginData) => {
    return await http.auth.postAuthSigninAdmin(data);
  },
});
