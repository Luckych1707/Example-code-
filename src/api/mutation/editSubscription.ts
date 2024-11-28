import { CreateSubscriptionSchema } from "@/api/schemas";

import { createMutation } from "../createMutation";
import http from "../http";

type EditSubscriptionSchema = {
  id: string;
  data: CreateSubscriptionSchema;
};

export const editSubscription = createMutation({
  request: async (_, { id, data }: EditSubscriptionSchema) => {
    return await http.subscriptions.putSubscriptionsId(id, data);
  },
});
