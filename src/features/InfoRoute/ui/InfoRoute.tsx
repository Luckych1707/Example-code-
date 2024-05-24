import { useMatch } from "@tanstack/react-router";
import { Button, Divider, Flex, Image, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Waypoint } from "@/entities/InfoRoute/ui";
import { InfoRouteMock } from "@/pages/InfoRoute/model/mock";

export const InfoRoute = () => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const { params } = useMatch({ from: "/info-route/$id" });

  const route = InfoRouteMock.find((item) => item.id === params.id);

  const [isAllClosed, setIsAllClosed] = useState(false);

  return (
    <Flex vertical gap="16px">
      <Flex vertical>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          {t("field.nameLabel")}
        </Typography.Paragraph>

        <Typography.Text>{route?.name}</Typography.Text>
      </Flex>

      <Flex gap="30%">
        <Flex vertical>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {t("field.cityLabel")}
          </Typography.Paragraph>

          <Typography.Text>{route?.city}</Typography.Text>
        </Flex>

        <Flex vertical>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {t("field.categoryLabel")}
          </Typography.Paragraph>

          <Typography.Text>{route?.category}</Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          {t("field.filesLabel")}
        </Typography.Paragraph>

        <Flex gap="16px">
          {route?.files.map((item) => (
            <Image
              width={150}
              height={150}
              src={item}
              style={{ borderRadius: "8px" }}
            />
          ))}
        </Flex>
      </Flex>

      <Flex vertical>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          {t("field.descriptionLabel")}
        </Typography.Paragraph>

        <Typography.Text>{route?.description}</Typography.Text>
      </Flex>

      <Divider />

      <Flex justify="space-between">
        <Typography.Title level={3}>
          {t("field.waypoint.waypointTitle")}
        </Typography.Title>

        <Button type="primary" onClick={() => setIsAllClosed(!isAllClosed)}>
          {isAllClosed ? (
            <span>{t("field.waypoint.actions.expand")}</span>
          ) : (
            <span>{t("field.waypoint.actions.collapse")}</span>
          )}
        </Button>
      </Flex>

      {route?.waypoint.map((item, index) => (
        <Waypoint
          item={item}
          index={index}
          isAllClosed={isAllClosed}
          setIsAllClosed={() => setIsAllClosed(!isAllClosed)}
        />
      ))}

      <Divider style={{ margin: 0 }} />

      <Flex gap="30%">
        <Flex vertical>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {t("field.kmDurationLabel")}
          </Typography.Paragraph>

          <Typography.Text>{route?.kmDuration}</Typography.Text>
        </Flex>

        <Flex vertical>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {t("field.hourDurationLabel")}
          </Typography.Paragraph>

          <Typography.Text>{route?.hourDuration}</Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          {t("field.priceLabel")}
        </Typography.Paragraph>

        <Typography.Text>{`${route?.price} ₽`}</Typography.Text>
      </Flex>

      <Divider style={{ margin: 0 }} />

      <Flex gap="12px" justify="flex-end">
        <Button type="primary" htmlType="submit">
          {t("glossary:actions.editButton")}
        </Button>

        <Button danger>{t("glossary:actions.deleteButton")}</Button>
      </Flex>
    </Flex>
  );
};
