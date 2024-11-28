import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.users.getUsers>[0];

export const getUsers = createQuery({
  name: "get-users",
  request: async (_, query?: ListQuery) => {
    return await http.users.getUsers(query);
  },
});
