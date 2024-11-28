import { Button, Flex, Form, Input, Select } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { timeZone } from "@/constants/timeZone";

type Props = {
  countryId: string;
  handleCreateCities: (
    name: string,
    countryId: string,
    createCountryUtcOffset: string,
  ) => void;
  setCountryId: () => void;
};

export const CreateCities = ({
  countryId,
  handleCreateCities,
  setCountryId,
}: Props) => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const [form] = Form.useForm();

  const [createCountryValue, setCreateCountryValue] = useState<string>("");
  const [createCountryUtcOffset, setCreateCountryUtcOffset] =
    useState<string>("");

  const handleCancelCreateCity = () => {
    setCountryId();
    setCreateCountryValue("");
  };

  const onFinish = () => {
    handleCreateCities(createCountryValue, countryId, createCountryUtcOffset);
  };

  return (
    <Form name="createCity" onFinish={onFinish} form={form}>
      <Flex justify="space-between">
        <Form.Item
          name="citiesName"
          rules={[
            {
              required: true,
              message: t("creteCityError"),
            },
          ]}
        >
          <Input
            placeholder={t("citiesPlaceholder")}
            maxLength={100}
            value={createCountryValue}
            onChange={(e) => setCreateCountryValue(e.target.value)}
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
            value={createCountryUtcOffset}
            onChange={setCreateCountryUtcOffset}
          />
        </Form.Item>

        <Flex gap="12px">
          <Button type="primary" htmlType="submit">
            {t("glossary:actions.submit")}
          </Button>
          <Button onClick={handleCancelCreateCity}>
            {t("glossary:actions.cancel")}
          </Button>
        </Flex>
      </Flex>
    </Form>
  );
};
