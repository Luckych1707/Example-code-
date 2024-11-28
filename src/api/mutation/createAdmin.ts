import { CreateNewAdmin } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

export const createAdmin = createMutation({
  request: async (_, data: CreateNewAdmin) => {
    return await http.users.postUsersAdmins(data);
  },
});
