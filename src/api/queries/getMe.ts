import { createQuery } from "../createQuery";
import http from "../http";

export const getMe = createQuery({
  name: "get-me",
  request: async () => {
    return await http.users.getUsersGetme();
  },
});
