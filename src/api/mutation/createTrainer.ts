import { createMutation } from "../createMutation";
import http from "../http";
import { CreateTrainersSchema } from "../schemas";

export const createTrainer = createMutation({
  request: async (_, data: CreateTrainersSchema) => {
    return await http.trainers.postTrainers(data);
  },
});
