import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";

export const feedbacksViewed = createMutation({
  request: async (_, feedbackId: string) => {
    return await http.api.setFeedbackAsViewedApiV1FeedbacksFeedbackIdViewedPost(
      feedbackId,
    );
  },
});
