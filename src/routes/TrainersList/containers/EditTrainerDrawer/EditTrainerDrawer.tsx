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
  Spin,
  Typography,
  Upload,
} from "antd";
import type { UploadFile } from "antd/es/upload/interface";
import { isAxiosError } from "axios";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { createCertificate } from "@/api/mutation/createCertificate";
import { createTimeSlots } from "@/api/mutation/createTimeSlots";
import { editTrainer } from "@/api/mutation/editTrainer";
import { fileUpload } from "@/api/mutation/fileUpload";
import { getCertificates } from "@/api/queries/getCertificates";
import { getTimeSlots } from "@/api/queries/getTimeSlots";
import { getTrainer } from "@/api/queries/getTrainer";
import { getTrainers } from "@/api/queries/getTrainers";
import { CreateTrainersSchema } from "@/api/schemas";
import { DynamicCertificates } from "@/components/DynamicCertificates";
import { InfoScheduleModal } from "@/routes/TrainersList/containers/components/InfoScheduleModal";
import { ScheduleModal } from "@/routes/TrainersList/containers/components/ScheduleModal";
import {
  ScheduleItem,
  WeekDay,
} from "@/routes/TrainersList/containers/components/ScheduleModal/types";
import { filterOption } from "@/utils/filterOption";

import { useCreateTrainersOptions } from "../../hooks";

type Images = {
  id?: string;
  filename?: string;
  data?: string;
  type?: string;
}[];

type Props = {
  onClose: () => void;
  isOpen: boolean;
  id: string;
};

export const EditTrainerDrawer = ({ onClose, isOpen, id }: Props) => {
  const { t } = useTranslation(["c_trainer", "glossary"]);

  const [fileListForUpload, setFileListForUpload] = useState<
    UploadFile<File>[]
  >([]);
  const [fileListUploaded, setFileListUploaded] = useState<Images>([]);
  const [currentCitiesOptions, setCurrentCitiesOptions] = useState<
    { label: string; value: string }[] | undefined
  >();
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState(false);

  const queryClient = useQueryClient();

  const [messageApi, contextHolder] = message.useMessage();

  const [form] = Form.useForm();

  const newCertificates = Form.useWatch("newCertificates", form);

  const { data, isLoading } = useQuery({
    ...getTrainer.getQueryOptions(id || ""),
  });

  const trainer = data?.result;

  const {
    certificatesOptions,
    countriesWithCitiesOptions,
    subscriptionsOptions,
    languagesOptions,
    countriesWithCities,
    countriesOptions,
  } = useCreateTrainersOptions();

  const { data: schedule } = useQuery({
    ...getTimeSlots.getQueryOptions(trainer?.id || "", {
      month: dayjs(new Date())
        .month(dayjs().month() + 1)
        .date(1)
        .format("YYYY-MM"),
    }),
  });
  const hasSchedule = Object.values(schedule?.result?.items || {}).some(
    (it) => it.length > 0,
  );

  const uploadFile = useMutation({
    ...fileUpload.getMutationOptions(),
  });

  const uploadTimeSlots = useMutation({
    ...createTimeSlots.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: [getTimeSlots.queryName] });
      onClose();
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

  // Достать isPending и блокировать поля и кнопку сохранения
  // Возможно у кнопки и у полей есть атрибут isLoading или readonly. На крайняк - disabled
  const editTrainerMutation = useMutation({
    ...editTrainer.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({ queryKey: [getTrainers.queryName] });
      await queryClient.refetchQueries({ queryKey: [getTrainer.queryName] });
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
    values: CreateTrainersSchema & { schedule: ScheduleItem },
  ) => {
    const fileList = fileListUploaded.map((file) => file.id || "");

    const certificatesIds = await Promise.all(
      (newCertificates || []).map((item: { name: string }) =>
        uploadCertificates.mutateAsync(item),
      ),
    );

    const imagesIds = await Promise.all(
      (fileListForUpload || []).map((file) =>
        uploadFile.mutateAsync(file.originFileObj as File),
      ),
    );

    const imgRes = imagesIds.map((item) => item?.result?.id || "");
    const certificatesRes = certificatesIds.map(
      (item) => item?.result?.certificate?.id || "",
    );

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

    editTrainerMutation.mutate({
      id,
      data: {
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
        images: [...fileList, ...imgRes],
        certificates: [...certificatesRes, ...values.certificates],
      },
    });

    if (Object.values(currentSchedule).length > 0) {
      uploadTimeSlots.mutate({
        id: trainer?.id || "",
        data: currentSchedule,
      });
    }
  };

  useEffect(() => {
    form.setFieldsValue({
      firstName: trainer?.firstName,
      lastName: trainer?.lastName,
      email: trainer?.email,
      experience: trainer?.experience,
      gender: trainer?.gender,
      phone: trainer?.phone,
      about: trainer?.about,
      countryId: trainer?.country?.id,
      countryOfTraining: trainer?.city?.countryId,
      cityId: trainer?.city?.id,
      subscriptionId: trainer?.subscription?.id,
      languages: trainer?.dictionary?.languages?.map((item) => item.id),
      certificates: trainer?.certificates?.map((item) => item.id),
      schedule:
        (Object.values(schedule?.result?.items || {}).flat().length || 0) <=
          0 && [],
    });

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

    if (trainer && trainer.images) {
      setFileListUploaded(trainer.images);
    }
  }, [form, trainer, schedule]);

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

  if (isLoading) {
    return <Spin />;
  }

  if (!trainer) {
    return <Empty />;
  }

  return (
    <Drawer
      title={t("edit.title")}
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
      <Form
        form={form}
        name="trainerCreate"
        layout="vertical"
        onFinish={onFinish}
      >
        {contextHolder}
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
                allowClear
                showSearch
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
                  required: !(
                    newCertificates?.length && newCertificates?.length > 0
                  ),
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
          {isScheduleModalOpen && hasSchedule && (
            <InfoScheduleModal
              trainerId={trainer.id}
              isOpen={isScheduleModalOpen}
              onClear={() => setIsScheduleModalOpen(false)}
            />
          )}
          {isScheduleModalOpen && !hasSchedule && (
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
            fileList={fileListForUpload}
            onChange={({ fileList }) => setFileListForUpload(fileList)}
            showUploadList={false}
            multiple={true}
            maxCount={3 - fileListUploaded.length}
          >
            {fileListForUpload.length + fileListUploaded?.length >= 3 ? null : (
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

            <Flex vertical gap="8px">
              {fileListUploaded?.map((item) => (
                <Flex gap="5px" align="center">
                  <Typography.Text>{item.filename}</Typography.Text>
                  <Button
                    icon={<DeleteOutlined />}
                    onClick={() => {
                      setFileListUploaded((prevState) =>
                        prevState.filter((d) => d.id !== item.id),
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
