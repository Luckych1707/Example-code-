import { useQuery } from "@tanstack/react-query";
import { Flex, Form, Input, Modal, Select } from "antd";
import { useTranslation } from "react-i18next";

import { getCountries } from "@/api/queries/getCountries";
import { timeZone } from "@/constants/timeZone";
import { filterOption } from "@/utils/filterOption";

type ModalProps = {
  isOpen: boolean;
  handleCreateCities: (
    name: string,
    countryId: string,
    utcOffset: string,
  ) => void;
  onClear: () => void;
};

export const CreateCityModal = ({
  isOpen,
  onClear,
  handleCreateCities,
}: ModalProps) => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const [form] = Form.useForm();

  const { data: countriesData } = useQuery({
    ...getCountries.getQueryOptions({ limit: 99999 }),
    retry: false,
  });

  const countriesOptions = countriesData?.result?.items
    ?.filter((item) => item?.cities?.length === 0)
    .map((item) => {
      return { label: item.name || "", value: item.id || "" };
    });

  const onFinish = (value: {
    name: string;
    country: string;
    utcOffset: string;
  }) => {
    handleCreateCities(value.name, value.country || "", value.utcOffset || "");
  };

  const onSubmit = () => {
    form.submit();
  };

  return (
    <Modal
      title={t("createCityModal.title")}
      open={isOpen}
      onCancel={onClear}
      onOk={onSubmit}
      width={650}
    >
      <Form form={form} onFinish={onFinish}>
        <Flex gap="12px" justify="space-between">
          <Form.Item
            style={{ margin: "0" }}
            name="country"
            rules={[
              {
                required: true,
                message: t("rules.required", {
                  text: t("createCityModal.selectCountry"),
                }),
              },
            ]}
          >
            <Select
              placeholder={t("createCityModal.selectCountry")}
              allowClear
              showSearch
              options={countriesOptions}
              filterOption={filterOption}
              style={{ width: "190px" }}
            />
          </Form.Item>

          <Flex vertical gap="8px" style={{ width: "100%" }}>
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
                <Input
                  placeholder={t("createCityModal.cityName")}
                  maxLength={100}
                />
              </Form.Item>

              <Form.Item
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
            </Flex>
          </Flex>
        </Flex>
      </Form>
    </Modal>
  );
};
