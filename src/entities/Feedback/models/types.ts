import { FeedbackStatus } from "@/shared/types/types";

export type FeedbackCardProps = {
  reviews: {
    email: string;
    id: string;
    date: string;
    status: FeedbackStatus;
    text: string;
  };
  setFeedbackItemId: (id: string | undefined) => void;
};
