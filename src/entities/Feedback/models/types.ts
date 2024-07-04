import { FeedbackResponse } from "@/shared/api/schemas";

export type FeedbackCardProps = {
  setIsOpen: () => void;
  reviews: FeedbackResponse;
  setFeedbackItemId: (id: string | undefined) => void;
};
