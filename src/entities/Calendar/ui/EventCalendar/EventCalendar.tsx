import { PlusOutlined } from "@ant-design/icons";
import { Button, Divider, Flex } from "antd";
import { Dayjs } from "dayjs";
import { useTranslation } from "react-i18next";

import { EventCalendarProps } from "@/entities/Calendar/module/types";
import { EventCalendar as EventCalendarComponent } from "@/features/Calendar";

export const EventCalendar = ({
  setIsCreateEvent,
  setSelectedEventDate,
}: EventCalendarProps) => {
  const { t } = useTranslation("p_calendar");

  return (
    <Flex vertical>
      <Flex vertical gap="32px">
        <EventCalendarComponent
          onChange={(date: Dayjs) =>
            setSelectedEventDate(date.format("YYYY-MM-DD"))
          }
        />

        <Flex>
          <Button
            icon={<PlusOutlined />}
            type="primary"
            onClick={() => setIsCreateEvent(true)}
          >
            {t("addEventButton")}
          </Button>
        </Flex>
      </Flex>

      <Divider />
    </Flex>
  );
};
