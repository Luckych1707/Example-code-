import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Form, Input, message, Typography } from "antd";
import { isAxiosError } from "axios";
import { useTranslation } from "react-i18next";

import { login } from "@/api/mutation/login";
import { getMe } from "@/api/queries/getMe";

export type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { t } = useTranslation(["p_login", "glossary"]);

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const queryClient = useQueryClient();

  const loginMutation = useMutation({
    ...login.getMutationOptions(),
    onSuccess: async (response) => {
      localStorage.setItem("accessToken", `${response.result?.access}`);
      localStorage.setItem("refreshToken", `${response.result?.refresh}`);

      await queryClient.refetchQueries({ queryKey: [getMe.queryName] });
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

  const handleSubmit = (data: FormValues) => {
    loginMutation.mutate({ email: data.email, password: data.password });
  };

  return (
    <Flex justify="center" align="center" style={{ height: "100vh" }}>
      {contextHolder}
      <Flex vertical gap="middle">
        <Flex justify="center">
          <Typography.Title level={2}>{t("login")}</Typography.Title>
        </Flex>

        <Form form={form} name="login-form" onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder={t("email")} size="large" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input.Password placeholder={t("password")} size="large" />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              loading={loginMutation.isPending}
            >
              {t("signIn")}
            </Button>
          </Form.Item>
        </Form>
      </Flex>
    </Flex>
  );
};

export default SignIn;
