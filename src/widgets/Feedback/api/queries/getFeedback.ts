import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

export const getFeedback = createQuery({
  name: "get-feedback-id",
  request: async (_, id: string) => {
    return await http.api.retrieveFeedbackApiV1FeedbacksFeedbackIdGet(id);
  },
});
