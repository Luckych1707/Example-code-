import { FeedbackStatus } from "@/shared/types/types";

export type FeedbackItemDrawerType = {
  email: string;
  date: string;
  id: string;
  status: FeedbackStatus;
  text: string;
  deviceName: string;
  osVersion: string;
  appVersion: string;
};

export type CardDrawerProps = {
  onClose: () => void;
  id: string;
};

export type FiltersFormValues = {
  new: boolean;
  viewed: boolean;
  processed: boolean;
  date: string;
};

export type ListProps = {
  setFeedbackItemId: (id: string | undefined) => void;
};
