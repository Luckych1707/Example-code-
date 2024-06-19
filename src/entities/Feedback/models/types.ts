import { FeedbackResponse } from "@/shared/api/schemas";

export type FeedbackCardProps = {
  reviews: FeedbackResponse;
  setFeedbackItemId: (id: string | undefined) => void;
};
