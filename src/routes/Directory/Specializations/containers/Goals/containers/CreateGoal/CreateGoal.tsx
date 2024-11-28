import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Form, Input, message } from "antd";
import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { createGoal } from "@/api/mutation/createGoal";
import { getGoals } from "@/api/queries/getGoals";

type Props = {
  onCancel: () => void;
};

export const CreateGoal = ({ onCancel }: Props) => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const createGoalMutation = useMutation({
    ...createGoal.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getGoals.queryName],
      });
      onCancel();
    },

    onError: (error) => {
      if (!isAxiosError(error))
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      const errorMessage = error.response?.data.msg;

      if (!errorMessage)
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      messageApi.open({
        type: "error",
        content: `${errorMessage}`,
      });
    },
  });

  const onSubmit = (value: { name: string }) => {
    createGoalMutation.mutate(value);
  };

  return (
    <Form form={form} onFinish={onSubmit}>
      <Flex gap="12px" style={{ marginBottom: "8px" }}>
        {contextHolder}
        <Form.Item
          style={{ margin: "0" }}
          name="name"
          rules={[
            {
              required: true,
              message: t("rules.required", {
                text: t("goalsPlaceholder"),
              }),
            },
          ]}
        >
          <Input placeholder={t("goalsPlaceholder")} />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          {t("glossary:actions.submit")}
        </Button>
        <Button onClick={onCancel}>{t("glossary:actions.cancel")}</Button>
      </Flex>
    </Form>
  );
};
