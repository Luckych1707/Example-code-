import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button, Divider, Flex, Image, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { deleteCity } from "@/entities/Cities/api/deleteCity";
import { CityInfoType } from "@/features/Cities/model/types";
import { getCitiesList } from "@/shared/api/handBooks/queries/getCities";

export const CityInfo = ({
  city,
  setCityVariant,
  cityVariant,
  onClose,
}: CityInfoType) => {
  const { t } = useTranslation(["p_city", "glossary"]);

  const queryClient = useQueryClient();

  const deleteCityMutation = useMutation({
    ...deleteCity.getMutationOptions(),
    onSuccess: async () => {
      onClose();
      await queryClient.invalidateQueries({
        queryKey: [getCitiesList.queryName],
      });
    },
  });

  const handelDeleteCity = () => {
    deleteCityMutation.mutate(city?.id || "");
  };

  return (
    <Flex vertical>
      <Flex vertical gap="12px">
        <Typography.Title level={4}>{city?.name}</Typography.Title>

        <Image style={{ borderRadius: "8px" }} src={city?.image.uri} />

        <Typography.Text>{city?.description}</Typography.Text>
      </Flex>

      <Divider />

      {cityVariant === "info" ? (
        <Flex gap="12px" justify="flex-end">
          <Button type="primary" onClick={() => setCityVariant("edit")}>
            {t("glossary:actions.editButton")}
          </Button>

          <Button danger onClick={() => setCityVariant("delete")}>
            {t("glossary:actions.deleteButton")}
          </Button>
        </Flex>
      ) : (
        <Flex vertical gap="12px">
          <Flex gap="12px" justify="flex-end">
            <Button type="primary" danger onClick={handelDeleteCity}>
              {t("glossary:actions.deleteButton")}
            </Button>

            <Button onClick={() => setCityVariant("info")}>
              {t("glossary:actions.cancelButton")}
            </Button>
          </Flex>

          <Flex justify="flex-end">
            <Typography.Text style={{ color: "#CF1322" }}>
              {t("cityDrawer.cityDeletionConfirmation")}
            </Typography.Text>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};
