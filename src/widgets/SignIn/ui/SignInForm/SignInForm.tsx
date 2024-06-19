import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, message, Typography } from "antd";
import { isAxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { login } from "@/entities/SignIn/api/login";
import { SignInFormValues } from "@/pages/SignIn/models/types";
import { Form } from "@/pages/SignIn/ui/styled";
import { getMe } from "@/shared/api/handBooks/queries/getMe";
import { Input } from "@/shared/ui/Input";

export const SignInForm = () => {
  const { t } = useTranslation(["p_signIn", "glossary"]);

  const { control, handleSubmit } = useForm<SignInFormValues>();

  const queryClient = useQueryClient();

  const [messageApi, contextHolder] = message.useMessage();

  const loginMutation = useMutation({
    ...login.getMutationOptions(),
    onSuccess: async (response) => {
      localStorage.setItem("accessToken", `${response.accessToken}`);
      localStorage.setItem("refreshToken", `${response.refreshToken}`);
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

  const handleFormSubmit = (values: SignInFormValues) => {
    loginMutation.mutate({ email: values.email, password: values.password });
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      {contextHolder}
      <Typography.Title level={3} style={{ margin: "0" }}>
        {t("glossary:mainTitle")}
      </Typography.Title>
      <Typography.Title level={2} style={{ margin: "0" }}>
        {t("title")}
      </Typography.Title>

      <Input.Controller
        control={control}
        name="email"
        prefix={<MailOutlined />}
        label={t("form.emailLabel")}
        placeholder={t("form.emailPlaceholder")}
      />
      <Input.Controller
        control={control}
        name="password"
        prefix={<LockOutlined />}
        label={t("form.passwordLabel")}
        placeholder={t("form.passwordPlaceholder")}
      />
      <Button htmlType="submit" type="primary">
        {t("signIn")}
      </Button>
    </Form>
  );
};
