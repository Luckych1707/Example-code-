import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.trainers.getTrainersAll>[0];

export const getAllTrainers = createQuery({
  name: "get-all-trainers",
  request: async (_, query?: ListQuery) => {
    return await http.trainers.getTrainersAll(query);
  },
});
