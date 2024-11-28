import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Flex,
  Form,
  Input,
  message,
  Popconfirm,
  Select,
  Typography,
} from "antd";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { deleteCity } from "@/api/mutation/deleteCity";
import { editCity } from "@/api/mutation/editCity";
import { getCountriesWithCities } from "@/api/queries/getCountriesWithCities";
import { timeZone } from "@/constants/timeZone";

type Props = {
  cityId: string;
  utcOffset: string;
  name: string;
  countryId: string;
};

export const CitiesItem = ({ cityId, name, countryId, utcOffset }: Props) => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const queryClient = useQueryClient();

  const [form] = Form.useForm();

  const [messageApi, contextHolder] = message.useMessage();

  const [isEdit, setIsEdit] = useState(false);

  const editCityMutation = useMutation({
    ...editCity.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getCountriesWithCities.queryName],
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

  const deleteCitiesMutation = useMutation({
    ...deleteCity.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getCountriesWithCities.queryName],
      });
    },
  });

  useEffect(() => {
    form.setFieldValue("name", name);
    form.setFieldValue("utcOffset", utcOffset);
  }, [form, name, utcOffset]);

  const handleEditCities = (value: { name: string; utcOffset: string }) => {
    const data: {
      countryId: string;
      name: string;
      id: string;
      utcOffset: string;
    } = {
      countryId: countryId,
      name: value.name,
      utcOffset: value.utcOffset,
      id: cityId,
    };

    editCityMutation.mutate(data);
  };

  const handleDeleteCity = () => {
    deleteCitiesMutation.mutate(cityId);
  };

  return (
    <Flex vertical>
      {contextHolder}
      <Flex gap="8px" vertical>
        {isEdit ? (
          <Form form={form} onFinish={handleEditCities}>
            <Flex gap="12px">
              <Form.Item
                style={{ margin: "0" }}
                name="name"
                rules={[
                  {
                    required: true,
                    message: t("rules.required", {
                      text: t("citiesPlaceholder"),
                    }),
                  },
                ]}
              >
                <Input placeholder={t("citiesPlaceholder")} maxLength={100} />
              </Form.Item>

              <Form.Item
                style={{ margin: "0" }}
                name="utcOffset"
                rules={[
                  {
                    required: true,
                    message: t("rules.required", {
                      text: t("utcOffsetPlaceholder"),
                    }),
                  },
                ]}
              >
                <Select
                  placeholder={t("utcOffsetPlaceholder")}
                  options={timeZone}
                  showSearch
                  style={{ width: "190px" }}
                />
              </Form.Item>
              <Button type="primary" htmlType="submit">
                {t("glossary:actions.submit")}
              </Button>
              <Button onClick={() => setIsEdit(false)}>
                {t("glossary:actions.cancel")}
              </Button>
            </Flex>
          </Form>
        ) : (
          <Flex justify="space-between">
            <Flex gap="8px">
              <Typography.Text strong>{name}</Typography.Text>
              <Typography.Text>{utcOffset}</Typography.Text>
            </Flex>
            <Flex>
              <Button
                icon={<EditOutlined />}
                onClick={() => setIsEdit(true)}
                type="text"
              />
              <Popconfirm
                title={t("deleteCitiesPopconfirm.title")}
                description={t("deleteCitiesPopconfirm.text")}
                onConfirm={handleDeleteCity}
                okText={t("glossary:actions.submit")}
                cancelText={t("glossary:actions.cancel")}
              >
                <Button icon={<DeleteOutlined />} type="text" />
              </Popconfirm>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  );
};
