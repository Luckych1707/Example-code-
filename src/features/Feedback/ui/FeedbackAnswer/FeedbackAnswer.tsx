import { Button, Flex } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Form } from "@/features/Feedback/ui/FeedbackAnswer/styles";
import { Input } from "@/shared/ui/Input";

type FormValues = {
  answer: string;
};

type Props = {
  onClose: () => void;
};

export const FeedbackAnswer = ({ onClose }: Props) => {
  const { t } = useTranslation("p_feedback");

  const { control, handleSubmit } = useForm<FormValues>();

  // TODO: Поддержать интеграцию формы с бэком
  const handleFormSubmit = (values: FormValues) => {
    console.log(values);
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
