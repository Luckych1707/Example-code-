import { CreateGoalSchema } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

export const createGoal = createMutation({
  request: async (_, data: CreateGoalSchema) => {
    return await http.goals.postGoals(data);
  },
});
