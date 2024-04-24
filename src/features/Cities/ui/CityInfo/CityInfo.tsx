import { Button, Divider, Flex, Image, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { CityInfoType } from "@/features/Cities/model/types";

export const CityInfo = ({
  city,
  setCityVariant,
  cityVariant,
}: CityInfoType) => {
  const { t } = useTranslation(["p_city", "glossary"]);

  return (
    <Flex vertical>
      <Flex vertical gap="12px">
        <Typography.Title level={4}>{city.title}</Typography.Title>
        <Image style={{ borderRadius: "8px" }} src={city.img} />
        <Typography.Text>{city.text}</Typography.Text>
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
            <Button type="primary" danger>
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
