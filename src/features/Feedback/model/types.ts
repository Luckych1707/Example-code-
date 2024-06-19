export type FeedbackAnswerFormValues = {
  answer: string;
};

export type FeedbackAnswerProps = {
  feedbackId: string;
  onClose: () => void;
};
