import { createQuery } from "@/shared/api/createQuery";
import http from "@/shared/api/http";

type Request = Parameters<
  typeof http.api.retrieveFeedbackListApiV1FeedbacksListPost
>[0];

type ListQuery = Parameters<
  typeof http.api.retrieveFeedbackListApiV1FeedbacksListPost
>[1];

export const getFeedbackList = createQuery({
  name: "get-feedback-list",
  request: async (_, query: ListQuery, status: Request) => {
    return await http.api.retrieveFeedbackListApiV1FeedbacksListPost(
      status,
      query,
    );
  },
});
