import { Divider, Flex, Typography } from "antd";
import dayjs from "dayjs";
import { useTranslation } from "react-i18next";

import { EventCard } from "@/entities/Calendar";
import { EventListProps } from "@/widgets/Calendar/model/types";

export const EventList = ({
  setSelectedEvent,
  selectedEventDate,
  events,
}: EventListProps) => {
  const { t } = useTranslation("p_calendar");

  return (
    <Flex vertical>
      <Flex>
        <Typography.Title>
          {dayjs(selectedEventDate).locale("ru").format("D MMMM")}
        </Typography.Title>
      </Flex>

      <Divider />

      {events && events?.length > 0 ? (
        events.map((item) => (
          <EventCard event={item} setSelectedEvent={setSelectedEvent} />
        ))
      ) : (
        <Typography.Title>{t("emptyEventList")}</Typography.Title>
      )}
    </Flex>
  );
};
