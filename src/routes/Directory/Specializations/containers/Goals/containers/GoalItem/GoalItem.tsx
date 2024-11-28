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

import { deleteGoal } from "@/api/mutation/deleteGoal";
import { editGoal } from "@/api/mutation/editGoal";
import { getGoals } from "@/api/queries/getGoals";

type Props = { name: string; id: string };

export const GoalItem = ({ id, name }: Props) => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const [isEdit, setIsEdit] = useState(false);

  const deleteGoalsMutation = useMutation({
    ...deleteGoal.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getGoals.queryName],
      });
    },
  });

  const editGoalsMutation = useMutation({
    ...editGoal.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getGoals.queryName],
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

  useEffect(() => {
    form.setFieldValue("name", name);
  }, [form, name]);

  const handleDeleteGoals = () => {
    deleteGoalsMutation.mutate(id || "");
  };

  const handleEditGoals = (value: { name: string }) => {
    editGoalsMutation.mutate({
      id: id || "",
      name: value.name,
    });
  };

  return (
    <Flex>
      {contextHolder}
      {isEdit ? (
        <Form form={form} onFinish={handleEditGoals}>
          <Flex justify="space-between" gap="15px" style={{ width: "400px" }}>
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
              <Input placeholder={t("goalsPlaceholder")} maxLength={100} />
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
        <Flex justify="space-between" style={{ width: "400px" }}>
          <Typography.Text>{name}</Typography.Text>
          <Space>
            <Button icon={<EditOutlined />} onClick={() => setIsEdit(true)} />
            <Popconfirm
              title={t("deleteGoalsPopconfirm.title")}
              description={t("deleteGoalsPopconfirm.text")}
              onConfirm={handleDeleteGoals}
              okText={t("glossary:actions.submit")}
              cancelText={t("glossary:actions.cancel")}
            >
              <Button icon={<DeleteOutlined />} />
            </Popconfirm>
          </Space>
        </Flex>
      )}
    </Flex>
  );
};
