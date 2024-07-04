import { FeedbackStatus } from "@/shared/api/schemas";

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
  isOpen: boolean;
};

export type FiltersFormValues = {
  new: boolean;
  viewed: boolean;
  processed: boolean;
  order: string;
};

export type ListProps = {
  setIsOpen: () => void;
  setFeedbackItemId: (id: string | undefined) => void;
};
