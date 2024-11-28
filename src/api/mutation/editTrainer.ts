import { createMutation } from "../createMutation";
import http from "../http";
import { CreateTrainersSchema } from "../schemas";

type EditTrainerSchema = {
  id: string;
  data: CreateTrainersSchema;
};

export const editTrainer = createMutation({
  request: async (_, { id, data }: EditTrainerSchema) => {
    return await http.trainers.putTrainersId(id, data);
  },
});
