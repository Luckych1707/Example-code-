import { createMutation } from "../createMutation";
import http from "../http";

export const deleteAdmin = createMutation({
  request: async (_, id: string) => {
    return await http.users.deleteUsersAdminsId(id);
  },
});
