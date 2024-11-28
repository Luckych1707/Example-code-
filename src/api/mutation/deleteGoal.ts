import { createMutation } from "../createMutation";
import http from "../http";

export const deleteGoal = createMutation({
  request: async (_, id: string) => {
    return await http.goals.deleteGoalsId(id);
  },
});
