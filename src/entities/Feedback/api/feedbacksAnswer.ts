import { createMutation } from "@/shared/api/createMutation";
import http from "@/shared/api/http";
import { BodySetFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost } from "@/shared/api/schemas";

export const feedbacksAnswer = createMutation({
  request: async (
    _,
    {
      feedbackId,
      answer,
    }: {
      feedbackId: string;
      answer: BodySetFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost;
    },
  ) => {
    return await http.api.setFeedbackAnswerApiV1FeedbacksFeedbackIdAnswerPost(
      feedbackId,
      answer,
    );
  },
});
