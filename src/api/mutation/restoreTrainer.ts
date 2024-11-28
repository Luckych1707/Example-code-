import { createMutation } from "../createMutation";
import http from "../http";

export const restoreTrainer = createMutation({
  request: async (_, id: string) => {
    return await http.trainers.postTrainersIdRestore(id);
  },
});
