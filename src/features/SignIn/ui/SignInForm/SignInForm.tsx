import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { SignInFormValues } from "@/pages/SignIn/models/types";
import { Form } from "@/pages/SignIn/ui/styled";
import { Input } from "@/shared/ui/Input";

export const SignInForm = () => {
  const { t } = useTranslation(["p_signIn", "glossary"]);

  const { control, handleSubmit } = useForm<SignInFormValues>();

  const handleFormSubmit = (values: SignInFormValues) => {
    console.log(values);
  };
  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
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
