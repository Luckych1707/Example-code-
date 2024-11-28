import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.goals.getGoals>[0];

export const getGoals = createQuery({
  name: "get-goals",
  request: async (_, query?: ListQuery) => {
    return await http.goals.getGoals(query);
  },
});
