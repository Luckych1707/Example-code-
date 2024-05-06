import { CalendarTwoTone, CompassTwoTone } from "@ant-design/icons";
import { Button, Divider, Flex, Space, Tag, Typography } from "antd";
import { useTranslation } from "react-i18next";

import { EventInfoProps } from "@/features/Calendar/model/types";

export const EventInfo = ({
  event,
  eventVariant,
  cityVariant,
  setEventVariant,
}: EventInfoProps) => {
  const { t } = useTranslation(["p_calendar", "glossary"]);

  return (
    (eventVariant === "info" || eventVariant === "delete") && (
      <Flex vertical>
        <Flex vertical gap="4px">
          <Typography.Title level={3} style={{ cursor: "pointer" }}>
            {event.title}
          </Typography.Title>
          <Flex gap="25px">
            <Flex gap="8px">
              <CalendarTwoTone twoToneColor="#1677FF" />
              <Typography.Text>{event.date}</Typography.Text>
            </Flex>
            <Flex gap="8px">
              <CompassTwoTone twoToneColor="#1677FF" />
              <Typography.Text>{event.cityName}</Typography.Text>
            </Flex>
          </Flex>
          <Typography.Paragraph type="secondary">
            {event.text}
          </Typography.Paragraph>
        </Flex>
        <Divider />
        <Flex vertical gap="12px">
          <Flex vertical gap="8px">
            <Typography.Text type="secondary">
              {t("eventDrawer.fields.routesLabel")}
            </Typography.Text>
            <Space wrap>
              {event.routes.map((item) => (
                <Tag>{item}</Tag>
              ))}
            </Space>
          </Flex>

          <Flex gap="128px">
            <Flex vertical>
              <Typography.Text>
                {t("eventDrawer.fields.latitudeLabel")}
              </Typography.Text>
              <Typography.Text>{event.latitude}</Typography.Text>
            </Flex>
            <Flex vertical>
              <Typography.Text>
                {t("eventDrawer.fields.longitudeLabel")}
              </Typography.Text>
              <Typography.Text>{event.longitude}</Typography.Text>
            </Flex>
          </Flex>
        </Flex>
        <Divider />
        {cityVariant === "info" ? (
          <Flex justify="flex-end" gap="12px">
            <Button type="primary" onClick={() => setEventVariant("edit")}>
              {t("glossary:actions.editButton")}
            </Button>
            <Button danger onClick={() => setEventVariant("delete")}>
              {t("glossary:actions.deleteButton")}
            </Button>
          </Flex>
        ) : (
          <Flex vertical gap="12px">
            <Flex gap="12px" justify="flex-end">
              <Button type="primary" danger>
                {t("glossary:actions.deleteButton")}
              </Button>
              <Button onClick={() => setEventVariant("info")}>
                {t("glossary:actions.cancelButton")}
              </Button>
            </Flex>
            <Flex justify="flex-end">
              <Typography.Text style={{ color: "#CF1322" }}>
                {t("eventDrawer.eventDeletionConfirmation")}
              </Typography.Text>
            </Flex>
          </Flex>
        )}
        ;
      </Flex>
    )
  );
};
