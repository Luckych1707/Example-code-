import { createQuery } from "../createQuery";
import http from "../http";

export const getTrainer = createQuery({
  name: "get-trainer-id",
  request: async (_, id: string) => {
    return await http.trainers.getTrainersId(id);
  },
});
