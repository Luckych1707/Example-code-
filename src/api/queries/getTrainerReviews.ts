import { createQuery } from "../createQuery";
import http from "../http";

type ListQuery = Parameters<typeof http.reviews.getReviewsBytrainerId>[1];

export const getTrainerReviews = createQuery({
  name: "get-trainer-reviews-id",
  request: async (_, id: string, query: ListQuery) => {
    return await http.reviews.getReviewsBytrainerId(id, query);
  },
});
