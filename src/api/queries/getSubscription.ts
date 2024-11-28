import { createQuery } from "../createQuery";
import http from "../http";

export const getSubscription = createQuery({
  name: "get-subscription-id",
  request: async (_, id: string) => {
    return await http.subscriptions.getSubscriptionsId(id);
  },
});
