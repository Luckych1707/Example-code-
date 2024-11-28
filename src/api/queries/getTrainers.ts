import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.trainers.getTrainers>[0];

export const getTrainers = createQuery({
  name: "get-trainers",
  request: async (_, query?: ListQuery) => {
    return await http.trainers.getTrainers(query);
  },
});
