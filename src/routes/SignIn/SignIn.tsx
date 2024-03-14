import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { Input } from "@/components/Input";
import { Form } from "@/routes/SignIn/styled";

type FormValues = {
  email: string;
  password: string;
};

const SignIn = () => {
  const { t } = useTranslation(["p_signIn", "glossary"]);

  const { control, handleSubmit } = useForm<FormValues>();

  const handleFormSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <Flex
      justify="center"
      align="center"
      style={{
        height: "100vh",
      }}
    >
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
    </Flex>
  );
};

export default SignIn;
