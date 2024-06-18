import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { feedbacksAnswer } from "@/entities/Feedback/api/feedbacksAnswer";
import {
  FeedbackAnswerFormValues,
  FeedbackAnswerProps,
} from "@/features/Feedback/model/types";
import { Form } from "@/features/Feedback/ui/FeedbackAnswer/styles";
import { getFeedbackList } from "@/shared/api/handBooks/queries/getFeedbacks";
import { Input } from "@/shared/ui/Input";

export const FeedbackAnswer = ({
  feedbackId,
  onClose,
}: FeedbackAnswerProps) => {
  const { t } = useTranslation("p_feedback");

  const queryClient = useQueryClient();

  const { control, handleSubmit } = useForm<FeedbackAnswerFormValues>();

  const answerMutation = useMutation({
    ...feedbacksAnswer.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [getFeedbackList.queryName],
      });
    },
  });

  const handleFormSubmit = (values: FeedbackAnswerFormValues) => {
    answerMutation.mutate({ feedbackId: feedbackId, answer: values });
    onClose();
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Flex vertical gap="20px">
        <Input.TextArea.Controller
          control={control}
          name="answer"
          label={t("feedbackItemDrawer.answerLabel")}
          placeholder={t("feedbackItemDrawer.answerPlaceholder")}
        />

        <Flex justify="flex-end">
          <Button type="primary" htmlType="submit">
            {t("feedbackItemDrawer.submit")}
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
};
