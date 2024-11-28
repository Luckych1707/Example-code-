import { createMutation } from "../createMutation";
import http from "../http";

export const deleteSubscription = createMutation({
  request: async (_, id: string) => {
    return await http.subscriptions.deleteSubscriptionsId(id);
  },
});
