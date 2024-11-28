import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.users.getUsersAdmins>[0];

export const getAdmins = createQuery({
  name: "get-admins",
  request: async (_, query?: ListQuery) => {
    return await http.users.getUsersAdmins(query);
  },
});
