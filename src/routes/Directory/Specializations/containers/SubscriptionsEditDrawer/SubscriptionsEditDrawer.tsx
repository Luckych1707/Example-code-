import { CloseOutlined, DeleteOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Col,
  Drawer,
  Empty,
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
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { editSubscription } from "@/api/mutation/editSubscription";
import { fileUpload } from "@/api/mutation/fileUpload";
import { getSubscription } from "@/api/queries/getSubscription";
import { getSubscriptions } from "@/api/queries/getSubscriptions";
import { CreateSubscriptionSchema, GoalSchema } from "@/api/schemas";

type Props = {
  id: string;
  goals: GoalSchema[];
  onClose: () => void;
  isOpen: boolean;
};

type Image = {
  id?: string;
  filename?: string;
  data?: string;
  type?: string;
};

export const SubscriptionsEditDrawer = ({
  id,
  onClose,
  isOpen,
  goals,
}: Props) => {
  const { t } = useTranslation(["p_directory_specializations", "glossary"]);

  const queryClient = useQueryClient();

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const [fileListForUpload, setFileListForUpload] = useState<
    UploadFile<File>[]
  >([]);
  const [fileListUploaded, setFileListUploaded] = useState<Image>();

  const { data } = useQuery({
    ...getSubscription.getQueryOptions(id || ""),
  });

  const subscription = data?.result;

  const uploadFile = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const editSubscriptionsMutation = useMutation({
    ...editSubscription.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getSubscriptions.queryName],
      });
      await queryClient.refetchQueries({
        queryKey: [getSubscription.queryName],
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

  useEffect(() => {
    form.setFieldsValue({
      name: subscription?.name,
      smallPrice: subscription?.smallPrice,
      mediumPrice: subscription?.mediumPrice,
      highPrice: subscription?.highPrice,
      maxPrice: subscription?.maxPrice,
      smallAmount: subscription?.smallAmount,
      mediumAmount: subscription?.mediumAmount,
      highAmount: subscription?.highAmount,
      maxAmount: subscription?.maxAmount,
      loyaltyPoints: subscription?.loyaltyPoints,
      goals: subscription?.goals?.map((item) => item.id),
    });
  }, [form, subscription]);

  const onFinish = (data: CreateSubscriptionSchema) => {
    Promise.all(
      fileListForUpload?.map((file) =>
        uploadFile.mutateAsync(file.originFileObj as File),
      ),
    ).then((res) => {
      const imgRes = res.map((item) => item?.result?.id || "");

      editSubscriptionsMutation.mutate({
        id,
        data: {
          ...data,
          fileId: imgRes[0] || subscription?.fileId || "",
        },
      });
    });
  };

  const goalsOptions = goals?.map((item) => {
    return { label: item.name, value: item.id };
  });

  useEffect(() => {
    if (subscription && subscription.image) {
      setFileListUploaded(subscription.image);
    }
  }, [form, subscription]);

  return (
    <Drawer
      title={t("subscriptionsDrawer.editTitle")}
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
      {subscription ? (
        <Form
          name="SubscriptionsEdit"
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

          <Upload
            beforeUpload={() => {
              return false;
            }}
            fileList={fileListForUpload}
            onChange={({ fileList }) => setFileListForUpload(fileList)}
            showUploadList={false}
            multiple={true}
            maxCount={1}
          >
            {fileListForUpload.length > 0 || fileListUploaded ? null : (
              <Button>{t("glossary:actions.upload")}</Button>
            )}
          </Upload>

          <Flex vertical>
            <Flex vertical gap="8px" style={{ marginBottom: "8px" }}>
              {fileListForUpload.map((item) => (
                <Flex gap="5px" align="center">
                  <Typography.Text>{item.name}</Typography.Text>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileListForUpload((prevState) =>
                        prevState.filter((d) => d.name !== item.name),
                      );
                    }}
                  />
                </Flex>
              ))}
            </Flex>

            {fileListUploaded && (
              <Flex vertical gap="8px">
                <Flex gap="5px" align="center">
                  <Typography.Text>
                    {fileListUploaded?.filename}
                  </Typography.Text>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileListUploaded(undefined);
                    }}
                  />
                </Flex>
              </Flex>
            )}
          </Flex>
        </Form>
      ) : (
        <>{isOpen && <Empty />}</>
      )}
    </Drawer>
  );
};
