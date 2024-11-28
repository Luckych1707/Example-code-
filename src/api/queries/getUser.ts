import { createQuery } from "../createQuery";
import http from "../http";

export const getUser = createQuery({
  name: "get-user-id",
  request: async (_, id: string) => {
    return await http.users.getUsersId(id);
  },
});
