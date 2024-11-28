import { createMutation } from "../createMutation";
import http from "../http";

type EditGoalSchema = {
  id: string;
  name: string;
};

export const editGoal = createMutation({
  request: async (_, { id, name }: EditGoalSchema) => {
    return await http.goals.putGoalsId(id, { name });
  },
});
