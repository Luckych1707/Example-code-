import { PlusOutlined, RightOutlined } from "@ant-design/icons";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  Button,
  Collapse,
  ConfigProvider,
  Empty,
  Flex,
  message,
  Space,
  Spin,
  Typography,
} from "antd";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { createCity } from "@/api/mutation/createCity";
import { getCountriesWithCities } from "@/api/queries/getCountriesWithCities";
import { CreateCities } from "@/routes/Directory/Countries/containers/Cities/containers/CreateCities";
import { CreateCityModal } from "@/routes/Directory/Countries/containers/CreateCityModal";

import { CitiesItem } from "./containers/CityItem";

export const Cities = () => {
  const { t } = useTranslation(["p_directory_countries", "glossary"]);

  const queryClient = useQueryClient();

  const [messageApi, contextHolder] = message.useMessage();

  const [isCreateCityModalOpen, setIsCreateCityModalOpen] =
    useState<boolean>(false);
  const [countryId, setCountryId] = useState<string>("");
  const [isActiveCountry, setIsActiveCountry] = useState("");

  const { data: countriesWithCitiesData, isLoading } = useQuery({
    ...getCountriesWithCities.getQueryOptions(),
    retry: false,
  });

  const createCityMutation = useMutation({
    ...createCity.getMutationOptions(),
    onSuccess: async () => {
      await queryClient.refetchQueries({
        queryKey: [getCountriesWithCities.queryName],
      });

      setIsCreateCityModalOpen(false);
      setCountryId("");
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

  const handleCreateCities = (
    name: string,
    countryId: string,
    utcOffset: string,
  ) => {
    const data = {
      countryId: countryId,
      name: name,
      utcOffset: utcOffset,
    };

    createCityMutation.mutate(data);
  };

  const countriesWithCitiesItems = countriesWithCitiesData?.result?.items?.map(
    (country) => {
      return {
        key: country.id,
        showArrow: false,
        label: (
          <Flex
            style={{ padding: "12px 16px" }}
            justify="space-between"
            onClick={() => {
              setIsActiveCountry(
                isActiveCountry === country.id ? "" : country.id || "",
              );
            }}
          >
            <Space>
              <RightOutlined
                rotate={country.id === isActiveCountry ? 90 : 0}
                onClick={() => setIsActiveCountry(countryId || "")}
              />
              {country.name}
            </Space>

            <PlusOutlined
              onClick={(event) => {
                event.stopPropagation();
                setIsActiveCountry(country.id || "");
                setCountryId(country.id || "");
              }}
            />
          </Flex>
        ),
        children: (
          <>
            {countryId === country.id && (
              <CreateCities
                countryId={countryId}
                handleCreateCities={handleCreateCities}
                setCountryId={() => setCountryId("")}
              />
            )}
            {country?.cities?.map((city) => (
              <CitiesItem
                key={city.id}
                cityId={city.id || ""}
                utcOffset={city.utcOffset || ""}
                name={city.name || ""}
                countryId={country.id || ""}
              />
            ))}
          </>
        ),
      };
    },
  );

  if (isLoading) {
    return <Spin />;
  }

  if (!countriesWithCitiesData) {
    return <Empty />;
  }

  return (
    <Flex vertical>
      {contextHolder}
      <Flex gap="24px">
        <Flex align="center" gap="12px" style={{ marginBottom: "8px" }}>
          <Typography.Title style={{ margin: "0" }}>
            {t("countriesTitle")}
          </Typography.Title>
          <Button
            icon={<PlusOutlined />}
            onClick={() => setIsCreateCityModalOpen(true)}
          />
        </Flex>
      </Flex>

      <ConfigProvider
        theme={{
          components: {
            Collapse: {
              headerPadding: 0,
            },
          },
        }}
      >
        <Collapse
          accordion
          activeKey={isActiveCountry}
          items={countriesWithCitiesItems}
          style={{ width: "600px" }}
        />
      </ConfigProvider>

      <CreateCityModal
        isOpen={isCreateCityModalOpen}
        handleCreateCities={handleCreateCities}
        onClear={() => setIsCreateCityModalOpen(false)}
      />
    </Flex>
  );
};
