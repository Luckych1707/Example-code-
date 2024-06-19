import { useQuery } from "@tanstack/react-query";
import { useMatch } from "@tanstack/react-router";
import { Button, Divider, Flex, Image, Typography } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Waypoint } from "@/entities/InfoRoute/ui";
import { getCategory } from "@/widgets/Category/api/queries/getCategory";
import { getCity } from "@/widgets/Cities/api/queries/getCity";
import { getRoute } from "@/widgets/RouteDirectory/api/getRoute";
import { getWaypointsList } from "@/widgets/RouteDirectory/api/getWaypointsList";

export const InfoRoute = () => {
  const { t } = useTranslation(["p_createRoute", "glossary"]);

  const { params } = useMatch({ from: "/info-route/$id" });

  const { data: route } = useQuery({
    ...getRoute.getQueryOptions(params.id),
  });

  const { data: waypointsList } = useQuery({
    ...getWaypointsList.getQueryOptions(
      { limit: 99999, skip: 0 },
      { filters: { routeId: params.id } },
    ),
  });

  const { data: city } = useQuery({
    ...getCity.getQueryOptions(route?.cityId || ""),
    enabled: !!route,
  });

  const { data: category } = useQuery({
    ...getCategory.getQueryOptions(route?.categoryId || ""),
    enabled: !!route,
  });

  const [isAllClosed, setIsAllClosed] = useState(false);

  return (
    <Flex vertical gap="16px" style={{ width: "800px" }}>
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

          <Typography.Text>{city?.name}</Typography.Text>
        </Flex>

        <Flex vertical>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {t("field.categoryLabel")}
          </Typography.Paragraph>

          <Typography.Text>{category?.name}</Typography.Text>
        </Flex>
      </Flex>

      <Flex vertical>
        <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
          {t("field.filesLabel")}
        </Typography.Paragraph>

        <Flex gap="16px">
          <Image
            width={150}
            height={150}
            src={route?.attachment.uri}
            style={{ borderRadius: "8px" }}
          />
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

      {waypointsList?.items.map((item, index) => (
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

          <Typography.Text>{route?.durationDistance}</Typography.Text>
        </Flex>

        <Flex vertical>
          <Typography.Paragraph type="secondary" style={{ margin: 0 }}>
            {t("field.hourDurationLabel")}
          </Typography.Paragraph>

          <Typography.Text>{route?.durationTime}</Typography.Text>
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
