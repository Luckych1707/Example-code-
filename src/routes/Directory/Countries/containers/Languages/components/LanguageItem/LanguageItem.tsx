import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Flex,
  Form,
  Input,
  message,
  Popconfirm,
  Space,
  Typography,
} from "antd";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { deleteLanguage } from "@/api/mutation/deleteLanguage";
import { editLanguage } from "@/api/mutation/editLanguage";
import { getLanguages } from "@/api/queries/getLanguages";

type Props = { name: string; id: string };

export const LanguageItem = ({ id, name }: Props) => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const [isEdit, setIsEdit] = useState(false);

  const editLanguageMutation = useMutation({
    ...editLanguage.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getLanguages.queryName],
      });

      setIsEdit(false);
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

  const deleteLanguageMutation = useMutation({
    ...deleteLanguage.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getLanguages.queryName],
      });
    },
  });

  useEffect(() => {
    form.setFieldValue("name", name);
  }, [form, name]);

  const handleEditLanguage = (value: { name: string }) => {
    editLanguageMutation.mutate({
      id: id,
      name: value.name,
    });
  };

  const handleDeleteLanguage = () => {
    deleteLanguageMutation.mutate(id);
  };

  return (
    <Flex justify="space-between" gap="15px" style={{ width: "400px" }}>
      {contextHolder}
      {isEdit ? (
        <Form
          form={form}
          onFinish={handleEditLanguage}
          style={{ width: "100%" }}
        >
          <Flex justify="space-between">
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
              <Input placeholder={t("languagesPlaceholder")} maxLength={100} />
            </Form.Item>

            <Space>
              <Button type="primary" htmlType="submit">
                {t("glossary:actions.submit")}
              </Button>
              <Button onClick={() => setIsEdit(false)}>
                {t("glossary:actions.cancel")}
              </Button>
            </Space>
          </Flex>
        </Form>
      ) : (
        <>
          <Typography.Text>{name}</Typography.Text>
          <Space>
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setIsEdit(true);
              }}
            />
            <Popconfirm
              title={t("deleteLanguagesPopconfirm.title")}
              description={t("deleteLanguagesPopconfirm.text")}
              onConfirm={handleDeleteLanguage}
              okText={t("glossary:actions.submit")}
              cancelText={t("glossary:actions.cancel")}
            >
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        </>
      )}
    </Flex>
  );
};
