import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Col,
  Drawer,
  Flex,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Typography,
  Upload,
} from "antd";
import { UploadFile } from "antd/es/upload/interface";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createSubscription } from "@/api/mutation/createSubscription";
import { fileUpload } from "@/api/mutation/fileUpload";
import { getSubscriptions } from "@/api/queries/getSubscriptions";
import { CreateSubscriptionSchema, GoalSchema } from "@/api/schemas";

type Props = {
  goals: GoalSchema[];
  onClose: () => void;
  isOpen: boolean;
};

export const SubscriptionsCreateDrawer = ({
  onClose,
  isOpen,
  goals,
}: Props) => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const queryClient = useQueryClient();

  const [messageApi, contextHolder] = message.useMessage();

  const [fileList, setFileList] = useState<UploadFile<File>[]>([]);

  const [form] = Form.useForm();

  const createSubscriptionsMutation = useMutation({
    ...createSubscription.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getSubscriptions.queryName],
      });
      onClose();
    },
    onError: (error) => {
      if (!isAxiosError(error))
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      const requiredImageError = error.response?.data?.data?.filter(
        (item: { field: string; reason: string }) => item.field === "fileId",
      );

      if (!requiredImageError) return;

      for (const item of requiredImageError) {
        const reason = item.reason;

        messageApi.open({
          type: "error",
          content: `${reason === "required" && t("error.requiredImage")}`,
        });
      }
    },
  });

  const uploadFile = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const onFinish = (values: CreateSubscriptionSchema) => {
    Promise.all(
      fileList?.map((file) =>
        uploadFile.mutateAsync(file.originFileObj as File),
      ),
    ).then((res) => {
      const imgRes = res.map((item) => item?.result?.id || "");

      createSubscriptionsMutation.mutate({
        ...values,
        fileId: imgRes[0],
      });
    });
  };

  const goalsOptions = goals.map((item) => {
    return { label: item.name, value: item.id };
  });

  return (
    <Drawer
      title={t("subscriptionsDrawer.createTitle")}
      width={720}
      open={isOpen}
      closeIcon={false}
      maskClosable={false}
      footer={
        <Button type="primary" onClick={() => form.submit()}>
          {t("glossary:actions.submit")}
        </Button>
      }
      extra={<Button onClick={onClose} type="text" icon={<CloseOutlined />} />}
    >
      {contextHolder}
      <Form
        name="SubscriptionsCreate"
        layout="vertical"
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          name="name"
          label={t("subscriptionsDrawer.name")}
          rules={[
            {
              required: true,
              message: t("subscriptionsDrawer.rules.required", {
                text: t("subscriptionsDrawer.name"),
              }),
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="smallPrice"
              label={t("subscriptionsDrawer.price.small")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.price.small"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="smallAmount"
              label={t("subscriptionsDrawer.amount.small")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.amount.small"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="mediumPrice"
              label={t("subscriptionsDrawer.price.medium")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.price.medium"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="mediumAmount"
              label={t("subscriptionsDrawer.amount.medium")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.amount.medium"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="highPrice"
              label={t("subscriptionsDrawer.price.high")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.price.high"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="highAmount"
              label={t("subscriptionsDrawer.amount.high")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.amount.high"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="maxPrice"
              label={t("subscriptionsDrawer.price.max")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.price.max"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="maxAmount"
              label={t("subscriptionsDrawer.amount.max")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.amount.max"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="loyaltyPoints"
              label={t("subscriptionsDrawer.loyaltyPoints")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.loyaltyPoints"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="goals"
              label={t("subscriptionsDrawer.goals")}
              rules={[
                {
                  required: true,
                  message: t("subscriptionsDrawer.rules.required", {
                    text: t("subscriptionsDrawer.goals"),
                  }),
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                mode="multiple"
                options={goalsOptions}
              />
            </Form.Item>
          </Col>
        </Row>

        <Flex vertical gap="24px">
          <Upload
            beforeUpload={() => {
              return false;
            }}
            fileList={fileList}
            onChange={({ fileList }) => setFileList(fileList)}
            showUploadList={false}
            multiple={true}
            maxCount={3}
          >
            {fileList?.length > 0 ? null : (
              <Button>{t("glossary:actions.upload")}</Button>
            )}
          </Upload>

          <Flex vertical>
            <Flex vertical gap="8px">
              {fileList.map((item) => (
                <Flex gap="5px" align="center">
                  <Typography.Text>{item.name}</Typography.Text>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileList((prevState) =>
                        prevState.filter((file) => file.name !== item.name),
                      );
                    }}
                  />
                </Flex>
              ))}
            </Flex>
          </Flex>
        </Flex>
      </Form>
    </Drawer>
  );
};
