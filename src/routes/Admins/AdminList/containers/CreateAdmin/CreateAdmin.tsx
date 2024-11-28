import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Flex, Form, Input, Modal } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createAdmin } from "@/api/mutation/createAdmin";
import { getAdmins } from "@/api/queries/getAdmins";
import { CreateNewAdmin } from "@/api/schemas";

export const CreateAdmin = () => {
  const { t } = useTranslation("p_usersList");

  const queryClient = useQueryClient();

  const [isOpen, setIsOpen] = useState(false);

  const [form] = Form.useForm();

  const createAdminMutation = useMutation({
    ...createAdmin.getMutationOptions(),
    onSuccess: async () => {
      setIsOpen(false);
      form.resetFields();
      await queryClient.refetchQueries({
        queryKey: [getAdmins.queryName],
      });
    },
  });

  const onSubmit = (data: CreateNewAdmin) => {
    createAdminMutation.mutate({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    });
  };

  return (
    <Flex justify="flex-end" style={{ padding: "12px" }}>
      <Button type="primary" onClick={() => setIsOpen(true)}>
        {t("admin.createAdminButton")}
      </Button>
      <Modal
        title={t("admin.createAdminModal.title")}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onOk={form.submit}
      >
        <Form
          name="AdminCreate"
          layout="vertical"
          onFinish={onSubmit}
          form={form}
        >
          <Form.Item
            name={"firstName"}
            rules={[
              {
                required: true,
                message: t("admin.createAdminModal.rules.required", {
                  text: t("admin.createAdminModal.firstNamePlaceholder"),
                }),
              },
            ]}
          >
            <Input
              placeholder={t("admin.createAdminModal.firstNamePlaceholder")}
            />
          </Form.Item>
          <Form.Item
            name={"lastName"}
            rules={[
              {
                required: true,
                message: t("admin.createAdminModal.rules.required", {
                  text: t("admin.createAdminModal.lastNamePlaceholder"),
                }),
              },
            ]}
          >
            <Input
              placeholder={t("admin.createAdminModal.lastNamePlaceholder")}
            />
          </Form.Item>
          <Form.Item
            name={"email"}
            rules={[
              {
                required: true,
                message: t("admin.createAdminModal.rules.required", {
                  text: t("admin.createAdminModal.emailPlaceholder"),
                }),
              },
            ]}
          >
            <Input placeholder={t("admin.createAdminModal.emailPlaceholder")} />
          </Form.Item>
        </Form>
      </Modal>
    </Flex>
  );
};
