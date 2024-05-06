import { Divider, Flex, Typography } from "antd";
import dayjs from "dayjs";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import { EventCard } from "@/entities/Calendar";
import { CalendarMock } from "@/widgets/Calendar/model/mocks";
import { EventListProps } from "@/widgets/Calendar/model/types";

export const EventList = ({
  setSelectedEvent,
  selectedEventDate,
}: EventListProps) => {
  const { t } = useTranslation("p_calendar");

  const currentDate = useMemo(() => {
    return CalendarMock.filter((item) => item.date === selectedEventDate);
  }, [selectedEventDate]);

  return (
    <Flex vertical>
      <Flex>
        <Typography.Title>
          {dayjs(selectedEventDate).locale("ru").format("D MMMM")}
        </Typography.Title>
      </Flex>

      <Divider />

      {currentDate.length > 0 ? (
        currentDate.map((item) => (
          <EventCard event={item} setSelectedEvent={setSelectedEvent} />
        ))
      ) : (
        <Typography.Title>{t("emptyEventList")}</Typography.Title>
      )}
    </Flex>
  );
};
