import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Form, Input, message } from "antd";
import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { createLanguage } from "@/api/mutation/createLanguage";
import { getLanguages } from "@/api/queries/getLanguages";

type Props = {
  onCancel: () => void;
};

export const CreateLanguage = ({ onCancel }: Props) => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const createLanguageMutation = useMutation({
    ...createLanguage.getMutationOptions(),
    onSuccess: async () => {
      onCancel();
      await queryClient.refetchQueries({
        queryKey: [getLanguages.queryName],
      });
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
    createLanguageMutation.mutate(value);
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
                text: t("languagesPlaceholder"),
              }),
            },
          ]}
        >
          <Input placeholder={t("languagesPlaceholder")} />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          {t("glossary:actions.submit")}
        </Button>
        <Button onClick={onCancel}>{t("glossary:actions.cancel")}</Button>
      </Flex>
    </Form>
  );
};
