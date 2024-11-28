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
import type { UploadFile } from "antd/es/upload/interface";
import { isAxiosError } from "axios";
import dayjs from "dayjs";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createCertificate } from "@/api/mutation/createCertificate";
import { createTimeSlots } from "@/api/mutation/createTimeSlots";
import { createTrainer } from "@/api/mutation/createTrainer";
import { fileUpload } from "@/api/mutation/fileUpload";
import { getCertificates } from "@/api/queries/getCertificates";
import { getTrainers } from "@/api/queries/getTrainers";
import { CreateTrainersSchema } from "@/api/schemas";
import { DynamicCertificates } from "@/components/DynamicCertificates";
import { ScheduleModal } from "@/routes/TrainersList/containers/components/ScheduleModal";
import {
  ScheduleItem,
  WeekDay,
} from "@/routes/TrainersList/containers/components/ScheduleModal/types";
import { filterOption } from "@/utils/filterOption";

import { useCreateTrainersOptions } from "../../hooks";

type Props = {
  onClose: () => void;
  isOpen: boolean;
};

export const CreateTrainerDrawer = ({ onClose, isOpen }: Props) => {
  const { t } = useTranslation(["c_trainer", "glossary"]);

  const [form] = Form.useForm();

  const newCertificates = Form.useWatch("newCertificates", form);

  const [fileList, setFileList] = useState<UploadFile<File>[]>([]);
  const [currentCitiesOptions, setCurrentCitiesOptions] = useState<
    { label: string; value: string }[] | undefined
  >();
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const [messageApi, contextHolder] = message.useMessage();

  const {
    certificatesOptions,
    countriesWithCitiesOptions,
    languagesOptions,
    subscriptionsOptions,
    countriesWithCities,
    countriesOptions,
  } = useCreateTrainersOptions();

  const queryClient = useQueryClient();

  const uploadFile = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const uploadCertificates = useMutation({
    ...createCertificate.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getCertificates.queryName],
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

  const uploadTimeSlots = useMutation({
    ...createTimeSlots.getMutationOptions(),
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

  const createTrainerMutation = useMutation({
    ...createTrainer.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: [getTrainers.queryName] });

      onClose();
    },

    onError: (error) => {
      if (!isAxiosError(error))
        return messageApi.open({
          type: "error",
          content: t("glossary:baseError"),
        });

      const requiredImageError = error.response?.data?.data?.filter(
        (item: { field: string; reason: string }) => item.field === "images",
      );

      if (!requiredImageError) return;

      for (const item of requiredImageError) {
        const reason = item.reason;

        messageApi.open({
          type: "error",
          content: `${
            reason === "array.includesRequiredKnowns"
              ? t("error.requiredImage")
              : t("error.fileSize")
          }`,
        });
      }
    },
  });

  const onFinish = async (
    values: CreateTrainersSchema & {
      schedule: ScheduleItem;
      countryOfTraining: string;
    },
  ) => {
    const certificatesIds = await Promise.all(
      (newCertificates || []).map((item: { name: string }) =>
        uploadCertificates.mutateAsync(item),
      ),
    );

    const imagesIds = await Promise.all(
      fileList?.map((file) =>
        uploadFile.mutateAsync(file.originFileObj as File),
      ),
    );

    const imgRes = imagesIds.map((item) => item?.result?.id || "");
    const certificatesRes = certificatesIds.map(
      (item) => item?.result?.id || "",
    );

    createTrainerMutation.mutate(
      {
        firstName: values?.firstName,
        lastName: values?.lastName,
        email: values?.email,
        experience: values?.experience,
        gender: values?.gender,
        phone: values?.phone,
        about: values?.about,
        countryId: values?.countryId,
        cityId: values?.cityId,
        subscriptionId: values?.subscriptionId,
        languages: values?.languages,
        images: [...imgRes],
        certificates: [...certificatesRes, ...values.certificates],
      },
      {
        onSuccess: (response) => {
          const currentSchedule = Object.fromEntries(
            Object.keys(values.schedule).map((key) => {
              const _key = key as WeekDay;
              return [
                _key,
                values.schedule[_key].map((it) => ({
                  from: dayjs(it[0]).get("hours"),
                  to: dayjs(it[1]).get("hours"),
                })),
              ];
            }),
          );

          uploadTimeSlots.mutate({
            id: response?.result?.id || "",
            data: currentSchedule,
          });
        },
      },
    );
  };

  const handleSelectCountry = () => {
    setCurrentCitiesOptions(
      countriesWithCities
        ?.filter(
          (item) => item.id === form.getFieldValue("countryOfTraining"),
        )[0]
        ?.cities?.map((item) => ({
          label: item.name || "",
          value: item.id || "",
        })),
    );

    form.setFieldValue("cityId", undefined);
  };

  return (
    <Drawer
      title={t("create.title")}
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
        form={form}
        name="trainerCreate"
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="firstName"
              label={t("fields.firstName")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.firstName"),
                  }),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="lastName"
              label={t("fields.lastName")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.lastName"),
                  }),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="email"
              label={t("fields.email")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.email"),
                  }),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="countryId"
              label={t("fields.countryOfBirth")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.countryOfBirth"),
                  }),
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                options={countriesOptions}
                filterOption={filterOption}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="experience"
              label={t("fields.experience")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.experience"),
                  }),
                },
              ]}
            >
              <InputNumber controls={false} style={{ width: "100%" }} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="gender"
              label={t("fields.gender")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.gender"),
                  }),
                },
              ]}
            >
              <Select>
                <Select.Option value="male">
                  {t("glossary:genderOptions.male")}
                </Select.Option>
                <Select.Option value="female">
                  {t("glossary:genderOptions.female")}
                </Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="phone"
              label={t("fields.phone")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.phone"),
                  }),
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="languages"
              label={t("fields.languages")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.languages"),
                  }),
                },
              ]}
            >
              <Select mode="multiple" allowClear options={languagesOptions} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              name="about"
              label={t("fields.about")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.about"),
                  }),
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="countryOfTraining"
              label={t("fields.countryOfTraining")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.countryOfTraining"),
                  }),
                },
              ]}
            >
              <Select
                showSearch
                allowClear
                options={countriesWithCitiesOptions}
                filterOption={filterOption}
                onChange={handleSelectCountry}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="cityId"
              label={t("fields.city")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.city"),
                  }),
                },
              ]}
            >
              <Select
                disabled={!currentCitiesOptions}
                options={currentCitiesOptions}
              />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col span={12}>
            <Form.Item
              name="subscriptionId"
              label={t("fields.subscription")}
              rules={[
                {
                  required: true,
                  message: t("fields.rules.required", {
                    text: t("fields.subscription"),
                  }),
                },
              ]}
            >
              <Select allowClear options={subscriptionsOptions} />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name="certificates"
              label={t("fields.certificates")}
              rules={[
                {
                  required: !newCertificates || newCertificates.length === 0,
                  message: t("error.requiredCertificates"),
                },
              ]}
            >
              <Select
                mode="multiple"
                allowClear
                options={certificatesOptions}
              />
            </Form.Item>
            <DynamicCertificates />
          </Col>
        </Row>

        <Form.Item
          name={"schedule"}
          rules={[
            {
              required: true,
              message: t("fields.rules.required", {
                text: t("fields.schedule"),
              }),
            },
          ]}
        >
          <Button
            style={{ marginBottom: "8px" }}
            type="primary"
            onClick={() => setIsScheduleModalOpen(true)}
          >
            {t("fields.schedule")}
          </Button>
          {isScheduleModalOpen && (
            <ScheduleModal
              defaultValue={form.getFieldValue("schedule")}
              isOpen={isScheduleModalOpen}
              onClear={() => setIsScheduleModalOpen(false)}
            />
          )}
        </Form.Item>

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
            {fileList?.length >= 3 ? null : (
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
