import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.subscriptions.getSubscriptions>[0];

export const getSubscriptions = createQuery({
  name: "get-subscriptions",
  request: async (_, query?: ListQuery) => {
    return await http.subscriptions.getSubscriptions(query);
  },
});
