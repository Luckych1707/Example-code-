import { createMutation } from "../createMutation";
import http from "../http";

export const deleteTrainer = createMutation({
  request: async (_, id: string) => {
    return await http.trainers.deleteTrainersId(id);
  },
});
