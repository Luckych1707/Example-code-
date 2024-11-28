import { CreateSubscriptionSchema } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

export const createSubscription = createMutation({
  request: async (_, data: CreateSubscriptionSchema) => {
    return await http.subscriptions.postSubscriptions(data);
  },
});
