import { CloseOutlined } from "@ant-design/icons";
import { useQuery } from "@tanstack/react-query";
import { Button, Drawer } from "antd";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { EventEdit, EventInfo } from "@/features/Calendar";
import { getEvent } from "@/widgets/Calendar/api/getEvents";
import { EventDrawerProps } from "@/widgets/Calendar/model/types";

export const EventDrawer = ({ selectedEventId, onClose }: EventDrawerProps) => {
  const { t } = useTranslation("p_calendar");

  const [eventVariant, setEventVariant] = useState<string | undefined>("info");

  const { data: event } = useQuery({
    ...getEvent.getQueryOptions(selectedEventId || ""),
    enabled: !!selectedEventId,
  });

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
        onClose={onClose}
      />

      <EventEdit
        event={event}
        eventVariant={eventVariant}
        setEventVariant={(variant) => setEventVariant(variant)}
        onClose={onClose}
      />
    </Drawer>
  );
};
