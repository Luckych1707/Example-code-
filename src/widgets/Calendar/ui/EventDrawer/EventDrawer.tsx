import { CloseOutlined } from "@ant-design/icons";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { EventEdit, EventInfo } from "@/features/Calendar";
import { CalendarMock } from "@/widgets/Calendar/model/mocks";
import { EventDrawerProps } from "@/widgets/Calendar/model/types";

export const EventDrawer = ({ selectedEventId, onClose }: EventDrawerProps) => {
  const { t } = useTranslation("p_calendar");

  const [eventVariant, setEventVariant] = useState<string | undefined>("info");

  const event = CalendarMock.filter((item) => item.id === selectedEventId)[0];

  return (
    <Drawer
      title={
        eventVariant === "edit"
          ? t("eventDrawer.editTitle")
          : t("eventDrawer.infoTitle")
      }
      width={480}
      open={!!selectedEventId}
      extra={<Button icon={<CloseOutlined />} type="text" onClick={onClose} />}
      closeIcon={false}
      maskClosable={false}
    >
      <EventInfo
        event={event}
        eventVariant={eventVariant}
        cityVariant={eventVariant}
        setEventVariant={(variant) => setEventVariant(variant)}
      />

      <EventEdit
        event={event}
        eventVariant={eventVariant}
        setEventVariant={(variant) => setEventVariant(variant)}
      />
    </Drawer>
  );
};
